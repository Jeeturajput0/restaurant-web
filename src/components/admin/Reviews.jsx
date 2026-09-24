import React, { useState } from "react";
import { Star, Eye, EyeOff, Trash2, Reply, Send } from "lucide-react";
import { useStore } from "../../context/StoreContext";
import Modal from "../common/Modal";
import ConfirmDialog from "../common/ConfirmDialog";
import { PageHeader } from "../common/ui";

const Reviews = () => {
  const { reviews, setReviews, toast } = useStore();
  const [selected, setSelected] = useState(null);
  const [del, setDel] = useState(null);
  const [reply, setReply] = useState("");
  const avg = (reviews.reduce((s, r) => s + r.rating, 0) / Math.max(1, reviews.length)).toFixed(1);

  return (
    <div className="space-y-5">
      <PageHeader eyebrow="Feedback" title="Reviews Management" description={`Average rating ${avg}/5 · ${reviews.length} reviews`} />
      <div className="grid gap-4 rounded-2xl border border-amber-100/70 bg-white p-5 shadow-sm sm:grid-cols-3">
        <div className="text-center"><p className="text-4xl font-bold">{avg}</p><p className="mt-1 flex justify-center gap-0.5">{[1,2,3,4,5].map((i) => <Star key={i} className={`h-4 w-4 ${i <= Math.round(avg) ? "fill-amber-400 text-amber-400" : "text-slate-300"}`} />)}</p><p className="mt-1 text-xs text-slate-400">Average rating</p></div>
        {[5,4,3].map((s) => {
          const n = reviews.filter((r) => r.rating === s || (s === 3 && r.rating <= 3)).length;
          return <div key={s} className="flex items-center gap-2"><span className="text-sm font-bold">{s}★</span><div className="h-2 flex-1 rounded-full bg-slate-100"><div className="h-full rounded-full bg-amber-500" style={{ width: `${(n / reviews.length) * 100}%` }} /></div><span className="text-xs text-slate-400">{n}</span></div>;
        })}
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {reviews.map((r) => (
          <article key={r.id} className={`rounded-2xl border bg-white p-5 shadow-md ${r.visible ? "border-amber-100/70" : "border-slate-200 opacity-70"}`}>
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-700">{r.customer[0]}</span>
                <div><p className="font-bold text-slate-900">{r.customer}</p><p className="text-xs text-slate-400">{r.food} · {r.date}</p></div></div>
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-bold"><Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />{r.rating}</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">“{r.text}”</p>
            {r.reply && <p className="mt-2 rounded-xl bg-emerald-50 p-3 text-xs text-emerald-800"><b>Your reply:</b> {r.reply}</p>}
            <div className="mt-3 flex flex-wrap gap-1.5">
              <button onClick={() => { setSelected(r); setReply(r.reply || ""); }} className="inline-flex items-center gap-1 rounded-lg bg-amber-50 px-2.5 py-1.5 text-xs font-semibold text-amber-700"><Reply className="h-3.5 w-3.5" /> Reply</button>
              <button onClick={() => setReviews((p) => p.map((x) => (x.id === r.id ? { ...x, visible: !x.visible } : x)))} className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-semibold">{r.visible ? <><EyeOff className="h-3.5 w-3.5" /> Hide</> : <><Eye className="h-3.5 w-3.5" /> Show</>}</button>
              <button onClick={() => setDel(r.id)} className="inline-flex items-center gap-1 rounded-lg bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-600"><Trash2 className="h-3.5 w-3.5" /> Delete</button>
            </div>
          </article>))}
      </div>
      <Modal open={!!selected} onClose={() => setSelected(null)} title={`Reply to ${selected?.customer}`}>
        <div className="space-y-3">
          <p className="rounded-xl bg-slate-50 p-3 text-sm text-slate-600">“{selected?.text}”</p>
          <textarea value={reply} onChange={(e) => setReply(e.target.value)} rows="4" className="theme-input" placeholder="Thank you for dining with us..." />
          <button onClick={() => { setReviews((p) => p.map((x) => (x.id === selected.id ? { ...x, reply } : x))); toast("Reply posted"); setSelected(null); }} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 py-2.5 text-sm font-semibold text-white"><Send className="h-4 w-4" /> Post reply</button>
        </div>
      </Modal>
      <ConfirmDialog open={!!del} onClose={() => setDel(null)} title="Delete review?" message="This review will be permanently removed." onConfirm={() => setReviews((p) => p.filter((r) => r.id !== del))} />
    </div>
  );
};
export default Reviews;
