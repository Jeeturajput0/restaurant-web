import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Minus, Plus, ShoppingBag, Trash2, TicketPercent } from "lucide-react";
import { useCart } from "../../../context/CartContext";
import { useStore } from "../../../context/StoreContext";
import { formatCurrency, priceToNumber } from "../../../lib/menu";
import Button from "../../ui/Button";
import SectionHeading from "../../ui/SectionHeading";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, subtotal, clearCart } = useCart();
  const { coupons, settings, toast } = useStore();
  const [code, setCode] = useState("");
  const [applied, setApplied] = useState(null);
  const navigate = useNavigate();

  const discount = applied ? Math.min(applied.maxDiscount, applied.type === "Percentage" ? Math.round(subtotal * applied.value / 100) : applied.value) : 0;
  const delivery = cartItems.length > 0 ? settings.deliveryFee : 0;
  const tax = Math.round((subtotal - discount) * (settings.gst / 100));
  const total = Math.max(0, subtotal - discount + delivery + tax);

  const apply = () => {
    const c = coupons.find((x) => x.code === code.trim().toUpperCase() && x.active);
    if (!c) return toast("Invalid or expired coupon", "error");
    if (subtotal < c.minOrder) return toast(`Min order ${formatCurrency(c.minOrder)} required`, "error");
    setApplied(c); toast(`Coupon ${c.code} applied`);
  };

  return (
    <section className="page-section pb-20"><div className="theme-container space-y-10">
      <SectionHeading eyebrow="Cart" title="Review your selected dishes" description="Apply coupons, adjust quantities and proceed to checkout." />
      <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          {cartItems.length === 0 ? (
            <article className="theme-card flex min-h-80 flex-col items-center justify-center p-8 text-center">
              <ShoppingBag className="h-10 w-10 text-amber-500" />
              <h3 className="mt-4 text-2xl font-bold">Your cart is empty</h3>
              <p className="mt-3 max-w-md text-sm text-slate-500">Browse the menu and add a few dishes.</p>
              <Button as={Link} to="/menu" className="mt-6">Explore Menu</Button>
            </article>
          ) : cartItems.map((item) => (
            <article key={item.name} className="theme-card p-5"><div className="flex flex-col gap-4 sm:flex-row">
              <img src={item.image || item.img} alt={item.name} className="h-32 w-full rounded-2xl object-cover sm:w-32" />
              <div className="flex-1 space-y-4">
                <div className="flex justify-between gap-3"><div><h3 className="text-lg font-bold">{item.name}</h3><p className="mt-1 line-clamp-1 text-sm text-slate-500">{item.description}</p></div>
                  <button onClick={() => removeFromCart(item.name)} className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500" aria-label="Remove"><Trash2 className="h-4 w-4" /></button></div>
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center rounded-full border border-amber-100 bg-white">
                    <button onClick={() => updateQuantity(item.name, item.quantity - 1)} className="px-4 py-2.5" aria-label="Decrease"><Minus className="h-4 w-4" /></button>
                    <span className="min-w-10 text-center font-bold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.name, item.quantity + 1)} className="px-4 py-2.5" aria-label="Increase"><Plus className="h-4 w-4" /></button>
                  </div>
                  <p className="text-lg font-bold">{formatCurrency(priceToNumber(item.price) * item.quantity)}</p>
                </div>
              </div>
            </div></article>))}
          {cartItems.length > 0 && <div className="flex gap-3"><Button as={Link} to="/menu" variant="secondary">Continue Shopping</Button><Button variant="secondary" onClick={clearCart}>Clear Cart</Button></div>}
        </div>
        <aside className="theme-card h-fit space-y-5 p-6 sm:p-8">
          <h2 className="text-xl font-bold">Order summary</h2>
          <div className="flex gap-2">
            <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Coupon code (try WELCOME20)" className="theme-input flex-1 uppercase" />
            <button onClick={apply} className="inline-flex items-center gap-1.5 rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white"><TicketPercent className="h-4 w-4" /> Apply</button>
          </div>
          {applied && <p className="rounded-xl bg-emerald-50 px-4 py-2.5 text-sm font-semibold text-emerald-700">{applied.code} applied · −{formatCurrency(discount)} <button onClick={() => setApplied(null)} className="ml-2 underline">remove</button></p>}
          <div className="space-y-3 text-sm text-slate-600">
            <div className="flex justify-between"><span>Subtotal</span><span>{formatCurrency(subtotal)}</span></div>
            {discount > 0 && <div className="flex justify-between text-emerald-600"><span>Discount</span><span>−{formatCurrency(discount)}</span></div>}
            <div className="flex justify-between"><span>Delivery fee</span><span>{formatCurrency(delivery)}</span></div>
            <div className="flex justify-between"><span>GST ({settings.gst}%)</span><span>{formatCurrency(tax)}</span></div>
            <div className="flex justify-between border-t border-amber-100 pt-4 text-lg font-bold text-slate-950"><span>Grand total</span><span>{formatCurrency(total)}</span></div>
          </div>
          <Button onClick={() => navigate("/checkout", { state: { coupon: applied, discount } })} className="w-full" disabled={cartItems.length === 0}>Proceed to Checkout</Button>
        </aside>
      </div>
    </div></section>
  );
};
export default CartPage;
