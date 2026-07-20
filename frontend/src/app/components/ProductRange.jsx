"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function ProductRange() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [openCategory, setOpenCategory] = useState("Skin Care");

  // Updated categories list including all items
  // const categories = [
  //   { name: "Skin Care", items: ["Face Wash", "Face Scrub", "Face Serum", "Face Packs & Masks", "Toners"] },
  //   { name: "Baby Care", items: ["Nipple Butter", "Baby FaceWash", "Baby Shampoo", "Baby Lotions"] },
  //   { name: "Hygiene", items: ["Hand Sanitizers", "Hand Wash", "Body Wash"] },
  //   { name: "Foot Care", items: ["Foot Cream", "Foot Scrub", "Crack Heel Cream"] },
  //   { name: "Mother Care", items: ["Breast Firming Creams", "Stretch Mark Cream"] },
  //   { name: "Men's Grooming", items: ["Beard Wash", "Beard Grooming", "Hair Styling Wax"] },
  //   { name: "Intimate Care", items: ["Sexual Wellness Products", "Intimate Toner"] },
  //   { name: "Lip Care", items: ["Lip Liners", "Lip Oils", "Lip Stains", "Lip Tints"] },
  //   { name: "Pet Care", items: ["Pet Grooming Products", "Pet Paw Care"] },
  // ];


  const categories = [
  {
    id: 1,
    name: "Skin Care",
    slug: "skin-care",
    image: "/p01.webp",
    layout: "lg:row-span-2 lg:col-span-2",
    imagePosition: "object-center",
    overlay: "bg-[#e6e0db]/55",
    items: [
      "Vitamin C Face Wash",
      "Niacinamide Face Wash",
      "Glutathione Face Wash",
      "Retinol Face Wash",
      "Salicylic Acid Face Wash",
      "Tea Tree Face Wash",
      "Activated Charcoal Face Wash",
      "Hydrating Cleanser",
      "Cream Cleanser",
      "Syndet Cleanser",
      "Micellar Water",
      "Oil Cleanser",
      "Vitamin C Serum",
      "Niacinamide Serum",
      "Hyaluronic Acid Serum",
      "Retinol Serum",
      "Alpha Arbutin Serum",
      "Kojic Acid Serum",
      "Glutathione Serum",
      "Copper Peptide Serum",
      "Multi-Peptide Serum",
      "Anti-Acne Serum",
      "Brightening Serum",
      "Anti-Aging Serum",
      "Skin Barrier Repair Serum",
      "Under Eye Serum",
      "Day Cream",
      "Night Cream",
      "Gel Moisturizer",
      "Oil Free Moisturizer",
      "Ceramide Cream",
      "Anti-Aging Cream",
      "Pigmentation Cream",
      "Brightening Cream",
      "Retinol Night Cream",
      "Acne Control Cream",
      "Vitamin C Cream",
      "Urea Cream",
      "Body Yogurt",
      "SPF 30 Sunscreen",
      "SPF 50 PA++++ Sunscreen",
      "Tinted Sunscreen",
      "Gel Sunscreen",
      "Matte Sunscreen",
      "Sports Sunscreen",
      "Mineral Sunscreen",
      "Kids Sunscreen",
      "Body Sunscreen Spray",
      "Clay Mask",
      "Charcoal Mask",
      "Peel-Off Mask",
      "Overnight Mask",
      "Face Scrub",
      "Enzyme Exfoliator",
      "AHA/BHA Peel",
    ],
  },
  {
    id: 2,
    name: "Men's Grooming",
    slug: "mens-grooming",
    image: "/p3.webp",
    layout: "lg:col-span-2",
    imagePosition: "object-center",
    overlay: "bg-[#d7dce2]/55",
    items: [
      "Beard Oil",
      "Beard Wash",
      "Beard Balm",
      "Beard Grooming Cream",
      "Beard Conditioner",
      "Beard Growth Serum",
      "Moustache Wax",
      "After Shave Lotion",
      "After Shave Balm",
      "Shaving Cream",
      "Shaving Gel",
      "Men's Face Wash",
      "Men's Face Scrub",
      "Men's Moisturizer",
      "Men's Sunscreen",
      "Hair Styling Wax",
      "Hair Styling Clay",
      "Hair Gel",
      "Hair Serum",
      "Deodorant",
      "Perfume Body Spray",
    ],
  },
  {
    id: 3,
    name: "Baby Care",
    slug: "baby-care",
    image: "/p7.webp",
    layout: "lg:col-span-2",
    imagePosition: "object-center",
    overlay: "bg-[#f6e5da]/55",
    items: [
      "Baby Shampoo",
      "Baby Face Wash",
      "Baby Wash",
      "Baby Body Wash",
      "Baby Soap",
      "Baby Lotion",
      "Baby Massage Oil",
      "Baby Cream",
      "Baby Rash Cream",
      "Baby Powder",
      "Baby Sunscreen",
      "Baby Wipes",
      "Cradle Cap Oil",
      "Tear-Free Cleanser",
      "Baby Moisturizer",
      "Baby Hair Oil",
      "Baby Lip Balm",
      "Baby Protection Balm",
    ],
  },
  {
    id: 4,
    name: "Pet Care",
    slug: "pet-care",
    image: "/p6.webp",
    layout: "lg:col-span-2",
    imagePosition: "object-center",
    overlay: "bg-[#dbe8df]/55",
    items: [
      "Pet Shampoo",
      "Anti-Tick Shampoo",
      "Anti-Flea Shampoo",
      "Medicated Pet Shampoo",
      "Pet Grooming Shampoo",
      "Coat Conditioner",
      "Paw Balm",
      "Paw Butter",
      "Paw Cleaning Foam",
      "Nose Balm",
      "Pet Perfume",
      "Coat Shine Spray",
      "Dry Shampoo",
      "Ear Cleaning Solution",
      "Tear Stain Remover",
      "Pet Deodorizer",
      "Pet Grooming Spray",
      "Pet Wipes",
      "Pet Dental Spray",
      "Pet Skin Care Balm",
    ],
  },
  {
    id: 5,
    name: "Mother Care",
    slug: "mother-care",
    image: "/P15.webp",
    layout: "lg:row-span-2 lg:col-span-2",
    imagePosition: "object-center",
    overlay: "bg-[#f2dfe5]/55",
    items: [
      "Nipple Butter",
      "Nipple Care Cream",
      "Stretch Mark Cream",
      "Stretch Mark Oil",
      "Bust Firming Cream",
      "Breast Firming Cream",
      "Postpartum Body Lotion",
      "Postpartum Massage Oil",
      "Pregnancy Massage Oil",
      "Nursing Care Balm",
      "Maternity Body Butter",
      "Belly Firming Cream",
      "Leg Relief Gel",
      "Mother Care Moisturizer",
    ],
  },
  {
    id: 6,
    name: "Lip Care",
    slug: "lip-care",
    image: "/p5.webp",
    layout: "lg:col-span-2",
    imagePosition: "object-center",
    overlay: "bg-[#f4dce1]/55",
    items: [
      "Lip Balm",
      "Lip Sleeping Mask",
      "Lip Scrub",
      "Lip Butter",
      "Tinted Lip Balm",
      "Lip Oil",
      "Lip Serum",
      "Lip Tint",
      "Lip Stain",
      "Lip Liner",
      "Lip Lightening Balm",
      "Lip Repair Balm",
      "SPF Lip Balm",
      "Overnight Lip Treatment",
    ],
  },
  {
    id: 7,
    name: "Personal Hygiene",
    slug: "personal-hygiene",
    image: "/p02.webp",
    layout: "lg:row-span-2 lg:col-span-2",
    imagePosition: "object-center",
    overlay: "bg-[#dae6e2]/55",
    items: [
      "Hand Sanitizer",
      "Hand Wash",
      "Foaming Hand Wash",
      "Body Wash",
      "Shower Gel",
      "Feminine Hygiene Wash",
      "Intimate Wash",
      "Deodorizing Spray",
      "Underarm Roll-On",
      "Sanitizing Spray",
      "Surface Sanitizer",
      "Hygiene Wipes",
      "Antibacterial Body Wash",
      "Hand Cleansing Gel",
      "Personal Hygiene Spray",
    ],
  },

  {
    id: 9,
    name: "Intimate Hygiene",
    slug: "intimate-hygiene",
    image: "/p04.webp",
    layout: "lg:row-span-2 lg:col-span-2",
    imagePosition: "object-center",
    overlay: "bg-[#efe0e5]/55",
    items: [
      "Feminine Wash",
      "Intimate Hygiene Foam",
      "Intimate Wipes",
      "Intimate Moisturizer",
      "Men's Intimate Wash",
      "Intimate Toner",
      "Intimate Deodorizing Spray",
      "Intimate Cleansing Gel",
      "Intimate Hygiene Mist",
      "Intimate Brightening Cream",
      "Intimate Soothing Gel",
      "Intimate Care Serum",
      "Post-Shave Intimate Gel",
      "Sexual Wellness Products",
    ],
  },
  {
    id: 10,
    name: "Hair Care",
    slug: "hair-care",
    image: "/p010.webp",
    layout: "lg:col-span-2",
    imagePosition: "object-center",
    overlay: "bg-[#d9ebe4]/55",
    items: [
      "Anti Hair Fall Shampoo",
      "Keratin Shampoo",
      "Sulphate Free Shampoo",
      "Anti-Dandruff Shampoo",
      "Biotin Shampoo",
      "Argan Shampoo",
      "Color Protection Shampoo",
      "Baby Shampoo",
      "Hair Conditioner",
      "Deep Repair Conditioner",
      "Hair Mask",
      "Hair Spa Cream",
      "Keratin Mask",
      "Hair Growth Serum",
      "Hair Repair Serum",
      "Anti-Frizz Serum",
      "Leave-In Conditioner",
      "Hair Mist",
      "Hair Tonic",
      "Scalp Serum",
      "Hair Oil",
      "Eyebrow & Lash Serum",
      "Hair Wax",
      "Hair Gel",
      "Hair Cream",
      "Hair Spray",
      "Sea Salt Spray",
      "Curl Defining Cream",
    ],
  },
  {
    id: 11,
    name: "Body Care",
    slug: "body-care",
    image: "/p011.webp",
    layout: "lg:col-span-2",
    imagePosition: "object-center",
    overlay: "bg-[#f1dfd1]/55",
    items: [
      "Shower Gel",
      "Body Wash",
      "Cream Body Wash",
      "Hand Wash",
      "Body Lotion",
      "Body Butter",
      "Body Yogurt",
      "Body Milk",
      "Hand Cream",
      "Body Scrub",
      "Body Polish",
      "Deodorizing Spray",
      "Body Mist",
      "Underarm Roll-On",
      "Stretch Mark Cream",
      "Firming Cream",
      "Bust Firming Cream",
      "Body Serum",
      "Body Oil",
      "Body Sunscreen",
      "Body Acne Spray",
      "Body Brightening Lotion",
    ],
  },
    {
    id: 8,
    name: "Foot Care",
    slug: "foot-care",
    image: "/p8.webp",
    layout: "lg:col-span-2",
    imagePosition: "object-bottom",
    overlay: "bg-[#e4e2d5]/55",
    items: [
      "Foot Cream",
      "Foot Scrub",
      "Crack Heel Cream",
      "Foot Crack Cream",
      "Foot Repair Balm",
      "Foot Soak",
      "Foot Mask",
      "Deodorizing Foot Spray",
      "Foot Moisturizing Gel",
      "Callus Softening Cream",
      "Foot Cooling Gel",
      "Heel Repair Stick",
      "Anti-Fungal Foot Spray",
      "Pedicure Cream",
    ],
  },
  {
    id: 12,
    name: "Dermatology",
    slug: "dermatology",
    image: "/p12.webp",
    layout: "lg:row-span-2 lg:col-span-2",
    imagePosition: "object-center",
    overlay: "bg-[#d9e5e8]/55",
    items: [
      "Acne Control Gel",
      "Sebum Control Gel",
      "Barrier Repair Cream",
      "Urea Lotion",
      "Ceramide Cream",
      "Anti-Pigmentation Cream",
      "Skin Brightening Cream",
      "Retinol Therapy Cream",
      "Scar Gel",
      "Stretch Mark Cream",
      "Anti-Itch Lotion",
      "Calamine Lotion",
      "Moisturizing Lotion",
      "Psoriasis Support Cream",
      "Foot Crack Cream",
      "Syndet Bar",
      "Medicated Face Wash",
      "Foaming Cleanser",
      "Micellar Cleanser",
      "Anti-Fungal Cream",
      "Eczema Support Cream",
      "Sensitive Skin Cleanser",
      "Dry Skin Repair Cream",
      "Post-Procedure Recovery Gel",
    ],
  },
  {
    id: 16,
    name: "Nail Care",
    slug: "nail-care",
    image: "/p16.webp",
    layout: "lg:col-span-2",
    imagePosition: "object-center",
    overlay: "bg-[#efe0e5]/55",
    items: [
      "Cuticle Oil",
      "Nail Strengthening Serum",
      "Nail Growth Serum",
      "Nail Brightener",
      "Nail Polish Remover",
      "Hand & Nail Cream",
      "Nail Conditioning Treatment",
      "Cuticle Softener",
      "Nail Repair Serum",
      "Nail Hydrating Oil",
      "Nail Cleansing Solution",
      "Nail Protection Coat",
    ],
  },
  {
    id: 14,
    name: "Hotel Amenities",
    slug: "hotel-amenities",
    image: "/p14.webp",
    layout: "lg:col-span-2",
    imagePosition: "object-center",
    overlay: "bg-[#ede5d7]/55",
    items: [
      "Hotel Shampoo",
      "Hotel Conditioner",
      "Hotel Shower Gel",
      "Hotel Body Lotion",
      "Hotel Hand Wash",
      "Hotel Face Wash",
      "Hotel Moisturizer",
      "Hotel Soap Bar",
      "Hotel Sanitizer",
      "Luxury Resort Range",
      "Ayurveda Range",
      "Spa Collection",
      "Boutique Hotel Collection",
      "Eco-Friendly Collection",
      "Travel Toiletry Kit",
      "Guest Dental Kit",
      "Guest Shaving Kit",
      "Sachets",
      "Tubes",
      "Bottles",
      "Dispensers",
      "Refillable Systems",
    ],
  },
  {
    id: 15,
    name: "Aromatherapy",
    slug: "aromatherapy-wellness",
    image: "/s8.webp",
    layout: "lg:col-span-2",
    imagePosition: "object-end",
    overlay: "bg-[#dce8df]/55",
    items: [
      "Essential Oils",
      "Massage Oils",
      "Sleep Mist",
      "Pillow Spray",
      "Aroma Roll-Ons",
      "Diffuser Oils",
      "Stress Relief Oils",
      "Relaxation Oil",
      "Meditation Oil",
      "Energy Boost Oil",
      "Muscle Relief Oil",
      "Bath Oil",
      "Aromatherapy Body Mist",
      "Room & Linen Spray",
    ],
  },

    {
    id: 13,
    name: "Spa & Salon",
    slug: "spa-salon",
    image: "/p13.webp",
    layout: "lg:col-span-2",
    imagePosition: "object-center",
    overlay: "bg-[#eaded4]/55",
    items: [
      "Gold Facial Kit",
      "Diamond Facial Kit",
      "Pearl Facial Kit",
      "Silver Facial Kit",
      "Platinum Facial Kit",
      "Fruit Facial Kit",
      "Whitening Facial Kit",
      "Anti-Aging Facial Kit",
      "Bridal Facial Kit",
      "Cleanup Kit",
      "Bleach Cream",
      "De-Tan Kit",
      "Massage Cream",
      "Facial Gel",
      "Facial Serum",
      "Face Pack",
      "Body Polishing Kit",
      "Waxing Products",
      "Professional Hair Spa Range",
      "Keratin Treatment Range",
      "Manicure Kit",
      "Pedicure Kit",
      "Professional Cleanup Range",
      "Salon Hair Treatment Range",
    ],
  },
];






  return (
<section className="px-4 py-16 text-center sm:px-6 lg:px-16 xl:px-24 2xl:px-52">
  <div className="mb-16 text-center">
    <h2 className="relative mb-6 inline-block text-3xl font-medium tracking-wide text-gray-900 md:text-4xl">
      Our Product Range

      <span className="absolute -bottom-3 left-1/2 block h-0.5 w-16 -translate-x-1/2 bg-black" />
    </h2>

    <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-600 md:text-base">
      Comprehensive categories covering beauty, personal, and specialized
      care.
    </p>
  </div>

  <div className="grid auto-rows-[300px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
    {categories.map((category, index) => {
      const isHovered = hoveredIndex === index;
      const visibleItems = category.items.slice(0, 4);
      const remainingItems = category.items.length - visibleItems.length;

      return (
        <Link
          key={category.id}
          href={`/products/${category.slug}`}
          className={`group relative flex flex-col items-center justify-end overflow-hidden ${category.layout}`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          aria-label={`View ${category.name} products`}
        >
          {/* Category background overlay */}
          {/* <div
            className={`absolute inset-0 z-[1] ${category.overlay}`}
            aria-hidden="true"
          /> */}

          {/* Category image */}
          <Image
            fill
            src={category.image}
            alt={category.name}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`absolute inset-0 object-cover transition-transform duration-700 group-hover:scale-105 ${category.imagePosition}`}
          />

          {/* Bottom content */}
          <div className="relative z-10 w-full">
            {/* Product names shown on hover */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isHovered
                  ? "max-h-48 translate-y-0 py-3 opacity-100"
                  : "max-h-0 translate-y-3 py-0 opacity-0"
              }`}
            >
              <ul className="flex flex-wrap justify-center gap-2 px-4">
                {visibleItems.map((item) => (
                  <li
                    key={`${category.slug}-${item}`}
                    className="rounded bg-black/45 px-2 py-1 text-xs uppercase tracking-wider text-white backdrop-blur-sm sm:text-sm"
                  >
                    {item}
                  </li>
                ))}

                {remainingItems > 0 && (
                  <li className="py-1 text-xs italic text-white/90 sm:text-sm">
                    +{remainingItems} more
                  </li>
                )}
              </ul>
            </div>

            {/* Category name */}
            <div className="w-full border-t border-white/20 bg-white/25 px-3 py-3 text-center backdrop-blur-2xl">
              <h3 className="mx-auto w-fit text-lg font-semibold uppercase tracking-widest text-black/80 sm:text-xl">
                {category.name}
              </h3>
            </div>
          </div>
        </Link>
      );
    })}
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
//         className="relative lg:row-span-2 lg:col-span-2 bg-[#c4c8ce4f] flex flex-col items-center justify-end group  overflow-hidden">
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
//         <div className="relative flex flex-col lg:col-span-2 items-center justify-end group  overflow-hidden">
//           <Image fill src="/p3.webp" alt="Men's Grooming" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
//           <div className="relative z-10 bg-[#f7d2e838] w-full backdrop-blur-2xl text-center py-2">
//             <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Men's Grooming</h3>
//           </div>
//         </div>

//         {/* 3. Baby Care */}
//         <div className="relative flex flex-col lg:col-span-2 items-center justify-end group  overflow-hidden">
//           <Image fill src="/p7.webp" alt="Baby Care" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
//           <div className="relative z-10 bg-[#f7d2e838] w-full backdrop-blur-2xl text-center py-2">
//             <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Baby Care</h3>
//           </div>
//         </div>

//         {/* 4. Pet Care */}
//         <div className="relative flex flex-col lg:col-span-2 items-center justify-end group  overflow-hidden">
//           <Image fill src="/p6.webp" alt="Pet Care" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
//           <div className="relative z-10 w-full bg-[#f7d2e838] backdrop-blur-2xl text-center py-2">
//             <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Pet Care</h3>
//           </div>
//         </div>

//         {/* 5. Mother Care (Tall) */}
//         <div className="relative lg:row-span-2 lg:col-span-2 flex flex-col items-center justify-end group  overflow-hidden">
//           <Image fill 
//          src="/p9.webp" alt="Mother Care" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
//           <div className="relative z-10 bg-[#eaabc71e] w-full backdrop-blur-2xl text-center py-2">
//             <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Mother Care</h3>
//           </div>
//         </div>

      

//         {/* 7. Lip Care */}
//         <div className="relative  flex flex-col lg:col-span-2 items-center justify-end group  overflow-hidden">
//           <Image fill src="/p5.webp" alt="Lip Care" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
//           <div className="relative bg-[#c4c8ce9c] z-10 w-full backdrop-blur-2xl text-center py-2">
//             <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Lip Care</h3>
//           </div>
//         </div>
//   {/* 6. Intimate Care */}
//         <div className="relative flex flex-col lg:row-span-2 lg:col-span-2 items-center justify-end group  overflow-hidden">
//           <Image fill src="/p2.webp" alt="Hygiene" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
//           <div className="relative bg-[#c4c8ce9c] z-10 w-full backdrop-blur-2xl text-center py-2">
//             <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Hygiene</h3>
//           </div>
//         </div>
//         {/* 8. Foot Care */}
//         <div className="relative lg:col-span-2 flex flex-col items-center justify-end group  overflow-hidden">
//           <Image fill src="/p8.webp" alt="Foot Care" className="absolute inset-0 w-full h-full object-cover object-bottom mix-blend-multiply" />
//           <div className="relative bg-[#c4c8ce9c] z-10 w-full backdrop-blur-2xl text-center py-2">
//             <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Foot Care</h3>
//           </div>
//         </div>

//         {/* 9. Hygiene (Spans 2 columns to fill the remaining space) */}
//         <div className="relative lg:col-span-2 flex flex-col items-center justify-end group  overflow-hidden">
//           <Image fill src="/p4.webp" alt="Intimate Care" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
//           <div className="relative bg-[#f7d2e838] z-10 w-full backdrop-blur-2xl text-center py-2">
//             <h3 className="text-black/80 w-fit mx-auto text-xl font-semibold tracking-widest uppercase">Intimate Care </h3>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }
