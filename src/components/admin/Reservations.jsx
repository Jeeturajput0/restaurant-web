import React, { useMemo, useState } from "react";
import { Plus, Pencil, XCircle, CheckCircle2 } from "lucide-react";
import { useStore } from "../../context/StoreContext";
import StatusBadge from "../common/StatusBadge";
import Modal from "../common/Modal";
import { SearchBar, FilterDropdown, EmptyState, PageHeader } from "../common/ui";
import { RESERVATION_STATUSES } from "../../data/adminSeed";

const Reservations = () => {
  const { reservations, tables, saveReservation } = useStore();
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("All");
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ customer: "", phone: "", date: "2026-09-24", time: "19:30", guests: 2, table: "T-01", status: "Pending" });

  const rows = useMemo(() => reservations.filter((r) =>
    (r.customer + r.phone + r.id).toLowerCase().includes(q.toLowerCase()) && (status === "All" || r.status === status)), [reservations, q, status]);

  const edit = (r) => { setForm({ ...r }); setOpen(true); };
  const submit = (e) => { e.preventDefault(); saveReservation({ ...form, guests: Number(form.guests) }); setOpen(false); };
  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  return (
    <div className="space-y-5">
      <PageHeader eyebrow="Bookings" title="Reservation Management" description={`${rows.length} reservations`}
        actions={<button onClick={() => { setForm({ customer: "", phone: "", date: "2026-09-24", time: "19:30", guests: 2, table: tables[0]?.id || "T-01", status: "Pending", id: "" }); setOpen(true); }} className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white"><Plus className="h-4 w-4" /> Add Reservation</button>} />
      <div className="flex flex-col gap-3 rounded-2xl border border-amber-100/70 bg-white p-4 shadow-sm sm:flex-row">
        <SearchBar value={q} onChange={setQ} placeholder="Search customer, phone, ID..." />
        <FilterDropdown value={status} onChange={setStatus} options={["All", ...RESERVATION_STATUSES]} label="status" />
      </div>
      <article className="overflow-hidden rounded-2xl border border-amber-100/70 bg-white shadow-md">
        <div className="overflow-x-auto"><table className="w-full min-w-[820px] text-left text-sm">
          <thead><tr className="border-b border-amber-100 bg-amber-50/60 text-xs uppercase tracking-wider text-slate-400"><th className="px-4 py-3">ID</th><th className="px-4 py-3">Customer</th><th className="px-4 py-3">Date / Time</th><th className="px-4 py-3">Guests</th><th className="px-4 py-3">Table</th><th className="px-4 py-3">Status</th><th className="px-4 py-3 text-right">Actions</th></tr></thead>
          <tbody>{rows.map((r) => (
            <tr key={r.id} className="border-b border-slate-100 last:border-0 hover:bg-amber-50/40">
              <td className="px-4 py-3 font-bold">{r.id}</td>
              <td className="px-4 py-3"><p className="font-medium">{r.customer}</p><p className="text-xs text-slate-400">{r.phone}</p></td>
              <td className="px-4 py-3 text-xs">{r.date}<br />{r.time}</td>
              <td className="px-4 py-3">{r.guests}</td>
              <td className="px-4 py-3 font-bold">{r.table}</td>
              <td className="px-4 py-3"><StatusBadge status={r.status} /></td>
              <td className="px-4 py-3"><div className="flex justify-end gap-1.5">
                <button onClick={() => edit(r)} className="rounded-lg bg-amber-50 p-2 text-amber-600" aria-label="Edit"><Pencil className="h-4 w-4" /></button>
                {r.status === "Pending" && <button onClick={() => saveReservation({ ...r, status: "Confirmed" })} className="rounded-lg bg-emerald-50 p-2 text-emerald-600" aria-label="Confirm"><CheckCircle2 className="h-4 w-4" /></button>}
                {r.status !== "Cancelled" && <button onClick={() => saveReservation({ ...r, status: "Cancelled" })} className="rounded-lg bg-red-50 p-2 text-red-500" aria-label="Cancel"><XCircle className="h-4 w-4" /></button>}
              </div></td>
            </tr>))}</tbody>
        </table></div>
        {rows.length === 0 && <div className="p-6"><EmptyState title="No reservations" message="No bookings match your filters." /></div>}
      </article>
      <Modal open={open} onClose={() => setOpen(false)} title={form.id ? "Edit reservation" : "Add reservation"}>
        <form onSubmit={submit} className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium">Customer<input required value={form.customer} onChange={(e) => set("customer", e.target.value)} className="theme-input mt-1.5" /></label>
            <label className="text-sm font-medium">Phone<input required value={form.phone} onChange={(e) => set("phone", e.target.value)} className="theme-input mt-1.5" /></label>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <label className="text-sm font-medium">Date<input type="date" value={form.date} onChange={(e) => set("date", e.target.value)} className="theme-input mt-1.5" required /></label>
            <label className="text-sm font-medium">Time<input type="time" value={form.time} onChange={(e) => set("time", e.target.value)} className="theme-input mt-1.5" required /></label>
            <label className="text-sm font-medium">Guests<input type="number" min="1" max="20" value={form.guests} onChange={(e) => set("guests", e.target.value)} className="theme-input mt-1.5" /></label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium">Table<select value={form.table} onChange={(e) => set("table", e.target.value)} className="theme-input mt-1.5">{tables.map((t) => <option key={t.id} value={t.id}>{t.id} · {t.seats} seats · {t.status}</option>)}</select></label>
            <label className="text-sm font-medium">Status<select value={form.status} onChange={(e) => set("status", e.target.value)} className="theme-input mt-1.5">{RESERVATION_STATUSES.map((s) => <option key={s}>{s}</option>)}</select></label>
          </div>
          <button className="rounded-xl bg-amber-500 py-2.5 text-sm font-semibold text-white">{form.id ? "Update reservation" : "Add reservation"}</button>
        </form>
      </Modal>
    </div>
  );
};
export default Reservations;
