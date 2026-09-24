import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Heart, Plus } from "lucide-react";
import { useStore } from "../../context/StoreContext";
import { formatCurrency } from "../../lib/menu";

const FoodCard = ({ item, onAdd }) => {
  const { wishlist, toggleWishlist } = useStore();
  const wished = wishlist.includes(item.id);
  const price = item.discountPrice || item.price;
  return (
    <motion.article layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
      className="theme-card group overflow-hidden p-4">
      <Link to={`/product/${item.slug || item.id}`} className="block">
        <div className="relative overflow-hidden rounded-[1.25rem]">
          <img src={item.image} alt={item.name} className="h-48 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
          <div className="absolute left-3 top-3 flex gap-1.5">
            {item.discountPrice && <span className="rounded-full bg-red-500 px-2.5 py-1 text-[11px] font-bold text-white">-{Math.round((1 - item.discountPrice / item.price) * 100)}%</span>}
            {item.popular && <span className="rounded-full bg-slate-950 px-2.5 py-1 text-[11px] font-bold text-white">Popular</span>}
          </div>
        </div>
      </Link>
      <div className="space-y-3 px-1 pb-1 pt-4">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-600">{item.category}</p>
          <span className="inline-flex items-center gap-1 text-sm font-semibold"><Star className="h-4 w-4 fill-amber-400 text-amber-400" />{item.rating}</span>
        </div>
        <Link to={`/product/${item.slug || item.id}`}><h3 className="text-lg font-bold text-slate-900 transition group-hover:text-amber-600">{item.name}</h3></Link>
        <p className="line-clamp-2 text-sm leading-6 text-slate-500">{item.description}</p>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span>{item.veg ? "🟢 Veg" : "🔴 Non-veg"}</span><span>·</span><span>{item.prepTime || 20} min</span><span>·</span><span>{item.spicy || "Mild"}</span>
        </div>
        <div className="flex items-center justify-between gap-2 pt-1">
          <div><p className="text-xl font-bold">{formatCurrency(price)} {item.discountPrice && <span className="ml-1 text-sm font-medium text-slate-400 line-through">{formatCurrency(item.price)}</span>}</p></div>
          <div className="flex items-center gap-2">
            <button onClick={() => toggleWishlist(item.id)} aria-label="Wishlist"
              className={`flex h-10 w-10 items-center justify-center rounded-xl border transition ${wished ? "border-red-200 bg-red-50 text-red-500" : "border-amber-200 bg-white text-slate-400 hover:text-red-500"}`}>
              <Heart className={`h-4 w-4 ${wished ? "fill-red-500" : ""}`} /></button>
            <button onClick={() => onAdd?.({ ...item, price, image: item.image, slug: item.slug || item.id })} className="inline-flex items-center gap-1.5 rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-amber-600"><Plus className="h-4 w-4" /> Add</button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
export default FoodCard;
