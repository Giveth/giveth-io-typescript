import {IProjects} from "../src/types/types";
import {client} from "../src/apollo/client";
import {FETCH_ALL_PROJECTS} from "../src/apollo/gql/gqlProjects";
import {gqlEnums} from "../src/apollo/gql/gqlEnums";
import Head from "next/head";
import ProjectsView from "../src/components/views/projects/Projects";

const projectsToFetch = 9

const Projects = (props: IProjects) => {
  return(
    <>
      <Head>
        <title>Projects | Giveth</title>
      </Head>
      <ProjectsView {...props} />
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

export default Projects
