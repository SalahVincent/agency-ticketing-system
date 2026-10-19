"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { fetchApi } from "@/lib/api";

type BusType = "minibus" | "coaster" | "ultra_vip" | "vip_2x2" | "classic_3x2";

interface RouteSchedule {
  id: string;
  origin: string;
  destination: string;
  departureTime: string;
  busNumber: string;
  busName: string;
  busType: BusType;
  busTypeName: string;
  totalSeats: number;
  bookedSeats: number;
  pricePerSeat: number;
  status: "On Time" | "Boarding" | "Departed";
}

const formatDepartureTime = (value: string): string => {
  if (!value) return "—";

  const timeMatch = value.match(/^(\d{1,2}):(\d{2})(?::\d{2})?$/);
  if (!timeMatch) return value;

  const hour = Number(timeMatch[1]);
  const minute = timeMatch[2];
  const suffix = hour >= 12 ? "PM" : "AM";
  const normalizedHour = hour % 12 === 0 ? 12 : hour % 12;

  return `${normalizedHour}:${minute} ${suffix}`;
};

const normalizeSchedule = (item: any): RouteSchedule => {
  const busTypeMap: Record<string, BusType> = {
    MINIBUS: "minibus",
    COASTER: "coaster",
    ULTRA_VIP: "ultra_vip",
    VIP_2X2: "vip_2x2",
    CLASSIC_3X2: "classic_3x2",
  };

  const busType = busTypeMap[String(item.busType)] ?? "vip_2x2";
  const busTypeNameMap: Record<BusType, string> = {
    minibus: "Express Van (19 Seats)",
    coaster: "Coaster Midibus (26 Seats)",
    ultra_vip: "Ultra-VIP Coach (2x1 Layout)",
    vip_2x2: "Standard VIP Coach (2x2 Layout)",
    classic_3x2: "High-Capacity Coach (3x2 Layout)",
  };

  const statusMap: Record<string, RouteSchedule["status"]> = {
    ON_TIME: "On Time",
    BOARDING: "Boarding",
    DEPARTED: "Departed",
  };

  return {
    id: item.id,
    origin: item.origin,
    destination: item.destination,
    departureTime: formatDepartureTime(item.departureTime),
    busNumber: item.busNumber ?? "—",
    busName: item.busName ?? "Unnamed Route",
    busType,
    busTypeName: busTypeNameMap[busType],
    totalSeats: Number(item.totalSeats ?? 0),
    bookedSeats: Number(item.bookedSeats ?? 0),
    pricePerSeat: Number(item.pricePerSeat ?? 0),
    status: statusMap[String(item.status)] ?? "On Time",
  };
};

interface ClientProfile {
  id: string;
  name: string;
  phone: string;
  companyName?: string;
}

interface BotRule {
  id: string;
  keyword: string;
  responseType: "auto_reply" | "seat_reservation" | "schedule_lookup";
  replyTemplate: string;
  isActive: boolean;
}

