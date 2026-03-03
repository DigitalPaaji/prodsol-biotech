import React from 'react'
import HeroBanner from '../components/products/Banner'
import Categories from '../components/products/Categories'
import ProductRange from '../components/ProductRange'
import ClienteleSection from '../components/about/ClienteleSection'
import CertificationSection from '../components/CertificationSection'

function page() {
  return (
    <div>
        <HeroBanner/>
        <Categories/>
 <ClienteleSection/>

    </div>
  )
}

export default page