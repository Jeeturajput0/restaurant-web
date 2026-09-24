import React, { useState } from "react";
import { Plus, Pencil, Trash2, Power } from "lucide-react";
import { useStore } from "../../context/StoreContext";
import Modal from "../common/Modal";
import ConfirmDialog from "../common/ConfirmDialog";
import { PageHeader } from "../common/ui";

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
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {categories.map((c) => (
          <article key={c.id} className="overflow-hidden rounded-2xl border border-amber-100/70 bg-white shadow-md">
            <div className="relative"><img src={c.image} alt={c.name} className="h-36 w-full object-cover" />
              <span className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold ${c.active ? "bg-emerald-500 text-white" : "bg-slate-800 text-white"}`}>{c.active ? "Active" : "Disabled"}</span></div>
            <div className="p-4">
              <h3 className="font-bold text-slate-900">{c.name}</h3>
              <p className="mt-1 line-clamp-1 text-xs text-slate-500">{c.description} · {c.items} items</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <button onClick={() => { setForm({ name: c.name, description: c.description, image: c.image }); setEditing(c.id); setOpen(true); }} className="inline-flex items-center gap-1 rounded-lg bg-amber-50 px-2.5 py-1.5 text-xs font-semibold text-amber-700"><Pencil className="h-3.5 w-3.5" /> Edit</button>
                <button onClick={() => setCategories((p) => p.map((x) => (x.id === c.id ? { ...x, active: !x.active } : x)))} className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-semibold"><Power className="h-3.5 w-3.5" /> {c.active ? "Disable" : "Enable"}</button>
                <button onClick={() => setDel(c.id)} className="inline-flex items-center gap-1 rounded-lg bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-600"><Trash2 className="h-3.5 w-3.5" /> Delete</button>
              </div>
            </div>
          </article>))}
      </div>
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
