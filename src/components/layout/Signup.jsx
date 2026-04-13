import React from "react";
import { Link } from "react-router-dom";
import { LockKeyhole, Mail, Phone, User } from "lucide-react";
import Button from "../ui/Button";
import Field from "../ui/Field";

const Signup = () => {
  return (
    <section className="page-section pb-20">
      <div className="theme-container">
        <div className="mx-auto max-w-md theme-card p-6 sm:p-8">
          <div className="text-center">
            <span className="theme-pill">Create Account</span>
            <h1 className="mt-4 text-3xl font-semibold text-slate-950">Join the restaurant experience</h1>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Cleaner forms, softer shadows and a more premium layout now carry through signup too.
            </p>
          </div>

          <form className="mt-8 space-y-5">
            <div className="relative">
              <User className="pointer-events-none absolute left-4 top-[3.1rem] h-4 w-4 text-slate-400" />
              <Field label="Full Name" placeholder="Restaurant guest name" className="pl-11" />
            </div>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-4 top-[3.1rem] h-4 w-4 text-slate-400" />
              <Field label="Email" type="email" placeholder="you@example.com" className="pl-11" />
            </div>
            <div className="relative">
              <Phone className="pointer-events-none absolute left-4 top-[3.1rem] h-4 w-4 text-slate-400" />
              <Field label="Phone" type="tel" placeholder="+1 234 567 890" className="pl-11" />
            </div>
            <div className="relative">
              <LockKeyhole className="pointer-events-none absolute left-4 top-[3.1rem] h-4 w-4 text-slate-400" />
              <Field label="Password" type="password" placeholder="Create password" className="pl-11" />
            </div>

            <Button type="button" className="w-full">
              Sign Up
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-amber-600">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
