"use client";
import Image from "next/image";
import React from "react";

export default function CapabilitiesLayout() {
  const capabilities = [
    {
      id: "01",
      title: "Market Understanding",
      items: ["Pricing strategy", "Packaging insights", "Trend mapping"],
    },
    {
      id: "02",
      title: "Research & Development",
      items: [
        "500+ formulations",
        "Custom product development",
        "Innovation using actives & botanicals",
      ],
    },
    {
      id: "03",
      title: "Production Excellence",
      items: [
        "Automated facility",
        "Flexible batch sizes",
        "Quality checks at every stage",
      ],
    },
    {
      id: "04",
      title: "Compliance & Quality",
      items: [
        "In-house labs",
        "Dermatological testing",
        "International certifications",
      ],
    },
    {
      id: "05",
      title: "Logistics & Supply Chain",
      items: ["Warehousing", "Ready-to-ship solutions", "Quick turnaround"],
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52 py-16 lg:py-24  font-sans antialiased bg-linear-to-b from-white to-gray-50 ">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mt-4">
          Our{" "}
          <span className="relative italic font-medium text-[#007e44]">
            Capabilities
          </span>
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
          Every formulation focuses on three core principles
        </p>
      </div>
      {/* Main container with two-column layout */}
      <div className="flex flex-col xl:flex-row">
        {/* LEFT SIDEBAR - inspired by the beige/visual panel from the image */}
        <div className="xl:w-1/2 bg-[#fbf7f2] p-10 xl:p-14 flex flex-col justify-between relative overflow-hidden">
          {/* subtle decorative element (like the abstract lines from the image) */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#e6d9d0] rounded-full -mr-10 -mt-10 opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#d8cdc2] rounded-full -mb-20 -ml-20 opacity-20"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
            {capabilities.map((cap) => (
              <div key={cap.id} className="group">
                {/* title */}
                <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-4">
                  {cap.title}
                </h3>
                {/* bullet list */}
                <ul className="space-y-1 text-gray-600">
                  {cap.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-gray-400">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

{/* RIGHT CONTENT - capabilities cards */}
<div className="xl:w-1/2 px-4">
  <div className="relative z-10 space-y-4">
    {/* Main large image with slight rotation/overlap effect */}
    <div className="relative">
      <Image
        src="/about2.webp" // Add main image
        alt="Main beauty product"
        width={800}
        height={600}
        className="w-full hidden xl:block h-85 object-cover rounded-tl-4xl rounded-br-4xl "
        priority
      />
      

    </div>

    {/* Two smaller images arranged with overlap/offset effect */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-end ">
      <div className="w-full ">
        <div className="relative">
          <Image
            src="/about3.webp" // Add first small image
            alt="Beauty product detail 1"
            width={400}
            height={300}
            className="w-full h-auto object-cover rounded-tl-4xl rounded-br-4xl"
          />
        </div>
      </div>
      <div className="w-full  ">
        <div className="relative">
          <Image
            src="/s7.webp" // Add second small image
            alt="Beauty product detail 2"
            width={400}
            height={300}
            className="w-full h-auto object-cover rounded-tl-4xl rounded-br-4xl"
          />
        </div>
      </div>
    </div>

    {/* Caption text similar to the "cosmetic mockup" style */}
    <div className="mt-8 text-right">
      <span className="text-xs text-gray-500 uppercase tracking-[0.3em]">
        beauty <span className="text-gray-300 mx-2">/</span> essentials
      </span>
    </div>
  </div>
</div>
      </div>

      {/* style tweak for better spacing on small screens */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .lg\\:w-2\/5,
          .lg\\:w-3\/5 {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
