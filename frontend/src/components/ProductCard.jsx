import React, { useState } from "react";
import { Link } from "react-router-dom";
import { slugify } from "../utils/slugify";
import { ShoppingCart, Heart, Eye, RefreshCw, Zap, Shield, Truck, Award } from "lucide-react";

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLoading(true);
    // Add to cart logic here
    setTimeout(() => {
      setIsLoading(false);
      // Show success message
    }, 1000);
  };

  const handleBuyNow = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Buy now logic - could redirect to checkout or add to cart and redirect
    window.location.href = `/checkout?product=${product.id}&buyNow=true`;
  };

  const toggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  // Calculate discount percentage if compareAtPrice exists
  const discount = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;

  return (
    <div
      className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border-2 border-gray-200 hover:shadow-2xl hover:border-indigo-400 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${slugify(product.slug || product.title)}`} className="block">
        <div className="relative overflow-hidden bg-gray-100">
          {/* Product Image */}
          <img
            src={product.featuredImageUrl || '/src/assets/placeholder.jpg'}
            alt={product.title}
            className="w-full h-64 object-cover transform transition-transform duration-500"
            style={{
              transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/src/assets/placeholder.jpg';
            }}
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col space-y-2">
            {discount > 0 && (
              <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                {discount}% OFF
              </div>
            )}
            {product.isNew && (
              <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                NEW
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex justify-center space-x-3">
              <button
                onClick={handleAddToCart}
                disabled={isLoading}
                className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transform hover:scale-110 transition-all"
                title="Add to Cart"
              >
                {isLoading ? (
                  <RefreshCw className="w-5 h-5 animate-spin" />
                ) : (
                  <ShoppingCart className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={toggleWishlist}
                className={`p-2 rounded-full shadow-lg transform hover:scale-110 transition-all ${isWishlisted ? 'text-red-500 bg-white/90' : 'text-white hover:bg-white/20'}`}
                title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
              >
                <Heart className="w-5 h-5" fill={isWishlisted ? 'currentColor' : 'none'} />
              </button>
              <button className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transform hover:scale-110 transition-all" title="Quick View">
                <Eye className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-5">
          <h3 className="font-bold text-lg text-gray-900 group-hover:text-indigo-600 transition-colors mb-2 line-clamp-2 h-14">
            {product.title}
          </h3>

          <div className="flex items-center mb-2">
            {/* Star Rating */}
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-xs text-gray-500 ml-1">(24)</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-3 min-h-[40px]">
            {product.shortDescription || "Premium quality product"}
          </p>

          <div className="flex items-center justify-between mt-4">
            <div>
              <div className="text-2xl font-black text-indigo-600">
                ₹{product.price?.toLocaleString('en-IN')}
              </div>
              {product.compareAtPrice && (
                <div className="text-sm line-through text-gray-400">
                  ₹{product.compareAtPrice?.toLocaleString('en-IN')}
                </div>
              )}
            </div>

            <div className="flex flex-col space-y-2">
              <button
                onClick={handleBuyNow}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-3 py-2 rounded-lg font-medium flex items-center space-x-1 text-sm transition-all shadow-md hover:shadow-lg"
              >
                <Zap className="w-4 h-4" />
                <span>Buy Now</span>
              </button>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleAddToCart(e);
                }}
                disabled={isLoading}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-3 py-2 rounded-lg font-medium flex items-center space-x-1 text-sm transition-all shadow-md hover:shadow-lg"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Adding...</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center justify-center space-x-4 mt-4 pt-3 border-t border-gray-100">
            <div className="flex items-center space-x-1 text-xs text-gray-500">
              <Shield className="w-3 h-3" />
              <span>Secure</span>
            </div>
            <div className="flex items-center space-x-1 text-xs text-gray-500">
              <Truck className="w-3 h-3" />
              <span>Free Delivery</span>
            </div>
            <div className="flex items-center space-x-1 text-xs text-gray-500">
              <Award className="w-3 h-3" />
              <span>Premium</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
