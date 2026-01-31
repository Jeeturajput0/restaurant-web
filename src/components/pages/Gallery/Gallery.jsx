import React from 'react'
import GalleryImages from './GalleryImages'
import GalleryPhotos from './GalleryPhotos'
import gallerybanner from "../../../assets/Gallery-banner.jpg";

const Gallery = () => {
  return (
    <>
      <div className="bg-black pt-20 relative group overflow-hidden">
        <img
          src={gallerybanner}
          alt="Gallery Banner"
          className="w-full h-[400px] object-cover border-b-2 border-yellow-400 group-hover:scale-105 transition"
        />

        <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <h3 className="text-yellow-400 text-3xl font-bold tracking-widest border-b-2 border-yellow-400">
            WELCOME TO THE GALLERY
          </h3>
        </div>
      </div>

      <GalleryImages className="mt-3" />
      <GalleryPhotos />
    </>
  )
}

export default Gallery
