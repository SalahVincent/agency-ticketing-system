import { PrismaClient, BusType, ScheduleStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  const finexs = await prisma.agency.upsert({
    where: { agencyCode: 'FINEXS' },
    update: {},
    create: {
      name: 'Finexs Voyages',
      agencyCode: 'FINEXS',
      hqLocation: 'Douala (Akwa)',
      activeFleetCount: '45',
    },
  });

  const generalExpress = await prisma.agency.upsert({
    where: { agencyCode: 'GENEXP' },
    update: {},
    create: {
      name: 'General Express',
      agencyCode: 'GENEXP',
      hqLocation: 'Yaoundé (Biyem-Assi)',
      activeFleetCount: '60',
    },
  });

  // FIX: bot configs, in case getActiveAgencies() only returns agencies with an active bot config.
  // Upserted separately so it also works when the agencies already exist.
  await prisma.botConfig.upsert({
    where: { agencyId: finexs.id },
    update: {},
    create: {
      agencyId: finexs.id,
      botPhoneNumber: '+237600000001',
      welcomeMessage: 'Welcome to Finexs Voyages!',
    },
  });

  await prisma.botConfig.upsert({
    where: { agencyId: generalExpress.id },
    update: {},
    create: {
      agencyId: generalExpress.id,
      botPhoneNumber: '+237600000002',
      welcomeMessage: 'Welcome to General Express!',
    },
  });

  // FIX: only create schedules if the agency has none, so re-running the seed
  // never duplicates routes (tickets now point at these rows).
  const finexsSchedules = await prisma.routeSchedule.count({ where: { agencyId: finexs.id } });
  if (finexsSchedules === 0) {
    await prisma.routeSchedule.createMany({
      data: [
        {
          agencyId: finexs.id,
          origin: 'Douala',
          destination: 'Yaoundé',
          departureTime: '07:30 AM',
          busNumber: 'FIN-01',
          busName: 'VIP Clipper',
          busType: BusType.ULTRA_VIP,
          totalSeats: 30,
          pricePerSeat: 5000,
          status: ScheduleStatus.ON_TIME,
        },
        {
          agencyId: finexs.id,
          origin: 'Douala',
          destination: 'Yaoundé',
          departureTime: '11:00 AM',
          busNumber: 'FIN-02',
          busName: 'Express Liner',
          busType: BusType.VIP_2X2,
          totalSeats: 40,
          pricePerSeat: 4500,
          status: ScheduleStatus.ON_TIME,
        },
      ],
    });
  }

  const genexpSchedules = await prisma.routeSchedule.count({ where: { agencyId: generalExpress.id } });
  if (genexpSchedules === 0) {
    await prisma.routeSchedule.createMany({
      data: [
        {
          agencyId: generalExpress.id,
          origin: 'Yaoundé',
          destination: 'Bafoussam',
          departureTime: '08:00 AM',
          busNumber: 'GEN-10',
          busName: 'Royal Coach',
          busType: BusType.CLASSIC_3X2,
          totalSeats: 50,
          pricePerSeat: 3500,
          status: ScheduleStatus.ON_TIME,
        },
      ],
    });
  }

  const notificationCount = await prisma.notification.count({
    where: { agencyId: null, type: 'SYSTEM' },
  });

  if (notificationCount === 0) {
    await prisma.notification.createMany({
      data: [
        {
          agencyId: null,
          type: 'SYSTEM',
          title: 'Platform Maintenance Notice',
          description: 'Scheduled platform maintenance will occur tonight at 02:00 UTC.',
        },
        {
          agencyId: null,
          type: 'SYSTEM',
          title: 'New Driver Features Available',
          description: 'New dispatch and scan insights are now available for all partner agencies.',
        },
      ],
    });
  }

  console.log('✅ Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });