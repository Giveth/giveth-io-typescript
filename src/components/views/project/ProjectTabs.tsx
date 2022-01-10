import React, { Dispatch, SetStateAction } from 'react'
import styled from '@emotion/styled'
import { Body_P, Subline_Bold } from '../../styled-components/Typography'
import { Pinky_500, Primary_Deep_600 } from '../../styled-components/Colors'
import { Shadow } from '../../styled-components/Shadow'
import { IProject } from '../../../apollo/types/types'

interface IProjectTabs {
  project: IProject
  activeTab: number
  setActiveTab: Dispatch<SetStateAction<number>>
}

const badgeCount = (count?: number) => {
  return count || null
}

const ProjectTabs = (props: IProjectTabs) => {
  const { project, activeTab, setActiveTab } = props
  const { donations, totalProjectUpdates } = project

  const tabsArray = [
    { title: 'About' },
    { title: 'Updates', badge: totalProjectUpdates },
    { title: 'Donations', badge: donations?.length }
  ]

  return (
    <Wrapper>
      {tabsArray.map((i, index) => (
        <Tab
          onClick={() => setActiveTab(index)}
          key={i.title}
          className={activeTab === index ? 'active' : ''}
        >
          {i.title}
          {badgeCount(i.badge) && <Badge>{i.badge}</Badge>}
        </Tab>
      ))}
    </Wrapper>
  )
}

const Badge = styled(Subline_Bold)`
  background: ${Primary_Deep_600};
  color: white;
  border-radius: 40px;
  height: 22px;
  padding: 0 9px;
  display: flex;
  align-items: center;
  margin-left: 6px;
`

const Tab = styled(Body_P)`
  display: flex;
  padding: 10px 35px;
  color: ${Pinky_500};
  border-radius: 48px;
  cursor: pointer;

  &.active {
    color: ${Primary_Deep_600};
    background: white;
    box-shadow: ${Shadow.Neutral[400]};
  }
`

const Wrapper = styled.div`
  margin: 24px 0 40px 0;
  color: ${Primary_Deep_600};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

export default ProjectTabs
