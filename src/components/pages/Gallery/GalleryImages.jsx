import React from 'react'
import { motion } from 'framer-motion'
import Images1 from '../../../assets/gallery-3-1.jpg'
import Images2 from '../../../assets/gallery-3-2.jpg'
import Images3 from '../../../assets/gallery-3-3.jpg'
import Images4 from '../../../assets/gallery-3-4.jpg'
import Images6 from '../../../assets/gallery-3-6.jpg'
import Images7 from '../../../assets/gallery-3-7.jpg'
import Images8 from '../../../assets/gallery-3-8.jpg'
import Images9 from '../../../assets/gallery-3-9.jpg'
import Images10 from '../../../assets/gallery-3-10.jpg'

const GalleryImages = () => {
  const images = [
    Images1, Images2, Images3,
    Images4, Images6, Images8, 
    Images7, Images9, Images10
  ]

  // Animation variants for the stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each image reveal
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  }

  return (
    <div className="bg-black py-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 sm:p-6 md:grid-cols-3 lg:px-20"
      >
        {images.map((img, i) => (
          <motion.div
            key={i}
            variants={imageVariants}
            whileHover={{ 
              scale: 1.03, 
              rotate: i % 2 === 0 ? 1 : -1, // Subtle random-like tilt
              zIndex: 10 
            }}
            className="relative group overflow-hidden rounded-2xl cursor-pointer"
          >
            {/* The Image */}
            <motion.img
              src={img}
              alt={`gallery-${i}`}
              className="w-full h-80 object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
            />

            {/* Premium Parallax Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Inner Border decoration */}
            <div className="absolute inset-4 border border-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default GalleryImages  
