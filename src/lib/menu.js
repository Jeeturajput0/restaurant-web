import { menuItems } from "../data/menuData";

export const priceToNumber = (price) => Number(String(price).replace(/[^0-9.]/g, "")) || 0;

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(priceToNumber(value));

export const getItemBySlug = (slug) => menuItems.find((item) => item.slug === slug);
