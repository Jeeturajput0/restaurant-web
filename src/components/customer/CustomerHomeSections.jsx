import React from "react";
import { Link } from "react-router-dom";
import { Star, TicketPercent, Flame, Sparkles } from "lucide-react";
import { useStore } from "../../context/StoreContext";
import { useCart } from "../../context/CartContext";
import FoodCard from "./FoodCard";
import { formatCurrency } from "../../lib/menu";

const CustomerHomeSections = () => {
  const { foods, categories, coupons } = useStore();
  const { addToCart } = useCart();
  const popular = foods.filter((f) => f.popular).slice(0, 4);
  const recommended = foods.filter((f) => f.recommended).slice(0, 4);

  return (
    <>
      <section className="page-section pt-4"><div className="theme-container space-y-8">
        <div className="text-center"><p className="theme-pill">Categories</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Explore by craving</h2></div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {categories.filter((c) => c.active).map((c) => (
            <Link key={c.id} to="/menu" className="theme-card group overflow-hidden p-3 text-center">
              <img src={c.image} alt={c.name} className="h-28 w-full rounded-xl object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              <p className="mt-2.5 font-bold">{c.name}</p><p className="text-xs text-slate-400">{c.items} items</p>
            </Link>))}
        </div>
      </div></section>

      <section className="page-section pt-4"><div className="theme-container space-y-8">
        <div className="flex items-end justify-between gap-4">
          <div><p className="theme-pill"><Flame className="mr-1 inline h-3.5 w-3.5" />Popular</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Most loved dishes</h2></div>
          <Link to="/menu" className="text-sm font-semibold text-amber-600">View all →</Link></div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">{popular.map((f) => <FoodCard key={f.id} item={f} onAdd={addToCart} />)}</div>
      </div></section>

      <section className="page-section pt-4"><div className="theme-container space-y-8">
        <div className="rounded-[2rem] bg-slate-950 p-6 sm:p-10">
          <div className="flex items-center gap-2 text-amber-400"><TicketPercent className="h-5 w-5" /><p className="text-xs font-bold uppercase tracking-[0.2em]">Special offers</p></div>
          <h2 className="mt-3 max-w-xl text-3xl font-bold text-white sm:text-4xl">Delicious deals, delivered fresh</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">{coupons.filter((c) => c.active).slice(0, 3).map((c) => (
            <div key={c.id} className="rounded-2xl border-2 border-dashed border-amber-400/60 bg-white/5 p-5">
              <p className="font-mono text-lg font-bold text-amber-400">{c.code}</p>
              <p className="mt-1 text-xl font-bold text-white">{c.type === "Percentage" ? `${c.value}% OFF` : `${formatCurrency(c.value)} OFF`}</p>
              <p className="mt-1 text-xs text-white/60">Min order {formatCurrency(c.minOrder)}</p>
              <Link to="/menu" className="mt-3 inline-block rounded-xl bg-amber-500 px-4 py-2 text-xs font-bold text-white">Order now</Link>
            </div>))}</div>
        </div>
      </div></section>

      <section className="page-section pt-4"><div className="theme-container space-y-8">
        <div className="flex items-end justify-between gap-4">
          <div><p className="theme-pill"><Sparkles className="mr-1 inline h-3.5 w-3.5" />For you</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Recommended for you</h2></div>
          <Link to="/menu" className="flex items-center gap-1 text-sm font-semibold text-amber-600"><Star className="h-4 w-4 fill-amber-400 text-amber-400" /> Top rated</Link></div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">{recommended.map((f) => <FoodCard key={f.id} item={f} onAdd={addToCart} />)}</div>
      </div></section>
    </>
  );
};
export default CustomerHomeSections;
