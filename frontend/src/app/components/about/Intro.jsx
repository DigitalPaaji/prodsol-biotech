import Image from 'next/image';
import React from 'react'

export default function Intro() {
      const challenges = [
    "Inconsistent quality",
    "Lack of transparency",
    "Limited R&D support"
  ];
  
  const categories = [
    "Skincare", "Haircare", "Baby care", "Pet care", "Intimate care"
  ];
  return (
  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center  px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52 py-16 lg:py-24">
          
          
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#007e44] border-b border-gray-200 pb-2">
              Our Story
            </span>
            
            <h2 className="text-3xl md:text-4xl font-medium mt-6 mb-6">
              Redefining Contract Manufacturing 
              <span className="italic"> Standards</span>
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              With a vision to redefine contract manufacturing standards, the company addresses challenges such as:
            </p>
            
            <ul className="space-y-3 mb-8">
              {challenges.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#007e44]" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Today, the company is a full-service contract manufacturer for:
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {category}
                </span>
              ))}
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              They provide end-to-end solutions from idea to final product.
            </p>
          </div>
          
          
          <div className="relative">
            <div className="relative overflow-hidden">
              <Image
                src="/p4.webp"
                alt=" "
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-xl font-medium">Mr. Manu Seth</h3>
                <p className="text-gray-300">Founder, Prodsol Biotech Pvt. Ltd.</p>
              </div>
            </div>
            
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#007e44]/10 rounded-full -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#007e44]/10 rounded-full -z-10" />
          </div>
        </div>
 

  )
}

