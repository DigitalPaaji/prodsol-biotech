"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const certifications = [
  { src: "/gmp.png", alt: "GMP Certified" },
  { src: "/fda.png", alt: "FDA Approved" },
  { src: "/iso.png", alt: "ISO Certified" },
  { src: "/cruelty.png", alt: "Cruelty Free" },
  { src: "/vegan.png", alt: "Vegan" },
  { src: "/eco.png", alt: "Eco Friendly" },
];

function CertificationSection() {
  const [showVideo, setShowVideo] = useState(false);

  const videoId = "XhrsuIM0j_o";
  const thumbnailUrl = `/thumbnail.webp`;

  useEffect(() => {
    document.body.style.overflow = showVideo ? "hidden" : "";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowVideo(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showVideo]);

  return (
    <>
          {/* Certifications Section */}
      <section className="py-16">
        <div className="flex flex-wrap justify-center gap-8 px-4 sm:px-6 md:gap-12 md:px-16 lg:px-16 xl:gap-20 xl:px-24 2xl:px-52">
          {certifications.map((item, index) => (
            <div
              key={item.alt || index}
              className="relative h-24 w-24"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="96px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>


      {/* Video Thumbnail Section */}
      <section className="px-4 sm:px-6 md:px-16 lg:px-16 xl:px-24 2xl:px-52">
        <button
          type="button"
          onClick={() => setShowVideo(true)}
          className="group relative block aspect-video w-full overflow-hidden rounded-2xl bg-[#00385d] shadow-[0_20px_60px_rgba(0,56,93,0.18)]"
          aria-label="Play Prodsol Biotech video"
        >
          <Image
            src={thumbnailUrl}
            alt="Prodsol Biotech video thumbnail"
            fill
            priority={false}
            sizes="(max-width: 768px) 100vw, 90vw"
            className="object-cover"
          />

          {/* Thumbnail Overlay */}
          <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/10 transition-colors duration-300 group-hover:from-black/65" />

          {/* Play Button */}
          {/* <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#00385d] shadow-[0_12px_35px_rgba(0,0,0,0.35)] transition-all duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="ml-1 h-7 w-7 sm:h-9 sm:w-9"
              aria-hidden="true"
            >
              <path d="M8 5.5v13l10-6.5L8 5.5Z" />
            </svg>
          </span> */}

          {/* Bottom Content */}
          <span className="absolute bottom-5 left-5 right-5 text-left text-white sm:bottom-8 sm:left-8 sm:right-8">
            <span className="block text-xs font-medium uppercase md:tracking-[0.2em] text-white/75 sm:text-sm">
              Discover Prodsol Biotech
            </span>

            <span className="mt-1 block md:text-xl font-semibold sm:text-3xl">
              From Concept to Cosmetic Perfection
            </span>
          </span>
        </button>
      </section>


      {/* Video Popup */}
      {showVideo && (
        <div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          onClick={() => setShowVideo(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Prodsol Biotech video player"
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-200 hover:rotate-90 hover:bg-white hover:text-black"
              aria-label="Close video"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  d="M6 6l12 12M18 6 6 18"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* YouTube Video */}
            <div className="aspect-video overflow-hidden rounded-xl shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="Prodsol Biotech video"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CertificationSection;



// import Image from "next/image";
// import React from "react";

// const certifications = [
//   { src: "/gmp.png", alt: "GMP Certified" },
//   { src: "/fda.png", alt: "FDA Approved" },
//   { src: "/iso.png", alt: "ISO Certified" },
//   { src: "/cruelty.png", alt: "Cruelty Free" },
//   { src: "/vegan.png", alt: "Vegan" },
//   { src: "/eco.png", alt: "Eco Friendly" },
// ];

// function CertificationSection() {
//   return (
//     <>
//   <section>
//     <video src=""></video>
//     </section>  
//     <section className="py-16 ">
//       <div className="flex flex-wrap justify-center gap-8 md:gap-12 xl:gap-20 px-4 sm:px-6 md:px-16 lg:px-16 xl:px-24 2xl:px-52">
//         {certifications.map((item, index) => (
//           <div key={index} className="relative w-24 h-24 ">
//             <Image src={item.src} alt={item.alt} fill className="object-contain" />
//           </div>
//         ))}
//       </div>
//     </section>
//     </>
//   );
// }

// export default CertificationSection;