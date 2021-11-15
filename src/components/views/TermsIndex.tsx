import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import { D3, Lead_Medium } from '../styled-components/Typography'
import { Giv_700 } from '../styled-components/Colors'
import TermsArray from '../../lib/constants/Terms.json'
import Accordion from '../Accordion'
import FlowerIcon from '../../../public/images/flower_terms.svg'

const TermsIndex = () => {
  return (
    <>
      <FlowerContainer>
        <Image src={FlowerIcon} alt='flower' />
      </FlowerContainer>
      <Wrapper>
        <Title>Terms of use</Title>
        <Lead_Medium>Last updated December 23, 2020</Lead_Medium>
        <TermsContainer>
          {TermsArray.map(i => (
            <Accordion key={i.title} title={i.title} description={i.description} />
          ))}
        </TermsContainer>
      </Wrapper>
    </>
  )
}

const FlowerContainer = styled.div`
  position: absolute;
  right: 0;
`

const TermsContainer = styled.div`
  margin-top: 100px;
`

const Title = styled(D3)`
  color: ${Giv_700};
  margin-bottom: 10px;
`

const Wrapper = styled.div`
  margin: 150px 270px;
  position: relative;
`

export default TermsIndex
