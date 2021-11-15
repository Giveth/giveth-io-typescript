import React from 'react'
import styled from '@emotion/styled'
import { Giv_500, Giv_900, Mustard_500 } from '../../styled-components/Colors'
import { H4, Lead_Medium, H3 } from '../../styled-components/Typography'
import { FlexCenter } from '../../styled-components/Grid'

const AboutHistory = () => {
  return (
    <>
      <Upper>
        <Rect>
          <span>The Giveth</span> Decentralized Altruistic Community (DAC) is an eclectic mix of
          people from the Ethereum and nonprofit worlds.
        </Rect>
        <UpperText>
          They are dedicated to building the tools that will make it easy for anyone to build a
          global community around a cause. In fact, this core team is using the Giveth Platform to
          build a community around the Giveth idea itself! If you want to help create the solution,
          join our community.
        </UpperText>
      </Upper>
      <End>
        <Title>Some title goes here</Title>
        <Lead_Medium>
          We are Altruistic, we are entirely open-source and love to reach out proactively to
          similar initiatives, which we see as potential collaborators as opposed to competitors.
          The Giveth DAC works with volunteers, and genius developers who are working for a fraction
          of what they could be earning at for-profit Ethereum projects. To help us in building
          Giveth, please visit the contributors guide.
        </Lead_Medium>
        <SliderButtons>
          <SliderButton className='active' />
          <SliderButton />
          <SliderButton />
        </SliderButtons>
      </End>
    </>
  )
}

const SliderButton = styled.div`
  border-radius: 50%;
  width: 23px;
  height: 23px;
  cursor: pointer;
  border: 2px solid ${Giv_500};

  &.active {
    background: ${Giv_500};
  }
`

const SliderButtons = styled(FlexCenter)`
  gap: 13px;
  margin: 66px auto 0 auto;
`

const Title = styled(H3)`
  margin-bottom: 24px;
`

const End = styled.div`
  text-align: center;
  max-width: 840px;
  margin: 134px auto 0 auto;
`

const UpperText = styled(Lead_Medium)`
  color: ${Giv_900};
  max-width: 430px;
  margin-top: 115px;
`

const Rect = styled(H4)`
  padding: 48px;
  background: ${Giv_500};
  color: white;
  max-width: 580px;
  border-radius: 12px;

  span {
    color: ${Mustard_500};
  }
`

const Upper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0 50px;
`

export default AboutHistory
