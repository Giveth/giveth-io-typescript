import React from 'react'
import Head from 'next/head'
import Footer from '../src/components/Footer'
import MenuIndex from '../src/components/menu/MenuIndex'
import SupportIndex from '../src/components/views/support/SupportIndex'

const SupportRoute = () => {
  return (
    <>
      <Head>
        <title>Support | Giveth</title>
      </Head>
      <MenuIndex />
      <SupportIndex />
      <Footer />
    </>
  )
}

export default SupportRoute
