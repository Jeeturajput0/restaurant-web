import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Pencil, Heart, MapPin, Bell, ShoppingBag, CalendarCheck, Save } from "lucide-react";
import { useStore } from "../../../context/StoreContext";
import Button from "../../ui/Button";
import SectionHeading from "../../ui/SectionHeading";
import { formatCurrency } from "../../../lib/menu";

const ProfilePage = () => {
  const { orders, wishlist, foods, myReservations, toast } = useStore();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ name: "Aarav Sharma", email: "aarav@gmail.com", phone: "+91 98765 43210", address: "21 Palm Avenue, New Delhi" });
  const favs = foods.filter((f) => wishlist.includes(f.id)).slice(0, 3);

  return (
    <section className="page-section pb-20"><div className="theme-container space-y-10">
      <SectionHeading eyebrow="Profile" title="Manage your dining preferences" description="Edit details, revisit orders, reservations and wishlist." />
      <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
        <article className="theme-card h-fit p-6 sm:p-8">
          <div className="flex items-center gap-5">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-3xl font-bold text-white">{form.name[0]}</span>
            <div><h2 className="text-2xl font-bold">{form.name}</h2><p className="text-sm text-slate-400">Premium dining member</p></div>
          </div>
          {editing ? (
            <div className="mt-6 grid gap-3">
              {[["name", "Full name"], ["email", "Email"], ["phone", "Phone"], ["address", "Address"]].map(([k, l]) => (
                <label key={k} className="text-sm font-medium">{l}<input value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} className="theme-input mt-1.5" /></label>))}
              <button onClick={() => { setEditing(false); toast("Profile updated"); }} className="btn-primary"><Save className="mr-2 h-4 w-4" /> Save changes</button>
            </div>
          ) : (
            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <p>{form.email} · {form.phone}</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-amber-500" />{form.address}</p>
              <p className="flex items-center gap-2"><Bell className="h-4 w-4 text-amber-500" /> Order updates & offers enabled</p>
            </div>)}
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            {[["Orders", orders.length], ["Saved", wishlist.length], ["Bookings", myReservations.length + 2]].map(([k, v]) => (
              <div key={k} className="rounded-2xl bg-amber-50 p-4"><p className="text-2xl font-bold">{v}</p><p className="text-xs text-slate-500">{k}</p></div>))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {!editing && <Button onClick={() => setEditing(true)}><Pencil className="mr-2 h-4 w-4" /> Edit Profile</Button>}
            <Button as={Link} to="/orders" variant="secondary"><ShoppingBag className="mr-2 h-4 w-4" /> My Orders</Button>
            <Button as={Link} to="/reservations" variant="secondary"><CalendarCheck className="mr-2 h-4 w-4" /> Bookings</Button>
          </div>
        </article>
        <div className="space-y-6">
          <article className="theme-card p-6 sm:p-8">
            <div className="flex items-center justify-between"><h3 className="text-xl font-bold">Recent orders</h3><Link to="/orders" className="text-sm font-semibold text-amber-600">View all</Link></div>
            <div className="mt-4 space-y-2">{orders.slice(0, 3).map((o) => (
              <div key={o.id} className="flex items-center justify-between rounded-2xl bg-amber-50/60 px-4 py-3 text-sm"><span className="font-semibold">{o.id} · {o.items.length} items</span><b>{formatCurrency(o.amount)}</b></div>))}</div>
          </article>
          <article className="theme-card p-6 sm:p-8">
            <div className="flex items-center justify-between"><h3 className="flex items-center gap-2 text-xl font-bold"><Heart className="h-5 w-5 text-red-500" /> Wishlist</h3><Link to="/wishlist" className="text-sm font-semibold text-amber-600">View all</Link></div>
            <div className="mt-4 space-y-2">{favs.length === 0 ? <p className="text-sm text-slate-400">No favourites yet. <Link to="/menu" className="font-semibold text-amber-600">Browse menu →</Link></p> :
              favs.map((f) => <div key={f.id} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm"><img src={f.image} alt="" className="h-10 w-10 rounded-lg object-cover" /><span className="flex-1 font-medium">{f.name}</span><b className="text-sm">{formatCurrency(f.discountPrice || f.price)}</b></div>)}</div>
          </article>
        </div>
      </div>
    </div></section>
  );
};
export default ProfilePage;
