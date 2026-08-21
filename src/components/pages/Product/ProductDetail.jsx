import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight, Heart, Minus, Plus, ShieldCheck, Star, Timer, Truck } from "lucide-react";
import { useCart } from "../../../context/CartContext";
import { getItemBySlug, priceToNumber, formatCurrency } from "../../../lib/menu";
import { menuItems } from "../../../data/menuData";
import Button from "../../ui/Button";
import ProductCard from "../../ui/ProductCard";

const fallbackItem = menuItems[0];

const ProductDetail = () => {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const item = getItemBySlug(slug) || fallbackItem;

  const total = useMemo(() => formatCurrency(priceToNumber(item.price) * quantity), [item.price, quantity]);
  const relatedItems = menuItems.filter((menuItem) => menuItem.slug !== item.slug).slice(0, 3);

  return (
    <section className="page-section pb-20">
      <div className="theme-container space-y-10">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <Link to="/" className="transition hover:text-amber-600">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/menu" className="transition hover:text-amber-600">Menu</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-slate-800">{item.name}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <article className="theme-card relative overflow-hidden p-4 sm:p-5">
            {item.badge ? <span className="theme-pill absolute left-8 top-8 z-10">{item.badge}</span> : null}
            <img src={item.image} alt={item.name} className="h-[22rem] w-full rounded-[1.5rem] object-cover sm:h-[30rem]" />
          </article>

          <article className="theme-card p-6 sm:p-8">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="theme-pill">{item.category}</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-sm text-slate-600 shadow-sm">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  {item.rating}
                </span>
              </div>

              <div>
                <h1 className="text-4xl font-semibold text-slate-950 sm:text-5xl">{item.name}</h1>
                <p className="mt-4 text-base leading-8 text-slate-600">{item.description}</p>
                <p className="mt-3 text-sm font-medium text-emerald-700">● Available to order now</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-amber-50 px-4 py-4">
                  <p className="text-sm text-slate-500">Unit price</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-950">{formatCurrency(item.price)}</p>
                </div>
                <div className="rounded-2xl bg-white px-4 py-4 shadow-sm">
                  <p className="text-sm text-slate-500">Delivery</p>
                  <p className="mt-2 inline-flex items-center gap-2 text-base font-semibold text-slate-950">
                    <Timer className="h-4 w-4 text-amber-500" />
                    {item.deliveryTime}
                  </p>
                </div>
                <div className="rounded-2xl bg-white px-4 py-4 shadow-sm">
                  <p className="text-sm text-slate-500">Freshness</p>
                  <p className="mt-2 inline-flex items-center gap-2 text-base font-semibold text-slate-950">
                    <ShieldCheck className="h-4 w-4 text-amber-500" />
                    Premium prep
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="inline-flex items-center rounded-full border border-amber-100 bg-white">
                  <button
                    type="button"
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className="px-4 py-3 text-slate-600"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-12 text-center text-base font-semibold text-slate-950">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="px-4 py-3 text-slate-600"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <p className="text-xl font-semibold text-slate-950">Total {total}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button type="button" onClick={() => addToCart(item, quantity)}>
                  Add To Cart
                </Button>
                <Button as={Link} to="/checkout" variant="secondary">
                  Go To Checkout
                </Button>
                <button type="button" aria-label={`Save ${item.name}`} className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-amber-200 bg-white text-amber-600 transition hover:bg-amber-50">
                  <Heart className="h-5 w-5" />
                </button>
              </div>
            </div>
          </article>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-amber-100 bg-white p-5">
            <Truck className="h-5 w-5 text-amber-500" />
            <h2 className="mt-3 font-semibold text-slate-950">Quick delivery</h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">Freshly prepared and delivered in {item.deliveryTime}.</p>
          </article>
          <article className="rounded-2xl border border-amber-100 bg-white p-5">
            <ShieldCheck className="h-5 w-5 text-amber-500" />
            <h2 className="mt-3 font-semibold text-slate-950">Fresh ingredients</h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">Made to order with quality ingredients and careful packing.</p>
          </article>
          <article className="rounded-2xl border border-amber-100 bg-white p-5">
            <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
            <h2 className="mt-3 font-semibold text-slate-950">Loved by diners</h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">Rated {item.rating}/5 by guests who ordered this dish.</p>
          </article>
        </div>

        <div className="space-y-8">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-3xl font-semibold text-slate-950">You may also like</h2>
            <Link to="/menu" className="text-sm font-medium text-amber-600">
              View full menu
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {relatedItems.map((relatedItem) => (
              <ProductCard key={relatedItem.id} item={relatedItem} onAddToCart={addToCart} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
