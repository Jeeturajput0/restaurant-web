import React, { useMemo, useState } from "react";
import { Plus, Pencil, Trash2, Power } from "lucide-react";
import { useStore } from "../../context/StoreContext";
import Modal from "../common/Modal";
import ConfirmDialog from "../common/ConfirmDialog";
import StatusBadge from "../common/StatusBadge";
import { SearchBar, FilterDropdown, EmptyState, PageHeader, Pagination } from "../common/ui";
import { formatCurrency } from "../../lib/menu";

const empty = { name: "", description: "", price: "", discountPrice: "", category: "", image: "", ingredients: "", prepTime: 15, veg: true, spicy: "Mild", available: true, popular: false, recommended: false, featured: false, rating: 4.5 };
const PAGE = 8;

const Products = () => {
  const { foods, categories, saveFood, deleteFood, toggleFood } = useStore();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(empty);
  const [del, setDel] = useState(null);

  const filtered = useMemo(() => foods.filter((f) =>
    (f.name + f.description).toLowerCase().includes(q.toLowerCase()) && (cat === "All" || f.category === cat)), [foods, q, cat]);

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE));
  const rows = filtered.slice((page - 1) * PAGE, page * PAGE);

  const edit = (f) => { setForm({ ...empty, ...f, ingredients: (f.ingredients || []).join(", ") }); setOpen(true); };
  const submit = (e) => {
    e.preventDefault();
    saveFood({ ...form, price: Number(form.price), discountPrice: form.discountPrice ? Number(form.discountPrice) : null, prepTime: Number(form.prepTime), rating: Number(form.rating), image: form.image || foods[0]?.image, ingredients: String(form.ingredients).split(",").map((s) => s.trim()).filter(Boolean) });
    setOpen(false); setForm(empty);
  };
  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  return (
    <div className="space-y-5">
      <PageHeader eyebrow="Menu" title="Food / Menu Management" description={`${foods.length} dishes live on the customer menu`}
        actions={<button onClick={() => { setForm(empty); setOpen(true); }} className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white"><Plus className="h-4 w-4" /> Add Food</button>} />
      <div className="flex flex-col gap-3 rounded-2xl border border-amber-100/70 bg-white p-4 shadow-sm sm:flex-row sm:items-center">
        <SearchBar value={q} onChange={(v) => { setQ(v); setPage(1); }} placeholder="Search dishes..." />
        <FilterDropdown value={cat} onChange={(v) => { setCat(v); setPage(1); }} options={["All", ...categories.map((c) => c.name)]} label="category" />
      </div>

      <article className="overflow-hidden rounded-2xl border border-amber-100/70 bg-white shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px] text-left text-sm">
            <thead>
              <tr className="border-b border-amber-100 bg-amber-50/60 text-xs uppercase tracking-wider text-slate-400">
                <th className="px-4 py-3">Dish</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Rating</th>
                <th className="px-4 py-3">Tags</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((f) => (
                <tr key={f.id} className="border-b border-slate-100 last:border-0 hover:bg-amber-50/40">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <img src={f.image} alt={f.name} className="h-11 w-11 shrink-0 rounded-xl object-cover" />
                      <div className="min-w-0">
                        <p className="truncate font-bold text-slate-900">{f.name}</p>
                        <p className="line-clamp-1 max-w-[260px] text-xs text-slate-400">{f.description}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-slate-600">{f.category}</td>
                  <td className="px-4 py-3">
                    <p className="font-bold text-slate-900">{formatCurrency(f.discountPrice || f.price)}</p>
                    {f.discountPrice && <p className="text-xs text-slate-400 line-through">{formatCurrency(f.price)}</p>}
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600">
                    {f.veg ? "🟢 Veg" : "🔴 Non-veg"} · {f.spicy}
                    <p className="text-[11px] text-slate-400">{f.prepTime} min</p>
                  </td>
                  <td className="px-4 py-3 font-semibold text-slate-700">⭐ {f.rating}</td>
                  <td className="px-4 py-3">
                    <div className="flex max-w-[160px] flex-wrap gap-1">
                      {f.popular && <span className="rounded-full bg-red-100 px-2 py-0.5 text-[11px] font-bold text-red-600">Popular</span>}
                      {f.recommended && <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-bold text-emerald-700">Recommended</span>}
                      {f.featured && <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-bold text-amber-700">Featured</span>}
                      {!f.popular && !f.recommended && !f.featured && <span className="text-xs text-slate-300">—</span>}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge status={f.available ? "Active" : "Inactive"} />
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-1.5">
                      <button onClick={() => edit(f)} title="Edit" className="rounded-lg bg-amber-50 p-2 text-amber-600 hover:bg-amber-100"><Pencil className="h-4 w-4" /></button>
                      <button onClick={() => toggleFood(f.id, "available")} title={f.available ? "Disable" : "Enable"} className="rounded-lg bg-slate-100 p-2 text-slate-500 hover:bg-slate-200"><Power className="h-4 w-4" /></button>
                      <button onClick={() => toggleFood(f.id, "popular")} title="Toggle Popular" className={`rounded-lg px-2 py-2 text-xs font-bold ${f.popular ? "bg-red-500 text-white" : "bg-red-50 text-red-500 hover:bg-red-100"}`}>P</button>
                      <button onClick={() => toggleFood(f.id, "recommended")} title="Toggle Recommend" className={`rounded-lg px-2 py-2 text-xs font-bold ${f.recommended ? "bg-emerald-500 text-white" : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"}`}>R</button>
                      <button onClick={() => setDel(f.id)} title="Delete" className="rounded-lg bg-red-50 p-2 text-red-500 hover:bg-red-100"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {rows.length === 0 && <div className="p-6"><EmptyState title="No dishes found" message="Add a new dish or clear your search." /></div>}
        <div className="border-t border-amber-100 p-4"><Pagination page={page} totalPages={pages} onChange={setPage} /></div>
      </article>

      <Modal open={open} onClose={() => setOpen(false)} title={form.id ? "Edit dish" : "Add new dish"} wide>
        <form onSubmit={submit} className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium">Food name<input required value={form.name} onChange={(e) => set("name", e.target.value)} className="theme-input mt-1.5" placeholder="e.g. Farmhouse Pizza" /></label>
            <label className="text-sm font-medium">Category<select value={form.category} onChange={(e) => set("category", e.target.value)} className="theme-input mt-1.5" required><option value="">Select</option>{categories.map((c) => <option key={c.id} value={c.name}>{c.name}</option>)}</select></label>
          </div>
          <label className="text-sm font-medium">Description<textarea required value={form.description} onChange={(e) => set("description", e.target.value)} rows="3" className="theme-input mt-1.5" /></label>
          <div className="grid gap-4 sm:grid-cols-3">
            <label className="text-sm font-medium">Price (₹)<input required type="number" min="0" value={form.price} onChange={(e) => set("price", e.target.value)} className="theme-input mt-1.5" /></label>
            <label className="text-sm font-medium">Discount price<input type="number" min="0" value={form.discountPrice || ""} onChange={(e) => set("discountPrice", e.target.value)} className="theme-input mt-1.5" /></label>
            <label className="text-sm font-medium">Prep time (min)<input type="number" min="5" value={form.prepTime} onChange={(e) => set("prepTime", e.target.value)} className="theme-input mt-1.5" /></label>
          </div>
          <label className="text-sm font-medium">Food image URL<input value={form.image} onChange={(e) => set("image", e.target.value)} className="theme-input mt-1.5" placeholder="https://..." /></label>
          <label className="text-sm font-medium">Ingredients (comma separated)<input value={form.ingredients} onChange={(e) => set("ingredients", e.target.value)} className="theme-input mt-1.5" placeholder="Tomato, Cheese, Basil" /></label>
          <div className="grid gap-4 sm:grid-cols-4">
            <label className="text-sm font-medium">Type<select value={form.veg ? "veg" : "nonveg"} onChange={(e) => set("veg", e.target.value === "veg")} className="theme-input mt-1.5"><option value="veg">Veg</option><option value="nonveg">Non-veg</option></select></label>
            <label className="text-sm font-medium">Spicy<select value={form.spicy} onChange={(e) => set("spicy", e.target.value)} className="theme-input mt-1.5"><option>Mild</option><option>Medium</option><option>Hot</option></select></label>
            <label className="text-sm font-medium">Rating<input type="number" step="0.1" min="1" max="5" value={form.rating} onChange={(e) => set("rating", e.target.value)} className="theme-input mt-1.5" /></label>
            <label className="flex items-end gap-2 pb-3 text-sm font-medium"><input type="checkbox" checked={form.available} onChange={(e) => set("available", e.target.checked)} className="h-5 w-5 accent-amber-500" /> Available</label>
          </div>
          <div className="flex flex-wrap gap-4 text-sm font-medium">
            {[["popular", "Mark as Popular"], ["recommended", "Recommended"], ["featured", "Featured"]].map(([k, l]) => (
              <label key={k} className="inline-flex items-center gap-2"><input type="checkbox" checked={!!form[k]} onChange={(e) => set(k, e.target.checked)} className="h-5 w-5 accent-amber-500" />{l}</label>))}
          </div>
          <div className="flex justify-end gap-2"><button type="button" onClick={() => setOpen(false)} className="rounded-xl border border-amber-200 px-5 py-2.5 text-sm font-semibold">Cancel</button>
          <button className="rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white">{form.id ? "Update dish" : "Add dish"}</button></div>
        </form>
      </Modal>
      <ConfirmDialog open={!!del} onClose={() => setDel(null)} title="Delete dish?" message="This dish will be removed from the customer menu." onConfirm={() => deleteFood(del)} />
    </div>
  );
};
export default Products;
