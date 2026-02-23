import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import ServicesProcess from './components/Process'
import Footer from './components/Footer'
function page() {
  return (
    <div>
      <Navbar/>
      <Banner/>
<About/>
<ServicesProcess/>
<Footer/>
    </div>
  )
}

export default page