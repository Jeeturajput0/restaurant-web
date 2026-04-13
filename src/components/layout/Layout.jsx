import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";
import { CartProvider } from "../../context/CartContext";

const Layout = () => {
  return (
    <CartProvider>
      <div className="page-shell relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[30rem] bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.14),transparent_30%)]" />
        <div className="pointer-events-none absolute left-0 top-64 h-64 w-64 rounded-full bg-amber-100/70 blur-3xl" />
        <div className="pointer-events-none absolute bottom-40 right-0 h-72 w-72 rounded-full bg-orange-100/70 blur-3xl" />

        <Header />
        <CartDrawer />

        <main className="relative z-10 pt-24 sm:pt-28">
          <Outlet />
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
};

export default Layout;
