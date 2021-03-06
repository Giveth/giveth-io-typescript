import React from 'react'
import { FETCH_PROJECT_BY_SLUG } from '../../src/apollo/gql/gqlProjects'
import { client } from '../../src/apollo/apolloClient'
import { IProjectBySlug } from '../../src/apollo/types/gqlTypes'
import Head from 'next/head'
import MenuIndex from '../../src/components/menu/MenuIndex'
import Footer from '../../src/components/Footer'
import ProjectIndex from '../../src/components/views/project/ProjectIndex'

const ProjectRoute = (props: IProjectBySlug) => {
  return (
    <>
      <Head>
        <title>{props.project.title} | Giveth</title>
      </Head>
      <MenuIndex />
      <ProjectIndex {...props} />
      <Footer />
    </>
  )
}

export async function getServerSideProps(props: { query: { slug: string } }) {
  const { query } = props
  const slug = decodeURI(query.slug).replace(/\s/g, '')

  const { data } = await client.query({
    query: FETCH_PROJECT_BY_SLUG,
    variables: { slug },
    fetchPolicy: 'no-cache'
  })
  const project = data.projectBySlug

  return {
    props: {
      project
    }
  }
}

export default ProjectRoute
