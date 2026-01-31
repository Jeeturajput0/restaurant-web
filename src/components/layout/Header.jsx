import React from "react";
import logo from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate=useNavigate()
  const btn = [
    { id: 1, name: "Login" ,path:"/login"},
    { id: 2, name: "Sign Up",path:"/signup" },
  ];

  const data = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Gallery", path: "/gallery" },
    { id: 3, name: "Restaurants", path: "/restaurants" },
    { id: 4, name: "menubar", path: "/menubar" },
    { id: 5, name: "Offers", path: "/offers" },
    { id: 6, name: "Contact", path: "/contact" },
  ];

  return (
    <div
      className="w-full flex items-center justify-between px-8 py-4
      bg-black/70 backdrop-blur-md shadow-lg fixed top-0 z-60  "
    >
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="h-12 w-auto" />
        <h1 className="text-3xl font-extrabold italic text-yellow-400">
          EatMore
        </h1>
      </div>
      <ul className="flex items-center gap-8 text-lg font-semibold text-white">
        {data.map((item) => (
          <li key={item.id}>
            <Link
              to={item.path}
              className="hover:text-yellow-400 transition-colors"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="relative">
        <input
          type="text"
          placeholder="Search food or restaurants..."
          className="h-10 w-72 pl-4 pr-10 rounded-full
          bg-black/60 text-white border border-gray-500
          focus:outline-none focus:border-yellow-400"
        />
        <FaSearch className="absolute right-4 top-3 text-gray-300" />
      </div>
      <div className="flex gap-4">
        {btn.map((item) => (
          <div key={item.id}>
             <button onClick={()=>navigate(item.path)}
            className="px-5 py-2 rounded-full text-white font-semibold italic
            bg-gradient-to-r from-yellow-400 to-orange-500
            hover:from-orange-500 hover:to-yellow-400 transition "
          >{item.name}            
          </button>
          </div>
         
            
        ))}
      </div>
    </div>
  );
};

export default Header;
