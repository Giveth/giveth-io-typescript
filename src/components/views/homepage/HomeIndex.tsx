import HomeHeader from "./HomeHeader";
import HomeExploreProjects from "./HomeExploreProjects";
import HomePurpleSection from "./HomePurpleSection";
import {IProject} from "../../../types/types";
import HomeFromBlog from "./HomeFromBlog";
import HomeGetUpdates from "./HomeGetUpdates";
import HomeChangeMakers from "./HomeChangeMakers";

interface IHomeView {
  projects: IProject[]
  totalCount: number
}

const projectsSlice = 6

const HomeIndex = (props: IHomeView) => {
  const { projects, totalCount } = props
  return (
    <>
      <HomeHeader />
      <HomeExploreProjects totalCount={totalCount} projects={projects.slice(0, projectsSlice)} />
      <HomePurpleSection />
      <HomeExploreProjects projects={projects.slice(projectsSlice)} noTitle />
      <HomeFromBlog />
      <HomeGetUpdates />
      <HomeChangeMakers />
    </>
  )
}

export default HomeIndex;
