import styled from "@emotion/styled";
import Link from 'next/link'
import {P, H6, Link_Big, Caption} from "../styled-components/Typography";
import {BodyColor, Cyan, Dark_Gray, Mustard, Pink, Purple} from "../styled-components/Colors";
import ProjectCardBadges from "./ProjectCardBadges";
import {IProject} from "../../types/projectType";
import {htmlToText, slugToProjectUrl} from "../../lib/helpers";

const noImgColors = [Cyan, Mustard, Purple]
const cardWidth = '440px'
const cardRadius = '12px'
const imgHeight = '200px'

interface IProjectCard {
  project: IProject
}

const randomColor = () => noImgColors[Math.floor(Math.random() * 3)]

const ProjectCard = (props: IProjectCard) => {
  const { title, description, image, verified, slug, reactions } = props.project

  const projectImage = () => {
    if (image && !Number(image)) return <Img src={image} alt='project image'/>
    return <NoImg />
  }

  return (
    <Wrapper>
      <ImagePlaceholder>
        <ProjectCardBadges cardWidth={cardWidth} likes={reactions.length} verified={verified} />
        {projectImage()}
      </ImagePlaceholder>
      <Body>
        <Link href={slugToProjectUrl(slug)} >
          <a>
            <Title>{title}</Title>
            <Author>Lauren Luz</Author>
            <Description>{htmlToText(description)}</Description>
            <Captions>
              <Caption>Raised: $200</Caption>
              <Caption>Last updated: 5 days ago</Caption>
            </Captions>
          </a>
        </Link>
      </Body>
    </Wrapper>
  )
}

const NoImg = styled.div`
  background: ${randomColor};
  width: 100%;
  height: 100%;
  border-radius: ${cardRadius} ${cardRadius} 0 0;
  background-image: url("/images/GIV-icon-text.svg");
`

const Captions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
`

const Description = styled(P)`
  max-height: 76px;
  overflow: hidden;
  color: ${Dark_Gray};
`

const Body = styled.div`
  margin: 32px 24px;
`

const Author = styled(Link_Big)`
  color: ${Pink};
  margin-bottom: 10px;
  margin-top: -5px;
`

const Title = styled(H6)`
  color: ${BodyColor};
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
`

const Wrapper = styled.div`
  height: 430px;
  width: ${cardWidth};
  border-radius: ${cardRadius};
  background: white;
  box-shadow: 0 4px 20px #E5E6E9;
`

export default ProjectCard
