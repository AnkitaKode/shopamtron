import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-xl shadow-lg sticky top-0 z-50 border-b-2 border-blue-200/50 animate-slide-up">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-3xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all">
          🛒 ShopAmtron
        </Link>
        <ul className="flex items-center space-x-8">
          <li>
            <Link 
              to="/" 
              className="text-gray-700 hover:text-indigo-600 font-semibold text-lg transition-colors relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link 
              to="/products" 
              className="text-gray-700 hover:text-indigo-600 font-semibold text-lg transition-colors relative group"
            >
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link 
              to="/admin" 
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-full font-bold hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              🔧 Admin
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
