import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, UtensilsCrossed, PartyPopper, Truck, X, Calendar, UserPlus } from "lucide-react";

const AboutPage = () => {
  const [openBooking, setOpenBooking] = useState(false);

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const services = [
    {
      title: "Luxury Table Service",
      desc: "Personalized service by trained hospitality experts in a refined setting.",
      icon: <Users size={36} />,
    },
    {
      title: "Custom Food Orders",
      desc: "Modify dishes based on your unique taste & dietary preferences.",
      icon: <UtensilsCrossed size={36} />,
    },
    {
      title: "Private Events",
      desc: "Celebrate birthdays, anniversaries & corporate events with class.",
      icon: <PartyPopper size={36} />,
    },
    {
      title: "Premium Delivery",
      desc: "The complete fine dining experience delivered straight to your door.",
      icon: <Truck size={36} />,
    },
  ];

  return (
    <section className="bg-[#050505] text-white py-24 px-6 md:px-16 lg:px-24 overflow-hidden">
      
      {/* --- HERO / CTA SECTION --- */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative group mb-32"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative py-20 text-center bg-black border border-yellow-500/30 rounded-[3rem] shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-yellow-400 tracking-tighter">
            RESERVE YOUR <span className="text-white">EXPERIENCE</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-10 text-gray-400 font-medium px-4">
            Step into a world where gourmet flavors meet world-class hospitality. 
            Limited tables available for the weekend.
          </p>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(250, 204, 21, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpenBooking(true)}
            className="bg-yellow-400 text-black px-16 py-5 rounded-full font-black uppercase tracking-widest text-sm transition-all"
          >
            Book a Table
          </motion.button>
        </div>
      </motion.div>

      {/* --- SERVICES GRID --- */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-4 gap-8"
      >
        {services.map((s, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="bg-[#0f0f0f] border border-white/5 p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden group hover:border-yellow-400/50 transition-colors"
          >
            {/* Background Glow Effect */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl group-hover:bg-yellow-400/20 transition-all"></div>
            
            <div className="relative z-10">
              <div className="text-yellow-400 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-500">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {s.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* --- BOOKING MODAL --- */}
      <AnimatePresence>
        {openBooking && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-[100] px-4"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 100 }}
              className="bg-[#111] border border-white/10 rounded-[3rem] p-8 md:p-12 max-w-2xl w-full shadow-2xl relative"
            >
              <button
                onClick={() => setOpenBooking(false)}
                className="absolute top-6 right-6 p-2 text-gray-500 hover:text-yellow-400 hover:bg-white/5 rounded-full transition-all"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-10">
                <h2 className="text-3xl font-black text-yellow-400 uppercase tracking-tighter">Secure Your Table</h2>
                <div className="w-12 h-1 bg-yellow-400 mx-auto mt-2 rounded-full"></div>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                   <label className="text-[10px] uppercase font-black text-gray-500 tracking-widest ml-2">Full Name</label>
                   <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl focus:border-yellow-400 outline-none transition" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] uppercase font-black text-gray-500 tracking-widest ml-2">Mobile</label>
                   <input type="tel" placeholder="+1 234 567 890" className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl focus:border-yellow-400 outline-none transition" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] uppercase font-black text-gray-500 tracking-widest ml-2">Date</label>
                   <div className="relative">
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input type="date" className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl focus:border-yellow-400 outline-none transition appearance-none" />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] uppercase font-black text-gray-500 tracking-widest ml-2">Guests</label>
                   <div className="relative">
                    <UserPlus className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <select className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl focus:border-yellow-400 outline-none transition appearance-none">
                      <option className="bg-black">1 - 2 Persons</option>
                      <option className="bg-black">3 - 5 Persons</option>
                      <option className="bg-black">Private Lounge (10+)</option>
                    </select>
                   </div>
                </div>

                <div className="md:col-span-2 space-y-2">
                   <label className="text-[10px] uppercase font-black text-gray-500 tracking-widest ml-2">Special Requests</label>
                   <textarea rows="3" placeholder="Dietary needs or special occasion..." className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl focus:border-yellow-400 outline-none transition"></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="md:col-span-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm shadow-xl shadow-yellow-500/10"
                >
                  Confirm Reservation
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default AboutPage;