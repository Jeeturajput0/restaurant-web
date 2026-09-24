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

export const ORDER_STATUSES = ["New", "Confirmed", "Preparing", "Ready", "Out for Delivery", "Delivered", "Completed", "Cancelled"];
export const ORDER_TYPES = ["Dine In", "Takeaway", "Delivery"];
export const PAYMENT_METHODS = ["UPI", "Credit Card", "Debit Card", "Cash", "Net Banking", "Wallet"];
export const PAYMENT_STATUSES = ["Paid", "Pending", "Failed", "Refunded"];
export const TABLE_STATUSES = ["Available", "Reserved", "Occupied", "Cleaning"];
export const RESERVATION_STATUSES = ["Pending", "Confirmed", "Completed", "Cancelled"];

const slugify = (v) => v.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

export const seedCategories = [
  { id: "cat-pizza", name: "Pizza", image: food1, description: "Wood-fired pizzas with fresh toppings", active: true, items: 12 },
  { id: "cat-burger", name: "Burger", image: food7, description: "Juicy burgers & crispy fries", active: true, items: 10 },
  { id: "cat-pasta", name: "Pasta", image: food11, description: "Creamy Italian pastas", active: true, items: 8 },
  { id: "cat-chinese", name: "Chinese", image: food8, description: "Wok-tossed noodles & starters", active: true, items: 14 },
  { id: "cat-indian", name: "Indian", image: food9, description: "Curries, tandoor & biryani", active: true, items: 16 },
  { id: "cat-desserts", name: "Desserts", image: food18, description: "Cakes, tarts & sweets", active: true, items: 9 },
  { id: "cat-beverages", name: "Beverages", image: food12, description: "Shakes, soups & coolers", active: true, items: 11 },
  { id: "cat-snacks", name: "Snacks", image: food4, description: "Quick bites & sides", active: false, items: 7 },
];

