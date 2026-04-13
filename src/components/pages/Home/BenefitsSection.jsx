import React from "react";
import { CircleCheckBig, ShieldCheck, Sparkles } from "lucide-react";
import { brandAssets, serviceFeatures } from "../../../data/menuData";
import SectionHeading from "../../ui/SectionHeading";
import Button from "../../ui/Button";

const details = [
  { icon: CircleCheckBig, text: "Online Order" },
  { icon: CircleCheckBig, text: "Pre-Reservation" },
  { icon: CircleCheckBig, text: "24/7 Service" },
  { icon: ShieldCheck, text: "Organized Foodie Place" },
  { icon: ShieldCheck, text: "Clean Kitchen" },
  { icon: Sparkles, text: "Super Chefs" },
];

const BenefitsSection = () => {
  return (
    <section className="page-section">
      <div className="theme-container">
        <div className="section-grid gap-12">
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute left-8 top-10 h-48 w-48 rounded-full bg-amber-100 blur-3xl" />
            <img
              src={brandAssets.featureImage}
              alt="Chef preparing food"
              className="relative z-10 aspect-square w-full rounded-[2rem] object-cover shadow-lg"
            />
          </div>

          <div className="space-y-8">
            <SectionHeading
              eyebrow="Why Choose Us"
              title="We are more than multiple service"
              description="The design language from the reference image is carried into clean content blocks, generous spacing and softer supporting details."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {details.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.text} className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3 shadow-sm">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-slate-700">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button>About Us</Button>
              <div className="theme-pill">{serviceFeatures.length} Signature services</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
