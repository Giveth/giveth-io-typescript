import React from 'react'
import AboutIndex from '../src/components/views/about/AboutIndex'
import Footer from '../src/components/Footer'
import MenuIndex from '../src/components/menu/MenuIndex'

const AboutRoute = () => {
  return (
    <>
      <MenuIndex />
      <AboutIndex />
      <Footer />
    </>
  )
}

export default AboutRoute
