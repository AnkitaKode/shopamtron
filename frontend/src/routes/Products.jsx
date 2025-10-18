import React, { useMemo } from "react";
import { useFetch } from "../hooks/useFetch";
import ProductCard from "../components/ProductCard.jsx";
import CountdownTimer from "../components/CountdownTimer.jsx";
import { Shield, Truck, Award, CreditCard, Headphones, RefreshCw } from "lucide-react";

// Dummy products with assets images
const getDummyProducts = () => [
  {
    id: 1,
    title: "Rechargeable UV Electric Mosquito Killer Lamp",
    shortDescription: "Advanced UV light technology attracts and eliminates mosquitoes instantly with high-voltage electric shock.",
    longDescription: "Say Goodbye to Buzzing Pests! Tired of mosquitoes and flying insects ruining your peace and quiet? Our Rechargeable Electric Mosquito Killer Lamp is the ultimate solution for protecting your family from pesky bites, without the use of harmful chemicals or sprays.",
    price: 999.00,
    compareAtPrice: 1999.00,
    featuredImageUrl: "/img1.jpg",
    isNew: true,
    shopifyProductId: "mosquito-lamp-uv"
  },
  {
    id: 2,
    title: "Premium Wireless Bluetooth Headphones",
    shortDescription: "High-quality wireless headphones with noise cancellation and premium sound quality.",
    longDescription: "Experience superior audio quality with our premium wireless Bluetooth headphones. Featuring active noise cancellation, 30-hour battery life, and crystal-clear sound reproduction.",
    price: 2999.00,
    compareAtPrice: 4999.00,
    featuredImageUrl: "/img2.jpg",
    isNew: false,
    shopifyProductId: "wireless-headphones"
  },
  {
    id: 3,
    title: "Smart Fitness Tracker Watch",
    shortDescription: "Advanced fitness tracking with heart rate monitoring, GPS, and smart notifications.",
    longDescription: "Stay connected and track your health with our smart fitness tracker watch. Monitor your heart rate, count steps, track workouts, and receive notifications from your phone.",
    price: 1599.00,
    compareAtPrice: 2999.00,
    featuredImageUrl: "/img3.jpg",
    isNew: true,
    shopifyProductId: "fitness-tracker"
  },
  {
    id: 4,
    title: "Portable Power Bank 20,000mAh",
    shortDescription: "High-capacity portable charger with fast charging technology and multiple USB ports.",
    longDescription: "Never run out of battery again with our high-capacity 20,000mAh power bank. Features fast charging technology, multiple USB ports, and a sleek aluminum design.",
    price: 1299.00,
    compareAtPrice: 2499.00,
    featuredImageUrl: "/img4.jpg",
    isNew: false,
    shopifyProductId: "power-bank"
  },
  {
    id: 5,
    title: "Premium Leather Wallet with RFID Protection",
    shortDescription: "Genuine leather wallet with RFID blocking technology to protect your cards from digital theft.",
    longDescription: "Crafted from premium genuine leather, this wallet combines style with security. Features RFID blocking technology, multiple card slots, and a slim design that fits comfortably in your pocket.",
    price: 899.00,
    compareAtPrice: 1599.00,
    featuredImageUrl: "/img5.jpg",
    isNew: true,
    shopifyProductId: "leather-wallet-rfid"
  },
  {
    id: 6,
    title: "Smart Home Security Camera 4K",
    shortDescription: "4K UHD security camera with night vision, motion detection, and mobile app control.",
    longDescription: "Protect your home with our advanced 4K security camera. Features crystal-clear 4K resolution, night vision up to 30ft, motion detection alerts, and easy mobile app integration.",
    price: 4599.00,
    compareAtPrice: 6999.00,
    featuredImageUrl: "/img6.jpg",
    isNew: false,
    shopifyProductId: "security-camera-4k"
  },
  {
    id: 7,
    title: "Professional Gaming Mechanical Keyboard",
    shortDescription: "RGB backlit mechanical keyboard with blue switches, programmable keys, and premium build quality.",
    longDescription: "Dominate your gaming sessions with our professional mechanical keyboard. Features Cherry MX Blue switches, customizable RGB lighting, programmable macro keys, and durable aluminum frame.",
    price: 3299.00,
    compareAtPrice: 5999.00,
    featuredImageUrl: "/img7.jpg",
    isNew: true,
    shopifyProductId: "gaming-keyboard-rgb"
  },
  {
    id: 8,
    title: "Premium Noise-Cancelling Earbuds",
    shortDescription: "True wireless earbuds with active noise cancellation, 8-hour battery life, and premium sound quality.",
    longDescription: "Experience premium audio with our true wireless earbuds. Features active noise cancellation, 8-hour battery life, premium drivers, and a comfortable, secure fit for all-day wear.",
    price: 2299.00,
    compareAtPrice: 3999.00,
    featuredImageUrl: "/img8.jpg",
    isNew: false,
    shopifyProductId: "wireless-earbuds-anc"
  }
];