export default function InventoryPage() {
  const { getToken, isLoaded, isSignedIn } = useAuth();
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);
  const [showPreBookModal, setShowPreBookModal] = useState<boolean>(false);
  const [showCreateSessionModal, setShowCreateSessionModal] =
    useState<boolean>(false);
  const [selectedSeat, setSelectedSeat] = useState<number | null>(null);

  const [stationAccount] = useState({
    agencyName: "General Express Voyage",
    stationBranch: "Yaoundé Central Terminal (Mvan)",
    accountId: "CMW-YDE-001",
  });

  const [activeTab, setActiveTab] = useState<"inventory" | "bot_creator">(
    "inventory",
  );

  const [selectedClientId, setSelectedClientId] = useState<string>("");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");

  const [schedules, setSchedules] = useState<RouteSchedule[]>([]);
  const [currentBookedSeatNumbers, setCurrentBookedSeatNumbers] = useState<
    number[]
  >([]);
  const [inventoryError, setInventoryError] = useState("");

  useEffect(() => {
    if (!isLoaded || !isSignedIn) return;

    const loadSchedules = async () => {
      try {
        const response = await fetchApi<any[]>("/agencies/schedules", getToken);
        const normalized = response.map(normalizeSchedule);
        setSchedules(normalized);
        if (normalized.length > 0) {
          setSelectedRoute((current) => current ?? normalized[0].id);
        }
      } catch (error) {
        console.error("Failed to load inventory schedules", error);
        setInventoryError(
          error instanceof Error
            ? error.message
            : "Unable to load live route inventory.",
        );
      }
    };

    loadSchedules();
  }, [getToken, isLoaded, isSignedIn]);

  useEffect(() => {
    if (!selectedRoute) {
      setCurrentBookedSeatNumbers([]);
      return;
    }

    if (!isLoaded || !isSignedIn) return;

    const loadBookedSeats = async () => {
      try {
        const bookedSeats = await fetchApi<number[]>(
          `/agencies/schedules/${selectedRoute}/booked-seats`,
          getToken,
        );
        setCurrentBookedSeatNumbers(bookedSeats.map((seat) => Number(seat)));
      } catch (error) {
        console.error("Failed to load booked seat numbers", error);
        setInventoryError(
          error instanceof Error
            ? error.message
            : "Unable to load booked seats.",
        );
        setCurrentBookedSeatNumbers([]);
      }
    };

    loadBookedSeats();
  }, [getToken, isLoaded, isSignedIn, selectedRoute]);

  const [newOrigin, setNewOrigin] = useState("Yaoundé");
  const [newDestination, setNewDestination] = useState("Douala");
  const [newDepartureTime, setNewDepartureTime] = useState("08:00 AM");
  const [newBusNumber, setNewBusNumber] = useState("");
  const [newBusName, setNewBusName] = useState("");
  const [newBusType, setNewBusType] = useState<BusType>("vip_2x2");
  const [newPrice, setNewPrice] = useState("6000");

  const [botPhoneNumber, setBotPhoneNumber] = useState("+237 670 000 111");
  const [botStatus, setBotStatus] = useState<"active" | "paused" | "offline">(
    "active",
  );
  const [welcomeMessage, setWelcomeMessage] = useState(
    "Hello! Welcome to CAMEWEGO Booking Bot for Yaoundé Station. Reply with 1 for schedules, 2 to reserve a seat, or 3 for assistance.",
  );

  const [botRules, setBotRules] = useState<BotRule[]>([
    {
      id: "RULE-01",
      keyword: "1, schedule, routes",
      responseType: "schedule_lookup",
      replyTemplate:
        "Today's departures from Yaoundé:\n- Yaoundé ➔ Douala (10:30 AM)\n- Yaoundé ➔ Bafoussam (01:00 PM)",
      isActive: true,
    },
    {
      id: "RULE-02",
      keyword: "2, book, reserve",
      responseType: "seat_reservation",
      replyTemplate:
        "To reserve a seat, send your Full Name, preferred Destination, and Departure Time.",
      isActive: true,
    },
  ]);

  const [newKeyword, setNewKeyword] = useState("");
  const [newResponseType, setNewResponseType] = useState<
    "auto_reply" | "seat_reservation" | "schedule_lookup"
  >("auto_reply");
  const [newReplyTemplate, setNewReplyTemplate] = useState("");

  const [simulatedMessage, setSimulatedMessage] = useState("");
  const [chatLog, setChatLog] = useState<
    { sender: "user" | "bot"; text: string }[]
  >([{ sender: "bot", text: welcomeMessage }]);

  const agencyClients: ClientProfile[] = [
    {
      id: "CLI-01",
      name: "Paul Atanga",
      phone: "+237 670 112 233",
      companyName: "Acapella Logistics",
    },
    { id: "CLI-02", name: "Grace Manga", phone: "+237 699 445 566" },
    {
      id: "CLI-03",
      name: "Dr. Samuel Ngu",
      phone: "+237 655 889 900",
      companyName: "Ngu Medical Center",
    },
  ];

  const currentBus: RouteSchedule = schedules.find(
    (s) => s.id === selectedRoute,
  ) ||
    schedules[0] || {
      id: "",
      origin: "",
      destination: "",
      departureTime: "",
      busNumber: "",
      busName: "No active route",
      busType: "vip_2x2",
      busTypeName: "Standard VIP Coach (2x2 Layout)",
      totalSeats: 0,
      bookedSeats: 0,
      pricePerSeat: 0,
      status: "On Time",
    };

  const getBusDetails = (type: BusType): { name: string; capacity: number } => {
    switch (type) {
      case "minibus":
        return { name: "Express Van (19 Seats)", capacity: 19 };
      case "coaster":
        return { name: "Coaster Midibus (26 Seats)", capacity: 26 };
      case "ultra_vip":
        return { name: "Ultra-VIP Coach (2x1 Layout)", capacity: 30 };
      case "vip_2x2":
        return { name: "Standard VIP Coach (2x2 Layout)", capacity: 49 };
      case "classic_3x2":
        return { name: "High-Capacity Coach (3x2 Layout)", capacity: 61 };
    }
  };

  const handleCreateSession = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBusNumber || !newBusName) return;

    try {
      const busDetails = getBusDetails(newBusType);
      const payload = {
        origin: newOrigin,
        destination: newDestination,
        departureTime: newDepartureTime,
        busNumber: newBusNumber,
        busName: newBusName,
        busType: newBusType,
        pricePerSeat: Number(newPrice) || 5000,
        totalSeats: busDetails.capacity,
      };

      const createdSchedule = await fetchApi<any>(
        "/agencies/schedules",
        getToken,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const refreshedSchedules = await fetchApi<any[]>(
        "/agencies/schedules",
        getToken,
      );
      const nextSchedules = refreshedSchedules.map(normalizeSchedule);
      setSchedules(nextSchedules);
      const resolvedRouteId =
        createdSchedule?.id ?? nextSchedules[0]?.id ?? null;
      setSelectedRoute(resolvedRouteId);
      setShowCreateSessionModal(false);
      setNewBusNumber("");
      setNewBusName("");
      setInventoryError("");
    } catch (error) {
      console.error("Failed to create schedule", error);
      setInventoryError(
        error instanceof Error
          ? error.message
          : "Unable to create the travel session.",
      );
    }
  };

  const handleSelectClientOption = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const val = e.target.value;
    setSelectedClientId(val);

    if (val === "NEW") {
      setClientName("");
      setClientPhone("");
    } else {
      const found = agencyClients.find((c) => c.id === val);
      if (found) {
        setClientName(found.name);
        setClientPhone(found.phone);
      }
    }
  };

  const handleSeatClick = (seatNum: number) => {
    setSelectedSeat(seatNum);
    setShowPreBookModal(true);
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !selectedSeat) return;

    alert(
      `Pre-Booking Reserved for Client!\n\nClient Name: ${clientName}\nPhone: ${clientPhone}\nBus Name: "${currentBus.busName}" (${currentBus.busNumber})\nSeat: #${selectedSeat}\nRoute: ${currentBus.origin} ➔ ${currentBus.destination}\nStation: ${stationAccount.stationBranch}\n\nE-Ticket dispatched via WhatsApp.`,
    );

    setShowPreBookModal(false);
    setSelectedClientId("");
    setClientName("");
    setClientPhone("");
    setSelectedSeat(null);
  };

  const handleAddRule = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKeyword || !newReplyTemplate) return;

    const newRule: BotRule = {
      id: `RULE-0${botRules.length + 1}`,
      keyword: newKeyword,
      responseType: newResponseType,
      replyTemplate: newReplyTemplate,
      isActive: true,
    };

    setBotRules([...botRules, newRule]);
    setNewKeyword("");
    setNewReplyTemplate("");
  };

  const toggleRuleActive = (id: string) => {
    setBotRules((prev) =>
      prev.map((rule) =>
        rule.id === id ? { ...rule, isActive: !rule.isActive } : rule,
      ),
    );
  };

  const handleDeleteRule = (id: string) => {
    setBotRules((prev) => prev.filter((rule) => rule.id !== id));
  };

  const handleSendSimulatedMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!simulatedMessage.trim()) return;

    const userText = simulatedMessage.trim();
    const newLogs = [...chatLog, { sender: "user" as const, text: userText }];

    const matchedRule = botRules.find(
      (rule) =>
        rule.isActive &&
        rule.keyword
          .toLowerCase()
          .split(",")
          .some((k) => userText.toLowerCase().includes(k.trim())),
    );

    let reply =
      "Sorry, I didn't quite catch that. Reply with '1' for schedules or '2' for seat booking.";
    if (matchedRule) {
      reply = matchedRule.replyTemplate;
    }

    setTimeout(() => {
      setChatLog([...newLogs, { sender: "bot", text: reply }]);
    }, 400);

    setSimulatedMessage("");
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 text-[#1a1c1c] pb-12">
      <div className="max-w-360 mx-auto px-3 sm:px-6 py-4 sm:py-6 space-y-4 sm:space-y-6">
        {/* Responsive Station Branding Banner */}
        <div className="bg-emerald-900 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] sm:text-xs font-bold text-emerald-300 uppercase tracking-widest">
                  Station Account
                </span>
                <span className="text-[9px] sm:text-[10px] bg-emerald-800 text-emerald-200 px-2 py-0.5 rounded-full font-mono">
                  {stationAccount.accountId}
                </span>
              </div>
              <h2 className="text-lg sm:text-2xl font-bold tracking-tight truncate">
                {stationAccount.agencyName}
              </h2>
              <p className="text-xs text-emerald-200/80 mt-0.5 truncate">
                {stationAccount.stationBranch}
              </p>
            </div>
          </div>

          {/* Full-width on mobile tab switcher */}
          <div className="flex items-center gap-1 sm:gap-2 bg-emerald-950/60 p-1 rounded-full w-full md:w-auto border border-emerald-800/50">
            <button
              type="button"
              onClick={() => setActiveTab("inventory")}
              className={`flex-1 md:flex-initial text-center px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                activeTab === "inventory"
                  ? "bg-emerald-400 text-emerald-950 shadow-md font-bold"
                  : "text-emerald-100 hover:text-white"
              }`}
            >
              Dispatch & Seats
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("bot_creator")}
              className={`flex-1 md:flex-initial text-center px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === "bot_creator"
                  ? "bg-emerald-400 text-emerald-950 shadow-md font-bold"
                  : "text-emerald-100 hover:text-white"
              }`}
            >
              <span className="material-symbols-outlined text-base">
                smart_toy
              </span>
              <span>WhatsApp Bot</span>
            </button>
          </div>
        </div>

        {/* TAB 1: INVENTORY & SEAT RESERVATION */}
        {activeTab === "inventory" && (
          <>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-[#1a1c1c]">
                  Active Travel Sessions
                </h1>
                <p className="text-xs text-[#7e7576]">
                  Select a scheduled bus or launch a new session.
                </p>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <button
                  type="button"
                  onClick={() => setShowCreateSessionModal(true)}
                  className="flex-1 sm:flex-initial bg-emerald-600 text-white text-xs sm:text-sm font-semibold px-3.5 sm:px-4 py-2.5 rounded-full hover:bg-emerald-700 active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span className="material-symbols-outlined text-base">
                    add_circle
                  </span>
                  <span>New Session</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowPreBookModal(true)}
                  className="flex-1 sm:flex-initial bg-black text-white text-xs sm:text-sm font-semibold px-3.5 sm:px-4 py-2.5 rounded-full hover:scale-[1.02] active:scale-95 transition-transform flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span className="material-symbols-outlined text-base">
                    person_add
                  </span>
                  <span>Book Client</span>
                </button>
              </div>
            </div>

            {/* Responsive Routes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
              {inventoryError ? (
                <div className="sm:col-span-2 lg:col-span-3 xl:col-span-4 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                  {inventoryError}
                </div>
              ) : schedules.length === 0 ? (
                <div className="sm:col-span-2 lg:col-span-3 xl:col-span-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-[#4c4546]">
                  No live route schedules available right now.
                </div>
              ) : (
                schedules.map((item) => {
                  const isSelected = item.id === selectedRoute;
                  const available = item.totalSeats - item.bookedSeats;

                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedRoute(item.id)}
                      className={`backdrop-blur-xl border rounded-2xl sm:rounded-3xl p-4 sm:p-5 cursor-pointer transition-all ${
                        isSelected
                          ? "bg-black text-white border-black shadow-lg scale-[1.01]"
                          : "bg-white border-slate-200/80 hover:bg-slate-50 text-[#1a1c1c]"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2 gap-2">
                        <div className="min-w-0">
                          <span className="text-[9px] uppercase font-bold text-emerald-500 tracking-wider">
                            Bus Name
                          </span>
                          <h4
                            className={`text-sm sm:text-base font-extrabold truncate ${isSelected ? "text-emerald-400" : "text-[#1a1c1c]"}`}
                          >
                            "{item.busName}"
                          </h4>
                        </div>
                        <span
                          className={`shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full ${isSelected ? "bg-white/20 text-white" : "bg-black/5 text-[#4c4546]"}`}
                        >
                          {item.busNumber}
                        </span>
                      </div>

                      <div className="mb-3 pt-1 border-t border-gray-100/10">
                        <h3 className="text-sm sm:text-base font-bold flex items-center gap-1">
                          <span>{item.origin}</span>
                          <span className="material-symbols-outlined text-xs">
                            arrow_forward
                          </span>
                          <span>{item.destination}</span>
                        </h3>
                        <div className="flex justify-between items-center mt-1">
                          <p
                            className={`text-xs ${isSelected ? "text-gray-300" : "text-[#7e7576]"}`}
                          >
                            Dep:{" "}
                            <span className="font-semibold">
                              {item.departureTime}
                            </span>
                          </p>
                          <span
                            className={`text-xs font-bold ${isSelected ? "text-emerald-400" : "text-emerald-700"}`}
                          >
                            {item.pricePerSeat} FCFA
                          </span>
                        </div>
                        <span
                          className={`inline-block text-[10px] font-semibold mt-2 px-2 py-0.5 rounded truncate max-w-full ${isSelected ? "bg-white/10 text-emerald-300" : "bg-emerald-50 text-emerald-800"}`}
                        >
                          {item.busTypeName}
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex justify-between text-[11px] font-medium">
                          <span>{available} left</span>
                          <span>
                            {item.bookedSeats}/{item.totalSeats} Booked
                          </span>
                        </div>
                        <div
                          className={`w-full h-1.5 sm:h-2 rounded-full overflow-hidden ${isSelected ? "bg-white/20" : "bg-gray-200"}`}
                        >
                          <div
                            className={`h-full ${isSelected ? "bg-emerald-400" : "bg-black"}`}
                            style={{
                              width: `${item.totalSeats ? (item.bookedSeats / item.totalSeats) * 100 : 0}%`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Responsive Bus Layout Map Canvas */}
            <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-3">
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-[#1a1c1c] flex items-center gap-2 flex-wrap">
                    <span>"{currentBus.busName}"</span>
                    <span className="text-xs font-normal text-gray-500">
                      ({currentBus.busNumber})
                    </span>
                  </h2>
                  <p className="text-xs text-[#7e7576]">
                    {currentBus.origin} ➔ {currentBus.destination} •{" "}
                    {currentBus.busTypeName} ({currentBus.totalSeats} Capacity)
                  </p>
                </div>

                <div className="flex items-center gap-3 text-xs font-semibold">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded bg-emerald-500" />
                    <span>Available</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded bg-gray-300" />
                    <span>Booked</span>
                  </div>
                </div>
              </div>

              {/* Scroll Container with Responsive Padding */}
              <div className="w-full overflow-x-auto pb-4 pt-2 flex justify-start md:justify-center touch-pan-x">
                <div className="min-w-70 sm:min-w-85 px-2">
                  <BusSeatLayout
                    busType={currentBus.busType}
                    totalSeats={currentBus.totalSeats}
                    bookedSeatNumbers={currentBookedSeatNumbers}
                    onSeatClick={handleSeatClick}
                  />
                </div>
              </div>
            </div>
          </>
        )}

        {/* TAB 2: WHATSAPP BOT CREATOR */}
        {activeTab === "bot_creator" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-4">
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-[#1a1c1c] flex items-center gap-2 flex-wrap">
                      <span>WhatsApp Bot — {stationAccount.stationBranch}</span>
                      <span className="text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                        {botStatus.toUpperCase()}
                      </span>
                    </h2>
                    <p className="text-xs text-[#7e7576]">
                      Auto-responder instance for this station
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setBotStatus(botStatus === "active" ? "paused" : "active")
                    }
                    className={`self-start sm:self-auto text-xs font-bold px-3.5 py-1.5 rounded-full cursor-pointer transition-colors ${
                      botStatus === "active"
                        ? "bg-amber-100 text-amber-800 hover:bg-amber-200"
                        : "bg-emerald-600 text-white hover:bg-emerald-700"
                    }`}
                  >
                    {botStatus === "active" ? "Pause Bot" : "Activate Bot"}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
                  <div>
                    <label className="text-[11px] font-semibold text-[#7e7576] uppercase">
                      Bot Phone / ID
                    </label>
                    <input
                      type="text"
                      value={botPhoneNumber}
                      onChange={(e) => setBotPhoneNumber(e.target.value)}
                      className="w-full mt-1 bg-slate-50 border border-slate-200 text-xs sm:text-sm rounded-xl px-3.5 py-2 focus:ring-2 focus:ring-black outline-none font-medium"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-[#7e7576] uppercase">
                      Connected Gateway
                    </label>
                    <div className="w-full mt-1 bg-gray-100 text-xs sm:text-sm font-semibold rounded-xl px-3.5 py-2 text-[#1a1c1c] flex items-center justify-between">
                      <span>Meta Cloud API</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-[#7e7576] uppercase">
                    Welcome Greeting
                  </label>
                  <textarea
                    rows={2}
                    value={welcomeMessage}
                    onChange={(e) => setWelcomeMessage(e.target.value)}
                    className="w-full mt-1 bg-slate-50 border border-slate-200 text-xs sm:text-sm rounded-xl px-3.5 py-2 focus:ring-2 focus:ring-black outline-none font-medium resize-none"
                  />
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm space-y-4 sm:space-y-6">
                <h3 className="text-sm sm:text-base font-bold text-[#1a1c1c]">
                  Response Flow Rules
                </h3>

                <form
                  onSubmit={handleAddRule}
                  className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 sm:p-4 space-y-3"
                >
                  <div className="text-xs font-bold text-[#1a1c1c] uppercase tracking-wider">
                    + Add Trigger Rule
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-semibold text-[#7e7576]">
                        Trigger Keywords
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. price, cost"
                        value={newKeyword}
                        onChange={(e) => setNewKeyword(e.target.value)}
                        className="w-full mt-1 bg-white border border-slate-200 text-xs sm:text-sm rounded-xl px-3 py-2 focus:ring-2 focus:ring-black outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-[#7e7576]">
                        Action Type
                      </label>
                      <select
                        value={newResponseType}
                        onChange={(e) =>
                          setNewResponseType(e.target.value as any)
                        }
                        className="w-full mt-1 bg-white border border-slate-200 text-xs sm:text-sm rounded-xl px-3 py-2 focus:ring-2 focus:ring-black outline-none font-medium"
                      >
                        <option value="auto_reply">Static Auto-Reply</option>
                        <option value="schedule_lookup">
                          Live Schedule Lookup
                        </option>
                        <option value="seat_reservation">
                          Trigger Seat Reservation Flow
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#7e7576]">
                      Message Body
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Response template..."
                      value={newReplyTemplate}
                      onChange={(e) => setNewReplyTemplate(e.target.value)}
                      className="w-full mt-1 bg-white border border-slate-200 text-xs sm:text-sm rounded-xl px-3 py-2 focus:ring-2 focus:ring-black outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-black text-white text-xs font-semibold px-4 py-2 rounded-full hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-sm"
                  >
                    Save Rule
                  </button>
                </form>

                <div className="space-y-2.5">
                  <div className="text-xs font-bold text-[#7e7576] uppercase">
                    Rules ({botRules.length})
                  </div>
                  {botRules.map((rule) => (
                    <div
                      key={rule.id}
                      className="bg-slate-50 border border-slate-200/80 p-3 sm:p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-bold px-2 py-0.5 rounded bg-black/5 text-[#1a1c1c]">
                            {rule.keyword}
                          </span>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                            {rule.responseType.replace("_", " ").toUpperCase()}
                          </span>
                        </div>
                        <p className="text-xs text-[#4c4546] font-medium whitespace-pre-line pt-1">
                          "{rule.replyTemplate}"
                        </p>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                        <button
                          type="button"
                          onClick={() => toggleRuleActive(rule.id)}
                          className={`text-xs font-bold px-2.5 py-1 rounded-full cursor-pointer transition-colors ${
                            rule.isActive
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-gray-200 text-gray-600"
                          }`}
                        >
                          {rule.isActive ? "Active" : "Disabled"}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteRule(rule.id)}
                          className="text-gray-400 hover:text-red-600 cursor-pointer transition-colors p-1"
                        >
                          <span className="material-symbols-outlined text-base">
                            delete
                          </span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Chat Simulator */}
            <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm flex flex-col justify-between h-120 sm:h-145">
              <div>
                <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xs">
                      WA
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-[#1a1c1c]">
                        Bot Simulator
                      </h3>
                      <p className="text-[9px] sm:text-[10px] text-emerald-600 font-semibold">
                        Live Preview
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setChatLog([{ sender: "bot", text: welcomeMessage }])
                    }
                    className="text-xs text-[#7e7576] hover:text-black font-medium cursor-pointer"
                  >
                    Reset
                  </button>
                </div>

                <div className="space-y-2.5 overflow-y-auto max-h-85 sm:max-h-105 pr-1">
                  {chatLog.map((chat, idx) => (
                    <div
                      key={idx}
                      className={`flex ${chat.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl p-2.5 sm:p-3 text-xs leading-relaxed ${
                          chat.sender === "user"
                            ? "bg-emerald-700 text-white rounded-br-none shadow-sm"
                            : "bg-slate-100 text-[#1a1c1c] rounded-bl-none shadow-sm whitespace-pre-line"
                        }`}
                      >
                        {chat.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <form
                onSubmit={handleSendSimulatedMessage}
                className="mt-3 flex gap-2 pt-2 border-t border-gray-100"
              >
                <input
                  type="text"
                  placeholder="Type a test msg..."
                  value={simulatedMessage}
                  onChange={(e) => setSimulatedMessage(e.target.value)}
                  className="flex-1 bg-slate-50 border border-slate-200 text-xs rounded-xl px-3 py-2 focus:ring-2 focus:ring-black outline-none"
                />
                <button
                  type="submit"
                  className="bg-emerald-600 text-white font-semibold text-xs px-3.5 py-2 rounded-xl hover:bg-emerald-700 active:scale-95 transition-all cursor-pointer shrink-0"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Responsive Modals */}
        {showCreateSessionModal && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 max-w-lg w-full shadow-2xl space-y-4 border border-white max-h-[92vh] overflow-y-auto">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <div>
                  <h3 className="text-base font-bold text-[#1a1c1c]">
                    Create Travel Session
                  </h3>
                  <p className="text-xs text-gray-500">
                    {stationAccount.stationBranch}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowCreateSessionModal(false)}
                  className="text-gray-400 hover:text-black cursor-pointer"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <form onSubmit={handleCreateSession} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-[#7e7576] uppercase">
                      Origin
                    </label>
                    <select
                      value={newOrigin}
                      onChange={(e) => setNewOrigin(e.target.value)}
                      className="w-full mt-1 bg-slate-50 border border-slate-200 text-xs sm:text-sm rounded-xl px-3 py-2 focus:ring-2 focus:ring-black outline-none font-medium"
                    >
                      <option value="Yaoundé">Yaoundé</option>
                      <option value="Douala">Douala</option>
                      <option value="Bafoussam">Bafoussam</option>
                      <option value="Bamenda">Bamenda</option>
                      <option value="Kribi">Kribi</option>
                      <option value="Garoua">Garoua</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#7e7576] uppercase">
                      Destination
                    </label>
                    <select
                      value={newDestination}
                      onChange={(e) => setNewDestination(e.target.value)}
                      className="w-full mt-1 bg-slate-50 border border-slate-200 text-xs sm:text-sm rounded-xl px-3 py-2 focus:ring-2 focus:ring-black outline-none font-medium"
                    >
                      <option value="Douala">Douala</option>
                      <option value="Yaoundé">Yaoundé</option>
                      <option value="Bafoussam">Bafoussam</option>
                      <option value="Bamenda">Bamenda</option>
                      <option value="Kribi">Kribi</option>
                      <option value="Garoua">Garoua</option>
                      <option value="Ngaoundéré">Ngaoundéré</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-[#7e7576] uppercase">
                      Departure Time
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 07:30 AM"
                      value={newDepartureTime}
                      onChange={(e) => setNewDepartureTime(e.target.value)}
                      className="w-full mt-1 bg-slate-50 border border-slate-200 text-xs sm:text-sm rounded-xl px-3 py-2 focus:ring-2 focus:ring-black outline-none font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#7e7576] uppercase">
                      Price (FCFA)
                    </label>
                    <input
                      type="number"
                      required
                      value={newPrice}
                      onChange={(e) => setNewPrice(e.target.value)}
                      className="w-full mt-1 bg-slate-50 border border-slate-200 text-xs sm:text-sm rounded-xl px-3 py-2 focus:ring-2 focus:ring-black outline-none font-medium"
                    />
                  </div>
                </div>

                <div className="p-3.5 bg-emerald-50/60 rounded-2xl border border-emerald-100 space-y-3">
                  <div className="text-xs font-bold text-emerald-900 uppercase">
                    Bus & Layout Details
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#7e7576] uppercase">
                      Bus Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Le Koung-Mou 01"
                      value={newBusName}
                      onChange={(e) => setNewBusName(e.target.value)}
                      className="w-full mt-1 bg-white border border-slate-200 text-xs sm:text-sm rounded-xl px-3 py-2 focus:ring-2 focus:ring-black outline-none font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-semibold text-[#7e7576] uppercase">
                        Registration No.
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. LT-849-AA"
                        value={newBusNumber}
                        onChange={(e) => setNewBusNumber(e.target.value)}
                        className="w-full mt-1 bg-white border border-slate-200 text-xs sm:text-sm rounded-xl px-3 py-2 focus:ring-2 focus:ring-black outline-none font-medium"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold text-[#7e7576] uppercase">
                        Layout Type
                      </label>
                      <select
                        value={newBusType}
                        onChange={(e) =>
                          setNewBusType(e.target.value as BusType)
                        }
                        className="w-full mt-1 bg-white border border-slate-200 text-xs rounded-xl px-2.5 py-2 focus:ring-2 focus:ring-black outline-none font-medium"
                      >
                        <option value="vip_2x2">
                          VIP Coach (2x2 • 49 Seats)
                        </option>
                        <option value="minibus">Express Van (19 Seats)</option>
                        <option value="coaster">
                          Coaster Midibus (26 Seats)
                        </option>
                        <option value="ultra_vip">
                          Ultra-VIP Coach (2x1 • 30 Seats)
                        </option>
                        <option value="classic_3x2">
                          High-Capacity Coach (3x2 • 61 Seats)
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white font-semibold py-3 rounded-full text-xs sm:text-sm hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-md mt-2"
                >
                  Publish Travel Session
                </button>
              </form>
            </div>
          </div>
        )}

        {showPreBookModal && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 max-w-md w-full shadow-2xl space-y-4 border border-white">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <div>
                  <h3 className="text-base font-bold text-[#1a1c1c]">
                    Assign Pre-Booking
                  </h3>
                  <p className="text-xs text-emerald-700 font-medium">
                    "{currentBus.busName}"
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowPreBookModal(false)}
                  className="text-gray-400 hover:text-black cursor-pointer"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <form onSubmit={handleConfirmBooking} className="space-y-3.5">
                <div>
                  <label className="text-[11px] font-semibold text-[#7e7576] uppercase">
                    Select Client
                  </label>
                  <select
                    value={selectedClientId}
                    onChange={handleSelectClientOption}
                    className="w-full mt-1 bg-slate-50 border border-slate-200 text-xs sm:text-sm rounded-xl px-3 py-2 focus:ring-2 focus:ring-black outline-none font-medium"
                  >
                    <option value="">-- Choose Existing Client --</option>
                    {agencyClients.map((client) => (
                      <option key={client.id} value={client.id}>
                        {client.name}{" "}
                        {client.companyName ? `(${client.companyName})` : ""} —{" "}
                        {client.phone}
                      </option>
                    ))}
                    <option value="NEW">+ Register New Profile</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-[#7e7576] uppercase">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Paul Atanga"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full mt-1 bg-slate-50 border border-slate-200 text-xs sm:text-sm rounded-xl px-3 py-2 focus:ring-2 focus:ring-black outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-[#7e7576] uppercase">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+237 6XX XXX XXX"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full mt-1 bg-slate-50 border border-slate-200 text-xs sm:text-sm rounded-xl px-3 py-2 focus:ring-2 focus:ring-black outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-[#7e7576] uppercase">
                      Seat
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={
                        selectedSeat ? `Seat #${selectedSeat}` : "Auto-Assign"
                      }
                      className="w-full mt-1 bg-gray-100 text-xs sm:text-sm font-bold rounded-xl px-3 py-2 text-[#1a1c1c]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-[#7e7576] uppercase">
                      Fare
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={`${currentBus.pricePerSeat} FCFA`}
                      className="w-full mt-1 bg-gray-100 text-xs sm:text-sm font-bold rounded-xl px-3 py-2 text-emerald-700"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white font-semibold py-3 rounded-full text-xs sm:text-sm hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-md mt-2"
                >
                  Confirm & Dispatch Ticket
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* DYNAMIC ADAPTIVE BUS SEAT MAP RENDERER                                     */
/* -------------------------------------------------------------------------- */

interface BusSeatLayoutProps {
  busType: BusType;
  totalSeats: number;
  bookedSeatNumbers: number[];
  onSeatClick: (seatNum: number) => void;
}

function BusSeatLayout({
  busType,
  totalSeats,
  bookedSeatNumbers,
  onSeatClick,
}: BusSeatLayoutProps) {
  // Flexible seat sizing button designed for mobile tap targets
  const renderSeatBtn = (seatNum: number) => {
    if (seatNum > totalSeats) return null;

    const isBooked = bookedSeatNumbers.includes(seatNum);
    return (
      <button
        key={seatNum}
        type="button"
        disabled={isBooked}
        onClick={() => onSeatClick(seatNum)}
        className={`w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold transition-transform flex items-center justify-center shrink-0 ${
          isBooked
            ? "bg-gray-200 text-gray-500 cursor-not-allowed border border-gray-300"
            : "bg-emerald-50 text-emerald-800 hover:bg-emerald-500 hover:text-white active:scale-95 cursor-pointer border border-emerald-300 shadow-sm"
        }`}
      >
        S{seatNum < 10 ? `0${seatNum}` : seatNum}
      </button>
    );
  };

  const FrontCabinHeader = ({
    hasFrontPassenger = false,
  }: {
    hasFrontPassenger?: boolean;
  }) => (
    <div className="flex justify-between items-center bg-slate-100/90 rounded-xl p-2.5 sm:p-3 border border-slate-200 text-[11px] sm:text-xs font-bold text-gray-600 mb-2">
      <div className="flex items-center gap-1 bg-slate-200 px-2.5 py-1 rounded-lg text-gray-700">
        <span className="material-symbols-outlined text-sm">
          sports_motorsports
        </span>
        <span>Driver</span>
      </div>
      {hasFrontPassenger ? (
        <div className="bg-slate-200/80 px-2.5 py-1 rounded-lg text-gray-500">
          Passenger
        </div>
      ) : (
        <div className="bg-emerald-50 text-emerald-700 border border-emerald-300/60 px-2.5 py-1 rounded-lg flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">
            meeting_room
          </span>
          <span>Door</span>
        </div>
      )}
    </div>
  );

  const MidDoorBar = () => (
    <div className="my-2.5 py-1.5 px-3 bg-emerald-50 border border-dashed border-emerald-400/60 rounded-lg text-emerald-800 text-[10px] sm:text-xs font-bold text-center flex items-center justify-center gap-1.5">
      <span className="material-symbols-outlined text-sm">meeting_room</span>
      <span>Mid Exit / Boarding Door</span>
    </div>
  );

  if (busType === "minibus") {
    return (
      <div className="w-full max-w-xs sm:max-w-sm flex flex-col gap-2.5">
        <FrontCabinHeader hasFrontPassenger={true} />
        <div className="space-y-2 bg-slate-50/50 p-3 sm:p-4 rounded-2xl border border-slate-200/60">
          {[
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [10, 11, 12],
            [13, 14, 15],
          ].map(([sLeft, sMid, sRight], idx) => (
            <div key={idx} className="flex items-center justify-between">
              {renderSeatBtn(sLeft)}
              <div className="text-[9px] font-bold text-gray-400 px-1">
                AISLE
              </div>
              <div className="flex gap-1.5">
                {renderSeatBtn(sMid)}
                {renderSeatBtn(sRight)}
              </div>
            </div>
          ))}
          <div className="pt-2 border-t border-slate-200">
            <div className="text-[9px] font-bold text-center text-gray-400 mb-1 uppercase">
              Back Bench
            </div>
            <div className="flex justify-between gap-1">
              {renderSeatBtn(16)}
              {renderSeatBtn(17)}
              {renderSeatBtn(18)}
              {renderSeatBtn(19)}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (busType === "coaster") {
    return (
      <div className="w-full max-w-xs sm:max-w-sm flex flex-col gap-2.5">
        <FrontCabinHeader />
        <div className="space-y-2 bg-slate-50/50 p-3 sm:p-4 rounded-2xl border border-slate-200/60">
          {[
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [10, 11, 12],
            [13, 14, 15],
            [16, 17, 18],
            [19, 20, 21],
          ].map(([sLeft1, sLeft2, sRight], idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div className="flex gap-1.5">
                {renderSeatBtn(sLeft1)}
                {renderSeatBtn(sLeft2)}
              </div>
              <div className="text-[9px] font-bold text-gray-300 px-1">
                AISLE
              </div>
              <div>{renderSeatBtn(sRight)}</div>
            </div>
          ))}
          <div className="pt-2 border-t border-slate-200">
            <div className="text-[9px] font-bold text-center text-gray-400 mb-1 uppercase">
              Back Row
            </div>
            <div className="flex justify-between gap-1">
              {renderSeatBtn(22)}
              {renderSeatBtn(23)}
              {renderSeatBtn(24)}
              {renderSeatBtn(25)}
              {renderSeatBtn(26)}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (busType === "ultra_vip") {
    return (
      <div className="w-full max-w-xs sm:max-w-sm flex flex-col gap-2.5">
        <FrontCabinHeader />
        <div className="space-y-2 bg-slate-50/50 p-3 sm:p-4 rounded-2xl border border-slate-200/60">
          {[
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [10, 11, 12],
            [13, 14, 15],
            [16, 17, 18],
          ].map(([sLeft1, sLeft2, sRight], idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div className="flex gap-1.5">
                {renderSeatBtn(sLeft1)}
                {renderSeatBtn(sLeft2)}
              </div>
              <div className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                AISLE
              </div>
              <div>{renderSeatBtn(sRight)}</div>
            </div>
          ))}

          <MidDoorBar />

          {[
            [19, 20, 21],
            [22, 23, 24],
            [25, 26, 27],
            [28, 29, 30],
          ].map(([sLeft1, sLeft2, sRight], idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div className="flex gap-1.5">
                {renderSeatBtn(sLeft1)}
                {renderSeatBtn(sLeft2)}
              </div>
              <div className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                AISLE
              </div>
              <div>{renderSeatBtn(sRight)}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (busType === "vip_2x2") {
    return (
      <div className="w-full max-w-sm sm:max-w-md flex flex-col gap-2.5">
        <FrontCabinHeader />
        <div className="space-y-2 bg-slate-50/50 p-3 sm:p-4 rounded-2xl border border-slate-200/60">
          {[
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
            [17, 18, 19, 20],
          ].map(([sl1, sl2, sr1, sr2], idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div className="flex gap-1.5">
                {renderSeatBtn(sl1)}
                {renderSeatBtn(sl2)}
              </div>
              <div className="text-[9px] font-bold text-gray-300 px-1">
                AISLE
              </div>
              <div className="flex gap-1.5">
                {renderSeatBtn(sr1)}
                {renderSeatBtn(sr2)}
              </div>
            </div>
          ))}

          <MidDoorBar />

          {[
            [21, 22, 23, 24],
            [25, 26, 27, 28],
            [29, 30, 31, 32],
            [33, 34, 35, 36],
            [37, 38, 39, 40],
            [41, 42, 43, 44],
          ].map(([sl1, sl2, sr1, sr2], idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div className="flex gap-1.5">
                {renderSeatBtn(sl1)}
                {renderSeatBtn(sl2)}
              </div>
              <div className="text-[9px] font-bold text-gray-300 px-1">
                AISLE
              </div>
              <div className="flex gap-1.5">
                {renderSeatBtn(sr1)}
                {renderSeatBtn(sr2)}
              </div>
            </div>
          ))}

          <div className="pt-2 border-t border-slate-200">
            <div className="text-[9px] font-bold text-center text-gray-400 mb-1 uppercase">
              Back Row
            </div>
            <div className="flex justify-between gap-1">
              {renderSeatBtn(45)}
              {renderSeatBtn(46)}
              {renderSeatBtn(47)}
              {renderSeatBtn(48)}
              {renderSeatBtn(49)}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md sm:max-w-lg flex flex-col gap-2.5">
      <FrontCabinHeader />
      <div className="space-y-2 bg-slate-50/50 p-3 sm:p-4 rounded-2xl border border-slate-200/60">
        {[
          [1, 2, 3, 4, 5],
          [6, 7, 8, 9, 10],
          [11, 12, 13, 14, 15],
          [16, 17, 18, 19, 20],
          [21, 22, 23, 24, 25],
        ].map(([sl1, sl2, sr1, sr2, sr3], idx) => (
          <div key={idx} className="flex items-center justify-between">
            <div className="flex gap-1">
              {renderSeatBtn(sl1)}
              {renderSeatBtn(sl2)}
            </div>
            <div className="text-[9px] font-bold text-gray-300 px-1">AISLE</div>
            <div className="flex gap-1">
              {renderSeatBtn(sr1)}
              {renderSeatBtn(sr2)}
              {renderSeatBtn(sr3)}
            </div>
          </div>
        ))}

        <MidDoorBar />

        {[
          [26, 27, 28, 29, 30],
          [31, 32, 33, 34, 35],
          [36, 37, 38, 39, 40],
          [41, 42, 43, 44, 45],
          [46, 47, 48, 49, 50],
          [51, 52, 53, 54, 55],
        ].map(([sl1, sl2, sr1, sr2, sr3], idx) => (
          <div key={idx} className="flex items-center justify-between">
            <div className="flex gap-1">
              {renderSeatBtn(sl1)}
              {renderSeatBtn(sl2)}
            </div>
            <div className="text-[9px] font-bold text-gray-300 px-1">AISLE</div>
            <div className="flex gap-1">
              {renderSeatBtn(sr1)}
              {renderSeatBtn(sr2)}
              {renderSeatBtn(sr3)}
            </div>
          </div>
        ))}

        <div className="pt-2 border-t border-slate-200">
          <div className="text-[9px] font-bold text-center text-gray-400 mb-1 uppercase">
            6-Seat Back Row
          </div>
          <div className="flex justify-between gap-0.5 sm:gap-1">
            {renderSeatBtn(56)}
            {renderSeatBtn(57)}
            {renderSeatBtn(58)}
            {renderSeatBtn(59)}
            {renderSeatBtn(60)}
            {renderSeatBtn(61)}
          </div>
        </div>
      </div>
    </div>
  );
}
