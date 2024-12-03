// src/components/AboutUs.js
import React from "react";

const AboutUs = () => {
  return (
    <div className="py-20 px-8 text-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">About Us</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        At Paradise Resort, we offer an unforgettable experience of luxury and comfort. Surrounded by pristine nature, our resort is a haven for relaxation and adventure alike.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <img src="/images/resort1.jpg" alt="Resort 1" className="rounded shadow-lg" />
        <img src="/images/resort2.jpg" alt="Resort 2" className="rounded shadow-lg" />
        <img src="/images/resort3.jpg" alt="Resort 3" className="rounded shadow-lg" />
      </div>
    </div>
  );
};

export default AboutUs;
