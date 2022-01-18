import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import { H4, Body_P } from '../../styled-components/Typography'
import { Giv_800, Primary_Deep_800 } from '../../styled-components/Colors'
import { Shadow } from '../../styled-components/Shadow'
import { IPartner } from '../../../content/Partnerships'

export const PartnershipsCard = ({ icon, title, description, link }: IPartner) => {
  return (
    <Wrapper href={link} target='_blank' rel='noreferrer'>
      <IconContainer>
        <Image src={icon} objectFit='contain' width={100} height={100} alt={`${title} logo`} />
      </IconContainer>
      <Title>{title}</Title>
      <Caption>{description}</Caption>
    </Wrapper>
  )
}

const Title = styled(H4)`
  line-height: 35px;
`

const Caption = styled(Body_P)`
  color: ${Giv_800};
  margin-top: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const IconContainer = styled.div`
  margin-bottom: 35px;
  max-width: 255px;
  max-height: 110px;
`

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  width: 326px;
  height: 393px;
  color: ${Primary_Deep_800};
  background: white;
  border-radius: 12px;
  box-shadow: ${Shadow.Neutral[500]};
  padding: 70px 35px 40px 35px;
  cursor: pointer;
`
