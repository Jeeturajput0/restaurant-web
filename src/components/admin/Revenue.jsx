import React, { useMemo, useState } from "react";
import { IndianRupee, Receipt, ShoppingBag, TrendingUp, Download } from "lucide-react";
import { useStore } from "../../context/StoreContext";
import StatCard from "../common/StatCard";
import RevenueChart, { RevenueBars } from "../common/RevenueChart";
import { seedRevenueSeries } from "../../data/adminSeed";
import { formatCurrency } from "../../lib/menu";
import { PageHeader } from "../common/ui";

const Revenue = () => {
  const { stats } = useStore();
  const [range, setRange] = useState("6 Months");
  const [mode, setMode] = useState("revenue");
  const data = seedRevenueSeries[range];
  const total = useMemo(() => data.reduce((s, d) => s + d.revenue, 0), [data]);
  const orders = useMemo(() => data.reduce((s, d) => s + d.orders, 0), [data]);

  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Finance" title="Revenue Analytics"
        description="Track daily, weekly, monthly and yearly performance across all channels."
        actions={<button onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white"><Download className="h-4 w-4" /> Export</button>} />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={IndianRupee} title="Total Revenue" value={formatCurrency(stats.totalRevenue)} growth="+18.5%" hint="all time" tone="bg-emerald-500" />
        <StatCard icon={Receipt} title={`${range} Revenue`} value={formatCurrency(total)} growth="+12.2%" hint={range} tone="bg-amber-500" />
        <StatCard icon={ShoppingBag} title="Orders" value={orders.toLocaleString()} growth="+9.4%" hint={range} tone="bg-indigo-500" />
        <StatCard icon={TrendingUp} title="Avg. Order Value" value={formatCurrency(Math.round(total / Math.max(1, orders)))} growth="+4.1%" hint="per order" tone="bg-teal-500" />
      </div>
      <article className="rounded-2xl border border-amber-100/70 bg-white p-5 shadow-md sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-bold text-slate-900">Revenue Graph</h2>
          <div className="flex flex-wrap gap-2">{Object.keys(seedRevenueSeries).map((r) => (
            <button key={r} onClick={() => setRange(r)} className={`rounded-full px-3 py-1.5 text-xs font-semibold ${range === r ? "bg-slate-950 text-white" : "bg-amber-50 text-slate-600"}`}>{r}</button>))}</div>
        </div>
        <div className="mt-3 flex gap-2">{["revenue", "orders"].map((m) => (
          <button key={m} onClick={() => setMode(m)} className={`rounded-lg px-3 py-1.5 text-xs font-semibold capitalize ${mode === m ? "bg-amber-500 text-white" : "bg-slate-100 text-slate-600"}`}>{m}</button>))}</div>
        <div className="mt-4"><RevenueChart data={data} mode={mode} /></div>
      </article>
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-amber-100/70 bg-white p-5 shadow-md">
          <h2 className="font-bold text-slate-900">Revenue vs Orders Comparison</h2>
          <p className="text-xs text-slate-400">Yellow = revenue · Purple = orders</p>
          <div className="mt-4"><RevenueBars data={data} /></div>
        </article>
        <article className="rounded-2xl border border-amber-100/70 bg-white p-5 shadow-md">
          <h2 className="font-bold text-slate-900">Breakdown</h2>
          <div className="mt-4 space-y-3">
            {[["Daily average", formatCurrency(Math.round(total / Math.max(1, data.length)))], ["Weekly average", formatCurrency(Math.round(total / 4))], ["Monthly run-rate", formatCurrency(Math.round(total * 1.08))], ["Yearly projection", formatCurrency(Math.round(total * 9.4))], ["Average order value", formatCurrency(stats.avgOrder)], ["Total revenue", formatCurrency(stats.totalRevenue)]].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between rounded-xl bg-amber-50/60 px-4 py-3 text-sm"><span className="text-slate-500">{k}</span><b className="text-slate-900">{v}</b></div>))}
          </div>
        </article>
      </div>
    </div>
  );
};
export default Revenue;
