"use client";

import React, { useEffect, useState } from "react";
import { useAuth, useClerk, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { fetchApi } from "@/lib/api";
import AccountSecurity from "@/components/profile/AccountSecurity";

interface AgencyProfile {
  agency: {
    id: string;
    name: string;
    agencyCode: string;
    hqLocation: string;
    primaryRoutes: string;
    activeFleetCount: string;
    serviceType: string | null;
  };
  agent: {
    name: string;
    email: string;
    phone: string;
    agentCode: string;
    role: string;
    station: string;
    shiftStatus: "ON_DUTY" | "OFF_DUTY";
    memberSince: string;
  } | null;
}

type EditableProfile = {
  agencyName: string;
  hqLocation: string;
  primaryRoutes: string;
  activeFleetCount: string;
  serviceType: string;
  agentPhone: string;
  station: string;
};

export default function ProfilePage() {
  const { getToken, isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();
  const { signOut } = useClerk();
  const [profile, setProfile] = useState<AgencyProfile | null>(null);
  const [form, setForm] = useState<EditableProfile | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isUpdatingDuty, setIsUpdatingDuty] = useState(false);
  const [isDeletingAccount, setIsDeletingAccount] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    if (!isLoaded || !isSignedIn) return;
    let active = true;
    fetchApi<AgencyProfile>("/agencies/profile", getToken)
      .then((data) => {
        if (!active) return;
        setProfile(data);
        setForm({
          agencyName: data.agency.name,
          hqLocation: data.agency.hqLocation,
          primaryRoutes: data.agency.primaryRoutes,
          activeFleetCount: data.agency.activeFleetCount,
          serviceType: data.agency.serviceType ?? "",
          agentPhone: data.agent?.phone ?? "",
          station: data.agent?.station ?? data.agency.hqLocation,
        });
      })
      .catch((loadError) => {
        if (active) setError(loadError instanceof Error ? loadError.message : "Could not load your profile.");
      })
      .finally(() => {
        if (active) setIsLoading(false);
      });
    return () => {
      active = false;
    };
  }, [getToken, isLoaded, isSignedIn]);

  const clerkName =
    user?.fullName ||
    [user?.firstName, user?.lastName].filter(Boolean).join(" ") ||
    "Agent";
  const clerkInitials = clerkName
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
  const clerkEmail = user?.primaryEmailAddress?.emailAddress || "Not provided";
  const clerkPhone = profile?.agent?.phone || user?.primaryPhoneNumber?.phoneNumber || "Not provided";
  const memberSinceDate = profile?.agent?.memberSince || user?.createdAt;
  const memberSince = memberSinceDate
    ? new Date(memberSinceDate).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : "—";
  const isOnDuty = profile?.agent?.shiftStatus === "ON_DUTY";

  const updateField = (key: keyof EditableProfile, value: string) => {
    setForm((current) => current ? { ...current, [key]: value } : current);
    setNotice("");
  };

  const cancelEdit = () => {
    if (!profile) return;
    setForm({
      agencyName: profile.agency.name,
      hqLocation: profile.agency.hqLocation,
      primaryRoutes: profile.agency.primaryRoutes,
      activeFleetCount: profile.agency.activeFleetCount,
      serviceType: profile.agency.serviceType ?? "",
      agentPhone: profile.agent?.phone ?? "",
      station: profile.agent?.station ?? profile.agency.hqLocation,
    });
    setIsEditing(false);
    setError("");
  };

  const saveProfile = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form) return;
    setIsSaving(true);
    setError("");
    setNotice("");
    try {
      const updated = await fetchApi<AgencyProfile>("/agencies/profile", getToken, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setProfile(updated);
      setIsEditing(false);
      setNotice("Profile changes saved.");
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : "Could not save profile changes.");
    } finally {
      setIsSaving(false);
    }
  };

  const toggleDuty = async () => {
    if (!profile?.agent || isUpdatingDuty) return;
    setIsUpdatingDuty(true);
    setError("");
    setNotice("");
    try {
      const updated = await fetchApi<AgencyProfile>("/agencies/profile", getToken, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ shiftStatus: isOnDuty ? "OFF_DUTY" : "ON_DUTY" }),
      });
      setProfile(updated);
      setNotice("Duty status updated.");
    } catch (dutyError) {
      setError(dutyError instanceof Error ? dutyError.message : "Could not update duty status.");
    } finally {
      setIsUpdatingDuty(false);
    }
  };

  const deleteAccount = async () => {
    const confirmed = window.confirm(
      "Delete your account? You will lose access immediately. Agency records and ticket history will be retained, and this action cannot be undone.",
    );
    if (!confirmed) return;
    setIsDeletingAccount(true);
    setError("");
    try {
      await fetchApi<{ success: true }>("/agencies/profile/account", getToken, { method: "DELETE" });
      await signOut({ redirectUrl: "/login" });
    } catch (deleteError) {
      setError(deleteError instanceof Error ? deleteError.message : "Could not delete your account.");
      setIsDeletingAccount(false);
    }
  };

  if (isLoading) return <div className="max-w-4xl mx-auto rounded-3xl bg-white/80 p-8 text-sm text-[#7e7576]">Loading your profile…</div>;
  if (!profile || !form) return <div role="alert" className="max-w-4xl mx-auto rounded-3xl bg-white/80 p-8 text-sm text-red-700">{error || "No agency profile is linked to this account."}</div>;

  const stats = [
    { label: "Tickets Issued Today", value: "—", icon: "confirmation_number" },
    { label: "Passengers Served", value: "—", icon: "groups" },
    { label: "Active Routes", value: form.primaryRoutes || "—", icon: "route" },
  ];

  const profileValue = (key: keyof EditableProfile, value: string, className = "font-semibold text-[#1a1c1c]") =>
    isEditing ? (
      <input
        aria-label={key}
        value={form[key]}
        required={key !== "serviceType"}
        onChange={(event) => updateField(key, event.target.value)}
        className="max-w-[60%] rounded-lg border border-[#cfc4c5]/50 bg-white px-2 py-1 text-right text-sm font-semibold text-[#1a1c1c] outline-none focus:ring-2 focus:ring-black"
      />
    ) : (
      <span className={className}>{value || "Not provided"}</span>
    );

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
              {clerkInitials}
            </div>
            {/* Duty Status Dot Indicator */}
            <span
              className={`absolute bottom-1 right-1 w-5 h-5 rounded-full border-2 border-white ${
                isOnDuty ? "bg-emerald-500" : "bg-gray-400"
              }`}
              title={isOnDuty ? "On Duty" : "Off Duty"}
            />
          </div>

          {/* User & Agency Details */}
          <div className="flex-1 text-center sm:text-left space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                {/* Prominent Agency Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white rounded-full text-xs font-bold tracking-wide uppercase mb-1.5">
                  <span className="material-symbols-outlined text-[15px]">
                    directions_bus
                  </span>
                  {profile.agency.name}
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1a1c1c] tracking-tight">
                  {clerkName}
                </h1>
                <p className="text-sm font-semibold text-[#7e7576]">
                  {(profile.agent?.role || "Agency Operator").replaceAll("_", " ")}
                </p>
              </div>

              {/* On Duty Toggle Button */}
              <button
                type="button"
                disabled={!profile.agent || isUpdatingDuty}
                onClick={toggleDuty}
                className={`self-center sm:self-start px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border disabled:opacity-60 ${
                  isOnDuty
                    ? "bg-emerald-500/10 text-emerald-700 border-emerald-500/30 hover:bg-emerald-500/20"
                    : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${isOnDuty ? "bg-emerald-500" : "bg-gray-400"}`}
                />
                {isUpdatingDuty ? "Saving…" : isOnDuty ? "Status: On Duty" : "Status: Off Duty"}
              </button>
              <button
                type="button"
                onClick={() => isEditing ? cancelEdit() : setIsEditing(true)}
                className="self-center sm:self-start px-4 py-2 rounded-full bg-black text-white text-xs font-bold transition-all hover:scale-[1.02]"
              >
                {isEditing ? "Cancel Edit" : "Edit Profile"}
              </button>
            </div>

            {/* Tags / Badges */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#f3f3f4] text-[#1a1c1c] rounded-full text-xs font-semibold">
                <span className="material-symbols-outlined text-[16px]">
                  badge
                </span>
                {profile.agent?.agentCode || "Agent ID pending"}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#f3f3f4] text-[#1a1c1c] rounded-full text-xs font-semibold">
                <span className="material-symbols-outlined text-[16px]">
                  location_on
                </span>
                {profile.agent?.station || profile.agency.hqLocation}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white/80 backdrop-blur-xl border border-white/80 rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[24px]">
                {stat.icon}
              </span>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-[#1a1c1c]">
                {stat.value}
              </p>
              <p className="text-xs font-medium text-[#7e7576]">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {(error || notice) && (
        <p role={error ? "alert" : "status"} className={`rounded-2xl px-4 py-3 text-sm ${error ? "bg-red-50 text-red-700" : "bg-emerald-50 text-emerald-800"}`}>
          {error || notice}
        </p>
      )}

      <form onSubmit={saveProfile}>
      {/* Agency Details & Agent Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Agency Information Card */}
        <div className="bg-white/80 backdrop-blur-xl border border-white/80 rounded-3xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] space-y-4">
          <h2 className="text-lg font-extrabold text-[#1a1c1c] flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">
              domain
            </span>
            Agency Details
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between py-2 border-b border-[#cfc4c5]/20">
              <span className="text-[#7e7576] font-medium">Agency Name</span>
              <span className="font-extrabold text-[#1a1c1c]">
                {profileValue("agencyName", profile.agency.name, "font-extrabold text-[#1a1c1c]")}
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-[#cfc4c5]/20">
              <span className="text-[#7e7576] font-medium">Agency Code</span>
              <span className="font-semibold text-[#1a1c1c]">
                {profile.agency.agencyCode}
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-[#cfc4c5]/20">
              <span className="text-[#7e7576] font-medium">
                Primary Routes / Network
              </span>
              <span className="font-semibold text-[#1a1c1c] text-right">
                {profileValue("primaryRoutes", profile.agency.primaryRoutes)}
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-[#cfc4c5]/20">
              <span className="text-[#7e7576] font-medium">Fleet Size</span>
              <span className="font-semibold text-[#1a1c1c]">
                {profileValue("activeFleetCount", profile.agency.activeFleetCount)}
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-[#7e7576] font-medium">Service Type</span>
              <span className="font-semibold text-[#1a1c1c] text-right">
                {profileValue("serviceType", profile.agency.serviceType || "")}
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-t border-[#cfc4c5]/20">
              <span className="text-[#7e7576] font-medium">Headquarters</span>
              {profileValue("hqLocation", profile.agency.hqLocation)}
            </div>
          </div>
        </div>

        {/* Agent Account & Contact Details */}
        <div className="bg-white/80 backdrop-blur-xl border border-white/80 rounded-3xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] space-y-4">
          <h2 className="text-lg font-extrabold text-[#1a1c1c] flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">
              manage_accounts
            </span>
            Agent Details & Actions
          </h2>

          <div className="space-y-3 text-sm pb-2">
            <div className="flex items-center justify-between py-2 border-b border-[#cfc4c5]/20">
              <span className="text-[#7e7576] font-medium">Email Address</span>
              <span className="font-semibold text-[#1a1c1c]">{clerkEmail}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-[#cfc4c5]/20">
              <span className="text-[#7e7576] font-medium">Phone Number</span>
              {profileValue("agentPhone", clerkPhone)}
            </div>
            <div className="flex items-center justify-between py-2 border-b border-[#cfc4c5]/20">
              <span className="text-[#7e7576] font-medium">
                Assigned Terminal
              </span>
              <span className="font-semibold text-[#1a1c1c] text-right">
                {profileValue("station", profile.agent?.station || profile.agency.hqLocation)}
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-[#7e7576] font-medium">Member Since</span>
              <span className="font-semibold text-[#1a1c1c]">
                {memberSince}
              </span>
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-[#cfc4c5]/30">
            <Link
              href="/settings"
              className="flex items-center justify-between p-3 bg-[#f3f3f4] hover:bg-black hover:text-white rounded-2xl transition-all group text-sm font-semibold"
            >
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[20px]">
                  settings
                </span>
                <span>Manage {profile.agency.name} Settings</span>
              </div>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
            <button
              type="button"
              onClick={() => signOut({ redirectUrl: "/login" })}
              className="flex w-full items-center justify-between p-3 bg-red-50 text-red-700 hover:bg-red-100 rounded-2xl transition-all group text-sm font-semibold"
            >
              <span className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[20px]">
                  logout
                </span>
                Sign Out
              </span>
            </button>
          </div>
        </div>
      </div>
      {isEditing && (
        <div className="flex justify-end gap-3 pt-4">
          <button type="button" onClick={cancelEdit} className="px-5 py-2.5 rounded-xl border border-[#cfc4c5]/50 bg-white text-xs font-semibold text-[#4c4546]">Cancel</button>
          <button type="submit" disabled={isSaving || !profile.agent} className="px-5 py-2.5 rounded-xl bg-black text-white text-xs font-semibold shadow-md disabled:opacity-50">{isSaving ? "Saving…" : "Save Changes"}</button>
        </div>
      )}
      </form>
      <AccountSecurity />
      <section className="rounded-3xl border border-rose-200 bg-rose-50/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-base font-bold text-rose-900">Delete account</h2>
            <p className="mt-1 max-w-2xl text-sm text-rose-800/80">Your sign-in account will be deleted. Agency details, tickets, and history will remain available to the agency.</p>
          </div>
          <button type="button" onClick={deleteAccount} disabled={isDeletingAccount} className="shrink-0 rounded-xl bg-rose-700 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-rose-800 disabled:opacity-60">
            {isDeletingAccount ? "Deleting account…" : "Delete My Account"}
          </button>
        </div>
      </section>
    </div>
  );
}
