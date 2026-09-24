import React, { useState } from "react";
import { CalendarCheck, Users, Clock3, XCircle, Plus } from "lucide-react";
import { useStore } from "../../context/StoreContext";
import StatusBadge from "../common/StatusBadge";
import Modal from "../common/Modal";
import { EmptyState } from "../common/ui";
import SectionHeading from "../ui/SectionHeading";

const CustomerReservations = () => {
  const { reservations, tables, saveReservation, myReservations, setMyReservations, toast } = useStore();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ customer: "Guest User", phone: "+91 98765 43210", date: "2026-09-25", time: "19:30", guests: 2, table: tables.find((t) => t.status === "Available")?.id || "T-01" });
  const mine = [...myReservations, ...reservations.slice(0, 2)];
  const upcoming = mine.filter((r) => r.status === "Pending" || r.status === "Confirmed");
  const past = mine.filter((r) => !["Pending", "Confirmed"].includes(r.status));

  const book = (e) => {
    e.preventDefault();
    const r = { id: `RES-${Math.floor(300 + Math.random() * 600)}`, ...form, guests: Number(form.guests), status: "Pending" };
    saveReservation(r);
    setMyReservations((p) => [r, ...p]);
    toast("Table booked! We'll confirm shortly.");
    setOpen(false);
  };

  return (
    <section className="page-section pb-20"><div className="theme-container space-y-8">
      <SectionHeading eyebrow="Bookings" title="My reservations" description="Book a table in seconds and manage upcoming visits."
      />
      <div className="flex justify-end"><button onClick={() => setOpen(true)} className="btn-primary"><Plus className="mr-2 h-4 w-4" /> Book a table</button></div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4"><h2 className="text-xl font-bold">Upcoming ({upcoming.length})</h2>
          {upcoming.length === 0 ? <EmptyState title="No upcoming visits" message="Book your first table to see it here." /> :
            upcoming.map((r) => (
              <article key={r.id} className="theme-card flex items-center gap-4 p-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600"><CalendarCheck className="h-6 w-6" /></span>
                <div className="flex-1"><p className="font-bold">{r.date} · {r.time}</p><p className="flex items-center gap-3 text-xs text-slate-500"><span className="inline-flex items-center gap-1"><Users className="h-3.5 w-3.5" />{r.guests} guests</span><span>Table {r.table}</span></p></div>
                <div className="flex flex-col items-end gap-2"><StatusBadge status={r.status} />
                  {(r.status === "Pending" || r.status === "Confirmed") && <button onClick={() => saveReservation({ ...r, status: "Cancelled" })} className="inline-flex items-center gap-1 text-xs font-semibold text-red-500"><XCircle className="h-3.5 w-3.5" /> Cancel</button>}</div>
              </article>))}</div>
        <div className="space-y-4"><h2 className="text-xl font-bold">Available tables</h2>
          <div className="grid grid-cols-3 gap-3">{tables.filter((t) => t.status === "Available").slice(0, 6).map((t) => (
            <button key={t.id} onClick={() => { setForm((p) => ({ ...p, table: t.id })); setOpen(true); }} className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4 text-center transition hover:-translate-y-0.5">
              <p className="text-lg font-bold">{t.id}</p><p className="text-xs text-slate-500">{t.seats} seats</p><p className="text-xs text-slate-400">{t.location}</p>
            </button>))}</div>
          <h2 className="pt-2 text-xl font-bold">Previous ({past.length})</h2>
          {past.map((r) => <article key={r.id} className="theme-card flex items-center gap-3 p-4 opacity-75"><Clock3 className="h-5 w-5 text-slate-400" /><p className="flex-1 text-sm">{r.date} · {r.time} · Table {r.table}</p><StatusBadge status={r.status} /></article>)}
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title="Book a table">
        <form onSubmit={book} className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium">Name<input required value={form.customer} onChange={(e) => setForm({ ...form, customer: e.target.value })} className="theme-input mt-1.5" /></label>
            <label className="text-sm font-medium">Phone<input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="theme-input mt-1.5" /></label>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <label className="text-sm font-medium">Date<input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="theme-input mt-1.5" required /></label>
            <label className="text-sm font-medium">Time<input type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className="theme-input mt-1.5" required /></label>
            <label className="text-sm font-medium">Guests<input type="number" min="1" max="20" value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} className="theme-input mt-1.5" /></label>
          </div>
          <label className="text-sm font-medium">Table<select value={form.table} onChange={(e) => setForm({ ...form, table: e.target.value })} className="theme-input mt-1.5">{tables.map((t) => <option key={t.id} value={t.id}>{t.id} · {t.seats} seats · {t.location} ({t.status})</option>)}</select></label>
          <button className="btn-primary w-full">Confirm reservation</button>
        </form>
      </Modal>
    </div></section>
  );
};
export default CustomerReservations;
