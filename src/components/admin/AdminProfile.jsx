import React, { useState } from "react";
import { Camera, Lock, Save, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../context/StoreContext";
import { PageHeader } from "../common/ui";

const AdminProfile = () => {
  const { toast, stats, admin, adminLogout } = useStore();
  const [form, setForm] = useState({ name: admin?.name || "Admin Sharma", email: admin?.email || "admin123@email.com", phone: "+91 98765 00000", role: admin?.role || "Owner / Manager" });
  const [pw, setPw] = useState({ current: "", next: "", confirm: "" });
  const navigate = useNavigate();

  return (
    <div className="space-y-5">
      <PageHeader eyebrow="Account" title="Admin Profile" description="Manage your identity, security and preferences." />
      <div className="grid gap-6 xl:grid-cols-[1fr_1.2fr]">
        <article className="rounded-2xl border border-amber-100/70 bg-white p-6 text-center shadow-md">
          <div className="relative mx-auto h-28 w-28"><span className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-4xl font-bold text-white">A</span>
            <button className="absolute bottom-1 right-1 rounded-full bg-slate-950 p-2 text-white" aria-label="Change photo"><Camera className="h-4 w-4" /></button></div>
          <h2 className="mt-4 text-xl font-bold">{form.name}</h2><p className="text-sm text-slate-400">{form.role}</p>
          <div className="mt-5 grid grid-cols-3 gap-3 text-center">
            {[["Orders", stats.totalOrders], ["Revenue", "₹12.5L"], ["Rating", "4.8★"]].map(([k, v]) => (
              <div key={k} className="rounded-xl bg-amber-50 p-3"><p className="font-bold">{v}</p><p className="text-xs text-slate-400">{k}</p></div>))}
          </div>
          <button onClick={() => { adminLogout(); navigate("/"); }} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-50 py-2.5 text-sm font-semibold text-red-600"><LogOut className="h-4 w-4" /> Logout</button>
        </article>
        <div className="space-y-6">
          <form onSubmit={(e) => { e.preventDefault(); toast("Profile updated"); }} className="rounded-2xl border border-amber-100/70 bg-white p-6 shadow-md">
            <h3 className="font-bold">Account settings</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium">Full name<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="theme-input mt-1.5" /></label>
              <label className="text-sm font-medium">Role<input value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="theme-input mt-1.5" /></label>
              <label className="text-sm font-medium">Email<input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="theme-input mt-1.5" /></label>
              <label className="text-sm font-medium">Phone<input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="theme-input mt-1.5" /></label>
            </div>
            <button className="mt-4 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white"><Save className="h-4 w-4" /> Save changes</button>
          </form>
          <form onSubmit={(e) => { e.preventDefault(); if (pw.next !== pw.confirm) return toast("Passwords do not match", "error"); toast("Password changed"); setPw({ current: "", next: "", confirm: "" }); }} className="rounded-2xl border border-amber-100/70 bg-white p-6 shadow-md">
            <h3 className="flex items-center gap-2 font-bold"><Lock className="h-4 w-4 text-amber-500" /> Change password</h3>
            <div className="mt-4 grid gap-4">
              <label className="text-sm font-medium">Current password<input type="password" value={pw.current} onChange={(e) => setPw({ ...pw, current: e.target.value })} className="theme-input mt-1.5" required /></label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium">New password<input type="password" value={pw.next} onChange={(e) => setPw({ ...pw, next: e.target.value })} className="theme-input mt-1.5" required /></label>
                <label className="text-sm font-medium">Confirm password<input type="password" value={pw.confirm} onChange={(e) => setPw({ ...pw, confirm: e.target.value })} className="theme-input mt-1.5" required /></label>
              </div>
            </div>
            <button className="mt-4 rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white">Update password</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AdminProfile;
