import React from 'react'
import Banner from './components/Banner'
import ServicesSection from './components/ServicesSection'
import CertificationSection from './components/CertificationSection'
import ProductRange from './components/ProductRange'
import WhyChooseUs from './components/Why'
import PackagingInnovation from './components/Packing'
import ClienteleSection from './components/about/ClienteleSection'

function page() {
  return (
    <div>
      <Banner/>
<CertificationSection />

<PackagingInnovation/>
<ProductRange />
<ServicesSection />


      <ClienteleSection />


{/* <ServicesProcess/> */}
<WhyChooseUs/>

    </div>
  )
}

export default page