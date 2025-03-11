import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import ProductPage from "./landing_page/products/ProductPage";
import Signup from "./landing_page/signup/Signup";
import SupportPage from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
