import React from "react";
import { ArrowRight, Package, Sparkles, Leaf, Palette } from "lucide-react";
import Image from "next/image";

export default function PackagingInnovation() {


  return (
    <section className="w-full sm:px-6 lg:px-16 xl:px-24 2xl:px-40 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12">
        <div className="order-2 lg:order-2">
          <h2
            className={`text-sm font-medium text-gray-600 tracking-wider mb-4`}
          >
            Packaging & Innovation
          </h2>
          <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6 leading-tight relative">
            Designing solutions that refflect your brand identity
               <span className="block w-16 h-0.5 bg-black absolute -bottom-3 left-0"></span>
          </h3>
          <p className="text-gray-600 mb-6 text-base leading-relaxed">
            At Prodsol Blotech Pvt. Ltd., we believe that packaging is more than
            just a container - It is the first impression of your brand. We
            offer a wide portfolio of innovative, functional, and sustainable
            packaging solutions that not only protect and preserve your
            formulations but also enhance their market appeal.
          </p>
          <p className="text-gray-600 mb-6 text-base leading-relaxed">
            Our Packaging Solutions Wide Range of Formats Jars, bottles, tubes,
            pumps, droppers, airiess dispensers, sprays • Custom Branding Fuil
            flexibility in label design, embossing, colors, finilshes (matte,
            glossy, metallic) Eco-Friendly Options Recyclable, blodegradable,
            sustainabile packaging alternatives Innovative Designs Slekx,
            modern, ergonomic, pramiurn aesthetics tailored to your taiget
            market From concept to final packaging, we provide innovative
            solutions that bring your brand to life -beautifully and
            sustainably.
          </p>
          <button className="group flex items-center gap-2 text-[#2F7E44] font-medium hover:text-[#1f5a30] transition-colors">
            <span>Read More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Column - Image */}
        <div className="order-1 lg:order-1 w-full flex justify-center">
          <div className="relative w-full max-w-lg aspect-square overflow-hidden rounded-t-full">
            <Image
              src="/5.webp"
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
