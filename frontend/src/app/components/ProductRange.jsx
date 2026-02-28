"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function ProductRange() {
  const [openCategory, setOpenCategory] = useState("Skin Care");

  // Updated categories list including Foot Care and Hygiene
  const categories = [
    { name: "Skin Care", items: ["Face Wash", "Face Scrub", "Face Serum", "Face Packs & Masks", "Toners"] },
    { name: "Baby Care", items: ["Nipple Butter", "Baby FaceWash", "Baby Shampoo", "Baby Lotions"] },
    { name: "Hygiene", items: ["Hand Sanitizers", "Hand Wash", "Body Wash"] },
    { name: "Foot Care", items: ["Foot Cream", "Foot Scrub", "Crack Heel Cream"] },
    { name: "Mother Care", items: ["Breast Firming Creams", "Stretch Mark Cream"] },
    { name: "Men's Grooming", items: ["Beard Wash", "Beard Grooming", "Hair Styling Wax"] },
    { name: "Intimate Care", items: ["Sexual Wellness Products", "Intimate Toner"] },
    { name: "Lip Care", items: ["Lip Liners", "Lip Oils", "Lip Stains", "Lip Tints"] },
    { name: "Pet Care", items: ["Pet Grooming Products", "Pet Paw Care"] },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52 py-16 text-center">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-medium tracking-wide text-gray-900 mb-6 relative inline-block">
          Our Product Range
          <span className="block w-16 h-0.5 bg-black absolute -bottom-3 left-1/2 transform -translate-x-1/2"></span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-sm md:text-base leading-relaxed">
          Comprehensive categories covering beauty, personal, and specialized care.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 auto-rows-[300px]">
        
        {/* 1. Skin Care (Tall) */}
        <div className="relative lg:row-span-2 lg:col-span-2 bg-[#c4c8ce4f] flex flex-col items-center justify-end group cursor-pointer overflow-hidden">
          <Image fill src="/p1.webp" alt="Skin Care" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
          <div className="relative z-10 w-full backdrop-blur-2xl text-center py-2">
            <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Skin Care</h3>
          </div>
        </div>

        {/* 2. Men's Grooming */}
        <div className="relative flex flex-col lg:col-span-2 items-center justify-end group cursor-pointer overflow-hidden">
          <Image fill src="/p3.webp" alt="Men's Grooming" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
          <div className="relative z-10 bg-[#f7d2e838] w-full backdrop-blur-2xl text-center py-2">
            <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Men's Grooming</h3>
          </div>
        </div>

        {/* 3. Baby Care */}
        <div className="relative flex flex-col lg:col-span-2 items-center justify-end group cursor-pointer overflow-hidden">
          <Image fill src="/p7.webp" alt="Baby Care" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
          <div className="relative z-10 bg-[#f7d2e838] w-full backdrop-blur-2xl text-center py-2">
            <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Baby Care</h3>
          </div>
        </div>

        {/* 4. Pet Care */}
        <div className="relative flex flex-col lg:col-span-2 items-center justify-end group cursor-pointer overflow-hidden">
          <Image fill src="/p6.webp" alt="Pet Care" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
          <div className="relative z-10 w-full bg-[#f7d2e838] backdrop-blur-2xl text-center py-2">
            <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Pet Care</h3>
          </div>
        </div>

        {/* 5. Mother Care (Tall) */}
        <div className="relative lg:row-span-2 lg:col-span-2 flex flex-col items-center justify-end group cursor-pointer overflow-hidden">
          <Image fill 
         src="/p9.webp" alt="Mother Care" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
          <div className="relative z-10 bg-[#eaabc71e] w-full backdrop-blur-2xl text-center py-2">
            <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Mother Care</h3>
          </div>
        </div>

      

        {/* 7. Lip Care */}
        <div className="relative  flex flex-col lg:col-span-2 items-center justify-end group cursor-pointer overflow-hidden">
          <Image fill src="/p5.webp" alt="Lip Care" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
          <div className="relative bg-[#c4c8ce9c] z-10 w-full backdrop-blur-2xl text-center py-2">
            <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Lip Care</h3>
          </div>
        </div>
  {/* 6. Intimate Care */}
        <div className="relative flex flex-col lg:row-span-2 lg:col-span-2 items-center justify-end group cursor-pointer overflow-hidden">
          <Image fill src="/p2.webp" alt="Hygiene" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
          <div className="relative bg-[#c4c8ce9c] z-10 w-full backdrop-blur-2xl text-center py-2">
            <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Hygiene</h3>
          </div>
        </div>
        {/* 8. Foot Care */}
        <div className="relative lg:col-span-2 flex flex-col items-center justify-end group cursor-pointer overflow-hidden">
          <Image fill src="/p8.webp" alt="Foot Care" className="absolute inset-0 w-full h-full object-cover object-bottom mix-blend-multiply" />
          <div className="relative bg-[#c4c8ce9c] z-10 w-full backdrop-blur-2xl text-center py-2">
            <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Foot Care</h3>
          </div>
        </div>

        {/* 9. Hygiene (Spans 2 columns to fill the remaining space) */}
        <div className="relative lg:col-span-2 flex flex-col items-center justify-end group cursor-pointer overflow-hidden">
          <Image fill src="/p4.webp" alt="Intimate Care" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
          <div className="relative bg-[#f7d2e838] z-10 w-full backdrop-blur-2xl text-center py-2">
            <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Intimate Care </h3>
          </div>
        </div>

      </div>
    </section>
  );
}
