import Image from "next/image";

const features = [
  {
    image: "/ele3.png",
    title: "Certified Quality Standards",
    description:
      "GMP, ISO, and FDA-compliant processes ensuring global safety, consistency, and product reliability.",
  },
  {
    image: "/ele4.png",
    title: "Innovative R&D & Custom Formulations",
    description:
      "Expert scientists develop unique, market-ready cosmetic formulations tailored to your brand needs.",
  },
  {
    image: "/ele1.png",
    title: "Scalable Manufacturing Solutions",
    description:
      "Flexible production with low MOQs starting from 2,000 units, supporting startups to large brands.",
  },
  {
    image: "/ele5.png",
    title: "End-to-End Product Support",
    description:
      "Complete solutions from concept, testing, regulatory assistance, to final manufacturing and delivery.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20">
      
      {/* Heading */}
      <div className="text-center mb-16 px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52">
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
      <div className="flex justify-center gap-16 items-center flex-wrap lg:flex-nowrap">
        
     
          
        {/* RIGHT FEATURES LIST */}
        <div className="space-y-10  px-4 sm:px-6 lg:pl-16 xl:pl-24 2xl:pl-52 w-full lg:w-[50%] ">
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
                <h3 className="font-medium text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>
   {/* LEFT IMAGE */}
        <div className="relative w-full lg:w-[50%] ">
          <Image
            src="/10.webp"   // ← your main big image
            alt="Cosmetic Product"
            width={1920}
            height={1080}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}