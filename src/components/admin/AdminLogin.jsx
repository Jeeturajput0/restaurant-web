import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Store, Eye, EyeOff, LogIn, ArrowLeft } from "lucide-react";
import { useStore } from "../../context/StoreContext";

const AdminLogin = () => {
  const { adminLogin } = useStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = adminLogin(email, password);
    setLoading(false);
    if (res.ok) navigate("/admin/dashboard", { replace: true });
    else setError(res.error);
  };

  const fillDemo = () => {
    setEmail("admin123@email.com");
    setPassword("Admin@123");
    setError("");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#faf7f1] p-4">
      <div className="w-full max-w-md">
        <Link to="/" className="mb-4 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-amber-600">
          <ArrowLeft className="h-4 w-4" /> Back to website
        </Link>
        <form onSubmit={submit} className="rounded-3xl border border-amber-100 bg-white p-6 shadow-xl sm:p-8">
          <div className="flex flex-col items-center text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-amber-400">
              <Store className="h-7 w-7" />
            </span>
            <p className="theme-pill mt-4">Admin access</p>
            <h1 className="mt-2 text-2xl font-bold text-slate-900">EatMore Dashboard Login</h1>
            <p className="mt-1.5 text-sm text-slate-500">Sign in to manage orders, menu, revenue & more.</p>
          </div>

          <div className="mt-6 grid gap-4">
            <label className="text-sm font-medium text-slate-700">Email address
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="admin123@email.com" className="theme-input mt-1.5" autoComplete="username" />
            </label>
            <label className="text-sm font-medium text-slate-700">Password
              <span className="relative mt-1.5 block">
                <input type={show ? "text" : "password"} required value={password} onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password" className="theme-input pr-12" autoComplete="current-password" />
                <button type="button" onClick={() => setShow((s) => !s)} aria-label={show ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-amber-600">
                  {show ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </span>
            </label>
          </div>

          {error ? <p className="mt-4 rounded-xl bg-red-50 px-4 py-2.5 text-sm font-medium text-red-600">{error}</p> : null}

          <button type="submit" disabled={loading}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 py-3 text-sm font-bold text-white shadow-md transition hover:bg-amber-600 disabled:opacity-60">
            <LogIn className="h-4 w-4" /> {loading ? "Signing in..." : "Sign in to Dashboard"}
          </button>

          <button type="button" onClick={fillDemo}
            className="mt-3 w-full rounded-xl border border-dashed border-amber-300 bg-amber-50/60 px-4 py-2.5 text-xs font-semibold text-amber-700 transition hover:bg-amber-50">
            Demo credentials bharo: admin123@email.com / Admin@123
          </button>
        </form>
        <p className="mt-4 text-center text-xs text-slate-400">Protected area — sirf restaurant admin ke liye.</p>
      </div>
    </div>
  );
};

export default AdminLogin;
