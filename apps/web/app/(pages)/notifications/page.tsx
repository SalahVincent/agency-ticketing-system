"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { fetchApi, postApi } from "@/lib/api";

interface NotificationItem {
  id: string;
  type: "TICKET_SALE" | "CHECK_IN" | "INVENTORY_ALERT" | "SYSTEM";
  title: string;
  description: string;
  createdAt: string;
  read: boolean;
}

interface NotificationListResponse {
  notifications: NotificationItem[];
  unreadCount: number;
}

const formatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Africa/Douala",
});

const getTimeAgo = (dateString: string) => {
  const createdAt = new Date(dateString);
  const diffMs = Date.now() - createdAt.getTime();
  const diffMinutes = Math.max(1, Math.round(diffMs / 60000));

  if (diffMinutes < 1) return "just now";
  if (diffMinutes < 60) return `${diffMinutes}m ago`;

  const diffHours = Math.round(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours}h ago`;

  const diffDays = Math.round(diffHours / 24);
  if (diffDays === 1) return "1d ago";
  return `${diffDays}d ago`;
};

const getNotificationGroup = (
  createdAt: string,
): "today" | "yesterday" | "older" => {
  const date = new Date(createdAt);
  const now = new Date();
  const nowInDouala = new Date(
    now.toLocaleString("en-US", { timeZone: "Africa/Douala" }),
  );
  const createdInDouala = new Date(
    date.toLocaleString("en-US", { timeZone: "Africa/Douala" }),
  );
  const diffDays = Math.floor(
    (nowInDouala.setHours(0, 0, 0, 0) - createdInDouala.setHours(0, 0, 0, 0)) /
      86400000,
  );

  if (diffDays === 0) return "today";
  if (diffDays === 1) return "yesterday";
  return "older";
};

const getIcon = (type: NotificationItem["type"]) => {
  switch (type) {
    case "TICKET_SALE":
      return (
        <span className="material-symbols-outlined text-green-600">
          payments
        </span>
      );
    case "CHECK_IN":
      return (
        <span className="material-symbols-outlined text-blue-600">
          qr_code_scanner
        </span>
      );
    case "INVENTORY_ALERT":
      return (
        <span className="material-symbols-outlined text-amber-600">
          warning
        </span>
      );
    case "SYSTEM":
      return (
        <span className="material-symbols-outlined text-purple-600">tune</span>
      );
    default:
      return (
        <span className="material-symbols-outlined text-[#7e7576]">
          notifications
        </span>
      );
  }
};

export default function NotificationsPage() {
  const { getToken } = useAuth();
  const [activeTab, setActiveTab] = useState<"all" | "unread">("all");
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMarkingAllRead, setIsMarkingAllRead] = useState(false);
  const [error, setError] = useState("");

  const loadNotifications = async () => {
    try {
      setError("");
      const response = await fetchApi<NotificationListResponse>(
        `/notifications?filter=${activeTab}`,
        getToken,
      );
      setNotifications(response.notifications);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unable to load notifications.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void loadNotifications();
  }, [activeTab]);

  const filteredNotifications = useMemo(
    () =>
      notifications.filter((item) => {
        if (activeTab === "unread") {
          return !item.read;
        }
        return true;
      }),
    [activeTab, notifications],
  );

  const markAllAsRead = async () => {
    try {
      setIsMarkingAllRead(true);
      await postApi("/notifications/read-all", getToken, {});
      await loadNotifications();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to mark notifications as read.",
      );
    } finally {
      setIsMarkingAllRead(false);
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-6 space-y-6">
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
          disabled={
            isMarkingAllRead || notifications.every((item) => item.read)
          }
          className="self-start sm:self-auto text-xs font-semibold text-[#1a1c1c] bg-[#e2e2e2]/60 hover:bg-[#e2e2e2] px-4 py-2 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isMarkingAllRead ? "Updating..." : "Mark all as read"}
        </button>
      </div>

      <div className="flex gap-4 border-b border-[#cfc4c5]/30 pb-3">
        <button
          type="button"
          onClick={() => setActiveTab("all")}
          className={`text-sm font-medium transition-all ${
            activeTab === "all"
              ? "text-black font-semibold border-b-2 border-black -mb-3.5 pb-3"
              : "text-[#4c4546] hover:text-[#1a1c1c]"
          }`}
        >
          All
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("unread")}
          className={`text-sm font-medium transition-all ${
            activeTab === "unread"
              ? "text-black font-semibold border-b-2 border-black -mb-3.5 pb-3"
              : "text-[#4c4546] hover:text-[#1a1c1c]"
          }`}
        >
          Unread ({notifications.filter((item) => !item.read).length})
        </button>
      </div>

      {error ? (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-2xl p-4 text-sm">
          {error}
        </div>
      ) : null}

      <div className="space-y-4">
        {isLoading ? (
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl p-12 text-center text-[#4c4546]">
            <span className="material-symbols-outlined text-4xl mb-2 text-[#7e7576] animate-pulse">
              sync
            </span>
            <p className="text-sm font-medium">Loading notifications...</p>
          </div>
        ) : filteredNotifications.length === 0 ? (
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
                item.read
                  ? "bg-white/40"
                  : "bg-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
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
                  <span className="text-xs text-[#7e7576] font-medium">
                    {getTimeAgo(item.createdAt)}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#4c4546] leading-relaxed">
                  {item.description}
                </p>
                <p className="mt-2 text-[11px] text-[#7e7576]">
                  {formatter.format(new Date(item.createdAt))}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
