import React from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Footer from '../src/components/Footer'
import MenuIndex from '../src/components/menu/MenuIndex'
import PartnershipsIndex from '../src/components/views/partnerships/PartnershipsIndex'
import { fetchEntries } from '../src/utils/contentful'
import { sortObject } from '../src/lib/helpers'

export interface IPartnersProps {
  friendsLogos: any
  partners: any
}

const PartnershipsRoute = ({ friendsLogos, partners }: IPartnersProps) => {
  return (
    <>
      <Head>
        <title>Partnerships | Giveth</title>
      </Head>
      <MenuIndex />
      <PartnershipsIndex friendsLogos={friendsLogos} partners={partners} />
      <Footer />
    </>
  )
}

export const getServerSideProps = async () => {
  const friendsReq = await fetchEntries({ contentType: 'friendslogos' })
  const friendsData = friendsReq?.map(f => f.fields)
  const friendsLogos = friendsData?.sort((elem1, elem2) => sortObject(elem1, elem2, 'name'))

  const partnershipsReq = await fetchEntries({
    contentType: 'contentPartnerships'
  })
  const partnerships = partnershipsReq?.map(p => p.fields)

  return {
    props: {
      friendsLogos: friendsLogos || {},
      partners: partnerships || {}
    }
  }
}

export default PartnershipsRoute
