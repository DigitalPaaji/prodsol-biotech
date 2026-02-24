import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
// import About from './components/About'
import ServicesSection from './components/ServicesSection'
import Footer from './components/Footer'


import CertificationSection from './components/CertificationSection'
import ProductRange from './components/ProductRange'
import WhyChooseUs from './components/Why'

function page() {
  return (
    <div>
      <Navbar/>
      <Banner/>
{/* <About/> */}
<WhyChooseUs/>
{/* <ServicesProcess/> */}

<ProductRange />
{/* <ServicesProcess/> */}
<ServicesSection />
<CertificationSection />

<Footer/>
    </div>
  )
}

export default page