import React from 'react'
import HomeHeader from './HomeHeader'
import HomeExploreProjects from './HomeExploreProjects'
import HomePurpleSection from './HomePurpleSection'
import HomeFromBlog from './HomeFromBlog'
import HomeGetUpdates from './HomeGetUpdates'
import HomeChangeMakers from './HomeChangeMakers'
import { IProject } from '../../../types/types'
import styled from '@emotion/styled'
import { Arc } from '../../styled-components/Arc'
import { Giv_100 } from '../../styled-components/Colors'

interface IHomeView {
  projects: IProject[]
  totalCount: number
}

const projectsSlice = 6

const HomeIndex = (props: IHomeView) => {
  const { projects, totalCount } = props
  return (
    <>
      <BigArc />
      <HomeHeader />
      <HomeExploreProjects totalCount={totalCount} projects={projects.slice(0, projectsSlice)} />
      <HomePurpleSection />
      <HomeExploreProjects projects={projects.slice(projectsSlice)} noTitle />
      <HomeChangeMakers />
      <HomeFromBlog />
      <HomeGetUpdates />
    </>
  )
}

const BigArc = styled(Arc)`
  border-width: 250px;
  border-color: ${Giv_100};
  opacity: 40%;
  top: -2340px;
  right: 300px;
  width: 3600px;
  height: 3600px;
  z-index: 0;
`

export default HomeIndex
