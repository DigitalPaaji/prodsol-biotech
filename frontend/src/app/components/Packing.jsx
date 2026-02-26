import React from 'react';
import { ArrowRight, Package, Sparkles, Leaf, Palette } from 'lucide-react';
import Image from 'next/image';

export default function PackagingInnovation() {
  const packagingFeatures = [
    {
      icon: <Package className="w-5 h-5 text-[#007e44]" />,
      title: "Wide Range of Formats",
      description: "Jars, bottles, tubes, pumps, droppers, airless dispensers, sprays"
    },
    {
      icon: <Palette className="w-5 h-5 text-[#007e44]" />,
      title: "Custom Branding",
      description: "Full flexibility in label design, embossing, colors, finishes (matte, glossy, metallic)"
    },
    {
      icon: <Leaf className="w-5 h-5 text-[#007e44]" />,
      title: "Eco-Friendly Options",
      description: "Recyclable, biodegradable, sustainable packaging alternatives"
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#007e44]" />,
      title: "Innovative Designs",
      description: "Sleek, modern, ergonomic, premium aesthetics tailored to your target market"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 xl:px-24 2xl:px-40 bg-white">
      {/* Header Section - Matching Services theme */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-medium tracking-wide text-gray-900 mb-6 relative inline-block">
          Packaging & Innovation
          <span className="block w-16 h-0.5 bg-black absolute -bottom-3 left-1/2 transform -translate-x-1/2"></span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-base md:text-base leading-relaxed">
          Designing solutions that reflect your brand identity
        </p>
      </div>

      {/* Left Text - Right Image Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Text Content */}
        <div className="order-2 lg:order-1">
          {/* Main description with matching typography */}
          <p className="text-gray-600 mb-8 leading-relaxed text-base">
            At Prodsol Biotech Pvt. Ltd., we believe that packaging is more 
            than just a container - it is the first impression of your brand. We offer 
            a wide portfolio of innovative, functional, and sustainable packaging 
            solutions that not only protect and preserve your formulations 
            but also enhance their market appeal.
          </p>
          
          {/* Packaging Features Grid - Matching card style from Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {packagingFeatures.map((feature, index) => (
              <div 
                key={index}
                className="relative p-5 flex flex-col shadow-sm border border-gray-100 bg-white overflow-hidden group hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium uppercase mb-2 text-[#007e44]">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Closing statement with arrow - Matching Services interaction */}
          <div className="group cursor-pointer">
            <p className="text-gray-800 italic border-l-4 border-[#007e44] pl-4 py-2 text-sm mb-4">
              From concept to final packaging, we provide innovative solutions 
              that bring your brand to life - beautifully and sustainably.
            </p>
            <div className="flex justify-end">
              <ArrowRight className="w-5 h-5 text-[#007e44] group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </div>
        </div>
        
        {/* Right Column: Image with hover effect - Matching Services style */}
        <div className="order-1 lg:order-2">
          <div className="relative group cursor-pointer overflow-hidden shadow-sm border border-gray-100 bg-white">
            {/* Image container with zoom on hover */}
            <div className="relative w-full aspect-4/3 overflow-hidden bg-gray-100">
              <Image 
                src="/packing.webp"
                alt="Packaging solutions showcase"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Optional overlay gradient on hover - subtle like Services section */}
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Minimal badge - optional, can be removed if not needed */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-[#007e44] border border-gray-200 shadow-sm">
              Premium Quality
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decoration - matching Services section */}
      <div className="mt-16 text-center text-gray-400 text-xs">
        <div className="w-full h-px bg-linear-to-r from-transparent via-gray-300 to-transparent"></div>
        <p className="mt-4 text-gray-400 text-xs tracking-wider">INNOVATION • QUALITY • SUSTAINABILITY</p>
      </div>
    </section>
  );
}