import React, { useState } from "react";

export default function ImageGallery({ images = [], featuredImage }) {
  const [mainImage, setMainImage] = useState(featuredImage || images[0]?.url || '');

  if (!mainImage) return null;

  return (
    <div className="animate-fade-in">
      <img src={mainImage} alt="product" className="w-full h-96 object-cover rounded mb-2 transition-all duration-500" />
      <div className="flex gap-2 overflow-x-auto snap-x snap-mandatory pb-2">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.url}
            alt={`thumb-${i}`}
            className={`w-20 h-20 object-cover rounded cursor-pointer border snap-start transition-transform duration-300 hover:scale-105 ${img.url===mainImage?'border-indigo-500 ring-2 ring-indigo-300':'border-gray-200'}`}
            onClick={() => setMainImage(img.url)}
          />
        ))}
      </div>
    </div>
  );
}
