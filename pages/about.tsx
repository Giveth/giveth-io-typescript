import React from 'react'
import AboutIndex from '../src/components/views/about/AboutIndex'
import Footer from '../src/components/Footer'
import MenuInedx from '../src/components/menu/MenuInedx'

const AboutRoute = () => {
  return (
    <>
      <MenuInedx />
      <AboutIndex />
      <Footer />
    </>
  )
}

export default AboutRoute
