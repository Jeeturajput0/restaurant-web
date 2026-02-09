import React from 'react';
import { motion } from 'framer-motion';

const BenefitsSection = () => {
  // Animation variants for the container to stagger children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each card appearing
      },
    },
  };

  // Animation variants for individual cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  const benefits = [
    {
      icon: "🚀",
      title: "Lightning Fast Delivery",
      desc: "Your food is prepared fresh and delivered quickly, so you never have to wait long for your cravings.",
    },
    {
      icon: "🍽",
      title: "Top Rated Restaurants",
      desc: "Choose from carefully selected restaurants offering delicious meals and great service.",
    },
    {
      icon: "💳",
      title: "Safe & Easy Payments",
      desc: "Pay securely using UPI, debit cards, credit cards, wallets, or cash on delivery.",
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-6 md:px-14 lg:px-24 overflow-hidden">
      {/* Header with Fade-In */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold italic text-yellow-400 mb-6 drop-shadow-md">
          Why Choose EatMore?
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          EatMore connects you with the best restaurants around you. 
          Enjoy fast delivery, trusted partners, and hassle-free payments.
        </p>
      </motion.div>

      {/* Benefits Grid with Staggered Parallax */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-3 gap-10"
      >
        {benefits.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              backgroundColor: "rgba(250, 204, 21, 0.05)" 
            }}
            className="group relative bg-gradient-to-b from-gray-900 to-black
              border border-gray-800 rounded-3xl p-10 text-center
              hover:border-yellow-400 transition-all duration-300 shadow-2xl"
          >
            {/* Animated Icon */}
            <motion.div 
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
              className="text-6xl mb-6 inline-block"
            >
              {item.icon}
            </motion.div>

            <h3 className="text-2xl font-bold italic text-yellow-400 mb-4 group-hover:tracking-wider transition-all">
              {item.title}
            </h3>
            
            <p className="text-gray-400 leading-relaxed">
              {item.desc}
            </p>

            {/* Bottom Glow Effect */}
            <div className="absolute inset-x-0 bottom-0 h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default BenefitsSection;