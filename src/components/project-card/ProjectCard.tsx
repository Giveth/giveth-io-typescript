import React, { useState } from 'react'
import styled from '@emotion/styled'
import Link from 'next/dist/client/link'

import { Body_P, H6, Link_Medium } from '../styled-components/Typography'
import { Gray_900, Pinky_500, Primary_Deep_500 } from '../styled-components/Colors'
import ProjectCardBadges from './ProjectCardBadges'
import { IProject } from '../../apollo/types/types'
import {
  htmlToText,
  noImgColor,
  noImgIcon,
  slugToProjectDonate,
  slugToProjectView
} from '../../lib/helpers'
import { Button } from '../styled-components/Button'
import ProjectCardImage from './ProjectCardImage'

const cardWidth = '440px'
const cardRadius = '12px'
const imgHeight = '200px'

interface IProjectCard {
  project: IProject
}

const ProjectCard = (props: IProjectCard) => {
  const {
    title,
    description,
    image,
    verified,
    slug,
    reactions,
    adminUser,
    totalDonations,
    traceCampaignId
  } = props.project

  const [isHover, setIsHover] = useState(false)

  const name = adminUser?.name

  return (
    <Wrapper
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className='shadow_1'
    >
      <Wrapper2 isHover={isHover}>
        <ImagePlaceholder>
          <ProjectCardBadges
            isHover={isHover}
            reactions={reactions}
            verified={verified}
            traceable={!!traceCampaignId}
          />
          <ProjectCardImage image={image} cardRadius={cardRadius} />
        </ImagePlaceholder>
        <CardBody>
          <Title>{title}</Title>
          <Author>{name || ' '}</Author>
          <Description>{htmlToText(description)}</Description>
          <Captions>
            <Link_Medium>Raised: ${Math.ceil(totalDonations as number)}</Link_Medium>
            <Link_Medium>Last updated: 5 days ago</Link_Medium>
          </Captions>
          <HoverButtons isHover={isHover}>
            <Link href={slugToProjectView(slug)}>
              <a>
                <Button small outline color={Pinky_500}>
                  LEARN MORE
                </Button>
              </a>
            </Link>
            <Link href={slugToProjectDonate(slug)}>
              <a>
                <Button small>DONATE</Button>
              </a>
            </Link>
          </HoverButtons>
        </CardBody>
      </Wrapper2>
    </Wrapper>
  )
}

const HoverButtons = styled.div`
  margin-top: 16px;
  gap: 16px;
  display: ${(props: { isHover: boolean }) => (props.isHover ? 'flex' : 'none')};
  animation: fadein 1s;

  > *,
  button {
    width: 100%;
  }
`
const NoImg = styled.div`
  background: ${noImgColor};
  width: 100%;
  height: 100%;
  border-radius: ${cardRadius} ${cardRadius} 0 0;
  background-image: url(${noImgIcon});
`
const Img = styled.img`
  border-radius: ${cardRadius} ${cardRadius} 0 0;
  width: ${cardWidth};
  height: auto;
`

const Captions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
`

const Description = styled(Body_P)`
  height: 76px;
  overflow: hidden;
  color: ${Gray_900};
  margin-bottom: 20px;
`

const CardBody = styled.div`
  margin: 20px 24px;
`

const Author = styled(Body_P)`
  color: ${Pinky_500};
  margin-bottom: 10px;
`

const Title = styled(H6)`
  color: ${Primary_Deep_500};
  height: 26px;
  overflow: hidden;
  margin-bottom: 4px;
`

const ImagePlaceholder = styled.div`
  height: ${imgHeight};
  width: 100%;
  position: relative;
  overflow: hidden;
`

const Wrapper2 = styled.div`
  position: ${(props: { isHover: boolean }) => (props.isHover ? 'absolute' : 'relative')};
  height: ${(props: { isHover: boolean }) => (props.isHover ? '494px' : '430px')};
  width: 100%;
  border-radius: ${cardRadius};
  background: white;
  margin-top: ${(props: { isHover: boolean }) => (props.isHover ? '-32px' : '0')};
  z-index: ${(props: { isHover: boolean }) => (props.isHover ? '3' : '0')};
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px #e5e6e9;
`

const Wrapper = styled.div`
  position: relative;
  height: 430px;
  width: 440px;
  border-radius: ${cardRadius};
  background: white;
`

export default ProjectCard
