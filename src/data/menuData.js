import bannerImage from "../assets/bannerlogo.jpg";
import featureImage from "../assets/food-1.jpg";
import reservationImage from "../assets/food-2.jpg";
import appShowcaseImage from "../assets/food-3.jpg";
import chefSpotlightImage from "../assets/jonery.jpg";
import logo from "../assets/logo.png";

import food1 from "../assets/food1.jpg";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.jpg";
import food4 from "../assets/food4.jpg";
import food5 from "../assets/food5.jpg";
import food6 from "../assets/food6.jpg";
import food7 from "../assets/food7.jpg";
import food8 from "../assets/food8.jpg";
import food9 from "../assets/food9.jpg";
import food10 from "../assets/food10.jpg";
import food11 from "../assets/food11.jpg";
import food12 from "../assets/food12.jpg";
import food13 from "../assets/food13.jpg";
import food14 from "../assets/food14.jpg";
import food15 from "../assets/food15.jpg";
import food16 from "../assets/food16.jpg";
import food17 from "../assets/food17.jpg";
import food18 from "../assets/food18.jpg";

import gallery1 from "../assets/gallery-2-1.jpg";
import gallery2 from "../assets/gallery-2-2.jpg";
import gallery3 from "../assets/gallery-2-3.jpg";
import gallery4 from "../assets/gallery-2-4.jpg";
import gallery5 from "../assets/gallery-2-5.jpg";
import gallery6 from "../assets/gallery-2-6.jpg";
import gallery7 from "../assets/gallery-2-7.jpg";
import gallery8 from "../assets/gallery-2-8.jpg";
import gallery9 from "../assets/gallery-2-9.jpg";
import gallery10 from "../assets/gallery-2-10.jpg";
import gallery11 from "../assets/gallery-2-11.jpg";
import gallery12 from "../assets/gallery-2-12.jpg";

import offer11 from "../assets/offer1.1.jpg";
import offer12 from "../assets/offer1.2.jpeg";
import offer13 from "../assets/offer1.3.jpeg";
import offer21 from "../assets/offer2.1.jpeg";
import offer22 from "../assets/offer2.2.jpeg";
import offer23 from "../assets/offer2.3.jpg";

const createSlug = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const rawMenuItems = [
  {
    name: "Tomato Bruschetta",
    description: "Tomatoes, olive oil, herbs and whipped ricotta on toasted bread.",
    price: "$14.00",
    image: food1,
    category: "Special Foods",
    rating: 4.8,
    deliveryTime: "15-20 min",
    badge: "Chef Pick",
  },
  {
    name: "Avocado Mango Salsa",
    description: "A bright and zesty salad bowl with creamy avocado and ripe mango.",
    price: "$16.00",
    image: food2,
    category: "Italian",
    rating: 4.7,
    deliveryTime: "20 min",
    badge: "Fresh",
  },
  {
    name: "Marinated Grilled Shrimp",
    description: "Smoky grilled shrimp plated with citrus dressing and greens.",
    price: "$22.00",
    image: food3,
    category: "Japanese",
    rating: 4.9,
    deliveryTime: "25 min",
    badge: "Best Seller",
  },
  {
    name: "Baked Potato Skins",
    description: "Crispy potato skins with garlic butter and melted cheese.",
    price: "$12.00",
    image: food4,
    category: "Snacks",
    rating: 4.6,
    deliveryTime: "15 min",
  },
  {
    name: "Braised Pork Chops",
    description: "Slow-braised chops with caramelized onions and rosemary jus.",
    price: "$24.00",
    image: food5,
    category: "Lunch",
    rating: 4.8,
    deliveryTime: "30 min",
  },
  {
    name: "Prime Rib",
    description: "Tender prime rib served with roast vegetables and house sauce.",
    price: "$28.00",
    image: food6,
    category: "Special Foods",
    rating: 4.9,
    deliveryTime: "30-35 min",
  },
  {
    name: "Coconut Fried Chicken",
    description: "Golden fried chicken with coconut seasoning and lime aioli.",
    price: "$19.00",
    image: food7,
    category: "Lunch",
    rating: 4.7,
    deliveryTime: "20-25 min",
  },
  {
    name: "Sriracha Beef Skewers",
    description: "Charred beef skewers glazed with sweet heat and sesame.",
    price: "$18.00",
    image: food8,
    category: "Snacks",
    rating: 4.8,
    deliveryTime: "20 min",
  },
  {
    name: "Chicken With Garlic Tomatoes",
    description: "Juicy chicken simmered in garlic tomato sauce and herbs.",
    price: "$21.00",
    image: food9,
    category: "Italian",
    rating: 4.7,
    deliveryTime: "25 min",
  },
  {
    name: "Terrific Turkey Chili",
    description: "Comforting turkey chili with peppers, beans and herbs.",
    price: "$13.00",
    image: food10,
    category: "Drinks",
    rating: 4.5,
    deliveryTime: "15 min",
  },
  {
    name: "Italian Sausage Tortellini",
    description: "Cheese tortellini in a creamy sausage and herb broth.",
    price: "$17.00",
    image: food11,
    category: "Italian",
    rating: 4.8,
    deliveryTime: "20 min",
  },
  {
    name: "Cream of Asparagus Soup",
    description: "Silky asparagus soup finished with cracked pepper.",
    price: "$11.00",
    image: food12,
    category: "Drinks",
    rating: 4.4,
    deliveryTime: "15 min",
  },
  {
    name: "Italian Sausage Soup",
    description: "A hearty bowl layered with sausage, zucchini and herbs.",
    price: "$14.00",
    image: food13,
    category: "Lunch",
    rating: 4.6,
    deliveryTime: "18 min",
  },
  {
    name: "Creamy Chicken Wild Rice Soup",
    description: "Comfort food classic with slow-cooked chicken and wild rice.",
    price: "$15.00",
    image: food14,
    category: "Special Foods",
    rating: 4.7,
    deliveryTime: "18 min",
  },
  {
    name: "Ham And Potato Soup",
    description: "Creamy potato soup with savory ham and buttery finish.",
    price: "$12.00",
    image: food15,
    category: "Lunch",
    rating: 4.5,
    deliveryTime: "15 min",
  },
  {
    name: "Summer Berry Coconut Tart",
    description: "Coconut tart layered with seasonal berries and cream.",
    price: "$10.00",
    image: food16,
    category: "Mexican",
    rating: 4.8,
    deliveryTime: "15 min",
  },
  {
    name: "Pumpkin Cookies Cream Cheese",
    description: "Soft pumpkin cookies topped with whipped cream cheese.",
    price: "$9.00",
    image: food17,
    category: "Mexican",
    rating: 4.6,
    deliveryTime: "15 min",
  },
  {
    name: "Double Chocolate Cupcakes",
    description: "Rich chocolate cupcakes with glossy ganache topping.",
    price: "$8.00",
    image: food18,
    category: "Dessert",
    rating: 4.9,
    deliveryTime: "10 min",
    badge: "Sweet Favorite",
  },
];

