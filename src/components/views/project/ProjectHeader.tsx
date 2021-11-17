import React from 'react'
import styled from '@emotion/styled'
import { H3, Body_P } from '../../styled-components/Typography'
import { Pinky_500 } from '../../styled-components/Colors'
import VerificationBadge from '../../badges/VerificationBadge'
import { isNoImg, noImgColor, noImgIcon } from '../../../lib/helpers'
import { IProjectBySlug } from '../../../types/types'

const ProjectHeader = (props: IProjectBySlug) => {
  const { title, verified, image } = props.project
  const name = props.admin.name
  const traceable = true

  return (
    <Wrapper image={image}>
      <BadgeSection>
        {verified && <VerificationBadge verified />}
        {traceable && <VerificationBadge trace />}
      </BadgeSection>
      <TitleSection>
        <Title>{title}</Title>
        <Body_P color={Pinky_500}>{name}</Body_P>
      </TitleSection>
    </Wrapper>
  )
}

const Title = styled(H3)`
  color: white;
  max-width: 770px;
`

const BadgeSection = styled.div`
  height: 50%;
  display: flex;
  padding: 27px;
`

const TitleSection = styled.div`
  height: 50%;
  padding: 35px 27px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  background: linear-gradient(0deg, #0a1444 4.69%, rgba(29, 30, 31, 0) 100%);
`

const Wrapper = styled.div<{ image: string | undefined }>`
  background: ${props => (isNoImg(props.image) ? noImgColor() : 'unset')};
  background-repeat: ${props => (isNoImg(props.image) ? 'repeat' : 'no-repeat')};
  background-size: ${props => (isNoImg(props.image) ? 'unset' : 'cover')};
  background-image: ${props => `url(${isNoImg(props.image) ? noImgIcon : props.image})`};
  height: 360px;
  border-radius: 12px;
  overflow: hidden;
`

export default ProjectHeader
