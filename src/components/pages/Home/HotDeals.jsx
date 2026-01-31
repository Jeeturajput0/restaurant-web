import React from "react";
import { FaCoffee, FaPizzaSlice } from "react-icons/fa";
import { FaBurger, FaRightFromBracket } from "react-icons/fa6";

const HotDeals = () => {
  return (
    <>
      <div className="bg-black py-20 px-10 text-white">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-extrabold italic text-yellow-400 mb-6">
              Smart & Simple Cart
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Manage your orders easily with our smart cart. Add, remove, or
              customize items before checkout — all in just a few clicks.
            </p>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-3">
                <span className="text-yellow-400"><FaRightFromBracket/></span> Real-time price
                updates
              </li>
              <li className="flex items-center gap-3">
                <span className="text-yellow-400"><FaRightFromBracket/></span> Easy quantity control
              </li>
              <li className="flex items-center gap-3">
                <span className="text-yellow-400"><FaRightFromBracket/></span> Secure & fast
                checkout
              </li>
            </ul>
            <button className="mt-8 px-8 py-3 rounded-full text-lg font-semibold italic bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
              Go to Cart 🛒
            </button>
          </div>
          <div className="bg-black/70 border border-gray-700 rounded-3xl p-10 hover:border-yellow-400 transition">
            <h3 className="text-3xl font-bold italic text-yellow-400 mb-6">
              Your Cart Summary
            </h3>
            <div className="space-y-4 text-lg text-gray-300">
              <p><FaBurger className="text-2xl  text-yellow-400  "/> Burger × 2</p> <p><FaPizzaSlice className="text-2xl  text-yellow-400 " /> Pizza × 1</p> <p><FaCoffee className="text-2xl text-yellow-400"/> Cold Drink × 1</p>
            </div>
            <div className="border-t border-gray-600 mt-6 pt-4">
              <p className="text-xl font-semibold">
                Total: <span className="text-yellow-400">₹499</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotDeals;
