import React, { useMemo, useState } from "react";
import { useCart } from "../../../context/CartContext";
import { useStore } from "../../../context/StoreContext";
import FoodCard from "../../customer/FoodCard";
import SectionHeading from "../../ui/SectionHeading";
import { SearchBar } from "../../common/ui";

const Menu = () => {
  const { addToCart } = useCart();
  const { foods, categories } = useStore();
  const [active, setActive] = useState("All");
  const [q, setQ] = useState("");
  const [veg, setVeg] = useState("All");

  const cats = ["All", ...categories.filter((c) => c.active).map((c) => c.name)];
  const filtered = useMemo(() => foods.filter((f) =>
    (active === "All" || f.category === active) &&
    (f.name + f.description).toLowerCase().includes(q.toLowerCase()) &&
    (veg === "All" || (veg === "Veg" ? f.veg : !f.veg)) && f.available
  ), [foods, active, q, veg]);

  return (
    <section className="page-section pb-20"><div className="theme-container space-y-8">
      <SectionHeading eyebrow="Our Menu" title="Curated menu for every craving" description="Search, filter by category or veg preference. Tap the heart to save favourites." />
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        <SearchBar value={q} onChange={setQ} placeholder="Search dishes, ingredients..." />
        <div className="flex gap-2">{["All", "Veg", "Non-veg"].map((v) => (
          <button key={v} onClick={() => setVeg(v)} className={`rounded-full px-4 py-2 text-xs font-bold ${veg === v ? "bg-emerald-500 text-white" : "bg-white text-slate-600 border border-amber-200"}`}>{v}</button>))}</div>
      </div>
      <div className="flex flex-wrap gap-2">{cats.map((c) => (
        <button key={c} onClick={() => setActive(c)} className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${active === c ? "border-amber-500 bg-amber-500 text-white shadow-md" : "border-amber-200 bg-white text-slate-700 hover:border-amber-300 hover:text-amber-600"}`}>{c}</button>))}</div>
      <p className="text-sm text-slate-400">{filtered.length} dishes found</p>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">{filtered.map((item) => <FoodCard key={item.id} item={item} onAdd={addToCart} />)}</div>
    </div></section>
  );
};
export default Menu;
