"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { fetchApi } from "@/lib/api";

interface TravelOrder {
  id: string;
  ticketId: string;
  customerName: string;
  phone: string;
  route: string;
  travelDate: string;
  seatNo: string;
  amount: number;
  status: "Confirmed" | "Boarded" | "Cancelled";
}

interface ApiOrder {
  id: string;
  ticketId: string;
  customerName: string;
  phone: string;
  route: string;
  travelDate: string;
  seatNo: string;
  amount: number;
  status: "Confirmed" | "Boarded" | "Cancelled";
}

export default function OrdersPage() {
  const { getToken, isLoaded, isSignedIn } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<
    "All" | "Confirmed" | "Boarded" | "Cancelled"
  >("All");
  const [selectedOrder, setSelectedOrder] = useState<TravelOrder | null>(null);
  const [orders, setOrders] = useState<TravelOrder[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isLoaded || !isSignedIn) return;

    const loadOrders = async () => {
      try {
        const data = await fetchApi<ApiOrder[]>("/orders", getToken);
        setOrders(data);
      } catch (err) {
        console.error("Failed to load orders", err);
        setError(
          err instanceof Error
            ? err.message
            : "Could not load passenger bookings right now.",
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadOrders();
  }, [getToken, isLoaded, isSignedIn]);

  const filteredOrders = orders.filter((order) => {
    const matchesFilter =
      selectedFilter === "All" || order.status === selectedFilter;
    const searchValue = searchQuery.trim().toLowerCase();
    const matchesSearch =
      searchValue.length === 0 ||
      order.phone.toLowerCase().includes(searchValue) ||
      order.ticketId.toLowerCase().includes(searchValue) ||
      order.customerName.toLowerCase().includes(searchValue) ||
      order.route.toLowerCase().includes(searchValue);

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="w-full max-w-[1440px] mx-auto flex-1 flex flex-col gap-8 px-4 sm:px-6 py-6">
      {/* Header & Search */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1a1c1c] tracking-tight">
            Passenger Bookings & Orders
          </h1>
          <p className="text-sm text-[#4c4546] max-w-md">
            Look up tickets by passenger phone number, view seat allocations,
            and manage cancellations.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-[420px]">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-[#4c4546]">
            <span className="material-symbols-outlined text-[20px]">
              search
            </span>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by Phone #, Ticket ID, Route..."
            className="w-full pl-12 pr-6 py-3.5 bg-white border border-white/80 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.04)] text-sm text-[#1a1c1c] placeholder:text-[#4c4546]/60 focus:outline-none focus:ring-2 focus:ring-black transition-all"
          />
        </div>
      </header>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <span className="text-xs font-bold tracking-widest text-[#4c4546] uppercase mr-2 shrink-0">
          Filter
        </span>
        {(["All", "Confirmed", "Boarded", "Cancelled"] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setSelectedFilter(tab)}
            className={`shrink-0 px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              selectedFilter === tab
                ? "bg-black text-white shadow-sm"
                : "bg-white/80 text-[#4c4546] hover:bg-white hover:text-black border border-white/60"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Booking List Container */}
      <div className="flex flex-col gap-3">
        {/* Table Header (Hidden on Mobile) */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-8 py-2 text-xs font-bold tracking-wider text-[#7e7576] uppercase">
          <div className="col-span-3">Passenger / Phone</div>
          <div className="col-span-2">Ticket ID</div>
          <div className="col-span-3">Travel Route</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>

        {isLoading ? (
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-12 text-center text-[#7e7576]">
            Loading passenger bookings...
          </div>
        ) : error ? (
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-12 text-center text-[#ba1a1a]">
            {error}
          </div>
        ) : filteredOrders.length === 0 ? (
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-12 text-center text-[#7e7576]">
            No passenger orders match your query.
          </div>
        ) : (
          filteredOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-5 md:px-8 md:py-5 border border-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
            >
              {/* Customer & Phone */}
              <div className="col-span-3 flex flex-col">
                <span className="md:hidden text-[10px] font-bold text-[#7e7576] uppercase">
                  Passenger
                </span>
                <span className="text-base font-bold text-[#1a1c1c]">
                  {order.customerName}
                </span>
                <span className="text-xs font-medium text-[#4c4546]">
                  {order.phone}
                </span>
              </div>

              {/* Ticket ID & Seat */}
              <div className="col-span-2 flex flex-col md:block">
                <span className="md:hidden text-[10px] font-bold text-[#7e7576] uppercase">
                  Ticket ID
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#1a1c1c] bg-[#f3f3f4] px-2 py-1 rounded-md">
                    {order.ticketId}
                  </span>
                  <span className="text-xs font-semibold text-[#4c4546]">
                    {order.seatNo}
                  </span>
                </div>
              </div>

              {/* Route & Schedule */}
              <div className="col-span-3 flex flex-col">
                <span className="md:hidden text-[10px] font-bold text-[#7e7576] uppercase">
                  Route
                </span>
                <span className="text-sm font-semibold text-[#1a1c1c]">
                  {order.route}
                </span>
                <span className="text-xs text-[#7e7576]">
                  {order.travelDate}
                </span>
              </div>

              {/* Status */}
              <div className="col-span-2 flex flex-col md:block">
                <span className="md:hidden text-[10px] font-bold text-[#7e7576] uppercase">
                  Status
                </span>
                <div className="flex items-center gap-1.5">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      order.status === "Boarded"
                        ? "bg-black"
                        : order.status === "Confirmed"
                          ? "bg-emerald-500"
                          : "bg-[#ba1a1a]"
                    }`}
                  />
                  <span
                    className={`text-xs font-bold ${
                      order.status === "Cancelled"
                        ? "text-[#ba1a1a]"
                        : "text-[#1a1c1c]"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="col-span-2 flex items-center justify-start md:justify-end gap-2 mt-2 md:mt-0 pt-2 md:pt-0 border-t md:border-none border-gray-100">
                <button
                  type="button"
                  onClick={() => setSelectedOrder(order)}
                  className="px-4 py-1.5 bg-black text-white rounded-full text-xs font-semibold hover:opacity-80 transition-opacity cursor-pointer"
                >
                  View Ticket
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Ticket Details Drawer / Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full shadow-2xl space-y-5 border border-white">
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <h3 className="text-base font-bold text-[#1a1c1c]">
                E-Ticket Verification
              </h3>
              <button
                type="button"
                onClick={() => setSelectedOrder(null)}
                className="text-gray-400 hover:text-black cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="bg-[#f8f9fa] p-4 rounded-2xl border border-dashed border-gray-300 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs text-[#7e7576]">Passenger</span>
                <span className="text-sm font-bold text-[#1a1c1c]">
                  {selectedOrder.customerName}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-[#7e7576]">Phone</span>
                <span className="text-xs font-medium text-[#1a1c1c]">
                  {selectedOrder.phone}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-[#7e7576]">Route</span>
                <span className="text-xs font-bold text-[#1a1c1c]">
                  {selectedOrder.route}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-[#7e7576]">Seat & Ticket</span>
                <span className="text-xs font-mono font-semibold text-emerald-700">
                  {selectedOrder.seatNo} ({selectedOrder.ticketId})
                </span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                <span className="text-xs text-[#7e7576]">Fare Paid</span>
                <span className="text-base font-extrabold text-[#1a1c1c]">
                  {selectedOrder.amount} FCFA
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  alert(`Resent E-Ticket SMS to ${selectedOrder.phone}`);
                }}
                className="flex-1 py-2.5 bg-gray-100 hover:bg-gray-200 text-[#1a1c1c] rounded-full text-xs font-semibold transition-colors cursor-pointer"
              >
                Resend SMS
              </button>
              <button
                type="button"
                onClick={() => setSelectedOrder(null)}
                className="flex-1 py-2.5 bg-black text-white rounded-full text-xs font-semibold hover:opacity-90 transition-opacity cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
