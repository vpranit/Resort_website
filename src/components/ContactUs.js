// src/components/ContactUs.js
import React from "react";

const ContactUs = () => {
  return (
    <div className="py-20 px-8 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <p className="text-lg text-gray-700 mb-6">
        Have questions? We’d love to hear from you! Reach out using the form below.
      </p>
      <form className="max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 p-3 border rounded-md"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full mb-4 p-3 border rounded-md"
        />
        <textarea
          placeholder="Your Message"
          className="w-full mb-4 p-3 border rounded-md h-32"
        />
        <button className="px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white rounded">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