export const seedFoods = [
  { id: 1, name: "Tomato Bruschetta", description: "Tomatoes, olive oil, herbs and whipped ricotta on toasted bread.", price: 349, discountPrice: 299, category: "Snacks", image: food1, ingredients: ["Tomato", "Basil", "Ricotta", "Sourdough"], prepTime: 15, veg: true, spicy: "Mild", available: true, popular: true, recommended: true, featured: true, rating: 4.8 },
  { id: 2, name: "Avocado Mango Salsa", description: "Bright salad bowl with creamy avocado and ripe mango.", price: 399, discountPrice: null, category: "Indian", image: food2, ingredients: ["Avocado", "Mango", "Lime", "Coriander"], prepTime: 12, veg: true, spicy: "Mild", available: true, popular: true, recommended: false, featured: false, rating: 4.7 },
  { id: 3, name: "Marinated Grilled Shrimp", description: "Smoky grilled shrimp with citrus dressing and greens.", price: 549, discountPrice: 499, category: "Chinese", image: food3, ingredients: ["Shrimp", "Garlic", "Lemon", "Greens"], prepTime: 22, veg: false, spicy: "Medium", available: true, popular: true, recommended: true, featured: true, rating: 4.9 },
  { id: 4, name: "Baked Potato Skins", description: "Crispy potato skins with garlic butter and melted cheese.", price: 299, discountPrice: null, category: "Snacks", image: food4, ingredients: ["Potato", "Cheese", "Garlic butter"], prepTime: 18, veg: true, spicy: "Mild", available: true, popular: false, recommended: true, featured: false, rating: 4.6 },
  { id: 5, name: "Braised Pork Chops", description: "Slow-braised chops with caramelized onions and rosemary jus.", price: 599, discountPrice: null, category: "Indian", image: food5, ingredients: ["Pork", "Rosemary", "Onion"], prepTime: 30, veg: false, spicy: "Medium", available: true, popular: false, recommended: false, featured: false, rating: 4.8 },
  { id: 6, name: "Prime Rib Platter", description: "Tender prime rib with roast vegetables and house sauce.", price: 699, discountPrice: 649, category: "Burger", image: food6, ingredients: ["Beef", "Vegetables", "House sauce"], prepTime: 32, veg: false, spicy: "Mild", available: true, popular: true, recommended: true, featured: true, rating: 4.9 },
  { id: 7, name: "Coconut Fried Chicken", description: "Golden fried chicken with coconut seasoning and lime aioli.", price: 449, discountPrice: 399, category: "Burger", image: food7, ingredients: ["Chicken", "Coconut", "Lime aioli"], prepTime: 20, veg: false, spicy: "Hot", available: true, popular: true, recommended: false, featured: false, rating: 4.7 },
  { id: 8, name: "Sriracha Beef Skewers", description: "Charred beef skewers glazed with sweet heat and sesame.", price: 429, discountPrice: null, category: "Chinese", image: food8, ingredients: ["Beef", "Sriracha", "Sesame"], prepTime: 18, veg: false, spicy: "Hot", available: true, popular: false, recommended: true, featured: false, rating: 4.8 },
  { id: 9, name: "Chicken Garlic Tomato", description: "Juicy chicken simmered in garlic tomato sauce and herbs.", price: 499, discountPrice: 449, category: "Pasta", image: food9, ingredients: ["Chicken", "Tomato", "Garlic", "Herbs"], prepTime: 24, veg: false, spicy: "Medium", available: true, popular: true, recommended: true, featured: false, rating: 4.7 },
  { id: 10, name: "Terrific Turkey Chili", description: "Comforting turkey chili with peppers and beans.", price: 319, discountPrice: null, category: "Beverages", image: food10, ingredients: ["Turkey", "Beans", "Peppers"], prepTime: 20, veg: false, spicy: "Medium", available: false, popular: false, recommended: false, featured: false, rating: 4.5 },
  { id: 11, name: "Italian Sausage Tortellini", description: "Cheese tortellini in creamy sausage and herb broth.", price: 419, discountPrice: null, category: "Pasta", image: food11, ingredients: ["Tortellini", "Sausage", "Cream"], prepTime: 20, veg: false, spicy: "Mild", available: true, popular: true, recommended: false, featured: true, rating: 4.8 },
  { id: 12, name: "Cream of Asparagus Soup", description: "Silky asparagus soup finished with cracked pepper.", price: 279, discountPrice: 249, category: "Beverages", image: food12, ingredients: ["Asparagus", "Cream", "Pepper"], prepTime: 14, veg: true, spicy: "Mild", available: true, popular: false, recommended: true, featured: false, rating: 4.4 },
  { id: 13, name: "Farmhouse Pizza", description: "Loaded veggie pizza with mozzarella and garden herbs.", price: 349, discountPrice: 299, category: "Pizza", image: food13, ingredients: ["Mozzarella", "Capsicum", "Onion", "Corn"], prepTime: 18, veg: true, spicy: "Mild", available: true, popular: true, recommended: true, featured: true, rating: 4.6 },
  { id: 14, name: "Creamy Wild Rice Soup", description: "Slow-cooked chicken and wild rice comfort bowl.", price: 369, discountPrice: null, category: "Beverages", image: food14, ingredients: ["Chicken", "Wild rice", "Cream"], prepTime: 18, veg: false, spicy: "Mild", available: true, popular: false, recommended: false, featured: false, rating: 4.7 },
  { id: 15, name: "Paneer Tikka Masala", description: "Smoky paneer tikka folded into rich tomato masala.", price: 299, discountPrice: 269, category: "Indian", image: food15, ingredients: ["Paneer", "Tomato", "Spices"], prepTime: 20, veg: true, spicy: "Hot", available: true, popular: true, recommended: true, featured: false, rating: 4.5 },
  { id: 16, name: "Berry Coconut Tart", description: "Coconut tart layered with seasonal berries and cream.", price: 249, discountPrice: null, category: "Desserts", image: food16, ingredients: ["Berries", "Coconut", "Cream"], prepTime: 12, veg: true, spicy: "Mild", available: true, popular: false, recommended: true, featured: false, rating: 4.8 },
  { id: 17, name: "Pumpkin Cheesecake Bites", description: "Soft pumpkin bites topped with whipped cream cheese.", price: 219, discountPrice: 199, category: "Desserts", image: food17, ingredients: ["Pumpkin", "Cream cheese"], prepTime: 10, veg: true, spicy: "Mild", available: true, popular: false, recommended: false, featured: false, rating: 4.6 },
  { id: 18, name: "Double Chocolate Cupcakes", description: "Rich chocolate cupcakes with glossy ganache.", price: 199, discountPrice: 179, category: "Desserts", image: food18, ingredients: ["Chocolate", "Flour", "Ganache"], prepTime: 10, veg: true, spicy: "Mild", available: true, popular: true, recommended: true, featured: true, rating: 4.9 },
].map((f) => ({ ...f, slug: slugify(f.name) }));

