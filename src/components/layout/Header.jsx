import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { scrollY } = useScroll();
  
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to shrink the header
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const btn = [
    { id: 1, name: "Login", path: "/login" },
    { id: 2, name: "Sign Up", path: "/signup" },
  ];

  const data = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Gallery", path: "/gallery" },
    { id: 3, name: "Restaurants", path: "/restaurants" },
    { id: 4, name: "Menu", path: "/menubar" }, // Fixed casing for display
    { id: 5, name: "Offers", path: "/offers" },
    { id: 6, name: "Contact", path: "/contact" },
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        height: isScrolled ? "70px" : "90px",
        backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.85)" : "rgba(0, 0, 0, 0.7)",
      }}
      className="w-full flex items-center justify-between px-10 fixed top-0 z-[100] backdrop-blur-lg border-b border-white/10 shadow-2xl transition-all duration-300"
    >
      {/* Logo Section */}
      <motion.div 
        onClick={() => navigate("/")}
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-3 cursor-pointer"
      >
        <img src={logo} alt="Logo" className="h-10 md:h-12 w-auto" />
        <h1 className="text-3xl font-black italic bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          EatMore
        </h1>
      </motion.div>

      {/* Navigation Links */}
      <ul className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-white">
        {data.map((item) => (
          <li key={item.id} className="relative group">
            <Link
              to={item.path}
              className={`transition-colors duration-300 ${
                pathname === item.path ? "text-yellow-400" : "hover:text-yellow-400"
              }`}
            >
              {item.name}
            </Link>
            {/* Animated Underline */}
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

      {/* Search Bar */}
      <div className="relative group hidden md:block">
        <motion.input
          whileFocus={{ width: 320 }}
          type="text"
          placeholder="Search food..."
          className="h-10 w-64 pl-4 pr-10 rounded-full bg-white/10 text-white border border-white/20 focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all duration-300"
        />
        <FaSearch className="absolute right-4 top-3 text-gray-400 group-focus-within:text-yellow-400 transition-colors" />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        {btn.map((item) => (
          <motion.button
            key={item.id}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(item.path)}
            className={`px-6 py-2 rounded-full text-sm font-bold italic transition-all shadow-lg ${
              item.name === "Login" 
                ? "bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                : "bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:shadow-yellow-500/20"
            }`}
          >
            {item.name}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default Header;