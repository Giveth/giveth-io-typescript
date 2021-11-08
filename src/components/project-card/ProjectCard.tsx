import styled from "@emotion/styled";
import Link from 'next/link'
import {P, H6, Caption} from "../styled-components/Typography";
import {BodyColor, Cyan_500, Gray_900, Mustard_500, Pinky_500, Giv_500} from "../styled-components/Colors";
import ProjectCardBadges from "./ProjectCardBadges";
import {IProject} from "../../types/types";
import {htmlToText, slugToProjectUrl} from "../../lib/helpers";
import config from "../../../config";

const noImgColors = [Cyan_500, Mustard_500, Giv_500]
const cardWidth = '440px'
const cardRadius = '12px'
const imgHeight = '200px'

interface IProjectCard {
  project: IProject
}

const randomColor = () => noImgColors[Math.floor(Math.random() * 3)]

const ProjectCard = (props: IProjectCard) => {
  const { title, description, image, verified, slug, reactions, users } = props.project

  const projectImage = () => {
    if (image && !Number(image)) return <Img src={image} alt='project image'/>
    return <NoImg />
  }

  const name = users.length > 0 && users[0].name

  return (
    <Wrapper className='shadow_1'>
      <ImagePlaceholder>
        <ProjectCardBadges cardWidth={cardWidth} likes={reactions.length} verified={verified} />
        {projectImage()}
      </ImagePlaceholder>
      <Body>
        <Link href={slugToProjectUrl(slug)} >
          <a>
            <Title>{title}</Title>
            {name && <Author>{name}</Author>}
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
  background-image: url(${config.APP_URL + "/images/GIV-icon-text.svg"});
`

const Captions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
`

const Description = styled(P)`
  height: 76px;
  overflow: hidden;
  color: ${Gray_900};
  margin-bottom: 20px;
`

const Body = styled.div`
  margin: 20px 24px;
`

const Author = styled(P)`
  color: ${Pinky_500};
  margin-bottom: 10px;
`

const Title = styled(H6)`
  color: ${BodyColor};
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
`

const Wrapper = styled.div`
  height: 430px;
  width: ${cardWidth};
  border-radius: ${cardRadius};
  background: white;
`

export default ProjectCard
