import React from "react";
import GalleryImages from "./GalleryImages";
import GalleryPhotos from "./GalleryPhotos";
import SectionHeading from "../../ui/SectionHeading";

const Gallery = () => {
  return (
    <section className="page-section pb-20">
      <div className="theme-container space-y-10">
        <SectionHeading
          eyebrow="Gallery"
          title="A visual journey through our restaurant moments"
          description="The gallery now fits the lighter restaurant theme rather than the old dark presentation."
        />
        <GalleryImages />
        <GalleryPhotos />
      </div>
    </section>
  );
};

export default Gallery;
