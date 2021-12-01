import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import styled from '@emotion/styled'
import ProjectHeader from './ProjectHeader'
import ProjectTabs from './ProjectTabs'
import ProjectDonateCard from './ProjectDonateCard'
import { IProjectBySlug } from '../../../apollo/types/gqlTypes'
import { mediaQueries } from '../../../lib/helpers'

const ProjectUpdates = dynamic(() => import('./ProjectUpdates'))
const RichTextViewer = dynamic(() => import('../../RichTextViewer'), {
  ssr: false
})

const ProjectIndex = (props: IProjectBySlug) => {
  const { project } = props
  const { description } = project

  const [activeTab, setActiveTab] = useState(0)

  return (
    <Wrapper>
      <ProjectHeader project={project} />
      <BodyWrapper>
        <div className='w-100'>
          <ProjectTabs activeTab={activeTab} setActiveTab={setActiveTab} project={project} />
          {activeTab === 0 && <RichTextViewer content={description} />}
          {activeTab === 1 && <ProjectUpdates project={project} />}
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
