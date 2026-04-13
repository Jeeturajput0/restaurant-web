import React from "react";
import { galleryMoments } from "../../../data/menuData";
import SectionHeading from "../../ui/SectionHeading";

const GalleryPhotos = () => {
  return (
    <div className="space-y-8">
      <SectionHeading
        title="Captured moments"
        description="Reusable gallery cards keep the same shadow, radius and spacing system used across the rest of the interface."
      />

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {galleryMoments.slice(6).map((image, index) => (
          <article key={`moment-${index}`} className="theme-card overflow-hidden p-3">
            <img
              src={image}
              alt={`Restaurant moment ${index + 1}`}
              className="h-80 w-full rounded-[1.25rem] object-cover transition duration-500 hover:scale-[1.03]"
            />
          </article>
        ))}
      </div>
    </div>
  );
};

export default GalleryPhotos;
