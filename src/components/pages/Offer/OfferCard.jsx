import React from "react";
import { TicketPercent } from "lucide-react";
import { offerCards } from "../../../data/menuData";
import Button from "../../ui/Button";
import SectionHeading from "../../ui/SectionHeading";

const OfferCard = () => {
  return (
    <section className="page-section pb-20">
      <div className="theme-container space-y-10">
        <SectionHeading
          eyebrow="Offers"
          title="Fresh deals for your next order"
          description="The offer cards now follow the same soft surfaces, amber accents and rounded structure as the new global system."
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {offerCards.map((offer) => (
            <article key={offer.id} className="theme-card overflow-hidden p-4">
              <img src={offer.image} alt={offer.title} className="h-56 w-full rounded-[1.25rem] object-cover" />
              <div className="space-y-4 px-1 pb-1 pt-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-slate-950">{offer.title}</h3>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                    <TicketPercent className="h-5 w-5" />
                  </span>
                </div>
                <p className="text-sm leading-7 text-slate-600">{offer.description}</p>
                <div className="rounded-2xl border border-dashed border-amber-200 bg-amber-50/50 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Promo Code</p>
                  <p className="mt-1 text-lg font-semibold text-amber-600">{offer.code}</p>
                </div>
                <Button className="w-full">Claim Offer</Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferCard;
