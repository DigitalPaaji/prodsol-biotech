import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-gray-900 mb-6 relative inline-block">
            Services We Offer
            <span className="block w-16 h-0.5 bg-black absolute -bottom-3 left-1/2 transform -translate-x-1/2"></span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-sm md:text-base leading-relaxed">
            End-to-end cosmetic solutions tailored for your brand.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Left Card (Reverted to single static image that zooms slightly) */}
          <div className="lg:col-span-5 flex flex-col bg-white overflow-hidden shadow-sm border border-gray-100 group cursor-pointer hover:shadow-md transition-all duration-300">
            <div className="h-64 sm:h-80 w-full relative bg-gray-200 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=800&auto=format&fit=crop" 
                alt="Cosmetic Bottles" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <div className="p-8 flex flex-col flex-grow relative z-10 bg-white">
              <p className="text-blue-500 text-sm mb-3">Your satisfaction, our main service.</p>
              <h3 className="text-xl md:text-2xl font-bold uppercase mb-4 text-gray-900">
                Private Label Solutions
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-8 flex-grow">
                Ready-to-market cosmetic products with your branding. Ideal for start-ups and growing brands looking to launch quickly with proven formulations.
              </p>
              <div className="flex justify-end mt-auto">
                <ArrowRight className="w-6 h-6 text-orange-500 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </div>

          {/* Right Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Card 1: Contract Manufacturing (Hover reveals image) */}
            <div className="relative p-8  flex flex-col shadow-sm border border-gray-100 bg-white overflow-hidden group cursor-pointer hover:shadow-md transition-all duration-500">
              <div className="absolute inset-0 z-0">
                <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop" alt="Manufacturing" className="w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-lg font-bold uppercase mb-4 text-gray-900 group-hover:text-white transition-colors duration-300">
                  Contract Manufacturing
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-200 leading-relaxed mb-8 flex-grow transition-colors duration-300">
                  Large-scale, high-quality production facilities built to GMP, ISO, and FDA standards. Reliable, consistent, and scalable manufacturing for established Brands.
                </p>
                <div className="flex justify-end mt-auto">
                  <ArrowRight className="w-6 h-6 text-orange-500 group-hover:text-orange-400 group-hover:translate-x-2 transition-all duration-300" />
                </div>
              </div>
            </div>

            {/* Card 2: Product Development (Hover reveals image) */}
            <div className="relative p-8  flex flex-col shadow-sm border border-gray-100 bg-white overflow-hidden group cursor-pointer hover:shadow-md transition-all duration-500">
              <div className="absolute inset-0 z-0">
                <img src="https://images.unsplash.com/photo-1615397323218-12c82c35ea90?q=80&w=800&auto=format&fit=crop" alt="Development" className="w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-lg font-bold uppercase mb-4 text-gray-900 group-hover:text-white transition-colors duration-300">
                  Product Development
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-200 leading-relaxed mb-8 flex-grow transition-colors duration-300">
                  From concept to final product, our team guides you through formulation, testing, stability studies, and regulatory approvals.
                </p>
                <div className="flex justify-end mt-auto">
                  <ArrowRight className="w-6 h-6 text-orange-500 group-hover:text-orange-400 group-hover:translate-x-2 transition-all duration-300" />
                </div>
              </div>
            </div>

            {/* Card 3: Regulatory & Compliance (Hover reveals image) */}
             <div className="relative p-8  flex flex-col shadow-sm border border-gray-100 bg-white overflow-hidden group cursor-pointer hover:shadow-md transition-all duration-500">
              <div className="absolute inset-0 z-0">
                <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop" alt="Compliance" className="w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-lg font-bold uppercase mb-4 text-gray-900 group-hover:text-white transition-colors duration-300">
                  Regulatory & Compliance Support
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-200 leading-relaxed mb-8 flex-grow transition-colors duration-300">
                  Expert handling of documentation, claims, and certifications to ensure your products meet global standards.
                </p>
                <div className="flex justify-end mt-auto">
                  <ArrowRight className="w-6 h-6 text-orange-500 group-hover:text-orange-400 group-hover:translate-x-2 transition-all duration-300" />
                </div>
              </div>
            </div>

            {/* Card 4: Logistics & Delivery (Hover reveals image) */}
            <div className="relative p-8  flex flex-col shadow-sm border border-gray-100 bg-white overflow-hidden group cursor-pointer hover:shadow-md transition-all duration-500">
              <div className="absolute inset-0 z-0">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8ed7c862bc?q=80&w=800&auto=format&fit=crop" alt="Logistics" className="w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-lg font-bold uppercase mb-4 text-gray-900 group-hover:text-white transition-colors duration-300">
                  Logistics & Delivery
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-200 leading-relaxed mb-8 flex-grow transition-colors duration-300">
                  Efficient supply chain and global delivery services to ensure your products reach the market on time, every time.
                </p>
                <div className="flex justify-end mt-auto">
                  <ArrowRight className="w-6 h-6 text-orange-500 group-hover:text-orange-400 group-hover:translate-x-2 transition-all duration-300" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}