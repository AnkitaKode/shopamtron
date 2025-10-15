import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Products from "./routes/Products.jsx";
import ProductPage from "./routes/ProductPage.jsx";
import Home from "./routes/Home.jsx";
import Category from "./routes/Category.jsx";
import AdminPanel from "./routes/AdminPanel.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:slug" element={<ProductPage />} />
          <Route path="category/:slug" element={<Category />} />
          <Route path="admin" element={<AdminPanel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);