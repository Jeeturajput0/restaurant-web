import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  seedCategories, seedCoupons, seedCustomers, seedFoods, seedNotifications,
  seedOrders, seedPayments, seedReservations, seedReviews, seedSettings, seedTables,
} from "../data/adminSeed";

const StoreContext = createContext(null);
const LS_KEY = "bites_store_v1";

const load = (key, fallback) => {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return parsed[key] ?? fallback;
  } catch { return fallback; }
};

export const StoreProvider = ({ children }) => {
  const [foods, setFoods] = useState(() => load("foods", seedFoods));
  const [categories, setCategories] = useState(() => load("categories", seedCategories));
  const [orders, setOrders] = useState(() => load("orders", seedOrders));
  const [customers] = useState(seedCustomers);
  const [payments, setPayments] = useState(() => load("payments", seedPayments));
  const [tables, setTables] = useState(() => load("tables", seedTables));
  const [reservations, setReservations] = useState(() => load("reservations", seedReservations));
  const [coupons, setCoupons] = useState(() => load("coupons", seedCoupons));
  const [reviews, setReviews] = useState(() => load("reviews", seedReviews));
  const [notifications, setNotifications] = useState(() => load("notifications", seedNotifications));
  const [settings, setSettings] = useState(() => load("settings", seedSettings));
  const [wishlist, setWishlist] = useState(() => load("wishlist", []));
  const [myReservations, setMyReservations] = useState(() => load("myReservations", []));
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify({ foods, categories, orders, payments, tables, reservations, coupons, reviews, notifications, settings, wishlist, myReservations }));
    } catch { /* ignore */ }
  }, [foods, categories, orders, payments, tables, reservations, coupons, reviews, notifications, settings, wishlist, myReservations]);

  const toast = (message, type = "success") => {
    const id = Date.now() + Math.random();
    setToasts((p) => [...p, { id, message, type }]);
    setTimeout(() => setToasts((p) => p.filter((t) => t.id !== id)), 3200);
  };
  const dismissToast = (id) => setToasts((p) => p.filter((t) => t.id !== id));

  const pushNotification = (n) =>
    setNotifications((p) => [{ id: Date.now(), time: "Just now", read: false, ...n }, ...p]);

  // ---- foods ----
  const saveFood = (food) => {
    if (food.id) setFoods((p) => p.map((f) => (f.id === food.id ? { ...f, ...food } : f)));
    else setFoods((p) => [{ ...food, id: Date.now(), slug: food.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") }, ...p]);
    toast(food.id ? "Dish updated" : "Dish added");
  };
  const deleteFood = (id) => { setFoods((p) => p.filter((f) => f.id !== id)); toast("Dish deleted", "info"); };
  const toggleFood = (id, field) => setFoods((p) => p.map((f) => (f.id === id ? { ...f, [field]: !f[field] } : f)));

  // ---- orders ----
  const updateOrderStatus = (id, status) => {
    setOrders((p) => p.map((o) => (o.id === id ? { ...o, status } : o)));
    toast(`Order ${id} → ${status}`);
  };
  const cancelOrder = (id) => updateOrderStatus(id, "Cancelled");
  const placeOrder = (order) => {
    const id = `ORD-${Math.floor(7800 + Math.random() * 500)}`;
    const full = { id, date: new Date().toISOString().slice(0, 16).replace("T", " "), status: "New", ...order };
    setOrders((p) => [full, ...p]);
    setPayments((p) => [{ id: `TXN-${Math.floor(90000 + Math.random() * 9999)}`, orderId: id, customer: order.customer, amount: order.amount, method: order.paymentMethod, date: full.date, status: order.paymentStatus }, ...p]);
    pushNotification({ type: "order", title: "New order received", message: `${id} from ${order.customer} · ₹${order.amount}` });
    return id;
  };

  // ---- tables / reservations / coupons / reviews ----
  const saveTable = (t) => {
    if (tables.find((x) => x.id === t.id)) setTables((p) => p.map((x) => (x.id === t.id ? t : x)));
    else setTables((p) => [...p, t]);
    toast("Table saved");
  };
  const deleteTable = (id) => { setTables((p) => p.filter((t) => t.id !== id)); toast("Table deleted", "info"); };
  const saveReservation = (r) => {
    if (r.id && reservations.find((x) => x.id === r.id)) setReservations((p) => p.map((x) => (x.id === r.id ? r : x)));
    else setReservations((p) => [{ ...r, id: r.id || `RES-${Math.floor(200 + Math.random() * 800)}` }, ...p]);
    toast("Reservation saved");
  };
  const saveCoupon = (c) => {
    if (c.id && coupons.find((x) => x.id === c.id)) setCoupons((p) => p.map((x) => (x.id === c.id ? c : x)));
    else setCoupons((p) => [{ ...c, id: Date.now() }, ...p]);
    toast("Coupon saved");
  };
  const deleteCoupon = (id) => { setCoupons((p) => p.filter((c) => c.id !== id)); toast("Coupon deleted", "info"); };

  const toggleWishlist = (foodId) => {
    setWishlist((p) => (p.includes(foodId) ? p.filter((x) => x !== foodId) : [...p, foodId]));
  };

  const stats = useMemo(() => {
    const revenue = orders.filter((o) => o.status !== "Cancelled").reduce((s, o) => s + o.amount, 0);
    const todayOrders = orders.filter((o) => String(o.date).startsWith("2026-09-24"));
    const todayRevenue = todayOrders.filter((o) => o.status !== "Cancelled").reduce((s, o) => s + o.amount, 0);
    return {
      totalRevenue: revenue + 1180000,
      todayRevenue: todayRevenue + 31200,
      totalOrders: orders.length + 2140,
      todayOrders: todayOrders.length + 54,
      pending: orders.filter((o) => ["New", "Confirmed", "Preparing"].includes(o.status)).length,
      completed: orders.filter((o) => ["Delivered", "Completed"].includes(o.status)).length + 1980,
      customers: 1248,
      reservations: reservations.filter((r) => r.status === "Confirmed" || r.status === "Pending").length + 18,
      avgOrder: Math.round(revenue / Math.max(1, orders.length)) + 320,
    };
  }, [orders, reservations]);

  const value = {
    foods, categories, orders, customers, payments, tables, reservations, coupons, reviews, notifications,
    settings, wishlist, myReservations, stats, toasts,
    setCategories, setReviews, setNotifications, setSettings, setMyReservations,
    saveFood, deleteFood, toggleFood, updateOrderStatus, cancelOrder, placeOrder,
    saveTable, deleteTable, saveReservation, saveCoupon, deleteCoupon,
    toggleWishlist, toast, dismissToast, pushNotification,
  };
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

export const useStore = () => {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
};
