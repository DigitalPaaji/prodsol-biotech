// app/components/MinimalistShopByCategory.jsx
import Image from 'next/image';

const MinimalistShopByCategory = () => {
  // Product categories styled after Minimalist's scientific approach
  const categories = [
    {
      id: 1,
      name: "Skin Care",
      description: "Active formulations • 10 products",
      image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=800&h=1000&fit=crop",
      bgColor: "bg-stone-50",
      textColor: "text-stone-900",
      badge: "Bestseller",
      ingredients: ["Salicylic Acid", "Vitamin C", "Retinol"]
    },
    {
      id: 2,
      name: "Baby Care",
      description: "Gentle • Minimal • 8 products",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&h=1000&fit=crop",
      bgColor: "bg-blue-50",
      textColor: "text-blue-900",
      ingredients: ["Shea Butter", "Calendula", "Zinc"]
    },
    {
      id: 3,
      name: "Lip Care",
      description: "Hydration • Repair • 6 products",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&h=1000&fit=crop",
      bgColor: "bg-rose-50",
      textColor: "text-rose-900",
      badge: "New",
      ingredients: ["Ceramides", "Hyaluronic Acid", "Vitamin E"]
    },
    {
      id: 4,
      name: "Men's Grooming",
      description: "Essential • Effective • 7 products",
      image: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&h=1000&fit=crop",
      bgColor: "bg-gray-50",
      textColor: "text-gray-900",
      ingredients: ["Caffeine", "Biotin", "Peptides"]
    },
    {
      id: 5,
      name: "Intimate Care",
      description: "pH-balanced • 5 products",
      image: "https://images.unsplash.com/photo-1616949755535-913fda8752b4?w=800&h=1000&fit=crop",
      bgColor: "bg-purple-50",
      textColor: "text-purple-900",
      ingredients: ["Lactic Acid", "Prebiotics", "Aloe"]
    },
    {
      id: 6,
      name: "Hygiene",
      description: "Pure • Effective • 6 products",
      image: "https://images.unsplash.com/photo-1584487073491-e1528990c8b1?w=800&h=1000&fit=crop",
      bgColor: "bg-teal-50",
      textColor: "text-teal-900",
      ingredients: ["Alcohol-free", "Moisturizers", "Essential Oils"]
    },
    {
      id: 7,
      name: "Mother Care",
      description: "Nurturing • Safe • 4 products",
      image: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?w=800&h=1000&fit=crop",
      bgColor: "bg-pink-50",
      textColor: "text-pink-900",
      ingredients: ["Vitamin E", "Cocoa Butter", "Collagen"]
    },
    {
      id: 8,
      name: "Pet Care",
      description: "Natural • Gentle • 5 products",
      image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&h=1000&fit=crop",
      bgColor: "bg-amber-50",
      textColor: "text-amber-900",
      badge: "Coming Soon",
      ingredients: ["Oatmeal", "Aloe", "Coconut Oil"]
    }
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Clean and typography-focused like Minimalist */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-4">
            Shop by <span className="font-medium">Category</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Science-backed formulations, categorised by your needs. <br className="hidden md:block" />
            Every ingredient has a purpose.
          </p>
        </div>

        {/* Category Grid - Clean, spacious, and content-first */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`group relative overflow-hidden rounded-2xl ${category.bgColor} transition-all duration-500 hover:shadow-xl`}
            >
              {/* Image Container - Minimalist with subtle reveal */}
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                
                {/* Scientific ingredient badges - Inspired by Minimalist's transparency */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {category.ingredients?.slice(0, 2).map((ingredient, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-mono bg-white/90 backdrop-blur-sm rounded-full text-gray-700 shadow-sm"
                    >
                      {ingredient}
                    </span>
                  ))}
                  {category.ingredients?.length > 2 && (
                    <span className="px-3 py-1 text-xs font-mono bg-white/90 backdrop-blur-sm rounded-full text-gray-700">
                      +{category.ingredients.length - 2}
                    </span>
                  )}
                </div>

                {/* Badge - Like "Bestseller" or "New" on Minimalist */}
                {category.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-medium bg-black text-white rounded-full">
                      {category.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Content - Clean typography, minimal distractions */}
              <div className="p-6">
                <div className="mb-2">
                  <h3 className={`text-xl font-medium ${category.textColor} mb-1`}>
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-light">
                    {category.description}
                  </p>
                </div>

                {/* Hover action - Simple and clear */}
                <button className="mt-4 w-full py-3 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2 group">
                  <span>Explore range</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Subtle ingredient note - Like Minimalist's ingredient-first approach */}
                <p className="text-xs text-gray-400 text-center mt-3">
                  {category.ingredients?.join(" • ")}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note - Echoing Minimalist's scientific philosophy */}
    
 <div className={`grid grid-cols-2 text-center md:grid-cols-4 gap-8  `}>
  
   <div className=" group">
     <div className="relative w-16 h-16 mx-auto mb-3 ">
       <Image src="/ele1.png" alt="" width={64} height={64} className="object-contain" />
     </div>
     <div className="text-2xl font-light text-[#427A43] mb-1">Purpose</div>
     <div className="text-xs tracking-wider text-gray-500 uppercase">
       Sustainability • Quality • Transparency
     </div>
   </div>

   <div className=" group">
     <div className="relative w-16 h-16 mx-auto mb-3 ">
       <Image src="/ele2.png" alt="" width={64} height={64} className="object-contain" />
     </div>
     <div className="text-2xl font-light text-[#427A43] mb-1">End-to-End</div>
     <div className="text-xs tracking-wider text-gray-500 uppercase">
       Concept → Formulation → Packaging → Logistics
     </div>
   </div>

   <div className=" group">
     <div className="relative w-16 h-16 mx-auto mb-3 ">
       <Image src="/ele1.png" alt="" width={64} height={64} className="object-contain" />
     </div>
     <div className="text-2xl font-light text-[#427A43] mb-1">Agile</div>
     <div className="text-xs tracking-wider text-gray-500 uppercase">
       Fast Response • Consistent Timelines
     </div>
   </div>

   <div className=" group">
     <div className="relative w-16 h-16 mx-auto mb-3">
       <Image src="/ele2.png" alt="" width={64} height={64} className="object-contain" />
     </div>
     <div className="text-2xl font-light text-[#427A43] mb-1">Trusted</div>
     <div className="text-xs tracking-wider text-gray-500 uppercase">
       Scalable Solutions • 50+ Global Brands
     </div>
   </div>

 </div>  
      </div>
    </section>
  );
};

export default MinimalistShopByCategory;