import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import { useStore } from "../../context/StoreContext";
import { useCart } from "../../context/CartContext";
import { EmptyState } from "../common/ui";
import SectionHeading from "../ui/SectionHeading";
import { formatCurrency } from "../../lib/menu";

const Wishlist = () => {
  const { wishlist, foods, toggleWishlist } = useStore();
  const { addToCart } = useCart();
  const items = foods.filter((f) => wishlist.includes(f.id));
  return (
    <section className="page-section pb-20"><div className="theme-container space-y-8">
      <SectionHeading eyebrow="Saved" title="My wishlist" description="Your favourite dishes, saved for quick reordering." />
      {items.length === 0 ? <EmptyState icon={Heart} title="Wishlist is empty" message="Tap the heart on any dish to save it here." action={<Link to="/menu" className="btn-primary">Browse menu</Link>} /> : (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">{items.map((f) => (
          <article key={f.id} className="theme-card overflow-hidden p-4">
            <img src={f.image} alt={f.name} className="h-44 w-full rounded-2xl object-cover" />
            <div className="space-y-2 px-1 pb-1 pt-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-600">{f.category} · ⭐ {f.rating}</p>
              <h3 className="text-lg font-bold">{f.name}</h3>
              <p className="text-xl font-bold">{formatCurrency(f.discountPrice || f.price)}</p>
              <div className="flex gap-2 pt-1">
                <button onClick={() => addToCart({ ...f, price: f.discountPrice || f.price })} className="btn-primary flex-1 !py-2.5 text-xs"><ShoppingBag className="mr-1.5 h-4 w-4" /> Add to cart</button>
                <button onClick={() => toggleWishlist(f.id)} className="rounded-xl bg-red-50 p-2.5 text-red-500" aria-label="Remove"><Trash2 className="h-4 w-4" /></button>
              </div>
            </div>
          </article>))}</div>)}
    </div></section>
  );
};
export default Wishlist;