export const seedCustomers = [
  { id: "CUS-101", name: "Aarav Sharma", email: "aarav@gmail.com", phone: "+91 98765 43210", avatar: "", address: "21 Palm Avenue, New Delhi", totalOrders: 28, totalSpent: 18450, lastOrder: "2026-09-20", joined: "2024-06-12", status: "Active", favorite: "Marinated Grilled Shrimp" },
  { id: "CUS-102", name: "Priya Patel", email: "priya.p@gmail.com", phone: "+91 98250 12345", avatar: "", address: "B-4 Shivalik Plaza, Ahmedabad", totalOrders: 19, totalSpent: 12300, lastOrder: "2026-09-22", joined: "2024-09-03", status: "Active", favorite: "Farmhouse Pizza" },
  { id: "CUS-103", name: "Rohan Mehta", email: "rohan.m@gmail.com", phone: "+91 99870 55667", avatar: "", address: "14 Marine Drive, Mumbai", totalOrders: 11, totalSpent: 7420, lastOrder: "2026-09-18", joined: "2025-01-20", status: "Active", favorite: "Coconut Fried Chicken" },
  { id: "CUS-104", name: "Sneha Reddy", email: "sneha.r@gmail.com", phone: "+91 97030 88990", avatar: "", address: "8-2 Hills Colony, Hyderabad", totalOrders: 24, totalSpent: 15890, lastOrder: "2026-09-23", joined: "2024-04-15", status: "Active", favorite: "Paneer Tikka Masala" },
  { id: "CUS-105", name: "Vikram Singh", email: "vikram.s@gmail.com", phone: "+91 98110 22334", avatar: "", address: "C-56 Model Town, Delhi", totalOrders: 6, totalSpent: 3120, lastOrder: "2026-08-30", joined: "2025-05-11", status: "Inactive", favorite: "Baked Potato Skins" },
  { id: "CUS-106", name: "Ananya Iyer", email: "ananya.i@gmail.com", phone: "+91 98450 66778", avatar: "", address: "22 MG Road, Bengaluru", totalOrders: 15, totalSpent: 9870, lastOrder: "2026-09-21", joined: "2024-11-02", status: "Active", favorite: "Double Chocolate Cupcakes" },
  { id: "CUS-107", name: "Kabir Malhotra", email: "kabir.m@gmail.com", phone: "+91 99100 44556", avatar: "", address: "D-12 GK-II, New Delhi", totalOrders: 9, totalSpent: 6110, lastOrder: "2026-09-15", joined: "2025-02-14", status: "Blocked", favorite: "Prime Rib Platter" },
  { id: "CUS-108", name: "Meera Nair", email: "meera.n@gmail.com", phone: "+91 97460 11223", avatar: "", address: "TC 9/4 Kochi, Kerala", totalOrders: 17, totalSpent: 11240, lastOrder: "2026-09-19", joined: "2024-08-19", status: "Active", favorite: "Berry Coconut Tart" },
];

const orderItems = (a, b) => [a, b].filter(Boolean);

