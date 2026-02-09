import React from "react";
import { FaTag, FaFire } from "react-icons/fa";
import { motion } from "framer-motion";
import offer11 from "../../../assets/offer1.1.jpg";

import offer12 from "../../../assets/offer1.2.jpeg";

import offer13 from "../../../assets/offer1.3.jpeg";

import offer21 from "../../../assets/offer2.1.jpeg";

import offer22 from "../../../assets/offer2.2.jpeg";

import offer23 from "../../../assets/offer2.3.jpg";
// Keep your image imports here...

const OfferCard = () => {
  const offers = [
    { id: 1, title: "Flat 40% OFF", discount: "40% OFF", code: "EAT40", desc: "Enjoy your favorite meals with massive discounts.", img: offer11 },
    { id: 2, title: "Buy 1 Get 1", discount: "60% OFF", code: "BUY1GET1", desc: "Order now and get another dish absolutely free!", img: offer12 },
    { id: 3, title: "Free Delivery", discount: "FREE", code: "NOFEE", desc: "No delivery charges on orders above ₹299.", img: offer13 },
    { id: 4, title: "Festival Special", discount: "45% OFF", code: "FEST45", desc: "Celebrate the season with special discounts.", img: offer21 },
    { id: 5, title: "New User Exclusive", discount: "50% OFF", code: "NEW50", desc: "First order? Enjoy half price on your entire bill!", img: offer22 },
    { id: 6, title: "Family Pack Deal", discount: "₹299 OFF", code: "FAMILY299", desc: "Big meals for big smiles! Save ₹299 on any family combo.", img: offer23 },
  ];

  // Perspective Tilt Variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      rotateX: 15, // Tilted away initially
      scale: 0.9 
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0, // flattens as it scrolls in
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1], // Smooth cubic-bezier
      },
    }),
  };

  return (
    <div className="bg-black py-24 px-6 md:px-12 overflow-hidden">
      {/* Header with Float Animation */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h2 className="text-5xl font-black italic flex items-center gap-4 bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-500 text-transparent bg-clip-text">
          <FaFire className="text-orange-500 animate-bounce" /> 
          Hot Restaurant Offers
        </h2>
        <div className="h-1 w-32 bg-yellow-400 mt-4 rounded-full shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
      </motion.div>

      {/* Grid with Perspective container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 [perspective:1000px]">
        {offers.map((offer, i) => (
          <motion.div
            key={offer.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            whileHover={{ 
              y: -10, 
              rotateY: 5, // Subtle 3D tilt on hover
              transition: { duration: 0.3 } 
            }}
            className="group relative"
          >
            {/* Outer Glow/Border */}
            <div className="absolute -inset-[1px] bg-gradient-to-br from-yellow-400 to-orange-600 rounded-3xl blur-sm opacity-30 group-hover:opacity-100 transition duration-500" />
            
            <div className="relative bg-zinc-950 rounded-3xl overflow-hidden border border-white/10 h-full flex flex-col">
              
              {/* Image Container with Zoom */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={offer.img}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Badge Animation */}
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute top-4 left-4 bg-yellow-400 text-black font-black px-4 py-1.5 rounded-full text-xs flex items-center gap-1 shadow-[0_4px_15px_rgba(0,0,0,0.3)]"
                >
                  <FaTag /> {offer.discount}
                </motion.div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-60" />
              </div>

              {/* Content Section */}
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-black italic text-yellow-400 mb-3 group-hover:translate-x-1 transition-transform">
                  {offer.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {offer.desc}
                </p>

                <div className="mt-auto">
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-dashed border-yellow-400/30 mb-6">
                    <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Promo Code</span>
                    <span className="text-yellow-400 font-mono font-bold tracking-tighter">
                      {offer.code}
                    </span>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black py-4 rounded-2xl shadow-[0_10px_20px_rgba(234,179,8,0.2)] hover:shadow-yellow-400/40 transition-all uppercase italic text-sm tracking-wider"
                  >
                    Claim Offer Now 🍽️
                  </motion.button>
                </div>
              </div>

              {/* Shimmer Light Effect (follows card) */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shimmer" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Add this to your Global CSS or Tailwind config
// @keyframes shimmer {
//   100% { left: 200%; }
// }

export default OfferCard;