export const menuItems = rawMenuItems.map((item, index) => ({
  ...item,
  id: index + 1,
  slug: createSlug(item.name),
}));

export const menuCategories = [
  "All",
  "Special Foods",
  "Mexican",
  "Italian",
  "Japanese",
  "Drinks",
  "Lunch",
  "Snacks",
  "Dessert",
];

export const heroContent = {
  badge: "Restaurant Style Experience",
  title: "We Serve The Taste You Love",
  description:
    "Fresh plates, premium ingredients, warm hospitality and a clean ordering flow inspired by the provided restaurant UI.",
  image: bannerImage,
  quickTags: [
    { label: "Dishes", image: food1, tone: "bg-stone-100" },
    { label: "Dessert", image: food18, tone: "bg-yellow-100" },
    { label: "Drinks", image: food12, tone: "bg-orange-100" },
    { label: "Platter", image: food3, tone: "bg-emerald-100" },
    { label: "Snacks", image: food4, tone: "bg-amber-100" },
  ],
};

export const highlights = [
  { label: "Online Orders", value: "12k+" },
  { label: "Menu Selections", value: "80+" },
  { label: "Average Delivery", value: "24 min" },
  { label: "Customer Rating", value: "4.9/5" },
];

export const serviceFeatures = [
  "Online Order",
  "Pre-Reservation",
  "24/7 Service",
  "Organized Foodie Place",
  "Clean Kitchen",
  "Super Chefs",
];

export const popularDishes = menuItems.slice(0, 4);

export const testimonials = [
  {
    name: "Savannah Nguyen",
    role: "Food Lover",
    review:
      "This place feels polished from the first click to checkout. The dishes arrive hot, fresh and beautifully packed every time.",
  },
  {
    name: "Esther Howard",
    role: "Regular Guest",
    review:
      "The menu is easy to browse, the reservation flow is clear and the food quality is consistently excellent.",
  },
  {
    name: "Marvin McKinney",
    role: "Weekend Customer",
    review:
      "I love how premium the experience feels. Great service, lovely presentation and a very smooth ordering journey.",
  },
];

export const chefs = [
  { name: "Savannah Nguyen", specialty: "Executive Chef", image: chefSpotlightImage },
  { name: "Esther Howard", specialty: "Pastry Chef", image: gallery4 },
  { name: "Marvin McKinney", specialty: "Sous Chef", image: gallery6 },
  { name: "Albert Flores", specialty: "Grill Master", image: gallery8 },
];

export const appPromo = {
  title: "Never Feel Hungry! Download Our Mobile App Enjoy Delicious Foods",
  description:
    "Make online reservations, read restaurant reviews from diners, and earn points towards free meals with a premium mobile-first experience.",
  image: appShowcaseImage,
};

export const offerCards = [
  {
    id: 1,
    title: "Flat 40% Off",
    code: "EAT40",
    description: "Enjoy your favorite meals with a warm welcome discount.",
    image: offer11,
  },
  {
    id: 2,
    title: "Buy 1 Get 1",
    code: "DOUBLEUP",
    description: "Perfect for sharing your go-to dishes with someone else.",
    image: offer12,
  },
  {
    id: 3,
    title: "Free Delivery",
    code: "NOFEE",
    description: "No delivery fee on curated orders above $35.",
    image: offer13,
  },
  {
    id: 4,
    title: "Festival Special",
    code: "FEST45",
    description: "Seasonal savings on premium combinations and platters.",
    image: offer21,
  },
  {
    id: 5,
    title: "New User Exclusive",
    code: "NEW50",
    description: "A generous first-order welcome for new guests.",
    image: offer22,
  },
  {
    id: 6,
    title: "Family Pack Deal",
    code: "FAMILY299",
    description: "Save more when you order a bigger table-worthy spread.",
    image: offer23,
  },
];

export const galleryMoments = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
];

export const brandAssets = {
  logo,
  featureImage,
  reservationImage,
};
