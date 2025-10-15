import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { motion } from "framer-motion";
import { FaShippingFast, FaShieldAlt, FaStar } from "react-icons/fa";
import ProductCard from "../components/ProductCard.jsx";
import Background from "../components/Background.jsx"; // 🌌 add this import
import Footer from "../components/Footer.jsx"; // 🌙 footer reference

const FEATURED_PRODUCT_COUNT = 8;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function Home() {
  const { data: products, loading, error } = useFetch("/products");

  return (
    <Background>
      <div className="min-h-screen text-blue-100 font-sans overflow-x-hidden">
        {/* 🧭 Header (App name + navigation) */}
        <header className="sticky top-0 z-20 flex justify-between items-center p-5 bg-[#0a1128]/70 backdrop-blur-lg border-b border-blue-900/40 shadow-lg">
          <Link
            to="/"
            className="text-2xl font-bold text-blue-300 hover:text-blue-100 transition"
          >
            ShopAmtron ✨
          </Link>

          <nav className="flex gap-4">
            <Link
              to="/"
              className="btn bg-blue-700/60 hover-glow text-white hover:text-blue-100"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="btn bg-blue-700/60 hover-glow text-white hover:text-blue-100"
            >
              Products
            </Link>
            <Link
              to="/category/electronics"
              className="btn bg-blue-700/60 hover-glow text-white hover:text-blue-100"
            >
              Category
            </Link>
            <Link
              to="/admin"
              className="btn bg-blue-700/60 hover-glow text-white hover:text-blue-100"
            >
              Admin
            </Link>
          </nav>
        </header>

        {/* 🌠 Hero Section */}
        <section className="relative text-center py-24 px-6">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-blue-100 drop-shadow-lg">
              Welcome to <span className="text-blue-300">ShopAmtron</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-10 max-w-3xl mx-auto">
              Discover premium products, curated collections, and unbeatable prices.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/products"
                className="inline-block bg-blue-500 hover:bg-blue-400 text-white px-12 py-4 rounded-full text-lg font-bold shadow-xl transition-all duration-300 transform hover-glow"
              >
                🛍️ Shop Now
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* 🌟 Featured Products */}
        <section className="container mx-auto px-6 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-12 text-center text-blue-100"
          >
            🌟 Featured Products
          </motion.h2>

          {loading && (
            <div className="text-center py-8 text-blue-400 animate-pulse">
              Loading awesome deals...
            </div>
          )}
          {error && (
            <div className="text-center py-8 text-red-500 bg-red-900/30 rounded-lg font-semibold">
              Oops! Error loading products.
            </div>
          )}

          {products && (
            <motion.div
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {products.slice(0, FEATURED_PRODUCT_COUNT).map((p) => (
                <motion.div
                  key={p.id}
                  variants={itemVariants}
                  className="hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 rounded-lg"
                >
                  <ProductCard product={p} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </section>

        {/* 💎 Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-12 text-blue-100">
              Why Shop With Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="bg-blue-700/30 p-6 rounded-full mb-4">
                  <FaShippingFast className="text-4xl text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-blue-200">
                  Fast Shipping
                </h3>
                <p className="text-blue-300">
                  Get your products delivered quickly and safely.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="bg-green-700/30 p-6 rounded-full mb-4">
                  <FaShieldAlt className="text-4xl text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-blue-200">
                  Secure Payments
                </h3>
                <p className="text-blue-300">
                  Pay confidently with trusted payment partners.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col items-center"
              >
                <div className="bg-yellow-700/30 p-6 rounded-full mb-4">
                  <FaStar className="text-4xl text-yellow-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-blue-200">
                  Premium Quality
                </h3>
                <p className="text-blue-300">
                  Only top-rated, verified, and trusted items.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 🚚 Promo Banner */}
        <section className="bg-blue-800/70 text-blue-100 py-12 text-center rounded-t-[4rem] shadow-inner-top">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-semibold mb-3">
              🚚 Free Shipping on Orders Over ₹999
            </h3>
            <p className="text-lg text-blue-300">
              Fast delivery and secure checkout with trusted partners.
            </p>
          </motion.div>
        </section>

        {/* 🌙 Footer */}
        <Footer />
      </div>
    </Background>
  );
}
