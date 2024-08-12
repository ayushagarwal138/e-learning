"use client";
import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false)
  
  const setShowNavHandler =()=>setShowNav(true);
  const hideNavHandler =()=>setShowNav(false);
  return (
    <>
    <Nav openNav={setShowNavHandler}/>
    <MobileNav showNav={showNav} closeNav={hideNavHandler}/>
    </>
  )
}

export default ResponsiveNav