import React, { useState } from 'react'
import ReactHtmlParser from 'react-html-parser'
import styled from '@emotion/styled'
import Image from 'next/image'
import { Body_P, Lead_Medium } from './styled-components/Typography'
import { Shadow } from './styled-components/Shadow'
import { Giv_800, Primary_Deep_600 } from './styled-components/Colors'
import ArrowDown from '../../public/images/arrow_down.svg'
import ArrowUp from '../../public/images/arrow_up.svg'

const Accordion = (props: { title: string; description: string }) => {
  const [isOpen, setOpen] = useState(false)

  const handleClick = () => setOpen(!isOpen)
  const { title, description } = props

  return (
    <Wrapper>
      <HeadSection onClick={handleClick}>
        <Title>{title}</Title>
        <Image src={isOpen ? ArrowDown : ArrowUp} alt='arrow down' />
      </HeadSection>
      {isOpen && <BodySection>{ReactHtmlParser(description)}</BodySection>}
    </Wrapper>
  )
}

const BodySection = styled(Body_P)`
  color: ${Giv_800};
  text-align: left;
  margin-top: 16px;

  a {
    color: #007bff !important;
    &:hover {
      text-decoration: underline !important;
    }
  }
`

const Title = styled(Lead_Medium)`
  color: ${Primary_Deep_600};
`

const HeadSection = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 16px auto;
  border-radius: 12px;
  box-shadow: ${Shadow.Neutral[500]};
  background: white;
  padding: 20px 32px 20px 20px;
`

export default Accordion
