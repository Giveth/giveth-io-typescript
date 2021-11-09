import Head from 'next/head';
import HomeView from '../src/components/views/homepage/Home';
import { client } from '../src/apollo/client'
import { FETCH_HOME_PROJECTS } from '../src/apollo/gql/gqlProjects'
import {gqlEnums} from "../src/apollo/gql/gqlEnums";
import {IProject} from "../src/types/types";
import Menubar from "../src/components/Menubar";
import Footer from "../src/components/Footer";

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
        <Menubar />
        <HomeView {...props} />
        <Footer />
      </>
  );
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
