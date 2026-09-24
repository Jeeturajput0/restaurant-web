import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const Modal = ({ open, onClose, title, children, wide }) => (
  <AnimatePresence>
    {open ? (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[80] flex items-end justify-center bg-slate-950/50 p-3 backdrop-blur-sm sm:items-center sm:p-6" onClick={onClose}>
        <motion.div initial={{ y: 40, opacity: 0, scale: 0.98 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 30, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className={`max-h-[92vh] w-full overflow-y-auto rounded-2xl bg-white shadow-2xl ${wide ? "max-w-3xl" : "max-w-lg"}`}>
          <div className="sticky top-0 flex items-center justify-between gap-4 border-b border-amber-100 bg-white/95 px-5 py-4 backdrop-blur sm:px-6">
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <button onClick={onClose} className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-red-50 hover:text-red-500" aria-label="Close"><X className="h-4 w-4" /></button>
          </div>
          <div className="px-5 py-5 sm:px-6">{children}</div>
        </motion.div>
      </motion.div>
    ) : null}
  </AnimatePresence>
);
export default Modal;
