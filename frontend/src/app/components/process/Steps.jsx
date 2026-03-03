import Image from "next/image";

const flowSteps = [
  {
    id: "01",
    title: "Concept",
    subtitle: "The Spark of Innovation",
    description: "Every great brand starts with a vision. We collaborate to define your product's DNA, identifying market gaps and unique selling propositions to ensure your concept stands out in a crowded landscape.",
    image: "/process1.webp", 
  },
  {
    id: "02",
    title: "Formulation",
    subtitle: "Science Meets Beauty",
    description: "Our expert chemists develop bespoke, high-performance formulas. Whether it's clean beauty, clinical-grade skincare, or luxury hair care, we focus on potency, stability, and sensory excellence.",
    image: "/formulation.webp",
  },
  {
    id: "03",
    title: "Manufacturing",
    subtitle: "Precision at Scale",
    description: "Produced in our GMP and ISO certified facilities, we ensure every batch meets the highest global standards. From low MOQs for startups to high-volume runs for established giants.",
    image: "/manufacturing.webp",
  },
  {
    id: "04",
    title: "Packaging",
    subtitle: "The Art of Presentation",
    description: "We help you select and source packaging that protects the formula while projecting premium brand value. From eco-friendly glass to innovative airless pumps, we handle the technical fit.",
    image: "/packaging.webp",
  },
  {
    id: "05",
    title: "Compliance",
    subtitle: "Global Ready",
    description: "Navigating the regulatory landscape can be daunting. We manage the documentation, safety testing, and claims substantiation required for FDA, EU, and global market entry.",
    image: "/compliance.webp",
  },
  {
    id: "06",
    title: "Delivery",
    subtitle: "To Your Doorstep",
    description: "Our logistics team ensures a seamless supply chain. We coordinate global shipping and delivery, ensuring your inventory arrives safely and ready for your customers.",
    image: "/delivery.webp",
  },
];

export default function ProcessZigZag() {
  return (
    <section className="pt-24  overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#007e44] border-b border-gray-100 pb-3">
          Step-by-Step Excellence
        </span>
        <h2 className="text-4xl md:text-5xl font-medium mt-10 tracking-tight">
          How We Bring Your <span className="italic">Vision to Life</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {flowSteps.map((step, index) => (
          <div 
            key={step.id} 
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-24 lg:mb-40 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* CONTENT SIDE */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-5xl font-light text-gray-200">{step.id}</span>
                <div className="h-px w-12 bg-[#007e44]"></div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-[12px] uppercase tracking-widest font-bold text-[#007e44]">
                  {step.subtitle}
                </h3>
                <h4 className="text-3xl md:text-4xl font-medium text-gray-900">
                  {step.title}
                </h4>
              </div>
              
              <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                {step.description}
              </p>
            </div>

            {/* IMAGE SIDE */}
            <div className="w-full lg:w-1/2 group">
              <div className="relative  overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={1920} height={1080}
                  className="w-full h-auto object-cover "
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

    
    </section>
  );
}