import React, { useMemo, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ChevronRight, Heart, Minus, Plus, ShieldCheck, Star, Timer, Truck, Flame } from "lucide-react";
import { useCart } from "../../../context/CartContext";
import { useStore } from "../../../context/StoreContext";
import { formatCurrency } from "../../../lib/menu";
import Button from "../../ui/Button";
import FoodCard from "../../customer/FoodCard";

const ProductDetail = () => {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const { foods, wishlist, toggleWishlist } = useStore();
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();

  const item = useMemo(() => foods.find((f) => String(f.slug) === String(slug) || String(f.id) === String(slug)) || foods[0], [foods, slug]);
  if (!item) return null;
  const wished = wishlist.includes(item.id);
  const price = item.discountPrice || item.price;
  const related = foods.filter((f) => f.id !== item.id && f.category === item.category).concat(foods.filter((f) => f.id !== item.id && f.category !== item.category)).slice(0, 3);

  return (
    <section className="page-section pb-20"><div className="theme-container space-y-10">
      <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
        <Link to="/" className="hover:text-amber-600">Home</Link><ChevronRight className="h-4 w-4" />
        <Link to="/menu" className="hover:text-amber-600">Menu</Link><ChevronRight className="h-4 w-4" />
        <span className="font-medium text-slate-800">{item.name}</span>
      </nav>
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <article className="theme-card relative overflow-hidden p-4 sm:p-5">
          {item.popular && <span className="theme-pill absolute left-8 top-8 z-10"><Flame className="mr-1 inline h-3.5 w-3.5" />Popular</span>}
          <img src={item.image} alt={item.name} className="h-[22rem] w-full rounded-[1.5rem] object-cover sm:h-[30rem]" />
          <div className="mt-4 grid grid-cols-3 gap-3">
            {(item.ingredients || []).map((ing) => <span key={ing} className="rounded-xl bg-amber-50 px-3 py-2 text-center text-xs font-semibold text-slate-600">{ing}</span>)}
          </div>
        </article>
        <article className="theme-card p-6 sm:p-8"><div className="space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="theme-pill">{item.category}</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-sm shadow-sm"><Star className="h-4 w-4 fill-amber-400 text-amber-400" />{item.rating}</span>
            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold">{item.veg ? "🟢 Vegetarian" : "🔴 Non-vegetarian"}</span>
            <span className="rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold text-red-500">{item.spicy} 🌶</span>
          </div>
          <div><h1 className="text-4xl font-bold sm:text-5xl">{item.name}</h1>
            <p className="mt-4 leading-8 text-slate-600">{item.description}</p>
            <p className={`mt-3 text-sm font-semibold ${item.available ? "text-emerald-600" : "text-red-500"}`}>{item.available ? "● Available to order now" : "● Currently unavailable"}</p></div>
          <div className="flex items-end gap-3">
            <p className="text-4xl font-bold">{formatCurrency(price)}</p>
            {item.discountPrice && <p className="pb-1 text-lg text-slate-400 line-through">{formatCurrency(item.price)}</p>}
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-amber-50 p-4"><p className="text-xs text-slate-500">Prep time</p><p className="mt-1 inline-flex items-center gap-1.5 font-bold"><Timer className="h-4 w-4 text-amber-500" />{item.prepTime} min</p></div>
            <div className="rounded-2xl bg-white p-4 shadow-sm"><p className="text-xs text-slate-500">Quality</p><p className="mt-1 inline-flex items-center gap-1.5 font-bold"><ShieldCheck className="h-4 w-4 text-amber-500" />Premium</p></div>
            <div className="rounded-2xl bg-white p-4 shadow-sm"><p className="text-xs text-slate-500">Delivery</p><p className="mt-1 inline-flex items-center gap-1.5 font-bold"><Truck className="h-4 w-4 text-amber-500" />25-30 min</p></div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center rounded-full border border-amber-100 bg-white">
              <button onClick={() => setQty((p) => Math.max(1, p - 1))} className="px-4 py-3" aria-label="Decrease"><Minus className="h-4 w-4" /></button>
              <span className="min-w-12 text-center font-bold">{qty}</span>
              <button onClick={() => setQty((p) => p + 1)} className="px-4 py-3" aria-label="Increase"><Plus className="h-4 w-4" /></button>
            </div>
            <p className="text-xl font-bold">Total {formatCurrency(price * qty)}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => addToCart({ ...item, price })}>Add To Cart</Button>
            <Button variant="secondary" onClick={() => { addToCart({ ...item, price }); navigate("/checkout"); }}>Buy Now</Button>
            <button onClick={() => toggleWishlist(item.id)} aria-label="Wishlist" className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border transition ${wished ? "border-red-200 bg-red-50 text-red-500" : "border-amber-200 bg-white text-amber-600"}`}>
              <Heart className={`h-5 w-5 ${wished ? "fill-red-500" : ""}`} /></button>
          </div>
        </div></article>
      </div>
      <div className="space-y-6"><div className="flex items-center justify-between"><h2 className="text-2xl font-bold sm:text-3xl">You may also like</h2><Link to="/menu" className="text-sm font-semibold text-amber-600">View full menu</Link></div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">{related.map((r) => <FoodCard key={r.id} item={r} onAdd={addToCart} />)}</div></div>
    </div></section>
  );
};
export default ProductDetail;
