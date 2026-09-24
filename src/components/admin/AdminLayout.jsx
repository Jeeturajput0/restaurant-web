import React, { useState } from "react";
import { NavLink, Outlet, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard, ShoppingBag, UtensilsCrossed, Tags, Users, Armchair,
  CalendarCheck, CreditCard, TrendingUp, TicketPercent, Star, Bell,
  Settings, UserRound, LogOut, Menu, X, ChevronLeft, Store,
} from "lucide-react";
import { useStore } from "../../context/StoreContext";

export const adminNav = [
  { label: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Orders", path: "/admin/orders", icon: ShoppingBag },
  { label: "Products", path: "/admin/products", icon: UtensilsCrossed },
  { label: "Categories", path: "/admin/categories", icon: Tags },
  { label: "Customers", path: "/admin/customers", icon: Users },
  { label: "Tables", path: "/admin/tables", icon: Armchair },
  { label: "Reservations", path: "/admin/reservations", icon: CalendarCheck },
  { label: "Payments", path: "/admin/payments", icon: CreditCard },
  { label: "Revenue", path: "/admin/revenue", icon: TrendingUp },
  { label: "Offers & Coupons", path: "/admin/offers", icon: TicketPercent },
  { label: "Reviews", path: "/admin/reviews", icon: Star },
  { label: "Notifications", path: "/admin/notifications", icon: Bell },
  { label: "Settings", path: "/admin/settings", icon: Settings },
  { label: "Admin Profile", path: "/admin/profile", icon: UserRound },
];

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { notifications } = useStore();
  const unread = notifications.filter((n) => !n.read).length;
  const navigate = useNavigate();

  const sidebar = (isMobile = false) => (
    <div className={`flex h-full flex-col bg-slate-950 text-slate-300 ${collapsed && !isMobile ? "w-[76px]" : "w-[264px]"} transition-all duration-300`}>
      <div className="flex items-center justify-between gap-2 px-4 py-5">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-white"><Store className="h-5 w-5" /></span>
          {(!collapsed || isMobile) && <span className="text-lg font-bold text-white">Bites<span className="text-amber-400">Admin</span></span>}
        </Link>
        {!isMobile && (
          <button onClick={() => setCollapsed((c) => !c)} className="rounded-lg bg-white/10 p-1.5 text-slate-300 hover:bg-white/20" aria-label="Toggle sidebar">
            <ChevronLeft className={`h-4 w-4 transition ${collapsed ? "rotate-180" : ""}`} />
          </button>
        )}
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto px-3 pb-4">
        {adminNav.map((item) => (
          <NavLink key={item.path} to={item.path} onClick={() => setMobileOpen(false)}
            className={({ isActive }) => `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${isActive ? "bg-amber-500 text-white shadow-lg shadow-amber-500/25" : "text-slate-400 hover:bg-white/10 hover:text-white"}`}>
            <item.icon className="h-[18px] w-[18px] shrink-0" />
            {(!collapsed || isMobile) && <span className="truncate">{item.label}</span>}
            {(!collapsed || isMobile) && item.label === "Notifications" && unread > 0 && (
              <span className="ml-auto rounded-full bg-red-500 px-2 py-0.5 text-[11px] font-bold text-white">{unread}</span>
            )}
          </NavLink>
        ))}
        <button onClick={() => { localStorage.removeItem("bites_admin_token"); navigate("/"); }}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-400 transition hover:bg-red-500/15 hover:text-red-400">
          <LogOut className="h-[18px] w-[18px] shrink-0" />
          {(!collapsed || isMobile) && <span>Logout</span>}
        </button>
      </nav>
      {(!collapsed || isMobile) && (
        <div className="m-3 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 p-4 text-white">
          <p className="text-sm font-bold">Need help?</p>
          <p className="mt-1 text-xs text-white/80">Check the restaurant setup guide in Settings.</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="flex min-h-screen bg-[#faf7f1]">
      <aside className="sticky top-0 hidden h-screen shrink-0 overflow-hidden rounded-r-3xl lg:block">{sidebar()}</aside>
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileOpen(false)} className="fixed inset-0 z-[60] bg-slate-950/60 lg:hidden" />
            <motion.aside initial={{ x: -300 }} animate={{ x: 0 }} exit={{ x: -300 }} className="fixed inset-y-0 left-0 z-[70] lg:hidden">{sidebar(true)}</motion.aside>
          </>
        )}
      </AnimatePresence>
      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-40 flex items-center gap-3 border-b border-amber-100/70 bg-white/85 px-4 py-3 backdrop-blur sm:px-6">
          <button onClick={() => setMobileOpen(true)} className="rounded-xl border border-amber-200 bg-white p-2.5 lg:hidden" aria-label="Open menu"><Menu className="h-5 w-5" /></button>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-900">Restaurant Management</p>
            <p className="hidden text-xs text-slate-400 sm:block">Monitor orders, revenue & operations in real time</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Link to="/admin/notifications" className="relative rounded-xl border border-amber-200 bg-white p-2.5" aria-label="Notifications">
              <Bell className="h-5 w-5 text-slate-600" />
              {unread > 0 && <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">{unread}</span>}
            </Link>
            <Link to="/" className="hidden rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white sm:block">View Store</Link>
            <Link to="/admin/profile" className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-700">A</Link>
          </div>
        </header>
        <main className="mx-auto w-full max-w-7xl space-y-6 px-4 py-6 sm:px-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default AdminLayout;
