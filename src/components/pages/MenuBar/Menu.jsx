

import React from "react";


const mainCourses = [
  {
    name: "Braised Pork Chops",
    desc: "4 bone-in pork chops, olive oil, garlic, onion",
    price: "$21.00",
    img: "src/assets/food5.jpg",
  },
  {
    name: "Prime Rib",
    desc: "Rib, rosemary, black pepper, red wine",
    price: "$20.00",
    img: "src/assets/food6.jpg",
  },
  {
    name: "Coconut Fried Chicken",
    desc: "8 chicken pieces, coconut milk, oil",
    price: "$19.00",
    img: "src/assets/food7.jpg",
  },
  {
    name: "Sriracha Beef Skewers",
    desc: "Beef, garlic, sesame oil, vinegar",
    price: "$12.00",
    img: "src/assets/food8.jpg",
  },
  {
    name: "Chicken with Garlic & Tomatoes",
    desc: "Chicken, cherry tomatoes, olive oil, dry white wine",
    price: "$12.00",
    img: "src/assets/food9.jpg",
  },
];

const menuItems = [
  {
    name: "TOMATO BRUSCHETTA",
    desc: "Tomatoes / Olive Oil / Cheese",
    price: "$4.00",
    img: "src/assets/food1.jpg",
  },
  {
    name: "AVOCADO & MANGO SALSA",
    desc: "Avocado / Mango / Tomatoes",
    price: "$5.00",
    img: "src/assets/food2.jpg",
  },
  {
    name: "MARINATED GRILLED SHRIMP",
    desc: "Fresh Shrimp / Olive Oil / Tomato Sauce",
    price: "$7.00",
    img: "src/assets/food3.jpg",
  },
  {
    name: "BAKED POTATO SKINS",
    desc: "Potatoes / Oil / Garlic",
    price: "$9.00",
    img: "src/assets/food4.jpg",
  },
];

const soups = [
  {
    name: "Terrific Turkey Chili",
    desc: "Turkey, oregano, tomato paste, peppers",
    price: "$8.00",
    img: "src/assets/food10.jpg"
  },
  {
    name: "Italian Sausage Tortellini",
    desc: "Cheese tortellini, sausage, garlic, carrots, zucchini",
    price: "$9.00",
    img: "src/assets/food11.jpg"
  },
  {
    name: "Cream of Asparagus Soup",
    desc: "Asparagus, potato, celery, onion, pepper",
    price: "$10.00",
    img: "src/assets/food12.jpg"
  },
  {
    name: "Italian Sausage Soup",
    desc: "Italian sausage, garlic, carrots, zucchini",
    price: "$9.00",
    img: "src/assets/food13.jpg"
  },
  {
    name: "Creamy Chicken & Wild Rice Soup",
    desc: "Cooked chicken, salt, butter, heavy cream",
    price: "$12.00",
    img: "src/assets/food14.jpg"
  },
  {
    name: "Ham and Potato Soup",
    desc: "Potatoes, ham, celery, onion, milk",
    price: "$10.00",
    img: "src/assets/food15.jpg"
  }
];

const desserts = [
  {
    name: "Summer Berry and Coconut Tart",
    desc: "Raspberries, blackberries, blueberries, graham cracker crumbs",
    price: "$12.00",
    img: "src/assets/food16.jpg"
  },
  {
    name: "Pumpkin Cookies Cream Cheese",
    desc: "Pumpkin, sugar, butter, eggs",
    price: "$10.00",
    img: "src/assets/food17.jpg"
  },
  {
    name: "Double Chocolate Cupcakes",
    desc: "Chocolate, eggs, vanilla, milk",
    price: "$7.00",
    img: "src/assets/food18.jpg"
  }
];




const Menu = () => {
  return (
    <div className="px-6 md:px-20 py-21 bg-black text-white">

      <h2 className="text-center text-4xl font-bold tracking-wide mb-10 text-yellow-400">
        <span className="border-dashed border-b-4 border-yellow-400 pb-1">
          STARTERS
        </span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {menuItems.map((item, id) => (
          <div key={id} className="flex items-center justify-between border-b pb-4 border-gray-700">
            <div className="flex items-center gap-4">
              <img src={item.img} alt={item.name} className="w-16 h-16 rounded-full object-cover" />
              <div>
                <h3 className="font-semibold text-lg text-yellow-400">{item.name}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            </div>
            <p className="font-bold text-yellow-400">{item.price}</p>
          </div>
        ))}
      </div>

      <h2 className="text-center text-4xl mt-16 font-bold tracking-wide mb-10 text-yellow-400">
        <span className="border-dashed border-b-4 border-yellow-400 pb-1">
          MAIN COURSES
        </span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {mainCourses.map((item, id) => (
          <div key={id} className="flex items-center justify-between border-b pb-4 border-gray-700">
            <div className="flex items-center gap-4">
              <img src={item.img} alt={item.name} className="w-16 h-16 rounded-full object-cover" />
              <div>
                <h3 className="font-semibold text-lg text-yellow-400">{item.name}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            </div>
            <p className="font-bold text-yellow-400">{item.price}</p>
          </div>
        ))}
      </div>

      <h2 className="text-center text-4xl mt-16 font-bold tracking-wide mb-10 text-yellow-400">
        <span className="border-dashed border-b-4 border-yellow-400 pb-1">
          SOUPS
        </span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {soups.map((item, id) => (
          <div key={id} className="flex items-center justify-between border-b pb-4 border-gray-700">
            <div className="flex items-center gap-4">
              <img src={item.img} alt={item.name} className="w-16 h-16 rounded-full object-cover" />
              <div>
                <h3 className="font-semibold text-lg text-yellow-400">{item.name}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            </div>
            <p className="font-bold text-yellow-400">{item.price}</p>
          </div>
        ))}
      </div>

      <h2 className="text-center text-4xl mt-16 font-bold tracking-wide mb-10 text-yellow-400">
        <span className="border-dashed border-b-4 border-yellow-400 pb-1">
          DESSERTS
        </span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {desserts.map((item, id) => (
          <div key={id} className="flex items-center justify-between border-b pb-4 border-gray-700">
            <div className="flex items-center gap-4">
              <img src={item.img} alt={item.name} className="w-16 h-16 rounded-full object-cover" />
              <div>
                <h3 className="font-semibold text-lg text-yellow-400">{item.name}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            </div>
            <p className="font-bold text-yellow-400">{item.price}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Menu;
