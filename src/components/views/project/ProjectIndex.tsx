import {IProjectBySlug} from "../../../types/types";
import styled from "@emotion/styled";
import ProjectHeader from "./ProjectHeader";
import ProjectTabs from "./ProjectTabs";
import ProjectAbout from "./ProjectAbout";

const ProjectIndex = (props: IProjectBySlug) => {
  const { project } = props
  return(
    <Wrapper>
      <ProjectHeader {...props} />
      <ProjectTabs />
      <ProjectAbout description={project.description} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 150px 125px;
  position: relative;
`

export default ProjectIndex
