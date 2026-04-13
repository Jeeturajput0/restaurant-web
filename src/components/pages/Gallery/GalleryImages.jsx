import React from "react";
import { galleryMoments } from "../../../data/menuData";

const GalleryImages = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {galleryMoments.slice(0, 6).map((image, index) => (
        <article key={`featured-${index}`} className="theme-card overflow-hidden p-3">
          <img
            src={image}
            alt={`Gallery feature ${index + 1}`}
            className="h-72 w-full rounded-[1.25rem] object-cover transition duration-500 hover:scale-[1.03]"
          />
        </article>
      ))}
    </div>
  );
};

export default GalleryImages;
