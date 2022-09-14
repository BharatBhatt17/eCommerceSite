import React, { useState } from "react";
import Navbar from "./Navbar";
import ProductListPage from "./ProductListPage";
import ProductDetail from "./ProductDetail";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import AddToCart from "./AddToCart";

function App() {
  const [cart, setCart] = useState({});

  function handleAddToCart(productId, count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };
    setCart(newCart);
  }

  const totalCount = Object.keys(cart).reduce(function (previous, current) {
    return previous + cart[current];
  }, 0);

  return (
    <div>
      <Navbar productCount={totalCount} />
      <Routes>
        <Route index element={<ProductListPage />} />
        <Route
          path="/products/:id"
          element={<ProductDetail onAddToCart={handleAddToCart} />}
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/addtocart" element={<AddToCart />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
