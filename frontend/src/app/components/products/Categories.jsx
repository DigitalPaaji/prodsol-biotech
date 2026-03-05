"use client";
import React, { useState } from "react";
import { 
  ChevronRight, 
  Sparkles, 
  Baby, 
  ShieldCheck, 
  Heart, 
  User, 
  Smile, 
  PawPrint, 
  Footprints 
} from "lucide-react";

const categories = [
  {
    id: "skin",
    title: "Skin Care",
    icon: <Sparkles className="w-5 h-5" />,
    description: "Advanced dermatological formulations ranging from anti-ageing to tan removal.",
    mobileImage: "/p1.webp",
    image: "/skin.webp",
    subgroups: [
      { name: "Derma Products", items: ["Face Oil", "Hand Cream & Lotion", "Tan Removal", "Body Lotions"] },
      { name: "Treatments", items: ["Anti-Ageing Body Butter", "Body Mist", "Face Packs & Masks", "Face Serums", "Toners"] }
    ]
  },
  {
    id: "baby",
    title: "Baby Care",
    icon: <Baby className="w-5 h-5" />,
    description: "Ultra-gentle, pH-balanced formulations for delicate infant skin.",
    mobileImage: "/p7.webp",
    image: "/baby.webp",
    subgroups: [
      { name: "Essentials", items: ["Nipple Butter", "Baby FaceWash", "Baby Shampoo", "Baby Body Oil", "Baby Lotions", "Nappy Rash Cream"] }
    ]
  },
  {
    id: "men",
    title: "Men's Grooming",
    icon: <User className="w-5 h-5" />,
    description: "Rugged yet refined care for the modern man's grooming needs.",
    mobileImage: "/p3.webp",
    image: "/men.webp",
    subgroups: [
      { name: "Beard & Hair", items: ["Beard Wash", "Beard Grooming", "Hair Styling Wax"] },
      { name: "Face & Body", items: ["Men's Gels", "Men's Creams"] }
    ]
  },
  {
    id: "hygiene",
    title: "Hygiene",
    icon: <ShieldCheck className="w-5 h-5" />,
    description: "Complete protection and sanitation solutions for everyday safety.",
    mobileImage: "/p4.webp",
    image: "/hygiene.webp",
    subgroups: [
      { name: "Hand & Body", items: ["Hand Sanitizers", "Hand Wash", "Body Lotions", "Foaming Wash"] }
    ]
  },
  {
    id: "intimate",
    title: "Intimate Care",
    icon: <Smile className="w-5 h-5" />,
    description: "Specialized, dermatologically safe wellness and hygiene products.",
    mobileImage: "/p2.webp",
    image: "/intimate.webp",
    subgroups: [
      { name: "Wellness", items: ["Sexual Wellness Products", "Intimate Toner", "Foaming Wash"] }
    ]
  },
  {
    id: "lip",
    title: "Lip Care",
    icon: <Heart className="w-5 h-5" />,
    description: "From tints to deep repair masks, comprehensive care for your smile.",
    mobileImage: "/p5.webp",
    image: "/lip.webp",
    subgroups: [
      { name: "Color & Care", items: ["Lip Liners", "Lip Oils", "Lip Stains", "Lip Tints", "Lip Balms", "Lip Masks"] }
    ]
  },
  {
    id: "pet",
    title: "Pet Care",
    icon: <PawPrint className="w-5 h-5" />,
    description: "Veterinary-inspired grooming for your furry companions.",
    mobileImage: "/p6.webp",
    image: "/pet.webp",
    subgroups: [
      { name: "Grooming", items: ["Pet Grooming Products", "Pet Paw Care", "Pet Shampoo & Wash"] }
    ]
  },
  {
    id: "foot",
    title: "Foot Care",
    icon: <Footprints className="w-5 h-5" />,
    description: "Intensive repair and soothing balms for tired feet.",
    mobileImage: "/p8.webp",
    image: "/foot.webp",
    subgroups: [
      { name: "Repair", items: ["Foot Balms", "Foot Creams"] }
    ]
  }
];

