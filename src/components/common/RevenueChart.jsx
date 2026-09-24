import React from "react";
import { formatCurrency } from "../../lib/menu";

// Lightweight SVG area + bar chart, no extra dependency
const RevenueChart = ({ data, mode = "revenue" }) => {
  const max = Math.max(...data.map((d) => (mode === "orders" ? d.orders : d.revenue)), 1);
  const W = 640, H = 220, P = 32;
  const stepX = (W - P * 2) / Math.max(1, data.length - 1);
  const y = (v) => H - P - (v / max) * (H - P * 2);
  const val = (d) => (mode === "orders" ? d.orders : d.revenue);
  const pts = data.map((d, i) => `${P + i * stepX},${y(val(d))}`).join(" ");
  const area = `${P},${H - P} ${pts} ${P + (data.length - 1) * stepX},${H - P}`;
  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox={`0 0 ${W} ${H}`} className="min-w-[520px] w-full">
        {[0.25, 0.5, 0.75, 1].map((f) => (
          <line key={f} x1={P} x2={W - P} y1={H - P - f * (H - P * 2)} y2={H - P - f * (H - P * 2)} stroke="#fde68a" strokeOpacity="0.5" strokeDasharray="4 4" />
        ))}
        <polygon points={area} fill={mode === "orders" ? "rgba(139,92,246,0.15)" : "rgba(245,158,11,0.18)"} />
        <polyline points={pts} fill="none" stroke={mode === "orders" ? "#8b5cf6" : "#f59e0b"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {data.map((d, i) => (
          <g key={i}>
            <circle cx={P + i * stepX} cy={y(val(d))} r="4.5" fill="#fff" stroke={mode === "orders" ? "#8b5cf6" : "#f59e0b"} strokeWidth="3" />
            <text x={P + i * stepX} y={H - 8} textAnchor="middle" fontSize="11" fill="#94a3b8" fontWeight="600">{d.label}</text>
          </g>
        ))}
      </svg>
      <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 px-1">
        {data.map((d, i) => (
          <span key={i} className="text-xs text-slate-500">{d.label}: <b className="text-slate-800">{mode === "orders" ? `${d.orders} orders` : formatCurrency(d.revenue)}</b></span>
        ))}
      </div>
    </div>
  );
};

export const RevenueBars = ({ data }) => {
  const max = Math.max(...data.map((d) => d.revenue), 1);
  return (
    <div className="flex items-end gap-2 sm:gap-3" style={{ height: 180 }}>
      {data.map((d, i) => (
        <div key={i} className="flex flex-1 flex-col items-center gap-2">
          <div className="flex w-full flex-1 items-end gap-1">
            <div className="flex-1 rounded-t-lg bg-amber-400/90 transition hover:bg-amber-500" style={{ height: `${Math.max(6, (d.revenue / max) * 140)}px` }} title={`Revenue ${d.revenue}`} />
            <div className="flex-1 rounded-t-lg bg-violet-400/90 transition hover:bg-violet-500" style={{ height: `${Math.max(6, (d.orders / Math.max(...data.map((x) => x.orders), 1)) * 140)}px` }} title={`${d.orders} orders`} />
          </div>
          <span className="text-[11px] font-semibold text-slate-400">{d.label}</span>
        </div>
      ))}
    </div>
  );
};

export default RevenueChart;
