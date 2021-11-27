import React from 'react'
import dynamic from 'next/dynamic'
import styled from '@emotion/styled'
import ProjectHeader from './ProjectHeader'
import ProjectTabs from './ProjectTabs'
import ProjectDonateCard from './ProjectDonateCard'
import { IProjectBySlug } from '../../../types/types_graphql'
import { mediaQueries } from '../../../lib/helpers'

const RichTextViewer = dynamic(() => import('../../RichTextViewer'), {
  ssr: false
})

const ProjectIndex = (props: IProjectBySlug) => {
  const { project } = props
  const { description } = project

  return (
    <Wrapper>
      <ProjectHeader project={project} />
      <BodyWrapper>
        <div>
          <ProjectTabs project={project} />
          <RichTextViewer content={description} />
        </div>
        <ProjectDonateCard {...props} />
      </BodyWrapper>
    </Wrapper>
  )
}

const BodyWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;

  ${mediaQueries['xl']} {
    align-items: unset;
    flex-direction: row;
    justify-content: space-between;
  }
`

const Wrapper = styled.div`
  margin: 150px 125px;
  position: relative;
`

export default ProjectIndex
