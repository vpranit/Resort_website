// src/components/Home.js
import React from "react";

const Home = () => {
  return (
    <div className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-white" style={{ backgroundImage: "url('/images/resort-banner.jpg')" }}>
      <h1 className="text-5xl font-bold">Welcome to Paradise Resort</h1>
      <p className="mt-4 text-lg">Luxury Redefined in Nature's Lap</p>
      <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded text-lg font-semibold">
        Explore More
      </button>
    </div>
  );
};

export default Home;