export const seedOrders = [
  { id: "ORD-7841", customerId: "CUS-101", customer: "Aarav Sharma", phone: "+91 98765 43210", email: "aarav@gmail.com", address: "21 Palm Avenue, New Delhi", items: orderItems({ name: "Marinated Grilled Shrimp", qty: 2, price: 549, image: food3 }, { name: "Double Chocolate Cupcakes", qty: 2, price: 199, image: food18 }), amount: 1496, paymentStatus: "Paid", paymentMethod: "UPI", orderType: "Delivery", date: "2026-09-24 12:30", status: "New", table: null },
  { id: "ORD-7840", customerId: "CUS-104", customer: "Sneha Reddy", phone: "+91 97030 88990", email: "sneha.r@gmail.com", address: "8-2 Hills Colony, Hyderabad", items: orderItems({ name: "Farmhouse Pizza", qty: 1, price: 349, image: food13 }, { name: "Berry Coconut Tart", qty: 1, price: 249, image: food16 }), amount: 598, paymentStatus: "Paid", paymentMethod: "Credit Card", orderType: "Dine In", date: "2026-09-24 11:15", status: "Preparing", table: "T-04" },
  { id: "ORD-7839", customerId: "CUS-102", customer: "Priya Patel", phone: "+91 98250 12345", email: "priya.p@gmail.com", address: "B-4 Shivalik Plaza, Ahmedabad", items: orderItems({ name: "Coconut Fried Chicken", qty: 1, price: 449, image: food7 }), amount: 449, paymentStatus: "Pending", paymentMethod: "Cash", orderType: "Takeaway", date: "2026-09-24 10:05", status: "Confirmed", table: null },
  { id: "ORD-7838", customerId: "CUS-106", customer: "Ananya Iyer", phone: "+91 98450 66778", email: "ananya.i@gmail.com", address: "22 MG Road, Bengaluru", items: orderItems({ name: "Tomato Bruschetta", qty: 2, price: 349, image: food1 }), amount: 698, paymentStatus: "Paid", paymentMethod: "Wallet", orderType: "Delivery", date: "2026-09-23 20:40", status: "Out for Delivery", table: null },
  { id: "ORD-7837", customerId: "CUS-103", customer: "Rohan Mehta", phone: "+91 99870 55667", email: "rohan.m@gmail.com", address: "14 Marine Drive, Mumbai", items: orderItems({ name: "Prime Rib Platter", qty: 1, price: 699, image: food6 }), amount: 699, paymentStatus: "Paid", paymentMethod: "Debit Card", orderType: "Dine In", date: "2026-09-23 19:12", status: "Ready", table: "T-02" },
  { id: "ORD-7836", customerId: "CUS-108", customer: "Meera Nair", phone: "+91 97460 11223", email: "meera.n@gmail.com", address: "TC 9/4 Kochi, Kerala", items: orderItems({ name: "Paneer Tikka Masala", qty: 2, price: 299, image: food15 }), amount: 598, paymentStatus: "Paid", paymentMethod: "UPI", orderType: "Delivery", date: "2026-09-23 13:25", status: "Delivered", table: null },
  { id: "ORD-7835", customerId: "CUS-101", customer: "Aarav Sharma", phone: "+91 98765 43210", email: "aarav@gmail.com", address: "21 Palm Avenue, New Delhi", items: orderItems({ name: "Italian Sausage Tortellini", qty: 1, price: 419, image: food11 }), amount: 419, paymentStatus: "Paid", paymentMethod: "Net Banking", orderType: "Takeaway", date: "2026-09-22 18:00", status: "Completed", table: null },
  { id: "ORD-7834", customerId: "CUS-105", customer: "Vikram Singh", phone: "+91 98110 22334", email: "vikram.s@gmail.com", address: "C-56 Model Town, Delhi", items: orderItems({ name: "Baked Potato Skins", qty: 1, price: 299, image: food4 }), amount: 299, paymentStatus: "Failed", paymentMethod: "UPI", orderType: "Delivery", date: "2026-09-22 12:10", status: "Cancelled", table: null },
  { id: "ORD-7833", customerId: "CUS-107", customer: "Kabir Malhotra", phone: "+91 99100 44556", email: "kabir.m@gmail.com", address: "D-12 GK-II, New Delhi", items: orderItems({ name: "Sriracha Beef Skewers", qty: 2, price: 429, image: food8 }), amount: 858, paymentStatus: "Refunded", paymentMethod: "Credit Card", orderType: "Delivery", date: "2026-09-21 21:30", status: "Cancelled", table: null },
  { id: "ORD-7832", customerId: "CUS-104", customer: "Sneha Reddy", phone: "+91 97030 88990", email: "sneha.r@gmail.com", address: "8-2 Hills Colony, Hyderabad", items: orderItems({ name: "Chicken Garlic Tomato", qty: 1, price: 499, image: food9 }), amount: 499, paymentStatus: "Paid", paymentMethod: "UPI", orderType: "Dine In", date: "2026-09-21 13:00", status: "Completed", table: "T-07" },
  { id: "ORD-7831", customerId: "CUS-102", customer: "Priya Patel", phone: "+91 98250 12345", email: "priya.p@gmail.com", address: "B-4 Shivalik Plaza, Ahmedabad", items: orderItems({ name: "Avocado Mango Salsa", qty: 1, price: 399, image: food2 }), amount: 399, paymentStatus: "Paid", paymentMethod: "Cash", orderType: "Takeaway", date: "2026-09-20 17:45", status: "Completed", table: null },
  { id: "ORD-7830", customerId: "CUS-106", customer: "Ananya Iyer", phone: "+91 98450 66778", email: "ananya.i@gmail.com", address: "22 MG Road, Bengaluru", items: orderItems({ name: "Cream of Asparagus Soup", qty: 2, price: 279, image: food12 }), amount: 558, paymentStatus: "Pending", paymentMethod: "Wallet", orderType: "Delivery", date: "2026-09-20 12:20", status: "Preparing", table: null },
];

