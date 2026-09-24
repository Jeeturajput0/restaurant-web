import React from "react";
import Modal from "./Modal";
import { AlertTriangle } from "lucide-react";

const ConfirmDialog = ({ open, onClose, onConfirm, title = "Are you sure?", message = "This action cannot be undone.", confirmLabel = "Confirm" }) => (
  <Modal open={open} onClose={onClose} title={title}>
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500"><AlertTriangle className="h-5 w-5" /></div>
      <p className="text-sm leading-6 text-slate-600">{message}</p>
    </div>
    <div className="mt-6 flex justify-end gap-3">
      <button onClick={onClose} className="rounded-xl border border-amber-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700">Cancel</button>
      <button onClick={() => { onConfirm(); onClose(); }} className="rounded-xl bg-red-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-600">{confirmLabel}</button>
    </div>
  </Modal>
);
export default ConfirmDialog;
