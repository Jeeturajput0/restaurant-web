import React from "react";

const palette = {
  New: "bg-sky-100 text-sky-700", Confirmed: "bg-indigo-100 text-indigo-700",
  Preparing: "bg-amber-100 text-amber-700", Ready: "bg-teal-100 text-teal-700",
  "Out for Delivery": "bg-violet-100 text-violet-700", Delivered: "bg-emerald-100 text-emerald-700",
  Completed: "bg-green-100 text-green-700", Cancelled: "bg-red-100 text-red-600",
  Paid: "bg-emerald-100 text-emerald-700", Pending: "bg-amber-100 text-amber-700",
  Failed: "bg-red-100 text-red-600", Refunded: "bg-slate-200 text-slate-600",
  Active: "bg-emerald-100 text-emerald-700", Inactive: "bg-slate-200 text-slate-500",
  Blocked: "bg-red-100 text-red-600", Available: "bg-emerald-100 text-emerald-700",
  Reserved: "bg-amber-100 text-amber-700", Occupied: "bg-red-100 text-red-600",
  Cleaning: "bg-sky-100 text-sky-700", "Dine In": "bg-violet-100 text-violet-700",
  Takeaway: "bg-amber-100 text-amber-700", Delivery: "bg-sky-100 text-sky-700",
};

const StatusBadge = ({ status }) => (
  <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${palette[status] || "bg-amber-50 text-amber-700"}`}>
    <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current" />
    {status}
  </span>
);
export default StatusBadge;
