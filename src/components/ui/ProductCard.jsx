import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import Button from "./Button";
import { formatCurrency } from "../../lib/menu";

const ProductCard = ({ item, onAddToCart }) => {
  return (
    <article className="theme-card group overflow-hidden p-4">
      <Link to={`/product/${item.slug}`} className="block">
        <div className="relative overflow-hidden rounded-[1.25rem] bg-white/80">
          <img
            src={item.image}
            alt={item.name}
            className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
          />
          {item.badge ? <span className="theme-pill absolute left-4 top-4">{item.badge}</span> : null}
        </div>
      </Link>

      <div className="space-y-4 px-1 pb-1 pt-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-amber-600">
              {item.category}
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-slate-600">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              {item.rating}
            </span>
          </div>

          <Link to={`/product/${item.slug}`} className="block">
            <h3 className="text-xl font-semibold text-slate-950 transition group-hover:text-amber-600">
              {item.name}
            </h3>
          </Link>

          <p className="text-sm leading-6 text-slate-600">{item.description}</p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-2xl font-semibold text-slate-950">{formatCurrency(item.price)}</p>
            <p className="text-sm text-slate-500">{item.deliveryTime}</p>
          </div>

          <Button type="button" onClick={() => onAddToCart?.(item)}>
            Add To Cart
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