export default function ProductPortfolio() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-white min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-16 xl:px-40">
      {/* Header */}
      <div className="mb-16 border-b border-gray-100 pb-10 text-center">
        <h2 className="text-xs font-bold tracking-[0.3em] text-[#007e44] uppercase mb-4">Our Product Range</h2>
        <div className="flex flex-col justify-center items-center gap-6">
          <h3 className="text-4xl md:text-5xl font-light text-gray-900 max-w-xl">
            Formulations for <span className="italic font-serif">every lifestyle</span> segment.
          </h3>
          <p className="text-gray-500 max-w-xs text-sm leading-relaxed">
            Comprehensive categories covering beauty, personal, and specialized biotech care.
          </p>
        </div>
      </div>

      {/* --- MOBILE VIEW: One by one stack --- */}
      <div className="flex flex-col gap-12 lg:hidden">
        {categories.map((cat) => (
          <div key={cat.id} className="bg-gray-50 border border-gray-100 overflow-hidden flex flex-col ">
            {/* Improved Mobile Image Container */}
            <div className="relative h-96 w-full bg-white">
              <img 
                src={cat.mobileImage} 
                alt={cat.title} 
                className="absolute inset-0 w-full h-full object-contain "
              />
              {/* <div className="absolute inset-0 bg-[#007e44]/5 pointer-events-none" /> */}
              <div className="absolute top-4 left-4 bg-[#007e44] text-white p-2  shadow-lg z-10">
                {cat.icon}
              </div>
            </div>
            
            <div className="p-8">
              <h4 className="text-2xl font-medium text-gray-900 mb-4 uppercase tracking-tight">{cat.title}</h4>
              <p className="text-gray-600 mb-8 leading-relaxed text-sm">
                {cat.description}
              </p>

              <div className="space-y-8">
                {cat.subgroups.map((group, gIdx) => (
                  <div key={gIdx}>
                    <h5 className="text-[10px] font-bold uppercase tracking-widest text-[#007e44] mb-4">
                      {group.name}
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {group.items.map((item, iIdx) => (
                        <div key={iIdx} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5  bg-[#007e44]" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- DESKTOP VIEW: Tab System --- */}
      <div className="hidden lg:flex flex-row gap-8 xl:gap-12">
        {/* Navigation Sidebar */}
        <div className="lg:w-1/4 flex flex-col gap-2">
          {categories.map((cat, index) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-4 px-6 py-4 text-left transition-all duration-300 
                ${activeTab === index 
                  ? "bg-[#007e44] text-white shadow-lg shadow-[#007e44]/20 translate-x-2" 
                  : "bg-transparent text-gray-500 hover:bg-gray-50"
                }`}
            >
              <span className={activeTab === index ? "text-white" : "text-[#007e44]"}>
                {cat.icon}
              </span>
              <span className="font-medium text-sm tracking-wide uppercase">{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Detailed Content Canvas */}
        <div className="lg:w-3/4 bg-gray-50 overflow-hidden flex flex-row border border-gray-100 lg:h-115 ">
          {/* Text Side */}
          <div className="flex-[1.2] p-10 xl:p-12 flex flex-col justify-between">
            <div>
              <h4 className="text-3xl font-medium text-gray-900 mb-4">{categories[activeTab].title}</h4>
              <p className="text-gray-600 mb-10 leading-relaxed max-w-md">
                {categories[activeTab].description}
              </p>

              <div className="space-y-8">
                {categories[activeTab].subgroups.map((group, gIdx) => (
                  <div key={gIdx}>
                    <h5 className="text-[10px] font-bold uppercase tracking-widest text-[#007e44] mb-4">
                      {group.name}
                    </h5>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                      {group.items.map((item, iIdx) => (
                        <div key={iIdx} className="flex items-center gap-3 group cursor-default">
                          <div className="w-1.5 h-1.5  bg-gray-300 group-hover:bg-[#007e44] transition-colors" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="mt-12 flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#007e44] hover:gap-5 transition-all w-fit">
              Request Formulation Details <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Image Side - Adjusted for better visibility */}
          <div className="flex-1 relative bg-white border-l border-gray-100 flex items-center justify-center p-6">
            <img 
              src={categories[activeTab].image} 
              alt={categories[activeTab].title} 
              className="w-full h-full object-contain transition-all duration-700"
            />
            {/* Soft Branding Overlay */}
            <div className="absolute inset-0 bg-[#007e44]/5 mix-blend-multiply pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-16 text-center">
        <p className="text-gray-400 text-sm">
          From head-to-toe care, baby care to pet care — <span className="text-gray-900 font-medium">Prodsol Biotech</span> delivers formulations for every lifestyle segment.
        </p>
      </div>
    </section>
  );
}
