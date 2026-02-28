import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function CertificationSection() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center max-w-md">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gray-100">
            <ShoppingBag className="w-12 h-12 text-gray-400" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          No Products Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-6">
          We couldn’t find any items matching your filters.  
          Try adjusting your search or explore all products.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-lg border  border-black font-medium "
        >
          Browse All Products
        </Link>

      </div>
    </div>
  );
}
// import Image from "next/image";
// import React from "react";

// function CertificationSection() {
//   return (
//     <section className="py-16 border-t border-gray-100">
//       <div className="flex flex-wrap items-start justify-center gap-8 md:gap-12 lg:gap-20 px-4 sm:px-6 lg:px-12 xl:px-24 2xl:px-52">

//         {/* GMP */}
//         <div className="flex flex-col items-center justify-start text-center  space-y-3">
//           <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-24 lg:h-24">
//             <Image src="/gmp.png" alt="GMP Certified" fill className="object-contain" />
//           </div>
//           <h3 className="text-base text-black/80">
//             <span className="font-bold text-xl">GMP</span><br />
//             <span className="font-medium">CERTIFIED</span>
//           </h3>
//         </div>

//         {/* FDA */}
//         <div className="flex flex-col items-center justify-start text-center  space-y-3">
//           <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-24 lg:h-24">
//             <Image src="/fda.png" alt="FDA Approved" fill className="object-contain" />
//           </div>
//           <h3 className="text-base text-black/80">
//             <span className="font-bold text-xl">FDA</span><br />
//             <span className="font-medium">APPROVED</span>
//           </h3>
//         </div>

//         {/* ISO */}
//         <div className="flex flex-col items-center justify-start text-center  space-y-3">
//           <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-24 lg:h-24">
//             <Image src="/iso.png" alt="ISO Certified" fill className="object-contain" />
//           </div>
//           <h3 className="text-base text-black/80">
//             <span className="font-bold text-xl">ISO</span><br />
//             <span className="font-medium">CERTIFIED</span>
//           </h3>
//         </div>

//         {/* CRUELTY */}
//         <div className="flex flex-col items-center justify-start text-center  space-y-3">
//           <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-24 lg:h-24">
//             <Image src="/cruelty.png" alt="Cruelty Free" fill className="object-contain" />
//           </div>
//           <h3 className="text-base text-black/80">
//             <span className="font-bold text-xl">CRUELTY</span><br />
//             <span className="font-medium">FREE</span>
//           </h3>
//         </div>

//         {/* VEGAN */}
//         <div className="flex flex-col items-center justify-start text-center  space-y-3">
//           <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-24 lg:h-24">
//             <Image src="/vegan.png" alt="Vegan" fill className="object-contain" />
//           </div>
//           <h3 className="text-base text-black/80">
//             <span className="font-bold text-xl">VEGAN</span>
//           </h3>
//         </div>

//         {/* ECO */}
//         <div className="flex flex-col items-center justify-start text-center  space-y-3">
//           <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-24 lg:h-24">
//             <Image src="/eco.png" alt="Eco Friendly" fill className="object-contain" />
//           </div>
//           <h3 className="text-base text-black/80">
//             <span className="font-bold text-xl">ECO</span><br />
//             <span className="font-medium">FRIENDLY</span>
//           </h3>
//         </div>

//       </div>
//     </section>
//   );
// }

// export default CertificationSection;