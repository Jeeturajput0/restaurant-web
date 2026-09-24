import React from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { heroContent } from "../../../data/menuData";
import Button from "../../ui/Button";

const Banner = () => {
  return (
    <section className="pb-6 pt-8 sm:pb-8 sm:pt-10">
      <div className="theme-container">
        <div className="section-grid gap-8">
          <div className="space-y-5">
            <span className="theme-pill">{heroContent.badge}</span>

            <div className="space-y-4">
              <h1 className="max-w-xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                {heroContent.title} <span className="text-amber-500"></span>
              </h1>
              <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">{heroContent.description}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button as={Link} to="/menu">
                Explore Food
              </Button>
              <Button as={Link} to="/menu" variant="secondary" className="gap-2">
                <Search className="h-4 w-4" />
                Search
              </Button>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1fr_150px] lg:items-center">
            <div className="relative mx-auto w-full max-w-[24rem]">
              <div className="absolute inset-4 rounded-full bg-amber-100 blur-3xl" />
              <div className="relative overflow-hidden rounded-full border-[14px] border-white bg-white p-4 shadow-[0_35px_80px_rgba(245,158,11,0.18)]">
                <img
                  src={heroContent.image}
                  alt="Signature dish"
                  className="aspect-square w-full rounded-full object-cover"
                />
              </div>
            </div>

            <div className="grid gap-3">
              {heroContent.quickTags.map((tag) => (
                <div
                  key={tag.label}
                  className="flex items-center gap-3 rounded-2xl border border-amber-100 bg-white/85 px-4 py-3 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-white shadow-sm ${tag.tone}`}
                  >
                    <img src={tag.image} alt={tag.label} className="h-7 w-7 rounded-full object-cover" />
                  </span>
                  <span className="text-sm font-medium text-slate-700">{tag.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
