import React from "react";
import { Search } from "lucide-react";

export const SearchBar = ({ value, onChange, placeholder = "Search..." }) => (
  <div className="relative min-w-0 flex-1 sm:max-w-xs">
    <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
    <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
      className="w-full rounded-xl border border-amber-100 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-200" />
  </div>
);

export const FilterDropdown = ({ value, onChange, options, label }) => (
  <select value={value} onChange={(e) => onChange(e.target.value)}
    className="rounded-xl border border-amber-100 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 outline-none focus:border-amber-400" aria-label={label}>
    {options.map((o) => <option key={o} value={o}>{o === "" || o === "All" ? (label ? `All ${label}` : "All") : o}</option>)}
  </select>
);

export const Pagination = ({ page, totalPages, onChange }) => {
  if (totalPages <= 1) return null;
  return (
    <div className="flex items-center justify-center gap-2 pt-2">
      <button disabled={page === 1} onClick={() => onChange(page - 1)} className="rounded-lg border border-amber-200 bg-white px-3 py-1.5 text-sm disabled:opacity-40">Prev</button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).slice(0, 7).map((p) => (
        <button key={p} onClick={() => onChange(p)} className={`h-8 w-8 rounded-lg text-sm font-semibold ${p === page ? "bg-amber-500 text-white" : "border border-amber-200 bg-white text-slate-600"}`}>{p}</button>
      ))}
      <button disabled={page === totalPages} onClick={() => onChange(page + 1)} className="rounded-lg border border-amber-200 bg-white px-3 py-1.5 text-sm disabled:opacity-40">Next</button>
    </div>
  );
};

export const EmptyState = ({ icon: Icon, title, message, action }) => (
  <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-amber-200 bg-amber-50/40 px-6 py-14 text-center">
    {Icon ? <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-amber-500 shadow-sm"><Icon className="h-6 w-6" /></div> : null}
    <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
    <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">{message}</p>
    {action ? <div className="mt-5">{action}</div> : null}
  </div>
);

export const PageHeader = ({ eyebrow, title, description, actions }) => (
  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
    <div>
      {eyebrow ? <p className="theme-pill">{eyebrow}</p> : null}
      <h1 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h1>
      {description ? <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">{description}</p> : null}
    </div>
    {actions ? <div className="flex flex-wrap gap-2">{actions}</div> : null}
  </div>
);
