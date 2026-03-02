const { ChevronRight } = require("lucide-react");

// Capabilities Section
export default function CapabilitiesSection() {
  const capabilities = [
    {
      number: "01",
      title: "Market Understanding",
      points: ["Pricing strategy", "Packaging insights", "Trend mapping"]
    },
    {
      number: "02",
      title: "Research & Development",
      points: ["500+ formulations", "Custom product development", "Innovation using actives & botanicals"]
    },
    {
      number: "03",
      title: "Production Excellence",
      points: ["Automated facility", "Flexible batch sizes", "Quality checks at every stage"]
    },
    {
      number: "04",
      title: "Compliance & Quality",
      points: ["In-house labs", "Dermatological testing", "International certifications"]
    },
    {
      number: "05",
      title: "Logistics & Supply Chain",
      points: ["Warehousing", "Ready-to-ship solutions", "Quick turnaround"]
    }
  ];
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-40">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#007e44] border-b border-gray-200 pb-2">
            Our Capabilities
          </span>
          
          <h2 className="text-3xl md:text-4xl font-medium mt-6">
            End-to-End <span className="italic">Manufacturing Excellence</span>
          </h2>
        </div>
        
        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
            >
              <span className="text-5xl font-light text-[#007e44]/20 group-hover:text-[#007e44]/30 transition-colors duration-300">
                {cap.number}
              </span>
              
              <h3 className="text-xl font-medium mt-4 mb-4">{cap.title}</h3>
              
              <ul className="space-y-2">
                {cap.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-600">
                    <ChevronRight className="w-4 h-4 text-[#007e44] mt-1 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Why Brands Choose Us */}
        <div className="mt-16 p-8 bg-[#007e44] rounded-2xl text-white">
          <h3 className="text-2xl font-medium mb-6">Why Brands Choose Them</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              "Purpose-driven foundation",
              "End-to-end services",
              "Fast delivery timelines",
              "Scalable manufacturing",
              "Trusted by 50+ global brands"
            ].map((reason, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                <span className="text-sm">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
