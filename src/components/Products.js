// src/components/Products.js
import React from "react";

const Products = () => {
  const products = [
    { name: "Luxury Rooms", image: "/images/room.jpg", price: "$200/night" },
    { name: "Spa Packages", image: "/images/spa.jpg", price: "$100/session" },
    { name: "Gourmet Dining", image: "/images/dining.jpg", price: "Varies" },
  ];

  return (
    <div className="py-20 px-8 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="border rounded-lg shadow-md p-4">
            <img src={product.image} alt={product.name} className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-700">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
