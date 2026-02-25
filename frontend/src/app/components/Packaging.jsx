import React from 'react';
import { Package, Recycle, Sparkles, PenTool } from 'lucide-react';

export default function PackagingInnovation() {
  const solutions = [
    {
      title: "Wide Range of Formats",
      description: "Jars, bottles, tubes, pumps, droppers, airless dispensers, and sprays.",
      icon: <Package className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Custom Branding",
      description: "Full flexibility in label design, embossing, colors, and finishes (matte, glossy, metallic).",
      icon: <PenTool className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Eco-Friendly Options",
      description: "Recyclable, biodegradable, and sustainable packaging alternatives.",
      icon: <Recycle className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Innovative Designs",
      description: "Sleek, modern, ergonomic, and premium aesthetics tailored to your market.",
      icon: <Sparkles className="w-6 h-6 text-green-500" />,
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <span className="text-green-600 font-bold tracking-widest uppercase text-sm">
              Innovation & Aesthetics
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
              Packaging & <br />
              <span className="text-green-600">Innovation</span>
            </h2>
            <p className="text-xl text-gray-800 font-medium leading-tight max-w-md">
              Designing solutions that reflect your brand identity.
            </p>
          </div>
          <div className="lg:border-l lg:border-gray-200 lg:pl-12">
            <p className="text-gray-600 leading-relaxed italic">
              "At Prodsol Biotech Pvt. Ltd., we believe that packaging is more
              than just a container — it is the first impression of your brand. 
              We offer innovative, functional, and sustainable solutions that 
              enhance market appeal."
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((item, index) => (
            <div 
              key={index} 
              className="group p-8 border border-gray-100 bg-gray-50 hover:bg-black transition-all duration-300 rounded-2xl"
            >
              <div className="mb-6 bg-white w-12 h-12 flex items-center justify-center rounded-lg shadow-sm group-hover:bg-green-600 transition-colors">
                <div className="group-hover:text-white transition-colors">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-black mb-3 group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 relative overflow-hidden rounded-3xl bg-black px-8 py-12 text-center">
          {/* Subtle Decorative Green Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[100px] -mr-32 -mt-32"></div>
          
          <h4 className="relative z-10 text-white text-2xl md:text-3xl font-light">
            Bringing your brand to life — <span className="text-green-500 font-semibold">beautifully and sustainably.</span>
          </h4>
          <button className="relative z-10 mt-8 px-8 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-full transition-all hover:scale-105">
            Explore Catalog
          </button>
        </div>
      </div>
    </section>
  );
}