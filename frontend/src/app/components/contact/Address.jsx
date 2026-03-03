"use client";
import Image from "next/image";
import React, { useState } from "react";



const SuccessPopup = ({ message, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
   
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose}></div>
   
    <div className="relative bg-white  p-8 max-w-md w-full mx-auto transform transition-all animate-fadeInScale border-t-4 border-gradient-to-r from-purple-600 via-pink-600 to-orange-600">
      <div className="text-center">
        <div className="mx-auto flex items-center justify-center h-16 w-16  bg-gradient-to-r from-green-400 to-emerald-500 mb-4 shadow-lg">
          <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="px-8 py-3 bg-[#007e43] text-white font-semibold  transform hover:scale-105 transition duration-200"
        >
          Close
        </button>
      </div>
    </div>
  </div>
);




const ContactPage = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Subject: "",
    Message:""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const handelInput = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handelsubmit = async (e) => {
    e.preventDefault();
    try {
        setIsSubmitting(true)
      const response = await fetch(
        "https://sendmail.digitalpaaji.com/sendmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            formdata: formData,
            sendto: ["info@prodsolbiotech.com","support@prodsolbiotech.com"],
            subject: "Website Query",
          }),
        },
      );
 setShowSuccess(true);
    setIsSubmitting(false);
      setFormData({ Name: "",
    Email: "",
    Phone: "",
    Subject: "",
    Message:""});
    } catch (error) {
         setIsSubmitting(false);
    }
  };

  return (<>
    <div className=" px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52 py-16 lg:py-24 bg-white min-h-screen font-sans">
      {/* --- Top Section: Contact Icons --- */}
      <section className=" text-center">
        <h2 className="text-3xl md:text-4xl font-normal mb-4 tracking-wide uppercase ">
          Let&apos;s Talk With Us
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          We are here to help you with any questions regarding our biotech
          solutions. Reach out to us through any of the channels below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Office Address */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-24 bg-[#007e43cc] rounded-t-full flex items-center justify-center mb-6">
              <Image
                src="/office.png" // Update with your image path
                alt="Office"
                width={44}
                height={44}
                className=""
              />
            </div>
            <h3 className="font-medium font-serif text-md mb-2">OUR OFFICE</h3>
            <p className=" text-gray-500 leading-relaxed">
              C-163, Focal Point,
              <br />
              Patiala, Punjab – 147001
            </p>
          </div>

          {/* Registered Office */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-24 border border-gray-200 rounded-t-full flex items-center justify-center mb-6">
              <Image
                src="/ele7.png" // Update with your image path
                alt="Office"
                width={44}
                height={44}
              />
            </div>
            <h3 className="font-medium font-serif text-md mb-2">
              REGISTERED OFFICE
            </h3>
            <p className=" text-gray-500 leading-relaxed">
              #111, Street No. 8, Aman Vihar,
              <br />
              Patiala, Punjab
            </p>
          </div>

          {/* Contact Number */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-24 border border-gray-200 rounded-t-full flex items-center justify-center mb-6">
              <Image
                src="/ele8.png" // Update with your image path
                alt="Office"
                width={44}
                height={44}
              />
            </div>
            <h3 className="font-medium font-serif text-md mb-2">OUR CONTACT</h3>
            <p className=" text-gray-500 leading-relaxed">
              +91 94591-01919
              <br />
              Mon-Sat: 09AM - 06PM
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-24 border border-gray-200 rounded-t-full flex items-center justify-center mb-6">
              <Image
                src="/ele9.png" // Update with your image path
                alt="Office"
                width={44}
                height={44}
              />
            </div>
            <h3 className="font-medium font-serif text-md mb-2">OUR EMAIL</h3>
            <p className=" text-gray-500 leading-relaxed">
              info@prodsolbiotech.com
              <br />
              support@prodsolbiotech.com
            </p>
          </div>
        </div>
      </section>

      {/* --- Bottom Section: Map & Form --- */}
      <section className=" flex flex-col lg:flex-row w-full pt-16 lg:pt-24 items-center">
        {/* Map Placeholder */}
        <div className="w-full lg:w-1/2 h-112.5 bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.853384260596!2d76.4259!3d30.3421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDIwJzMxLjYiTiA3Nis0NSczMy4yIkU!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            className="w-full h-full grayscale opacity-80"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-12 lg:p-20 bg-white">
          <h2 className="text-2xl font-normal mb-10 tracking-wide uppercase">
            Leave Your Message
          </h2>
          <form
            onSubmit={handelsubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6  text-black "
          >
            <input
              type="text"
              name="Name"
              required
              value={formData.Name}
              onChange={(e) => handelInput(e)}
              placeholder="Your Name"
              className="border-b border-gray-300 py-2 focus:outline-none focus:border-[#007e43] transition-colors text-sm"
            />
            <input
              type="email"
              name="Email"
              required
              value={formData.Email}
              onChange={(e) => handelInput(e)}
              placeholder="Your Email"
              className="border-b border-gray-300 py-2 focus:outline-none focus:border-[#007e43] transition-colors text-sm"
            />
            <input
              type="text"
              name="Phone"
              required
              value={formData.Phone}
              onChange={(e) => handelInput(e)}
              placeholder="Your Phone"
              className="border-b border-gray-300 py-2 focus:outline-none focus:border-[#007e43] transition-colors text-sm"
            />
            <input
              type="text"
              name="Subject"
              required
              value={formData.Subject}
              onChange={(e) => handelInput(e)}
              placeholder="Subject"
              className="border-b border-gray-300 py-2 focus:outline-none focus:border-[#007e43] transition-colors text-sm"
            />
            <div className="md:col-span-2 mt-4">
              <textarea
                placeholder="Message"
                name="Message"
                required
                value={formData.Message}
                onChange={(e) => handelInput(e)}
                rows="4"
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#007e43] transition-colors text-sm"
              ></textarea>
            </div>
            <div className="md:col-span-2 mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#007e43] text-white px-10 py-3  rounded-sm  font-bold tracking-widest uppercase hover:bg-green-600 transition-all shadow-sm"
              >
                {isSubmitting ? "Submitting..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>

       {showSuccess && (
        <SuccessPopup
          message="We will get back to you soon."
          onClose={() => setShowSuccess(false)}
        />
      )}

      {/* tiny extra style for popup animation */}
      <style jsx>{`
        @keyframes fadeInScale {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fadeInScale {
          animation: fadeInScale 0.2s ease-out;
        }
      `}</style>
      </>
  );
};

export default ContactPage;