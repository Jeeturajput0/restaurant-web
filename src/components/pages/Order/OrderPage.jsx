import React, { useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../../context/CartContext";

const fallbackItem = {
  name: "Chef's Special",
  desc: "Freshly prepared meal with premium ingredients.",
  price: "$12.00",
  img: "",
};

const OrderPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { addToCart } = useCart();
  const item = state?.item || fallbackItem;
  const [quantity, setQuantity] = useState(1);

  const total = useMemo(() => {
    const parsed = Number(item.price.replace("$", ""));
    return `$${(parsed * quantity).toFixed(2)}`;
  }, [item.price, quantity]);

  return (
    <section className="min-h-screen bg-black px-4 py-28 text-white sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
          {item.img ? (
            <img
              src={item.img}
              alt={item.name}
              className="h-72 w-full object-cover sm:h-80"
            />
          ) : (
            <div className="flex h-72 items-center justify-center bg-zinc-900 text-lg text-gray-500 sm:h-80">
              Image unavailable
            </div>
          )}

          <div className="space-y-5 p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.24em] text-yellow-300">
                Ready to Order
              </span>
              <span className="text-sm text-gray-400">Estimated delivery: 25-30 mins</span>
            </div>

            <div>
              <h1 className="text-3xl font-black uppercase tracking-tight text-yellow-400 sm:text-4xl">
                {item.name}
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
                {item.desc}
              </p>
            </div>

            <div className="grid gap-4 rounded-[1.5rem] border border-white/8 bg-black/40 p-5 sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-gray-500">Unit Price</p>
                <p className="mt-2 text-2xl font-black text-white">{item.price}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-gray-500">Quantity</p>
                <div className="mt-2 inline-flex items-center rounded-full border border-white/10 bg-zinc-900">
                  <button
                    type="button"
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className="px-4 py-2 text-lg text-yellow-400"
                  >
                    -
                  </button>
                  <span className="min-w-12 text-center text-base font-bold">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="px-4 py-2 text-lg text-yellow-400"
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-gray-500">Total</p>
                <p className="mt-2 text-2xl font-black text-yellow-400">{total}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => addToCart(item, quantity)}
                className="rounded-full border border-yellow-400 px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
              >
                Add to Cart
              </button>
              <button
                type="button"
                onClick={() => navigate("/menubar")}
                className="rounded-full border border-white/15 px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:border-yellow-400 hover:text-yellow-400"
              >
                Back to Menu
              </button>
              <Link
                to="/contact"
                className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-black"
              >
                Need Help
              </Link>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-zinc-950 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] sm:p-8">
          <h2 className="text-2xl font-black uppercase tracking-tight text-white">
            Complete Your Order
          </h2>
          <p className="mt-3 text-sm leading-6 text-gray-400">
            Fill in the delivery details and confirm this dish.
          </p>

          <form className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="h-12 w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-sm text-white outline-none transition focus:border-yellow-400"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="h-12 w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-sm text-white outline-none transition focus:border-yellow-400"
            />
            <textarea
              rows="4"
              placeholder="Delivery Address"
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-yellow-400"
            />

            <div className="rounded-[1.5rem] border border-dashed border-yellow-400/30 bg-white/5 p-4">
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm text-gray-300">
                <span>Quantity</span>
                <span>{quantity}</span>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4 text-base font-bold text-yellow-400">
                <span>Order Total</span>
                <span>{total}</span>
              </div>
            </div>

            <button
              type="button"
              className="w-full rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-black"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrderPage;
