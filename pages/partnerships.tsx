import React from 'react'
import Head from 'next/head'
import Footer from '../src/components/Footer'
import MenuIndex from '../src/components/menu/MenuIndex'
import PartnershipsIndex from '../src/components/views/partnerships/PartnershipsIndex'

const PartnershipsRoute = () => {
  return (
    <>
      <Head>
        <title>Partnerships | Giveth</title>
      </Head>
      <MenuIndex />
      <PartnershipsIndex />
      <Footer />
    </>
  )
}

export default PartnershipsRoute
