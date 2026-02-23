'use client';
import Image from 'next/image'

const About = () => {
  const features = [
    {
      icon: "/ele1.png",
      title: "Research & Development",
      description: "Innovative formulations combining natural ingredients with advanced scientific technology."
    },
    {
      icon: "/ele2.png",
      title: "Private & White Label Manufacturing",
      description: "Custom product development along with ready-to-market cosmetic solutions."
    },
    {
      icon: "/ele1.png",
      title: "Packaging & Design Support",
      description: "Modern, conventional, and eco-friendly packaging solutions with design assistance."
    },
    {
      icon: "/ele1.png",
      title: "Quality Assurance",
      description: "Strict quality control, rigorous testing, and compliance with industry standards."
    },
    {
      icon: "/ele1.png",
      title: "End-to-End Contract Manufacturing",
      description: "Complete support from product concept and formulation to final cosmetic production."
    },
    {
      icon: "/ele1.png",
      title: "Certified & Sustainable Manufacturing",
      description: "GMP, ISO, and FDA-approved processes with cruelty-free, vegan, and eco-friendly practices."
    }
  ];

  return (
    <div className="w-full overflow-hidden px-4 sm:px-6 lg:px-16 xl:px-40 2xl:px-72 py-16 md:py-24">
      {/* Features Grid - 2 columns on xl, 1 column on smaller screens */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-16 gap-y-12 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-6 items-start">
            <div className="shrink-0">
              <Image 
                src={feature.icon} 
                alt="" 
                width={72} 
                height={72} 
                className="w-16 h-16 object-contain"
              />
            </div>
            <div>
              <h3 className="font-medium text-2xl text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About

