import React, { useState } from "react";
import { Save, Store, Clock3, Receipt, Wallet } from "lucide-react";
import { useStore } from "../../context/StoreContext";
import { PageHeader } from "../common/ui";

const Settings = () => {
  const { settings, setSettings, toast } = useStore();
  const [form, setForm] = useState(settings);
  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));
  const save = (e) => { e.preventDefault(); setSettings(form); toast("EatMore settings saved"); };

  return (
    <div className="space-y-5">
      <PageHeader eyebrow="Setup" title="EatMore Settings" description="Control branding, hours, taxes and payment options." />
      <form onSubmit={save} className="grid gap-6 xl:grid-cols-2">
        <section className="rounded-2xl border border-amber-100/70 bg-white p-5 shadow-md sm:p-6">
          <h2 className="flex items-center gap-2 font-bold"><Store className="h-5 w-5 text-amber-500" /> EatMore Information</h2>
          <div className="mt-4 grid gap-4">
            <label className="text-sm font-medium">Restaurant name<input value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="EatMore Restaurant" className="theme-input mt-1.5" /></label>
            <label className="text-sm font-medium">Description<textarea value={form.description} onChange={(e) => set("description", e.target.value)} rows="3" className="theme-input mt-1.5" /></label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium">Phone<input value={form.phone} onChange={(e) => set("phone", e.target.value)} className="theme-input mt-1.5" /></label>
              <label className="text-sm font-medium">Email<input value={form.email} onChange={(e) => set("email", e.target.value)} className="theme-input mt-1.5" /></label>
            </div>
            <label className="text-sm font-medium">Address<textarea value={form.address} onChange={(e) => set("address", e.target.value)} rows="2" className="theme-input mt-1.5" /></label>
          </div>
        </section>
        <div className="space-y-6">
          <section className="rounded-2xl border border-amber-100/70 bg-white p-5 shadow-md sm:p-6">
            <h2 className="flex items-center gap-2 font-bold"><Clock3 className="h-5 w-5 text-amber-500" /> Business Settings</h2>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <label className="text-sm font-medium">Opening<input type="time" value={form.openTime} onChange={(e) => set("openTime", e.target.value)} className="theme-input mt-1.5" /></label>
              <label className="text-sm font-medium">Closing<input type="time" value={form.closeTime} onChange={(e) => set("closeTime", e.target.value)} className="theme-input mt-1.5" /></label>
            </div>
            <div className="mt-4 space-y-2.5">{[["delivery", "Delivery available"], ["takeaway", "Takeaway available"], ["dineIn", "Dine-in available"]].map(([k, l]) => (
              <label key={k} className="flex items-center justify-between rounded-xl bg-amber-50/60 px-4 py-2.5 text-sm font-medium"><span>{l}</span>
                <button type="button" onClick={() => set(k, !form[k])} className={`relative h-6 w-11 rounded-full transition ${form[k] ? "bg-emerald-500" : "bg-slate-300"}`}><span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition ${form[k] ? "left-[22px]" : "left-0.5"}`} /></button></label>))}
            </div>
          </section>
          <section className="rounded-2xl border border-amber-100/70 bg-white p-5 shadow-md sm:p-6">
            <h2 className="flex items-center gap-2 font-bold"><Receipt className="h-5 w-5 text-amber-500" /> Tax Settings</h2>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {[["gst", "GST %"], ["serviceCharge", "Service %"], ["deliveryFee", "Delivery ₹"]].map(([k, l]) => (
                <label key={k} className="text-sm font-medium">{l}<input type="number" min="0" value={form[k]} onChange={(e) => set(k, Number(e.target.value))} className="theme-input mt-1.5" /></label>))}
            </div>
          </section>
          <section className="rounded-2xl border border-amber-100/70 bg-white p-5 shadow-md sm:p-6">
            <h2 className="flex items-center gap-2 font-bold"><Wallet className="h-5 w-5 text-amber-500" /> Payment Settings</h2>
            <div className="mt-4 grid grid-cols-2 gap-2.5">{[["upi", "UPI"], ["cash", "Cash"], ["card", "Card"], ["online", "Online"]].map(([k, l]) => (
              <label key={k} className="inline-flex items-center gap-2 rounded-xl border border-amber-100 px-4 py-2.5 text-sm font-medium"><input type="checkbox" checked={!!form[k]} onChange={(e) => set(k, e.target.checked)} className="h-5 w-5 accent-amber-500" />{l}</label>))}
            </div>
            <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 py-3 text-sm font-semibold text-white"><Save className="h-4 w-4" /> Save all settings</button>
          </section>
        </div>
      </form>
    </div>
  );
};
export default Settings;
