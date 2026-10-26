"use client";

import React, { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { fetchApi } from "@/lib/api";

export default function Navbar() {
  const { user } = useUser();
  const { getToken } = useAuth();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const profileInitials =
    [user?.firstName?.[0], user?.lastName?.[0]]
      .filter(Boolean)
      .join("")
      .toUpperCase() ||
    user?.primaryEmailAddress?.emailAddress.slice(0, 2).toUpperCase() ||
    "P";

  useEffect(() => {
    const loadUnreadCount = async () => {
      try {
        const response = await fetchApi<{ unreadCount: number }>(
          "/notifications/unread-count",
          getToken,
        );
        setUnreadCount(response.unreadCount);
      } catch {
        setUnreadCount(0);
      }
    };

    void loadUnreadCount();
  }, [getToken, pathname]);

  // Hide the floating scanner button if the user is already on the scanner page
  const isScannerPage = pathname === "/scanner";

  const mainNavLinks = [
    { name: "Dashboard", href: "/dashboard", icon: "dashboard" },
    { name: "Inventory", href: "/inventory", icon: "inventory_2" },
    { name: "Orders", href: "/orders", icon: "receipt_long" },
    { name: "Settings", href: "/settings", icon: "settings" },
  ];

  const utilityLinks = [
    {
      name: "Notifications",
      href: "/notifications",
      icon: "notifications",
      badge: true,
    },
    { name: "Help", href: "/help", icon: "help_outline" },
    { name: "Profile", href: "/profile", icon: "person" },
  ];

  return (
    <>
      {/* Top Header Navbar */}
      <header className={`w-full sticky top-0 z-[60] max-w-[1440px] mx-auto px-4 sm:px-8 py-4 backdrop-blur-md ${isMobileMenuOpen ? "" : "[mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"}`}>
        <nav className="rounded-full px-5 sm:px-8 py-3 flex items-center justify-between relative z-50">
          {/* Brand Logo */}
          <Link
            href="/dashboard"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg sm:text-xl font-extrabold tracking-tight text-[#1a1c1c] hover:opacity-80 transition-opacity"
          >
            CAMEWEGO
          </Link>

          {/* Desktop Primary Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {mainNavLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-black text-white shadow-xs"
                      : "text-[#4c4546] hover:bg-[#f3f3f4] hover:text-[#1a1c1c]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Utilities & Mobile Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop Scanner Button */}
            <Link
              href="/scanner"
              className="hidden md:flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-xs font-bold hover:scale-105 active:scale-95 transition-all shadow-xs"
            >
              <span className="material-symbols-outlined text-[18px]">
                qr_code_scanner
              </span>
            </Link>

            {/* Notifications */}
            <Link
              href="/notifications"
              aria-label="Notifications"
              className={`relative p-2.5 rounded-full transition-colors ${
                pathname === "/notifications"
                  ? "bg-[#0000002f] text-black"
                  : "text-[#4c4546] hover:bg-[#f3f3f4] hover:text-[#1a1c1c]"
              }`}
            >
              {unreadCount > 0 && pathname !== "/notifications" && (
                <span className="absolute top-1 right-1 min-w-4 h-4 px-1 flex items-center justify-center text-[9px] font-bold text-white bg-[#ba1a1a] rounded-full animate-pulse">
                  {unreadCount > 9 ? "9+" : unreadCount}
                </span>
              )}
              <span className="material-symbols-outlined text-[20px] block">
                notifications
              </span>
            </Link>

            {/* Help Link (Desktop Only) */}
            <Link
              href="/help"
              aria-label="Help"
              className={`hidden md:flex p-2.5 rounded-full transition-colors ${
                pathname === "/help"
                  ? "bg-black text-white"
                  : "text-[#4c4546] hover:bg-[#f3f3f4] hover:text-[#1a1c1c]"
              }`}
            >
              <span className="material-symbols-outlined text-[20px] block">
                help_outline
              </span>
            </Link>

            <div className="hidden md:block w-px h-5 bg-[#cfc4c5]/40 mx-1" />

            {/* Profile Button (Desktop Only) */}
            <Link
              href="/profile"
              aria-label="Profile"
              className={`hidden md:flex items-center gap-2 p-1 pl-1 pr-4 rounded-full transition-colors border ${
                pathname === "/profile"
                  ? "bg-black text-white border-black"
                  : "border-[#cfc4c5]/40 hover:bg-[#f3f3f4] text-[#1a1c1c]"
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold">
                {user ? (
                  profileInitials
                ) : (
                  <span className="material-symbols-outlined text-[18px]">
                    person
                  </span>
                )}
              </div>
              <span className="text-xs font-bold">Profile</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 text-[#1a1c1c] rounded-full hover:bg-[#f3f3f4] active:scale-95 transition-all"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-[24px] block">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 max-h-[calc(100dvh-7rem)] overflow-y-auto bg-white rounded-3xl p-5 shadow-[0_15px_35px_rgba(0,0,0,0.18)] border border-[#cfc4c5]/50 flex flex-col gap-1.5 relative z-[60] animate-[mobileMenuFade_160ms_ease-out]">
            <div className="text-[11px] font-bold text-[#7e7576] uppercase tracking-wider px-3 pt-1 pb-2">
              Navigation Tabs
            </div>

            {mainNavLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3.5 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                    isActive
                      ? "bg-black text-white shadow-xs"
                      : "text-[#1a1c1c] hover:bg-[#f3f3f4]"
                  }`}
                >
                  <span className="material-symbols-outlined text-[22px]">
                    {link.icon}
                  </span>
                  {link.name}
                </Link>
              );
            })}

            <div className="h-px bg-[#cfc4c5]/30 my-2" />

            <div className="text-[11px] font-bold text-[#7e7576] uppercase tracking-wider px-3 pb-2">
              Account & Utilities
            </div>

            {utilityLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                    isActive
                      ? "bg-black text-white shadow-xs"
                      : "text-[#1a1c1c] hover:bg-[#f3f3f4]"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="material-symbols-outlined text-[22px]">
                      {link.icon}
                    </span>
                    {link.name}
                  </div>
                  {link.badge &&
                    unreadCount > 0 &&
                    pathname !== "/notifications" && (
                      <span className="w-2 h-2 bg-[#ba1a1a] rounded-full" />
                    )}
                </Link>
              );
            })}
          </div>
        )}
      </header>

      {/* Prominent Floating Scanner Action Button (Mobile Only) */}
      {!isScannerPage && (
        <div className="md:hidden fixed bottom-6 right-6 z-50 mb-[env(safe-area-inset-bottom)]">
          <Link
            href="/scanner"
            aria-label="Open QR Scanner"
            className="flex items-center justify-center w-14 h-14 bg-black text-white rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.3)] border border-white/20 active:scale-90 transition-all duration-200"
          >
            <span className="material-symbols-outlined text-[26px]">
              qr_code_scanner
            </span>
          </Link>
        </div>
      )}
    </>
  );
}
