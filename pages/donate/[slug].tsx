import React from 'react'
import { FETCH_PROJECT_BY_SLUG } from '../../src/apollo/gql/gqlProjects'
import { client } from '../../src/apollo/apolloClient'
import { IProjectBySlug } from '../../src/types/types_graphql'
import Head from 'next/head'
import DonateIndex from '../../src/components/views/donate/DonateIndex'

const DonateRoute = (props: IProjectBySlug) => {
  return (
    <>
      <Head>
        <title>{props.project.title} | Giveth</title>
      </Head>
      <DonateIndex {...props} />
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

export default DonateRoute
