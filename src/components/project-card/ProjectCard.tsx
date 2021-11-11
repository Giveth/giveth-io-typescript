import {useState} from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import {Body_P, H6, Caption} from "../styled-components/Typography";
import {
  Gray_900,
  Pinky_500,
  Primary_Deep_500
} from "../styled-components/Colors";
import ProjectCardBadges from "./ProjectCardBadges";
import {IProject} from "../../types/types";
import {htmlToText, isNoImg, noImgColor, noImgIcon, slugToProjectDonate, slugToProjectView} from "../../lib/helpers";
import { Button } from "../styled-components/Button";

const cardWidth = '440px'
const cardRadius = '12px'
const imgHeight = '200px'

interface IProjectCard {
  project: IProject
}

const ProjectCard = (props: IProjectCard) => {
  const { title, description, image, verified, slug, reactions, users } = props.project

  const [isHover, setIsHover] = useState(false)

  const router = useRouter()

  const projectImage = () => {
    if (isNoImg(image)) return <NoImg />
    return <Img src={image} alt='project image'/>
  }

  const name = users.length > 0 && users[0].name

  return (
    <Wrapper
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className='shadow_1'
      isHover={isHover}
    >
      <ImagePlaceholder>
        <ProjectCardBadges isHover={isHover} cardWidth={cardWidth} likes={reactions.length} verified={verified} />
        {projectImage()}
      </ImagePlaceholder>
      <CardBody>
        <Title>{title}</Title>
        {name && <Author>{name}</Author>}
        <Description>{htmlToText(description)}</Description>
        <Captions>
          <Caption>Raised: $200</Caption>
          <Caption>Last updated: 5 days ago</Caption>
        </Captions>
        {isHover && <HoverButtons>
          <Button onClick={() => router.push(slugToProjectView(slug))} small outline color={Pinky_500}>LEARN MORE</Button>
          <Button onClick={() => router.push(slugToProjectDonate(slug))} small>DONATE</Button>
        </HoverButtons>}
      </CardBody>
    </Wrapper>
  )
}

const HoverButtons = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 16px;

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
  position: relative;
  height: ${(props: { isHover: boolean }) => props.isHover ? '494px' : '430px'};
  width: ${cardWidth};
  border-radius: ${cardRadius};
  background: white;
`

export default ProjectCard
