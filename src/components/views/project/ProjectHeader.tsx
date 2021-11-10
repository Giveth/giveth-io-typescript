import styled from "@emotion/styled";
import { H3, Body_P } from "../../styled-components/Typography";
import {IProjectBySlug} from "../../../types/types";
import {Pinky_500} from "../../styled-components/Colors";
import VerificationBadges from "../../VerificationBadges";

const ProjectHeader = (props: IProjectBySlug) => {
  const { title, verified, image } = props.project
  const name = props.admin.name
  return(
    <Wrapper image={image}>
      <div className='d-flex'>
        {verified && <VerificationBadges verified /> }
        <VerificationBadges trace />
      </div>
      <div>
        <H3 color='white'>{title}</H3>
        <Body_P color={Pinky_500}>{name}</Body_P>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ image: string | undefined }>`
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  flex-direction: column;
  justify-content: space-between;
  height: 360px;
  border-radius: 12px;
  padding: 27px;
  background-image: ${props => `url(${props.image})`};
`

export default ProjectHeader
