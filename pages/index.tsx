import React from 'react'
import Head from 'next/head'
import HomeIndex from '../src/components/views/homepage/HomeIndex'
import { client } from '../src/apollo/apolloClient'
import { FETCH_HOME_PROJECTS } from '../src/apollo/gql/gqlProjects'
import { gqlEnums } from '../src/apollo/types/gqlEnums'
import { IProject } from '../src/apollo/types/types'
import MenuIndex from '../src/components/menu/MenuIndex'
import Footer from '../src/components/Footer'

const projectsToFetch = 15

interface IHomeRoute {
  projects: IProject[]
  totalCount: number
}

const HomeRoute = (props: IHomeRoute) => {
  return (
    <>
      <Head>
        <title>Home | Giveth</title>
      </Head>
      <MenuIndex />
      <HomeIndex {...props} />
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: FETCH_HOME_PROJECTS,
    variables: {
      limit: projectsToFetch,
      orderBy: { field: gqlEnums.QUALITYSCORE, direction: gqlEnums.DESC }
    }
  })

  const { projects, totalCount } = data.projects

  return {
    props: {
      projects,
      totalCount
    }
  }
}

export default HomeRoute
