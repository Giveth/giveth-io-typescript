import React from 'react'
import Head from 'next/head'
import Footer from '../src/components/Footer'
import MenuIndex from '../src/components/menu/MenuIndex'
import FAQIndex from '../src/components/views/FAQIndex'

const FAQRoute = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Head>
        <title>FAQ | Giveth</title>
      </Head>
      <MenuIndex />
      <FAQIndex />
      <Footer />
    </div>
  )
}

export default FAQRoute
