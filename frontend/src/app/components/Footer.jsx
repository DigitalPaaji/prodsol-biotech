'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {

const footerSections = {
  shop: {
    title: 'Quick Links',
    links: [
      { name: 'Home', href: '/' },
      { name: 'Product Categories', href: '/products' },
      { name: 'The Process', href: '/process' },
      { name: 'About Us', href: '/about' },
      { name: 'Contact Us', href: '/contact' },
    ]
  },


};


  const socialLinks = [
    { icon: FiFacebook, href: '#', label: 'Facebook' },
    { icon: FiInstagram, href: '#', label: 'Instagram' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiYoutube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className=" pt-16 pb-8 ">
      {/* Main Footer Content */}

     
      <div className="px-4 md:px-12 xl:px-24 2xl:px-52">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <div className="shrink-0">
 <Link
              href="/"
              className="text-2xl text-[#005D4F] lg:text-3xl font-bold tracking-tight group "
            >
               <Image width={'240'} className="w-fit  h-[80px]"        height={'80'} alt={' '} src={'/logo2.png' }/>
             
            </Link>
          </div>
            <p className="text-gray-800 my-6 text-md leading-relaxed">
            From Concept to Cosmetic Perfection
Your trusted partner in creating world-class cosmetics -
built on innovation, quality, and sustainability!
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-800 hover:text-[#005D4F] transition-colors duration-300">
                <FiPhone className="w-5 h-5" />
                <span>+91 94591-01919</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-800 hover:text-[#005D4F] transition-colors duration-300">
                <FiMail className="w-5 h-5" />
                <span>info@prodsolbiotech.com
</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-800 hover:text-[#005D4F] transition-colors duration-300">
                <FiMapPin className="w-5 h-5" />
                <span>
C-163, Focal Point,
Patiala, Punjab - 147001
</span>
              </div>
                            {/* <div className="flex items-center space-x-3 text-gray-800 hover:text-[#005D4F] transition-colors duration-300">
                <FiMapPin className="w-5 h-5" />
                <span>
#111, Street No. 8, Aman Vihar,
Patiala, Punjab
</span>
              </div> */}
            </div>
          </div>

{/* Footer Links */}
{Object.entries(footerSections).map(([key, section]) => (
  <div key={key} className="lg:col-span-3">
    <h3 className=" text-lg text-[#005D4F] font-semibold my-4 relative inline-block">
      {section.title}
      <span className="absolute bottom-0 left-0 w-full h-0.5  transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
    </h3>

    <ul className="space-y-3">
      {section.links.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className="text-gray-800 hover:text-[#005D4F] transition-all duration-300 hover:pl-2 group flex items-center"
          >
            <span className="w-1 h-1 bg-[#005D4F]  rounded-full opacity-0 group-hover:opacity-100 mr-2 transition-all duration-300"></span>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
))}


       <div className="lg:col-span-4">
        <div className="">
          <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4271.373247928821!2d76.42175519999999!3d30.373736199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39102708e4b05f43%3A0x5cac00a43cd7b8f5!2sProdsol%20Biotech%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1773475102579!5m2!1sen!2sin"
             width="600"
             height="450"
             allowFullScreen=""
             loading="lazy"
             className="w-full h-full object-cover"
             referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>


             
            <div className="flex space-x-4 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center hover:text-white  hover:bg-[#005D4F] transition-all duration-300 hover:scale-110 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>


        {/* Bottom Section */}
      
     
            {/* Copyright */}
            <div className="text-gray-400 text-center pt-8">
              <p>&copy; {new Date().getFullYear()} Prodsol Biotech Pvt. Ltd.. All rights reserved.</p>
            </div>
 
      </div>

    

      {/* Add CSS for golden color */}
      <style jsx global>{`
        .text-[#005D4F] {
          color: #005D4F;
        }
        .bg-[#005D4F] {
          background-color: #005D4F;
        }
        .border-[#005D4F] {
          border-color: #005D4F;
        }
      `}</style>
    </footer>
  );
};

export default Footer;