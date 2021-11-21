import React from 'react'
import styled from '@emotion/styled'
import { D3, Lead_Medium, H2 } from '../../styled-components/Typography'
import { Giv_500, Giv_700, Mustard_500 } from '../../styled-components/Colors'
import { Arc } from '../../styled-components/Arc'
import PartnershipsArray from '../../../lib/constants/Partnerships'
import PartnershipsCard from './PartnershipsCard'

const PartnershipsIndex = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <MustardArc />
      <MustardDot />
      <PurpleArc />
      <Wrapper>
        <Title>Partnerships</Title>
        <Caption>We have many partnerships in the Ethereum Community.</Caption>
        <PartnershipsContainer>
          <OurPartners>Our partners and friends</OurPartners>
          {PartnershipsArray.map(i => (
            <PartnershipsCard key={i.title} content={i} />
          ))}
        </PartnershipsContainer>
      </Wrapper>
    </div>
  )
}

const OurPartners = styled(H2)`
  width: 326px;
  height: 393px;
  display: flex;
  align-items: center;
  text-align: left;
  padding-right: 45px;
`

const PartnershipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 150px;
`

const MustardArc = styled(Arc)`
  border-width: 90px;
  border-color: transparent transparent ${Mustard_500} transparent;
  top: 100px;
  right: -230px;
  width: 450px;
  height: 450px;
  transform: rotate(31deg);
  z-index: 0;
`

const MustardDot = styled(Arc)`
  border-width: 50px;
  border-color: ${Mustard_500};
  top: 235px;
  right: 150px;
  width: 100px;
  height: 100px;
  z-index: 0;
`

const PurpleArc = styled(Arc)`
  border-width: 100px;
  border-color: ${Giv_500} ${Giv_500} transparent transparent;
  top: 650px;
  left: -450px;
  width: 700px;
  height: 700px;
  transform: rotate(45deg);
  z-index: 0;
  opacity: 0.2;
`

const Caption = styled(Lead_Medium)`
  max-width: 368px;
  margin: 0 auto;
`

const Title = styled(D3)`
  margin-bottom: 24px;
`

const Wrapper = styled.div`
  padding: 190px 149px;
  color: ${Giv_700};
  text-align: center;
  position: relative;
`

export default PartnershipsIndex
