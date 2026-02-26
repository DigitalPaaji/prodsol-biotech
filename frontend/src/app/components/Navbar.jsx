"use client"; // Required for useState and interactivity in Next.js App Router

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigation links array (matches Cosmetify.in structure)
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Our Process", href: "/process" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg"
          : "bg-white/60 backdrop-blur-sm"
      } border-b border-black/5`}
    >
      <div className=" px-4 sm:px-6 lg:px-12 xl:px-24 2xl:px-40">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Section */}
          <div className="shrink-0">
            <Link
              href="/"
              className="text-2xl text-[#007e44] lg:text-3xl font-bold tracking-tight group "
            >
               <Image width={'240'} className="w-full h-10" height={'40'} alt={' '} src={'/logogreen.webp' }/>
             
            </Link>
          </div>

          {/* Desktop Menu (hidden on mobile) */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-black/80 hover:text-black text-base font-medium transition-all duration-200 group"
                >
                  {link.name}
                  <span className="absolute inset-x-4 bottom-0 h-0.5 bg-[#007e44] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative inline-flex items-center justify-center p-2 rounded-lg text-black/70 hover:text-black hover:bg-black/5 focus:outline-none transition-all duration-200 group"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              
              {/* Animated Hamburger Icon */}
              <div className="w-6 h-6 flex flex-col items-center justify-center gap-1.5">
                <span
                  className={`w-5 h-0.5 bg-black transform transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-black transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-black transform transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Glass morphism) */}
      <div
        className={`${
          isOpen ? "max-h-128 opacity-100" : "max-h-0 opacity-0"
        } lg:hidden overflow-hidden transition-all duration-400 ease-in-out backdrop-blur-xl bg-white/90 border-t border-black/5 shadow-xl`}
      >
        <div className="px-4 pt-4 pb-5 space-y-2">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-4 py-3 text-black/80 hover:text-black text-base font-medium rounded-xl hover:bg-black/5 transition-all duration-200 transform hover:translate-x-1"
              onClick={() => setIsOpen(false)}
              style={{
                animation: isOpen ? `slideIn 0.3s ease-out ${index * 0.05}s both` : "none",
              }}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Decorative element */}
          <div className="pt-4 mt-2 border-t border-black/5">
            <p className="text-xs text-black/40 text-center">
              PRODSOL BIOTECH © 2026
            </p>
          </div>
        </div>
      </div>

      {/* Add animation keyframes to your global CSS */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;