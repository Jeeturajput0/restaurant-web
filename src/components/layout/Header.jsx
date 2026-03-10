import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { FaBars, FaSearch, FaShoppingCart, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useCart } from "../../context/CartContext";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { scrollY } = useScroll();
  const { itemCount, setIsCartOpen } = useCart();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const btn = [
    { id: 1, name: "Login", path: "/login" },
    { id: 2, name: "Sign Up", path: "/signup" },
  ];

  const data = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Gallery", path: "/gallery" },
    { id: 3, name: "Restaurants", path: "/restaurants" },
    { id: 4, name: "Menu", path: "/menubar" },
    { id: 5, name: "Offers", path: "/offers" },
    { id: 6, name: "Contact", path: "/contact" },
  ];

  const handleNavigate = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        height: isScrolled ? "70px" : "90px",
        backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.85)" : "rgba(0, 0, 0, 0.7)",
      }}
      className="fixed top-0 z-[100] w-full border-b border-white/10 px-3 shadow-2xl backdrop-blur-lg transition-all duration-300 sm:px-6 lg:px-10"
    >
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-3">
        <motion.div
          onClick={() => handleNavigate("/")}
          whileHover={{ scale: 1.05 }}
          className="flex cursor-pointer items-center gap-2 sm:gap-3"
        >
          <img src={logo} alt="Logo" className="h-9 w-auto sm:h-10 md:h-12" />
          <h1 className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-2xl font-black italic text-transparent sm:text-3xl">
            EatMore
          </h1>
        </motion.div>

        <ul className="hidden items-center gap-8 text-sm font-bold uppercase tracking-widest text-white lg:flex">
          {data.map((item) => (
            <li key={item.id} className="group relative">
              <Link
                to={item.path}
                className={`transition-colors duration-300 ${
                  pathname === item.path ? "text-yellow-400" : "hover:text-yellow-400"
                }`}
              >
                {item.name}
              </Link>
              <motion.div
                className="absolute -bottom-1 left-0 h-[2px] bg-yellow-400"
                initial={{ width: 0 }}
                animate={{ width: pathname === item.path ? "100%" : 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </li>
          ))}
        </ul>

        <div className="relative hidden md:block group">
          <motion.input
            whileFocus={{ width: 320 }}
            type="text"
            placeholder="Search food..."
            className="h-10 w-56 rounded-full border border-white/20 bg-white/10 pl-4 pr-10 text-white transition-all duration-300 focus:border-yellow-400 focus:bg-white/20 focus:outline-none lg:w-64"
          />
          <FaSearch className="absolute right-4 top-3 text-gray-400 transition-colors group-focus-within:text-yellow-400" />
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-white transition hover:border-yellow-400 hover:text-yellow-400"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400 text-black">
              <FaShoppingCart />
            </span>
            <span>Cart</span>
            {itemCount > 0 && (
              <span className="rounded-full bg-orange-500 px-2 py-0.5 text-xs font-black text-black">
                {itemCount}
              </span>
            )}
          </button>

          {btn.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigate(item.path)}
              className={`rounded-full px-5 py-2 text-sm font-bold italic shadow-lg transition-all xl:px-6 ${
                item.name === "Login"
                  ? "border border-yellow-400 bg-transparent text-yellow-400 hover:bg-yellow-400 hover:text-black"
                  : "bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:shadow-yellow-500/20"
              }`}
            >
              {item.name}
            </motion.button>
          ))}
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white transition hover:border-yellow-400 hover:text-yellow-400"
          >
            <FaShoppingCart className="text-base" />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-black text-black">
                {itemCount}
              </span>
            )}
          </button>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white transition hover:border-yellow-400 hover:text-yellow-400"
          >
            {isMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          y: isMenuOpen ? 0 : -12,
          pointerEvents: isMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.22 }}
        className="absolute left-3 right-3 top-[calc(100%+0.75rem)] rounded-3xl border border-white/10 bg-black/95 p-4 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:left-6 sm:right-6 lg:hidden"
      >
        <div className="relative mb-4 group md:hidden">
          <input
            type="text"
            placeholder="Search food..."
            className="h-11 w-full rounded-full border border-white/15 bg-white/8 pl-4 pr-10 text-sm text-white transition focus:border-yellow-400 focus:outline-none"
          />
          <FaSearch className="absolute right-4 top-3.5 text-gray-400 transition-colors group-focus-within:text-yellow-400" />
        </div>

        <ul className="flex flex-col gap-2">
          {data.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] transition ${
                  pathname === item.path
                    ? "bg-yellow-400 text-black"
                    : "bg-white/5 text-white hover:bg-white/10 hover:text-yellow-400"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => {
            setIsMenuOpen(false);
            setIsCartOpen(true);
          }}
          className="mt-4 flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:border-yellow-400 hover:text-yellow-400"
        >
          <span>Open Cart</span>
          <span className="rounded-full bg-yellow-400 px-2 py-0.5 text-xs text-black">
            {itemCount}
          </span>
        </button>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {btn.map((item) => (
            <motion.button
              key={item.id}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleNavigate(item.path)}
              className={`rounded-2xl px-4 py-3 text-sm font-bold italic transition-all ${
                item.name === "Login"
                  ? "border border-yellow-400 bg-transparent text-yellow-400"
                  : "bg-gradient-to-r from-yellow-400 to-orange-500 text-black"
              }`}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
