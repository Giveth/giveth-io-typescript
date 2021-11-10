import styled from "@emotion/styled";
import Image from "next/image";
import {Primary_Deep_800_Trans} from "../styled-components/Colors";
import {FlexCenter} from "../styled-components/Grid";
import {Subline_Bold} from "../styled-components/Typography";
import VerificationBadges from "../VerificationBadges";
import grayHeartIcon from '../../../public/images/heart_gray.svg'
import redHeartIcon from '../../../public/images/heart_red.svg'

interface IBadgeWrapper {
  width?: string
}

interface IProjectCardBadges {
  cardWidth?: string
  likes?: number
  verified?: boolean
}

const ProjectCardBadges = (props: IProjectCardBadges) => {
  const { cardWidth, likes, verified } = props
  return (
    <BadgeWrapper width={cardWidth}>
      <div className='d-flex'>
        {verified && <VerificationBadges verified /> }
        {<VerificationBadges trace /> }
      </div>
      {heartBadge(true, likes)}
    </BadgeWrapper>
  )
}

const heartBadge = (active?: boolean, likes?: number) => {
  const HeartWrap = styled(FlexCenter)`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: ${() => {
    if (active) return 'white'
    else return Primary_Deep_800_Trans
  }};
  `

  const LikeBadge = styled(Subline_Bold)`
    color: white;
    margin-right: 6px;
  `

  return (
    <FlexCenter>
      {Number(likes) > 0 && <LikeBadge>{likes}</LikeBadge>}
      <HeartWrap>
        <Image src={active ? redHeartIcon : grayHeartIcon} alt='heart icon' />
      </HeartWrap>
    </FlexCenter>
  )
}

const BadgeWrapper = styled.div<IBadgeWrapper>`
  width: ${props => props.width || '440px'};
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  padding: 16px;
`

export default ProjectCardBadges
