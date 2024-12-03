import logo from './logo.svg';
import './App.css';
// src/App.js
import React from "react";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div>
      <Home />
      <AboutUs />
      <Products />
      <ContactUs />
    </div>
  );
}

export default App;
