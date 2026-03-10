import React from "react";
import { FaFire, FaTag } from "react-icons/fa";
import { motion } from "framer-motion";
import offer11 from "../../../assets/offer1.1.jpg";
import offer12 from "../../../assets/offer1.2.jpeg";
import offer13 from "../../../assets/offer1.3.jpeg";
import offer21 from "../../../assets/offer2.1.jpeg";
import offer22 from "../../../assets/offer2.2.jpeg";
import offer23 from "../../../assets/offer2.3.jpg";

const offers = [
  {
    id: 1,
    title: "Flat 40% OFF",
    discount: "40% OFF",
    code: "EAT40",
    desc: "Enjoy your favorite meals with massive discounts.",
    img: offer11,
  },
  {
    id: 2,
    title: "Buy 1 Get 1",
    discount: "60% OFF",
    code: "BUY1GET1",
    desc: "Order now and get another dish absolutely free!",
    img: offer12,
  },
  {
    id: 3,
    title: "Free Delivery",
    discount: "FREE",
    code: "NOFEE",
    desc: "No delivery charges on orders above Rs. 299.",
    img: offer13,
  },
  {
    id: 4,
    title: "Festival Special",
    discount: "45% OFF",
    code: "FEST45",
    desc: "Celebrate the season with special discounts.",
    img: offer21,
  },
  {
    id: 5,
    title: "New User Exclusive",
    discount: "50% OFF",
    code: "NEW50",
    desc: "First order? Enjoy half price on your entire bill!",
    img: offer22,
  },
  {
    id: 6,
    title: "Family Pack Deal",
    discount: "Rs. 299 OFF",
    code: "FAMILY299",
    desc: "Big meals for big smiles! Save Rs. 299 on any family combo.",
    img: offer23,
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: 15,
    scale: 0.96,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      delay: index * 0.1,
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

const OfferCard = () => {
  return (
    <section className="overflow-hidden bg-black px-3 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20 xl:px-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto mb-8 max-w-7xl sm:mb-12 lg:mb-16"
      >
        <h2 className="flex items-start gap-2.5 bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-500 bg-clip-text text-[1.85rem] font-black italic leading-tight text-transparent sm:items-center sm:gap-4 sm:text-4xl md:text-5xl lg:text-6xl">
          <FaFire className="mt-1 shrink-0 animate-bounce text-xl text-orange-500 sm:mt-0 sm:text-3xl md:text-4xl" />
          Hot Restaurant Offers
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
          Grab limited-time discounts crafted for quick ordering on every screen size.
        </p>
        <div className="mt-4 h-1 w-20 rounded-full bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.5)] sm:w-32" />
      </motion.div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 [perspective:1000px] sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8 xl:gap-10">
        {offers.map((offer, index) => (
          <motion.div
            key={offer.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            whileHover={{
              y: -10,
              rotateY: 5,
              transition: { duration: 0.3 },
            }}
            className="group relative mx-auto h-full w-full max-w-sm sm:max-w-none"
          >
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-600 blur-sm opacity-30 transition duration-500 group-hover:opacity-100" />

            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-950">
              <div className="relative h-44 overflow-hidden min-[420px]:h-48 sm:h-52 lg:h-56 xl:h-60">
                <motion.img
                  src={offer.img}
                  alt={offer.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute left-2.5 top-2.5 flex items-center gap-1 rounded-full bg-yellow-400 px-2.5 py-1 text-[10px] font-black text-black shadow-[0_4px_15px_rgba(0,0,0,0.3)] sm:left-4 sm:top-4 sm:px-4 sm:py-1.5 sm:text-xs"
                >
                  <FaTag />
                  {offer.discount}
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-60" />
              </div>

              <div className="flex flex-grow flex-col p-4 sm:p-6 lg:p-8">
                <h3 className="mb-2.5 text-lg font-black italic text-yellow-400 transition-transform group-hover:translate-x-1 sm:mb-3 sm:text-2xl">
                  {offer.title}
                </h3>

                <p className="mb-4 text-[13px] leading-6 text-gray-400 sm:mb-6 sm:text-[15px]">
                  {offer.desc}
                </p>

                <div className="mt-auto">
                  <div className="mb-4 flex flex-col gap-1.5 rounded-2xl border border-dashed border-yellow-400/30 bg-white/5 p-3 sm:mb-6 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500 sm:tracking-[0.24em]">
                      Promo Code
                    </span>
                    <span className="break-all font-mono text-sm font-bold tracking-tight text-yellow-400 sm:text-base">
                      {offer.code}
                    </span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-3 text-xs font-black uppercase italic tracking-[0.16em] text-black shadow-[0_10px_20px_rgba(234,179,8,0.2)] transition-all hover:shadow-yellow-400/40 sm:py-4 sm:text-sm sm:tracking-[0.2em]"
                  >
                    Claim Offer Now
                  </motion.button>
                </div>
              </div>

              <div className="absolute top-0 -inset-full block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shimmer" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OfferCard;
