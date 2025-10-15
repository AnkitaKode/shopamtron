import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api.js";
import ProductCard from "../components/ProductCard.jsx";

export default function Category() {
  const { slug } = useParams();
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      api.get(`/categories/${slug}`),
      api.get(`/categories/${slug}/products`)
    ])
      .then(([catRes, prodRes]) => {
        setCategory(catRes.data);
        setProducts(prodRes.data);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-20 w-20 border-4 border-blue-500 border-t-transparent"></div>
          <p className="mt-6 text-gray-700 text-xl font-semibold">Loading category...</p>
        </div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-2xl p-16 shadow-2xl text-center max-w-md border-2 border-gray-200">
          <div className="text-6xl mb-4">📦</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Category Not Found</h2>
          <p className="text-gray-600 text-lg">The category you're looking for doesn't exist</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Category Header */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 mb-12 shadow-2xl text-center backdrop-blur-sm">
          <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            📂 Category
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            {category.name}
          </h1>
          {category.description && (
            <p className="text-blue-100 text-xl max-w-3xl mx-auto">{category.description}</p>
          )}
        </div>
        
        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map(p => (
              <div key={p.id} className="transform hover:scale-105 transition-transform duration-300">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-white rounded-2xl p-16 shadow-xl max-w-md mx-auto border-2 border-gray-200">
              <div className="text-6xl mb-4">📦</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No Products Yet</h3>
              <p className="text-gray-600">Check back soon for new items in this category!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
