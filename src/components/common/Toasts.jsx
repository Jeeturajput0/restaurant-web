import React from "react";
import { CheckCircle2, Info, AlertCircle, X } from "lucide-react";
import { useStore } from "../../context/StoreContext";

const Toasts = () => {
  const { toasts, dismissToast } = useStore();
  return (
    <div className="fixed bottom-4 right-4 z-[100] flex w-[calc(100%-2rem)] max-w-sm flex-col gap-2">
      {toasts.map((t) => (
        <div key={t.id} className="flex items-start gap-3 rounded-2xl border border-amber-100 bg-white/95 p-4 shadow-xl backdrop-blur">
          {t.type === "info" ? <Info className="h-5 w-5 text-sky-500" /> : t.type === "error" ? <AlertCircle className="h-5 w-5 text-red-500" /> : <CheckCircle2 className="h-5 w-5 text-emerald-500" />}
          <p className="flex-1 text-sm font-medium text-slate-700">{t.message}</p>
          <button onClick={() => dismissToast(t.id)} aria-label="Dismiss"><X className="h-4 w-4 text-slate-400" /></button>
        </div>
      ))}
    </div>
  );
};
export default Toasts;
