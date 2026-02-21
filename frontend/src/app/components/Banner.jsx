'use client'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const sliderRef = useRef(null)
  const autoPlayRef = useRef(null)

  const slides = [
    {
      id: 1,
      company: "PRODSOL BIOTECH PVT. LTD.",
      title: "Your Trusted Partner in Cosmetic",
      subtitle: "Contract Manufacturing",
      tagline: "FROM CONCEPT TO COSMETIC PERFECTION",
      imagePosition: "right",
      image: "/1.webp",
      bgColor: "bg-white"
    },
    {
      id: 2,
      company: "PRODSOL BIOTECH PVT. LTD.",
      title: "Innovative Cosmetic Solutions",
      subtitle: "For Modern Beauty Brands",
      tagline: "WHERE SCIENCE MEETS BEAUTY",
      imagePosition: "left",
      image: "/2.webp",
      bgColor: "bg-white"
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    startAutoPlay()
    return () => stopAutoPlay()
  }, [])

  const startAutoPlay = () => {
    stopAutoPlay()
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
  }

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
  }

  // Drag/Swipe handlers
  const handleDragStart = (e) => {
    setIsDragging(true)
    setStartX(e.type === 'mousedown' ? e.pageX : e.touches[0].pageX)
    stopAutoPlay()
  }

  const handleDragMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const currentX = e.type === 'mousemove' ? e.pageX : e.touches[0].pageX
    const diff = currentX - startX
    setDragOffset(diff)
  }

  const handleDragEnd = () => {
    if (!isDragging) return
    
    setIsDragging(false)
    
    if (Math.abs(dragOffset) > 100) {
      if (dragOffset > 0 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1)
      } else if (dragOffset < 0 && currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1)
      }
    }
    
    setDragOffset(0)
    startAutoPlay()
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
    stopAutoPlay()
    startAutoPlay()
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    stopAutoPlay()
    startAutoPlay()
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    stopAutoPlay()
    startAutoPlay()
  }

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="relative flex items-start transition-transform duration-700 ease-out cursor-grab active:cursor-grabbing"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        style={{
          transform: `translateX(calc(-${currentSlide * 100}% + ${dragOffset}px))`
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`w-full shrink-0 ${slide.bgColor}`}
          >
            {/* Mobile Layout (stacked) */}
            <div className="block lg:hidden">
              {/* Image first - full width, no background */}
              <div className="w-full">
                <div className="relative w-full aspect-[4/3] ">
                  <Image
                    src={slide.image}
                    alt={`${slide.company} - ${slide.title}`}
                    fill
                    className="object-cover p-2"
                    priority={index === 0}
                    sizes="100vw"
                  />
                </div>
              </div>
              
              {/* Content below image */}
              <div className="px-6 py-10 md:px-12 md:py-16">
                <div className="max-w-2xl mx-auto">
                  <h4 className="text-sm tracking-[0.2em] text-gray-500 font-light uppercase mb-3">
                    {slide.tagline}
                  </h4>
                  
                  <h2 className="text-sm font-medium text-gray-600 tracking-wider mb-4">
                    {slide.company}
                  </h2>
                  
                  <h1 className="font-light">
                    <span className="block text-3xl md:text-4xl text-gray-900 leading-tight">
                      {slide.title}
                    </span>
                    <span className="block text-2xl md:text-3xl text-gray-700 mt-2 font-normal">
                      {slide.subtitle}
                    </span>
                  </h1>

                  <div className="w-16 h-px bg-gray-300 my-6"></div>

                  <button className="group inline-flex items-center gap-2 text-sm tracking-wider text-gray-700 hover:text-gray-900 transition-colors duration-300">
                    <span>DISCOVER MORE</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop Layout (side by side) */}
            <div className={`hidden lg:flex min-h-screen items-center px-16 xl:px-24 ${
              slide.imagePosition === 'right' 
                ? 'flex-row' 
                : 'flex-row-reverse'
            }`}>
              {/* Content Side */}
              <div className={`w-1/2 ${slide.imagePosition === 'right' ? 'pr-12' : 'pl-12'}`}>
                <div className="space-y-4">
                  <h4 className="text-xs tracking-[0.2em] text-gray-500 font-light uppercase">
                    {slide.tagline}
                  </h4>
                  
                  <h2 className="text-sm font-medium text-gray-600 tracking-wider">
                    {slide.company}
                  </h2>
                  
                  <h1 className="font-light">
                    <span className="block text-4xl xl:text-5xl text-gray-900 leading-tight">
                      {slide.title}
                    </span>
                    <span className="block text-3xl xl:text-4xl text-gray-700 mt-2 font-normal">
                      {slide.subtitle}
                    </span>
                  </h1>

                  <div className="w-16 h-px bg-gray-300 my-6"></div>

                  <button className="group inline-flex items-center gap-2 text-sm tracking-wider text-gray-700 hover:text-gray-900 transition-colors duration-300">
                    <span>DISCOVER MORE</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Image Side - no background, merged with layout */}
              <div className="w-1/2">
                <div className="relative aspect-[4/3] xl:aspect-square">
                  <Image
                    src={slide.image}
                    alt={`${slide.company} - ${slide.title}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators - repositioned for mobile */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 ${
              currentSlide === index 
                ? 'w-8 h-[2px] bg-gray-800' 
                : 'w-6 h-[2px] bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
        <span className="ml-4 text-xs text-gray-400 font-light tracking-wider hidden sm:inline">
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}

export default Banner