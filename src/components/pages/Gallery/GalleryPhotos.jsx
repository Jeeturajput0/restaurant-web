import React from "react";

import img1 from "../../../assets/gallery-2-1.jpg";
import img2 from "../../../assets/gallery-2-2.jpg";
import img3 from "../../../assets/gallery-2-3.jpg";
import img4 from "../../../assets/gallery-2-4.jpg";
import img5 from "../../../assets/gallery-2-5.jpg";
import img6 from "../../../assets/gallery-2-6.jpg";
import img7 from "../../../assets/gallery-2-7.jpg";
import img8 from "../../../assets/gallery-2-8.jpg";
import img9 from "../../../assets/gallery-2-9.jpg";
import img10 from "../../../assets/gallery-2-10.jpg";
import img11 from "../../../assets/gallery-2-11.jpg";
import img12 from "../../../assets/gallery-2-12.jpg";
import { useNavigate } from "react-router-dom";

const GalleryPhotos = () => {
  const card = [
    { img: img1, title: "PRIVATE DINNING" },
    { img: img2, title: "MEAT COOKING" },
    { img: img3, title: "SWEET DESSERT" },
    { img: img4, title: "CHEF'S PLATE" },
    { img: img5, title: "FRIDAY EVENING" },
    { img: img6, title: "PASTA PROCESS" },
    { img: img7, title: "INTO THE KITCHEN" },
    { img: img8, title: "INSIDE ROOM" },
    { img: img9, title: "OUTSIDE" },
    { img: img10, title: "DISHES COURSE" },
    { img: img11, title: "MORNING BREAKFAST" },
    { img: img12, title: "CHOCOLATE MUFFIN" },
  ];

  return (
    <div className="bg-black py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {card.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border-2 border-yellow-400"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-96 object-cover transition-all duration-700 group-hover:scale-125"
              />

              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-yellow-400 text-xl font-bold border-b-2 border-yellow-400">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default GalleryPhotos;
