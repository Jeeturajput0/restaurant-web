import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const navigation=useNavigate()
  const restaurantLinks = [
    { name: "Partner with - Us", path: "/partner" },
    { name: "Add Your Restaurant", path: "/add-restaurant" },
    { name: "Restaurant App", path: "/restaurant-app" },
    { name: "Business Support", path: "/support"  },
  ];

  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
  ];

  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">


        <div>
          <h2 className="text-3xl font-extrabold text-yellow-400">
            EatMore
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            EatMore helps small and large restaurants grow their business,
            reach more customers, and deliver happiness faster.
          </p>
        </div>


        <div>
          <h3 className="text-yellow-400 font-semibold mb-4">
            For Restaurants
          </h3>
          <ul className="space-y-3 text-sm">
            {restaurantLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="hover:text-yellow-400 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        <div>
          <h3 className="text-yellow-400 font-semibold mb-4">
            Company
          </h3>
          <ul className="space-y-3 text-sm">
            {companyLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="hover:text-yellow-400 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        <div>
          <h3 className="text-yellow-400 font-semibold mb-4">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400" />
              jeeturajput0302@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-400" />
              +91 7817875621
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-yellow-400" />
              India
            </li>
          </ul>

          <div className="flex gap-5 mt-5 text-yellow-400">
            <FaFacebook className="cursor-pointer hover:text-white transition" />
            <FaInstagram className="cursor-pointer hover:text-white transition" />
            <FaTwitter className="cursor-pointer hover:text-white transition" />
          </div>
        </div>
      </div>

      <div className="border-t border-yellow-400/30 py-4 text-center text-sm text-gray-500">
        © 2026
        <span className="text-yellow-400 font-semibold">
          EatMore
        </span>
        . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
