import React from 'react'
import Head from 'next/head'
import { addApolloState, initializeApollo } from '../src/apollo/apolloClient'
import { FETCH_ALL_PROJECTS } from '../src/apollo/gql/gqlProjects'
import { OPTIONS_HOME_PROJECTS } from '../src/apollo/gql/gqlOptions'
import ProjectsIndex from '../src/components/views/projects/ProjectsIndex'
import MenuIndex from '../src/components/menu/MenuIndex'
import Footer from '../src/components/Footer'

const ProjectsRoute = () => {
  return (
    <>
      <Head>
        <title>Projects | Giveth</title>
      </Head>
      <MenuIndex />
      <ProjectsIndex />
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: FETCH_ALL_PROJECTS,
    ...OPTIONS_HOME_PROJECTS
  })

  return addApolloState(apolloClient, {
    props: {}
  })
}

export default ProjectsRoute
