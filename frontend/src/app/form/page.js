"use client";

import { useState } from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Image from "next/image";

// Simple popup component for success message
const SuccessPopup = ({ message, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
    {/* backdrop */}
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose}></div>
    {/* popup card */}
    <div className="relative bg-white  p-8 max-w-md w-full mx-auto transform transition-all animate-fadeInScale border-t-4 border-gradient-to-r from-purple-600 via-pink-600 to-orange-600">
      <div className="text-center">
        <div className="mx-auto flex items-center justify-center h-16 w-16  bg-gradient-to-r from-green-400 to-emerald-500 mb-4 shadow-lg">
          <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Congratulations!</h3>
        <p className="text-gray-600 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="px-8 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white font-semibold  transform hover:scale-105 transition duration-200"
        >
          Close
        </button>
      </div>
    </div>
  </div>
);

const WomenAchieversForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    achievement: "",
    instagram: "",
    facebook: "",
    
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false); // controls popup visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    
      setFormData({ ...formData, [name]: value });
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call (replace with actual fetch if needed)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Show success popup
    setShowSuccess(true);
    setIsSubmitting(false);

    // Reset form fields
    setFormData({
      name: "",
      phone: "",
      email: "",
      achievement: "",
      instagram: "",
      facebook: "",

    });

  };

  return (
    <>
      {/* main container with gradient background from image */}
      <div className=" bg-linear-to-br from-purple-50 via-pink-50 to-orange-50 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        {/* responsive grid: on mobile image top, form below; on lg: image left, form right */}
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2  gap-8 lg:gap-12 items-start">
          {/* LEFT SIDE / TOP ON MOBILE: IMAGE CARD with WOMEN ACHIEVERS AWARDS 2026 styling */}
<div className="sticky relative overflow-hidden transform transition hover:scale-[1.02] duration-300 order-1 lg:order-1">
  
  {/* Small screens */}
  <img
    src="/women.webp"
    alt=""
    className="block lg:hidden w-full h-auto object-cover"
  />

  {/* Large screens */}
  <img
    src="/women2.webp"
    alt=""
    className="hidden lg:block w-full h-auto object-cover"
  />

</div>

          {/* RIGHT SIDE / BOTTOM ON MOBILE: FORM */}
          <div className="w-full bg-white/80 backdrop-blur-md  p-6 sm:p-8 border border-white/50 order-2 lg:order-2">
            <div className="mb-6 text-center ">
              <h2 className="text-3xl sm:text-3xl font-light bg-[#A91661] text-transparent bg-clip-text">
                Nomination Form
              </h2>
              <p className="text-gray-600 mt-2">Share your story — inspire the world.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name - required */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200  outline-none transition bg-white/70"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Phone - required */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200  outline-none transition bg-white/70"
                  placeholder="+91 ..."
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200  outline-none transition bg-white/70"
                  placeholder="you@example.com"
                />
              </div>

              {/* Achievement - required */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Your Achievement <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="achievement"
                  required
                  rows={4}
                  value={formData.achievement}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200  outline-none transition resize-none bg-white/70"
                  placeholder="Tell us about your journey..."
                />
              </div>

  

              {/* Social profiles */}
              <div className="space-y-3 pt-2">
                <h3 className="font-semibold text-gray-700">Social Media (optional)</h3>
                <div className="flex items-center gap-3">
                  <FaInstagram className="text-pink-600 text-xl" />
                  <input
                    type="url"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-200  outline-none bg-white/70"
                    placeholder="Instagram URL"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <FaFacebook className="text-blue-600 text-xl" />
                  <input
                    type="url"
                    name="facebook"
                    value={formData.facebook}
                    onChange={handleChange}
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-200  outline-none bg-white/70"
                    placeholder="Facebook URL"
                  />
                </div>
              </div>

              {/* Submit button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#A91661] rounded-lg text-white font-bold  transform hover:scale-[1.02] transition disabled:opacity-60 disabled:cursor-not-allowed text-lg"
                >
                  {isSubmitting ? "Submitting..." : "Nominate Now"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccess && (
        <SuccessPopup
          message="Your nomination has been received! We'll reach out soon."
          onClose={() => setShowSuccess(false)}
        />
      )}

      {/* tiny extra style for popup animation */}
      <style jsx>{`
        @keyframes fadeInScale {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fadeInScale {
          animation: fadeInScale 0.2s ease-out;
        }
      `}</style>
    </>
  );
};

export default WomenAchieversForm;