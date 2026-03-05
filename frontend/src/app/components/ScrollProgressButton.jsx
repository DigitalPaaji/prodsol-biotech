"use client";
import { useState, useEffect, useRef } from "react";

export default function ScrollProgressButton() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
      setIsVisible(scrollTop > 200);
    };

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress();
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Calculate circle properties
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;
  
  // Rotation for the text - MULTIPLIED FOR FASTER ROTATION
  // Multiply by desired number of rotations (e.g., 10 = 10 full rotations from 0 to 100%)
  const rotationMultiplier = 20; // Change this number to control speed
  const textRotation = (scrollProgress / 100) * 360 * rotationMultiplier;

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 w-16 h-16 bg-transparent rounded-full flex items-center justify-center z-50 group focus:outline-none"
      aria-label="Scroll to top"
    >
      {/* Main circle border */}
      <svg className="absolute inset-0 w-full h-full">
        {/* Background circle */}
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="white"
          stroke="#e5e7eb"
          strokeWidth="1.5"
          className="shadow-lg"
        />
      </svg>

      {/* Rotating text around the border - FASTER ROTATION */}
      <div 
        className="absolute inset-0"
        style={{
          transform: `rotate(${textRotation}deg)`,
          transition: 'transform 0.05s linear', // Faster transition for smoother fast rotation
          width: '64px',
          height: '64px'
        }}
      >
        <svg width="64" height="64" viewBox="0 0 64 64">
          <defs>
            <path id="circlePath" d="M 32,32 m -28,0 a 28,28 0 1,1 56,0 a 28,28 0 1,1 -56,0" />
          </defs>
          <text fill="#4b5563" fontSize="6" fontWeight="500" letterSpacing="1.2">
            <textPath href="#circlePath" startOffset="0%">
              • SCROLL TOP • SCROLL TOP • SCROLL TOP • SCROLL TOP •
            </textPath>
          </text>
        </svg>
      </div>

      {/* Center percentage */}
      <div className="relative z-10 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-inner">
        <span className="text-sm font-semibold text-gray-700">
          {Math.round(scrollProgress)}
          <span className="text-[8px] text-gray-400 ml-0.5">%</span>
        </span>
      </div>
    </button>
  );
}