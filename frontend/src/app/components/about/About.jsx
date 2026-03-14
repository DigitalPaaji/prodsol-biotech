import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section className="w-full px-6 lg:px-16 xl:px-24 2xl:px-40 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12">

        {/* Left Column - Content */}
        <div className="order-2 lg:order-2">
          <h2 className="text-sm font-medium text-gray-600 tracking-wider mb-4">
            About Us
          </h2>

          <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6 leading-tight relative">
            Building a trusted partner for personal care brands
            <span className="block w-16 h-0.5 bg-black absolute -bottom-3 left-0"></span>
          </h3>

          <p className="text-gray-600 mb-6 text-base leading-relaxed">
            Founded in 2020 by Mr. Manu Seth, Prodsol Biotech Pvt. Ltd. was
            established to fill a significant gap in the Indian personal care
            industry: the lack of a truly sustainable, high-quality, and
            transparent manufacturing partner for emerging and established
            beauty brands.
          </p>

          <p className="text-gray-600 mb-6 text-base leading-relaxed">
            Mr. Seth, with a vision to redefine contract manufacturing
            standards, recognized that while India had enormous potential in
            personal care and wellness, many brands were struggling with
            inconsistent quality, opaque processes, and limited R&D support.
            Prodsol Biotech was created to solve exactly this challenge — to
            become a trustworthy partner that combines scientific rigor, market
            intelligence, and ethical practices into one seamless ecosystem.
          </p>

          <p className="text-gray-600 mb-6 text-base leading-relaxed">
            Today, Prodsol Biotech stands as a leading full-service contract
            manufacturer of skincare, hair care, baby care, pet care, and
            intimate care products — offering clients the ability to go from
            idea to shelf under one roof.
          </p>

          <button className="group flex items-center gap-2 text-[#2F7E44] font-medium hover:text-[#1f5a30] transition-colors">
            <span>Read More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Column - Image */}
        <div className="order-1 lg:order-1 w-full flex justify-center">
          <div className="relative w-full max-w-lg aspect-square overflow-hidden ">
            <Image
              src="/11.webp"
              alt="Prodsol Biotech manufacturing"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* <div className="absolute -top-12 -right-12 w-40 h-40 relative">
              <Image
                src="/packing.webp"
                alt="Packaging products"
                fill
                className="object-cover"
              />
            </div> */}
          </div>
        </div>

      </div>
    </section>
  );
}