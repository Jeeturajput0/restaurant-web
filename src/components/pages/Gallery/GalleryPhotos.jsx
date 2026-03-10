import React from "react";
import { motion } from "framer-motion";

// Assuming your imports stay the same
import img1 from "../../../assets/gallery-2-1.jpg";
import img2 from "../../../assets/gallery-2-2.jpg";
import img3 from "../../../assets/gallery-2-3.jpg";
import img4 from "../../../assets/gallery-2-4.jpg";
import img5 from "../../../assets/gallery-2-5.jpg";
import img6 from "../../../assets/gallery-2-6.jpg";
import img7 from "../../../assets/gallery-2-7.jpg";
import img8 from "../../../assets/gallery-2-8.jpg";
import img9 from "../../../assets/gallery-2-9.jpg";
import img10 from "../../../assets/gallery-2-10.jpg";
import img11 from "../../../assets/gallery-2-11.jpg";
import img12 from "../../../assets/gallery-2-12.jpg";
// ... (keep all your other image imports)

const GalleryPhotos = () => {
  const card = [
    { img: img1, title: "PRIVATE DINNING" },
    { img: img2, title: "MEAT COOKING" },
    { img: img3, title: "SWEET DESSERT" },
    { img: img4, title: "CHEF'S PLATE" },
    { img: img5, title: "FRIDAY EVENING" },
    { img: img6, title: "PASTA PROCESS" },
    { img: img7, title: "INTO THE KITCHEN" },
    { img: img8, title: "INSIDE ROOM" },
    { img: img9, title: "OUTSIDE" },
    { img: img10, title: "DISHES COURSE" },
    { img: img11, title: "MORNING BREAKFAST" },
    { img: img12, title: "CHOCOLATE MUFFIN" },
  ];

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Images will reveal one by one
      },
    },
  };

  // Animation variants for each image card
  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <div className="bg-black py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-black italic text-yellow-400 tracking-tighter uppercase">
            Captured Moments
          </h2>
          <div className="h-1 w-24 bg-yellow-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* The Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {card.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
            >
              {/* Image with Parallax Zoom */}
              <motion.img
                src={item.img}
                alt={item.title}
                className="w-full h-[450px] object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
              />

              {/* Overlay with Premium Blur */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex flex-col justify-end p-8">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.45 }}
                  className="overflow-hidden"
                >
                  <p className="text-yellow-400 text-sm font-bold tracking-[0.3em] mb-2">
                    EXPLORE
                  </p>
                  <h3 className="text-white text-3xl font-black italic leading-tight uppercase">
                    {item.title}
                  </h3>
                  <div className="w-0 group-hover:w-full h-1 bg-yellow-400 transition-all duration-700 mt-2" />
                </motion.div>
              </div>

              {/* Decorative Corner Border */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default GalleryPhotos;
