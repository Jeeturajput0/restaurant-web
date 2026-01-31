import React from "react";
import banner from '../../../assets/bannerfood.jpeg'
import { useNavigate } from "react-router-dom";
import { FaBurger } from "react-icons/fa6";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <img
        src={banner}
        alt="Food Banner"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50 flex items-center px-8">
        <div className="space-y-7 max-w-xl">
          
          <h1 className="text-6xl font-extrabold italic text-white leading-tight">
            Are You Hungry?
            <br />
            <span className="flex items-center gap-3 font-serif bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Don’t Wait
              <FaBurger className="text-yellow-300 text-4xl" />
            </span>
          </h1>

          <p className="text-xl text-gray-200 italic tracking-wide">
            Craving something delicious?
            <span className="text-yellow-300 font-semibold">
              Order fresh food in minutes!
            </span>
          </p>

          <button
            onClick={() => navigate("/menubar")}
            className="px-9 py-3 text-lg font-semibold italic text-white
            rounded-full bg-gradient-to-r from-yellow-400 to-orange-500
            hover:bg-orange-500 transition-colors duration-200"
          >
            🍽 Explore Our Menu
          </button>
        </div>
        
      </div>
      
    </div>
    
  );
};

export default Banner;
