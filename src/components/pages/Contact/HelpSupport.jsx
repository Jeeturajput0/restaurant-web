import React from "react";
import { CreditCard, Mail, Phone, RefreshCcw, ShoppingCart, UserRoundCog } from "lucide-react";
import Field from "../../ui/Field";
import Button from "../../ui/Button";

const topics = [
  { icon: ShoppingCart, label: "Order Problems" },
  { icon: CreditCard, label: "Payment Issues" },
  { icon: RefreshCcw, label: "Refund Status" },
  { icon: UserRoundCog, label: "Account & Login" },
];

const HelpSupport = () => {
  return (
    <section className="page-section pb-20">
      <div className="theme-container">
        <div className="grid gap-8 xl:grid-cols-[0.8fr_1.2fr]">
          <aside className="theme-card p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">Help topics</h2>
            <div className="mt-6 grid gap-3">
              {topics.map((topic) => {
                const Icon = topic.icon;

                return (
                  <button
                    key={topic.label}
                    type="button"
                    className="flex items-center gap-3 rounded-2xl border border-amber-100 bg-white px-4 py-4 text-left text-sm font-medium text-slate-700 shadow-sm transition hover:border-amber-300 hover:text-amber-600"
                  >
                    <Icon className="h-4 w-4" />
                    {topic.label}
                  </button>
                );
              })}
            </div>
          </aside>

          <div className="theme-card p-6 sm:p-8">
            <h2 className="text-3xl font-semibold text-slate-950">Help & support center</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              Get quick help related to your orders, payments and account from a cleaner support form.
            </p>

            <form className="mt-8 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" placeholder="Enter your name" />
                <Field label="Email" type="email" placeholder="you@example.com" />
              </div>
              <Field label="Topic" as="select" defaultValue="Order Problems">
                {topics.map((topic) => (
                  <option key={topic.label} value={topic.label}>
                    {topic.label}
                  </option>
                ))}
              </Field>
              <Field label="Message" as="textarea" rows="5" placeholder="Describe your issue" />
              <Button type="button">Submit Request</Button>
            </form>

            <div className="mt-8 flex flex-col gap-3 rounded-2xl bg-amber-50/60 px-5 py-5 text-sm text-slate-600">
              <p className="inline-flex items-center gap-3">
                <Mail className="h-4 w-4 text-amber-500" />
                support@eatmore.com
              </p>
              <p className="inline-flex items-center gap-3">
                <Phone className="h-4 w-4 text-amber-500" />
                +91 98765 43210
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSupport;
