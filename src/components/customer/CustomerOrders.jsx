import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Search, Eye, RotateCcw, Download, MapPin } from "lucide-react";
import { useStore } from "../../context/StoreContext";
import StatusBadge from "../common/StatusBadge";
import { SearchBar, FilterDropdown, EmptyState } from "../common/ui";
import SectionHeading from "../ui/SectionHeading";
import { formatCurrency } from "../../lib/menu";

const TRACK = ["New", "Confirmed", "Preparing", "Ready", "Out for Delivery", "Delivered"];

const CustomerOrders = () => {
  const { orders } = useStore();
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("All");
  const rows = useMemo(() => orders.filter((o) =>
    (o.id + o.customer).toLowerCase().includes(q.toLowerCase()) && (status === "All" || o.status === status)), [orders, q, status]);

  return (
    <section className="page-section pb-20"><div className="theme-container space-y-8">
      <SectionHeading eyebrow="My Orders" title="Order history & tracking" description="View details, track live status, reorder favourites or download invoices." />
      <div className="flex flex-col gap-3 sm:flex-row"><SearchBar value={q} onChange={setQ} placeholder="Search order ID..." />
        <FilterDropdown value={status} onChange={setStatus} options={["All", "New", "Confirmed", "Preparing", "Ready", "Out for Delivery", "Delivered", "Completed", "Cancelled"]} label="status" /></div>
      {rows.length === 0 ? <EmptyState icon={Search} title="No orders yet" message="Your placed orders will appear here with live tracking." action={<Link to="/menu" className="btn-primary">Explore menu</Link>} /> : (
        <div className="grid gap-5 lg:grid-cols-2">{rows.map((o) => (
          <article key={o.id} className="theme-card p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div><p className="font-bold text-slate-900">{o.id}</p><p className="text-xs text-slate-400">{o.date} · {o.orderType}</p></div>
              <StatusBadge status={o.status} />
            </div>
            <div className="mt-3 space-y-2">{o.items.map((i, idx) => (
              <div key={idx} className="flex items-center gap-3 rounded-xl bg-amber-50/60 p-2.5">
                {i.image && <img src={i.image} alt={i.name} className="h-11 w-11 rounded-lg object-cover" />}
                <p className="flex-1 text-sm font-medium">{i.name} × {i.qty}</p><b className="text-sm">{formatCurrency(i.price * i.qty)}</b>
              </div>))}</div>
            <div className="mt-3 flex items-center justify-between border-t border-amber-100 pt-3">
              <div><p className="text-xs text-slate-400">Total · {o.paymentMethod} · {o.paymentStatus}</p><p className="text-xl font-bold">{formatCurrency(o.amount)}</p></div>
              <StatusBadge status={o.paymentStatus} />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link to={`/track/${o.id}`} className="inline-flex items-center gap-1.5 rounded-xl bg-slate-950 px-4 py-2 text-xs font-semibold text-white"><MapPin className="h-3.5 w-3.5" /> Track order</Link>
              <Link to={`/track/${o.id}`} className="inline-flex items-center gap-1.5 rounded-xl bg-amber-50 px-4 py-2 text-xs font-semibold text-amber-700"><Eye className="h-3.5 w-3.5" /> Details</Link>
              <button onClick={() => window.print()} className="inline-flex items-center gap-1.5 rounded-xl bg-slate-100 px-4 py-2 text-xs font-semibold"><Download className="h-3.5 w-3.5" /> Invoice</button>
              <Link to="/menu" className="inline-flex items-center gap-1.5 rounded-xl border border-amber-200 px-4 py-2 text-xs font-semibold"><RotateCcw className="h-3.5 w-3.5" /> Reorder</Link>
            </div>
          </article>))}</div>)}
    </div></section>
  );
};
export default CustomerOrders;

export const TrackOrder = () => {
  const { orders } = useStore();
  const { id } = useParams();
  const order = orders.find((o) => o.id === id) || orders[0];
  if (!order) return null;
  const steps = order.orderType === "Dine In" ? ["New", "Confirmed", "Preparing", "Ready", "Delivered"] : TRACK;
  const idx = Math.max(0, steps.indexOf(order.status === "Completed" ? "Delivered" : order.status));
  return (
    <section className="page-section pb-20"><div className="theme-container max-w-3xl space-y-8">
      <SectionHeading eyebrow={`Tracking ${order.id}`} title="Live order tracking" description={`${order.orderType} · ${order.date} · ${formatCurrency(order.amount)}`} />
      <article className="theme-card p-6 sm:p-8">
        <div className="flex items-center justify-between"><StatusBadge status={order.status} /><StatusBadge status={order.paymentStatus} /></div>
        <div className="mt-8 space-y-0">{steps.map((s, i) => {
          const done = i < idx, active = i === idx;
          return (
            <div key={s} className="relative flex gap-4 pb-8 last:pb-0">
              {i < steps.length - 1 && <span className={`absolute left-[19px] top-10 h-[calc(100%-2.5rem)] w-0.5 ${i < idx ? "bg-emerald-400" : "bg-slate-200"}`} />}
              <span className={`z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold ${done ? "bg-emerald-500 text-white" : active ? "bg-amber-500 text-white ring-4 ring-amber-200" : "bg-slate-100 text-slate-400"}`}>{done ? "✓" : i + 1}</span>
              <div className={`rounded-2xl px-4 py-3 flex-1 ${active ? "bg-amber-50 border border-amber-200" : ""}`}><p className={`font-bold ${active ? "text-amber-700" : done ? "text-slate-900" : "text-slate-400"}`}>{s}</p>
                <p className="text-xs text-slate-400">{active ? "Current status — our kitchen is on it" : done ? "Completed" : "Waiting"}</p></div>
            </div>);
        })}</div>
        <div className="mt-6 flex flex-wrap gap-2"><Link to="/orders" className="btn-secondary">Back to orders</Link><Link to="/menu" className="btn-primary">Order more</Link></div>
      </article>
    </div></section>
  );
};
