"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function ProductRange() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [openCategory, setOpenCategory] = useState("Skin Care");

  // Updated categories list including all items
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
        <div 
          className="relative lg:row-span-2 lg:col-span-2 bg-[#c4c8ce4f] flex flex-col items-center justify-end group cursor-pointer overflow-hidden"
          onMouseEnter={() => setHoveredIndex(0)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Image fill src="/p1.webp" alt="Skin Care" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply " />
          <div className="relative z-10 w-full">
       
            {/* Expandable Item List on Hover */}
            <div className={`overflow-hidden transition-all duration-500  ${hoveredIndex === 0 ? "max-h-40 py-3" : "max-h-0"}`}>
              <ul className="flex flex-wrap gap-2 justify-center px-4">
                {categories[0].items.slice(0, 4).map((item, i) => (
                  <li key={i} className="text-sm uppercase tracking-wider bg-black/40 text-white px-2 py-1 rounded">
                    {item}
                  </li>
                ))}
                {categories[0].items.length > 4 && (
                  <li className="text-sm text-white/80 py-1 italic">+{categories[0].items.length - 4} more</li>
                )}
              </ul>
            </div>
                 <div className="backdrop-blur-2xl text-center py-2">
              <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Skin Care</h3>
            </div>

          </div>
        </div>

        {/* 2. Men's Grooming */}
        <div 
          className="relative flex flex-col lg:col-span-2 items-center justify-end group cursor-pointer overflow-hidden"
          onMouseEnter={() => setHoveredIndex(5)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Image fill src="/p3.webp" alt="Men's Grooming" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply " />
          <div className="relative z-10 w-full">
         
            {/* Expandable Item List on Hover */}
            <div className={`overflow-hidden transition-all duration-500  ${hoveredIndex === 5 ? "max-h-40 py-3" : "max-h-0"}`}>
              <ul className="flex flex-wrap gap-2 justify-center px-4">
                {categories[5].items.slice(0, 4).map((item, i) => (
                  <li key={i} className="text-sm uppercase tracking-wider bg-black/40 text-white px-2 py-1 rounded">
                    {item}
                  </li>
                ))}
                {categories[5].items.length > 4 && (
                  <li className="text-sm text-white/80 py-1 italic">+{categories[5].items.length - 4} more</li>
                )}
              </ul>
            </div>
               <div className="bg-[#f7d2e838] w-full backdrop-blur-2xl text-center py-2">
              <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Men's Grooming</h3>
            </div>
          </div>
        </div>

        {/* 3. Baby Care */}
        <div 
          className="relative flex flex-col lg:col-span-2 items-center justify-end group cursor-pointer overflow-hidden"
          onMouseEnter={() => setHoveredIndex(1)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Image fill src="/p7.webp" alt="Baby Care" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply " />
          <div className="relative z-10 w-full">
 
            {/* Expandable Item List on Hover */}
            <div className={`overflow-hidden transition-all duration-500  ${hoveredIndex === 1 ? "max-h-40 py-3" : "max-h-0"}`}>
              <ul className="flex flex-wrap gap-2 justify-center px-4">
                {categories[1].items.slice(0, 4).map((item, i) => (
                  <li key={i} className="text-sm uppercase tracking-wider bg-black/40 text-white px-2 py-1 rounded">
                    {item}
                  </li>
                ))}
                {categories[1].items.length > 4 && (
                  <li className="text-sm text-white/80 py-1 italic">+{categories[1].items.length - 4} more</li>
                )}
              </ul>
            </div>
                       <div className="bg-[#f7d2e838] w-full backdrop-blur-2xl text-center py-2">
              <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Baby Care</h3>
            </div>
          </div>
        </div>

        {/* 4. Pet Care */}
        <div 
          className="relative flex flex-col lg:col-span-2 items-center justify-end group cursor-pointer overflow-hidden"
          onMouseEnter={() => setHoveredIndex(8)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Image fill src="/p6.webp" alt="Pet Care" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply " />
          <div className="relative z-10 w-full">
          
            {/* Expandable Item List on Hover */}
            <div className={`overflow-hidden transition-all duration-500  ${hoveredIndex === 8 ? "max-h-40 py-3" : "max-h-0"}`}>
              <ul className="flex flex-wrap gap-2 justify-center px-4">
                {categories[8].items.slice(0, 4).map((item, i) => (
                  <li key={i} className="text-sm uppercase tracking-wider bg-black/40 text-white px-2 py-1 rounded">
                    {item}
                  </li>
                ))}
                {categories[8].items.length > 4 && (
                  <li className="text-sm text-white/80 py-1 italic">+{categories[8].items.length - 4} more</li>
                )}
              </ul>
            </div>
              <div className="w-full bg-[#f7d2e838] backdrop-blur-2xl text-center py-2">
              <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Pet Care</h3>
            </div>
          </div>
        </div>

        {/* 5. Mother Care (Tall) */}
        <div 
          className="relative lg:row-span-2 lg:col-span-2 flex flex-col items-center justify-end group cursor-pointer overflow-hidden"
          onMouseEnter={() => setHoveredIndex(4)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Image fill src="/p9.webp" alt="Mother Care" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply " />
          <div className="relative z-10 w-full">
        
            {/* Expandable Item List on Hover */}
            <div className={`overflow-hidden transition-all duration-500  ${hoveredIndex === 4 ? "max-h-40 py-3" : "max-h-0"}`}>
              <ul className="flex flex-wrap gap-2 justify-center px-4">
                {categories[4].items.slice(0, 4).map((item, i) => (
                  <li key={i} className="text-sm uppercase tracking-wider bg-black/40 text-white px-2 py-1 rounded">
                    {item}
                  </li>
                ))}
                {categories[4].items.length > 4 && (
                  <li className="text-sm text-white/80 py-1 italic">+{categories[4].items.length - 4} more</li>
                )}
              </ul>
            </div>
                <div className="bg-[#eaabc71e] w-full backdrop-blur-2xl text-center py-2">
              <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Mother Care</h3>
            </div>
          </div>
        </div>

        {/* 7. Lip Care */}
        <div 
          className="relative flex flex-col lg:col-span-2 items-center justify-end group cursor-pointer overflow-hidden"
          onMouseEnter={() => setHoveredIndex(7)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Image fill src="/p5.webp" alt="Lip Care" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply " />
          <div className="relative z-10 w-full">
          
            {/* Expandable Item List on Hover */}
            <div className={`overflow-hidden transition-all duration-500  ${hoveredIndex === 7 ? "max-h-40 py-3" : "max-h-0"}`}>
              <ul className="flex flex-wrap gap-2 justify-center px-4">
                {categories[7].items.slice(0, 4).map((item, i) => (
                  <li key={i} className="text-sm uppercase tracking-wider bg-black/40 text-white px-2 py-1 rounded">
                    {item}
                  </li>
                ))}
                {categories[7].items.length > 4 && (
                  <li className="text-sm text-white/80 py-1 italic">+{categories[7].items.length - 4} more</li>
                )}
              </ul>
            </div>
              <div className="bg-[#c4c8ce9c] w-full backdrop-blur-2xl text-center py-2">
              <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Lip Care</h3>
            </div>
          </div>
        </div>

        {/* 6. Intimate Care */}
        <div 
          className="relative flex flex-col lg:row-span-2 lg:col-span-2 items-center justify-end group cursor-pointer overflow-hidden"
          onMouseEnter={() => setHoveredIndex(6)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Image fill src="/p2.webp" alt="Hygiene" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply " />
          <div className="relative z-10 w-full">
 
            {/* Expandable Item List on Hover */}
            <div className={`overflow-hidden transition-all duration-500  ${hoveredIndex === 6 ? "max-h-40 py-3" : "max-h-0"}`}>
              <ul className="flex flex-wrap gap-2 justify-center px-4">
                {categories[6].items.slice(0, 4).map((item, i) => (
                  <li key={i} className="text-sm uppercase tracking-wider bg-black/40 text-white px-2 py-1 rounded">
                    {item}
                  </li>
                ))}
                {categories[6].items.length > 4 && (
                  <li className="text-sm text-white/80 py-1 italic">+{categories[6].items.length - 4} more</li>
                )}
              </ul>
            </div>
                       <div className="bg-[#c4c8ce9c] w-full backdrop-blur-2xl text-center py-2">
              <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Intimate Care</h3>
            </div>
          </div>
        </div>

        {/* 8. Foot Care */}
        <div 
          className="relative lg:col-span-2 flex flex-col items-center justify-end group cursor-pointer overflow-hidden"
          onMouseEnter={() => setHoveredIndex(3)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Image fill src="/p8.webp" alt="Foot Care" className="absolute inset-0 w-full h-full object-cover object-bottom mix-blend-multiply " />
          <div className="relative z-10 w-full">
          
            {/* Expandable Item List on Hover */}
            <div className={`overflow-hidden transition-all duration-500  ${hoveredIndex === 3 ? "max-h-40 py-3" : "max-h-0"}`}>
              <ul className="flex flex-wrap gap-2 justify-center px-4">
                {categories[3].items.slice(0, 4).map((item, i) => (
                  <li key={i} className="text-sm uppercase tracking-wider bg-black/40 text-white px-2 py-1 rounded">
                    {item}
                  </li>
                ))}
                {categories[3].items.length > 4 && (
                  <li className="text-sm text-white/80 py-1 italic">+{categories[3].items.length - 4} more</li>
                )}
              </ul>
            </div>
              <div className="bg-[#c4c8ce9c] w-full backdrop-blur-2xl text-center py-2">
              <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Foot Care</h3>
            </div>
          </div>
        </div>

        {/* 9. Hygiene */}
        <div 
          className="relative lg:col-span-2 flex flex-col items-center justify-end group cursor-pointer overflow-hidden"
          onMouseEnter={() => setHoveredIndex(2)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Image fill src="/p4.webp" alt="Hygiene" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply " />
          <div className="relative z-10 w-full">
       
            {/* Expandable Item List on Hover */}
            <div className={`overflow-hidden transition-all duration-500  ${hoveredIndex === 2 ? "max-h-40 py-3" : "max-h-0"}`}>
              <ul className="flex flex-wrap gap-2 justify-center px-4">
                {categories[2].items.slice(0, 4).map((item, i) => (
                  <li key={i} className="text-sm uppercase tracking-wider bg-black/40 text-white px-2 py-1 rounded">
                    {item}
                  </li>
                ))}
                {categories[2].items.length > 4 && (
                  <li className="text-sm text-white/80 py-1 italic">+{categories[2].items.length - 4} more</li>
                )}
              </ul>
            </div>
                 <div className="bg-[#f7d2e838] w-full backdrop-blur-2xl text-center py-2">
              <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Hygiene</h3>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
// "use client";
// import Image from "next/image";
// import React, { useState } from "react";

// export default function ProductRange() {
//    const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [openCategory, setOpenCategory] = useState("Skin Care");

//   // Updated categories list including Foot Care and Hygiene
//   const categories = [
//     { name: "Skin Care", items: ["Face Wash", "Face Scrub", "Face Serum", "Face Packs & Masks", "Toners"] },
//     { name: "Baby Care", items: ["Nipple Butter", "Baby FaceWash", "Baby Shampoo", "Baby Lotions"] },
//     { name: "Hygiene", items: ["Hand Sanitizers", "Hand Wash", "Body Wash"] },
//     { name: "Foot Care", items: ["Foot Cream", "Foot Scrub", "Crack Heel Cream"] },
//     { name: "Mother Care", items: ["Breast Firming Creams", "Stretch Mark Cream"] },
//     { name: "Men's Grooming", items: ["Beard Wash", "Beard Grooming", "Hair Styling Wax"] },
//     { name: "Intimate Care", items: ["Sexual Wellness Products", "Intimate Toner"] },
//     { name: "Lip Care", items: ["Lip Liners", "Lip Oils", "Lip Stains", "Lip Tints"] },
//     { name: "Pet Care", items: ["Pet Grooming Products", "Pet Paw Care"] },
//   ];

//   return (
//     <section className="px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52 py-16 text-center">
//       <div className="text-center mb-16">
//         <h2 className="text-3xl md:text-4xl font-medium tracking-wide text-gray-900 mb-6 relative inline-block">
//           Our Product Range
//           <span className="block w-16 h-0.5 bg-black absolute -bottom-3 left-1/2 transform -translate-x-1/2"></span>
//         </h2>
//         <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-sm md:text-base leading-relaxed">
//           Comprehensive categories covering beauty, personal, and specialized care.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 auto-rows-[300px]">
        
//         {/* 1. Skin Care (Tall) */}
//         <div 
//                   onMouseEnter={() => setHoveredIndex(0)}
//           onMouseLeave={() => setHoveredIndex(null)}
//         className="relative lg:row-span-2 lg:col-span-2 bg-[#c4c8ce4f] flex flex-col items-center justify-end group cursor-pointer overflow-hidden">
//           <Image fill src="/p1.webp" alt="Skin Care" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply " />
//           <div className="relative z-10 w-full backdrop-blur-2xl text-center py-2">
//             <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Skin Care</h3>
//           </div>
//           {/* Expandable Item List on Hover */}
//             <div className={`overflow-hidden transition-all duration-500  ${hoveredIndex === 0 ? "max-h-40 py-3" : "max-h-0"}`}>
//               <ul className="flex flex-wrap gap-2 justify-center px-4">
//                 {categories[0].items.slice(0, 4).map((item, i) => (
//                   <li key={i} className="text-sm uppercase tracking-wider bg-black/40 text-white px-2 py-1 rounded">
//                     {item}
//                   </li>
//                 ))}
//                 {categories[0].items.length > 4 && (
//                   <li className="text-sm text-white/80 py-1 italic">+{categories[0].items.length - 4} more</li>
//                 )}
//               </ul>
//             </div>
//         </div>

//         {/* 2. Men's Grooming */}
//         <div className="relative flex flex-col lg:col-span-2 items-center justify-end group cursor-pointer overflow-hidden">
//           <Image fill src="/p3.webp" alt="Men's Grooming" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
//           <div className="relative z-10 bg-[#f7d2e838] w-full backdrop-blur-2xl text-center py-2">
//             <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Men's Grooming</h3>
//           </div>
//         </div>

//         {/* 3. Baby Care */}
//         <div className="relative flex flex-col lg:col-span-2 items-center justify-end group cursor-pointer overflow-hidden">
//           <Image fill src="/p7.webp" alt="Baby Care" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
//           <div className="relative z-10 bg-[#f7d2e838] w-full backdrop-blur-2xl text-center py-2">
//             <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Baby Care</h3>
//           </div>
//         </div>

//         {/* 4. Pet Care */}
//         <div className="relative flex flex-col lg:col-span-2 items-center justify-end group cursor-pointer overflow-hidden">
//           <Image fill src="/p6.webp" alt="Pet Care" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
//           <div className="relative z-10 w-full bg-[#f7d2e838] backdrop-blur-2xl text-center py-2">
//             <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Pet Care</h3>
//           </div>
//         </div>

//         {/* 5. Mother Care (Tall) */}
//         <div className="relative lg:row-span-2 lg:col-span-2 flex flex-col items-center justify-end group cursor-pointer overflow-hidden">
//           <Image fill 
//          src="/p9.webp" alt="Mother Care" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
//           <div className="relative z-10 bg-[#eaabc71e] w-full backdrop-blur-2xl text-center py-2">
//             <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Mother Care</h3>
//           </div>
//         </div>

      

//         {/* 7. Lip Care */}
//         <div className="relative  flex flex-col lg:col-span-2 items-center justify-end group cursor-pointer overflow-hidden">
//           <Image fill src="/p5.webp" alt="Lip Care" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
//           <div className="relative bg-[#c4c8ce9c] z-10 w-full backdrop-blur-2xl text-center py-2">
//             <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Lip Care</h3>
//           </div>
//         </div>
//   {/* 6. Intimate Care */}
//         <div className="relative flex flex-col lg:row-span-2 lg:col-span-2 items-center justify-end group cursor-pointer overflow-hidden">
//           <Image fill src="/p2.webp" alt="Hygiene" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
//           <div className="relative bg-[#c4c8ce9c] z-10 w-full backdrop-blur-2xl text-center py-2">
//             <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Hygiene</h3>
//           </div>
//         </div>
//         {/* 8. Foot Care */}
//         <div className="relative lg:col-span-2 flex flex-col items-center justify-end group cursor-pointer overflow-hidden">
//           <Image fill src="/p8.webp" alt="Foot Care" className="absolute inset-0 w-full h-full object-cover object-bottom mix-blend-multiply" />
//           <div className="relative bg-[#c4c8ce9c] z-10 w-full backdrop-blur-2xl text-center py-2">
//             <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Foot Care</h3>
//           </div>
//         </div>

//         {/* 9. Hygiene (Spans 2 columns to fill the remaining space) */}
//         <div className="relative lg:col-span-2 flex flex-col items-center justify-end group cursor-pointer overflow-hidden">
//           <Image fill src="/p4.webp" alt="Intimate Care" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
//           <div className="relative bg-[#f7d2e838] z-10 w-full backdrop-blur-2xl text-center py-2">
//             <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Intimate Care </h3>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }
