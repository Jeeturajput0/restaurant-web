import React, { useMemo, useState } from "react";
import { Eye, IndianRupee } from "lucide-react";
import { useStore } from "../../context/StoreContext";
import StatusBadge from "../common/StatusBadge";
import StatCard from "../common/StatCard";
import Modal from "../common/Modal";
import { SearchBar, FilterDropdown, Pagination, PageHeader } from "../common/ui";
import { PAYMENT_METHODS, PAYMENT_STATUSES } from "../../data/adminSeed";
import { formatCurrency } from "../../lib/menu";

const Payments = () => {
  const { payments } = useStore();
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("All");
  const [method, setMethod] = useState("All");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);
  const PAGE = 7;

  const rows = useMemo(() => payments.filter((p) =>
    (p.id + p.orderId + p.customer).toLowerCase().includes(q.toLowerCase()) && (status === "All" || p.status === status) && (method === "All" || p.method === method)), [payments, q, status, method]);

  const sum = (s) => payments.filter((p) => p.status === s).reduce((t, p) => t + p.amount, 0);

  return (
    <div className="space-y-5">
      <PageHeader eyebrow="Finance" title="Payment Management" description={`${payments.length} transactions tracked`} />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <StatCard icon={IndianRupee} title="Total Payments" value={formatCurrency(payments.reduce((s, p) => s + p.amount, 0))} growth="+16%" hint="all time" tone="bg-indigo-500" />
        <StatCard icon={IndianRupee} title="Successful" value={formatCurrency(sum("Paid"))} growth="+18%" hint="paid" tone="bg-emerald-500" />
        <StatCard icon={IndianRupee} title="Pending" value={formatCurrency(sum("Pending"))} growth="2" hint="awaiting" tone="bg-amber-500" />
        <StatCard icon={IndianRupee} title="Failed" value={formatCurrency(sum("Failed"))} growth="-1.2%" hint="needs retry" tone="bg-red-500" />
        <StatCard icon={IndianRupee} title="Refunded" value={formatCurrency(sum("Refunded"))} growth="1" hint="returned" tone="bg-slate-500" />
      </div>
      <div className="flex flex-col gap-3 rounded-2xl border border-amber-100/70 bg-white p-4 shadow-sm sm:flex-row">
        <SearchBar value={q} onChange={(v) => { setQ(v); setPage(1); }} placeholder="Search txn, order, customer..." />
        <div className="flex gap-2"><FilterDropdown value={status} onChange={setStatus} options={["All", ...PAYMENT_STATUSES]} label="status" />
        <FilterDropdown value={method} onChange={setMethod} options={["All", ...PAYMENT_METHODS]} label="method" /></div>
      </div>
      <article className="overflow-hidden rounded-2xl border border-amber-100/70 bg-white shadow-md">
        <div className="overflow-x-auto"><table className="w-full min-w-[820px] text-left text-sm">
          <thead><tr className="border-b border-amber-100 bg-amber-50/60 text-xs uppercase tracking-wider text-slate-400"><th className="px-4 py-3">Txn ID</th><th className="px-4 py-3">Order</th><th className="px-4 py-3">Customer</th><th className="px-4 py-3">Amount</th><th className="px-4 py-3">Method</th><th className="px-4 py-3">Date</th><th className="px-4 py-3">Status</th><th className="px-4 py-3 text-right">View</th></tr></thead>
          <tbody>{rows.slice((page - 1) * PAGE, page * PAGE).map((p) => (
            <tr key={p.id} className="border-b border-slate-100 last:border-0 hover:bg-amber-50/40">
              <td className="px-4 py-3 font-bold">{p.id}</td><td className="px-4 py-3 text-amber-700 font-semibold">{p.orderId}</td><td className="px-4 py-3">{p.customer}</td>
              <td className="px-4 py-3 font-bold">{formatCurrency(p.amount)}</td><td className="px-4 py-3 text-xs font-semibold">{p.method}</td><td className="px-4 py-3 text-xs text-slate-500">{p.date}</td>
              <td className="px-4 py-3"><StatusBadge status={p.status} /></td>
              <td className="px-4 py-3 text-right"><button onClick={() => setSelected(p)} className="rounded-lg bg-amber-50 p-2 text-amber-600" aria-label="View payment"><Eye className="h-4 w-4" /></button></td>
            </tr>))}</tbody>
        </table></div>
        <div className="border-t border-amber-100 p-4"><Pagination page={page} totalPages={Math.max(1, Math.ceil(rows.length / PAGE))} onChange={setPage} /></div>
      </article>
      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected ? `Payment ${selected.id}` : ""}>
        {selected && <div className="space-y-2 text-sm">
          {[["Order ID", selected.orderId], ["Customer", selected.customer], ["Amount", formatCurrency(selected.amount)], ["Method", selected.method], ["Date", selected.date], ["Status", selected.status]].map(([k, v]) => (
            <div key={k} className="flex justify-between rounded-xl bg-amber-50/60 px-4 py-3"><span className="text-slate-500">{k}</span><b>{v}</b></div>))}
        </div>}
      </Modal>
    </div>
  );
};
export default Payments;
