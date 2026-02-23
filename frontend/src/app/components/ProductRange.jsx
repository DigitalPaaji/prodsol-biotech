"use client"
import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

export default function ProductRange() {
  // Sidebar category state for simple accordion toggle
  const [openCategory, setOpenCategory] = useState('Skin Care');

  const categories = [
    { name: 'Skin Care', items: ['Face Wash', 'Face Scrub', 'Face Serum', 'Face Packs & Masks', 'Toners', 'Derma Products'] },
    { name: 'Baby Care', items: ['Nipple Butter', 'Baby FaceWash', 'Baby Shampoo', 'Baby Body Oil', 'Baby Lotions', 'Nappy Rash Cream'] },
    { name: 'Hygiene', items: ['Hand Sanitizers', 'Hand Wash'] },
    { name: 'Mother Care', items: ['Breast Firming Creams', 'Stretch Mark Cream'] },
    { name: 'Men\'s Grooming', items: ['Beard Wash', 'Beard Grooming', 'Hair Styling Wax', 'Men\'s Gels', 'Men\'s Creams', 'Foaming Wash'] },
    { name: 'Intimate Care', items: ['Sexual Wellness Products', 'Intimate Toner'] },
    { name: 'Lip Care', items: ['Lip Liners', 'Lip Oils', 'Lip Stains', 'Lip Tints', 'Lip Balms', 'Lip Masks'] },
    { name: 'Pet Care', items: ['Pet Grooming Products', 'Pet Paw Care', 'Pet Shampoo & Wash'] },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-gray-900 mb-4 relative inline-block">
            Our Product Range
            <span className="block w-16 h-0.5 bg-black absolute -bottom-2 left-0"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mt-4 text-sm md:text-base leading-relaxed">
            Comprehensive categories covering beauty, personal, and specialized care.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Sidebar: Categories (30% width) */}
          {/* <div className="w-full lg:w-1/4 flex flex-col gap-2">
            {categories.map((cat) => (
              <div key={cat.name} className="border-b border-gray-100 last:border-0 pb-2">
                <button 
                  onClick={() => setOpenCategory(openCategory === cat.name ? '' : cat.name)}
                  className="w-full flex items-center justify-between py-3 text-left font-semibold text-gray-800 hover:text-orange-500 transition-colors"
                >
                  {cat.name}
                  {openCategory === cat.name ? (
                    <ChevronDown className="w-5 h-5 text-orange-500" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                
         
                <div className={`overflow-hidden transition-all duration-300 ${openCategory === cat.name ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                  <ul className="pl-4 space-y-2 border-l-2 border-orange-100 ml-2 mt-2">
                    {cat.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 hover:text-orange-500 cursor-pointer transition-colors">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div> */}

       
          <div className="w-full ">
          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[220px]">
              
    
              <div className="relative lg:row-span-2 bg-[#a3bce0] rounded-md flex flex-col items-center justify-end p-4 group cursor-pointer overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=400&auto=format&fit=crop" 
                  alt="Face Wash" 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="relative z-10 w-full text-center pb-2">
                  <h3 className="text-gray-900 font-bold tracking-widest uppercase text-sm drop-shadow-sm">Skin Care</h3>
                </div>
              </div>

              {/* 2. Oral Care */}
              <div className="relative bg-[#b2dfcf] rounded-md flex flex-col items-center justify-end p-4 group cursor-pointer overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=400&auto=format&fit=crop" 
                  alt="Oral Care" 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="relative z-10 w-full text-center pb-2">
                  <h3 className="text-gray-900 font-bold tracking-widest uppercase text-sm drop-shadow-sm">Men's Grooming</h3>
                </div>
              </div>

              {/* 3. Sunscreen */}
              <div className="relative bg-[#fbe089] rounded-md flex flex-col items-center justify-end p-4 group cursor-pointer overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=400&auto=format&fit=crop" 
                  alt="Sunscreen" 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="relative z-10 w-full text-center pb-2">
                  <h3 className="text-gray-900 font-bold tracking-widest uppercase text-sm drop-shadow-sm">Baby Care</h3>
                </div>
              </div>

              {/* 4. Face Serum */}
              <div className="relative bg-[#fcdbb6] rounded-md flex flex-col items-center justify-end p-4 group cursor-pointer overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=400&auto=format&fit=crop" 
                  alt="Face Serum" 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="relative z-10 w-full text-center pb-2">
                  <h3 className="text-gray-900 font-bold tracking-widest uppercase text-sm drop-shadow-sm">Pet Care
</h3>
                </div>
              </div>

              {/* 5. Shampoo (Spans 2 rows) */}
              <div className="relative lg:row-span-2 bg-[#eaabc7] rounded-md flex flex-col items-center justify-end p-4 group cursor-pointer overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=400&auto=format&fit=crop" 
                  alt="Shampoo" 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="relative z-10 w-full text-center pb-2">
                  <h3 className="text-gray-900 font-bold tracking-widest uppercase text-sm drop-shadow-sm">Mother Care</h3>
                </div>
              </div>

              {/* 6. Face Sheet Mask (With Ribbon) */}
              <div className="relative bg-[#f5dfbb] rounded-md flex flex-col items-center justify-end p-4 group cursor-pointer overflow-hidden">
                {/* 500 MOQ Ribbon */}
                <div className="absolute top-0 left-0 w-28 h-28 overflow-hidden z-20">
                  <div className="absolute top-4 -left-8 w-36 transform -rotate-45 bg-[#0b1f3b] text-white text-center text-[10px] font-bold py-1.5 shadow-md flex justify-center items-center">
                    <span className="text-yellow-400 mr-1">START WITH</span> 
                    <span className="text-sm">500</span> 
                    <span className="ml-1">MOQ</span>
                  </div>
                </div>

                <img 
                  src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=400&auto=format&fit=crop" 
                  alt="Face Sheet Mask" 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="relative z-10 w-full text-center pb-2">
                  <h3 className="text-gray-900 font-bold tracking-widest uppercase text-sm drop-shadow-sm">Intimate Care</h3>
                </div>
              </div>

              {/* 7. Hair Serum */}
              <div className="relative bg-[#bee7f4] rounded-md flex flex-col items-center justify-end p-4 group cursor-pointer overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=400&auto=format&fit=crop" 
                  alt="Hair Serum" 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="relative z-10 w-full text-center pb-2">
                  <h3 className="text-gray-900 font-bold tracking-widest uppercase text-sm drop-shadow-sm">Lip Care
</h3>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}