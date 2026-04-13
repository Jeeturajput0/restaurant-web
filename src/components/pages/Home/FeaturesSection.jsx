import React from "react";
import { Bike, ClipboardList, Soup, Smile } from "lucide-react";
import SectionHeading from "../../ui/SectionHeading";

const steps = [
  {
    icon: Soup,
    title: "Choose Food",
    description: "Browse the menu and pick your favorite dishes with a clearer product-first layout.",
  },
  {
    icon: ClipboardList,
    title: "Place Order",
    description: "Add dishes to your cart and review them in a cleaner checkout experience.",
  },
  {
    icon: Bike,
    title: "Fast Delivery",
    description: "Track a reliable timeline for freshly prepared meals from kitchen to door.",
  },
  {
    icon: Smile,
    title: "Enjoy Food",
    description: "Relax into a premium dining feel with warm colors and easy interactions.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="page-section">
      <div className="theme-container space-y-10">
        <SectionHeading
          eyebrow="How It Works"
          title="Simple steps from craving to checkout"
          description="The homepage now mirrors the mockup: soft cards, rounded corners, light surfaces and a calm visual rhythm."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article key={step.title} className="theme-card p-6">
                <div className="mb-5 flex items-center justify-between">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-500">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-semibold text-slate-400">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
