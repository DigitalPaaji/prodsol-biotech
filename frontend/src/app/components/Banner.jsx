'use client'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [animate, setAnimate] = useState(false)
  const sliderRef = useRef(null)
  const autoPlayRef = useRef(null)

  const slides = [
    {
      id: 1,
      company: "PRODSOL BIOTECH PVT. LTD.",
      title: "Trusted Partner in Cosmetic",
      subtitle: "Contract Manufacturing",
      tagline: "FROM CONCEPT TO COSMETIC PERFECTION",
      imagePosition: "right",
      image: "/product1.webp",
      bgColor: "bg-[#EAEFEF]/60"
    },
    {
      id: 2,
      company: "PRODSOL BIOTECH PVT. LTD.",
      title: "End-to-end cosmetic solutions",
      subtitle: "For Modern Beauty Brands",
      tagline: "WHERE SCIENCE MEETS BEAUTY",
      imagePosition: "right",
      image: "/b1.png",
      bgColor: "bg-white/50"
    },

  ]

  // Trigger animations when slide changes
  useEffect(() => {
    setAnimate(false)
    
    const timeout = setTimeout(() => {
      setAnimate(true)
    }, 50)

    return () => clearTimeout(timeout)
  }, [currentSlide])

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
    // Prevent default to avoid text/image selection
    e.preventDefault()
    setIsDragging(true)
    setStartX(e.type === 'mousedown' ? e.pageX : e.touches[0].pageX)
    stopAutoPlay()
  }

  const handleDragMove = (e) => {
    if (!isDragging) return
    // Prevent default to avoid scrolling while dragging
    e.preventDefault()
    const currentX = e.type === 'mousemove' ? e.pageX : e.touches[0].pageX
    const diff = currentX - startX
    
    // Add resistance at edges for better UX
    const maxDrag = window.innerWidth * 0.5 // Limit drag to 30% of screen width
    let limitedDiff = diff
    
    if (currentSlide === 0 && diff > 0) {
      limitedDiff = diff * 0.5 // Resistance when dragging first slide left
    } else if (currentSlide === slides.length - 1 && diff < 0) {
      limitedDiff = diff * 0.5 // Resistance when dragging last slide right
    } else {
      limitedDiff = Math.max(Math.min(diff, maxDrag), -maxDrag)
    }
    
    setDragOffset(limitedDiff)
  }

  const handleDragEnd = () => {
    if (!isDragging) return
    
    setIsDragging(false)
    
    // Only change slide if drag distance is significant
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

  // Function to get animation classes based on animate state
  const getAnimationClass = (baseClass, delay = '') => {
    if (!animate) return 'opacity-0'
    return `${baseClass} ${delay}`
  }

  // Calculate transform for smooth dragging
  const getTransformStyle = () => {
    const baseTransform = -currentSlide * 100
    const offset = isDragging ? dragOffset / window.innerWidth * 100 : 0
    return `translateX(calc(${baseTransform}% + ${offset}%))`
  }

  return (
    <div className="relative w-full overflow-hidden h-auto select-none"> {/* Added select-none */}
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 z-10 opacity-30 hidden lg:block animate-float">
        <Image 
          src="/ele1.png" 
          alt="decorative element" 
          width={80} 
          height={80} 
          className="object-contain pointer-events-none" // Added pointer-events-none
          draggable="false" // Added draggable false
        />
      </div>
      <div className="absolute bottom-20 right-10 z-10 opacity-30 hidden lg:block animate-float-delayed">
        <Image 
          src="/ele3.png" 
          alt="decorative element" 
          width={60} 
          height={60} 
          className="object-contain pointer-events-none" // Added pointer-events-none
          draggable="false" // Added draggable false
        />
      </div>
      <div className="absolute top-40 right-20 z-10 opacity-20 hidden lg:block animate-spin-slow">
        <Image 
          src="/ele2.png" 
          alt="decorative element" 
          width={40} 
          height={40} 
          className="object-contain pointer-events-none" // Added pointer-events-none
          draggable="false" // Added draggable false
        />
      </div>
      <div className="absolute bottom-40 left-20 z-10 opacity-20 hidden lg:block animate-pulse-slow">
        <Image 
          src="/ele4.png" 
          alt="decorative element" 
          width={50} 
          height={50} 
          className="object-contain pointer-events-none" // Added pointer-events-none
          draggable="false" // Added draggable false
        />
      </div>

      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="relative flex items-start transition-transform duration-500 ease-out cursor-grab active:cursor-grabbing "
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        style={{
          transform: getTransformStyle(),
          transition: isDragging ? 'none' : 'transform 0.5s ease-out'
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`w-full shrink-0 ${slide.bgColor} relative sm:px-6 lg:px-12 xl:px-24 2xl:px-40 py-24`}
          >
            {/* Mobile Layout (stacked) */}
            <div className="block lg:hidden">
              {/* Content below image */}
              <div className="text-center px-6 py-10 md:px-12 md:py-16 relative">
                <div className="max-w-2xl mx-auto">
                  <h1 className="font-light">
                    <span className={`head capitalize block text-5xl md:text-6xl leading-tight ${getAnimationClass('animate-fade-in-up', 'animation-delay-400')}`}>
                      {slide.title}
                    </span>
                    </h1>
                    <h4 className={`text-sm tracking-[0.2em] text-gray-500 font-light uppercase my-2 ${getAnimationClass('animate-fade-in-up')}`}>
                      {slide.tagline}
                    </h4>
                    
                    <h2 className={`text-sm font-medium text-gray-600 tracking-wider mb-4 ${getAnimationClass('animate-fade-in-up', 'animation-delay-200')}`}>
                      {slide.company}
                    </h2>
                    <span className={`block text-xl md:text-3xl text-gray-700 mt-2 font-normal ${getAnimationClass('animate-fade-in-up', 'animation-delay-600')}`}>
                      {slide.subtitle}
                    </span>
                  

                  <div className={`w-16 h-px bg-gray-300 my-3 ${getAnimationClass('animate-scale-x', 'animation-delay-800')} mx-auto`}></div>

                  <button className={`group inline-flex items-center gap-2 text-sm tracking-wider text-gray-700 hover:text-gray-900 transition-colors duration-300 ${getAnimationClass('animate-fade-in-up', 'animation-delay-1000')}`}>
                    <span>DISCOVER MORE</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div> 
              {/* Image first - full width, no background */}
              <div className="w-full relative">
                <div className={`relative w-full aspect-4/3 ${getAnimationClass('animate-zoom-in')}`}>
                  <Image
                    src={slide.image}
                    alt={`${slide.company} - ${slide.title}`}
                    width={440} 
                    height={440}
                    className="w-full h-auto p-4 object-cover pointer-events-none" // Added pointer-events-none
                    priority={index === 0}
                    sizes="100vw"
                    draggable="false" // Added draggable false
                  />
                </div>
              </div>
            </div>

            {/* Desktop Layout (side by side) */}
            <div className={`hidden lg:flex items-center ${
              slide.imagePosition === 'right' 
                ? 'flex-row' 
                : 'flex-row-reverse'
            }`}>
              {/* Content Side */}
              <div className={`w-1/2 text-left lg:text-center  ${slide.imagePosition === 'right' ? 'pr-12' : 'pl-12'}`}>
                <div className="space-y-4">
                  <h4 className={`text-xs tracking-[0.2em] text-gray-500 font-light uppercase ${getAnimationClass('animate-fade-in-up')}`}>
                    {slide.tagline}
                  </h4>
                  
                  <h2 className={`text-sm font-medium text-gray-600 tracking-wider ${getAnimationClass('animate-fade-in-up', 'animation-delay-200')}`}>
                    {slide.company}
                  </h2>
                  
                  <h1 className="font-light">
                    <span className={`head block capitalize text-4xl xl:text-6xl 2xl:text-7xl leading-tight ${getAnimationClass('animate-fade-in-up', 'animation-delay-400')}`}>
                      {slide.title}
                    </span>
                    <span className={`block text-3xl xl:text-4xl text-gray-700 mt-2 font-normal `}>
                      {slide.subtitle}
                    </span>
                  </h1>

                  <div className={`w-16 h-px bg-gray-300 my-6 ${getAnimationClass('animate-scale-x', 'animation-delay-800')}`}></div>

                  <button className={`group inline-flex items-center gap-2 text-sm tracking-wider text-gray-700 hover:text-gray-900 transition-colors duration-300 ${getAnimationClass('animate-fade-in-up', 'animation-delay-1000')}`}>
                    <span>DISCOVER MORE</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Image Side - no background, merged with layout */}
              <div className="w-1/2 relative">
                <div className={`relative ${getAnimationClass('animate-zoom-in')}`}>
                  <Image
                    src={slide.image}
                    alt={`${slide.company} - ${slide.title}`}
                    width={660} 
                    height={660}
                    className="object-cover pointer-events-none" // Added pointer-events-none
                    priority={index === 0}
                    sizes="50vw"
                    draggable="false" // Added draggable false
                  />
                </div>
              </div>
            </div>

            {/* Slide-specific decorative elements */}
            {index === 0 && (
              <>
                <div className="absolute top-10 left-10 z-20 opacity-20 hidden lg:block animate-pulse-slow">
                  <Image 
                    src="/ele5.png" 
                    alt="decorative element" 
                    width={30} 
                    height={30}
                    className="pointer-events-none" // Added pointer-events-none
                    draggable="false" // Added draggable false
                  />
                </div>
                <div className="absolute bottom-10 right-10 z-20 opacity-20 hidden lg:block animate-spin-slow">
                  <Image 
                    src="/ele2.png" 
                    alt="decorative element" 
                    width={40} 
                    height={40}
                    className="pointer-events-none" // Added pointer-events-none
                    draggable="false" // Added draggable false
                  />
                </div>
              </>
            )}
            
            {index === 1 && (
              <>
                <div className="absolute top-20 right-20 z-20 opacity-20 hidden lg:block animate-bounce-slow">
                  <Image 
                    src="/ele4.png" 
                    alt="decorative element" 
                    width={35} 
                    height={35}
                    className="pointer-events-none" // Added pointer-events-none
                    draggable="false" // Added draggable false
                  />
                </div>
                <div className="absolute bottom-20 left-20 z-20 opacity-20 hidden lg:animate-pulse">
                  <Image 
                    src="/ele2.png" 
                    alt="decorative element" 
                    width={45} 
                    height={45}
                    className="pointer-events-none" // Added pointer-events-none
                    draggable="false" // Added draggable false
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Added for easier slide change */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 shadow-lg"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 shadow-lg"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 ${
              currentSlide === index 
                ? 'w-8 h-0.5 bg-gray-800' 
                : 'w-6 h-0.5 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
        <span className="ml-4 text-xs text-gray-400 font-light tracking-wider hidden sm:inline">
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div>

      {/* Animation keyframes remain the same */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleX {
          from {
            transform: scaleX(0);
            opacity: 0;
          }
          to {
            transform: scaleX(1);
            opacity: 1;
          }
        }
        
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
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
        
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-scale-x {
          animation: scaleX 0.8s ease-out forwards;
          transform-origin: left;
        }
        
        .animate-zoom-in {
          animation: zoomIn 1s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }

        /* Prevent text selection during drag */
        .select-none {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        /* Smooth cursor transitions */
        .cursor-grab {
          cursor: grab;
        }
        
        .cursor-grabbing {
          cursor: grabbing;
        }
      `}</style>
    </div>
  )
}

export default Banner
// 'use client'
// import Image from 'next/image'
// import React, { useState, useEffect, useRef } from 'react'

// const Banner = () => {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isDragging, setIsDragging] = useState(false)
//   const [startX, setStartX] = useState(0)
//   const [dragOffset, setDragOffset] = useState(0)
//   const [animate, setAnimate] = useState(false) // New state to trigger animations
//   const sliderRef = useRef(null)
//   const autoPlayRef = useRef(null)

//   const slides = [
//     {
//       id: 1,
//       company: "PRODSOL BIOTECH PVT. LTD.",
//       title: "Trusted Partner in Cosmetic",
//       subtitle: "Contract Manufacturing",
//       tagline: "FROM CONCEPT TO COSMETIC PERFECTION",
//       imagePosition: "right",
//       image: "/b4.png",
//       bgColor: "bg-[#EAEFEF]/60"
//     },
//     {
//       id: 2,
//       company: "PRODSOL BIOTECH PVT. LTD.",
//       title: "Innovative Cosmetic Solutions",
//       subtitle: "For Modern Beauty Brands",
//       tagline: "WHERE SCIENCE MEETS BEAUTY",
//       imagePosition: "left",
//       image: "/4.webp",
//       bgColor: "bg-[#E9E3DF]/60"
//     }
//   ]

//   // Trigger animations when slide changes
//   useEffect(() => {
//     // Reset animation state
//     setAnimate(false)
    
//     // Small timeout to ensure reset happens before triggering new animation
//     const timeout = setTimeout(() => {
//       setAnimate(true)
//     }, 50)

//     return () => clearTimeout(timeout)
//   }, [currentSlide])

//   // Auto-play functionality
//   useEffect(() => {
//     startAutoPlay()
//     return () => stopAutoPlay()
//   }, [])

//   const startAutoPlay = () => {
//     stopAutoPlay()
//     autoPlayRef.current = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length)
//     }, 5000)
//   }

//   const stopAutoPlay = () => {
//     if (autoPlayRef.current) {
//       clearInterval(autoPlayRef.current)
//     }
//   }

//   // Drag/Swipe handlers
//   const handleDragStart = (e) => {
//     setIsDragging(true)
//     setStartX(e.type === 'mousedown' ? e.pageX : e.touches[0].pageX)
//     stopAutoPlay()
//   }

//   const handleDragMove = (e) => {
//     if (!isDragging) return
//     e.preventDefault()
//     const currentX = e.type === 'mousemove' ? e.pageX : e.touches[0].pageX
//     const diff = currentX - startX
//     setDragOffset(diff)
//   }

//   const handleDragEnd = () => {
//     if (!isDragging) return
    
//     setIsDragging(false)
    
//     if (Math.abs(dragOffset) > 100) {
//       if (dragOffset > 0 && currentSlide > 0) {
//         setCurrentSlide(currentSlide - 1)
//       } else if (dragOffset < 0 && currentSlide < slides.length - 1) {
//         setCurrentSlide(currentSlide + 1)
//       }
//     }
    
//     setDragOffset(0)
//     startAutoPlay()
//   }

//   const goToSlide = (index) => {
//     setCurrentSlide(index)
//     stopAutoPlay()
//     startAutoPlay()
//   }

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length)
//     stopAutoPlay()
//     startAutoPlay()
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
//     stopAutoPlay()
//     startAutoPlay()
//   }

//   // Function to get animation classes based on animate state
//   const getAnimationClass = (baseClass, delay = '') => {
//     if (!animate) return 'opacity-0'
//     return `${baseClass} ${delay}`
//   }

//   return (
//     <div className="relative w-full overflow-hidden h-auto ">
//       {/* Decorative Elements */}
//       <div className="absolute top-20 left-10 z-10 opacity-30 hidden lg:block animate-float">
//         <Image src="/ele1.png" alt="decorative element" width={80} height={80} className="object-contain" />
//       </div>
//       <div className="absolute bottom-20 right-10 z-10 opacity-30 hidden lg:block animate-float-delayed">
//         <Image src="/ele2.png" alt="decorative element" width={60} height={60} className="object-contain" />
//       </div>
//       <div className="absolute top-40 right-20 z-10 opacity-20 hidden lg:block animate-spin-slow">
//         <Image src="/ele1.png" alt="decorative element" width={40} height={40} className="object-contain" />
//       </div>
//       <div className="absolute bottom-40 left-20 z-10 opacity-20 hidden lg:block animate-pulse-slow">
//         <Image src="/ele2.png" alt="decorative element" width={50} height={50} className="object-contain" />
//       </div>

//       {/* Slider Container */}
//       <div
//         ref={sliderRef}
//         className="relative flex items-start transition-transform duration-700 ease-out cursor-grab active:cursor-grabbing"
//         onMouseDown={handleDragStart}
//         onMouseMove={handleDragMove}
//         onMouseUp={handleDragEnd}
//         onMouseLeave={handleDragEnd}
//         onTouchStart={handleDragStart}
//         onTouchMove={handleDragMove}
//         onTouchEnd={handleDragEnd}
//         style={{
//           transform: `translateX(calc(-${currentSlide * 100}% + ${dragOffset}px))`
//         }}
//       >
//         {slides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`w-full shrink-0 ${slide.bgColor} relative`}
//           >
//             {/* Mobile Layout (stacked) */}
//             <div className="block lg:hidden">
//               {/* Content below image */}
//               <div className="text-center px-6 py-10 md:px-12 md:py-16 relative">
//                 <div className="max-w-2xl mx-auto">
//                   <h1 className="font-light">
//                     <span className={`head block text-5xl md:text-6xl  leading-tight ${getAnimationClass('animate-fade-in-up', 'animation-delay-400')}`}>
//                       {slide.title}
//                     </span>
//                     </h1>
//                     <h4 className={`text-sm tracking-[0.2em] text-gray-500 font-light uppercase my-2 ${getAnimationClass('animate-fade-in-up')}`}>
//                       {slide.tagline}
//                     </h4>
                    
//                     <h2 className={`text-sm font-medium text-gray-600 tracking-wider mb-4 ${getAnimationClass('animate-fade-in-up', 'animation-delay-200')}`}>
//                       {slide.company}
//                     </h2>
//                     <span className={`block text-xl md:text-3xl text-gray-700 mt-2 font-normal ${getAnimationClass('animate-fade-in-up', 'animation-delay-600')}`}>
//                       {slide.subtitle}
//                     </span>
                  

//                   <div className={`w-16 h-px bg-gray-300 my-3 ${getAnimationClass('animate-scale-x', 'animation-delay-800')} mx-auto`}></div>

//                   <button className={`group inline-flex items-center gap-2 text-sm tracking-wider text-gray-700 hover:text-gray-900 transition-colors duration-300 ${getAnimationClass('animate-fade-in-up', 'animation-delay-1000')}`}>
//                     <span>DISCOVER MORE</span>
//                     <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                     </svg>
//                   </button>
//                 </div>
//               </div> 
//               {/* Image first - full width, no background */}
//               <div className="w-full relative">
//                 <div className={`relative w-full aspect-4/3 ${getAnimationClass('animate-zoom-in')}`}>
//                   <Image
//                     src={slide.image}
//                     alt={`${slide.company} - ${slide.title}`}
//                     width={1080} 
//                     height={1440}
//                     className="object-cover p-2"
//                     priority={index === 0}
//                     sizes="100vw"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Desktop Layout (side by side) */}
//             <div className={`hidden lg:flex items-center ${
//               slide.imagePosition === 'right' 
//                 ? 'flex-row' 
//                 : 'flex-row-reverse'
//             }`}>
//               {/* Content Side */}
//               <div className={`w-1/2 px-4 text-left lg:text-center sm:px-6 lg:px-12 xl:px-24 2xl:px-40 ${slide.imagePosition === 'right' ? 'pr-12' : 'pl-12'}`}>
//                 <div className="space-y-4">
//                   <h4 className={`text-xs tracking-[0.2em] text-gray-500 font-light uppercase ${getAnimationClass('animate-fade-in-up')}`}>
//                     {slide.tagline}
//                   </h4>
                  
//                   <h2 className={`text-sm font-medium text-gray-600 tracking-wider ${getAnimationClass('animate-fade-in-up', 'animation-delay-200')}`}>
//                     {slide.company}
//                   </h2>
                  
//                   <h1 className="font-light">
//                     <span className={`head block text-4xl xl:text-6xl 2xl:text-8xl  leading-tight ${getAnimationClass('animate-fade-in-up', 'animation-delay-400')}`}>
//                       {slide.title}
//                     </span>
//                     <span className={`block text-3xl xl:text-4xl text-gray-700 mt-2 font-normal `}>
//                       {slide.subtitle}
//                     </span>
//                   </h1>

//                   <div className={`w-16 h-px bg-gray-300 my-6 ${getAnimationClass('animate-scale-x', 'animation-delay-800')}`}></div>

//                   <button className={`group inline-flex items-center gap-2 text-sm tracking-wider text-gray-700 hover:text-gray-900 transition-colors duration-300 ${getAnimationClass('animate-fade-in-up', 'animation-delay-1000')}`}>
//                     <span>DISCOVER MORE</span>
//                     <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>

//               {/* Image Side - no background, merged with layout */}
//               <div className="w-1/2 relative">
//                 <div className={`relative ${getAnimationClass('animate-zoom-in')}`}>
//                   <Image
//                     src={slide.image}
//                     alt={`${slide.company} - ${slide.title}`}
//                     width={1080} 
//                     height={1440}
//                     className="object-cover"
//                     priority={index === 0}
//                     sizes="50vw"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Slide-specific decorative elements */}
//             {index === 0 && (
//               <>
//                 <div className="absolute top-10 left-10 z-20 opacity-20 hidden lg:block animate-pulse-slow">
//                   <Image src="/ele1.png" alt="decorative element" width={30} height={30} />
//                 </div>
//                 <div className="absolute bottom-10 right-10 z-20 opacity-20 hidden lg:block animate-spin-slow">
//                   <Image src="/ele2.png" alt="decorative element" width={40} height={40} />
//                 </div>
//               </>
//             )}
            
//             {index === 1 && (
//               <>
//                 <div className="absolute top-20 right-20 z-20 opacity-20 hidden lg:block animate-bounce-slow">
//                   <Image src="/ele1.png" alt="decorative element" width={35} height={35} />
//                 </div>
//                 <div className="absolute bottom-20 left-20 z-20 opacity-20 hidden lg:animate-pulse">
//                   <Image src="/ele2.png" alt="decorative element" width={45} height={45} />
//                 </div>
//               </>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Slide Indicators - repositioned for mobile */}
//       <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`transition-all duration-500 ${
//               currentSlide === index 
//                 ? 'w-8 h-0.5 bg-gray-800' 
//                 : 'w-6 h-0.5 bg-gray-300 hover:bg-gray-400'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//         <span className="ml-4 text-xs text-gray-400 font-light tracking-wider hidden sm:inline">
//           {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
//         </span>
//       </div>

//       {/* Animation keyframes remain the same */}
//       <style jsx global>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }
        
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
        
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes scaleX {
//           from {
//             transform: scaleX(0);
//             opacity: 0;
//           }
//           to {
//             transform: scaleX(1);
//             opacity: 1;
//           }
//         }
        
//         @keyframes zoomIn {
//           from {
//             opacity: 0;
//             transform: scale(0.9);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }
        
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
        
//         .animate-float-delayed {
//           animation: float 7s ease-in-out infinite;
//           animation-delay: 2s;
//         }
        
//         .animate-spin-slow {
//           animation: spin-slow 20s linear infinite;
//         }
        
//         .animate-pulse-slow {
//           animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
//         }
        
//         .animate-bounce-slow {
//           animation: bounce 3s infinite;
//         }
        
//         .animate-fade-in-up {
//           animation: fadeInUp 0.8s ease-out forwards;
//         }
        
//         .animate-scale-x {
//           animation: scaleX 0.8s ease-out forwards;
//           transform-origin: left;
//         }
        
//         .animate-zoom-in {
//           animation: zoomIn 1s ease-out forwards;
//         }
        
//         .animation-delay-200 {
//           animation-delay: 0.2s;
//         }
        
//         .animation-delay-400 {
//           animation-delay: 0.4s;
//         }
        
//         .animation-delay-600 {
//           animation-delay: 0.6s;
//         }
        
//         .animation-delay-800 {
//           animation-delay: 0.8s;
//         }
        
//         .animation-delay-1000 {
//           animation-delay: 1s;
//         }
//       `}</style>
//     </div>
//   )
// }

// export default Banner