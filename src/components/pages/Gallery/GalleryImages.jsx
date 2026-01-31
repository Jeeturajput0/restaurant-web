import React from 'react'
import Images1 from '../../../assets/gallery-3-1.jpg'
import Images2 from '../../../assets/gallery-3-2.jpg'
import Images3 from '../../../assets/gallery-3-3.jpg'
import Images4 from '../../../assets/gallery-3-4.jpg'
import Images6 from '../../../assets/gallery-3-6.jpg'
import Images7 from '../../../assets/gallery-3-7.jpg'
import Images8 from '../../../assets/gallery-3-8.jpg'
import Images9 from '../../../assets/gallery-3-9.jpg'
import Images10 from '../../../assets/gallery-3-10.jpg'

const GalleryImages = () => {
  const images = [
    Images1, Images2, Images3,
    Images4, Images6,Images8, Images7,
     Images9, Images10
  ]

  return (
    <div className="bg-black grid grid-cols-3 gap-2 p-4">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`gallery-${i}`}
          className="rounded-xl hover:scale-105 transition duration-300"
        />
      ))}
    </div>
  )
}

export default GalleryImages
