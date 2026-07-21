"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { categories } from "../components/data/productCategories";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setMobileProductsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Process", href: "/process" },
    { name: "Contact", href: "/contact" },
  ];

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileProductsOpen(false);
  };

  return (
    <nav
      className={`relative z-50 w-full border-b border-black/5 pt-2 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 shadow-lg backdrop-blur-md"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" aria-label="Prodsol Biotech home">
              <Image
                width={1080}
                height={80}
                src="/logo2.png"
                alt="Prodsol Biotech"
                priority
                className="h-[70px] w-auto object-contain lg:h-[80px]"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-1">
              <Link
                href="/"
                className="group relative px-4 py-2 text-base font-medium text-black/80 transition-all duration-200 hover:text-black"
              >
                Home
                <span className="absolute inset-x-4 bottom-0 h-0.5 origin-left scale-x-0 bg-[#00385d] transition-transform duration-200 group-hover:scale-x-100" />
              </Link>

              <Link
                href="/about"
                className="group relative px-4 py-2 text-base font-medium text-black/80 transition-all duration-200 hover:text-black"
              >
                About Us
                <span className="absolute inset-x-4 bottom-0 h-0.5 origin-left scale-x-0 bg-[#00385d] transition-transform duration-200 group-hover:scale-x-100" />
              </Link>

              {/* Products Dropdown */}
              <div className="group/products relative">
                <Link
                  href="/products"
                  className="relative flex items-center gap-1.5 px-4 py-2 text-base font-medium text-black/80 transition-all duration-200 hover:text-black"
                >
                  Products

                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-4 w-4 transition-transform duration-300 group-hover/products:rotate-180"
                  >
                    <path
                      d="m5 7.5 5 5 5-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="absolute inset-x-4 bottom-0 h-0.5 origin-left scale-x-0 bg-[#00385d] transition-transform duration-200 group-hover/products:scale-x-100" />
                </Link>

                {/* Dropdown bridge */}
                <div className="absolute left-1/2 top-full hidden h-5 w-[780px] -translate-x-1/2 group-hover/products:block" />

                {/* Dropdown Box */}
                <div className="invisible absolute left-1/2 top-[calc(100%+18px)] w-[780px] -translate-x-1/2 -translate-y-2 opacity-0 transition-all duration-300 group-hover/products:visible group-hover/products:translate-y-0 group-hover/products:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-[#00385d]/10 bg-white/95 p-5 shadow-[0_24px_70px_rgba(0,56,93,0.18)] backdrop-blur-xl">
                    <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#007e44]">
                          Product categories
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                          Explore our complete cosmetic manufacturing range
                        </p>
                      </div>

                      <Link
                        href="/products"
                        className="text-sm font-semibold text-[#00385d] transition-colors hover:text-[#007e44]"
                      >
                        View all products →
                      </Link>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {categories.map((category) => (
                        <Link
                          key={category.id || category.slug}
                          href={`/products/${category.slug}`}
                          className="group/category flex items-center gap-3 rounded-xl border border-transparent px-3 py-3 transition-all duration-200 hover:border-[#00385d]/10 hover:bg-[#00385d]/5"
                        >
                          {/* <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#00385d]/5 text-sm font-semibold text-[#00385d] transition-colors group-hover/category:bg-[#00385d] group-hover/category:text-white">
                            {(category.title || category.name)?.charAt(0)}
                          </span> */}
 <span className="h-1.5 w-1.5 shrink-0 bg-[#007e44]" />

                          <span className="text-sm font-medium text-gray-700 transition-colors group-hover/category:text-[#00385d]">
                            {category.title || category.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/process"
                className="group relative px-4 py-2 text-base font-medium text-black/80 transition-all duration-200 hover:text-black"
              >
                Our Process
                <span className="absolute inset-x-4 bottom-0 h-0.5 origin-left scale-x-0 bg-[#00385d] transition-transform duration-200 group-hover:scale-x-100" />
              </Link>

              <Link
                href="/contact"
                className="group relative px-4 py-2 text-base font-medium text-black/80 transition-all duration-200 hover:text-black"
              >
                Contact
                <span className="absolute inset-x-4 bottom-0 h-0.5 origin-left scale-x-0 bg-[#00385d] transition-transform duration-200 group-hover:scale-x-100" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen((previous) => !previous)}
              className="relative inline-flex items-center justify-center rounded-lg p-2 text-black/70 transition-all duration-200 hover:bg-black/5 hover:text-black focus:outline-none"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
            >
              <div className="flex h-6 w-6 flex-col items-center justify-center gap-1.5">
                <span
                  className={`h-0.5 w-5 bg-black transition-all duration-300 ${
                    isOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />

                <span
                  className={`h-0.5 w-5 bg-black transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />

                <span
                  className={`h-0.5 w-5 bg-black transition-all duration-300 ${
                    isOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-black/5 bg-white/95 shadow-xl backdrop-blur-xl transition-all duration-500 lg:hidden ${
          isOpen
            ? "max-h-[85vh] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="max-h-[calc(100vh-90px)] space-y-2 overflow-y-auto px-4 pb-5 pt-4">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="block rounded-xl px-4 py-3 text-base font-medium text-black/80 transition-all duration-200 hover:bg-black/5"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={closeMobileMenu}
            className="block rounded-xl px-4 py-3 text-base font-medium text-black/80 transition-all duration-200 hover:bg-black/5"
          >
            About Us
          </Link>

          {/* Mobile Products Dropdown */}
          <div className="overflow-hidden rounded-xl border border-black/5">
            <div className="flex items-center">
              <Link
                href="/products"
                onClick={closeMobileMenu}
                className="flex-1 px-4 py-3 text-base font-medium text-black/80"
              >
                Products
              </Link>

              <button
                type="button"
                onClick={() =>
                  setMobileProductsOpen((previous) => !previous)
                }
                className="flex h-12 w-12 items-center justify-center text-[#00385d]"
                aria-expanded={mobileProductsOpen}
                aria-label="Toggle product categories"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className={`h-5 w-5 transition-transform duration-300 ${
                    mobileProductsOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="m5 7.5 5 5 5-5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div
              className={`overflow-hidden bg-[#00385d]/[0.03] transition-all duration-500 ${
                mobileProductsOpen
                  ? "max-h-auto border-t border-black/5 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="grid grid-cols-2 gap-1 p-3 sm:grid-cols-2">
                {categories.map((category) => (
                  <Link
                    key={category.id || category.slug}
                    href={`/products/${category.slug}`}
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-white hover:text-[#00385d]"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#007e44]" />

                    {category.title || category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.slice(2).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMobileMenu}
              className="block rounded-xl px-4 py-3 text-base font-medium text-black/80 transition-all duration-200 hover:bg-black/5"
            >
              {link.name}
            </Link>
          ))}

          <div className="mt-2 border-t border-black/5 pt-4">
            <p className="text-center text-xs text-black/40">
              PRODSOL BIOTECH © 2026
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// "use client"; // Required for useState and interactivity in Next.js App Router

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close mobile menu when window resizes to desktop
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) {
//         setIsOpen(false);
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Navigation links array (matches Cosmetify.in structure)
//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/about" },
//     { name: "Products", href: "/products" },
//     { name: "Our Process", href: "/process" },
//     { name: "Contact", href: "/contact" },
//   ];

//   return (
//     <nav
//       className={`w-full transition-all duration-300 py-2 ${
//         scrolled
//           ? "bg-white/80 backdrop-blur-md shadow-lg"
//           : "bg-white/60 backdrop-blur-sm"
//       } border-b border-black/5`}
//     >
//       <div className=" px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52">
//         <div className="flex items-center justify-between ">
//           {/* Logo Section */}
//           <div className="shrink-0">
//             <Link
//               href="/"
//               className="text-2xl text-[#00385d] lg:text-3xl font-bold tracking-tight group "
//             >
//                <Image width={'1080'} className="w-full h-[70px] lg:h-[80px]  nobject-cover" height={'80'} alt={' '} src={'/logo2.png' }/>
             
//             </Link>
//           </div>

//           {/* Desktop Menu (hidden on mobile) */}
//           <div className="hidden lg:block">
//             <div className="ml-10 flex items-center space-x-1">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   className="relative px-4 py-2 text-black/80 hover:text-black text-base font-medium transition-all duration-200 group"
//                 >
//                   {link.name}
//                   <span className="absolute inset-x-4 bottom-0 h-0.5 bg-[#00385d] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Mobile Menu Button (Hamburger) */}
//           <div className="lg:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="relative inline-flex items-center justify-center p-2 rounded-lg text-black/70 hover:text-black hover:bg-black/5 focus:outline-none transition-all duration-200 group"
//               aria-expanded={isOpen}
//             >
//               <span className="sr-only">Open main menu</span>
              
//               {/* Animated Hamburger Icon */}
//               <div className="w-6 h-6 flex flex-col items-center justify-center gap-1.5">
//                 <span
//                   className={`w-5 h-0.5 bg-black transform transition-all duration-300 ${
//                     isOpen ? "rotate-45 translate-y-2" : ""
//                   }`}
//                 />
//                 <span
//                   className={`w-5 h-0.5 bg-black transition-all duration-300 ${
//                     isOpen ? "opacity-0" : "opacity-100"
//                   }`}
//                 />
//                 <span
//                   className={`w-5 h-0.5 bg-black transform transition-all duration-300 ${
//                     isOpen ? "-rotate-45 -translate-y-2" : ""
//                   }`}
//                 />
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown (Glass morphism) */}
//       <div
//         className={`${
//           isOpen ? "max-h-128 opacity-100" : "max-h-0 opacity-0"
//         } lg:hidden overflow-hidden transition-all duration-400 ease-in-out backdrop-blur-xl bg-white/90 border-t border-black/5 shadow-xl`}
//       >
//         <div className="px-4 pt-4 pb-5 space-y-2">
//           {navLinks.map((link, index) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className="block px-4 py-3 text-black/80 hover:text-black text-base font-medium rounded-xl hover:bg-black/5 transition-all duration-200 transform hover:translate-x-1"
//               onClick={() => setIsOpen(false)}
//               style={{
//                 animation: isOpen ? `slideIn 0.3s ease-out ${index * 0.05}s both` : "none",
//               }}
//             >
//               {link.name}
//             </Link>
//           ))}
          
//           {/* Decorative element */}
//           <div className="pt-4 mt-2 border-t border-black/5">
//             <p className="text-xs text-black/40 text-center">
//               PRODSOL BIOTECH © 2026
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Add animation keyframes to your global CSS */}
//       <style jsx>{`
//         @keyframes slideIn {
//           from {
//             opacity: 0;
//             transform: translateX(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//     </nav>
//   );
// };

// export default Navbar;