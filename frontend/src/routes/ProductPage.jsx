import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api.js";
import ImageGallery from "../components/ImageGallery.jsx";
import CountdownTimer from "../components/CountdownTimer.jsx";
import BuyNowButton from "../components/BuyNowButton.jsx";
import UpsellCarousel from "../components/UpsellCarousel.jsx";
import { SEO } from "../utils/SEO.jsx";

export default function ProductPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api.get("/products")
      .then(res => {
        const p = res.data.find(prod => prod.slug === slug);
        setProduct(p);
      });
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-20 w-20 border-4 border-blue-500 border-t-transparent"></div>
          <p className="mt-6 text-gray-700 text-xl font-semibold">Loading product...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <SEO title={product.seoTitle || product.title} description={product.seoDescription} />
        
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="bg-gray-50 p-8 flex items-center justify-center">
              <ImageGallery images={product.images} featuredImage={product.featuredImageUrl} />
            </div>
            
            {/* Product Details */}
            <div className="p-10">
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold mb-4">
                🔥 Featured Product
              </div>
              
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                {product.title}
              </h1>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {product.shortDescription}
              </p>
            
              {/* Pricing */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 mb-6">
                <div className="flex items-end gap-4">
                  <div className="text-5xl font-black text-white">
                    ₹{product.price}
                  </div>
                  {product.compareAtPrice && (
                    <div className="text-xl line-through text-blue-200 mb-2">
                      ₹{product.compareAtPrice}
                    </div>
                  )}
                </div>
                {product.compareAtPrice && (
                  <div className="text-white text-sm mt-2">
                    💰 Save ₹{product.compareAtPrice - product.price} today!
                  </div>
                )}
              </div>
            
              {product.countdownTimer?.active && (
                <div className="mb-6">
                  <CountdownTimer endDate={product.countdownTimer.endAt} />
                </div>
              )}
              
              {/* Buy Button */}
              <div className="mb-8">
                <BuyNowButton url={product.shopifyProductId} />
              </div>
              
              {/* Features */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-2xl mb-2">✅</div>
                  <div className="text-xs font-semibold text-gray-700">Quality Guaranteed</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl mb-2">🚚</div>
                  <div className="text-xs font-semibold text-gray-700">Fast Shipping</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-2xl mb-2">🔒</div>
                  <div className="text-xs font-semibold text-gray-700">Secure Payment</div>
                </div>
              </div>
            
              {product.videoUrl && (
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">📹 Product Video</h3>
                  <iframe 
                    title="product-video" 
                    src={product.videoUrl} 
                    className="w-full h-64 rounded-xl shadow-lg border-2 border-gray-200" 
                    allowFullScreen 
                  />
                </div>
              )}
            </div>
          </div>
          
          {/* Full Width Description */}
          {product.longDescription && (
            <div className="px-10 py-8 bg-gray-50 border-t-2 border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">📋 Product Details</h2>
              <div className="prose prose-lg max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: product.longDescription }} />
            </div>
          )}
        </div>
        
        {/* Upsells Section */}
        {product.upsells?.length > 0 && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              🌟 You May Also Like
            </h2>
            <UpsellCarousel products={product.upsells.map(u => u.upsellProduct)} />
          </div>
        )}
      </div>
    </div>
  );
}
