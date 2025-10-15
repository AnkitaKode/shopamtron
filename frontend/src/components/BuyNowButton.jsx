import React from "react";

export default function BuyNowButton({ url }) {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noreferrer"
      className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all hover:shadow-xl glow-on-hover animate-fade-in"
    >
      Buy Now →
    </a>
  );
}
