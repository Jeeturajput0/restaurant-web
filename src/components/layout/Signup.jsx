import React from "react";
import { FaUser, FaEnvelope, FaLock, FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-[#111] border border-yellow-400/30 rounded-2xl w-full max-w-md p-8 shadow-xl">

        <h2 className="text-3xl font-extrabold text-yellow-400 text-center">
          Create Account
        </h2>
        <p className="text-gray-400 text-sm text-center mt-2">
          Join EatMore & grow your restaurant
        </p>

        <form className="mt-8 space-y-4">

          <div>
            <label className="text-sm text-gray-400">Full Name</label>
            <div className="flex items-center bg-black border border-gray-700 rounded-lg px-3 mt-1">
              <FaUser className="text-gray-500" />
              <input
                type="text"
                placeholder="Restaurant Owner Name"
                className="bg-transparent outline-none px-3 py-2 text-gray-200 w-full"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-400">Email</label>
            <div className="flex items-center bg-black border border-gray-700 rounded-lg px-3 mt-1">
              <FaEnvelope className="text-gray-500" />
              <input
                type="email"
                placeholder="you@example.com"
                className="bg-transparent outline-none px-3 py-2 text-gray-200 w-full"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-400">Phone</label>
            <div className="flex items-center bg-black border border-gray-700 rounded-lg px-3 mt-1">
              <FaPhoneAlt className="text-gray-500" />
              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="bg-transparent outline-none px-3 py-2 text-gray-200 w-full"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-400">Password</label>
            <div className="flex items-center bg-black border border-gray-700 rounded-lg px-3 mt-1">
              <FaLock className="text-gray-500" />
              <input
                type="password"
                placeholder="••••••••"
                className="bg-transparent outline-none px-3 py-2 text-gray-200 w-full"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold py-2 rounded-lg hover:bg-yellow-300 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-gray-400 text-center mt-6">
          Already have an account?{" "}
          <button onClick={()=>navigate("/login")} className="text-yellow-400 hover:underline">
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
