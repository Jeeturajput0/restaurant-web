import React from "react";
import {
  FaExclamationCircle,
  FaCheckCircle,
  FaHeadset,
} from "react-icons/fa";

const Resolution = () => {
  return (
    <div className="min-h-screen bg-black text-gray-300 px-6 py-14">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-extrabold text-yellow-400 text-center">
          Resolution Center
        </h1>
        <p className="text-center text-gray-400 mt-3">
          We are here to resolve your issues quickly and fairly
        </p>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-6">
            Common Issues We Handle
          </h2>

          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <FaExclamationCircle className="text-yellow-400" />
              Order not delivered or delayed
            </li>
            <li className="flex items-center gap-3">
              <FaExclamationCircle className="text-yellow-400" />
              Wrong or damaged food item
            </li>
            <li className="flex items-center gap-3">
              <FaExclamationCircle className="text-yellow-400" />
              Payment failure or double deduction
            </li>
            <li className="flex items-center gap-3">
              <FaExclamationCircle className="text-yellow-400" />
              Refund not received
            </li>
          </ul>
        </div>

        <div className="mt-14">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-6">
            Our Resolution Process
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-yellow-400/30 rounded-xl p-5">
              <FaCheckCircle className="text-yellow-400 text-2xl mb-3" />
              <h3 className="font-semibold text-white">Step 1</h3>
              <p className="text-sm text-gray-400 mt-2">
                Raise a complaint through support or email.
              </p>
            </div>

            <div className="border border-yellow-400/30 rounded-xl p-5">
              <FaCheckCircle className="text-yellow-400 text-2xl mb-3" />
              <h3 className="font-semibold text-white">Step 2</h3>
              <p className="text-sm text-gray-400 mt-2">
                Our team reviews the issue with restaurant & delivery partner.
              </p>
            </div>

            <div className="border border-yellow-400/30 rounded-xl p-5">
              <FaCheckCircle className="text-yellow-400 text-2xl mb-3" />
              <h3 className="font-semibold text-white">Step 3</h3>
              <p className="text-sm text-gray-400 mt-2">
                Resolution provided within 24–48 hours.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-[#111] border border-yellow-400/30 rounded-xl p-8 text-center">
          <FaHeadset className="text-yellow-400 text-3xl mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-white">
            Need Immediate Help?
          </h2>
          <p className="text-gray-400 mt-2">
            Contact our support team anytime
          </p>

          <p className="mt-4 text-sm">
            📧 support@eatmore.com <br />
            📞 +91 98765 43210
          </p>
        </div>

      </div>
    </div>
  );
};

export default Resolution;
