'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { fetchApi } from '@/lib/api';

interface DashboardActivityItem {
  id: string;
  kind: 'booked' | 'boarded';
  passengerName: string;
  route: string;
  seatNo: string;
  at: string;
}

interface DashboardSummary {
  totalRevenue: number;
  bookedSeats: number;
  trips: number;
  boardedCount: number;
  activity: DashboardActivityItem[];
}

const formatCurrency = (value: number) => `${value.toLocaleString('en-US')} FCFA`;

const formatShortTime = (iso: string) => {
  const date = new Date(iso);
  const now = new Date();
  const diffMinutes = Math.max(0, Math.round((now.getTime() - date.getTime()) / 60000));

  if (diffMinutes < 1) return 'Just now';
  if (diffMinutes < 60) return `${diffMinutes}m ago`;

  const diffHours = Math.round(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours}h ago`;

  return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
};

export default function DashboardPage() {
  const [timeframe, setTimeframe] = useState<'Week' | 'Month'>('Week');
  const [searchQuery, setSearchQuery] = useState('');
  const [summary, setSummary] = useState<DashboardSummary | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadSummary = async () => {
      try {
        const data = await fetchApi<DashboardSummary>('/dashboard');
        setSummary(data);
      } catch (err) {
        console.error('Failed to load dashboard summary', err);
        setError('Could not load dashboard data right now.');
      } finally {
        setIsLoading(false);
      }
    };

    loadSummary();
  }, []);

  const filteredActivity = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!summary || !query) return summary?.activity ?? [];

    return summary.activity.filter((item) => {
      return (
        item.passengerName.toLowerCase().includes(query) ||
        item.route.toLowerCase().includes(query) ||
        item.seatNo.toLowerCase().includes(query)
      );
    });
  }, [searchQuery, summary]);

  return (
    <div className="w-full max-w-[1440px] mx-auto flex-1 flex flex-col gap-8 px-4 sm:px-6 py-4 pb-16">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs text-[#7e7576] font-medium">CamEWeGo Travel & Express</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1a1c1c] tracking-tight">
            Agency Operations Dashboard
          </h1>
          <p className="text-sm text-[#4c4546]">
            Real-time client bookings, seat utilization, and terminal boarding status.
          </p>
        </div>

        <div className="flex gap-3 flex-wrap w-full md:w-auto">
          {/* Search Input Container */}
          <div className="bg-white/80 backdrop-blur-xl border border-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] rounded-full px-5 py-2.5 flex items-center gap-3 w-full md:w-72">
            <span className="material-symbols-outlined text-[#7e7576] text-xl">search</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search clients or ticket IDs..."
              className="bg-transparent border-none outline-none focus:ring-0 w-full text-xs font-medium text-[#1a1c1c]"
            />
          </div>

          {/* Export Action Button */}
          <button
            type="button"
            onClick={() => alert('Exporting agency manifest and revenue report...')}
            className="bg-black text-white rounded-full px-5 py-2.5 font-semibold text-xs hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span className="material-symbols-outlined text-base">download</span>
            <span>Export Manifest</span>
          </button>
        </div>
      </header>

      {/* KPI Metrics Bar */}
      {isLoading ? (
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-sm text-[#4c4546]">
            Loading dashboard metrics...
          </div>
        </section>
      ) : error ? (
        <section className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-sm text-[#ba1a1a]">
          {error}
        </section>
      ) : summary ? (
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          <div className="bg-gradient-to-br from-[rgba(92,150,236,0.15)] to-white/60 backdrop-blur-xl border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.03)] rounded-2xl sm:rounded-3xl p-4 sm:p-6 transition-transform duration-200 hover:scale-[1.02] flex flex-col justify-between gap-3 relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-sm shrink-0">
                <span className="material-symbols-outlined text-lg sm:text-xl">payments</span>
              </div>
              <span className="text-[10px] sm:text-xs font-bold tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full">
                +14.2%
              </span>
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-[#4c4546] mb-0.5 truncate">Total Ticket Revenue</h3>
              <p className="text-xl sm:text-3xl font-bold text-[#1a1c1c] tracking-tight">{formatCurrency(summary.totalRevenue)}</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[rgba(243,66,66,0.15)] to-white/60 backdrop-blur-xl border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.03)] rounded-2xl sm:rounded-3xl p-4 sm:p-6 transition-transform duration-200 hover:scale-[1.02] flex flex-col justify-between gap-3 relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-red-600 text-white flex items-center justify-center shadow-sm shrink-0">
                <span className="material-symbols-outlined text-lg sm:text-xl">confirmation_number</span>
              </div>
              <span className="text-[10px] sm:text-xs font-bold tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full">
                +8.5%
              </span>
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-[#4c4546] mb-0.5 truncate">Client Tickets Issued</h3>
              <p className="text-xl sm:text-3xl font-bold text-[#1a1c1c] tracking-tight">{summary.bookedSeats} Seats</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[rgba(58,245,104,0.15)] to-white/60 backdrop-blur-xl border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.03)] rounded-2xl sm:rounded-3xl p-4 sm:p-6 transition-transform duration-200 hover:scale-[1.02] flex flex-col justify-between gap-3 relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-sm shrink-0">
                <span className="material-symbols-outlined text-lg sm:text-xl">directions_bus</span>
              </div>
              <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#1a1c1c] bg-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-xs">
                {summary.trips} Active
              </span>
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-[#4c4546] mb-0.5 truncate">Scheduled Departures</h3>
              <p className="text-xl sm:text-3xl font-bold text-[#1a1c1c] tracking-tight">{summary.trips} Routes</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[rgba(241,239,64,0.15)] to-white/60 backdrop-blur-xl border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.03)] rounded-2xl sm:rounded-3xl p-4 sm:p-6 transition-transform duration-200 hover:scale-[1.02] flex flex-col justify-between gap-3 relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-sm shrink-0">
                <span className="material-symbols-outlined text-lg sm:text-xl">qr_code_scanner</span>
              </div>
              <span className="text-[10px] sm:text-xs font-bold tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full">
                96.8%
              </span>
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-[#4c4546] mb-0.5 truncate">Boarded Check-ins</h3>
              <p className="text-xl sm:text-3xl font-bold text-[#1a1c1c] tracking-tight">{summary.boardedCount} Passengers</p>
            </div>
          </div>
        </section>
      ) : null}

      {/* Main Content Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Ticket Revenue Chart View */}
        <div className="lg:col-span-2 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.03)] rounded-3xl p-6 sm:p-8 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-lg font-bold text-[#1a1c1c]">Agency Revenue Trend</h2>
              <p className="text-xs text-[#7e7576]">Passenger ticket bookings over current period.</p>
            </div>
            <div className="flex gap-1 bg-[#f3f3f4] p-1 rounded-full">
              <button
                type="button"
                onClick={() => setTimeframe('Week')}
                className={`px-4 py-1 rounded-full text-xs font-bold tracking-wider transition-all cursor-pointer ${
                  timeframe === 'Week' ? 'bg-white text-[#1a1c1c] shadow-xs' : 'text-[#4c4546]'
                }`}
              >
                Week
              </button>
              <button
                type="button"
                onClick={() => setTimeframe('Month')}
                className={`px-4 py-1 rounded-full text-xs font-bold tracking-wider transition-all cursor-pointer ${
                  timeframe === 'Month' ? 'bg-white text-[#1a1c1c] shadow-xs' : 'text-[#4c4546]'
                }`}
              >
                Month
              </button>
            </div>
          </div>

          {/* Chart Visualization */}
          <div className="flex-1 flex items-end gap-2 h-60 mt-2 relative">
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[#7e7576] text-[10px] font-mono pb-8">
              <span>800k</span>
              <span>400k</span>
              <span>0 FCFA</span>
            </div>

            <div className="w-full flex justify-between items-end h-full pl-12 pb-8 border-b border-[#cfc4c5]/30 relative">
              <div className="w-1/12 bg-black/10 rounded-t-lg h-[40%] relative hover:bg-black/20 transition-colors">
                <div className="absolute bottom-0 w-full bg-black rounded-t-lg h-[30%]" />
              </div>
              <div className="w-1/12 bg-black/10 rounded-t-lg h-[65%] relative hover:bg-black/20 transition-colors">
                <div className="absolute bottom-0 w-full bg-black rounded-t-lg h-[50%]" />
              </div>
              <div className="w-1/12 bg-black/10 rounded-t-lg h-[45%] relative hover:bg-black/20 transition-colors">
                <div className="absolute bottom-0 w-full bg-black rounded-t-lg h-[30%]" />
              </div>
              <div className="w-1/12 bg-black/10 rounded-t-lg h-[80%] relative hover:bg-black/20 transition-colors">
                <div className="absolute bottom-0 w-full bg-black rounded-t-lg h-[70%]" />
              </div>
              <div className="w-1/12 bg-black/10 rounded-t-lg h-[95%] relative hover:bg-black/20 transition-colors">
                <div className="absolute bottom-0 w-full bg-black rounded-t-lg h-[85%]" />
              </div>
              <div className="w-1/12 bg-black/10 rounded-t-lg h-[70%] relative hover:bg-black/20 transition-colors">
                <div className="absolute bottom-0 w-full bg-black rounded-t-lg h-[55%]" />
              </div>
              <div className="w-1/12 bg-black/10 rounded-t-lg h-[90%] relative hover:bg-black/20 transition-colors">
                <div className="absolute bottom-0 w-full bg-black rounded-t-lg h-[80%]" />
              </div>
            </div>

            <div className="absolute bottom-0 left-12 right-0 flex justify-between text-[#7e7576] text-[11px] font-semibold pt-2">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
        </div>

        {/* Live Client Operations Feed */}
        <div className="bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.03)] rounded-3xl p-6 sm:p-8 flex flex-col overflow-hidden max-h-[480px]">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-lg font-bold text-[#1a1c1c] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              Live Terminal Activity
            </h2>
            <span className="text-xs font-bold text-[#7e7576]">Real-time</span>
          </div>

          <div className="flex-1 overflow-y-auto pr-1 space-y-3">
            {summary && filteredActivity.length > 0 ? (
              filteredActivity.map((item) => {
                const kindConfig =
                  item.kind === 'boarded'
                    ? {
                        icon: 'qr_code_scanner',
                        iconBg: 'bg-blue-100 text-blue-700',
                        title: 'Boarding Gate Scan',
                      }
                    : {
                        icon: 'confirmation_number',
                        iconBg: 'bg-emerald-100 text-emerald-700',
                        title: 'Pre-Booking Confirmed',
                      };

                return (
                  <div key={item.id} className="p-3.5 rounded-2xl bg-white border border-gray-100 flex gap-3 shadow-2xs">
                    <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center ${kindConfig.iconBg}`}>
                      <span className="material-symbols-outlined text-sm">{kindConfig.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-0.5">
                        <span className="text-xs font-bold text-[#1a1c1c] truncate">{kindConfig.title}</span>
                        <span className="text-[10px] text-[#7e7576] shrink-0">{formatShortTime(item.at)}</span>
                      </div>
                      <p className="text-xs text-[#4c4546]">
                        {item.kind === 'booked' ? (
                          <>
                            Client <strong className="text-[#1a1c1c]">{item.passengerName}</strong> reserved Seat #{item.seatNo} ({item.route}).
                          </>
                        ) : (
                          <>
                            Ticket <span className="font-mono text-[#1a1c1c]">{item.seatNo}</span> verified for <strong className="text-[#1a1c1c]">{item.passengerName}</strong> ({item.route}).
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="p-3.5 rounded-2xl bg-white border border-gray-100 text-xs text-[#4c4546]">
                No recent terminal activity matches your search.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}