export const seedPayments = seedOrders.map((o, i) => ({
  id: `TXN-${90010 + i}`,
  orderId: o.id,
  customer: o.customer,
  amount: o.amount,
  method: o.paymentMethod,
  date: o.date,
  status: o.paymentStatus,
}));

export const seedTables = [
  { id: "T-01", seats: 2, location: "Window", status: "Available" },
  { id: "T-02", seats: 4, location: "Main Hall", status: "Occupied" },
  { id: "T-03", seats: 4, location: "Main Hall", status: "Available" },
  { id: "T-04", seats: 6, location: "Family Zone", status: "Reserved" },
  { id: "T-05", seats: 2, location: "Patio", status: "Available" },
  { id: "T-06", seats: 8, location: "Private", status: "Reserved" },
  { id: "T-07", seats: 4, location: "Main Hall", status: "Cleaning" },
  { id: "T-08", seats: 2, location: "Window", status: "Available" },
  { id: "T-09", seats: 6, location: "Family Zone", status: "Occupied" },
  { id: "T-10", seats: 4, location: "Patio", status: "Available" },
  { id: "T-11", seats: 2, location: "Main Hall", status: "Cleaning" },
  { id: "T-12", seats: 10, location: "Banquet", status: "Available" },
];

export const seedReservations = [
  { id: "RES-201", customer: "Sneha Reddy", phone: "+91 97030 88990", date: "2026-09-24", time: "19:30", guests: 4, table: "T-04", status: "Confirmed" },
  { id: "RES-202", customer: "Aarav Sharma", phone: "+91 98765 43210", date: "2026-09-24", time: "20:00", guests: 2, table: "T-01", status: "Pending" },
  { id: "RES-203", customer: "Priya Patel", phone: "+91 98250 12345", date: "2026-09-25", time: "13:00", guests: 6, table: "T-06", status: "Confirmed" },
  { id: "RES-204", customer: "Rohan Mehta", phone: "+91 99870 55667", date: "2026-09-25", time: "19:00", guests: 4, table: "T-03", status: "Pending" },
  { id: "RES-205", customer: "Meera Nair", phone: "+91 97460 11223", date: "2026-09-23", time: "18:30", guests: 3, table: "T-07", status: "Completed" },
  { id: "RES-206", customer: "Vikram Singh", phone: "+91 98110 22334", date: "2026-09-23", time: "20:30", guests: 2, table: "T-05", status: "Cancelled" },
  { id: "RES-207", customer: "Ananya Iyer", phone: "+91 98450 66778", date: "2026-09-26", time: "12:30", guests: 5, table: "T-09", status: "Confirmed" },
  { id: "RES-208", customer: "Kabir Malhotra", phone: "+91 99100 44556", date: "2026-09-26", time: "21:00", guests: 8, table: "T-12", status: "Pending" },
];

