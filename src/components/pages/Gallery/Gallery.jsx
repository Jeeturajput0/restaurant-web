import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import GalleryImages from './GalleryImages'
import GalleryPhotos from './GalleryPhotos'
import gallerybanner from "../../../assets/Gallery-banner.jpg";

const Gallery = () => {
  const containerRef = useRef(null);

  // Setup scroll tracking for the banner parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleText = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="bg-black pt-[90px]">
      {/* Banner Section with Parallax */}
      <div 
        ref={containerRef}
        className="relative h-[500px] w-full overflow-hidden flex items-center justify-center pt-20"
      >
        <motion.img
          style={{ y: yBg }}
          src={gallerybanner}
          alt="Gallery Banner"
          className="absolute inset-0 w-full h-[120%] object-cover border-b-2 border-yellow-400 opacity-60"
        />

        {/* Floating Hero Text */}
        <motion.div 
          style={{ opacity: opacityText, scale: scaleText }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center px-4"
        >
          <span className="text-yellow-400 font-bold tracking-[0.4em] text-sm uppercase mb-2 block">
            Visual Journey
          </span>
          <h1 className="text-white text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none">
            Welcome to the <br />
            <span className="text-yellow-400">Gallery</span>
          </h1>
          <div className="mt-6 flex justify-center gap-2">
             <div className="h-1 w-12 bg-yellow-400 rounded-full" />
             <div className="h-1 w-4 bg-yellow-400/50 rounded-full" />
          </div>
        </motion.div>

        {/* Bottom Fade Gradient */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Main Content Sections */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 -mt-10"
      >
        <GalleryImages />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <GalleryPhotos />
      </motion.div>
    </div>
  )
}

export default Gallery
