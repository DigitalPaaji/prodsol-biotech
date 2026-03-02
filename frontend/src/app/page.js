import React from 'react'
import Banner from './components/Banner'
import ServicesSection from './components/ServicesSection'
import CertificationSection from './components/CertificationSection'
import ProductRange from './components/ProductRange'
import WhyChooseUs from './components/Why'
import PackagingInnovation from './components/Packing'

function page() {
  return (
    <div>
      <Banner/>
<CertificationSection />

<PackagingInnovation/>
<ProductRange />
<ServicesSection />




{/* <ServicesProcess/> */}
<WhyChooseUs/>

    </div>
  )
}

export default page