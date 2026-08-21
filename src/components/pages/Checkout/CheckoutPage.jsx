import React from "react";
import { CreditCard, MapPin, ShieldCheck } from "lucide-react";
import { useCart } from "../../../context/CartContext";
import Button from "../../ui/Button";
import Field from "../../ui/Field";
import SectionHeading from "../../ui/SectionHeading";
import { formatCurrency } from "../../../lib/menu";

const CheckoutPage = () => {
  const { cartItems, subtotal } = useCart();
  const deliveryCharge = cartItems.length > 0 ? 49 : 0;
  const serviceFee = cartItems.length > 0 ? 29 : 0;
  const total = Number(subtotal) + deliveryCharge + serviceFee;

  return (
    <section className="page-section pb-20">
      <div className="theme-container space-y-10">
        <SectionHeading
          eyebrow="Checkout"
          title="Complete your reservation and delivery details"
          description="Inputs, cards and action buttons are standardized to the same global theme used across the rest of the frontend."
        />

        <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <form className="theme-card grid gap-5 p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" placeholder="Enter your full name" />
              <Field label="Phone Number" type="tel" placeholder="+91 98765 43210" />
            </div>
            <Field label="Email Address" type="email" placeholder="you@example.com" />
            <Field label="Delivery Address" as="textarea" rows="4" placeholder="Apartment, street and city" />

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Date" type="date" />
              <Field label="Time" type="time" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Card Holder" placeholder="Name on card" />
              <Field label="Card Number" placeholder="1234 5678 9012 3456" />
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              <Field label="Expiry" placeholder="MM/YY" />
              <Field label="CVV" placeholder="123" />
              <Field label="Guests" as="select" defaultValue="2">
                <option value="1">1 guest</option>
                <option value="2">2 guests</option>
                <option value="4">4 guests</option>
                <option value="6">6+ guests</option>
              </Field>
            </div>

            <Button type="button">Confirm Order</Button>
          </form>

          <aside className="space-y-6">
            <article className="theme-card p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">Order summary</h2>
              <div className="mt-6 space-y-4 text-sm text-slate-600">
                {cartItems.length === 0 ? (
                  <p>No items selected yet. Add dishes from the menu to build your checkout.</p>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.name} className="flex items-center justify-between gap-4">
                      <span>{item.name} x {item.quantity}</span>
                      <span>{formatCurrency(item.price)}</span>
                    </div>
                  ))
                )}
                <div className="flex items-center justify-between border-t border-amber-100 pt-4">
                  <span>Subtotal</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Delivery</span>
                  <span>{formatCurrency(deliveryCharge)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Service Fee</span>
                  <span>{formatCurrency(serviceFee)}</span>
                </div>
                <div className="flex items-center justify-between text-lg font-semibold text-slate-950">
                  <span>Total</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>
            </article>

            <article className="theme-card space-y-4 p-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-amber-500" />
                <span className="font-medium text-slate-800">Fast and organized delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-amber-500" />
                <span className="font-medium text-slate-800">Clean payment form design</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-amber-500" />
                <span className="font-medium text-slate-800">Secure, premium checkout flow</span>
              </div>
            </article>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
