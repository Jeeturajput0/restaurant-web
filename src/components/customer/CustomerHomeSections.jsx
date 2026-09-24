
import React from "react";
import { Link } from "react-router-dom";
import {
  Star,
  TicketPercent,
  Flame,
  Sparkles,
  UtensilsCrossed,
  ShoppingBag,
} from "lucide-react";

import { useStore } from "../../context/StoreContext";
import { useCart } from "../../context/CartContext";
import FoodCard from "./FoodCard";
import { formatCurrency } from "../../lib/menu";

const CustomerHomeSections = () => {
  const { foods, categories, coupons } = useStore();
  const { addToCart } = useCart();

  const popular = foods.filter((f) => f.popular).slice(0, 4);
  const recommended = foods.filter((f) => f.recommended).slice(0, 4);

  const activeCategories = categories.filter((c) => c.active);

  return (
    <div className="bg-slate-50/60">
      {/* ================= MAIN CONTENT ================= */}
      <main className="min-w-0 flex-1">
        <div className="theme-container space-y-6 px-4 py-6 sm:px-6 sm:py-8">

          {/* ================= MOBILE NAV ================= */}
          <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-3 py-2 lg:hidden">

            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-white">
                <UtensilsCrossed size={18} />
              </div>

              <span className="font-bold">
                Foodie
              </span>
            </div>

            <Link
              to="/cart"
              className="rounded-lg bg-slate-100 p-2"
            >
              <ShoppingBag size={19} />
            </Link>

          </div>

          {/* ================= HEADER ================= */}
         
          {/* ================= CATEGORIES ================= */}
          <section>

            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-500">
                  Categories
                </p>

                <h2 className="mt-0.5 text-lg font-bold text-slate-900">
                  Explore by craving
                </h2>
              </div>

              <Link
                to="/menu"
                className="text-sm font-semibold text-amber-600"
              >
                View all →
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4 lg:grid-cols-6">

              {activeCategories.slice(0, 6).map((category) => (
                <Link
                  key={category.id}
                  to="/menu"
                  className="group rounded-2xl border border-slate-200 bg-white p-2 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-16 w-full rounded-xl object-cover"
                    loading="lazy"
                  />

                  <div className="px-1 py-1.5">
                    <p className="truncate text-sm font-bold text-slate-800">
                      {category.name}
                    </p>

                    <p className="mt-0.5 text-[11px] text-slate-400">
                      {category.items} items
                    </p>
                  </div>
                </Link>
              ))}

            </div>
          </section>

          {/* ================= POPULAR ================= */}
          <section>

            <div className="mb-3 flex items-center justify-between">

              <div>
                <div className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-amber-500">
                  <Flame size={14} />
                  Popular
                </div>

                <h2 className="mt-0.5 text-lg font-bold text-slate-900">
                  Most loved dishes
                </h2>
              </div>

              <Link
                to="/menu"
                className="text-sm font-semibold text-amber-600"
              >
                View all →
              </Link>

            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

              {popular.map((food) => (
                <FoodCard
                  key={food.id}
                  item={food}
                  onAdd={addToCart}
                />
              ))}

            </div>

          </section>

          {/* ================= OFFERS ================= */}
          <section>

            <div className="mb-3 flex items-center gap-2">
              <TicketPercent
                size={17}
                className="text-amber-500"
              />

              <h2 className="text-lg font-bold text-slate-900">
                Special Offers
              </h2>
            </div>

            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">

              {coupons
                .filter((coupon) => coupon.active)
                .slice(0, 3)
                .map((coupon) => (

                  <div
                    key={coupon.id}
                    className="flex items-center justify-between rounded-2xl border border-dashed border-amber-300 bg-amber-50 px-4 py-3"
                  >

                    <div>

                      <p className="font-mono text-sm font-bold text-amber-600">
                        {coupon.code}
                      </p>

                      <p className="mt-1 text-lg font-bold text-slate-900">
                        {coupon.type === "Percentage"
                          ? `${coupon.value}% OFF`
                          : `${formatCurrency(coupon.value)} OFF`}
                      </p>

                      <p className="mt-1 text-[11px] text-slate-500">
                        Min order {formatCurrency(coupon.minOrder)}
                      </p>

                    </div>

                    <Link
                      to="/menu"
                      className="rounded-lg bg-amber-500 px-3 py-2 text-xs font-bold text-white"
                    >
                      Use
                    </Link>

                  </div>

                ))}

            </div>

          </section>

          {/* ================= RECOMMENDED ================= */}
          <section>

            <div className="mb-3 flex items-center justify-between">

              <div>
                <div className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-amber-500">
                  <Sparkles size={14} />
                  For You
                </div>

                <h2 className="mt-0.5 text-lg font-bold text-slate-900">
                  Recommended for you
                </h2>
              </div>

              <Link
                to="/menu"
                className="flex items-center gap-1 text-sm font-semibold text-amber-600"
              >
                <Star
                  size={15}
                  className="fill-amber-400 text-amber-400"
                />
                Top rated
              </Link>

            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

              {recommended.map((food) => (
                <FoodCard
                  key={food.id}
                  item={food}
                  onAdd={addToCart}
                />
              ))}

            </div>

          </section>

        </div>

      </main>

    </div>
  );
};

export default CustomerHomeSections;