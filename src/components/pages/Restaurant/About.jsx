import React, { useState } from "react";
import { Users, UtensilsCrossed, PartyPopper, Truck } from "lucide-react";

const AboutPage = () => {
  const [openBooking, setOpenBooking] = useState(false);

  const services = [
    {
      title: "Luxury Table Service",
      desc: "Personalized service by trained hospitality experts.",
      icon: <Users size={36} className="text-yellow-400" />,
    },
    {
      title: "Custom Food Orders",
      desc: "Modify dishes based on your taste & dietary preferences.",
      icon: <UtensilsCrossed size={36} className="text-yellow-400" />,
    },
    {
      title: "Private Events",
      desc: "Celebrate birthdays, anniversaries & corporate events.",
      icon: <PartyPopper size={36} className="text-yellow-400" />,
    },
    {
      title: "Home Delivery",
      desc: "Fine dining experience delivered to your home.",
      icon: <Truck size={36} className="text-yellow-400" />,
    },
  ];

  return (
    <section className="bg-black text-white py-3 px-6 md:px-16 lg:px-24">

      {/* HERO */}
     
    <div className="text-center mb-20">

      <section
        className="py-20 text-center 
        bg-black 
        border-4 border-yellow-500 
        text-yellow-400 
        rounded-3xl mx-6 my-20 
        shadow-[0_0_40px_rgba(255,255,0,0.25)]"
      >
        <h2 className="text-4xl font-extrabold mb-4">
          Reserve Your Table Today
        </h2>

        <p className="max-w-2xl mx-auto text-lg mb-8 text-gray-300 font-medium">
          Experience gourmet dining with world-class hospitality — book your table in advance.
        </p>

        <button
          onClick={() => setOpenBooking(true)}
          className="mt-10 bg-yellow-400 text-black 
          px-12 py-4 rounded-xl font-semibold shadow-xl 
          hover:bg-yellow-500 hover:scale-105 
          transition-all duration-300"
        >
          Book a Table
        </button>
      </section>

    </div>
      <div className="mb-28">
       

        <div className="grid md:grid-cols-4 gap-10">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white/5 border border-gray-700 p-8 rounded-3xl shadow-lg 
              hover:border-yellow-400 hover:bg-yellow-400/10 hover:scale-105 
              transition-all duration-300 text-center group"
            >
              <div className="flex justify-center mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                {s.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>


      {openBooking && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-4 animate-fadeIn">
          <div className="bg-black border border-gray-700 rounded-3xl p-10 max-w-xl w-full shadow-[0px_0px_30px_#000] relative">

            {/* Close Button */}
            <button
              onClick={() => setOpenBooking(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-yellow-400 transition"
            >
              ✕
            </button>

            <h2 className="text-3xl font-bold text-center text-yellow-400 mb-8">
              Book Your Table
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-black border border-gray-600 px-5 py-3 rounded-lg 
                focus:border-yellow-400 transition outline-none"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full bg-black border border-gray-600 px-5 py-3 rounded-lg 
                focus:border-yellow-400 transition outline-none"
              />

              <input
                type="date"
                className="w-full bg-black border border-gray-600 px-5 py-3 rounded-lg 
                focus:border-yellow-400 transition outline-none"
              />

              <select
                className="w-full bg-black border border-gray-600 px-5 py-3 rounded-lg 
                focus:border-yellow-400 outline-none transition"
              >
                <option>Select Guests</option>
                <option>1 - 2</option>
                <option>3 - 5</option>
                <option>6 - 10</option>
                <option>10+</option>
              </select>

              <textarea
                placeholder="Food Order / Customization / Theme Requests"
                rows="4"
                className="w-full bg-black border border-gray-600 px-5 py-3 rounded-lg 
                focus:border-yellow-400 outline-none transition"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 
                text-black py-3 rounded-xl font-semibold shadow-xl hover:scale-105 
                hover:shadow-yellow-500/40 transition-all duration-300"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}

     
    </section>
  );
};

export default AboutPage;
