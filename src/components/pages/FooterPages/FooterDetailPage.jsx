import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "../../ui/SectionHeading";
import Button from "../../ui/Button";
import { footerPageContent, footerPageLinks } from "./footerPagesData";

const fallbackPage = {
  eyebrow: "Information",
  title: "Restaurant Information",
  description: "Explore service details, support information and helpful restaurant resources.",
  sections: [],
};

const FooterDetailPage = () => {
  const { pathname } = useLocation();
  const page = footerPageContent[pathname] || fallbackPage;
  const relatedLinks = footerPageLinks.filter((link) => link.path !== pathname).slice(0, 6);

  return (
    <section className="page-section pb-20">
      <div className="theme-container space-y-10">
        <div className="rounded-[2rem] bg-white/85 p-6 shadow-lg sm:p-8 lg:p-10">
          <SectionHeading eyebrow={page.eyebrow} title={page.title} description={page.description} />
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-6">
            {page.sections.map((section) => (
              <article key={section.title} className="theme-card p-6 sm:p-8">
                <h2 className="text-2xl font-semibold text-slate-950">{section.title}</h2>
                <div className="mt-5 grid gap-4">
                  {section.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-amber-50/60 px-4 py-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                      <p className="text-sm leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <aside className="space-y-6">
            <article className="theme-card p-6 sm:p-8">
              <h3 className="text-2xl font-semibold text-slate-950">Explore more links</h3>
              <div className="mt-6 grid gap-3">
                {relatedLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="flex items-center justify-between rounded-2xl border border-amber-100 bg-white px-4 py-4 text-sm font-medium text-slate-700 shadow-sm transition hover:border-amber-300 hover:text-amber-600"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </article>

            <article className="theme-card p-6 sm:p-8">
              <h3 className="text-2xl font-semibold text-slate-950">Take action</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Continue exploring the restaurant experience through ordering, booking and support pages.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button as={Link} to="/menu">
                  Explore Menu
                </Button>
                <Button as={Link} to="/checkout" variant="secondary">
                  Reserve Table
                </Button>
              </div>
            </article>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default FooterDetailPage;
