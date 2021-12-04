import React from 'react'
import { useQuery } from '@apollo/client'

import HomeHeader from './HomeHeader'
import HomeExploreProjects from './HomeExploreProjects'
import HomePurpleSection from './HomePurpleSection'
import HomeFromBlog from './HomeFromBlog'
import HomeGetUpdates from './HomeGetUpdates'
import HomeChangeMakers from './HomeChangeMakers'
import { BigArc } from '../../styled-components/Arc'
import { FETCH_HOME_PROJECTS } from '../../../apollo/gql/gqlProjects'
import { OPTIONS_HOME_PROJECTS } from '../../../apollo/gql/gqlOptions'

const projectsSlice = 6

const HomeIndex = () => {
  const { data } = useQuery(FETCH_HOME_PROJECTS, OPTIONS_HOME_PROJECTS)
  const { projects, totalCount } = data.projects

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

export default HomeIndex
