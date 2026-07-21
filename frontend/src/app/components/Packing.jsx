import React from "react";
import { ArrowRight, Package, Sparkles, Leaf, Palette } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PackagingInnovation() {


  return (
    <section className="w-full px-6 lg:px-16 xl:px-24 2xl:px-40 pt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12">
<div className="order-1 lg:order-2">
  <h2 className="text-sm font-medium text-gray-600 tracking-wider mb-4">
    About Prodsol Biotech
  </h2>

  <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6 leading-tight relative">
    Comprehensive cosmetic solutions from concept to market
    <span className="block w-16 h-0.5 bg-black absolute -bottom-3 left-0"></span>
  </h3>

  <p className="text-gray-600 mb-6 text-base leading-relaxed">
    Prodsol Biotech Pvt. Ltd. is an end-to-end cosmetic manufacturing partner
    offering private label, contract manufacturing, custom formulation,
    packaging, regulatory support and export-ready solutions. We help brands
    transform ideas into high-quality, market-ready products with complete
    support at every stage.
  </p>

  <p className="text-gray-600 mb-6 text-base leading-relaxed">
    Our comprehensive portfolio covers skincare, haircare, body care, baby care,
    men&apos;s grooming, intimate hygiene, pet care, dermatology, nail care,
    aromatherapy, spa and salon products, along with premium hotel and guest
    amenities. From product development and formula optimization to low-MOQ
    manufacturing, packaging design, documentation and brand-building support,
    we deliver everything under one roof.
  </p>

  <Link
    href="/about-us"
    className="group flex items-center gap-2 text-[#00385d] font-medium hover:text-[#1f5a30] transition-colors"
  >
    <span>Explore Our Capabilities</span>
    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
  </Link>
</div>

        {/* Right Column - Image */}
        <div className="order-2 lg:order-1 w-full flex justify-center">
          <div className="relative w-full max-w-lg aspect-square overflow-hidden rounded-t-full">
            <Image
              src="/6.webp"
              alt="Product packaging showcase"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
             <div className="absolute -top-12 -right-12">
            <Image
              src="/packing.webp"
              alt="Product packaging showcase"
              fill
              className="w-full h-auto object-cover"
          
            />
          </div>
          </div>
         
        </div>
      </div>
    </section>
  );
}
