'use client';
import React, { useEffect } from 'react'
import HeroBanner from '../components/contact/Banner'
import Address from '../components/contact/Address'
function page() {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      left:0,
      behavior:"instant",
    })
  },[]);
  return (
    <div>
        <HeroBanner/>
        <Address/>
    </div>
  )
}

export default page