import React from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "../../../context/CartContext";
import { formatCurrency, priceToNumber } from "../../../lib/menu";
import Button from "../../ui/Button";
import SectionHeading from "../../ui/SectionHeading";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, subtotal, clearCart } = useCart();

  return (
    <section className="page-section pb-20">
      <div className="theme-container space-y-10">
        <SectionHeading
          eyebrow="Cart"
          title="Review your selected dishes"
          description="The cart now shares the same card system, spacing scale and rounded interaction patterns as the rest of the app."
        />

        <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            {cartItems.length === 0 ? (
              <article className="theme-card flex min-h-80 flex-col items-center justify-center p-8 text-center">
                <ShoppingBag className="h-10 w-10 text-amber-500" />
                <h3 className="mt-4 text-2xl font-semibold text-slate-950">Your cart is empty</h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
                  Browse the updated menu and add a few dishes to see the redesigned cart experience.
                </p>
                <Button as={Link} to="/menu" className="mt-6">
                  Explore Menu
                </Button>
              </article>
            ) : (
              cartItems.map((item) => {
                const total = priceToNumber(item.price) * item.quantity;

                return (
                  <article key={item.name} className="theme-card p-5">
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <img
                        src={item.image || item.img}
                        alt={item.name}
                        className="h-32 w-full rounded-2xl object-cover sm:w-32"
                      />
                      <div className="flex-1 space-y-4">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <h3 className="text-xl font-semibold text-slate-950">{item.name}</h3>
                            <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.name)}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-500"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <div className="inline-flex items-center rounded-full border border-amber-100 bg-white">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.name, item.quantity - 1)}
                              className="px-4 py-3 text-slate-600"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="min-w-12 text-center text-base font-semibold text-slate-950">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.name, item.quantity + 1)}
                              className="px-4 py-3 text-slate-600"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>

                          <p className="text-xl font-semibold text-slate-950">{formatCurrency(total)}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })
            )}
          </div>

          <aside className="theme-card h-fit p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">Order summary</h2>
            <div className="mt-6 space-y-4 text-sm text-slate-600">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Delivery</span>
                <span>{cartItems.length > 0 ? "$4.00" : "$0.00"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Service fee</span>
                <span>{cartItems.length > 0 ? "$2.00" : "$0.00"}</span>
              </div>
              <div className="flex items-center justify-between border-t border-amber-100 pt-4 text-lg font-semibold text-slate-950">
                <span>Total</span>
                <span>
                  {formatCurrency(Number(subtotal) + (cartItems.length > 0 ? 6 : 0))}
                </span>
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              <Button as={Link} to="/checkout">
                Continue To Checkout
              </Button>
              <Button type="button" variant="secondary" onClick={clearCart}>
                Clear Cart
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
