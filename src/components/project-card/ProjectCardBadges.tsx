import styled from "@emotion/styled";
import Image from "next/image";
import VerifiedIcon from "../../../public/images/verified.svg";
import TraceIcon from "../../../public/images/trace.svg";
import {Primary_Deep_800_Trans} from "../styled-components/Colors";
import {FlexCenter} from "../styled-components/Grid";
import {Overline_Small, Subline_Bold} from "../styled-components/Typography";
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
        {verified && verificationBadges('VERIFIED', VerifiedIcon)}
        {verificationBadges('TRACE', TraceIcon)}
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

const verificationBadges = (text: string, icon: string) => {
  const Wrap = styled(FlexCenter)`
    height: 30px;
    background: ${Primary_Deep_800_Trans};
    border-radius: 56px;
    color: white;
    display: flex;
    padding: 0 12px 0 10px;
    margin-right: 8px;
  `

  return (
    <Wrap>
      <Image src={icon} alt='badge icon' />
      <Overline_Small className='pl-2'>{text}</Overline_Small>
    </Wrap>
  )
}


export default ProjectCardBadges
