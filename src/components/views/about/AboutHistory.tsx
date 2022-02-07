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
          <span>Giveth</span> has been around the block since 2016 and over the years has played a
          crucial role in the development of Ethereum and it's community.
        </Rect>
        <UpperText></UpperText>
      </Upper>
      <End>
        <Title>The Enduring Pillar of #Blockchain4Good</Title>
        <Lead_Medium>
          From rescuing funds from the DAO hack to writing the Minime Contracts to building the
          first Ethereum Bridge. Giveth has been a steadfast champion of public goods and
          crypto-philanthropy. Our History is rich and expansive; from the first DApp, Giveth TRACE,
          in 2017 to the launch of Giveth.io and the GIVeconomy in 2021, Giveth is a recognized and
          respected mover in the Ethereum ecosystem.
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
