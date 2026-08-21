import React from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { formatCurrency, priceToNumber } from "../../lib/menu";
import Button from "../ui/Button";

const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
  } = useCart();

  return (
    <>
      <div
        onClick={() => setIsCartOpen(false)}
        className={`fixed inset-0 z-50 bg-slate-950/35 transition ${
          isCartOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed right-0 top-0 z-[60] flex h-screen w-full max-w-md flex-col border-l border-amber-100 bg-[#fffaf3] shadow-2xl transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-amber-100 px-5 py-5">
          <div>
            <p className="theme-pill">Your Cart</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-950">Quick Checkout Bag</h2>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-amber-100 bg-white text-slate-700 shadow-sm"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
          {cartItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">Cart is empty</h3>
              <p className="mt-2 max-w-xs text-sm leading-7 text-slate-600">
                Add a few dishes and your premium restaurant checkout will appear here.
              </p>
            </div>
          ) : (
            cartItems.map((item) => {
              const lineTotal = priceToNumber(item.price) * item.quantity;

              return (
                <article key={item.name} className="theme-card p-4">
                  <div className="flex gap-4">
                    <img
                      src={item.image || item.img}
                      alt={item.name}
                      className="h-20 w-20 rounded-xl object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="line-clamp-2 text-base font-semibold text-slate-950">
                            {item.name}
                          </h3>
                          <p className="mt-1 text-sm text-slate-500">{formatCurrency(item.price)}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.name)}
                          className="text-slate-400 transition hover:text-red-500"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="inline-flex items-center rounded-full border border-amber-100 bg-white">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.name, item.quantity - 1)}
                            className="px-3 py-2 text-slate-600"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="min-w-10 text-center text-sm font-semibold text-slate-900">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.name, item.quantity + 1)}
                            className="px-3 py-2 text-slate-600"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        <p className="text-sm font-semibold text-slate-950">{formatCurrency(lineTotal)}</p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </div>

        <div className="space-y-4 border-t border-amber-100 bg-white/80 px-5 py-5">
          <div className="flex items-center justify-between text-sm text-slate-600">
            <span>Subtotal</span>
            <span className="text-2xl font-semibold text-slate-950">{formatCurrency(subtotal)}</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Button type="button" variant="secondary" onClick={clearCart}>
              Clear
            </Button>
            <Button as={Link} to="/checkout" onClick={() => setIsCartOpen(false)}>
              Checkout
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default CartDrawer;
