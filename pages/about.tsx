import React from 'react'
import Head from 'next/head'
import AboutIndex from '../src/components/views/about/AboutIndex'
import Footer from '../src/components/Footer'
import MenuIndex from '../src/components/menu/MenuIndex'

const AboutRoute = () => {
  return (
    <>
      <Head>
        <title>About Us | Giveth</title>
      </Head>
      <MenuIndex />
      <AboutIndex />
      <Footer />
    </>
  )
}

export default AboutRoute
