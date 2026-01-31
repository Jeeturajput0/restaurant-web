import React from 'react'
import AboutPage from './About';
import Journey from '../../../assets/jonery.jpg'

const Restaurant = () => {
    const chefs = [
    {
      name: "Chef Arjun Mehta",
      exp: "12 Years Experience",
      speciality: "Modern Indian Fusion",
      img: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    },
    {
      name: "Chef Priya Kapoor",
      exp: "9 Years Experience",
      speciality: "Italian Cuisine Specialist",
      img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d",
    },
    {
      name: "Chef Rohan Verma",
      exp: "7 Years Experience",
      speciality: "Dessert Artist & Baker",
      img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba",
    },
  ];

  const gallery = [
    {
      title: "Our Master Chefs",
      img: "https://images.unsplash.com/photo-1556911220-bff31c812dba",
    },
    {
      title: "Modern Kitchen",
      img: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a",
    },
    {
      title: "Premium Tools",
      img: "https://images.unsplash.com/photo-1528712306091-ed0763094c98",
    },
    {
      title: "Fine Dining Area",
      img: "https://images.unsplash.com/photo-1552566626-52f8b828add9",
    },
    {
      title: "Signature Dishes",
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    },
    {
      title: "Luxury Ambience",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    },
  ];

  return (
    <>
      

  return (
    <section className="bg-black text-white py-20 px-6 md:px-14 lg:px-24">

      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg tracking-wide">
          About Our Luxury Restaurant
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto mt-6 text-lg leading-relaxed">
          Where culinary artistry meets refined hospitality.  
          We create unforgettable gourmet experiences with passion and precision.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center mb-28">
        <div>
          <h2 className="text-4xl font-bold mb-4 text-yellow-400">
            Our Journey
          </h2>
          <p className="text-gray-300 leading-relaxed mb-5">
            Founded with the vision of bringing world-class dining to your city,
            our restaurant blends tradition with innovation. From our humble
            beginnings as a boutique eatery to becoming a celebrated culinary
            brand, we have stayed committed to taste, quality, and hospitality.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Every plate tells a story — crafted with premium ingredients,
            slow-cooking techniques, and an uncompromising philosophy of
            excellence. Today, we proudly serve thousands, offering a memorable,
            luxurious dining experience.
          </p>

          <button className="mt-8 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-xl font-semibold shadow-xl hover:scale-105 transition">
            Explore Full Menu
          </button>
        </div>

        <div className="relative">
          <img
            src={Journey}
            alt="Journey"
            className="rounded-3xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 bg-white/5 p-10 rounded-3xl border border-gray-700 shadow-xl mb-24">
        <div>
          <h3 className="text-3xl font-bold text-yellow-400 mb-3">Our Mission</h3>
          <p className="text-gray-300">
            To elevate dining into an experience filled with elegance, warmth,
            and exceptional flavors. We aim to provide innovative dishes while
            honoring culinary heritage.
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-yellow-400 mb-3">Our Vision</h3>
          <p className="text-gray-300">
            To be the most loved luxury restaurant brand — known for creativity,
            authenticity, and a customer-first approach that turns meals into
            cherished memories.
          </p>
        </div>
      </div>

      <div className="mb-28">
        <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400">
          Our Signature Dishes
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              name: "Truffle Mushroom Risotto",
              img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
            },
            {
              name: "Classic Wood-Fired Pizza",
              img: "https://images.unsplash.com/photo-1543353071-10c8ba85a904",
            },
            {
              name: "Belgian Chocolate Mousse",
              img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
            },
          ].map((dish, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-xl group"
            >
              <img
                src={dish.img}
                alt={dish.name}
                className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="bg-black/80 p-4 text-center">
                <h3 className="text-yellow-400 font-bold text-lg">{dish.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-28">
        <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400">
          Gallery – Chefs • Kitchen • Tools • Ambience
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {gallery.map((g, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden group shadow-xl"
            >
              <img
                src={g.img}
                alt={g.title}
                className="w-full h-72 object-cover transition group-hover:scale-110 duration-500"
              />
              <div className="absolute bottom-0 w-full bg-black/70 p-4 text-center">
                <h4 className="text-yellow-400 font-semibold">{g.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400">
          Meet Our Expert Chefs
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {chefs.map((chef, i) => (
            <div
              key={i}
              className="bg-white/5 border border-gray-700 rounded-2xl p-8 text-center hover:border-yellow-400 hover:bg-yellow-400/10 transition shadow-lg"
            >
              <img
                src={chef.img}
                alt={chef.name}
                className="w-40 h-40 mx-auto rounded-full object-cover mb-5 shadow-xl"
              />

              <h3 className="text-xl font-bold text-yellow-400">
                {chef.name}
              </h3>
              <p className="text-gray-300 mt-1">{chef.exp}</p>
              <p className="text-gray-400 text-sm mt-1 italic">
                {chef.speciality}
              </p>
            </div>
          ))}
        </div>
      </div>
        <section className="py-20 text-white">
          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-14">
            Our Story Timeline
          </h2>

          <div className="border-l-4 border-yellow-400 ml-10 space-y-10">
            {[
              { year: "2010", text: "Opened our first boutique restaurant." },
              { year: "2014", text: "Awarded Best New Culinary Experience." },
              { year: "2018", text: "Expanded to multi-city presence." },
              { year: "2023", text: "Recognized as a Top Luxury Dining Brand." },
            ].map((event, i) => (
              <div key={i} className="ml-6">
                <h3 className="text-2xl text-yellow-400 font-bold">{event.year}</h3>
                <p className="text-gray-300">{event.text}</p>
              </div>
            ))}
          </div>
        </section>

        


    </section>

<AboutPage/>
    </>
  )
}

export default Restaurant
