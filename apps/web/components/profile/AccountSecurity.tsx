"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useSession, useUser } from "@clerk/nextjs";

type Tab = "account" | "security" | "sessions";

export default function AccountSecurity() {
  const { user, isLoaded } = useUser();
  const { session: currentSession } = useSession();
  const [tab, setTab] = useState<Tab>("account");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [sessions, setSessions] = useState<any[]>([]);
  const [busy, setBusy] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    if (!user) return;
    setFirstName(user.firstName || "");
    setLastName(user.lastName || "");
    setEmail(user.primaryEmailAddress?.emailAddress || "");
    user.getSessions().then(setSessions).catch(() => setSessions([]));
  }, [user]);

  const updateName = async (event: FormEvent) => {
    event.preventDefault();
    if (!user) return;
    setBusy(true); setFeedback(null);
    try {
      await user.update({ firstName, lastName });
      setFeedback({ type: "success", text: "Account profile updated successfully." });
    } catch (error: any) {
      setFeedback({ type: "error", text: error?.errors?.[0]?.message || "Failed to update profile." });
    } finally { setBusy(false); }
  };

  const updatePassword = async (event: FormEvent) => {
    event.preventDefault();
    if (!user) return;
    setBusy(true); setFeedback(null);
    try {
      await user.updatePassword({ currentPassword, newPassword });
      setCurrentPassword(""); setNewPassword("");
      setFeedback({ type: "success", text: "Password changed successfully." });
    } catch (error: any) {
      setFeedback({ type: "error", text: error?.errors?.[0]?.message || "Failed to change password." });
    } finally { setBusy(false); }
  };

  const revoke = async (id: string) => {
    const target = sessions.find((item) => item.id === id);
    if (!target) return;
    try {
      await target.revoke();
      setSessions((items) => items.filter((item) => item.id !== id));
    } catch {
      setFeedback({ type: "error", text: "Unable to revoke this session." });
    }
  };

  const tabClass = (value: Tab) => `px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${tab === value ? "bg-white text-black shadow-sm" : "text-[#7e7576] hover:text-black"}`;
  const inputClass = "w-full mt-1 px-4 py-2.5 bg-white border border-[#cfc4c5]/50 rounded-xl text-sm font-semibold outline-none focus:ring-2 focus:ring-black transition-all";

  return (
    <section className="bg-white/60 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.03)] space-y-6">
      <div className="border-b border-[#cfc4c5]/30 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div><h2 className="text-lg font-bold text-[#1a1c1c]">Account &amp; Security</h2><p className="text-xs text-[#7e7576]">Manage personal credentials, authentication, and active sessions.</p></div>
        <div className="flex items-center p-1 bg-gray-200/50 rounded-2xl self-start sm:self-auto">
          {(["account", "security", "sessions"] as Tab[]).map((item) => <button key={item} type="button" onClick={() => setTab(item)} className={tabClass(item)}>{item === "account" ? "Profile" : item[0].toUpperCase() + item.slice(1)}</button>)}
        </div>
      </div>
      {feedback && <div className={`p-3.5 rounded-2xl text-xs font-medium border ${feedback.type === "success" ? "bg-emerald-50 text-emerald-800 border-emerald-200" : "bg-rose-50 text-rose-800 border-rose-200"}`}>{feedback.text}</div>}
      {!isLoaded ? <div className="py-8 text-center text-xs text-[#7e7576] animate-pulse">Loading account credentials...</div> : <>
        {tab === "account" && <form onSubmit={updateName} className="space-y-6">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 border border-white"><div className="w-14 h-14 rounded-2xl bg-gray-100 overflow-hidden border border-gray-200 flex-shrink-0">{user?.imageUrl ? <img src={user.imageUrl} alt="Agent avatar" className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center font-bold text-gray-400">{firstName[0] || "A"}</div>}</div><div><p className="text-sm font-bold text-[#1a1c1c]">{user?.fullName || "Agent Identity"}</p><p className="text-xs text-[#7e7576]">Managed via Clerk Auth · Joined {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}</p></div></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><label className="text-xs font-bold text-[#7e7576] uppercase tracking-wider">First Name<input value={firstName} onChange={(e) => setFirstName(e.target.value)} className={inputClass} /></label><label className="text-xs font-bold text-[#7e7576] uppercase tracking-wider">Last Name<input value={lastName} onChange={(e) => setLastName(e.target.value)} className={inputClass} /></label></div>
          <div><label className="text-xs font-bold text-[#7e7576] uppercase tracking-wider">Primary Email Address</label><div className="flex items-center gap-2 mt-1"><input type="email" readOnly value={email} className="w-full px-4 py-2.5 bg-gray-100/80 border border-[#cfc4c5]/30 rounded-xl text-sm font-medium text-[#7e7576]" /><span className="px-3 py-2 bg-emerald-100 text-emerald-800 rounded-xl text-[10px] font-bold uppercase tracking-wider">Verified</span></div></div>
          <div className="flex justify-end"><button disabled={busy} className="px-5 py-2.5 bg-[#1a1c1c] text-white rounded-xl text-xs font-semibold shadow-md hover:bg-black disabled:opacity-50">{busy ? "Updating..." : "Save Profile Changes"}</button></div>
        </form>}
        {tab === "security" && <form onSubmit={updatePassword} className="space-y-6"><div className="space-y-4"><label className="block text-xs font-bold text-[#7e7576] uppercase tracking-wider">Current Password<input required type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} className={inputClass} /></label><label className="block text-xs font-bold text-[#7e7576] uppercase tracking-wider">New Password<input required type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className={inputClass} /></label></div><div className="p-4 rounded-2xl bg-white/80 border border-white flex items-center justify-between"><div><p className="text-sm font-bold text-[#1a1c1c]">Two-Factor Authentication (2FA)</p><p className="text-xs text-[#7e7576]">Require an authenticator app or SMS code on login.</p></div><span className="px-3 py-1 bg-gray-100 text-[#7e7576] border border-gray-200 rounded-xl text-[10px] font-bold uppercase">{user?.twoFactorEnabled ? "Enabled" : "Disabled"}</span></div><div className="flex justify-end"><button disabled={busy || !currentPassword || !newPassword} className="px-5 py-2.5 bg-[#1a1c1c] text-white rounded-xl text-xs font-semibold shadow-md disabled:opacity-50">{busy ? "Updating..." : "Update Password"}</button></div></form>}
        {tab === "sessions" && <div className="space-y-4"><p className="text-xs text-[#7e7576]">Active agent web terminals and browsers authenticated with your account.</p><div className="space-y-3">{sessions.length === 0 ? <p className="text-xs text-gray-500 py-4">No active sessions detected.</p> : sessions.map((sess) => <div key={sess.id} className="p-4 rounded-2xl bg-white/80 border border-white flex items-center justify-between"><div><div className="flex items-center gap-2"><p className="text-sm font-bold text-[#1a1c1c]">{sess.latestActivity?.isMobile ? "Mobile Browser" : "Desktop Workstation"}</p>{sess.id === currentSession?.id && <span className="px-2 py-0.5 bg-black text-white rounded-md text-[9px] font-bold uppercase">Current</span>}</div><p className="text-xs text-[#7e7576]">Last active: {new Date(sess.lastActiveAt).toLocaleString()}</p></div>{sess.id !== currentSession?.id && <button type="button" onClick={() => revoke(sess.id)} className="px-3 py-1.5 bg-rose-50 text-rose-700 hover:bg-rose-100 rounded-xl text-xs font-semibold">Revoke</button>}</div>)}</div></div>}
      </>}
    </section>
  );
}
