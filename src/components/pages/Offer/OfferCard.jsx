import React from "react";
import { FaTag, FaFire } from "react-icons/fa";

const OfferCard = () => {
  const offers = [
    {
      id: 1,
      title: "Flat 40% OFF",
      discount: "40% OFF",
      code: "EAT40",
      desc: "Enjoy your favorite meals with massive discounts.",
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    },
    {
      id: 2,
      title: "Buy 1 Get 1",
      discount: "60% OFF",
      code: "BUY1GET1",
      desc: "Order now and get another dish absolutely free!",
      img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    },
    {
      id: 3,
      title: "Free Delivery",
      discount: "FREE",
      code: "NOFEE",
      desc: "No delivery charges on orders above ₹299.",
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
    },
  ];

  return (
    <div className="bg-black py-16 pt-20 px-6 md:px-12">  
      <h2 className="text-4xl font-extrabold text-yellow-400 mb-12 flex items-center gap-3">
        <FaFire /> Hot Restaurant Offers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-black border border-yellow-400 rounded-2xl
            overflow-hidden shadow-lg hover:scale-105 transition"
          >      
            <div className="relative">
              <img
                src={offer.img}
                alt={offer.title}
                className="w-full h-48 object-cover"
              />
        
              <span className="absolute top-4 left-4 bg-yellow-400 text-black
                font-bold px-4 py-1 rounded-full text-sm flex items-center gap-1">
                <FaTag /> {offer.discount}
              </span>
            </div>
        
            <div className="p-6 text-white">
              <h3 className="text-2xl font-extrabold text-yellow-400 mb-2">
                {offer.title}
              </h3>

              <p className="text-gray-300 text-sm mb-4">
                {offer.desc}
              </p>
         
              <div className="flex items-center justify-between mb-5">
                <span className="text-gray-400 text-sm">Use Code</span>
                <span className="border border-dashed border-yellow-400
                  text-yellow-400 px-3 py-1 font-bold rounded-lg">
                  {offer.code}
                </span>
              </div>
         
              <button className="w-full bg-yellow-400 text-black font-bold
                py-3 rounded-xl hover:bg-yellow-300 transition">
                Order Now 🍽️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferCard;
