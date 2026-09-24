import React, { useMemo, useState } from "react";
import { Eye, Printer, XCircle, Search } from "lucide-react";
import { useStore } from "../../context/StoreContext";
import StatusBadge from "../common/StatusBadge";
import Modal from "../common/Modal";
import ConfirmDialog from "../common/ConfirmDialog";
import { SearchBar, FilterDropdown, Pagination, EmptyState, PageHeader } from "../common/ui";
import { ORDER_STATUSES, ORDER_TYPES } from "../../data/adminSeed";
import { formatCurrency } from "../../lib/menu";

const PAGE = 7;

const Orders = () => {
  const { orders, updateOrderStatus, cancelOrder, settings } = useStore();
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("All");
  const [type, setType] = useState("All");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);
  const [cancelId, setCancelId] = useState(null);

  const filtered = useMemo(() => orders.filter((o) => {
    const hit = (o.id + o.customer + o.phone).toLowerCase().includes(q.toLowerCase());
    return hit && (status === "All" || o.status === status) && (type === "All" || o.orderType === type);
  }), [orders, q, status, type]);

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE));
  const rows = filtered.slice((page - 1) * PAGE, page * PAGE);

  const subtotal = (o) => o.items.reduce((s, i) => s + i.price * i.qty, 0);
  const gst = (o) => Math.round(subtotal(o) * (settings.gst / 100));
  const grand = (o) => subtotal(o) + gst(o) + (o.orderType === "Delivery" ? settings.deliveryFee : 0);

  return (
    <div className="space-y-5">
      <PageHeader eyebrow="Sales" title="Order Management" description={`${orders.length} orders · ${filtered.length} matching filters`} />
      <div className="flex flex-col gap-3 rounded-2xl border border-amber-100/70 bg-white p-4 shadow-sm sm:flex-row sm:items-center">
        <SearchBar value={q} onChange={(v) => { setQ(v); setPage(1); }} placeholder="Search order, customer, phone..." />
        <div className="flex flex-wrap gap-2">
          <FilterDropdown value={status} onChange={(v) => { setStatus(v); setPage(1); }} options={["All", ...ORDER_STATUSES]} label="status" />
          <FilterDropdown value={type} onChange={(v) => { setType(v); setPage(1); }} options={["All", ...ORDER_TYPES]} label="type" />
        </div>
      </div>
      <article className="overflow-hidden rounded-2xl border border-amber-100/70 bg-white shadow-md">
        <div className="overflow-x-auto"><table className="w-full min-w-[900px] text-left text-sm">
          <thead><tr className="border-b border-amber-100 bg-amber-50/60 text-xs uppercase tracking-wider text-slate-400">
            <th className="px-4 py-3">Order</th><th className="px-4 py-3">Customer</th><th className="px-4 py-3">Items</th><th className="px-4 py-3">Amount</th><th className="px-4 py-3">Payment</th><th className="px-4 py-3">Type</th><th className="px-4 py-3">Date</th><th className="px-4 py-3">Status</th><th className="px-4 py-3 text-right">Actions</th>
          </tr></thead>
          <tbody>{rows.map((o) => (
            <tr key={o.id} className="border-b border-slate-100 last:border-0 hover:bg-amber-50/40">
              <td className="px-4 py-3 font-bold text-slate-900">{o.id}</td>
              <td className="px-4 py-3"><p className="font-medium text-slate-800">{o.customer}</p><p className="text-xs text-slate-400">{o.phone}</p></td>
              <td className="px-4 py-3 text-slate-600">{o.items.reduce((s, i) => s + i.qty, 0)} items</td>
              <td className="px-4 py-3 font-bold">{formatCurrency(o.amount)}</td>
              <td className="px-4 py-3"><StatusBadge status={o.paymentStatus} /></td>
              <td className="px-4 py-3"><StatusBadge status={o.orderType} /></td>
              <td className="px-4 py-3 text-xs text-slate-500">{o.date}</td>
              <td className="px-4 py-3"><StatusBadge status={o.status} /></td>
              <td className="px-4 py-3"><div className="flex justify-end gap-1.5">
                <button onClick={() => setSelected(o)} className="rounded-lg bg-amber-50 p-2 text-amber-600 hover:bg-amber-100" aria-label="View"><Eye className="h-4 w-4" /></button>
                <button onClick={() => window.print()} className="rounded-lg bg-slate-100 p-2 text-slate-500 hover:bg-slate-200" aria-label="Print"><Printer className="h-4 w-4" /></button>
                {o.status !== "Cancelled" && <button onClick={() => setCancelId(o.id)} className="rounded-lg bg-red-50 p-2 text-red-500 hover:bg-red-100" aria-label="Cancel"><XCircle className="h-4 w-4" /></button>}
              </div></td>
            </tr>))}</tbody>
        </table></div>
        {rows.length === 0 && <div className="p-6"><EmptyState icon={Search} title="No orders found" message="Try a different search term or clear the status filters." /></div>}
        <div className="border-t border-amber-100 p-4"><Pagination page={page} totalPages={pages} onChange={setPage} /></div>
      </article>

      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected ? `Order ${selected.id}` : ""} wide>
        {selected && (
          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-amber-50/70 p-4 text-sm"><p className="font-bold text-slate-900">Customer</p><p className="mt-2">{selected.customer}</p><p className="text-slate-500">{selected.phone}</p><p className="text-slate-500">{selected.email}</p><p className="text-slate-500">{selected.address}</p></div>
              <div className="rounded-xl bg-slate-50 p-4 text-sm"><p className="font-bold text-slate-900">Order info</p><p className="mt-2">Date: {selected.date}</p><p>Type: {selected.orderType}{selected.table ? ` · Table ${selected.table}` : ""}</p><p>Payment: {selected.paymentMethod} · {selected.paymentStatus}</p></div>
            </div>
            <div className="space-y-2">{selected.items.map((i, idx) => (
              <div key={idx} className="flex items-center gap-3 rounded-xl border border-slate-100 p-3">
                {i.image && <img src={i.image} alt={i.name} className="h-12 w-12 rounded-lg object-cover" />}
                <div className="flex-1"><p className="text-sm font-semibold">{i.name}</p><p className="text-xs text-slate-400">Qty {i.qty} × {formatCurrency(i.price)}</p></div>
                <b className="text-sm">{formatCurrency(i.price * i.qty)}</b>
              </div>))}</div>
            <div className="space-y-1.5 rounded-xl bg-amber-50/60 p-4 text-sm">
              <div className="flex justify-between"><span>Subtotal</span><b>{formatCurrency(subtotal(selected))}</b></div>
              <div className="flex justify-between"><span>GST ({settings.gst}%)</span><b>{formatCurrency(gst(selected))}</b></div>
              <div className="flex justify-between"><span>Delivery fee</span><b>{formatCurrency(selected.orderType === "Delivery" ? settings.deliveryFee : 0)}</b></div>
              <div className="flex justify-between border-t border-amber-200 pt-2 text-base"><span className="font-bold">Grand total</span><b>{formatCurrency(grand(selected))}</b></div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold">Update status:</span>
              <div className="flex flex-wrap gap-1.5">{ORDER_STATUSES.map((s) => (
                <button key={s} onClick={() => { updateOrderStatus(selected.id, s); setSelected({ ...selected, status: s }); }} className={`rounded-full px-3 py-1.5 text-xs font-semibold ${selected.status === s ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-600 hover:bg-amber-100"}`}>{s}</button>))}</div>
            </div>
          </div>
        )}
      </Modal>
      <ConfirmDialog open={!!cancelId} onClose={() => setCancelId(null)} title="Cancel order?" message={`Order ${cancelId} will be cancelled and the payment will be queued for refund.`} confirmLabel="Cancel order" onConfirm={() => cancelOrder(cancelId)} />
    </div>
  );
};
export default Orders;
