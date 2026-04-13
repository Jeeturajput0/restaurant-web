import React from "react";
import { CircleAlert, CircleCheckBig, Headset } from "lucide-react";
import SectionHeading from "../../ui/SectionHeading";

const issues = [
  "Order not delivered or delayed",
  "Wrong or damaged food item",
  "Payment failure or double deduction",
  "Refund not received",
];

const steps = [
  "Raise a complaint through support or email.",
  "Our team reviews the issue with the restaurant and delivery partner.",
  "A clear resolution is shared within 24 to 48 hours.",
];

const Resolution = () => {
  return (
    <section className="page-section">
      <div className="theme-container space-y-10">
        <SectionHeading
          eyebrow="Contact"
          title="Resolution center"
          description="Support content has been restyled to feel as polished and consistent as the product pages."
        />

        <div className="grid gap-8 xl:grid-cols-[1fr_0.95fr]">
          <article className="theme-card p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">Common issues we handle</h2>
            <ul className="mt-6 space-y-4">
              {issues.map((issue) => (
                <li key={issue} className="flex items-start gap-3 text-sm leading-7 text-slate-600">
                  <CircleAlert className="mt-1 h-4 w-4 shrink-0 text-amber-500" />
                  <span>{issue}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="theme-card p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">Our resolution process</h2>
            <div className="mt-6 grid gap-4">
              {steps.map((step, index) => (
                <div key={step} className="rounded-2xl bg-amber-50/60 px-4 py-4">
                  <div className="flex items-start gap-3">
                    <CircleCheckBig className="mt-1 h-4 w-4 shrink-0 text-amber-500" />
                    <div>
                      <p className="text-sm font-semibold text-slate-950">Step {index + 1}</p>
                      <p className="mt-1 text-sm leading-7 text-slate-600">{step}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-white px-4 py-5 shadow-sm">
              <div className="flex items-center gap-3">
                <Headset className="h-5 w-5 text-amber-500" />
                <p className="font-semibold text-slate-950">Need immediate help?</p>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Contact support@eatmore.com or call +91 98765 43210 anytime.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Resolution;
