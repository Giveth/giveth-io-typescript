import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { Body_P, H6, Caption } from '../styled-components/Typography'
import {
  Gray_900,
  Pinky_500,
  Primary_Deep_500,
} from '../styled-components/Colors'
import ProjectCardBadges from './ProjectCardBadges'
import { IProject } from '../../types/types'
import {
  htmlToText,
  isNoImg,
  noImgColor,
  noImgIcon,
  slugToProjectDonate,
  slugToProjectView,
} from '../../lib/helpers'
import { Button } from '../styled-components/Button'

const cardWidth = '440px'
const cardRadius = '12px'
const imgHeight = '200px'

interface IProjectCard {
  project: IProject
}

const ProjectCard = (props: IProjectCard) => {
  const [rndColor, setRndColor] = useState(noImgColor)
  const { title, description, image, verified, slug, reactions, users } =
    props.project

  const router = useRouter()

  const projectImage = () => {
    if (isNoImg(image)) return <NoImg rndColor={rndColor} />
    return <Img src={image} alt="project image" />
  }

  const name = users?.length > 0 && users[0].name

  return (
    <Wrapper>
      <Wrapper2>
        <ImagePlaceholder>{projectImage()}</ImagePlaceholder>
        <ProjectCardBadges
          cardWidth={cardWidth}
          likes={reactions.length}
          verified={verified}
        />
        <CardBody>
          <Title>{title}</Title>
          {name && <Author>{name}</Author>}
          <Description>{htmlToText(description)}</Description>
          <Captions>
            <Caption>Raised: $200</Caption>
            <Caption>Last updated: 5 days ago</Caption>
          </Captions>
        </CardBody>
      </Wrapper2>
    </Wrapper>
  )
}

const NoImg = styled.div`
  background: ${(props: { rndColor: string }) => props.rndColor};
  width: 100%;
  height: 100%;
  background-image: url(${noImgIcon});
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
  margin: 70px 24px 0 24px;
  text-align: left;
`

const Author = styled(Body_P)`
  color: ${Pinky_500};
  margin-bottom: 10px;
`

const Title = styled(H6)`
  color: ${Primary_Deep_500};
  height: 26px;
  overflow: hidden;
`

const Img = styled.img`
  border-radius: ${cardRadius} ${cardRadius} 0 0;
  width: ${cardWidth};
  height: auto;
`

const ImagePlaceholder = styled.div`
  height: ${imgHeight};
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
`

const Wrapper2 = styled.div`
  position: relative;
  height: 430px;
  width: ${cardWidth};
  border-radius: ${cardRadius};
  margin-top: 0;
  z-index: 0;
  transition: all 0.3s ease;
`

const Wrapper = styled.div`
  position: relative;
  height: 430px;
  width: ${cardWidth};
  border-radius: ${cardRadius};
`

export default ProjectCard
