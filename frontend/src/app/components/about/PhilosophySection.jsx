import Image from "next/image";
import { Leaf, Shield, Users } from "lucide-react";

// Philosophy Section
export default function PhilosophySection() {
  const philosophyPoints = [
    {
      icon: Leaf,
      image: "/sustainability.png",
      title: "Sustainability",
      description: "Ethical ingredient sourcing, Safe waste handling",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: Shield,
      image: "/premium.png", // Using same image for now
      title: "Quality & R&D",
      description: "Stability testing, Microbiological analysis, ISO, GMP, FDA compliance",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Users,
      image: "/ele6.png", // Using same image for now
      title: "Transparency",
      description: "Open communication on sourcing, pricing, and processes. No hidden costs.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];
  
  return (
    <section className="py-20 bg-linear-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-40">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#007e44] px-4 py-2 mb-4">
            Our Philosophy
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mt-4">
            Conscious <span className="relative italic font-medium text-[#007e44]">Manufacturing</span>
          </h2>
          
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            Every formulation focuses on three core principles
          </p>
        </div>
        
        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {philosophyPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div 
                key={index} 
                className="relative text-center p-8 border border-gray-200 hover:border-[#007e44] transition-all duration-500 group  bg-white hover:-translate-y-2"
              >
                {/* Image Container with Gradient Background */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 ${point.bgColor} rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative w-20 h-20 mx-auto rounded-full bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-all duration-500 overflow-hidden border-2 border-gray-100 group-hover:border-[#007e44]/20">
                    <Image
                      src={point.image}
                      alt={point.title}
                      width={50}
                      height={50}
                      className="object-contain w-10 h-10 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-medium mb-3 group-hover:text-[#007e44] transition-colors duration-300">
                  {point.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm px-4">
                  {point.description}
                </p>
                
                {/* Animated Bottom Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#007e44] group-hover:w-16 transition-all duration-500" />
                
                {/* Background Decorative Icon */}
                <div className="absolute -bottom-4 -right-4 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
                  <Icon className="w-32 h-32 text-gray-800" />
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-transparent group-hover:border-[#007e44] transition-all duration-500 rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-transparent group-hover:border-[#007e44] transition-all duration-500 rounded-br-3xl" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}