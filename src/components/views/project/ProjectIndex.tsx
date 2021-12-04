import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { useQuery } from '@apollo/client'
import Head from 'next/head'

import ProjectHeader from './ProjectHeader'
import ProjectTabs from './ProjectTabs'
import ProjectDonateCard from './ProjectDonateCard'
import { mediaQueries } from '../../../lib/helpers'
import { FETCH_PROJECT_BY_SLUG } from '../../../apollo/gql/gqlProjects'

const ProjectDonations = dynamic(() => import('./ProjectDonations'))
const ProjectUpdates = dynamic(() => import('./ProjectUpdates'))
const RichTextViewer = dynamic(() => import('../../RichTextViewer'), {
  ssr: false
})

const ProjectIndex = () => {
  const router = useRouter()

  const { data } = useQuery(FETCH_PROJECT_BY_SLUG, {
    variables: { slug: router.query.slug }
  })
  const { projectBySlug: project } = data
  const { description, title } = project

  const [activeTab, setActiveTab] = useState(0)

  return (
    <Wrapper>
      <Head>
        <title>{title} | Giveth</title>
      </Head>
      <ProjectHeader project={project} />
      <BodyWrapper>
        <div className='w-100'>
          <ProjectTabs activeTab={activeTab} setActiveTab={setActiveTab} project={project} />
          {activeTab === 0 && <RichTextViewer content={description} />}
          {activeTab === 1 && <ProjectUpdates project={project} />}
          {activeTab === 2 && <ProjectDonations />}
        </div>
        <ProjectDonateCard project={project} />
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
