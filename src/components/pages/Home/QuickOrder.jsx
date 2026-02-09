import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const QuickOrder = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  // Scroll tracking for parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax: Elements move at different speeds
  const yText = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const yFood1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const yFood2 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-r from-yellow-400 to-orange-500 py-24 px-10 text-center"
    >
      {/* Floating Parallax Elements (Visual Depth) */}
      <motion.div style={{ y: yFood1 }} className="absolute top-10 left-[10%] text-6xl opacity-20 hidden md:block">
        🍕
      </motion.div>
      <motion.div style={{ y: yFood2 }} className="absolute bottom-10 right-[10%] text-7xl opacity-20 hidden md:block">
        🍟
      </motion.div>
      <motion.div style={{ y: yFood1 }} className="absolute top-20 right-[15%] text-5xl opacity-10 hidden md:block">
        🌮
      </motion.div>

      <motion.div 
        style={{ y: yText }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <h2 className="text-5xl md:text-6xl font-black italic text-black mb-6 tracking-tight">
          Ready to Order Your <br />
          <span className="text-white drop-shadow-md">Favorite Food?</span>
        </h2>
        
        <p className="text-xl text-black/80 font-medium mb-10 max-w-2xl mx-auto">
          Discover the best restaurants near you and get your meals 
          delivered at lightning speed.
        </p>

        {/* Magnetic Button Animation */}
        <motion.button 
          onClick={() => navigate("/menubar")}
          whileHover={{ 
            scale: 1.1, 
            boxShadow: "0px 10px 30px rgba(0,0,0,0.3)" 
          }}
          whileTap={{ scale: 0.9 }}
          className="group relative px-10 py-4 text-xl font-bold rounded-full bg-black text-white flex items-center gap-3 mx-auto transition-all"
        >
          <span>Order Now</span>
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            🍔
          </motion.span>
          
          {/* Subtle Button Shine Effect */}
          <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>
      </motion.div>

      {/* Background Decorative Circles */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-600/20 rounded-full blur-3xl" />
    </section>
  );
};

export default QuickOrder;