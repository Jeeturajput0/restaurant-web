import React, { useState } from "react";
import { Plus, Pencil, Trash2, Armchair } from "lucide-react";
import { useStore } from "../../context/StoreContext";
import StatusBadge from "../common/StatusBadge";
import Modal from "../common/Modal";
import ConfirmDialog from "../common/ConfirmDialog";
import { TABLE_STATUSES } from "../../data/adminSeed";
import { PageHeader } from "../common/ui";

const Tables = () => {
  const { tables, saveTable, deleteTable } = useStore();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ id: "", seats: 2, location: "Main Hall", status: "Available" });
  const [isEdit, setIsEdit] = useState(false);
  const [del, setDel] = useState(null);

  const submit = (e) => { e.preventDefault(); saveTable({ ...form, seats: Number(form.seats) }); setOpen(false); };

  return (
    <div className="space-y-5">
      <PageHeader eyebrow="Floor" title="Table Management" description={`${tables.length} tables · visual restaurant layout`}
        actions={<button onClick={() => { setForm({ id: `T-${String(tables.length + 1).padStart(2, "0")}`, seats: 2, location: "Main Hall", status: "Available" }); setIsEdit(false); setOpen(true); }} className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white"><Plus className="h-4 w-4" /> Add Table</button>} />
      <div className="flex flex-wrap gap-2 text-xs">{TABLE_STATUSES.map((s) => (
        <span key={s} className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 font-semibold shadow-sm"><StatusBadge status={s} /> {tables.filter((t) => t.status === s).length}</span>))}</div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tables.map((t) => (
          <article key={t.id} className="rounded-2xl border border-amber-100/70 bg-white p-5 text-center shadow-md transition hover:-translate-y-1">
            <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${t.status === "Available" ? "bg-emerald-100 text-emerald-600" : t.status === "Occupied" ? "bg-red-100 text-red-500" : t.status === "Reserved" ? "bg-amber-100 text-amber-600" : "bg-sky-100 text-sky-600"}`}>
              <Armchair className="h-8 w-8" /></div>
            <h3 className="mt-3 text-xl font-bold">{t.id}</h3>
            <p className="text-sm text-slate-500">{t.seats} seats · {t.location}</p>
            <div className="mt-2 flex justify-center"><StatusBadge status={t.status} /></div>
            <div className="mt-2 flex justify-center gap-1.5">
              {TABLE_STATUSES.map((s) => <button key={s} onClick={() => saveTable({ ...t, status: s })} title={s} className={`h-3 w-3 rounded-full ${t.status === s ? "ring-2 ring-offset-1 ring-slate-400" : "opacity-40"} ${s === "Available" ? "bg-emerald-500" : s === "Reserved" ? "bg-amber-500" : s === "Occupied" ? "bg-red-500" : "bg-sky-500"}`} />)}
            </div>
            <div className="mt-3 flex justify-center gap-1.5">
              <button onClick={() => { setForm(t); setIsEdit(true); setOpen(true); }} className="rounded-lg bg-amber-50 p-2 text-amber-600" aria-label="Edit"><Pencil className="h-4 w-4" /></button>
              <button onClick={() => setDel(t.id)} className="rounded-lg bg-red-50 p-2 text-red-500" aria-label="Delete"><Trash2 className="h-4 w-4" /></button>
            </div>
          </article>))}
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title={isEdit ? "Edit table" : "Add table"}>
        <form onSubmit={submit} className="grid gap-4">
          <label className="text-sm font-medium">Table ID<input value={form.id} disabled={isEdit} onChange={(e) => setForm({ ...form, id: e.target.value })} className="theme-input mt-1.5" required /></label>
          <div className="grid grid-cols-2 gap-4">
            <label className="text-sm font-medium">Seats<input type="number" min="1" max="20" value={form.seats} onChange={(e) => setForm({ ...form, seats: e.target.value })} className="theme-input mt-1.5" /></label>
            <label className="text-sm font-medium">Location<select value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="theme-input mt-1.5"><option>Main Hall</option><option>Window</option><option>Patio</option><option>Family Zone</option><option>Private</option><option>Banquet</option></select></label>
          </div>
          <label className="text-sm font-medium">Status<select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className="theme-input mt-1.5">{TABLE_STATUSES.map((s) => <option key={s}>{s}</option>)}</select></label>
          <button className="rounded-xl bg-amber-500 py-2.5 text-sm font-semibold text-white">{isEdit ? "Update table" : "Add table"}</button>
        </form>
      </Modal>
      <ConfirmDialog open={!!del} onClose={() => setDel(null)} title="Delete table?" message={`Table ${del} will be removed from the floor plan.`} onConfirm={() => deleteTable(del)} />
    </div>
  );
};
export default Tables;
