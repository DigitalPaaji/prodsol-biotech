import Image from "next/image";

const features = [
  {
    image: "/images/features/certified.png",
    title: "Certified Quality Standards",
    description:
      "GMP, ISO, and FDA-compliant processes ensuring global safety, consistency, and product reliability.",
  },
  {
    image: "/images/features/research.png",
    title: "Innovative R&D & Custom Formulations",
    description:
      "Expert scientists develop unique, market-ready cosmetic formulations tailored to your brand needs.",
  },
  {
    image: "/images/features/manufacturing.png",
    title: "Scalable Manufacturing Solutions",
    description:
      "Flexible production with low MOQs starting from 2,000 units, supporting startups to large brands.",
  },
  {
    image: "/images/features/support.png",
    title: "End-to-End Product Support",
    description:
      "Complete solutions from concept, testing, regulatory assistance, to final manufacturing and delivery.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#007e44] border-b border-gray-200 pb-2">
          The Prodsol Standard
        </span>

        <h2 className="text-3xl md:text-4xl font-medium mt-6">
          Transparent. Potent.
          <span className="italic"> Partner-Focused.</span>
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          We simplify complex manufacturing so you can focus on building your brand identity.
        </p>
      </div>

      {/* 2 Column Layout */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT IMAGE */}
        <div className="relative w-full h-auto">
          <Image
            src="/10.webp"   // ← your main big image
            alt="Cosmetic Product"
            fill
            className="object-cover"
          />
        </div>
          
        {/* RIGHT FEATURES LIST */}
        <div className="space-y-10  pr-6 lg:pr-20 xl:pr-32">
          {features.map((item, index) => (
            <div key={index} className="flex gap-5 items-start">
              
              {/* Icon Image */}
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}