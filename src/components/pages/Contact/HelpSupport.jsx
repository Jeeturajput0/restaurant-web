import React from "react";
import {
  FaShoppingCart,
  FaMoneyCheckAlt,
  FaUndoAlt,
  FaUserCog,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const HelpSupport = () => {
  return (
    <div className="min-h-screen bg-black text-gray-300 px-6 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
       
        <div className="bg-[#111] border border-yellow-400/30 rounded-xl p-6">
          <h2 className="text-xl font-bold text-yellow-400 mb-6">
            Help Topics
          </h2>

          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3 cursor-pointer hover:text-yellow-400">
              <FaShoppingCart /> Order Problems
            </li>
            <li className="flex items-center gap-3 cursor-pointer hover:text-yellow-400">
              <FaMoneyCheckAlt /> Payment Issues
            </li>
            <li className="flex items-center gap-3 cursor-pointer hover:text-yellow-400">
              <FaUndoAlt /> Refund Status
            </li>
            <li className="flex items-center gap-3 cursor-pointer hover:text-yellow-400">
              <FaUserCog /> Account & Login
            </li>
          </ul>
        </div>

        <div className="md:col-span-2 bg-[#111] border border-yellow-400/30 rounded-xl p-8">
          <h1 className="text-3xl font-extrabold text-yellow-400">
            Help & Support Center
          </h1>
          <p className="text-gray-400 mt-2">
            Get quick help related to your orders, payments, and account.
          </p>

          <div className="mt-8 space-y-6">
            <div className="border border-gray-700 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-white">
                How we resolve issues
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                Our support team reviews your issue and connects with the
                restaurant or delivery partner to resolve it within 24-48 hours.
              </p>
            </div>

            <div className="border border-gray-700 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-white">
                Resolution Time
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                Most issues are resolved within 24 hours. Refund-related issues
                may take up to 5 business days.
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-yellow-400/20 pt-6">
            <h3 className="text-lg font-semibold text-yellow-400 mb-3">
              Contact Support
            </h3>

            <p className="flex items-center gap-3 text-sm">
              <FaEnvelope className="text-yellow-400" />
              support@eatmore.com
            </p>
            <p className="flex items-center gap-3 text-sm mt-2">
              <FaPhoneAlt className="text-yellow-400" />
              +91 98765 43210
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
