import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-[#111] border border-yellow-400/30 rounded-2xl w-full max-w-md p-8 shadow-xl">
        <h2 className="text-3xl font-extrabold text-yellow-400 text-center">
          EatMore Login
        </h2>
        <p className="text-gray-400 text-sm text-center mt-2">
          Login to your restaurant account
        </p>
        <form className="mt-8 space-y-5">
          <div>
            <label className="text-sm text-gray-400">Email</label>
            <div className="flex items-center bg-black border border-gray-700 rounded-lg px-3 mt-1">
              <FaEnvelope className="text-gray-500" />
              <input
                type="name
                "
                placeholder="you@example.com"
                className="bg-transparent outline-none px-3 py-2 text-gray-200 w-full"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-gray-400">Password</label>
            <div className="flex items-center bg-black border border-gray-700 rounded-lg px-3 mt-1">
              <FaLock className="text-gray-500" />
              <input
                type="number"
                placeholder="••••••••"
                className="bg-transparent outline-none px-3 py-2 text-gray-200 w-full"
              />
            </div>
          </div>
          <div className="text-right">
            <button onClick={()=>navigate("/forgot-password")}
              className="text-sm text-yellow-400 hover:underline"
            >
              Forgot Password?
            </button>
          </div>
          <button onClick={()=>navigate("/home")}
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold py-2 rounded-lg hover:bg-yellow-300 transition"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-gray-400 text-center mt-6">
          Don’t have an account?{" "}
          <button onClick={()=> navigate("/register")}
            className="text-yellow-400 hover:underline"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
