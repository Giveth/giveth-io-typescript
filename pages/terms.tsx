import React from 'react'
import Head from 'next/head'
import Footer from '../src/components/Footer'
import MenuIndex from '../src/components/menu/MenuIndex'
import TermsIndex from '../src/components/views/TermsIndex'

const TermsRoute = () => {
  return (
    <>
      <Head>
        <title>Terms of use | Giveth</title>
      </Head>
      <MenuIndex />
      <TermsIndex />
      <Footer />
    </>
  )
}

export default TermsRoute
