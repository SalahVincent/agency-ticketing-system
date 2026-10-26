"use client";

import React, { useState } from "react";
import AccountSecurity from "@/components/profile/AccountSecurity";

export default function SettingsPage() {
  // Agency Settings State
  const [clientSmsNotify, setClientSmsNotify] = useState(true);
  const [autoInvoiceClient, setAutoInvoiceClient] = useState(true);

  const handleSaveAgencySettings = () => {
    alert("Agency configurations saved.");
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto flex-1 flex flex-col gap-8 px-4 sm:px-6 py-6 pb-16">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1a1c1c] tracking-tight">
            Agency Operations & Client Portal Settings
          </h1>
          <p className="text-sm text-[#4c4546] max-w-md">
            Configure how your agency manages client profiles, dispatches e-tickets, and operates terminal hardware.
          </p>
        </div>

        <button
          type="button"
          onClick={handleSaveAgencySettings}
          className="px-6 py-2.5 bg-black text-white rounded-full text-xs font-semibold shadow-md hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
        >
          Save Settings
        </button>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Messaging & Notifications */}
          <section className="bg-white/60 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.03)] space-y-6">
            <div className="border-b border-[#cfc4c5]/30 pb-4">
              <h2 className="text-lg font-bold text-[#1a1c1c]">Client Messaging & Notifications</h2>
              <p className="text-xs text-[#7e7576]">Control how tickets and updates are sent to your clients.</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/80 border border-white transition-all hover:border-gray-200">
                <div>
                  <p className="text-sm font-bold text-[#1a1c1c]">Automatic Client SMS Alerts</p>
                  <p className="text-xs text-[#7e7576]">
                    Send ticket QR codes and departure reminders directly to client phones.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={clientSmsNotify}
                  onChange={(e) => setClientSmsNotify(e.target.checked)}
                  className="w-5 h-5 accent-black cursor-pointer rounded"
                />
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/80 border border-white transition-all hover:border-gray-200">
                <div>
                  <p className="text-sm font-bold text-[#1a1c1c]">Auto-Generate Client Invoices</p>
                  <p className="text-xs text-[#7e7576]">
                    Automatically generate printable payment slips for corporate agency clients.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={autoInvoiceClient}
                  onChange={(e) => setAutoInvoiceClient(e.target.checked)}
                  className="w-5 h-5 accent-black cursor-pointer rounded"
                />
              </div>
            </div>
          </section>

          <AccountSecurity />

        </div>

        {/* Agency Terminal Status Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-6 border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.03)] space-y-4">
            <h3 className="text-base font-bold text-[#1a1c1c]">Active Agency Terminal</h3>
            <div className="p-4 bg-white/80 rounded-2xl border border-gray-100 space-y-1">
              <p className="text-xs text-[#7e7576]">Primary Station</p>
              <p className="text-sm font-bold text-[#1a1c1c]">Yaoundé Main Terminal (Desk #04)</p>
            </div>
            <div className="p-4 bg-white/80 rounded-2xl border border-gray-100 space-y-1">
              <p className="text-xs text-[#7e7576]">Connected Hardware</p>
              <div className="flex items-center gap-2 pt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <p className="text-xs font-semibold text-[#1a1c1c]">Thermal Receipt Printer (USB)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
