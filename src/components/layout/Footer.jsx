import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const restaurantLinks = [
    { name: "Partner with Us", path: "/partner" },
    { name: "Add Your Restaurant", path: "/add-restaurant" },
    { name: "Restaurant App", path: "/restaurant-app" },
    { name: "Business Support", path: "/support" },
  ];

  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
  ];

  // Animation variants for sections
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1, 
      y: 0, 
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
    })
  };

  return (
    <footer className="relative bg-zinc-950 text-gray-400 overflow-hidden">
      {/* Subtle Background Parallax Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-yellow-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <motion.div 
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-black italic text-yellow-400 tracking-tighter uppercase">
              EatMore
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-gray-500">
              Transforming the food industry by connecting restaurants with hungry customers. 
              Freshness delivered, growth simplified.
            </p>
            <div className="flex gap-4 mt-8">
              {[FaFacebook, FaInstagram, FaTwitter].map((Icon, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5, color: "#facc15" }}
                  className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center cursor-pointer transition-colors"
                >
                  <Icon size={18} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Restaurant Links */}
          <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6">
              For Restaurants
            </h3>
            <ul className="space-y-4 text-sm">
              {restaurantLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-yellow-400 hover:translate-x-2 inline-block transition-all duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6">
              Company
            </h3>
            <ul className="space-y-4 text-sm">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-yellow-400 hover:translate-x-2 inline-block transition-all duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 group">
                <FaEnvelope className="text-yellow-400 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">jeeturajput0302@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 group">
                <FaPhoneAlt className="text-yellow-400 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">+91 7817875621</span>
              </li>
              <li className="flex items-center gap-3 group">
                <FaMapMarkerAlt className="text-yellow-400 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">Dehradun, India</span>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Footer Bottom */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest text-gray-600 uppercase"
        >
          <p>
            © 2026 <span className="text-yellow-400 font-bold">EatMore</span>. 
            All rights reserved.
          </p>
          <p className="flex gap-6">
            <span className="cursor-pointer hover:text-white">Sitemap</span>
            <span className="cursor-pointer hover:text-white">Security</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;