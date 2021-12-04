import React from 'react'
import Head from 'next/head'
import HomeIndex from '../src/components/views/homepage/HomeIndex'
import { addApolloState, initializeApollo } from '../src/apollo/apolloClient'
import { FETCH_HOME_PROJECTS } from '../src/apollo/gql/gqlProjects'
import { OPTIONS_HOME_PROJECTS } from '../src/apollo/gql/gqlOptions'
import MenuIndex from '../src/components/menu/MenuIndex'
import Footer from '../src/components/Footer'

const HomeRoute = () => {
  return (
    <>
      <Head>
        <title>Home | Giveth</title>
      </Head>
      <MenuIndex />
      <HomeIndex />
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: FETCH_HOME_PROJECTS,
    ...OPTIONS_HOME_PROJECTS
  })

  return addApolloState(apolloClient, {
    props: {}
  })
}

export default HomeRoute
