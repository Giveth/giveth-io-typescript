import React from 'react'
import AboutIndex from '../src/components/views/about/AboutIndex'
import Footer from '../src/components/Footer'
import Menubar from '../src/components/Menubar'

const AboutRoute = () => {
  return (
    <>
      <Menubar />
      <AboutIndex />
      <Footer />
    </>
  )
}

export default AboutRoute
