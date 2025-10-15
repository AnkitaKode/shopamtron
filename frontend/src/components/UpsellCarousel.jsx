import React from "react";
import ProductCard from "./ProductCard";

export default function UpsellCarousel({ products }) {
  return (
    <div className="flex overflow-x-auto gap-4 mt-4 snap-x snap-mandatory pb-2 scroll-smooth">
      {products.map(p => (
        <div key={p.id} className="snap-start shrink-0 w-72 animate-fade-in">
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  );
}
