import React, { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

// Helper component for the counting effect
const Counter = ({ value }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const springValue = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    if (inView) {
      springValue.set(value);
    }
  }, [inView, value, springValue]);

  // Transform the raw motion value into a rounded string
  const displayValue = useTransform(springValue, (latest) =>
    Math.round(latest).toLocaleString()
  );

  // FIX: Change <span> to <motion.span> to render MotionValues
  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const HighlightsStats = () => {
  const stats = [
    { label: "Restaurants", value: 1000, suffix: "+" },
    { label: "Happy Users", value: 10, suffix: "k+" }, // Changed value to 10 for "10k+"
    { label: "Delivery Partners", value: 500, suffix: "+" },
    { label: "Average Rating", value: 4.8, suffix: "★", isFloat: true },
  ];

  return (
    <section className="relative bg-black py-24 px-6 md:px-14 lg:px-24 text-white overflow-hidden">
      {/* Background Parallax Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 blur-[120px] rounded-full -z-0" 
      />

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="group bg-gradient-to-b from-gray-900/50 to-black/50 border border-gray-800 rounded-3xl p-8 text-center hover:border-yellow-400 transition-all shadow-2xl"
          >
            <h3 className="text-4xl md:text-5xl font-black text-yellow-400 flex items-center justify-center">
              {stat.isFloat ? (
                <span>{stat.value}</span> 
              ) : (
                <Counter value={stat.value} />
              )}
              <span className="ml-1">{stat.suffix}</span>
            </h3>
            
            <p className="text-gray-400 mt-3 font-medium uppercase tracking-widest text-sm group-hover:text-white transition-colors">
              {stat.label}
            </p>

            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "40%" }}
              className="h-1 bg-yellow-400 mx-auto mt-4 rounded-full"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HighlightsStats;