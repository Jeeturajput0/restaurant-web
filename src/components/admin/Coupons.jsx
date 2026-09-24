import React, { useState } from "react";
import { Plus, Pencil, Trash2, Copy, Power } from "lucide-react";
import { useStore } from "../../context/StoreContext";
import Modal from "../common/Modal";
import ConfirmDialog from "../common/ConfirmDialog";
import { PageHeader } from "../common/ui";
import { formatCurrency } from "../../lib/menu";

const Coupons = () => {
  const { coupons, saveCoupon, deleteCoupon, toast } = useStore();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ code: "", type: "Percentage", value: 10, minOrder: 299, maxDiscount: 100, start: "2026-09-01", end: "2026-12-31", limit: 500, used: 0, active: true });
  const [del, setDel] = useState(null);
  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));
  const submit = (e) => { e.preventDefault(); saveCoupon({ ...form, value: Number(form.value), minOrder: Number(form.minOrder), maxDiscount: Number(form.maxDiscount), limit: Number(form.limit), code: form.code.toUpperCase() }); setOpen(false); };

  return (
    <div className="space-y-5">
      <PageHeader eyebrow="Marketing" title="Offers & Coupons" description={`${coupons.filter((c) => c.active).length} active promotions`}
        actions={<button onClick={() => { setForm({ code: "", type: "Percentage", value: 10, minOrder: 299, maxDiscount: 100, start: "2026-09-01", end: "2026-12-31", limit: 500, used: 0, active: true }); setOpen(true); }} className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white"><Plus className="h-4 w-4" /> Create Offer</button>} />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {coupons.map((c) => (
          <article key={c.id} className={`relative overflow-hidden rounded-2xl border bg-white p-5 shadow-md ${c.active ? "border-amber-200" : "border-slate-200 opacity-70"}`}>
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-amber-400 to-orange-500" />
            <div className="flex items-start justify-between gap-2">
              <div><p className="inline-flex items-center gap-2 rounded-lg border-2 border-dashed border-amber-300 bg-amber-50 px-3 py-1.5 font-mono font-bold text-amber-700">{c.code}
                <button onClick={() => { navigator.clipboard?.writeText(c.code); toast("Code copied"); }} aria-label="Copy code"><Copy className="h-3.5 w-3.5" /></button></p>
                <p className="mt-2 text-2xl font-bold">{c.type === "Percentage" ? `${c.value}% OFF` : `${formatCurrency(c.value)} OFF`}</p>
                <p className="text-xs text-slate-500">Min {formatCurrency(c.minOrder)} · Max discount {formatCurrency(c.maxDiscount)}</p></div>
              <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${c.active ? "bg-emerald-100 text-emerald-700" : "bg-slate-200 text-slate-500"}`}>{c.active ? "Active" : "Inactive"}</span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-amber-500" style={{ width: `${Math.min(100, (c.used / Math.max(1, c.limit)) * 100)}%` }} /></div>
            <p className="mt-1.5 text-xs text-slate-400">{c.used}/{c.limit} used · {c.start} → {c.end}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <button onClick={() => { setForm({ ...c }); setOpen(true); }} className="inline-flex items-center gap-1 rounded-lg bg-amber-50 px-2.5 py-1.5 text-xs font-semibold text-amber-700"><Pencil className="h-3.5 w-3.5" /> Edit</button>
              <button onClick={() => saveCoupon({ ...c, active: !c.active })} className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-semibold"><Power className="h-3.5 w-3.5" /> {c.active ? "Deactivate" : "Activate"}</button>
              <button onClick={() => setDel(c.id)} className="inline-flex items-center gap-1 rounded-lg bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-600"><Trash2 className="h-3.5 w-3.5" /> Delete</button>
            </div>
          </article>))}
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title={form.id ? "Edit coupon" : "Create coupon"}>
        <form onSubmit={submit} className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium">Coupon code<input required value={form.code} onChange={(e) => set("code", e.target.value.toUpperCase())} className="theme-input mt-1.5 font-mono" placeholder="WELCOME20" /></label>
            <label className="text-sm font-medium">Discount type<select value={form.type} onChange={(e) => set("type", e.target.value)} className="theme-input mt-1.5"><option>Percentage</option><option>Flat</option></select></label>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <label className="text-sm font-medium">Value<input type="number" min="1" required value={form.value} onChange={(e) => set("value", e.target.value)} className="theme-input mt-1.5" /></label>
            <label className="text-sm font-medium">Min order (₹)<input type="number" min="0" value={form.minOrder} onChange={(e) => set("minOrder", e.target.value)} className="theme-input mt-1.5" /></label>
            <label className="text-sm font-medium">Max discount (₹)<input type="number" min="0" value={form.maxDiscount} onChange={(e) => set("maxDiscount", e.target.value)} className="theme-input mt-1.5" /></label>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <label className="text-sm font-medium">Start<input type="date" value={form.start} onChange={(e) => set("start", e.target.value)} className="theme-input mt-1.5" /></label>
            <label className="text-sm font-medium">End<input type="date" value={form.end} onChange={(e) => set("end", e.target.value)} className="theme-input mt-1.5" /></label>
            <label className="text-sm font-medium">Usage limit<input type="number" min="1" value={form.limit} onChange={(e) => set("limit", e.target.value)} className="theme-input mt-1.5" /></label>
          </div>
          <label className="inline-flex items-center gap-2 text-sm font-medium"><input type="checkbox" checked={form.active} onChange={(e) => set("active", e.target.checked)} className="h-5 w-5 accent-amber-500" /> Active</label>
          <button className="rounded-xl bg-amber-500 py-2.5 text-sm font-semibold text-white">{form.id ? "Update coupon" : "Create coupon"}</button>
        </form>
      </Modal>
      <ConfirmDialog open={!!del} onClose={() => setDel(null)} title="Delete coupon?" message="Customers will no longer be able to use this code." onConfirm={() => deleteCoupon(del)} />
    </div>
  );
};
export default Coupons;
