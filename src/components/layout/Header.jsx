import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { LayoutDashboard, LogIn, Menu, Moon, Search, ShoppingBag, Sun, User, X } from "lucide-react";
import { brandAssets } from "../../data/menuData";
import { useCart } from "../../context/CartContext";
import { useTheme } from "../../context/ThemeContext";
import Button from "../ui/Button";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Menu", path: "/menu" },
  { label: "Orders", path: "/orders" },
  { label: "Wishlist", path: "/wishlist" },
  { label: "Offers", path: "/offers" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const { itemCount, setIsCartOpen } = useCart();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <div className="theme-container">
        <div className="flex items-center justify-between gap-4 rounded-[1.75rem] border border-white/70 bg-white/85 px-4 py-3 shadow-lg backdrop-blur sm:px-6">
          <Link to="/" className="flex items-center gap-3">
            <img src={brandAssets.logo} alt="Bites" className="h-11 w-11 rounded-full object-cover" />
            <div>
              <p className="text-lg font-semibold text-slate-950">Bites</p>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Restaurant UI</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-2 text-sm font-medium transition ${
                    isActive ? "bg-amber-50 text-amber-600" : "text-slate-600 hover:bg-amber-50/70 hover:text-slate-950"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              className="btn-ghost h-11 w-11 rounded-full border border-amber-100 bg-amber-50/60 p-0"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              className="btn-ghost h-11 w-11 rounded-full border border-amber-100 bg-white p-0"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <Link
              to="/profile"
              className="btn-ghost h-11 w-11 rounded-full border border-amber-100 bg-white p-0"
              aria-label="Profile"
            >
              <User className="h-4 w-4" />
            </Link>

            <Link to="/admin/dashboard" className="btn-ghost h-11 w-11 rounded-full border border-amber-100 bg-white p-0" aria-label="Admin dashboard">
              <LayoutDashboard className="h-4 w-4" />
            </Link>

            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative inline-flex h-11 items-center gap-3 rounded-xl border border-amber-100 bg-white px-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <ShoppingBag className="h-4 w-4 text-amber-500" />
              <span className="text-sm font-medium text-slate-700">Cart</span>
              {itemCount > 0 ? (
                <span className="rounded-full bg-amber-500 px-2 py-0.5 text-xs font-semibold text-white">
                  {itemCount}
                </span>
              ) : null}
            </button>

            <Button as={Link} to="/login" variant="secondary" className="gap-2">
              <LogIn className="h-4 w-4" />
              Login
            </Button>

           
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-amber-100 bg-white text-slate-700 shadow-sm lg:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen ? (
          <div className="mt-3 rounded-[1.5rem] border border-amber-100 bg-white/95 p-4 shadow-lg backdrop-blur lg:hidden">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm font-medium transition ${
                      isActive ? "bg-amber-50 text-amber-600" : "text-slate-700 hover:bg-amber-50"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <Button variant="secondary" as={Link} to="/profile">
                Profile
              </Button>
              <Button type="button" onClick={() => setIsCartOpen(true)} className="justify-center">
                Cart {itemCount > 0 ? `(${itemCount})` : ""}
              </Button>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3">
              <Button variant="secondary" as={Link} to="/login" className="gap-2">
                <LogIn className="h-4 w-4" />
                Login
              </Button>
              
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-amber-100 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-amber-300"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
