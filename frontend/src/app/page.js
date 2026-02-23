import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import ServicesProcess from './components/Process'
import Footer from './components/Footer'
import ServicesSection from './components/ServicesSection'
function page() {
  return (
    <div>
      <Navbar/>
      <Banner/>
<About/>
<ServicesProcess/>
<ServicesSection />
<Footer/>
    </div>
  )
}

export default page