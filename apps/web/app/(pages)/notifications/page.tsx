'use client';

import React, { useState } from 'react';

interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
  type: 'sale' | 'system' | 'checkin' | 'alert';
  read: boolean;
  group: 'today' | 'yesterday' | 'older';
}

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'unread'>('all');

  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'Ticket Bulk Order Processed',
      description: 'Order #ORD-8942 for 15 VIP tickets ($1,800.00) was successfully completed.',
      time: '10m ago',
      type: 'sale',
      read: false,
      group: 'today',
    },
    {
      id: '2',
      title: 'High Scan Activity Detected',
      description: 'Gate 2 scanner processed over 150 check-ins in the last 15 minutes.',
      time: '2h ago',
      type: 'checkin',
      read: false,
      group: 'today',
    },
    {
      id: '3',
      title: 'Inventory Alert: VIP Section A',
      description: 'VIP Section A ticket capacity has reached 90%. Consider adjusting quota.',
      time: '1d ago',
      type: 'alert',
      read: true,
      group: 'yesterday',
    },
    {
      id: '4',
      title: 'System Maintenance Scheduled',
      description: 'System updates will occur at 02:00 UTC. Gatekeeper services will remain operational.',
      time: '3d ago',
      type: 'system',
      read: true,
      group: 'older',
    },
  ]);

  const filteredNotifications = notifications.filter((n) =>
    activeTab === 'unread' ? !n.read : true
  );

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const getIcon = (type: Notification['type']) => {
    switch (type) {
      case 'sale':
        return <span className="material-symbols-outlined text-green-600">payments</span>;
      case 'checkin':
        return <span className="material-symbols-outlined text-blue-600">qr_code_scanner</span>;
      case 'alert':
        return <span className="material-symbols-outlined text-amber-600">warning</span>;
      case 'system':
        return <span className="material-symbols-outlined text-purple-600">tune</span>;
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1a1c1c] tracking-tight">
            Notifications
          </h1>
          <p className="text-sm text-[#4c4546] mt-1">
            Stay updated on sales, gate scanner alerts, and system activities.
          </p>
        </div>

        <button
          type="button"
          onClick={markAllAsRead}
          className="self-start sm:self-auto text-xs font-semibold text-[#1a1c1c] bg-[#e2e2e2]/60 hover:bg-[#e2e2e2] px-4 py-2 rounded-full transition-colors"
        >
          Mark all as read
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-4 border-b border-[#cfc4c5]/30 pb-3">
        <button
          type="button"
          onClick={() => setActiveTab('all')}
          className={`text-sm font-medium transition-all ${
            activeTab === 'all'
              ? 'text-black font-semibold border-b-2 border-black -mb-3.5 pb-3'
              : 'text-[#4c4546] hover:text-[#1a1c1c]'
          }`}
        >
          All
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('unread')}
          className={`text-sm font-medium transition-all ${
            activeTab === 'unread'
              ? 'text-black font-semibold border-b-2 border-black -mb-3.5 pb-3'
              : 'text-[#4c4546] hover:text-[#1a1c1c]'
          }`}
        >
          Unread ({notifications.filter((n) => !n.read).length})
        </button>
      </div>

      {/* Notification List */}
      <div className="space-y-4">
        {filteredNotifications.length === 0 ? (
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl p-12 text-center text-[#4c4546]">
            <span className="material-symbols-outlined text-4xl mb-2 text-[#7e7576]">
              notifications_off
            </span>
            <p className="text-sm font-medium">No notifications found.</p>
          </div>
        ) : (
          filteredNotifications.map((item) => (
            <div
              key={item.id}
              className={`backdrop-blur-xl border border-white/80 rounded-2xl sm:rounded-3xl p-4 sm:p-5 transition-transform duration-200 hover:scale-[1.005] flex items-start gap-4 relative overflow-hidden ${
                item.read ? 'bg-white/40' : 'bg-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)]'
              }`}
            >
              {!item.read && (
                <span className="absolute top-5 right-5 w-2.5 h-2.5 bg-[#ba1a1a] rounded-full" />
              )}
              
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                {getIcon(item.type)}
              </div>

              <div className="flex-1 pr-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h3 className="text-sm sm:text-base font-semibold text-[#1a1c1c]">
                    {item.title}
                  </h3>
                  <span className="text-xs text-[#7e7576] font-medium">{item.time}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#4c4546] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}