export const seedCoupons = [
  { id: 1, code: "WELCOME20", type: "Percentage", value: 20, minOrder: 499, maxDiscount: 200, start: "2026-09-01", end: "2026-12-31", limit: 1000, used: 342, active: true },
  { id: 2, code: "FIRSTORDER", type: "Flat", value: 100, minOrder: 299, maxDiscount: 100, start: "2026-09-01", end: "2026-10-31", limit: 500, used: 187, active: true },
  { id: 3, code: "EAT40", type: "Percentage", value: 40, minOrder: 999, maxDiscount: 400, start: "2026-09-10", end: "2026-09-30", limit: 200, used: 156, active: true },
  { id: 4, code: "NOFEE", type: "Flat", value: 49, minOrder: 999, maxDiscount: 49, start: "2026-08-01", end: "2026-12-31", limit: 2000, used: 890, active: true },
  { id: 5, code: "FEST45", type: "Percentage", value: 45, minOrder: 1499, maxDiscount: 600, start: "2026-09-15", end: "2026-10-15", limit: 300, used: 98, active: false },
  { id: 6, code: "FAMILY299", type: "Flat", value: 299, minOrder: 1999, maxDiscount: 299, start: "2026-09-01", end: "2026-11-30", limit: 150, used: 41, active: true },
];

export const seedReviews = [
  { id: 1, customer: "Aarav Sharma", food: "Marinated Grilled Shrimp", rating: 5, text: "Perfectly grilled, fresh and flavourful. Best shrimp in town!", date: "2026-09-22", visible: true },
  { id: 2, customer: "Priya Patel", food: "Farmhouse Pizza", rating: 4, text: "Great crust and generous toppings. Delivery was quick.", date: "2026-09-21", visible: true },
  { id: 3, customer: "Rohan Mehta", food: "Coconut Fried Chicken", rating: 5, text: "Crispy outside, juicy inside. Lime aioli is amazing.", date: "2026-09-20", visible: true },
  { id: 4, customer: "Sneha Reddy", food: "Paneer Tikka Masala", rating: 4, text: "Rich gravy, soft paneer. Little spicy for kids though.", date: "2026-09-19", visible: true },
  { id: 5, customer: "Vikram Singh", food: "Baked Potato Skins", rating: 2, text: "Arrived cold and soggy. Expected better packing.", date: "2026-09-18", visible: false },
  { id: 6, customer: "Ananya Iyer", food: "Double Chocolate Cupcakes", rating: 5, text: "Melt-in-mouth chocolate heaven. Ordered twice already!", date: "2026-09-17", visible: true },
  { id: 7, customer: "Meera Nair", food: "Berry Coconut Tart", rating: 5, text: "Beautiful presentation and fresh berries. Loved it.", date: "2026-09-16", visible: true },
  { id: 8, customer: "Kabir Malhotra", food: "Sriracha Beef Skewers", rating: 3, text: "Good flavour but portion felt small for the price.", date: "2026-09-15", visible: true },
];

