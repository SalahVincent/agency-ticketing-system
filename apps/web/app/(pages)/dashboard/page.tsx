// app/dashboard/page.tsx

export default function DashboardPage() {
  return (
    <div className="w-full max-w-[1440px] mx-auto flex-1 flex flex-col gap-12">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-4">
        <div>
          <h1 className="text-4xl font-semibold text-[#1a1c1c] mb">
            Overview Dashboard
          </h1>
          <p className="text-base text-[#4c4546]">
            Real-time performance and active operations.
          </p>
        </div>

        <div className="flex gap-4 flex-wrap">
          {/* Search Input Container */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.04)] rounded-full px-6 py-3 flex items-center gap-3 w-64">
            {/* Search Icon Placeholder */}
            <svg
              className="w-5 h-5 text-[#7e7576]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search orders..."
              className="bg-transparent border-none outline-none focus:ring-0 w-full text-base p-0 text-[#1a1c1c]"
            />
          </div>

          {/* Export Action Button */}
          <button className="bg-black text-white rounded-full px-6 py-3 font-semibold text-lg hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer">
            {/* Download Icon Placeholder */}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Export
          </button>
        </div>
      </header>

      {/* KPI Metrics Bar */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* KPI 1: Sales Volume */}
        <div className="bg-gradient-to-br from-[rgba(92,150,236,0.8)] to-[rgba(255,255,255,0.4)] backdrop-blur-xl border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.04)] rounded-3xl p-6 transition-transform duration-200 hover:scale-[1.02] flex flex-col gap-4 relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center shadow-sm">
              <span className="text-black font-semibold">$$</span>
            </div>
            <span className="text-xs font-bold tracking-wider text-[#848484] bg-white/50 px-3 py-1 rounded-full">
              +12.5%
            </span>
          </div>
          <div>
            <h3 className="text-sm text-[#4c4546] mb-1">Total Sales Volume</h3>
            <p className="text-4xl font-bold text-[#1a1c1c]">$124,500</p>
          </div>
        </div>

        {/* KPI 2: Tickets Sold */}
        <div className="bg-gradient-to-br from-[rgba(243,66,66,0.8)] to-[rgba(255,255,255,0.4)] backdrop-blur-xl border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.04)] rounded-3xl p-6 transition-transform duration-200 hover:scale-[1.02] flex flex-col gap-4 relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center shadow-sm">
              {/* Ticket Icon Placeholder */}
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5h14a2 2 0 012 2v3a2 2 0 000 4v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3a2 2 0 000-4V7a2 2 0 012-2z" />
              </svg>
            </div>
            <span className="text-xs font-bold tracking-wider text-[#848484] bg-white/50 px-3 py-1 rounded-full">
              +8.2%
            </span>
          </div>
          <div>
            <h3 className="text-sm text-[#4c4546] mb-1">Total Tickets Sold</h3>
            <p className="text-4xl font-bold text-[#1a1c1c]">8,432</p>
          </div>
        </div>

        {/* KPI 3: Active Listings */}
        <div className="bg-gradient-to-br from-[rgba(58,245,104,0.8)] to-[rgba(255,255,255,0.4)] backdrop-blur-xl border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.04)] rounded-3xl p-6 transition-transform duration-200 hover:scale-[1.02] flex flex-col gap-4 relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center shadow-sm">
              {/* Inventory Icon Placeholder */}
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <span className="text-xs font-bold tracking-wider text-[#848484] bg-white/50 px-3 py-1 rounded-full">
              Active
            </span>
          </div>
          <div>
            <h3 className="text-sm text-[#4c4546] mb-1">Active Listings</h3>
            <p className="text-4xl font-bold text-[#1a1c1c]">145</p>
          </div>
        </div>

        {/* KPI 4: Check-in Rate */}
        <div className="bg-gradient-to-br from-[rgba(241,239,64,0.8)] to-[rgba(255,255,255,0.4)] backdrop-blur-xl border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.04)] rounded-3xl p-6 transition-transform duration-200 hover:scale-[1.02] flex flex-col gap-4 relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center shadow-sm">
              {/* Check-in Icon Placeholder */}
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-xs font-bold tracking-wider text-[#848484] bg-white/50 px-3 py-1 rounded-full">
              -2.1%
            </span>
          </div>
          <div>
            <h3 className="text-sm text-[#4c4546] mb-1">Check-in Rate</h3>
            <p className="text-3xl font-bold text-[#1a1c1c]">92.4%</p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue & Ticket Sales Chart View (Spans 2 Cols) */}
        <div className="lg:col-span-2 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.04)] rounded-xl p-8 transition-transform duration-200 hover:scale-[1.01] flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-semibold text-[#1a1c1c]">
              Revenue &amp; Ticket Sales
            </h2>
            <div className="flex gap-2 bg-[#f3f3f4] p-1 rounded-full">
              <button className="px-4 py-1.5 rounded-full bg-white shadow-sm text-xs font-bold tracking-wider text-[#1a1c1c]">
                Week
              </button>
              <button className="px-4 py-1.5 rounded-full text-[#4c4546] text-xs font-bold tracking-wider hover:bg-[#e2e2e2] transition-colors">
                Month
              </button>
            </div>
          </div>

          {/* Chart Visualization */}
          <div className="flex-1 flex items-end gap-2 h-64 mt-4 relative">
            {/* Y-Axis Labels */}
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[#4c4546] text-xs opacity-50 pb-8">
              <span>$50k</span>
              <span>$25k</span>
              <span>$0</span>
            </div>

            {/* Bars */}
            <div className="w-full flex justify-between items-end h-full pl-10 pb-8 border-b border-[#cfc4c5]/30 relative">
              <div className="w-1/12 bg-black/20 rounded-t-md h-[40%] relative">
                <div className="absolute bottom-0 w-full bg-black rounded-t-md h-[30%]" />
              </div>
              <div className="w-1/12 bg-black/20 rounded-t-md h-[55%] relative">
                <div className="absolute bottom-0 w-full bg-black rounded-t-md h-[45%]" />
              </div>
              <div className="w-1/12 bg-black/20 rounded-t-md h-[35%] relative">
                <div className="absolute bottom-0 w-full bg-black rounded-t-md h-[20%]" />
              </div>
              <div className="w-1/12 bg-black/20 rounded-t-md h-[70%] relative">
                <div className="absolute bottom-0 w-full bg-black rounded-t-md h-[60%]" />
              </div>
              <div className="w-1/12 bg-black/20 rounded-t-md h-[90%] relative">
                <div className="absolute bottom-0 w-full bg-black rounded-t-md h-[80%]" />
              </div>
              <div className="w-1/12 bg-black/20 rounded-t-md h-[65%] relative">
                <div className="absolute bottom-0 w-full bg-black rounded-t-md h-[50%]" />
              </div>
              <div className="w-1/12 bg-black/20 rounded-t-md h-[85%] relative">
                <div className="absolute bottom-0 w-full bg-black rounded-t-md h-[75%]" />
              </div>
            </div>

            {/* X-Axis Labels */}
            <div className="absolute bottom-0 left-10 right-0 flex justify-between text-[#4c4546] text-xs pt-2">
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

        {/* Live Stream Feed */}
        <div className="bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.04)] rounded-xl p-8 transition-transform duration-200 hover:scale-[1.01] flex flex-col overflow-hidden max-h-[500px]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-[#1a1c1c] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ba1a1a] animate-pulse" />
              Live Feed
            </h2>
            <span className="text-[#4c4546] cursor-pointer">•••</span>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 space-y-4">
            {/* Feed Item 1 */}
            <div className="p-4 rounded-lg bg-white border border-[#cfc4c5]/30 flex gap-4">
              <div className="w-10 h-10 rounded-full bg-green-100 shrink-0 flex items-center justify-center">
                <span className="text-green-700 text-sm font-bold">WA</span>
              </div>
              <div>
                <div className="flex justify-between items-start mb-1 gap-2">
                  <span className="text-sm font-bold text-[#1a1c1c]">WhatsApp Order</span>
                  <span className="text-xs text-[#4c4546]">Just now</span>
                </div>
                <p className="text-sm text-[#4c4546]">2x VIP Tickets reserved for 'Neon Nights Event'. Pending payment.</p>
              </div>
            </div>

            {/* Feed Item 2 */}
            <div className="p-4 rounded-lg bg-white border border-[#cfc4c5]/30 flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 shrink-0 flex items-center justify-center">
                <span className="text-blue-700 text-sm font-bold">QR</span>
              </div>
              <div>
                <div className="flex justify-between items-start mb-1 gap-2">
                  <span className="text-sm font-bold text-[#1a1c1c]">Ticket Redeemed</span>
                  <span className="text-xs text-[#4c4546]">2m ago</span>
                </div>
                <p className="text-sm text-[#4c4546]">Order #9942 checked in at Main Gate A.</p>
              </div>
            </div>

            {/* Feed Item 3 */}
            <div className="p-4 rounded-lg bg-white border border-[#cfc4c5]/30 flex gap-4">
              <div className="w-10 h-10 rounded-full bg-yellow-100 shrink-0 flex items-center justify-center">
                <span className="text-yellow-700 text-sm font-bold">SUP</span>
              </div>
              <div>
                <div className="flex justify-between items-start mb-1 gap-2">
                  <span className="text-sm font-bold text-[#1a1c1c]">Support Ticket</span>
                  <span className="text-xs text-[#4c4546]">15m ago</span>
                </div>
                <p className="text-sm text-[#4c4546]">Customer inquiring about refund policy for tomorrow's show.</p>
              </div>
            </div>

            {/* Feed Item 4 */}
            <div className="p-4 rounded-lg bg-white border border-[#cfc4c5]/30 flex gap-4">
              <div className="w-10 h-10 rounded-full bg-green-100 shrink-0 flex items-center justify-center">
                <span className="text-green-700 text-sm font-bold">WA</span>
              </div>
              <div>
                <div className="flex justify-between items-start mb-1 gap-2">
                  <span className="text-sm font-bold text-[#1a1c1c]">WhatsApp Order</span>
                  <span className="text-xs text-[#4c4546]">22m ago</span>
                </div>
                <p className="text-sm text-[#4c4546]">Payment confirmed for 4x General Admission.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}