import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52 ">
     
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium  tracking-wide text-gray-900 mb-6 relative inline-block">
            Services We Offer
            <span className="block w-16 h-0.5 bg-black absolute -bottom-3 left-1/2 transform -translate-x-1/2"></span>
          </h2>
       <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-base md:text-base leading-relaxed">
  End-to-end cosmetic solutions tailored to support and scale your brand&apos;s success.
</p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Left Card (Reverted to single static image that zooms slightly) */}
          <div className="lg:col-span-5 flex flex-col bg-white overflow-hidden shadow-sm border border-gray-100 group cursor-pointer hover:shadow-md transition-all duration-300">
            <div className="h-64 sm:h-80 w-full relative bg-gray-200 overflow-hidden">
              <Image fill src="/s1.webp" 
                alt="Cosmetic Bottles" 
                className="w-full h-full object-cover object-top" 
              />
            </div>
            <div className="p-8 flex flex-col grow relative z-10 bg-white">
              <p className=" text-base mb-3">Complete solutions for your cosmetic brand.</p>
              <h3 className="text-xl md:text-2xl font-medium uppercase mb-4 text-[#007e44]">
                Private Label Solutions
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-8 flex-grow">
Ready-to-market cosmetic products customized with your branding. Ideal for start-ups and growing brands looking to launch quickly using proven, high-quality formulations.
              </p>
              <div className="flex justify-end mt-auto">
                <ArrowRight className="w-6 h-6 text-[#007e44] group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </div>

          {/* Right Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Card 1: Contract Manufacturing (Hover reveals image) */}
            <div className="relative p-8  flex flex-col shadow-sm border border-gray-100 bg-white overflow-hidden group cursor-pointer hover:shadow-md transition-all duration-500">
              <div className="absolute inset-0 z-0">
                <Image fill src="/s6.webp" alt="Manufacturing" className="w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-linear-to-br from-black/40 via-black/40 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-lg font-medium uppercase mb-4 text-[#007e44] group-hover:text-white transition-colors duration-300">
                  Contract Manufacturing
                </h3>
                <p className="text-base text-gray-600 group-hover:text-gray-200 leading-relaxed mb-8 grow transition-colors duration-300">
              Large-scale, high-quality production facilities built to GMP, ISO, and FDA standards. Reliable, consistent, and scalable manufacturing for established brands.
                </p>
                <div className="flex justify-end mt-auto">
                  <ArrowRight className="w-6 h-6 text-[#007e44]  group-hover:translate-x-2 transition-all duration-300" />
                </div>
              </div>
            </div>

            {/* Card 2: Product Development (Hover reveals image) */}
            <div className="relative p-8  flex flex-col shadow-sm border border-gray-100 bg-white overflow-hidden group cursor-pointer hover:shadow-md transition-all duration-500">
              <div className="absolute inset-0 z-0">
                <Image fill 
              src="/s7.webp"
                alt="Development" className="w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-lg font-medium uppercase mb-4 text-[#007e44] group-hover:text-white transition-colors duration-300">
                  Product Development
                </h3>
                <p className="text-base text-gray-600 group-hover:text-gray-200 leading-relaxed mb-8 flex-grow transition-colors duration-300">
               From concept to final product, our experts guide you through formulation, testing, stability studies, and regulatory approvals.
                </p>
                <div className="flex justify-end mt-auto">
                  <ArrowRight className="w-6 h-6 text-[#007e44]  group-hover:translate-x-2 transition-all duration-300" />
                </div>
              </div>
            </div>

            {/* Card 3: Regulatory & Compliance (Hover reveals image) */}
             <div className="relative p-8  flex flex-col shadow-sm border border-gray-100 bg-white overflow-hidden group cursor-pointer hover:shadow-md transition-all duration-500">
              <div className="absolute inset-0 z-0">
                <Image fill src="/s4.webp" alt="Compliance" className="w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-linear-to-b from-black/70 via-text-black/50 to-text-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-lg font-medium uppercase mb-4 text-[#007e44] group-hover:text-white transition-colors duration-300">
                  Regulatory & Compliance Support
                </h3>
                <p className="text-base text-gray-600 group-hover:text-gray-200 leading-relaxed mb-8 flex-grow transition-colors duration-300">
                Expert support in documentation, claims, and certifications to ensure your products meet global regulatory standards.
                </p>
                <div className="flex justify-end mt-auto">
                  <ArrowRight className="w-6 h-6 text-[#007e44]  group-hover:translate-x-2 transition-all duration-300" />
                </div>
              </div>
            </div>

            {/* Card 4: Logistics & Delivery (Hover reveals image) */}
            <div className="relative p-8  flex flex-col shadow-sm border border-gray-100 bg-white overflow-hidden group cursor-pointer hover:shadow-md transition-all duration-500">
              <div className="absolute inset-0 z-0">
                <Image fill src="/s9.webp" alt="Logistics" className="w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="rela tive z-10 flex flex-col h-full">
                <h3 className="text-lg font-medium uppercase mb-4 text-[#007e44] group-hover:text-white transition-colors duration-300">
                  Logistics & Delivery
                </h3>
                <p className="text-base text-gray-600 group-hover:text-gray-200 leading-relaxed mb-8 grow transition-colors duration-300">
                Efficient supply chain management and global delivery solutions to ensure your products reach the market on time, every time.
                </p>
                <div className="flex justify-end mt-auto">
                  <ArrowRight className="w-6 h-6 text-[#007e44]  group-hover:translate-x-2 transition-all duration-300" />
                </div>
              </div>
            </div>

          </div>
        </div>
     
    </section>
  );
}