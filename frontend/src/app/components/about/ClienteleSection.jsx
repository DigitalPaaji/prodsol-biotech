"use client";

import Image from "next/image";


export default function ClienteleSection() {
  const clients = [
    { name: "The Mad House", logo: "/logo/madhouse.webp" },
    { name: "Born16", logo: "/logo/born16.webp" },
    { name: "Nourish Mantra", logo: "/logo/nourish.webp" },
    { name: "Neemli Naturals", logo: "/logo/neemli.webp" },
    { name: "Secret Alchemist", logo: "/logo/wildwolf.webp" },
    { name: "Ayuvya", logo: "/logo/ayuvya.webp" },
    { name: "Softbird", logo: "/logo/softbird.png" },
    { name: "Ellement Co", logo: "/logo/ellementco.webp" },
  ];
  const allClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-40">
        
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#007e44] pb-2">
            Our Growth & Clientele
          </span>

          <h2 className="text-3xl md:text-4xl font-medium mt-6">
            Trusted by <span className="italic">50+ Global Brands</span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            We work with fast-growing D2C brands, premium personal care companies, and international private labels
          </p>
        </div>

        
        <div className="relative">
          
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-linear-to-r from-gray-50 to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-linear-to-l from-gray-50 to-transparent"></div>
          
          
          <div className="flex overflow-hidden">
            <div 
              className="flex whitespace-nowrap gap-6"
              style={{
                animation: 'marquee 30s linear infinite'
              }}
            >
              {allClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="shrink-0"
                >
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 w-[180px] h-[120px] flex items-center justify-center group hover:border-[#007e44]/20">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={140}
                      height={60}
                      className="object-contain max-h-15 w-auto grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        div:hover > div > div[style*="animation"] {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}