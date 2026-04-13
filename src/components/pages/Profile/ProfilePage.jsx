import React from "react";
import { Bell, Clock3, Heart, MapPin, User } from "lucide-react";
import Button from "../../ui/Button";
import SectionHeading from "../../ui/SectionHeading";

const profileStats = [
  { label: "Orders", value: "28" },
  { label: "Favorites", value: "12" },
  { label: "Reservations", value: "06" },
];

const recentOrders = [
  "Marinated Grilled Shrimp",
  "Double Chocolate Cupcakes",
  "Tomato Bruschetta",
];

const ProfilePage = () => {
  return (
    <section className="page-section pb-20">
      <div className="theme-container space-y-10">
        <SectionHeading
          eyebrow="Profile"
          title="Manage your dining preferences"
          description="A lightweight profile page keeps the same warm restaurant design language and rounded card treatment."
        />

        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <article className="theme-card p-6 sm:p-8">
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <User className="h-9 w-9" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-slate-950">Aarav Sharma</h2>
                <p className="mt-1 text-sm text-slate-500">Premium dining member</p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {profileStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-amber-50 px-4 py-4 text-center">
                  <p className="text-2xl font-semibold text-slate-950">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-amber-500" />
                21 Palm Avenue, New Delhi
              </div>
              <div className="flex items-center gap-3">
                <Clock3 className="h-4 w-4 text-amber-500" />
                Prefers dinner reservations between 7:30 PM and 9:00 PM
              </div>
              <div className="flex items-center gap-3">
                <Bell className="h-4 w-4 text-amber-500" />
                Newsletter and order updates enabled
              </div>
            </div>
          </article>

          <div className="space-y-6">
            <article className="theme-card p-6 sm:p-8">
              <h3 className="text-2xl font-semibold text-slate-950">Recent favorites</h3>
              <div className="mt-6 space-y-4">
                {recentOrders.map((order) => (
                  <div key={order} className="flex items-center justify-between rounded-2xl bg-white px-4 py-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <Heart className="h-4 w-4 text-amber-500" />
                      <span className="font-medium text-slate-800">{order}</span>
                    </div>
                    <Button variant="secondary" className="px-4 py-2">
                      Reorder
                    </Button>
                  </div>
                ))}
              </div>
            </article>

            <article className="theme-card p-6 sm:p-8">
              <h3 className="text-2xl font-semibold text-slate-950">Account actions</h3>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button>Edit Profile</Button>
                <Button variant="secondary">Manage Address</Button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
