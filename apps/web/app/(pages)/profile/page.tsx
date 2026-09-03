'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ProfilePage() {
  const [isOnDuty, setIsOnDuty] = useState(true);

  // Mock Agency & Agent Data
  const agencyData = {
    agencyName: 'GENERAL Express Transport',
    agencyCode: 'GENERAL-CM',
    hqLocation: 'Kumba / Bamenda Agency Network',
    activeFleetCount: '48 Buses',
    agencyType: 'Intercity Passenger & Express Cargo Agency',
    agent: {
      name: 'Vincent Tufoin',
      role: 'Terminal Operations & Ticketing Agent',
      agentId: 'GENERAL-AG-8842',
      station: 'Douala Central Terminal (Bay 4)',
      email: 'v.tufoin@general.com',
      phone: '+237 6 70 00 11 22',
      joinedDate: 'March 2025',
    },
    stats: [
      { label: 'Tickets Validated Today', value: '142', icon: 'qr_code_scanner' },
      { label: 'Agency Bookings Managed', value: '1,280', icon: 'confirmation_number' },
      { label: 'Shift Rating', value: '4.9/5', icon: 'star' },
    ],
  };

  const { agent } = agencyData;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Header Banner: Agency & Agent Profile Card */}
      <div className="bg-white/80 backdrop-blur-xl border border-white/80 rounded-3xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] relative overflow-hidden">
        
        {/* Subtle Background Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-bl from-black/5 to-transparent rounded-bl-full pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
          
          {/* Avatar Container */}
          <div className="relative">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-black text-white flex items-center justify-center text-3xl font-extrabold shadow-lg border-4 border-white">
              VT
            </div>
            {/* Duty Status Dot Indicator */}
            <span 
              className={`absolute bottom-1 right-1 w-5 h-5 rounded-full border-2 border-white ${
                isOnDuty ? 'bg-emerald-500' : 'bg-gray-400'
              }`}
              title={isOnDuty ? 'On Duty' : 'Off Duty'}
            />
          </div>

          {/* User & Agency Details */}
          <div className="flex-1 text-center sm:text-left space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                {/* Prominent Agency Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white rounded-full text-xs font-bold tracking-wide uppercase mb-1.5">
                  <span className="material-symbols-outlined text-[15px]">directions_bus</span>
                  {agencyData.agencyName}
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1a1c1c] tracking-tight">
                  {agent.name}
                </h1>
                <p className="text-sm font-semibold text-[#7e7576]">
                  {agent.role}
                </p>
              </div>

              {/* On Duty Toggle Button */}
              <button
                type="button"
                onClick={() => setIsOnDuty(!isOnDuty)}
                className={`self-center sm:self-start px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                  isOnDuty
                    ? 'bg-emerald-500/10 text-emerald-700 border-emerald-500/30 hover:bg-emerald-500/20'
                    : 'bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isOnDuty ? 'bg-emerald-500' : 'bg-gray-400'}`} />
                {isOnDuty ? 'Status: On Duty' : 'Status: Off Duty'}
              </button>
            </div>

            {/* Tags / Badges */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#f3f3f4] text-[#1a1c1c] rounded-full text-xs font-semibold">
                <span className="material-symbols-outlined text-[16px]">badge</span>
                {agent.agentId}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#f3f3f4] text-[#1a1c1c] rounded-full text-xs font-semibold">
                <span className="material-symbols-outlined text-[16px]">location_on</span>
                {agent.station}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {agencyData.stats.map((stat) => (
          <div 
            key={stat.label} 
            className="bg-white/80 backdrop-blur-xl border border-white/80 rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[24px]">{stat.icon}</span>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-[#1a1c1c]">{stat.value}</p>
              <p className="text-xs font-medium text-[#7e7576]">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Agency Details & Agent Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Agency Information Card */}
        <div className="bg-white/80 backdrop-blur-xl border border-white/80 rounded-3xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] space-y-4">
          <h2 className="text-lg font-extrabold text-[#1a1c1c] flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">domain</span>
            Agency Details
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between py-2 border-b border-[#cfc4c5]/20">
              <span className="text-[#7e7576] font-medium">Agency Name</span>
              <span className="font-extrabold text-[#1a1c1c]">{agencyData.agencyName}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-[#cfc4c5]/20">
              <span className="text-[#7e7576] font-medium">Agency Code</span>
              <span className="font-semibold text-[#1a1c1c]">{agencyData.agencyCode}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-[#cfc4c5]/20">
              <span className="text-[#7e7576] font-medium">Primary Routes / Network</span>
              <span className="font-semibold text-[#1a1c1c] text-right">{agencyData.hqLocation}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-[#cfc4c5]/20">
              <span className="text-[#7e7576] font-medium">Fleet Size</span>
              <span className="font-semibold text-[#1a1c1c]">{agencyData.activeFleetCount}</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-[#7e7576] font-medium">Service Type</span>
              <span className="font-semibold text-[#1a1c1c] text-right">{agencyData.agencyType}</span>
            </div>
          </div>
        </div>

        {/* Agent Account & Contact Details */}
        <div className="bg-white/80 backdrop-blur-xl border border-white/80 rounded-3xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] space-y-4">
          <h2 className="text-lg font-extrabold text-[#1a1c1c] flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">manage_accounts</span>
            Agent Details & Actions
          </h2>

          <div className="space-y-3 text-sm pb-2">
            <div className="flex items-center justify-between py-2 border-b border-[#cfc4c5]/20">
              <span className="text-[#7e7576] font-medium">Email Address</span>
              <span className="font-semibold text-[#1a1c1c]">{agent.email}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-[#cfc4c5]/20">
              <span className="text-[#7e7576] font-medium">Phone Number</span>
              <span className="font-semibold text-[#1a1c1c]">{agent.phone}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-[#cfc4c5]/20">
              <span className="text-[#7e7576] font-medium">Assigned Terminal</span>
              <span className="font-semibold text-[#1a1c1c] text-right">{agent.station}</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-[#7e7576] font-medium">Member Since</span>
              <span className="font-semibold text-[#1a1c1c]">{agent.joinedDate}</span>
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-[#cfc4c5]/30">
            <Link
              href="/settings"
              className="flex items-center justify-between p-3 bg-[#f3f3f4] hover:bg-black hover:text-white rounded-2xl transition-all group text-sm font-semibold"
            >
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[20px]">settings</span>
                <span>Manage {agencyData.agencyName} Settings</span>
              </div>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}