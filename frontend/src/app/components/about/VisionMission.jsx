// Vision Mission Component
export default function VisionMission() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Vision */}
          <div className="relative p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-[#9FE870]/30 transition-all duration-300">
            <div className="absolute -top-4 left-8">
              <span className="bg-[#007e44] text-white px-6 py-2 rounded-full text-sm font-medium">
                Our Vision
              </span>
            </div>
            
            <div className="mt-8">
              <h3 className="text-3xl font-light mb-6 italic">Looking Ahead</h3>
              <p className="text-xl leading-relaxed text-gray-300">
                To become the most trusted global partner for personal care brands by creating sustainable and effective products.
              </p>
              
              {/* Decorative */}
              <div className="mt-8 w-16 h-1 bg-[#007e44]" />
            </div>
          </div>
          
          {/* Mission */}
          <div className="relative p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-[#9FE870]/30 transition-all duration-300">
            <div className="absolute -top-4 left-8">
              <span className="bg-[#007e44] text-white px-6 py-2 rounded-full text-sm font-medium">
                Our Mission
              </span>
            </div>
            
            <div className="mt-8">
              <h3 className="text-3xl font-light mb-6 italic">Our Purpose</h3>
              <p className="text-xl leading-relaxed text-gray-300">
                To empower brands with complete cosmetic manufacturing solutions built on:
              </p>
              
              <div className="mt-6 space-y-3">
                {["Sustainability", "Transparency", "High Quality"].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#9FE870]" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
