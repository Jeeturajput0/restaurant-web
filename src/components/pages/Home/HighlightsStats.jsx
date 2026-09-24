import React from "react";
import { Download, Star } from "lucide-react";
import { appPromo, chefs, highlights, testimonials } from "../../../data/menuData";
import SectionHeading from "../../ui/SectionHeading";
import Button from "../../ui/Button";

const HighlightsStats = () => {
  return (
    <>
      <section className="py-8 sm:py-10">
        <div className="theme-container">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {highlights.map((item) => (
              <article key={item.label} className="theme-card p-5 text-center">
                <p className="text-3xl font-semibold text-slate-950">{item.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="theme-container space-y-6">
          <SectionHeading
            title="What our customer says?"
            description="Soft testimonial cards preserve the premium restaurant feel while making the content easier to scan."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="theme-card p-6">
                <div className="mb-5 flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={`${testimonial.name}-${index}`} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-7 text-slate-600">"{testimonial.review}"</p>
                <div className="mt-6">
                  <p className="text-lg font-semibold text-slate-950">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="theme-container space-y-6">
          <SectionHeading title="Meet our chefs" />

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {chefs.map((chef) => (
              <article key={chef.name} className="theme-card p-4">
                <img src={chef.image} alt={chef.name} className="h-52 w-full rounded-2xl object-cover" />
                <div className="px-1 pb-2 pt-5">
                  <h3 className="text-xl font-semibold text-slate-950">{chef.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{chef.specialty}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10 ">
        <div className="theme-container">
          <div className="grid gap-8 rounded-[2rem] bg-[#fff4df] p-6 shadow-lg sm:p-8 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:p-10">
            <div className="space-y-5">
              <SectionHeading
                title={appPromo.title}
                description={appPromo.description}
              />

              <div className="flex flex-wrap gap-4">
                <Button className="gap-2">
                  <Download className="h-4 w-4" />
                  App Store
                </Button>
                <Button variant="secondary" className="gap-2">
                  <Download className="h-4 w-4" />
                  Google Play
                </Button>
              </div>
            </div>

            <div className="mx-auto w-full max-w-sm">
              <img src={appPromo.image} alt="Mobile app preview" className="w-full rounded-[2rem] object-cover shadow-lg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HighlightsStats;
