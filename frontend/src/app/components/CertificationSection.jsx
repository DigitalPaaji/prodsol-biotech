import React from 'react';

export default function CertificationSection() {
  // Placeholder data for the bottom certification logos
  const certificationLogos = [
    { name: 'FDA', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScbb1KjmvWGnHwCKkZvjBSAYR8O6xGuOVAhA&s' },
    { name: 'ISO', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ML8boqsMGZ3mEoLtdD5g2vYPAwqwpw3sDA&s' },
    { name: 'WRAP', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFziXqVZGQJx1JNJbaUAnqjCbSVGhdDudfgg&s' },
    { name: 'WHO GMP', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Zvk22kB6h31EsyxUPIW-b76W6JJaoxeweA&s' },
    { name: 'GMP', url: 'https://via.placeholder.com/60x60?text=GMP' },
    { name: 'Halal', url: 'https://via.placeholder.com/60x60?text=HALAL' },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-white w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Main 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-center">
          
          {/* Left Column: Heading and Text */}
          <div className="flex flex-col items-center lg:items-center text-center px-4">
            <h2 className="text-xl md:text-2xl font-bold uppercase text-gray-900 mb-6 relative inline-block tracking-wide">
              Certification And Recognition
              <span className="block w-12 h-0.5 bg-black absolute -bottom-3 left-1/2 transform -translate-x-1/2"></span>
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-4">
              We have always strived to maintain a high level of quality to meet all consumer
              requirements. Our primary focus remains on using superior quality raw material and
              turning them into premium products.
            </p>
          </div>

          {/* Center Column: Proper Certificate Image Container */}
          <div className="flex justify-center px-4">
            <div className="relative w-full max-w-[320px] md:max-w-[380px] bg-white p-2 shadow-xl border border-gray-100 transform hover:scale-105 transition-transform duration-300">
              {/* INSTRUCTIONS FOR NEXT.JS:
                1. Save your actual certificate image in the "public" folder (e.g., public/certificate.png)
                2. Change the src below to src="/certificate.png"
              */}
              <img 
                src="https://c8.alamy.com/comp/FXATXP/certificate-template-vertical-FXATXP.jpg" 
                alt="JMM Cosmetic Facility Registration 2025" 
                className="w-full h-auto object-cover border-4 border-double border-gray-200 aspect-[3/4]"
              />
            </div>
          </div>

          {/* Right Column: Description Text */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left px-4">
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              We are GMP, WHO GMP, ISO 9001:2015, ISO 22716:2007 and USDA certified Registered Skin Care - 
              Cosmetics, Ayurvedic & Herbal Oral Care - Toothpaste Manufacturer & Exporter in India. We make sure 
              that end customers will get the best quality of products. HCP wellness works really hard to maintain 
              supreme quality standards.
            </p>
          </div>

        </div>

        {/* Bottom Section: Certification Badges/Logos */}
        <div className="mt-16 pt-8">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-8">
            {certificationLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
                <img 
                  src={logo.url} 
                  alt={`${logo.name} Certification`} 
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
          
          <div className="w-full max-w-4xl mx-auto border-b border-blue-200"></div>
        </div>

      </div>
    </section>
  );
}