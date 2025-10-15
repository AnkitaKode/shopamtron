import React, { useState } from "react";
import api from "../services/api";

export default function AdminPanel() {
  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    longDescription: "",
    price: "",
    compareAtPrice: "",
    shopifyProductId: "",
    featuredImage: null, // <-- File instead of URL
  });
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, featuredImage: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      await api.post("/products", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage("Product created successfully!");
      setFormData({
        title: "",
        shortDescription: "",
        longDescription: "",
        price: "",
        compareAtPrice: "",
        shopifyProductId: "",
        featuredImage: null,
      });
      setPreview(null);
    } catch (err) {
      setMessage("Error creating product: " + err.message);
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="backdrop-blur-xl bg-white/90 rounded-3xl shadow-2xl p-10 border-2 border-blue-200/50">
          <h1 className="text-5xl font-black mb-3 text-center">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              🔧 Admin Panel
            </span>
          </h1>
          <p className="text-center text-gray-600 text-lg mb-10">
            Create and manage your products
          </p>

          {message && (
            <div
              className={`mb-4 p-4 rounded-lg backdrop-blur-md ${
                message.includes("Error")
                  ? "bg-red-100 text-red-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Product Title */}
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-800">
                📦 Product Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg px-4 py-3 outline-none transition-all text-gray-900"
                placeholder="Enter product name"
              />
            </div>

            {/* Short Description */}
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-800">
                📝 Short Description
              </label>
              <textarea
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleChange}
                rows="2"
                className="w-full border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg px-4 py-3 outline-none transition-all text-gray-900"
                placeholder="Brief product description"
              />
            </div>

            {/* Long Description */}
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-800">
                📄 Long Description
              </label>
              <textarea
                name="longDescription"
                value={formData.longDescription}
                onChange={handleChange}
                rows="4"
                className="w-full border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg px-4 py-3 outline-none transition-all text-gray-900"
                placeholder="Detailed product information"
              />
            </div>

            {/* Price and Compare Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-800">
                  💰 Price
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg px-4 py-3 outline-none transition-all text-gray-900"
                  placeholder="999"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-gray-800">
                  🏷️ Compare Price
                </label>
                <input
                  type="number"
                  name="compareAtPrice"
                  value={formData.compareAtPrice}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg px-4 py-3 outline-none transition-all text-gray-900"
                  placeholder="1299"
                />
              </div>
            </div>

            {/* Image Upload Section */}
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-800">
                🖼️ Upload Product Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg px-4 py-3 outline-none transition-all text-gray-900"
              />
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="mt-4 w-40 h-40 object-cover rounded-xl shadow-md border-2 border-gray-200"
                />
              )}
            </div>

            {/* Shopify Product ID */}
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-800">
                🔗 Shopify Product ID
              </label>
              <input
                type="text"
                name="shopifyProductId"
                value={formData.shopifyProductId}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg px-4 py-3 outline-none transition-all text-gray-900"
                placeholder="Optional"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-4 rounded-xl text-lg font-bold hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
            >
              ✨ Create Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
