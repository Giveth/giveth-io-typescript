import React from 'react'
import { FETCH_PROJECT_BY_SLUG } from '../../src/apollo/gql/gqlProjects'
import { addApolloState, initializeApollo } from '../../src/apollo/apolloClient'
import MenuIndex from '../../src/components/menu/MenuIndex'
import Footer from '../../src/components/Footer'
import ProjectIndex from '../../src/components/views/project/ProjectIndex'

const ProjectRoute = () => {
  return (
    <>
      <MenuIndex />
      <ProjectIndex />
      <Footer />
    </>
  )
}

export async function getServerSideProps(props: { query: { slug: string } }) {
  const { query } = props
  const slug = decodeURI(query.slug).replace(/\s/g, '')
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: FETCH_PROJECT_BY_SLUG,
    variables: { slug }
  })

  return addApolloState(apolloClient, {
    props: {}
  })
}

export default ProjectRoute
