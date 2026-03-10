import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SiteParallax = () => {
  const { scrollYProgress } = useScroll();

  const orbOneY = useTransform(scrollYProgress, [0, 1], [0, -240]);
  const orbTwoY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const orbThreeY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.18, 0.1, 0.16]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        style={{ y: gridY, opacity: gridOpacity }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.08),transparent_36%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:90px_90px]" />
      </motion.div>

      <motion.div
        style={{ y: orbOneY }}
        className="absolute -left-28 top-[10%] h-72 w-72 rounded-full bg-yellow-400/12 blur-[120px]"
      />
      <motion.div
        style={{ y: orbTwoY }}
        className="absolute right-[-7rem] top-[35%] h-96 w-96 rounded-full bg-orange-500/12 blur-[140px]"
      />
      <motion.div
        style={{ y: orbThreeY }}
        className="absolute bottom-[-8rem] left-[28%] h-80 w-80 rounded-full bg-white/6 blur-[160px]"
      />
    </div>
  );
};

export default SiteParallax;
