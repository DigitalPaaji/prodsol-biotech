import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import ServicesSection from './components/ServicesSection'
import Footer from './components/Footer'
import CertificationSection from './components/CertificationSection'
import ProductRange from './components/ProductRange'
import WhyChooseUs from './components/Why'
import PackagingInnovation from './components/Packing'

function page() {
  return (
    <div>
      <Navbar/>
      <Banner/>
<CertificationSection />

<PackagingInnovation/>
<ProductRange />
<ServicesSection />




{/* <ServicesProcess/> */}
<WhyChooseUs/>

<Footer/>
    </div>
  )
}

export default page