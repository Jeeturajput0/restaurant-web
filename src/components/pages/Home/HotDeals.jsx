import React from "react";
import { useCart } from "../../../context/CartContext";
import { menuItems, menuCategories } from "../../../data/menuData";
import ProductCard from "../../ui/ProductCard";
import SectionHeading from "../../ui/SectionHeading";

const HotDeals = () => {
  const { addToCart } = useCart();

  return (
    <section className="py-8 sm:py-10">
      <div className="theme-container space-y-6">
        <SectionHeading
          align="center"
          eyebrow="Popular Dishes"
          title="Our regular menu pack"
          description="Featured dishes are now presented in consistent premium cards inspired by the reference image."
        />

        <div className="flex flex-wrap justify-center gap-3">
          {menuCategories.slice(1, 8).map((category, index) => (
            <button
              key={category}
              type="button"
              className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
                index === 2
                  ? "border-amber-400 bg-amber-500 text-white shadow-md"
                  : "border-amber-200 bg-white text-slate-700 hover:border-amber-300 hover:text-amber-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {menuItems.slice(0, 4).map((item) => (
            <ProductCard key={item.id} item={item} onAddToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotDeals;
