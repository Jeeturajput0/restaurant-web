import React from "react";
import { Award, ChefHat, Sparkles } from "lucide-react";
import { chefs } from "../../../data/menuData";
import AboutPage from "./About";
import SectionHeading from "../../ui/SectionHeading";

const values = [
  {
    icon: ChefHat,
    title: "Curated Menu",
    description: "A balanced menu architecture with cleaner product browsing and warm visual hierarchy.",
  },
  {
    icon: Award,
    title: "Premium Service",
    description: "Soft cards and generous spacing make every section feel considered and restaurant-led.",
  },
  {
    icon: Sparkles,
    title: "Consistent UI",
    description: "Buttons, forms, cards and surfaces now share a single design system everywhere.",
  },
];

const Restaurant = () => {
  return (
    <>
      <section className="page-section">
        <div className="theme-container space-y-10">
          <SectionHeading
            eyebrow="About Restaurant"
            title="Crafting memorable dining experiences with a unified premium frontend"
            description="This page now mirrors the light, warm and polished direction of the reference image instead of the previous high-contrast dark presentation."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article key={value.title} className="theme-card p-6">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-500">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold text-slate-950">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{value.description}</p>
                </article>
              );
            })}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {chefs.map((chef) => (
              <article key={chef.name} className="theme-card p-4">
                <img src={chef.image} alt={chef.name} className="h-72 w-full rounded-[1.5rem] object-cover" />
                <div className="px-1 pb-2 pt-5">
                  <h3 className="text-xl font-semibold text-slate-950">{chef.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{chef.specialty}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AboutPage />
    </>
  );
};

export default Restaurant;
