import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ChefHat, Star, Award, Utensils } from 'lucide-react';
import Journey from '../../../assets/jonery.jpg';
import AboutPage from './About';

// --- Reusable 3D Parallax Card Component ---
const ParallaxCard = ({ children }) => {
  const x = useSpring(0, { stiffness: 300, damping: 30 });
  const y = useSpring(0, { stiffness: 300, damping: 30 });

  const handleMouse = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width - 0.5) * 20; // Tilt sensitivity
    const yPct = (mouseY / height - 0.5) * -20;
    x.set(xPct);
    y.set(yPct);
  };

  const resetMouse = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
      style={{ rotateY: x, rotateX: y, transformStyle: "preserve-3d" }}
      className="relative transition-all duration-200 ease-out"
    >
      {children}
    </motion.div>
  );
};

const Restaurant = () => {
  const journeyRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: journeyRef,
    offset: ["start end", "end start"]
  });

  // Parallax: Background and foreground move at different speeds
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  const chefs = [
    { name: "Chef Arjun Mehta", exp: "12 Years", speciality: "Modern Indian Fusion", img: "https://images.unsplash.com/photo-1551218808-94e220e084d2", icon: <ChefHat /> },
    { name: "Chef Priya Kapoor", exp: "9 Years", speciality: "Italian Cuisine", img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d", icon: <Utensils /> },
    { name: "Chef Rohan Verma", exp: "7 Years", speciality: "Dessert Artist", img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba", icon: <Award /> },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white selection:bg-yellow-400 selection:text-black">
      {/* Hero Content */}
      <section className="relative py-24 px-6 md:px-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center mb-32"
        >
          <span className="text-yellow-500 font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Est. 2010</span>
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            CRAFTING <span className="text-yellow-400">MEMORIES</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Journey Section with Scroll Parallax */}
        <div ref={journeyRef} className="grid md:grid-cols-2 gap-20 items-center overflow-visible">
          <motion.div style={{ y: yText, opacity }} className="z-10">
            <h2 className="text-5xl font-black mb-8 leading-tight">
              A Legacy of <br /> <span className="text-yellow-400 underline decoration-yellow-600/30">Taste & Luxury</span>
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed mb-10">
              We don't just serve food; we curate experiences that linger on the palate 
              and in the heart. From farm-to-table freshness to Michelin-standard plating.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(250, 204, 21, 0.4)" }}
              className="bg-yellow-400 text-black px-10 py-5 rounded-full font-black tracking-widest uppercase text-sm"
            >
              Our Philosophy
            </motion.button>
          </motion.div>

          <motion.div style={{ y: yImage }} className="relative group">
            <div className="absolute -inset-4 bg-yellow-400/20 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img 
              src={Journey} 
              alt="Luxury" 
              className="rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10" 
            />
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-10 -right-10 bg-white p-6 rounded-2xl shadow-2xl hidden md:block"
            >
              <Star className="text-yellow-500 fill-yellow-500" size={32} />
              <p className="text-black font-black text-xs mt-2 uppercase">Top Rated</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Meet The Chefs with 3D Tilt Parallax */}
      <section className="py-32 px-6 md:px-24 bg-[#0d0d0d]">
        <h2 className="text-4xl font-black text-center mb-20 uppercase tracking-tighter">
          Masterminds <span className="text-yellow-400">Behind the Kitchen</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          {chefs.map((chef, i) => (
            <ParallaxCard key={i}>
              <div className="bg-[#151515] p-8 rounded-[2.5rem] border border-white/5 text-center group hover:border-yellow-400/50 transition-colors">
                <div className="relative w-48 h-48 mx-auto mb-8">
                  <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <img 
                    src={chef.img} 
                    alt={chef.name} 
                    className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border-2 border-yellow-400/20 shadow-2xl" 
                  />
                </div>
                <div className="text-yellow-400 mb-2 flex justify-center">{chef.icon}</div>
                <h3 className="text-2xl font-black mb-1">{chef.name}</h3>
                <p className="text-yellow-500/80 font-bold text-sm mb-4">{chef.exp}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{chef.speciality}</p>
              </div>
            </ParallaxCard>
          ))}
        </div>
      </section>
      
      {/* Decorative Parallax Text Belt */}
      <div className="py-10 overflow-hidden bg-yellow-400 flex whitespace-nowrap">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-20"
          >
            {[1, 2, 3, 4, 5].map((x) => (
              <span key={x} className="text-black font-black text-4xl uppercase tracking-tighter italic">
                Michelin Quality • Luxury Dining • Artistic Plating • World Class Service •
              </span>
            ))}
          </motion.div>
      </div>
      <AboutPage/>
    </div>
  );
};

export default Restaurant;