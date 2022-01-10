import React from 'react'
import Head from 'next/head'
import { client } from '../src/apollo/apolloClient'
import { FETCH_ALL_PROJECTS } from '../src/apollo/gql/gqlProjects'
import { gqlEnums } from '../src/apollo/types/gqlEnums'
import ProjectsIndex from '../src/components/views/projects/ProjectsIndex'
import MenuIndex from '../src/components/menu/MenuIndex'
import Footer from '../src/components/Footer'
import { IFetchAllProjects } from '../src/apollo/types/gqlTypes'

const projectsToFetch = 15

const ProjectsRoute = (props: IFetchAllProjects) => {
  return (
    <>
      <Head>
        <title>Projects | Giveth</title>
      </Head>
      <MenuIndex />
      <ProjectsIndex {...props} />
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: FETCH_ALL_PROJECTS,
    variables: {
      limit: projectsToFetch,
      orderBy: { field: gqlEnums.QUALITYSCORE, direction: gqlEnums.DESC }
    }
  })

  const { projects, totalCount, categories } = data.projects

  return {
    props: {
      projects,
      totalCount,
      categories
    }
  }
}

export default ProjectsRoute
