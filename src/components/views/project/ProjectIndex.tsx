import React from 'react'
import dynamic from 'next/dynamic'
import styled from '@emotion/styled'
import ProjectHeader from './ProjectHeader'
import ProjectTabs from './ProjectTabs'
import ProjectDonateCard from './ProjectDonateCard'
import { IProjectBySlug } from '../../../types/types'

const RichTextViewer = dynamic(() => import('../../RichTextViewer'), {
  ssr: false
})

const ProjectIndex = (props: IProjectBySlug) => {
  const { project } = props
  const { categories, slug } = project

  return (
    <Wrapper>
      <ProjectHeader {...props} />
      <BodyWrapper>
        <div>
          <ProjectTabs />
          <RichTextViewer content={project.description} />
        </div>
        <ProjectDonateCard categories={categories} slug={slug} />
      </BodyWrapper>
    </Wrapper>
  )
}

const BodyWrapper = styled.div`
  display: flex;
`

const Wrapper = styled.div`
  margin: 150px 125px;
  position: relative;
`

export default ProjectIndex
