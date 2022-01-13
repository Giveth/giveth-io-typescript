import React from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

import { H5 } from '../../styled-components/Typography'
import { Gray_900, Gray_700, Pinky_500 } from '../../styled-components/Colors'
import ProjectCard from '../../project-card/ProjectCard'
import { IProject } from '../../../apollo/types/types'
import { Button } from '../../styled-components/Button'
import Routes from '../../../lib/constants/Routes'
import { FlexCenter } from '../../styled-components/Grid'

interface IHomeExploreProjects {
  projects: IProject[]
  totalCount?: number
  noTitle?: boolean
}

const HomeExploreProjects = (props: IHomeExploreProjects) => {
  const { projects, totalCount, noTitle } = props
  const router = useRouter()

  return (
    <Wrapper>
      {!noTitle && (
        <Title>
          Explore <span>{totalCount} Projects</span>
        </Title>
      )}
      <ProjectsContainer>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsContainer>
      <ButtonsWrapper>
        <Button onClick={() => router.push(Routes.Projects)}>SEE ALL PROJECTS</Button>
        <Button ghost color={Pinky_500} onClick={() => router.push(Routes.CreateProject)}>
          Create a Project
        </Button>
      </ButtonsWrapper>
    </Wrapper>
  )
}

const ButtonsWrapper = styled(FlexCenter)`
  flex-direction: column;
  margin: 64px auto;
`

const ProjectsContainer = styled.div`
  display: flex;
  gap: 23px 26px;
  flex-wrap: wrap;
`

const Title = styled(H5)`
  margin-bottom: 25px;
  span {
    color: ${Gray_700};
  }
`

const Wrapper = styled.div`
  margin: 60px 33px;
  color: ${Gray_900};
  position: relative;
`

export default HomeExploreProjects
