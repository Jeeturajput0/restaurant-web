import React from "react";
import { useNavigate } from "react-router-dom";

const QuickOrder = () => {
  const navigate=useNavigate()
  return (
    <>
      <div className="">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 py-14 px-10 text-center">
          <h2 className="text-4xl font-extrabold italic text-black mb-4">
            Ready to Order Your Favorite Food?
          </h2>
          <p className="text-xl text-black mb-6">
            Discover the best restaurants near you and order now.
          </p>
          <button onClick={()=> navigate("/menubar")} className="px-8 py-3 text-lg font-semibold rounded-full bg-black text-white">
            Order Now 🍔
          </button>
        </div>
      </div>
    </>
  );
};

export default QuickOrder;