export const seedNotifications = [
  { id: 1, type: "order", title: "New order received", message: "ORD-7841 from Aarav Sharma · ₹1,496", time: "2 min ago", read: false },
  { id: 2, type: "reservation", title: "New reservation", message: "Aarav Sharma booked T-01 for tonight 8:00 PM", time: "18 min ago", read: false },
  { id: 3, type: "payment", title: "Payment received", message: "₹698 via Wallet for ORD-7838", time: "1 hr ago", read: false },
  { id: 4, type: "review", title: "New 5-star review", message: "Aarav Sharma rated Marinated Grilled Shrimp", time: "3 hrs ago", read: true },
  { id: 5, type: "cancel", title: "Order cancelled", message: "ORD-7834 was cancelled · refund initiated", time: "5 hrs ago", read: true },
  { id: 6, type: "customer", title: "New customer", message: "Meera Nair just registered", time: "Yesterday", read: true },
  { id: 7, type: "payment", title: "Payment failed", message: "UPI payment for ORD-7834 failed", time: "Yesterday", read: true },
  { id: 8, type: "reservation", title: "Reservation confirmed", message: "RES-203 confirmed for Priya Patel", time: "2 days ago", read: true },
];

export const seedSettings = {
  name: "EatMore Restaurant",
  phone: "+91 98765 00000",
  email: "hello@eatmore.in",
  address: "21 Palm Avenue, Connaught Place, New Delhi 110001",
  description: "Modern Indian & continental kitchen serving fresh, premium dishes with fast delivery.",
  openTime: "10:00",
  closeTime: "23:00",
  delivery: true,
  takeaway: true,
  dineIn: true,
  gst: 5,
  serviceCharge: 3,
  deliveryFee: 49,
  upi: true,
  cash: true,
  card: true,
  online: true,
};

export const seedRevenueSeries = {
  "Today": [
    { label: "10am", revenue: 4200, orders: 8 }, { label: "12pm", revenue: 9800, orders: 18 },
    { label: "2pm", revenue: 12400, orders: 24 }, { label: "4pm", revenue: 6800, orders: 12 },
    { label: "6pm", revenue: 11200, orders: 20 }, { label: "8pm", revenue: 18600, orders: 32 }, { label: "10pm", revenue: 9400, orders: 15 },
  ],
  "7 Days": [
    { label: "Thu", revenue: 28400, orders: 52 }, { label: "Fri", revenue: 34200, orders: 64 },
    { label: "Sat", revenue: 48600, orders: 88 }, { label: "Sun", revenue: 52300, orders: 94 },
    { label: "Mon", revenue: 26800, orders: 48 }, { label: "Tue", revenue: 29600, orders: 54 }, { label: "Wed", revenue: 31200, orders: 58 },
  ],
  "30 Days": [
    { label: "W1", revenue: 198000, orders: 362 }, { label: "W2", revenue: 224000, orders: 410 },
    { label: "W3", revenue: 246000, orders: 448 }, { label: "W4", revenue: 268000, orders: 492 },
  ],
  "6 Months": [
    { label: "Apr", revenue: 820000, orders: 1480 }, { label: "May", revenue: 890000, orders: 1620 },
    { label: "Jun", revenue: 940000, orders: 1710 }, { label: "Jul", revenue: 1020000, orders: 1860 },
    { label: "Aug", revenue: 1150000, orders: 2080 }, { label: "Sep", revenue: 1254000, orders: 2260 },
  ],
  "1 Year": [
    { label: "Oct", revenue: 780000, orders: 1420 }, { label: "Nov", revenue: 840000, orders: 1530 },
    { label: "Dec", revenue: 1120000, orders: 2040 }, { label: "Jan", revenue: 760000, orders: 1380 },
    { label: "Feb", revenue: 720000, orders: 1310 }, { label: "Mar", revenue: 860000, orders: 1560 },
    { label: "Apr", revenue: 820000, orders: 1480 }, { label: "May", revenue: 890000, orders: 1620 },
    { label: "Jun", revenue: 940000, orders: 1710 }, { label: "Jul", revenue: 1020000, orders: 1860 },
    { label: "Aug", revenue: 1150000, orders: 2080 }, { label: "Sep", revenue: 1254000, orders: 2260 },
  ],
};
