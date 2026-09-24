import React, { useMemo, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Bike, ShoppingBag, UtensilsCrossed, Banknote, Smartphone, CreditCard, MapPin, ShieldCheck } from "lucide-react";
import { useCart } from "../../../context/CartContext";
import { useStore } from "../../../context/StoreContext";
import Button from "../../ui/Button";
import SectionHeading from "../../ui/SectionHeading";
import { formatCurrency } from "../../../lib/menu";

const CheckoutPage = () => {
  const { cartItems, subtotal, clearCart } = useCart();
  const { settings, placeOrder, toast } = useStore();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [orderType, setOrderType] = useState("Delivery");
  const [payment, setPayment] = useState("UPI");
  const [form, setForm] = useState({ name: "Guest User", phone: "+91 98765 43210", email: "guest@gmail.com", address: "21 Palm Avenue, New Delhi", city: "New Delhi", pincode: "110001" });
  const coupon = state?.coupon || null;

  const discount = useMemo(() => {
    if (!coupon) return state?.discount || 0;
    return Math.min(coupon.maxDiscount, coupon.type === "Percentage" ? Math.round(subtotal * coupon.value / 100) : coupon.value);
  }, [coupon, subtotal, state]);
  const delivery = orderType === "Delivery" && cartItems.length > 0 ? settings.deliveryFee : 0;
  const tax = Math.round(Math.max(0, subtotal - discount) * (settings.gst / 100));
  const total = Math.max(0, subtotal - discount + delivery + tax);
  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return toast("Your cart is empty", "error");
    const id = placeOrder({
      customer: form.name, phone: form.phone, email: form.email,
      address: `${form.address}, ${form.city} ${form.pincode}`, customerId: "CUS-101",
      items: cartItems.map((i) => ({ name: i.name, qty: i.quantity, price: Number(String(i.price).replace(/[^0-9.]/g, "")) || 0, image: i.image || i.img })),
      amount: total, paymentStatus: payment === "Cash on Delivery" ? "Pending" : "Paid",
      paymentMethod: payment === "Cash on Delivery" ? "Cash" : payment, orderType,
    });
    clearCart();
    toast(`Order ${id} placed successfully`);
    navigate(`/track/${id}`);
  };

  return (
    <section className="page-section pb-20"><div className="theme-container space-y-10">
      <SectionHeading eyebrow="Checkout" title="Delivery, order type & payment" description="Complete your details and place the order in one smooth flow." />
      <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <form onSubmit={submit} className="theme-card grid gap-5 p-6 sm:p-8">
          <h2 className="flex items-center gap-2 text-lg font-bold"><MapPin className="h-5 w-5 text-amber-500" /> Delivery Information</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium">Full name<input required value={form.name} onChange={(e) => set("name", e.target.value)} className="theme-input mt-1.5" /></label>
            <label className="text-sm font-medium">Phone<input required value={form.phone} onChange={(e) => set("phone", e.target.value)} className="theme-input mt-1.5" /></label>
          </div>
          <label className="text-sm font-medium">Email<input type="email" required value={form.email} onChange={(e) => set("email", e.target.value)} className="theme-input mt-1.5" /></label>
          <label className="text-sm font-medium">Address<textarea required value={form.address} onChange={(e) => set("address", e.target.value)} rows="2" className="theme-input mt-1.5" /></label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium">City<input required value={form.city} onChange={(e) => set("city", e.target.value)} className="theme-input mt-1.5" /></label>
            <label className="text-sm font-medium">Pincode<input required value={form.pincode} onChange={(e) => set("pincode", e.target.value)} className="theme-input mt-1.5" /></label>
          </div>
          <h2 className="pt-2 text-lg font-bold">Order Type</h2>
          <div className="grid grid-cols-3 gap-2">{[
            { v: "Delivery", icon: Bike }, { v: "Takeaway", icon: ShoppingBag }, { v: "Dine In", icon: UtensilsCrossed },
          ].map(({ v, icon: Icon }) => (
            <button type="button" key={v} onClick={() => setOrderType(v)} className={`flex flex-col items-center gap-1.5 rounded-2xl border-2 px-3 py-4 text-sm font-bold transition ${orderType === v ? "border-amber-500 bg-amber-50 text-amber-700" : "border-slate-100 bg-white text-slate-500"}`}>
              <Icon className="h-5 w-5" />{v}</button>))}</div>
          <h2 className="pt-2 text-lg font-bold">Payment Method</h2>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">{[
            { v: "UPI", icon: Smartphone }, { v: "Card", icon: CreditCard }, { v: "Cash on Delivery", icon: Banknote }, { v: "Wallet", icon: ShoppingBag },
          ].map(({ v, icon: Icon }) => (
            <button type="button" key={v} onClick={() => setPayment(v)} className={`flex flex-col items-center gap-1.5 rounded-2xl border-2 px-2 py-3.5 text-xs font-bold transition ${payment === v ? "border-amber-500 bg-amber-50 text-amber-700" : "border-slate-100 bg-white text-slate-500"}`}>
              <Icon className="h-5 w-5" />{v}</button>))}</div>
          <Button className="w-full !py-4">Place Order · {formatCurrency(total)}</Button>
          <p className="flex items-center justify-center gap-2 text-xs text-slate-400"><ShieldCheck className="h-4 w-4 text-emerald-500" /> Secure checkout · GST invoice included</p>
        </form>
        <aside className="theme-card h-fit space-y-4 p-6 sm:p-8">
          <h2 className="text-xl font-bold">Final order summary</h2>
          {cartItems.length === 0 ? <p className="text-sm text-slate-500">No items. <Link to="/menu" className="font-semibold text-amber-600">Add dishes →</Link></p> :
            cartItems.map((i) => <div key={i.name} className="flex items-center gap-3 text-sm"><img src={i.image || i.img} alt="" className="h-10 w-10 rounded-lg object-cover" /><span className="flex-1">{i.name} × {i.quantity}</span><b>{formatCurrency(Number(String(i.price).replace(/[^0-9.]/g, "")) * i.quantity)}</b></div>)}
          <div className="space-y-2 border-t border-amber-100 pt-4 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><b>{formatCurrency(subtotal)}</b></div>
            {discount > 0 && <div className="flex justify-between text-emerald-600"><span>Coupon {coupon?.code}</span><b>−{formatCurrency(discount)}</b></div>}
            <div className="flex justify-between"><span>Delivery fee</span><b>{formatCurrency(delivery)}</b></div>
            <div className="flex justify-between"><span>GST ({settings.gst}%)</span><b>{formatCurrency(tax)}</b></div>
            <div className="flex justify-between pt-2 text-lg font-bold"><span>Grand total</span><span>{formatCurrency(total)}</span></div>
          </div>
        </aside>
      </div>
    </div></section>
  );
};
export default CheckoutPage;
