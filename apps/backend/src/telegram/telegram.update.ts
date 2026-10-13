import { Update, Start, Ctx, Action, On } from 'nestjs-telegraf';
import { Context } from 'telegraf';
import { AgenciesService } from '../agencies/agencies.service';
import {
  TelegramBookingService,
  SeatTakenError,
  ScheduleNotFoundError,
} from './telegram-booking.service';

// In-memory sessions: fine for a demo (lost on restart, single instance only).
interface Session {
  state?: 'AWAITING_ROUTE_QUERY' | 'AWAITING_PASSENGER_NAME' | 'AWAITING_PAYMENT';
  scheduleId?: string;
  seatNum?: number;
  passengerName?: string;
}
const sessions = new Map<number, Session>();

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const xaf = (n: number) => `${Math.round(n).toLocaleString('en-US')} XAF`;
type SeatLayoutItem = number | 'aisle' | 'mid_door';

const createSeatRows = (
  startSeat: number,
  rowCount: number,
  leftSeats: number,
  rightSeats: number,
): SeatLayoutItem[][] =>
  Array.from({ length: rowCount }, (_, rowIndex) => {
    const firstSeat = startSeat + rowIndex * (leftSeats + rightSeats);
    return [
      ...Array.from({ length: leftSeats }, (_, index) => firstSeat + index),
      'aisle',
      ...Array.from(
        { length: rightSeats },
        (_, index) => firstSeat + leftSeats + index,
      ),
    ];
  });

const getSeatLayout = (busType: string, totalSeats: number): SeatLayoutItem[][] => {
  let rows: SeatLayoutItem[][];
  let rowSeatCounts: [number, number];

  switch (busType) {
    case 'MINIBUS':
      rowSeatCounts = [1, 2];
      rows = [...createSeatRows(1, 5, 1, 2), [16, 17, 18, 19]];
      break;
    case 'COASTER':
      rowSeatCounts = [2, 1];
      rows = [...createSeatRows(1, 7, 2, 1), [22, 23, 24, 25, 26]];
      break;
    case 'ULTRA_VIP':
      rowSeatCounts = [2, 1];
      rows = [
        ...createSeatRows(1, 6, 2, 1),
        ['mid_door'],
        ...createSeatRows(19, 4, 2, 1),
      ];
      break;
    case 'CLASSIC_3X2':
      rowSeatCounts = [2, 3];
      rows = [
        ...createSeatRows(1, 5, 2, 3),
        ['mid_door'],
        ...createSeatRows(26, 6, 2, 3),
        [56, 57, 58, 59, 60, 61],
      ];
      break;
    case 'VIP_2X2':
    default:
      rowSeatCounts = [2, 2];
      rows = [
        ...createSeatRows(1, 5, 2, 2),
        ['mid_door'],
        ...createSeatRows(21, 6, 2, 2),
        [45, 46, 47, 48, 49],
      ];
      break;
  }

  const highestMappedSeat = Math.max(
    0,
    ...rows.flatMap((row) => row.filter((item): item is number => typeof item === 'number')),
  );
  for (let nextSeat = highestMappedSeat + 1; nextSeat <= totalSeats; ) {
    const row: SeatLayoutItem[] = [];
    for (let index = 0; index < rowSeatCounts[0] && nextSeat <= totalSeats; index++) {
      row.push(nextSeat++);
    }
    row.push('aisle');
    for (let index = 0; index < rowSeatCounts[1] && nextSeat <= totalSeats; index++) {
      row.push(nextSeat++);
    }
    rows.push(row);
  }

  return rows
    .map((row) => row.filter((item) => item === 'aisle' || item === 'mid_door' || item <= totalSeats))
    .filter((row) => row.some((item) => item !== 'aisle' && item !== 'mid_door'));
};

@Update()
export class TelegramUpdate {
  constructor(
    private readonly agenciesService: AgenciesService,
    private readonly booking: TelegramBookingService,
  ) {}

