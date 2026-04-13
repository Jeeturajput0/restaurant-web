import React from "react";
import { CalendarDays, Clock3, PartyPopper, UtensilsCrossed } from "lucide-react";
import Button from "../../ui/Button";
import SectionHeading from "../../ui/SectionHeading";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Custom Food Orders",
    description: "Flexible ordering with a clean product detail and checkout flow.",
  },
  {
    icon: PartyPopper,
    title: "Private Events",
    description: "A softer reservation style suited for dinners, celebrations and groups.",
  },
  {
    icon: CalendarDays,
    title: "Table Booking",
    description: "Warm call-to-actions encourage reservations without overcomplicating the interface.",
  },
  {
    icon: Clock3,
    title: "24/7 Support",
    description: "Support content is now presented in clearer card sections and readable form blocks.",
  },
];

const AboutPage = () => {
  return (
    <section className="page-section pb-20">
      <div className="theme-container space-y-10">
        <div className="rounded-[2rem] bg-white p-6 shadow-lg sm:p-8 lg:p-10">
          <SectionHeading
            eyebrow="Reserve Experience"
            title="Limited tables available for your next premium dinner"
            description="A cleaner promotional section inspired by the mockup keeps the message prominent while staying aligned with the overall design system."
          />
          <Button className="mt-6">Book A Table</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article key={service.title} className="theme-card p-6">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-500">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
