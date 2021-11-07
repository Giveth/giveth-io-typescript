import Menubar from '../../Menubar'
import HomeHeader from "./HomeHeader";
import HomeExploreProjects from "./HomeExploreProjects";
import HomePurpleSection from "./HomePurpleSection";
import {IProject} from "../../../types/projectType";
import HomeFromBlog from "./HomeFromBlog";

interface IHomeView {
  projects: IProject[]
  totalCount: number
}

const projectsSlice = 6

const HomeView = (props: IHomeView) => {
  const { projects, totalCount } = props
  return (
    <>
      <Menubar />
      <HomeHeader />
      <HomeExploreProjects totalCount={totalCount} projects={projects.slice(0, projectsSlice)} />
      <HomePurpleSection />
      <HomeExploreProjects projects={projects.slice(projectsSlice)} noTitle />
      <HomeFromBlog />
    </>
  )
}

export default HomeView;
