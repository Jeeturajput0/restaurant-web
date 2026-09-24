import React, { useState } from "react";
import { Plus, Pencil, Trash2, Power } from "lucide-react";
import { useStore } from "../../context/StoreContext";
import Modal from "../common/Modal";
import ConfirmDialog from "../common/ConfirmDialog";
import StatusBadge from "../common/StatusBadge";
import { PageHeader, EmptyState } from "../common/ui";

const Categories = () => {
  const { categories, setCategories, toast } = useStore();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", description: "", image: "" });
  const [editing, setEditing] = useState(null);
  const [del, setDel] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    if (editing) setCategories((p) => p.map((c) => (c.id === editing ? { ...c, ...form } : c)));
    else setCategories((p) => [...p, { id: `cat-${Date.now()}`, items: 0, active: true, image: p[0]?.image, ...form }]);
    toast(editing ? "Category updated" : "Category added");
    setOpen(false); setForm({ name: "", description: "", image: "" }); setEditing(null);
  };

  return (
    <div className="space-y-5">
      <PageHeader eyebrow="Menu" title="Category Management" description={`${categories.length} categories live`}
        actions={<button onClick={() => { setForm({ name: "", description: "", image: "" }); setEditing(null); setOpen(true); }} className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white"><Plus className="h-4 w-4" /> Add Category</button>} />

      <article className="overflow-hidden rounded-2xl border border-amber-100/70 bg-white shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead>
              <tr className="border-b border-amber-100 bg-amber-50/60 text-xs uppercase tracking-wider text-slate-400">
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Items</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((c) => (
                <tr key={c.id} className="border-b border-slate-100 last:border-0 hover:bg-amber-50/40">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <img src={c.image} alt={c.name} className="h-11 w-11 shrink-0 rounded-xl object-cover" />
                      <p className="font-bold text-slate-900">{c.name}</p>
                    </div>
                  </td>
                  <td className="max-w-[280px] truncate px-4 py-3 text-slate-500">{c.description || "—"}</td>
                  <td className="px-4 py-3 font-bold text-slate-800">{c.items} items</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={c.active ? "Active" : "Inactive"} />
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-1.5">
                      <button onClick={() => { setForm({ name: c.name, description: c.description, image: c.image }); setEditing(c.id); setOpen(true); }} title="Edit" className="rounded-lg bg-amber-50 p-2 text-amber-600 hover:bg-amber-100"><Pencil className="h-4 w-4" /></button>
                      <button onClick={() => setCategories((p) => p.map((x) => (x.id === c.id ? { ...x, active: !x.active } : x)))} title={c.active ? "Disable" : "Enable"} className="rounded-lg bg-slate-100 p-2 text-slate-500 hover:bg-slate-200"><Power className="h-4 w-4" /></button>
                      <button onClick={() => setDel(c.id)} title="Delete" className="rounded-lg bg-red-50 p-2 text-red-500 hover:bg-red-100"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {categories.length === 0 && <div className="p-6"><EmptyState title="No categories" message="Add your first category to group dishes." /></div>}
      </article>

      <Modal open={open} onClose={() => setOpen(false)} title={editing ? "Edit category" : "Add category"}>
        <form onSubmit={submit} className="grid gap-4">
          <label className="text-sm font-medium">Category name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="theme-input mt-1.5" placeholder="e.g. Pizza" /></label>
          <label className="text-sm font-medium">Description<textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows="3" className="theme-input mt-1.5" /></label>
          <label className="text-sm font-medium">Image URL<input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} className="theme-input mt-1.5" placeholder="https://..." /></label>
          <div className="flex justify-end gap-2"><button type="button" onClick={() => setOpen(false)} className="rounded-xl border border-amber-200 px-5 py-2.5 text-sm font-semibold">Cancel</button>
          <button className="rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white">{editing ? "Update" : "Add category"}</button></div>
        </form>
      </Modal>
      <ConfirmDialog open={!!del} onClose={() => setDel(null)} title="Delete category?" message="Dishes in this category will remain but lose their grouping." onConfirm={() => setCategories((p) => p.filter((c) => c.id !== del))} />
    </div>
  );
};
export default Categories;
