import React, { useEffect, useMemo, useState } from "react";
import { useCart } from "../../../context/CartContext";
import { menuCategories, menuItems } from "../../../data/menuData";
import ProductCard from "../../ui/ProductCard";
import SectionHeading from "../../ui/SectionHeading";
import { getProducts } from "../../../lib/api";

const Menu = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState("All");
  const [adminItems, setAdminItems] = useState([]);

  useEffect(() => {
    getProducts().then(setAdminItems).catch(() => setAdminItems([]));
  }, []);

  const allItems = useMemo(() => [...adminItems, ...menuItems], [adminItems]);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return allItems;
    }

    return allItems.filter((item) => item.category === activeCategory);
  }, [activeCategory, allItems]);

  return (
    <section className="page-section pb-20">
      <div className="theme-container space-y-10">
        <SectionHeading
          eyebrow="Product Listing"
          title="Curated menu for every craving"
          description="This page now acts as the product listing screen with reusable filters, premium cards and responsive spacing."
        />

        <div className="flex flex-wrap gap-3">
          {menuCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                activeCategory === category
                  ? "border-amber-500 bg-amber-500 text-white shadow-md"
                  : "border-amber-200 bg-white text-slate-700 hover:border-amber-300 hover:text-amber-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredItems.map((item) => (
            <ProductCard key={item.id} item={item} onAddToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
