import React from "react";
import { Link } from "react-router-dom";
import { LockKeyhole, Mail } from "lucide-react";
import Button from "../ui/Button";
import Field from "../ui/Field";

const Login = () => {
  return (
    <section className="page-section pb-20">
      <div className="theme-container">
        <div className="mx-auto max-w-md theme-card p-6 sm:p-8">
          <div className="text-center">
            <span className="theme-pill">Welcome Back</span>
            <h1 className="mt-4 text-3xl font-semibold text-slate-950">Login to your account</h1>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              The auth flow now matches the same global input, card and button system.
            </p>
          </div>

          <form className="mt-8 space-y-5">
            <div className="relative">
              <Mail className="pointer-events-none absolute left-4 top-[3.1rem] h-4 w-4 text-slate-400" />
              <Field label="Email" type="email" placeholder="you@example.com" className="pl-11" />
            </div>

            <div className="relative">
              <LockKeyhole className="pointer-events-none absolute left-4 top-[3.1rem] h-4 w-4 text-slate-400" />
              <Field label="Password" type="password" placeholder="Enter password" className="pl-11" />
            </div>

            <div className="flex justify-end">
              <Link to="/signup" className="text-sm font-medium text-amber-600">
                Need an account?
              </Link>
            </div>

            <Button type="button" className="w-full">
              Login
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            New here?{" "}
            <Link to="/signup" className="font-medium text-amber-600">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
