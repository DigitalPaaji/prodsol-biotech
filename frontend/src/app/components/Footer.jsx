'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed with email:', email);
    setEmail('');
    // Add your subscription API call here
  };

const footerSections = {
  shop: {
    title: 'Shop Cards',
    links: [
      { name: 'Home', href: '/' },
      { name: 'Credit / Debit Cards', href: '/credit-debit-cards' },
      { name: 'Business Metal Cards', href: '/business-metal-cards' },
      { name: 'Tap 2 Pay Cards', href: '/tap-2-pay-cards' },
      { name: 'Card Holders', href: '/card-holders' },
    ]
  },

  support: {
    title: 'Support',
    links: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Terms & Conditions', href: '/terms-and-conditions' },
      { name: 'Refund Policy', href: '/refund-policy' },
      { name: 'About Us', href: '/about' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
    ]
  }
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

      <div className="border-t border-gray-600/40 h-1 my-12 mx-4 md:mx-12 xl:mx-24 2xl:mx-40 rounded-full"></div>
     
      <div className="px-4 md:px-12 xl:px-24 2xl:px-40">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <div className="shrink-0">
            <Link
              href="/"
              className="text-2xl lg:text-3xl font-bold tracking-tight group "
            >
                PRODSOL BIOTECH
             
            </Link>
          </div>
            <p className="text-gray-800 my-6 text-md leading-relaxed">
              Creating memorable moments through beautifully crafted greeting cards. 
              Your perfect message, delivered with elegance and style.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-800 hover:text-[#007e44] transition-colors duration-300">
                <FiPhone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-800 hover:text-[#007e44] transition-colors duration-300">
                <FiMail className="w-5 h-5" />
                <span>hello@cardcompany.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-800 hover:text-[#007e44] transition-colors duration-300">
                <FiMapPin className="w-5 h-5" />
                <span>123 Card Street, Design City</span>
              </div>
            </div>
          </div>

{/* Footer Links */}
{Object.entries(footerSections).map(([key, section]) => (
  <div key={key} className="lg:col-span-2">
    <h3 className=" text-xl font-semibold mb-6 relative inline-block">
      {section.title}
      <span className="absolute bottom-0 left-0 w-full h-0.5  transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
    </h3>

    <ul className="space-y-3">
      {section.links.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className="text-gray-800 hover:text-[#007e44] transition-all duration-300 hover:pl-2 group flex items-center"
          >
            <span className="w-1 h-1 bg-[#007e44] rounded-full opacity-0 group-hover:opacity-100 mr-2 transition-all duration-300"></span>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
))}


                 <div className="lg:col-span-3">
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.726002954475!2d76.4027356!3d30.358736000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910291ec53226d3%3A0xd81cade77ecfa8d3!2sDigital%20Paaji!5e0!3m2!1sen!2sin!4v1735063353416!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
                {/* Social Links */}
            <div className="flex space-x-4 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center   hover:bg-[#007e44] transition-all duration-300 hover:scale-110 group"
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
              <p>&copy; {new Date().getFullYear()} Card Company. All rights reserved.</p>
            </div>
 
      </div>

      {/* Golden accent line */}


      {/* Add CSS for golden color */}
      <style jsx global>{`
        .text-[#007e44] {
          color: #007e44;
        }
        .bg-[#007e44] {
          background-color: #007e44;
        }
        .border-[#007e44] {
          border-color: #007e44;
        }
      `}</style>
    </footer>
  );
};

export default Footer;