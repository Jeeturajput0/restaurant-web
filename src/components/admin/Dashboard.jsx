import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  IndianRupee, ShoppingBag, Users, CalendarCheck, Clock3, CheckCircle2, Wallet, Star,
} from "lucide-react";
import { useStore } from "../../context/StoreContext";
import StatCard from "../common/StatCard";
import StatusBadge from "../common/StatusBadge";
import RevenueChart, { RevenueBars } from "../common/RevenueChart";
import { seedRevenueSeries } from "../../data/adminSeed";
import { formatCurrency } from "../../lib/menu";
import { PageHeader } from "../common/ui";

const Dashboard = () => {
  const { stats, orders, reservations, reviews, foods } = useStore();
  const [range, setRange] = useState("7 Days");
  const [chartMode, setChartMode] = useState("revenue");
  const data = seedRevenueSeries[range];
  const total = data.reduce((s, d) => s + d.revenue, 0);
  const totalOrders = data.reduce((s, d) => s + d.orders, 0);
  const avgRating = (reviews.reduce((s, r) => s + r.rating, 0) / Math.max(1, reviews.length)).toFixed(1);

  const recent = useMemo(() => orders.slice(0, 5), [orders]);

  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Overview" title="Good morning, Admin 👋"
        description="Here's what's happening across dine-in, takeaway and delivery today."
        actions={<><Link to="/admin/revenue" className="rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white">View Analytics</Link>
        <Link to="/admin/orders" className="rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white">New Orders</Link></>} />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={IndianRupee} title="Total Revenue" value={formatCurrency(stats.totalRevenue)} growth="+18.5%" hint="vs last month" tone="bg-emerald-500" />
        <StatCard icon={Wallet} title="Today's Revenue" value={formatCurrency(stats.todayRevenue)} growth="+12.4%" hint="vs yesterday" tone="bg-amber-500" />
        <StatCard icon={ShoppingBag} title="Total Orders" value={stats.totalOrders.toLocaleString()} growth="+9.2%" hint="all time" tone="bg-indigo-500" />
        <StatCard icon={Clock3} title="Today's Orders" value={stats.todayOrders} growth="+6.1%" hint="vs yesterday" tone="bg-sky-500" />
        <StatCard icon={Clock3} title="Pending Orders" value={stats.pending} growth="+3" hint="needs attention" tone="bg-orange-500" />
        <StatCard icon={CheckCircle2} title="Completed Orders" value={stats.completed.toLocaleString()} growth="+14.8%" hint="fulfilled" tone="bg-teal-500" />
        <StatCard icon={Users} title="Total Customers" value={stats.customers.toLocaleString()} growth="+22" hint="this month" tone="bg-violet-500" />
        <StatCard icon={CalendarCheck} title="Active Reservations" value={stats.reservations} growth="+5" hint="upcoming" tone="bg-rose-500" />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <article className="rounded-2xl border border-amber-100/70 bg-white p-5 shadow-md sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div><h2 className="text-lg font-bold text-slate-900">Revenue Analytics</h2>
              <p className="text-sm text-slate-500">{formatCurrency(total)} · {totalOrders} orders · {range}</p></div>
            <div className="flex flex-wrap gap-2">
              {Object.keys(seedRevenueSeries).map((r) => (
                <button key={r} onClick={() => setRange(r)} className={`rounded-full px-3 py-1.5 text-xs font-semibold ${range === r ? "bg-slate-950 text-white" : "bg-amber-50 text-slate-600"}`}>{r}</button>
              ))}
            </div>
          </div>
          <div className="mt-3 flex gap-2">
            {(["revenue", "orders"]).map((m) => (
              <button key={m} onClick={() => setChartMode(m)} className={`rounded-lg px-3 py-1.5 text-xs font-semibold capitalize ${chartMode === m ? "bg-amber-500 text-white" : "bg-slate-100 text-slate-600"}`}>{m}</button>
            ))}
          </div>
          <div className="mt-4"><RevenueChart data={data} mode={chartMode} /></div>
        </article>

        <div className="space-y-6">
          <article className="rounded-2xl border border-amber-100/70 bg-white p-5 shadow-md">
            <h2 className="text-lg font-bold text-slate-900">Revenue vs Orders</h2>
            <p className="text-xs text-slate-400"><span className="mr-3">🟡 Revenue</span><span>🟣 Orders</span></p>
            <div className="mt-4"><RevenueBars data={data} /></div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl bg-amber-50 p-3"><p className="text-xs text-slate-500">Total</p><p className="font-bold text-slate-900">{formatCurrency(total)}</p></div>
              <div className="rounded-xl bg-violet-50 p-3"><p className="text-xs text-slate-500">Orders</p><p className="font-bold text-slate-900">{totalOrders}</p></div>
              <div className="rounded-xl bg-emerald-50 p-3"><p className="text-xs text-slate-500">Avg. Order</p><p className="font-bold text-slate-900">{formatCurrency(Math.round(total / Math.max(1, totalOrders)))}</p></div>
            </div>
          </article>
          <article className="rounded-2xl bg-slate-950 p-5 text-white shadow-md">
            <div className="flex items-center gap-2"><Star className="h-5 w-5 fill-amber-400 text-amber-400" /><h2 className="font-bold">EatMore Rating</h2></div>
            <p className="mt-2 text-4xl font-bold">{avgRating}<span className="text-base text-white/60">/5</span></p>
            <p className="mt-1 text-sm text-white/70">{reviews.length} verified reviews · 92% recommend us</p>
            <Link to="/admin/reviews" className="mt-4 inline-block rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold">Manage reviews</Link>
          </article>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <article className="overflow-hidden rounded-2xl border border-amber-100/70 bg-white shadow-md">
          <div className="flex items-center justify-between px-5 py-4"><h2 className="font-bold text-slate-900">Recent Orders</h2><Link to="/admin/orders" className="text-sm font-semibold text-amber-600">View all</Link></div>
          <div className="overflow-x-auto"><table className="w-full min-w-[640px] text-left text-sm">
            <thead><tr className="border-y border-amber-100 bg-amber-50/50 text-xs uppercase tracking-wider text-slate-400"><th className="px-5 py-3">Order</th><th className="px-5 py-3">Customer</th><th className="px-5 py-3">Amount</th><th className="px-5 py-3">Type</th><th className="px-5 py-3">Status</th></tr></thead>
            <tbody>{recent.map((o) => <tr key={o.id} className="border-b border-slate-100 last:border-0 hover:bg-amber-50/40"><td className="px-5 py-3 font-semibold">{o.id}</td><td className="px-5 py-3">{o.customer}</td><td className="px-5 py-3 font-semibold">{formatCurrency(o.amount)}</td><td className="px-5 py-3"><StatusBadge status={o.orderType} /></td><td className="px-5 py-3"><StatusBadge status={o.status} /></td></tr>)}</tbody>
          </table></div>
        </article>
        <article className="rounded-2xl border border-amber-100/70 bg-white p-5 shadow-md">
          <div className="flex items-center justify-between"><h2 className="font-bold text-slate-900">Top Dishes</h2><Link to="/admin/products" className="text-sm font-semibold text-amber-600">Manage</Link></div>
          <div className="mt-4 space-y-3">{foods.filter((f) => f.popular).slice(0, 4).map((f) => (
            <div key={f.id} className="flex items-center gap-3 rounded-xl bg-amber-50/60 p-2.5">
              <img src={f.image} alt={f.name} className="h-12 w-12 rounded-xl object-cover" />
              <div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold text-slate-900">{f.name}</p><p className="text-xs text-slate-500">⭐ {f.rating} · {formatCurrency(f.price)}</p></div>
            </div>))}</div>
          <div className="mt-4 rounded-xl bg-slate-950 p-4 text-white"><p className="text-sm font-semibold">Upcoming reservations: {reservations.filter((r) => r.status !== "Cancelled").length}</p><Link to="/admin/reservations" className="mt-2 inline-block text-sm font-semibold text-amber-400">View schedule →</Link></div>
        </article>
      </div>
    </div>
  );
};
export default Dashboard;
