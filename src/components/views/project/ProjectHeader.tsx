import styled from "@emotion/styled";
import { H3, Body_P } from "../../styled-components/Typography";
import {IProjectBySlug} from "../../../types/types";
import {Pinky_500} from "../../styled-components/Colors";
import VerificationBadge from "../../badges/VerificationBadge";
import {isNoImg, noImgColor, noImgIcon} from "../../../lib/helpers";

const ProjectHeader = (props: IProjectBySlug) => {
  const { title, verified, image } = props.project
  const name = props.admin.name
  return(
    <Wrapper image={image}>
      <div className='d-flex'>
        {verified && <VerificationBadge verified /> }
        <VerificationBadge trace />
      </div>
      <div>
        <H3 color='white'>{title}</H3>
        <Body_P color={Pinky_500}>{name}</Body_P>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ image: string | undefined }>`
  background: ${props => isNoImg(props.image) ? noImgColor() : 'unset'};
  display: flex;
  background-repeat: ${props => isNoImg(props.image) ? 'repeat' : 'no-repeat'};
  background-size: ${props => isNoImg(props.image) ? 'unset' : 'cover'};
  flex-direction: column;
  justify-content: space-between;
  height: 360px;
  border-radius: 12px;
  padding: 27px;
  overflow: hidden;
  background-image: ${props => `url(${isNoImg(props.image) ? noImgIcon : props.image})`};
`

export default ProjectHeader
