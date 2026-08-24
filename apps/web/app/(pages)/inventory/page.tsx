// app/(pages)/inventory/page.tsx

export default function InventoryPage() {
  return (
    <div className="w-full max-w-[1440px] mx-auto flex-1 flex flex-col gap-12">
      {/* Header Section */}
      <header className="mb-4 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-[#1a1c1c] mb-2">
            Inventory Manager
          </h1>
          <p className="text-base text-[#4c4546]">
            Manage your services, tickets, and automated bots.
          </p>
        </div>
      </header>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Forms */}
        <div className="lg:col-span-1 flex flex-col gap-8">
          {/* Item Creation Form */}
          <div className="bg-white rounded-xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-white/40 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none rounded-xl" />
            
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-[#1a1c1c]">
              {/* Box Icon Placeholder */}
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              Create Item
            </h2>

            <form className="flex flex-col gap-5 relative z-10">
              <div>
                <label className="block text-xs font-bold tracking-wider text-[#4c4546] uppercase mb-2 ml-2">
                  Item Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. VIP Access Pass"
                  className="w-full bg-[#f3f3f4] border-none rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all text-base text-[#1a1c1c] placeholder:text-[#4c4546]/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold tracking-wider text-[#4c4546] uppercase mb-2 ml-2">
                  Category
                </label>
                <select className="w-full bg-[#f3f3f4] border-none rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all text-base text-[#1a1c1c] appearance-none cursor-pointer">
                  <option>Service</option>
                  <option>Ticket</option>
                  <option>Merchandise</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold tracking-wider text-[#4c4546] uppercase mb-2 ml-2">
                    Capacity
                  </label>
                  <input
                    type="number"
                    placeholder="100"
                    className="w-full bg-[#f3f3f4] border-none rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all text-base text-[#1a1c1c]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-wider text-[#4c4546] uppercase mb-2 ml-2">
                    Price ($)
                  </label>
                  <input
                    type="text"
                    placeholder="49.99"
                    className="w-full bg-[#f3f3f4] border-none rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all text-base text-[#1a1c1c]"
                  />
                </div>
              </div>

              <button
                type="button"
                className="mt-4 bg-black text-white rounded-full py-3 hover:scale-[1.02] active:scale-95 transition-transform duration-200 font-semibold shadow-md flex justify-center items-center gap-2 cursor-pointer"
              >
                {/* Plus Circle Icon Placeholder */}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Save Item
              </button>
            </form>
          </div>

          {/* Bot Automated Questions Builder */}
          <div className="bg-white rounded-xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-white/40">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-[#1a1c1c]">
              {/* Bot Icon Placeholder */}
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Bot Builder
            </h2>

            <div className="space-y-4">
              <div className="bg-[#f3f3f4] rounded-xl p-4 relative group">
                <input
                  type="text"
                  readOnly
                  value="What is your issue?"
                  className="w-full bg-transparent border-none p-0 focus:ring-0 text-base text-[#1a1c1c] outline-none"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                  <button className="text-[#4c4546] hover:text-black transition-colors cursor-pointer">
                    ✎
                  </button>
                  <button className="text-[#ba1a1a] hover:text-red-700 transition-colors cursor-pointer">
                    ✕
                  </button>
                </div>
              </div>

              <div className="bg-[#f3f3f4] rounded-xl p-4 relative group">
                <input
                  type="text"
                  readOnly
                  value="Upload a screenshot."
                  className="w-full bg-transparent border-none p-0 focus:ring-0 text-base text-[#1a1c1c] outline-none"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                  <button className="text-[#4c4546] hover:text-black transition-colors cursor-pointer">
                    ✎
                  </button>
                  <button className="text-[#ba1a1a] hover:text-red-700 transition-colors cursor-pointer">
                    ✕
                  </button>
                </div>
              </div>

              <button className="w-full border-2 border-dashed border-[#cfc4c5] text-[#4c4546] rounded-xl py-4 hover:bg-[#f3f3f4] transition-colors flex justify-center items-center gap-2 text-base cursor-pointer">
                + Add Question Node
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Inventory Table */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-white/40 h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2 text-[#1a1c1c]">
                {/* List Icon Placeholder */}
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Active Inventory
              </h2>
              
              <div className="relative w-64">
                <svg
                  className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#4c4546]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search items..."
                  className="w-full bg-[#f3f3f4] border-none rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all text-sm text-[#1a1c1c]"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#e2e2e2]">
                    <th className="py-4 px-4 text-xs font-bold tracking-wider text-[#4c4546] uppercase">
                      Item Name
                    </th>
                    <th className="py-4 px-4 text-xs font-bold tracking-wider text-[#4c4546] uppercase">
                      Category
                    </th>
                    <th className="py-4 px-4 text-xs font-bold tracking-wider text-[#4c4546] uppercase">
                      Price
                    </th>
                    <th className="py-4 px-4 text-xs font-bold tracking-wider text-[#4c4546] uppercase text-center">
                      Status
                    </th>
                    <th className="py-4 px-4 text-xs font-bold tracking-wider text-[#4c4546] uppercase text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e2e2e2]">
                  {/* Row 1 */}
                  <tr className="hover:bg-[#f9f9f9] transition-colors group">
                    <td className="py-4 px-4 font-semibold text-base text-[#1a1c1c]">
                      VIP Backstage Pass
                    </td>
                    <td className="py-4 px-4 text-sm text-[#4c4546]">Ticket</td>
                    <td className="py-4 px-4 text-sm font-medium text-[#1a1c1c]">$150.00</td>
                    <td className="py-4 px-4 text-center">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-[#e2e2e2] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black" />
                      </label>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-8 h-8 rounded-full bg-[#f3f3f4] hover:bg-[#dfdfe4] flex items-center justify-center text-[#4c4546] transition-colors cursor-pointer">
                          ✎
                        </button>
                        <button className="w-8 h-8 rounded-full bg-[#f3f3f4] hover:bg-red-100 hover:text-red-600 flex items-center justify-center text-[#4c4546] transition-colors cursor-pointer">
                          ✕
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="hover:bg-[#f9f9f9] transition-colors group">
                    <td className="py-4 px-4 font-semibold text-base text-[#1a1c1c]">
                      Standard Admission
                    </td>
                    <td className="py-4 px-4 text-sm text-[#4c4546]">Ticket</td>
                    <td className="py-4 px-4 text-sm font-medium text-[#1a1c1c]">$45.00</td>
                    <td className="py-4 px-4 text-center">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-[#e2e2e2] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black" />
                      </label>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-8 h-8 rounded-full bg-[#f3f3f4] hover:bg-[#dfdfe4] flex items-center justify-center text-[#4c4546] transition-colors cursor-pointer">
                          ✎
                        </button>
                        <button className="w-8 h-8 rounded-full bg-[#f3f3f4] hover:bg-red-100 hover:text-red-600 flex items-center justify-center text-[#4c4546] transition-colors cursor-pointer">
                          ✕
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="hover:bg-[#f9f9f9] transition-colors group">
                    <td className="py-4 px-4 font-semibold text-base text-[#1a1c1c]">
                      Setup Consultation
                    </td>
                    <td className="py-4 px-4 text-sm text-[#4c4546]">Service</td>
                    <td className="py-4 px-4 text-sm font-medium text-[#1a1c1c]">$0.00</td>
                    <td className="py-4 px-4 text-center">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-[#e2e2e2] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black" />
                      </label>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-8 h-8 rounded-full bg-[#f3f3f4] hover:bg-[#dfdfe4] flex items-center justify-center text-[#4c4546] transition-colors cursor-pointer">
                          ✎
                        </button>
                        <button className="w-8 h-8 rounded-full bg-[#f3f3f4] hover:bg-red-100 hover:text-red-600 flex items-center justify-center text-[#4c4546] transition-colors cursor-pointer">
                          ✕
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}