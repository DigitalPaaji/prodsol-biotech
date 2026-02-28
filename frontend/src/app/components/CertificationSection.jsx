import Image from "next/image";
import React from "react";

const certifications = [
  { src: "/gmp.png", alt: "GMP Certified" },
  { src: "/fda.png", alt: "FDA Approved" },
  { src: "/iso.png", alt: "ISO Certified" },
  { src: "/cruelty.png", alt: "Cruelty Free" },
  { src: "/vegan.png", alt: "Vegan" },
  { src: "/eco.png", alt: "Eco Friendly" },
];

function CertificationSection() {
  return (
    <section className="py-16 border-t border-gray-100">
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 xl:gap-20 px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52">
        {certifications.map((item, index) => (
          <div key={index} className="relative w-12 h-12 md:w-20 md:h-20 lg:w-20 xl:w-24 lg:h-20 xl:h-24">
            <Image src={item.src} alt={item.alt} fill className="object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CertificationSection;