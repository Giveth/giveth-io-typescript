import React from 'react'
import styled from '@emotion/styled'
import TeamCard from '../../TeamCard'
import { H2, Lead_Medium } from '../../styled-components/Typography'
import { Giv_700, Giv_800 } from '../../styled-components/Colors'
import GivethTeam from '../../../content/GivethTeam.json'

const AboutTeam = () => {
  return (
    <Wrapper>
      <Title>Meet our team</Title>
      <Caption>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus urna orci vel commodo.
      </Caption>
      <TeamCards>
        {GivethTeam.map(i => (
          <TeamCard key={i.name} member={i} />
        ))}
      </TeamCards>
    </Wrapper>
  )
}

const TeamCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`

const Caption = styled(Lead_Medium)`
  color: ${Giv_800};
  margin-bottom: 76px;
`

const Title = styled(H2)`
  color: ${Giv_700};
  margin-bottom: 24px;
`

const Wrapper = styled.div`
  text-align: center;
`

export default AboutTeam
