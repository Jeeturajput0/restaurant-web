import React, { useMemo, useState } from "react";
import { Eye, Star } from "lucide-react";
import { useStore } from "../../context/StoreContext";
import StatusBadge from "../common/StatusBadge";
import Modal from "../common/Modal";
import { SearchBar, FilterDropdown, Pagination, EmptyState, PageHeader } from "../common/ui";
import { formatCurrency } from "../../lib/menu";

const Customers = () => {
  const { customers, orders, reviews, reservations } = useStore();
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("All");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);
  const PAGE = 6;

  const rows = useMemo(() => customers.filter((c) =>
    (c.name + c.email + c.phone).toLowerCase().includes(q.toLowerCase()) && (status === "All" || c.status === status)), [customers, q, status]);
  const view = rows.slice((page - 1) * PAGE, page * PAGE);

  return (
    <div className="space-y-5">
      <PageHeader eyebrow="People" title="Customer Management" description={`${customers.length} registered customers`} />
      <div className="flex flex-col gap-3 rounded-2xl border border-amber-100/70 bg-white p-4 shadow-sm sm:flex-row">
        <SearchBar value={q} onChange={(v) => { setQ(v); setPage(1); }} placeholder="Search name, email, phone..." />
        <FilterDropdown value={status} onChange={setStatus} options={["All", "Active", "Inactive", "Blocked"]} label="status" />
      </div>
      <article className="overflow-hidden rounded-2xl border border-amber-100/70 bg-white shadow-md">
        <div className="overflow-x-auto"><table className="w-full min-w-[860px] text-left text-sm">
          <thead><tr className="border-b border-amber-100 bg-amber-50/60 text-xs uppercase tracking-wider text-slate-400">
            <th className="px-4 py-3">Customer</th><th className="px-4 py-3">Contact</th><th className="px-4 py-3">Orders</th><th className="px-4 py-3">Spent</th><th className="px-4 py-3">Last order</th><th className="px-4 py-3">Status</th><th className="px-4 py-3 text-right">View</th>
          </tr></thead>
          <tbody>{view.map((c) => (
            <tr key={c.id} className="border-b border-slate-100 last:border-0 hover:bg-amber-50/40">
              <td className="px-4 py-3"><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-700">{c.name[0]}</span><div><p className="font-semibold text-slate-900">{c.name}</p><p className="text-xs text-slate-400">{c.id} · since {c.joined}</p></div></div></td>
              <td className="px-4 py-3 text-xs text-slate-500">{c.email}<br />{c.phone}</td>
              <td className="px-4 py-3 font-bold">{c.totalOrders}</td>
              <td className="px-4 py-3 font-bold">{formatCurrency(c.totalSpent)}</td>
              <td className="px-4 py-3 text-xs">{c.lastOrder}</td>
              <td className="px-4 py-3"><StatusBadge status={c.status} /></td>
              <td className="px-4 py-3 text-right"><button onClick={() => setSelected(c)} className="rounded-lg bg-amber-50 p-2 text-amber-600" aria-label="View customer"><Eye className="h-4 w-4" /></button></td>
            </tr>))}</tbody>
        </table></div>
        {view.length === 0 && <div className="p-6"><EmptyState title="No customers" message="No customers match your search." /></div>}
        <div className="border-t border-amber-100 p-4"><Pagination page={page} totalPages={Math.max(1, Math.ceil(rows.length / PAGE))} onChange={setPage} /></div>
      </article>

      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.name || ""} wide>
        {selected && (
          <div className="space-y-5">
            <div className="flex flex-col gap-4 rounded-2xl bg-amber-50/70 p-4 sm:flex-row sm:items-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500 text-2xl font-bold text-white">{selected.name[0]}</span>
              <div className="flex-1"><p className="font-bold text-slate-900">{selected.name}</p><p className="text-sm text-slate-500">{selected.email} · {selected.phone}</p><p className="text-sm text-slate-500">{selected.address}</p></div>
              <StatusBadge status={selected.status} />
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              {[["Orders", selected.totalOrders], ["Spent", formatCurrency(selected.totalSpent)], ["Favorite", selected.favorite]].map(([k, v]) => (
                <div key={k} className="rounded-xl bg-slate-50 p-3"><p className="text-[11px] uppercase tracking-wider text-slate-400">{k}</p><p className="mt-1 truncate text-sm font-bold">{v}</p></div>))}
            </div>
            <div><h4 className="font-bold">Order history</h4><div className="mt-2 space-y-2">{orders.filter((o) => o.customerId === selected.id).map((o) => (
              <div key={o.id} className="flex items-center justify-between rounded-xl border border-slate-100 px-4 py-2.5 text-sm"><span className="font-semibold">{o.id}</span><StatusBadge status={o.status} /><b>{formatCurrency(o.amount)}</b></div>))}
              {orders.filter((o) => o.customerId === selected.id).length === 0 && <p className="text-sm text-slate-400">No recent orders in demo data.</p>}</div></div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div><h4 className="font-bold">Reviews</h4>{reviews.filter((r) => r.customer === selected.name).map((r) => (
                <p key={r.id} className="mt-2 rounded-xl bg-slate-50 p-3 text-sm"><Star className="mr-1 inline h-3.5 w-3.5 fill-amber-400 text-amber-400" />{r.rating} · {r.text}</p>))}
                {reviews.filter((r) => r.customer === selected.name).length === 0 && <p className="mt-2 text-sm text-slate-400">No reviews yet.</p>}</div>
              <div><h4 className="font-bold">Reservations</h4>{reservations.filter((r) => r.customer === selected.name).map((r) => (
                <p key={r.id} className="mt-2 rounded-xl bg-slate-50 p-3 text-sm">{r.date} · {r.time} · {r.guests} guests · <b>{r.status}</b></p>))}
                {reservations.filter((r) => r.customer === selected.name).length === 0 && <p className="mt-2 text-sm text-slate-400">No reservations.</p>}</div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
export default Customers;
