import React from "react";
import { FaCoffee, FaPizzaSlice } from "react-icons/fa";
import { FaBurger, FaRightFromBracket } from "react-icons/fa6";
import { motion } from "framer-motion";

const HotDeals = () => {
  // Animation variants for the text side
  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Animation variants for the cart card
  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="bg-black py-24 px-6 md:px-14 lg:px-24 text-white overflow-hidden">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content with Slide-in Parallax */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInLeft}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold italic text-yellow-400 mb-6 leading-tight">
            Smart & Simple <span className="text-white underline decoration-yellow-500">Cart</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Manage your orders easily with our smart cart. Add, remove, or
            customize items before checkout — all in just a few clicks.
          </p>
          
          <ul className="space-y-5 text-lg">
            {[
              "Real-time price updates",
              "Easy quantity control",
              "Secure & fast checkout"
            ].map((text, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                className="flex items-center gap-4 group"
              >
                <span className="p-2 bg-yellow-400/10 rounded-lg group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-300">
                  <FaRightFromBracket />
                </span> 
                {text}
              </motion.li>
            ))}
          </ul>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 px-10 py-4 rounded-full text-lg font-bold italic bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-[0_10px_20px_rgba(234,179,8,0.3)]"
          >
            Go to Cart 🛒
          </motion.button>
        </motion.div>

        {/* Right Side: Interactive Cart Summary */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInRight}
          className="relative"
        >
          {/* Decorative Glow Background */}
          <div className="absolute -inset-4 bg-yellow-500/10 blur-3xl rounded-full" />
          
          <div className="relative bg-white/5 backdrop-blur-md border border-gray-700 rounded-[2rem] p-10 hover:border-yellow-400 transition-all duration-500 group shadow-2xl">
            <h3 className="text-3xl font-bold italic text-yellow-400 mb-8 border-b border-gray-700 pb-4">
              Your Cart Summary
            </h3>
            
            <div className="space-y-6">
              {[
                { icon: <FaBurger />, name: "Classic Burger", qty: "× 2", color: "text-orange-400" },
                { icon: <FaPizzaSlice />, name: "Pepperoni Pizza", qty: "× 1", color: "text-red-400" },
                { icon: <FaCoffee />, name: "Cold Brew Coffee", qty: "× 1", color: "text-yellow-200" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-center justify-between text-xl text-gray-200"
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-3xl ${item.color} group-hover:rotate-12 transition-transform`}>
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </div>
                  <span className="font-mono text-yellow-400">{item.qty}</span>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-gray-600 mt-8 pt-6 flex justify-between items-center">
              <p className="text-2xl font-bold">Total Payable</p>
              <motion.p 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-3xl font-black text-yellow-400"
              >
                ₹499
              </motion.p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HotDeals;