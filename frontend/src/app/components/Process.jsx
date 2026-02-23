'use client'

import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'

const ServicesProcess = () => {
  const [activeService, setActiveService] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const services = [
    {
      id: 1,
      title: "Private Label Solutions",
      description: "Ready-to-market cosmetic products with your branding. Ideal for start-ups and growing brands looking to launch quickly with proven formulations.",
      icon: "/private-label-icon.png",
      image: "/process1.webp",
      
    },
    {
      id: 2,
      title: "Contract Manufacturing",
      description: "Large-scale, high-quality production facilities built to GMP, ISO, and FBA standards. Reliable, consistent, and scalable manufacturing for established brands.",
      icon: "/contract-manufacturing-icon.png",
      image: "/process1.webp",
      
    },
    {
      id: 3,
      title: "Product Development",
      description: "From concept to final product, our team guides you through formulation, testing, stability studies, and regulatory approvals.",
      icon: "/product-dev-icon.png",
      image: "/process1.webp",
     
    },
    {
      id: 4,
      title: "Regulatory & Compliance Support",
      description: "Expert handling of documentation, claims, and certifications to ensure your products meet global standards.",
      icon: "/regulatory-icon.png",
      image: "/process1.webp",
      
    },
    {
      id: 5,
      title: "Logistics & Delivery",
      description: "Efficient supply chain and global delivery services to ensure your products reach the market on time, every time.",
      icon: "/logistics-icon.png",
      image: "/process1.webp",
    
    }
  ]

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Auto-rotate services
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [services.length])

  return (
    <div ref={sectionRef} className="relative w-full overflow-hidden ">

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h4 className="text-xs tracking-[0.2em] text-gray-500 font-light uppercase mb-4">
            END-TO-END SOLUTIONS
          </h4>
          <h1 className="font-light">
            <span className="head block text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900">
              Services We Offer
            </span>
            <span className="block text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              End-to-end cosmetic solutions tailored for your brand
            </span>
          </h1>
          <div className="w-16 h-px bg-gray-300 mx-auto mt-8"></div>
        </div>

     {/* Services Grid - Mobile / Tablet */}
<div className="space-y-10">
  {services.map((service, index) => {
    const isReverse = index % 2 !== 0;

    return (
      <div
        key={service.id}
        className={`${service.color} overflow-hidden transition-all duration-700 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <div
          className={`flex flex-col md:flex-row ${
            isReverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* IMAGE */}
          <div className="relative w-full md:w-1/2 aspect-[16/9]">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0"></div>
          </div>

          {/* CONTENT */}
          <div className="p-6 md:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              {service.title}
            </h3>

            <p className="text-gray-700 text-sm leading-relaxed">
              {service.description}
            </p>

            <button className="group inline-flex items-center gap-2 text-sm tracking-wider text-gray-700 hover:text-gray-900 transition-colors duration-300 mt-5">
              <span>LEARN MORE</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  })}
</div>

     
   
      </div>

      {/* Same animation styles from banner */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 7s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  )
}

export default ServicesProcess