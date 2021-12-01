import React from 'react'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'

import { IProjectUpdate } from '../../../apollo/types/types'
import { Body_P, H5, Lead_Large, Subline } from '../../styled-components/Typography'
import { Button } from '../../styled-components/Button'
import {
  Giv_500,
  Giv_900,
  Gray_400,
  Gray_600,
  Primary_Deep_600
} from '../../styled-components/Colors'

const RichTextViewer = dynamic(() => import('../../RichTextViewer'), {
  ssr: false
})

const ProjectTimeline = (props: { projectUpdate?: IProjectUpdate; creationDate?: string }) => {
  const { projectUpdate, creationDate } = props

  if (creationDate) return <LaunchSection creationDate={creationDate} />
  else if (projectUpdate) return <UpdatesSection projectUpdate={projectUpdate} />
  else return null
}

const LaunchSection = (props: { creationDate: string }) => {
  return (
    <Wrapper>
      <TimelineSection date={props.creationDate} launch />
      <Content>
        <Title>Project Launched! 🎉</Title>
        {/*TODO share in twitter?*/}
        <Button small bold background={Giv_500}>
          Share this
        </Button>
      </Content>
    </Wrapper>
  )
}

const UpdatesSection = (props: { projectUpdate: IProjectUpdate }) => {
  const { content, createdAt, title } = props.projectUpdate
  return (
    <Wrapper>
      <TimelineSection date={createdAt} />
      <Content>
        <Title>{title}</Title>
        <Description>
          <RichTextViewer content={content} />
        </Description>
      </Content>
    </Wrapper>
  )
}

const TimelineSection = (props: { date: string; launch?: boolean }) => {
  const date = new Date(props.date)
  const year = date.getFullYear()
  const month = date.toLocaleString('default', { month: 'short' })
  const day = date.getDate()
  return (
    <TimelineStyled>
      <MonthYear>{month}</MonthYear>
      <Day>{day}</Day>
      <MonthYear>{year}</MonthYear>
      {!props.launch && <Border />}
    </TimelineStyled>
  )
}

const Border = styled.div`
  margin: 16px 0;
  height: 100%;
  border-right: 1px solid ${Gray_400};
`

const MonthYear = styled(Subline)`
  color: ${Gray_600};
  text-transform: uppercase;
`

const Day = styled(Lead_Large)`
  color: ${Primary_Deep_600};
`

const TimelineStyled = styled.div`
  width: 50px;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
`

const Description = styled(Body_P)`
  color: ${Giv_900};
`

const Title = styled(H5)`
  color: ${Primary_Deep_600};
  font-weight: 400;
  margin-bottom: 16px;
`

const Content = styled.div`
  margin-top: 15px;
  margin-bottom: 42px;
`

const Wrapper = styled.div`
  display: flex;
  gap: 50px;
`

export default ProjectTimeline
