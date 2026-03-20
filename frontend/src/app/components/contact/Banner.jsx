import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Hero Banner Component
export default function HeroBanner() {
  return (
    <div className="relative w-full">
      {/* Background Image Container - Height controlled by image aspect ratio */}
      <div className="relative w-full">
    {/* 
    
    */}
<Image
  src="/about.webp"
  alt="About Us Background"
  width={1920}
  height={600}
  className="w-full h-auto object-cover lg:hidden"
  priority
  quality={100}
/>

{/* Desktop Image */}
<Image
  src="/about0.webp"
  alt="About Us Background"
  width={1920}
  height={600}
  className="hidden lg:block w-full h-auto object-cover"
  priority
  quality={100}
/>
        
        {/* Dark Overlay - Optional, remove if not needed */}
        <div className="absolute inset-0 bg-linear-to-br from-transparent via-[#005D4F]/10 to-[#005D4F]/30" />
        
        {/* Content Container - Positioned absolutely over the image */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52 py-8 md:py-12">
            <div className="max-w-2xl ml-auto text-right">
              {/* About Us Heading */}
              <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-2 md:mb-4 leading-tight">
                Contact Us
              </h1>
              
              {/* Breadcrumb */}
              <div className="flex items-center justify-end gap-2 text-xs sm:text-sm md:text-base text-white/90">
                <Link 
                  href="/" 
                  className="hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
                <span className="text-white/70">/</span>
                <span className="text-[#db0e18] font-medium">Contact Us</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}