import React from 'react'
import { FaSmile } from 'react-icons/fa'
import { FaCartShopping, FaLocationPin, FaPlateWheat } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const FeaturesSection = () => {
  const FeaturesSectionData = [
    { id: 1, name: "Choose Food", dec: "Browse restaurants and select your favorite dishes.", path: "/menubar", icons: <FaPlateWheat /> },
    { id: 2, name: "Place Order", dec: "Add items to cart and place your order easily.", path: "/menubar", icons: <FaCartShopping /> },
    { id: 3, name: "Track Order", dec: "Track your food in real time.", path: "/trackfood", icons: <FaLocationPin /> },
    { id: 4, name: "Enjoy Food", dec: "Enjoy hot and delicious meals at home", path: "/highlightsstats", icons: <FaSmile /> },
  ]
  
  const navigate = useNavigate()

  // Container variants to stagger the children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Each card appears one after the other
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  }

  return (
    <section className="bg-black py-24 px-6 md:px-14 lg:px-24 text-white overflow-hidden">
      {/* Section Header with Parallax Reveal */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-extrabold italic text-yellow-400 mb-4">
          How It Works
        </h2>
        <p className="text-gray-400 text-lg mb-16 max-w-xl">
          From hunger to happiness in four simple steps.
        </p>
      </motion.div>

      {/* Grid with Motion */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
      >
        {/* Decorative Background Line (visible on large screens) */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400/20 via-yellow-400 to-yellow-400/20 -z-0 transform -translate-y-1/2" />

        {FeaturesSectionData.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            whileHover={{ 
              y: -15, 
              rotateY: 10, // Subtle 3D tilt
              transition: { duration: 0.3 } 
            }}
            onClick={() => navigate(item.path)}
            className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 text-center cursor-pointer hover:border-yellow-400 transition-colors z-10 shadow-xl"
          >
            {/* Step Number Circle */}
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-yellow-400 text-black rounded-full flex items-center justify-center font-black italic shadow-lg">
              {item.id}
            </div>

            {/* Icon Animation */}
            <motion.div 
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-5xl text-yellow-400 flex justify-center mb-6"
            >
              {item.icons}
            </motion.div>

            <h3 className="text-2xl font-bold italic text-yellow-400 group-hover:text-white transition-colors">
              {item.name}
            </h3>

            <p className="text-gray-400 mt-4 leading-relaxed group-hover:text-gray-200 transition-colors">
              {item.dec}
            </p>

            {/* Hover Glow */}
            <div className="absolute inset-0 bg-yellow-400/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default FeaturesSection