  // 1. Welcome menu (/start)
  @Start()
  async onStart(@Ctx() ctx: Context) {
    const userId = ctx.from?.id;
    if (userId) sessions.delete(userId);

    await ctx.reply(
      'Welcome to CAMEWEGO! 🚌\nFind and book travel buses across top agencies easily.\n\nHow would you like to proceed?',
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: '🏢 Select Agency', callback_data: 'flow_select_agency' }],
            [{ text: '🔍 Search Routes', callback_data: 'flow_search_routes' }],
          ],
        },
      },
    );
  }

  // 2. Flow 1: select agency
  @Action('flow_select_agency')
  async handleFlowSelectAgency(@Ctx() ctx: Context) {
    await ctx.answerCbQuery();
    const agencies = await this.agenciesService.getActiveAgencies();

    if (!agencies || agencies.length === 0) {
      await ctx.reply('No travel agencies registered at the moment.');
      return;
    }

    const agencyButtons = agencies.map((agency) => [
      {
        text: `${agency.name} (${agency.hqLocation})`,
        callback_data: `agency_select_${agency.id}`,
      },
    ]);

    await ctx.reply('Select an Agency:', { reply_markup: { inline_keyboard: agencyButtons } });
  }

  // 3. Flow 1 (step 2): agency selected -> trips
  @Action(/^agency_select_(.+)$/)
  async handleAgencySelected(@Ctx() ctx: Context) {
    await ctx.answerCbQuery();
    const agencyId = (ctx as any).match[1];

    const schedules = await this.agenciesService.getAgencySchedules(agencyId);

    if (!schedules || schedules.length === 0) {
      await ctx.reply('No active route schedules available for this agency today.');
      return;
    }

    let messageText = `📍 Available routes for this agency today:\n\n`;
    const scheduleButtons = schedules.map((schedule, idx) => {
      const seatsLeft = schedule.totalSeats - schedule.bookedSeats;
      messageText += `${idx + 1}️⃣ ${schedule.origin} ➔ ${schedule.destination} | ${schedule.departureTime} (${schedule.busType}) - ${schedule.pricePerSeat} XAF [${seatsLeft} seats left]\n`;
      return [
        {
          text: `Book Option ${idx + 1} (${schedule.origin} ➔ ${schedule.destination})`,
          callback_data: `book_schedule_${schedule.id}`,
        },
      ];
    });

    await ctx.reply(messageText, { reply_markup: { inline_keyboard: scheduleButtons } });
  }

  // 4. Flow 2: quick route search prompt
  @Action('flow_search_routes')
  async handleFlowSearchRoutes(@Ctx() ctx: Context) {
    await ctx.answerCbQuery();
    const userId = ctx.from?.id;
    if (userId) sessions.set(userId, { state: 'AWAITING_ROUTE_QUERY' });

    await ctx.reply(
      '📍 Enter Origin & Destination\n\nExample: Type "Douala to Yaounde" or "Yaounde to Bafoussam"',
    );
  }

  // 5. Text input: route search OR passenger name, depending on session state
  @On('text')
  async handleTextMessage(@Ctx() ctx: Context) {
    const userId = ctx.from?.id;
    const text = (ctx.message as any)?.text?.trim();
    if (!userId || !text) return;

    const session = sessions.get(userId);

    // --- Passenger name step ---
    if (session?.state === 'AWAITING_PASSENGER_NAME' && session.scheduleId && session.seatNum) {
      if (text.length < 2 || text.length > 60) {
        await ctx.reply('⚠️ Please enter the passenger\'s full name (2-60 characters).');
        return;
      }
      const schedule = await this.booking.getSchedule(session.scheduleId);
      if (!schedule) {
        sessions.delete(userId);
        await ctx.reply('That trip is no longer available. Send /start to begin again.');
        return;
      }

      session.passengerName = text;
      session.state = 'AWAITING_PAYMENT';

      await ctx.reply(
        [
          '🧾 <b>Booking summary</b>',
          '',
          `Agency: ${esc(schedule.agency.name)}`,
          `Route: ${esc(schedule.origin)} ➔ ${esc(schedule.destination)}`,
          `Departure: ${esc(String(schedule.departureTime))}`,
          `Seat: #${session.seatNum}`,
          `Passenger: ${esc(text)}`,
          `Total: <b>${xaf(schedule.pricePerSeat)}</b>`,
        ].join('\n'),
        {
          parse_mode: 'HTML',
          reply_markup: {
            inline_keyboard: [
              [{ text: '💳 Pay (demo)', callback_data: 'pay_demo' }],
              [{ text: '✖️ Cancel', callback_data: 'cancel_booking' }],
            ],
          },
        },
      );
      return;
    }

    // --- Route search step ---
    if (session?.state === 'AWAITING_ROUTE_QUERY') {
      sessions.delete(userId);

      const parts = text.toLowerCase().split(/\s+(?:to|-|->|➔)\s+/);
      if (parts.length < 2) {
        await ctx.reply(
          '⚠️ Invalid format. Please enter route as "Origin to Destination" (e.g., Douala to Yaounde).',
        );
        return;
      }

      const origin = parts[0].trim();
      const destination = parts[1].trim();

      const agencies = await this.agenciesService.getActiveAgencies();
      const matches: any[] = [];

      for (const agency of agencies) {
        const schedules = await this.agenciesService.getAgencySchedules(agency.id);
        schedules
          .filter(
            (s) =>
              s.origin.toLowerCase().includes(origin) &&
              s.destination.toLowerCase().includes(destination),
          )
          .forEach((s) => matches.push({ ...s, agencyName: agency.name }));
      }

      if (matches.length === 0) {
        await ctx.reply(
          `No available buses found for route: ${text}. Try searching another route or tap /start to pick an agency directly.`,
        );
        return;
      }

      let summaryText = `📍 Available buses for ${origin.toUpperCase()} ➔ ${destination.toUpperCase()} today:\n\n`;
      const optionButtons: any[] = [];

      matches.forEach((sch, idx) => {
        const seatsLeft = sch.totalSeats - sch.bookedSeats;
        summaryText += `${idx + 1}️⃣ ${sch.agencyName} - ${sch.departureTime} (${sch.busType}) - ${sch.pricePerSeat} XAF [${seatsLeft} seats left]\n`;
        optionButtons.push([
          {
            text: `Reply ${idx + 1} (Select ${sch.agencyName})`,
            callback_data: `book_schedule_${sch.id}`,
          },
        ]);
      });

      await ctx.reply(summaryText, { reply_markup: { inline_keyboard: optionButtons } });
      return;
    }

    await ctx.reply('Send /start to bring up the CAMEWEGO main menu.');
  }

  // 6. Schedule selected -> seat map
  @Action(/^book_schedule_(.+)$/)
  async handleScheduleSelected(@Ctx() ctx: Context) {
    await ctx.answerCbQuery();
    const scheduleId = (ctx as any).match[1];
    await this.renderBusLayout(ctx, scheduleId, null);
  }

  // Keep seat positions aligned with the bus-specific layouts shown in the web inventory.
  async renderBusLayout(ctx: Context, scheduleId: string, selected: number | null) {
    const schedule = await this.booking.getSchedule(scheduleId);
    if (!schedule) {
      await ctx.reply('That trip is no longer available. Send /start to begin again.');
      return;
    }

    const booked = new Set(await this.booking.getBookedSeatNumbers(scheduleId));
    const total = schedule.totalSeats;
    const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

    const keyboard: any[] = [
      [
        { text: '🚘 Driver', callback_data: 'noop' },
        { text: '🚪 Door', callback_data: 'noop' },
      ],
    ];

    for (const layoutRow of getSeatLayout(String(schedule.busType), total)) {
      if (layoutRow[0] === 'mid_door') {
        keyboard.push([{ text: '🚪 Mid Exit / Boarding Door', callback_data: 'noop' }]);
        continue;
      }

      keyboard.push(
        layoutRow.map((item) => {
          if (item === 'aisle') return { text: '·', callback_data: 'noop' };
          if (item === 'mid_door') {
            return { text: '🚪 Mid Exit / Boarding Door', callback_data: 'noop' };
          }
          if (booked.has(item)) {
            return { text: `🔴 ${pad(item)}`, callback_data: 'seat_taken' };
          }
          if (selected === item) {
            return {
              text: `✅ ${pad(item)}`,
              callback_data: `select_seat_${scheduleId}_${item}`,
            };
          }
          return {
            text: `💺 ${pad(item)}`,
            callback_data: `select_seat_${scheduleId}_${item}`,
          };
        }),
      );
    }

    if (selected) {
      keyboard.push([
        {
          text: `🟢 Confirm Seat #${selected} & Proceed`,
          callback_data: `confirm_seat_${scheduleId}_${selected}`,
        },
      ]);
    }
    keyboard.push([{ text: '✖️ Cancel', callback_data: 'cancel_booking' }]);

    const header = `<b>${esc(schedule.origin)} ➔ ${esc(schedule.destination)}</b> · ${esc(String(schedule.departureTime))}`;
    const caption = selected
      ? `🚌 ${header}\n\nYou selected <b>Seat #${selected}</b>.\nTap "Confirm" below or choose a different seat.`
      : `🚌 ${header}\n\n💺 = Available | 🔴 = Occupied | ✅ = Selected\n\nTap an available seat to select it:`;

    const options = { parse_mode: 'HTML' as const, reply_markup: { inline_keyboard: keyboard } };

    try {
      await ctx.editMessageText(caption, options);
    } catch (err: any) {
      if (String(err?.description ?? err?.message).includes('message is not modified')) return;
      await ctx.reply(caption, options);
    }
  }

  // 7. Seat tap
  @Action(/^select_seat_(.+)_(\d+)$/)
  async handleSeatTap(@Ctx() ctx: Context) {
    await ctx.answerCbQuery();
    const match = (ctx as any).match;
    const scheduleId = match[1];
    const seatNum = parseInt(match[2], 10);

    const userId = ctx.from?.id;
    if (userId) sessions.set(userId, { scheduleId, seatNum });

    await this.renderBusLayout(ctx, scheduleId, seatNum);
  }

  @Action('seat_taken')
  async handleSeatTaken(@Ctx() ctx: Context) {
    await ctx.answerCbQuery('⚠️ This seat is already booked! Please select an available seat (💺).', {
      show_alert: true,
    });
  }

  @Action('noop')
  async handleNoop(@Ctx() ctx: Context) {
    await ctx.answerCbQuery();
  }

  // 8. Confirm seat -> ask for passenger name
  @Action(/^confirm_seat_(.+)_(\d+)$/)
  async handleConfirmSeat(@Ctx() ctx: Context) {
    const match = (ctx as any).match;
    const scheduleId = match[1];
    const seatNum = parseInt(match[2], 10);
    const userId = ctx.from?.id;

    // Re-check: someone may have taken the seat while this user was browsing.
    const booked = await this.booking.getBookedSeatNumbers(scheduleId);
    if (booked.includes(seatNum)) {
      await ctx.answerCbQuery('⚠️ Sorry, that seat was just taken. Please pick another.', { show_alert: true });
      await this.renderBusLayout(ctx, scheduleId, null);
      return;
    }

    await ctx.answerCbQuery();
    if (userId) sessions.set(userId, { state: 'AWAITING_PASSENGER_NAME', scheduleId, seatNum });

    await ctx.reply(`Seat <b>#${seatNum}</b> selected.\n\nPlease enter the passenger's full name:`, {
      parse_mode: 'HTML',
    });
  }

  // 9. Demo payment -> create ticket -> send QR
  @Action('pay_demo')
  async handlePayDemo(@Ctx() ctx: Context) {
    await ctx.answerCbQuery();
    const userId = ctx.from?.id;
    const session = userId ? sessions.get(userId) : undefined;

    if (
      !userId ||
      !session ||
      session.state !== 'AWAITING_PAYMENT' ||
      !session.scheduleId ||
      !session.seatNum ||
      !session.passengerName
    ) {
      await ctx.reply('Your session expired. Send /start to begin again.');
      return;
    }

    // Remove the buttons so a double tap can't create two tickets.
    sessions.delete(userId);
    try {
      await ctx.editMessageReplyMarkup(undefined);
    } catch {
      /* message may be unchanged or too old; harmless */
    }

    try {
      const { ticket, qr } = await this.booking.createTicket({
        scheduleId: session.scheduleId,
        seatNum: session.seatNum,
        telegramUserId: userId,
        passengerName: session.passengerName,
      });

      const s = ticket.schedule;
      await ctx.replyWithPhoto(
        { source: qr },
        {
          parse_mode: 'HTML',
          caption: [
            '🎫 <b>Your ticket is confirmed!</b>',
            '',
            `Ticket: <code>${ticket.ticketId}</code>`,
            `Agency: ${esc(s.agency.name)}`,
            `Route: ${esc(s.origin)} ➔ ${esc(s.destination)}`,
            `Departure: ${esc(String(s.departureTime))}`,
            `Seat: #${ticket.seatNo}`,
            `Passenger: ${esc(session.passengerName)}`,
            `Paid: ${xaf(ticket.amount)}`,
            '',
            'Show this QR code at the terminal to board. Send /start to book another.',
          ].join('\n'),
        },
      );
    } catch (err) {
      if (err instanceof SeatTakenError) {
        await ctx.reply('⚠️ Sorry, that seat was just taken by someone else. Please choose another seat.');
        await this.renderBusLayout(ctx, session.scheduleId, null);
        return;
      }
      if (err instanceof ScheduleNotFoundError) {
        await ctx.reply('That trip is no longer available. Send /start to begin again.');
        return;
      }
      throw err;
    }
  }

  @Action('cancel_booking')
  async handleCancel(@Ctx() ctx: Context) {
    await ctx.answerCbQuery();
    if (ctx.from?.id) sessions.delete(ctx.from.id);
    await ctx.reply('Booking cancelled. Send /start to begin again.');
  }
}