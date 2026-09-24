import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Facebook, Instagram, Youtube, LayoutDashboard } from "lucide-react";
import { brandAssets } from "../../data/menuData";
import Field from "../ui/Field";
import { footerPageLinks } from "../pages/FooterPages/footerPagesData";

const footerGroups = [
  {
    title: "Service",
    links: ["Online Order", "Pre-Reservation", "24/7 Services", "Foodie Place", "Super Chefs"],
  },
  {
    title: "Quick Links",
    links: ["Menu", "Reviews", "Blogs", "Reserve Table", "Order Foods"],
  },
  {
    title: "About",
    links: ["Our Story", "Benefits", "Career", "Our Chefs"],
  },
  {
    title: "Help",
    links: ["Contact", "Support", "FAQ"],
  },
];

const getFooterPath = (label) => footerPageLinks.find((link) => link.label === label)?.path || "/";

const Footer = () => {
  return (
    <footer className="relative z-10 pb-10 pt-6">
      <div className="theme-container">
        <div className="rounded-[2rem] border border-amber-100 bg-white/75 p-6 shadow-md backdrop-blur sm:p-8 lg:p-10">
          <div className="flex flex-col gap-10 border-b border-amber-100 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-md space-y-4">
              <div className="flex items-center gap-3">
                <img src={brandAssets.logo} alt="EatMore" className="h-10 w-10 rounded-full object-cover" />
                <span className="text-xl font-semibold text-slate-950">EatMore</span>
              </div>
              <h3 className="text-3xl font-semibold text-slate-950">Subscribe Our Newsletter</h3>
              <p className="text-sm leading-7 text-slate-600">
                Fresh menu drops, chef specials and reservation updates delivered in a cleaner premium style.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Field placeholder="Enter your email" className="min-w-0" />
                <button
                  type="button"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-white shadow-md transition hover:scale-105 hover:shadow-lg"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="flex items-center gap-3">
                {[Facebook, Instagram, Youtube].map((Icon) => (
                  <button
                    key={Icon.name}
                    type="button"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-amber-100 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:text-amber-600"
                  >
                    <Icon className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </div>

            <div className="grid flex-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {footerGroups.map((group) => (
                <div key={group.title}>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-950">
                    {group.title}
                  </h4>
                  <ul className="mt-4 space-y-3 text-sm text-slate-600">
                    {group.links.map((link) => (
                      <li key={link}>
                        <Link to={getFooterPath(link)} className="transition hover:text-amber-600">
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 EatMore. Fresh, fast & delicious — order your favourite food online.</p>
            <div className="flex flex-wrap items-center gap-5">
              <Link to={getFooterPath("Privacy")} className="transition hover:text-amber-600">
                Privacy
              </Link>
              <Link to={getFooterPath("Terms")} className="transition hover:text-amber-600">
                Terms
              </Link>
              <Link to={getFooterPath("Support")} className="transition hover:text-amber-600">
                Support
              </Link>
              <Link
                to="/admin/dashboard"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-500"
              >
                <LayoutDashboard className="h-4 w-4" />
                Admin Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
