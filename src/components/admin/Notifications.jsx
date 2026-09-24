import React from "react";
import { ShoppingBag, CalendarCheck, CreditCard, XCircle, UserPlus, Star, BellRing, CheckCheck } from "lucide-react";
import { useStore } from "../../context/StoreContext";
import { EmptyState, PageHeader } from "../common/ui";

const icons = { order: ShoppingBag, reservation: CalendarCheck, payment: CreditCard, cancel: XCircle, customer: UserPlus, review: Star };

const Notifications = () => {
  const { notifications, setNotifications } = useStore();
  const unread = notifications.filter((n) => !n.read).length;
  return (
    <div className="space-y-5">
      <PageHeader eyebrow="Alerts" title="Notification Center" description={`${unread} unread · stay on top of orders, payments & bookings`}
        actions={<button onClick={() => setNotifications((p) => p.map((n) => ({ ...n, read: true })))} className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white"><CheckCheck className="h-4 w-4" /> Mark all read</button>} />
      {notifications.length === 0 ? <EmptyState icon={BellRing} title="All caught up" message="New orders, reservations and payments will appear here." /> : (
        <div className="space-y-3">{notifications.map((n) => {
          const Icon = icons[n.type] || BellRing;
          return (
            <article key={n.id} className={`flex items-start gap-4 rounded-2xl border bg-white p-4 shadow-sm ${n.read ? "border-slate-100" : "border-amber-200 bg-amber-50/40"}`}>
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${n.read ? "bg-slate-100 text-slate-500" : "bg-amber-500 text-white"}`}><Icon className="h-5 w-5" /></span>
              <div className="min-w-0 flex-1"><div className="flex items-center gap-2"><p className="font-bold text-slate-900">{n.title}</p>{!n.read && <span className="h-2 w-2 rounded-full bg-amber-500" />}</div>
                <p className="mt-0.5 text-sm text-slate-500">{n.message}</p><p className="mt-1 text-xs text-slate-400">{n.time}</p></div>
              {!n.read && <button onClick={() => setNotifications((p) => p.map((x) => (x.id === n.id ? { ...x, read: true } : x)))} className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-amber-700 shadow-sm">Mark read</button>}
            </article>);
        })}</div>)}
    </div>
  );
};
export default Notifications;
