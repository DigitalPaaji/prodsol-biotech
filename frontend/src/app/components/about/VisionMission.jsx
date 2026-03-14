import Image from "next/image";

// Vision Mission Component - Refined Version
export default function VisionMission() {
const missionPoints = [
  {
    number: "01",
    title: "Our Vision",
    description:
      "To become the most trusted and innovative partner for personal care brands worldwide, by creating sustainable, effective, and ethical products that deliver real results."
  },
  {
    number: "02",
    title: "Our Mission",
    description:
      "To empower brands with end-to-end cosmetic manufacturing solutions that embody sustainability, transparency, and uncompromising quality, ensuring every product carries the promise of From Concept to Cosmetic Perfection."
  }
];

  return (
    <section className=" ">
      <Image width={1920} height={1080} src="/aboutbg1.webp" className="w-full h-auto object-cover" alt="" />
      
      <div className=" px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52 py-16 lg:py-24">
        
 
        {/* Title area */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-mono text-gray-400">—</span>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#007e44] pb-2">core philosophy</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Mission and Vision
          </h2>
          <p className="text-lg capitalize text-gray-500 italic font-light border-l-4 border-gray-300 pl-6">
         From concept to cosmetic perfection
          </p>
        </div>
        
        {/* Mission grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  lg:gap-28">
          {missionPoints.map((point, index) => (
            <div 
              key={index}
              className="group relative p-6 "
            >
              {/* Number indicator */}
              <div className="text-6xl font-bold mb-4 text-gray-200 transition-colors">
                {point.number}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-gray-900">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {point.description}
              </p>
              
          
            </div>
          ))}
        </div>
        

      </div>
    </section>
  );
}