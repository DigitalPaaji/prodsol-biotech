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
    <div className="relative h-auto md:h-auto xl:min-h-screen overflow-hidden">
      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="relative min-h-screen flex items-center transition-transform duration-700 ease-out cursor-grab active:cursor-grabbing"
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
            className={`w-full shrink-0 px-6 md:px-12 lg:px-16 xl:px-24 py-12 min-h-screen flex items-center ${
              slide.imagePosition === 'right' 
                ? 'justify-start gap-6 xl:gap-12 flex-col lg:flex-row' 
                : 'justify-start gap-6 xl:gap-12 flex-col lg:flex-row-reverse'
            } gap-8 lg:gap-12 ${slide.bgColor}`}
          >
            {/* Content Side - Simplified and elegant */}
            <div className={`w-full lg:w-1/2 space-y-6 ${slide.imagePosition === 'right' ? 'lg:pr-12' : 'lg:pl-12'}`}>
              <div className="space-y-4">
                <h4 className="text-xs tracking-[0.2em] text-gray-500 font-light uppercase">
                  {slide.tagline}
                </h4>
                
                <h2 className="text-sm font-medium text-gray-600 tracking-wider">
                  {slide.company}
                </h2>
                
                <h1 className="font-light">
                  <span className="block text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight">
                    {slide.title}
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl text-gray-700 mt-2 font-normal">
                    {slide.subtitle}
                  </span>
                </h1>

                {/* Minimal decorative line */}
                <div className="w-16 h-px bg-gray-300 my-6"></div>

                {/* Simple, clean CTA */}
                <button className="group inline-flex items-center gap-2 text-sm tracking-wider text-gray-700 hover:text-gray-900 transition-colors duration-300">
                  <span>DISCOVER MORE</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Image Side - Clean and professional */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-4/3 lg:aspect-square overflow-hidden">
                <Image
                  src={slide.image}
                  alt={`${slide.company} - ${slide.title}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Minimal Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center hover:border-gray-400 transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center hover:border-gray-400 transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button> */}

      {/* Elegant Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
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
        <span className="ml-4 text-xs text-gray-400 font-light tracking-wider">
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}

export default Banner