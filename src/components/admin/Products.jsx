import React, { useMemo, useState } from "react";
import { Plus, Pencil, Trash2, Flame, ThumbsUp, Power } from "lucide-react";
import { useStore } from "../../context/StoreContext";
import Modal from "../common/Modal";
import ConfirmDialog from "../common/ConfirmDialog";
import { SearchBar, FilterDropdown, EmptyState, PageHeader } from "../common/ui";
import { formatCurrency } from "../../lib/menu";

const empty = { name: "", description: "", price: "", discountPrice: "", category: "", image: "", ingredients: "", prepTime: 15, veg: true, spicy: "Mild", available: true, popular: false, recommended: false, featured: false, rating: 4.5 };

const Products = () => {
  const { foods, categories, saveFood, deleteFood, toggleFood } = useStore();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(empty);
  const [del, setDel] = useState(null);

  const rows = useMemo(() => foods.filter((f) =>
    (f.name + f.description).toLowerCase().includes(q.toLowerCase()) && (cat === "All" || f.category === cat)), [foods, q, cat]);

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
        <SearchBar value={q} onChange={setQ} placeholder="Search dishes..." />
        <FilterDropdown value={cat} onChange={setCat} options={["All", ...categories.map((c) => c.name)]} label="category" />
      </div>
      {rows.length === 0 ? <EmptyState title="No dishes found" message="Add a new dish or clear your search." /> : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {rows.map((f) => (
            <article key={f.id} className={`overflow-hidden rounded-2xl border bg-white shadow-md ${f.available ? "border-amber-100/70" : "border-slate-200 opacity-75"}`}>
              <div className="relative"><img src={f.image} alt={f.name} className="h-44 w-full object-cover" />
                <div className="absolute left-3 top-3 flex gap-1.5">
                  {f.popular && <span className="inline-flex items-center gap-1 rounded-full bg-red-500 px-2.5 py-1 text-[11px] font-bold text-white"><Flame className="h-3 w-3" /> Popular</span>}
                  {f.recommended && <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500 px-2.5 py-1 text-[11px] font-bold text-white"><ThumbsUp className="h-3 w-3" /> Recommended</span>}
                </div>
                <span className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold ${f.available ? "bg-emerald-500 text-white" : "bg-slate-800 text-white"}`}>{f.available ? "Live" : "Disabled"}</span>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2"><h3 className="font-bold text-slate-900">{f.name}</h3><span className="text-sm font-bold text-amber-600">{formatCurrency(f.discountPrice || f.price)}</span></div>
                <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500">{f.description}</p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">{f.category} · ⭐ {f.rating} · {f.veg ? "🟢 Veg" : "🔴 Non-veg"} · {f.spicy}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <button onClick={() => edit(f)} className="inline-flex items-center gap-1 rounded-lg bg-amber-50 px-2.5 py-1.5 text-xs font-semibold text-amber-700"><Pencil className="h-3.5 w-3.5" /> Edit</button>
                  <button onClick={() => toggleFood(f.id, "available")} className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-semibold text-slate-600"><Power className="h-3.5 w-3.5" /> {f.available ? "Disable" : "Enable"}</button>
                  <button onClick={() => toggleFood(f.id, "popular")} className="rounded-lg bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-500">Popular</button>
                  <button onClick={() => toggleFood(f.id, "recommended")} className="rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-semibold text-emerald-600">Recommend</button>
                  <button onClick={() => setDel(f.id)} className="inline-flex items-center gap-1 rounded-lg bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-600"><Trash2 className="h-3.5 w-3.5" /> Delete</button>
                </div>
              </div>
            </article>))}
        </div>)}

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
