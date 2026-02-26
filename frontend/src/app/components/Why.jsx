import React from 'react';
import {
  ShieldCheck,
  FlaskConical,
  Factory,
  Layers,
  BadgeCheck,
  Leaf,
  ArrowRight,
} from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Certified Excellence',
    description: 'GMP, ISO, and FDA standards ensuring global safety and efficacy benchmarks.',
  },
  {
    icon: FlaskConical,
    title: 'Innovative R&D',
    description: 'Dedicated scientists creating unique, market-ready custom formulations.',
  },
  {
    icon: Factory,
    title: 'Scalable Manufacturing',
    description: 'Low MOQs starting from 2,000 units to support brands at every scale.',
  },
  {
    icon: Layers,
    title: 'End-to-End Solutions',
    description: 'From concept and testing to regulatory filing and final delivery.',
  },
  {
    icon: BadgeCheck,
    title: 'Quality Assurance',
    description: 'Stringent multi-level checks from raw materials to finished products.',
  },
  {
    icon: Leaf,
    title: 'Ethical Commitment',
    description: 'Cruelty-free, vegan formulations with sustainable sourcing of actives.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-12 xl:px-24 2xl:px-40 ">
      {/* Upper Label */}


      {/* Main Heading Area */}
      <div className="text-center w-full space-y-8 mb-16">
              <div className="mb-12">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#007e44] border-b border-gray-200 pb-2">
          The Prodsol Standard
        </span>
      </div>
        <div className="">
          <h2 className="text-3xl md:text-4xl  font-medium leading-[1.1]  tracking-tight mb-6">
            Transparent. Potent. 
            <span className="font-medium italic"> Partner-Focused.</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl  leading-relaxed">
            We simplify complex manufacturing so you can focus on building your brand identity.
          </p>
        </div>
      
      </div>

      {/* The Minimalist Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-100">
        {features.map(({ icon: Icon, title, description }, index) => (
          <div
            key={index}
            className="group p-10 border-r border-b border-gray-100 hover:bg-[#f9f9f9] transition-colors duration-300 relative overflow-hidden"
          >
            {/* Minimal Icon Representation */}
            <div className="mb-8 text-[#007e44] group-hover:scale-110 transition-transform duration-500 origin-left">
              <Icon size={32} strokeWidth={1.2} />
            </div>

            <div className="relative z-10">
              <h3 className="text-lg font-bold uppercase tracking-tight mb-3">
                {title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                {description}
              </p>
            </div>

            {/* Subtle Index Number */}
            <span className="absolute bottom-6 right-8 text-xs font-mono text-gray-300">
              0{index + 1}
            </span>
          </div>
        ))}
      </div>


    </section>
  );
}