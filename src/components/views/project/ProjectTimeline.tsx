import React from 'react'
import { IProjectUpdate } from '../../../types/types'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'
import { Body_P, H5, Lead_Large, Subline } from '../../styled-components/Typography'
import { Giv_900, Gray_400, Gray_600, Primary_Deep_600 } from '../../styled-components/Colors'

const RichTextViewer = dynamic(() => import('../../RichTextViewer'), {
  ssr: false
})

const ProjectTimeline = (props: { projectUpdate: IProjectUpdate }) => {
  const { content, createdAt, title } = props.projectUpdate
  const date = new Date(createdAt)
  const year = date.getFullYear()
  const month = date.toLocaleString('default', { month: 'short' })
  const day = date.getDate()

  return (
    <Wrapper>
      <Timeline>
        <MonthYear>{month}</MonthYear>
        <Day>{day}</Day>
        <MonthYear>{year}</MonthYear>
        <Border />
      </Timeline>
      <Content>
        <Title>{title}</Title>
        <Description>
          <RichTextViewer content={content} />
        </Description>
      </Content>
    </Wrapper>
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

const Timeline = styled.div`
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
