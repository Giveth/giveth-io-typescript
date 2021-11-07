import Head from 'next/head';
import HomeView from '../src/components/views/homepage/Home';
import { client } from '../src/apollo/client'
import { FETCH_ALL_PROJECTS } from '../src/apollo/gql/gqlProjects'
import {gqlEnums} from "../src/apollo/gql/gqlEnums";
import {IProject} from "../src/types/projectType";

const projectsToFetch = 15

interface IHomeRoute {
  projects: IProject[]
  totalCount: number
}

const HomeRoute = (props: IHomeRoute) => {
  const { projects, totalCount } = props
  console.log(projects, totalCount)
  return (
      <>
        <Head>
          <title>Giveth</title>
        </Head>
        <HomeView {...props} />
      </>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: FETCH_ALL_PROJECTS,
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
