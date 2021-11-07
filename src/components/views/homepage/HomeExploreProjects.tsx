import styled from "@emotion/styled";
import {H5} from "../../styled-components/Typography";
import {Dark_Gray, Gray, Neutral_Gray, Pink} from "../../styled-components/Colors";
import ProjectCard from "../../project-card/ProjectCard";
import {IProject} from "../../../types/projectType";
import {Button} from "../../styled-components/Button";
import Routes from "../../../lib/constants/Routes";
import {useRouter} from "next/router";
import {FlexCenter} from "../../styled-components/Grid";

interface IHomeExploreProjects {
  projects: IProject[]
  totalCount?: number
  noTitle?: boolean
}

const cardsMargin = '10px'

const HomeExploreProjects = (props: IHomeExploreProjects) => {
  const { projects, totalCount, noTitle } = props
  const router = useRouter()
  return (
    <Wrapper>
      {!noTitle && <><Arc/><Title>Explore <span>{totalCount} Projects</span></Title></>}
      <CardsContainer>
        {projects.map(project => {
        return(
          <div key={project.id} style={{ margin: cardsMargin }}>
            <ProjectCard project={project} />
          </div>
        )
      })}
      </CardsContainer>
      <ButtonsWrapper>
        <Button onClick={() => router.push(Routes.Projects)}>SEE ALL PROJECTS</Button>
        <Button ghost color={Pink} onClick={() => router.push(Routes.CreateProject)}>Create a Project</Button>
      </ButtonsWrapper>
    </Wrapper>
  )
}

const ButtonsWrapper = styled(FlexCenter)`
  flex-direction: column;
  margin: 64px auto;
`

const Arc = styled.div`
  position: fixed;
  border-radius: 50%;
  border-width: 250px;
  border-style: solid;
  border-color: transparent ${Gray} ${Gray} transparent;
  opacity: 40%;
  top: -2590px;
  left: -2500px;
  width: 3600px;
  height: 3600px;
  z-index: -2;
`

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -${cardsMargin};
`

const Title = styled(H5)`
  margin-bottom: 25px;
  span {
    color: ${Neutral_Gray};
  }
`

const Wrapper = styled.div`
  margin: 60px 33px;
  color: ${Dark_Gray};
`

export default HomeExploreProjects
