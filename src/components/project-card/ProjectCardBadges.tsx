import styled from "@emotion/styled";
import Image from "next/image";
import {Primary_Deep_800_Trans} from "../styled-components/Colors";
import {FlexCenter} from "../styled-components/Grid";
import {Subline_Bold} from "../styled-components/Typography";
import VerificationBadge from "../badges/VerificationBadge";
import grayHeartIcon from '../../../public/images/heart_gray.svg'
import redHeartIcon from '../../../public/images/heart_red.svg'
import shareIcon from '../../../public/images/share.svg'

interface IBadgeWrapper {
  width?: string
}

interface IProjectCardBadges {
  cardWidth?: string
  likes?: number
  verified?: boolean
  isHover?: boolean
}

const ProjectCardBadges = (props: IProjectCardBadges) => {
  const { cardWidth, likes, verified, isHover } = props
  return (
    <BadgeWrapper width={cardWidth}>
      <div className='d-flex'>
        {verified && <VerificationBadge verified /> }
        {<VerificationBadge trace /> }
      </div>
      {heartBadge(true, likes, isHover)}
    </BadgeWrapper>
  )
}

const heartBadge = (active?: boolean, likes?: number, isHover?: boolean) => {
  const HeartWrap = styled(FlexCenter)`
    height: ${() => isHover ? '72px' : '30px'};
    width: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 56px;
    background: ${() => active ? 'white' : Primary_Deep_800_Trans};
  `

  const LikeBadge = styled(Subline_Bold)`
    color: white;
    margin-right: 6px;
    margin-top: 7px;
  `

  return (
    <div className='d-flex'>
      {Number(likes) > 0 && <LikeBadge>{likes}</LikeBadge>}
      <HeartWrap>
        <Image src={active ? redHeartIcon : grayHeartIcon} alt='heart icon' />
        {isHover && <Image src={shareIcon} alt='share icon'/>}
      </HeartWrap>
    </div>
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
