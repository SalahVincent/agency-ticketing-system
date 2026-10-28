"use client";

import AccountSecurity from "@/components/profile/AccountSecurity";

export default function SettingsPage() {
  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col gap-6 px-4 py-6 pb-16 sm:px-6">
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight text-[#1a1c1c] sm:text-3xl">Settings</h1>
        <p className="max-w-2xl text-sm text-[#4c4546]">Manage your account security, active sessions, and account access.</p>
      </header>
      <AccountSecurity />
    </div>
  );
}
