import React from "react";
import { useNavigate } from "react-router-dom";
import food1 from "../../../assets/food1.jpg";
import food2 from "../../../assets/food2.jpg";
import food3 from "../../../assets/food3.jpg";
import food4 from "../../../assets/food4.jpg";
import food5 from "../../../assets/food5.jpg";
import food6 from "../../../assets/food6.jpg";
import food7 from "../../../assets/food7.jpg";
import food8 from "../../../assets/food8.jpg";
import food9 from "../../../assets/food9.jpg";
import food10 from "../../../assets/food10.jpg";
import food11 from "../../../assets/food11.jpg";
import food12 from "../../../assets/food12.jpg";
import food13 from "../../../assets/food13.jpg";
import food14 from "../../../assets/food14.jpg";
import food15 from "../../../assets/food15.jpg";
import food16 from "../../../assets/food16.jpg";
import food17 from "../../../assets/food17.jpg";
import food18 from "../../../assets/food18.jpg";
import { useCart } from "../../../context/CartContext";

const Menu = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const menuItems = [
    {
      name: "TOMATO BRUSCHETTA",
      desc: "Tomatoes / Olive Oil / Cheese",
      price: "$4.00",
      img: food1,
    },
    {
      name: "AVOCADO & MANGO SALSA",
      desc: "Avocado / Mango / Tomatoes",
      price: "$5.00",
      img: food2,
    },
    {
      name: "MARINATED GRILLED SHRIMP",
      desc: "Fresh Shrimp / Olive Oil / Tomato Sauce",
      price: "$7.00",
      img: food3,
    },
    {
      name: "BAKED POTATO SKINS",
      desc: "Potatoes / Oil / Garlic",
      price: "$9.00",
      img: food4,
    },
  ];

  const mainCourses = [
    {
      name: "Braised Pork Chops",
      desc: "4 bone-in pork chops, olive oil, garlic, onion",
      price: "$21.00",
      img: food5,
    },
    {
      name: "Prime Rib",
      desc: "Rib, rosemary, black pepper, red wine",
      price: "$20.00",
      img: food6,
    },
    {
      name: "Coconut Fried Chicken",
      desc: "8 chicken pieces, coconut milk, oil",
      price: "$19.00",
      img: food7,
    },
    {
      name: "Sriracha Beef Skewers",
      desc: "Beef, garlic, sesame oil, vinegar",
      price: "$12.00",
      img: food8,
    },
    {
      name: "Chicken with Garlic & Tomatoes",
      desc: "Chicken, cherry tomatoes, olive oil, dry white wine",
      price: "$12.00",
      img: food9,
    },
  ];

  const soups = [
    {
      name: "Terrific Turkey Chili",
      desc: "Turkey, oregano, tomato paste, peppers",
      price: "$8.00",
      img: food10,
    },
    {
      name: "Italian Sausage Tortellini",
      desc: "Cheese tortellini, sausage, garlic, carrots, zucchini",
      price: "$9.00",
      img: food11,
    },
    {
      name: "Cream of Asparagus Soup",
      desc: "Asparagus, potato, celery, onion, pepper",
      price: "$10.00",
      img: food12,
    },
    {
      name: "Italian Sausage Soup",
      desc: "Italian sausage, garlic, carrots, zucchini",
      price: "$9.00",
      img: food13,
    },
    {
      name: "Creamy Chicken & Wild Rice Soup",
      desc: "Cooked chicken, salt, butter, heavy cream",
      price: "$12.00",
      img: food14,
    },
    {
      name: "Ham and Potato Soup",
      desc: "Potatoes, ham, celery, onion, milk",
      price: "$10.00",
      img: food15,
    },
  ];

  const desserts = [
    {
      name: "Summer Berry and Coconut Tart",
      desc: "Raspberries, blackberries, blueberries, graham cracker crumbs",
      price: "$12.00",
      img: food16,
    },
    {
      name: "Pumpkin Cookies Cream Cheese",
      desc: "Pumpkin, sugar, butter, eggs",
      price: "$10.00",
      img: food17,
    },
    {
      name: "Double Chocolate Cupcakes",
      desc: "Chocolate, eggs, vanilla, milk",
      price: "$7.00",
      img: food18,
    },
  ];

  const handleBuyNow = (item) => {
    navigate("/order", { state: { item } });
  };

  const renderItems = (items, showBuyNow = false) => (
    <div className="mx-auto mb-16 grid max-w-5xl gap-10 md:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.name}
          className="group flex flex-col gap-4 border-b border-gray-700 pb-4 transition-all duration-300 hover:border-yellow-400 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="overflow-hidden rounded-full">
              <img
                src={item.img}
                alt={item.name}
                className="h-16 w-16 rounded-full object-cover transition duration-300 group-hover:scale-110"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 transition group-hover:text-yellow-300">
                {item.name}
              </h3>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 sm:flex-col sm:items-end md:flex-row">
            <p className="font-bold text-yellow-400 transition group-hover:text-yellow-200">
              {item.price}
            </p>
            {showBuyNow && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => addToCart(item)}
                  className="rounded-full border border-yellow-400/50 bg-yellow-400/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-yellow-300 transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
                >
                  Add Cart
                </button>
                <button
                  type="button"
                  onClick={() => handleBuyNow(item)}
                  className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-black transition-transform duration-300 hover:scale-105"
                >
                  Buy Now
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-black px-6 py-24 text-white md:px-20">
      <h1 className="mb-20 text-center text-5xl font-extrabold tracking-wide text-yellow-400 drop-shadow-lg animate-fadeIn">
        Our Exclusive Menu
      </h1>

      <h2 className="mb-14 text-center text-4xl font-bold text-yellow-400">
        <span className="border-b-4 border-dashed border-yellow-400 pb-2">
          STARTERS
        </span>
      </h2>
      {renderItems(menuItems, true)}

      <h2 className="mb-14 text-center text-4xl font-bold text-yellow-400">
        <span className="border-b-4 border-dashed border-yellow-400 pb-2">
          MAIN COURSES
        </span>
      </h2>
      {renderItems(mainCourses, true)}

      <h2 className="mb-14 text-center text-4xl font-bold text-yellow-400">
        <span className="border-b-4 border-dashed border-yellow-400 pb-2">
          SOUPS
        </span>
      </h2>
      {renderItems(soups, true)}

      <h2 className="mb-14 text-center text-4xl font-bold text-yellow-400">
        <span className="border-b-4 border-dashed border-yellow-400 pb-2">
          DESSERTS
        </span>
      </h2>
      {renderItems(desserts, true)}
    </div>
  );
};

export default Menu;
