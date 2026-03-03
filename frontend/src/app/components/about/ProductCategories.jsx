// Product Categories Component
export default function ProductCategories() {
  const categories = [
    {
      title: "Skincare",
      items: ["Serums", "Creams", "Sunscreens", "Toners", "Scrubs"],
      icon: "✨"
    },
    {
      title: "Haircare",
      items: ["Shampoos", "Oils", "Conditioners"],
      icon: "💆‍♀️"
    },
    {
      title: "Baby Care",
      items: ["Gentle formulations"],
      icon: "👶"
    },
    {
      title: "Intimate Care",
      items: ["Dermatologically tested products"],
      icon: "🌸"
    },
    {
      title: "Pet Grooming",
      items: ["Safe formulations"],
      icon: "🐕"
    }
  ];
  
  return (
    <section className="py-20 bg-white">
      <div className="px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-40">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#007e44] border-b border-gray-200 pb-2">
            Product Categories
          </span>
          
          <h2 className="text-3xl md:text-4xl font-medium mt-6">
            Comprehensive Range of 
            <span className="italic"> Personal Care Solutions</span>
          </h2>
        </div>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl border border-gray-200 hover:border-[#007e44] transition-all duration-300 p-6"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              
              <h3 className="text-xl font-medium mb-3">{category.title}</h3>
              
              <ul className="space-y-1">
                {category.items.map((item, idx) => (
                  <li key={idx} className="text-gray-600 text-sm flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-[#007e44]" />
                    {item}
                  </li>
                ))}
              </ul>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#007e44]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
