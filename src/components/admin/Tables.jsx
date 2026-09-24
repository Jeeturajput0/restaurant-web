import React, { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useStore } from "../../context/StoreContext";
import StatusBadge from "../common/StatusBadge";
import Modal from "../common/Modal";
import ConfirmDialog from "../common/ConfirmDialog";
import { TABLE_STATUSES } from "../../data/adminSeed";
import { PageHeader, EmptyState } from "../common/ui";

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

      <article className="overflow-hidden rounded-2xl border border-amber-100/70 bg-white shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-amber-100 bg-amber-50/60 text-xs uppercase tracking-wider text-slate-400">
                <th className="px-4 py-3">Table</th>
                <th className="px-4 py-3">Seats</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Quick Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tables.map((t) => (
                <tr key={t.id} className="border-b border-slate-100 last:border-0 hover:bg-amber-50/40">
                  <td className="px-4 py-3 font-bold text-slate-900">{t.id}</td>
                  <td className="px-4 py-3 text-slate-600">{t.seats} seats</td>
                  <td className="px-4 py-3 text-slate-600">{t.location}</td>
                  <td className="px-4 py-3"><StatusBadge status={t.status} /></td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1.5">
                      {TABLE_STATUSES.map((s) => <button key={s} onClick={() => saveTable({ ...t, status: s })} title={s} className={`h-3.5 w-3.5 rounded-full ${t.status === s ? "ring-2 ring-offset-1 ring-slate-400" : "opacity-40 hover:opacity-80"} ${s === "Available" ? "bg-emerald-500" : s === "Reserved" ? "bg-amber-500" : s === "Occupied" ? "bg-red-500" : "bg-sky-500"}`} />)}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-1.5">
                      <button onClick={() => { setForm(t); setIsEdit(true); setOpen(true); }} title="Edit" className="rounded-lg bg-amber-50 p-2 text-amber-600 hover:bg-amber-100" aria-label="Edit"><Pencil className="h-4 w-4" /></button>
                      <button onClick={() => setDel(t.id)} title="Delete" className="rounded-lg bg-red-50 p-2 text-red-500 hover:bg-red-100" aria-label="Delete"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {tables.length === 0 && <div className="p-6"><EmptyState title="No tables" message="Add your first table to build the floor plan." /></div>}
      </article>

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