export default function Products() {
  const { data: products, loading, error } = useFetch("/products");

  // Combine real products with dummy products for display
  const allProducts = useMemo(() => {
    if (products && products.length > 0) {
      return products;
    }
    return getDummyProducts();
  }, [products]);

  // Calculate countdown timer end date (24 hours from now)
  const countdownEndDate = new Date();
  countdownEndDate.setHours(countdownEndDate.getHours() + 24);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6 py-16">
        {/* Page Header */}
        <div className="text-center mb-16 bg-white/70 backdrop-blur-lg rounded-3xl py-12 px-8 shadow-xl border-2 border-blue-200/50">
          <h1 className="text-6xl md:text-7xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              🛍️ Our Products
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Discover our curated collection of premium products
          </p>

          {/* Countdown Timer */}
          <div className="mb-6">
            <CountdownTimer endDate={countdownEndDate.toISOString()} />
          </div>

          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Trust Badges Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-green-650 to-blue-150 rounded-2xl p-8 border border-green-200">
            <div className="flex flex-wrap justify-center items-center gap-8 text-center">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-3 rounded-full">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Secure Payments</h3>
                  <p className="text-sm text-gray-600">SSL Encrypted</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Free Delivery</h3>
                  <p className="text-sm text-gray-600">Orders over ₹999</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-3 rounded-full">
                  <RefreshCw className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Easy Returns</h3>
                  <p className="text-sm text-gray-600">30-day policy</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-orange-100 p-3 rounded-full">
                  <CreditCard className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Multiple Payment</h3>
                  <p className="text-sm text-gray-600">All cards accepted</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <Headphones className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">24/7 Support</h3>
                  <p className="text-sm text-gray-600">Expert assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {loading && (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
            <p className="mt-6 text-gray-600 text-xl font-medium">Loading amazing products...</p>
          </div>
        )}

        {error && error.fallbackToDemo !== true && (
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 bg-white/80 backdrop-blur-md rounded-3xl py-12 px-8 shadow-xl border-2 border-blue-200/50">
              <p className="text-red-600 font-semibold text-lg">⚠️ Error loading products</p>
              <p className="text-red-500 mt-2">Please try again later</p>
              <p className="text-sm text-gray-500 mt-4">Showing demo products instead</p>
            </div>
          </div>
        )}

        {allProducts && allProducts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {allProducts.map(p => (
              <div key={p.id} className="transform hover:scale-105 transition-transform duration-300">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        )}

        {(!allProducts || allProducts.length === 0) && (
          <div className="max-w-lg mx-auto mt-16">
            <div className="bg-white rounded-2xl p-12 shadow-xl text-center">
              <div className="text-6xl mb-4">📦</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No Products Available</h3>
              <p className="text-gray-600">Check back soon for amazing new items!</p>
            </div>
          </div>
        )}

        {/* Demo notice */}
        {(!products || products.length === 0) && (
          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm">
              Keep Shopping and Enjoying Our Products! 🎉
              
            </div>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-008 to-purple-10 rounded-3xl p-12 text-center text-black">
          <h3 className="text-3xl font-bold mb-4">Stay Updated!</h3>
          <p className="text-indigo-600 mb-8 max-w-2xl mx-auto">
            Be the first to know about new products, exclusive deals, and special offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
