import { menuItems } from "../data/menuData";

export const priceToNumber = (price) => Number(String(price).replace(/[^0-9.]/g, "")) || 0;

export const formatCurrency = (value) => `$${Number(value).toFixed(2)}`;

export const getItemBySlug = (slug) => menuItems.find((item) => item.slug === slug);
