import React, { useContext, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import { Primary_Deep_800_Trans } from '../styled-components/Colors'
import { FlexCenter } from '../styled-components/Grid'
import { Subline_Bold } from '../styled-components/Typography'
import VerificationBadge from '../badges/VerificationBadge'
import grayHeartIcon from '../../../public/images/heart_gray.svg'
import redHeartIcon from '../../../public/images/heart_red.svg'
import shareIcon from '../../../public/images/share.svg'
import { IReaction } from '../../types/types'
import { Context as UserContext } from '../../contextProviders/UserProvider'

interface IBadgeWrapper {
  width?: string
}

interface IProjectCardBadges {
  cardWidth?: string
  reactions?: IReaction[]
  verified?: boolean
  traceable?: boolean
  isHover?: boolean
}

const ProjectCardBadges = (props: IProjectCardBadges) => {
  const {
    state: { user }
  } = useContext(UserContext)

  const [heartedByUser, setHeartedByUser] = useState(false)

  const { cardWidth, reactions, verified, isHover, traceable } = props
  const likes = reactions?.length

  useEffect(() => {
    if (user?.id) {
      const isHearted = !!reactions?.some(i => Number(i.userId) === Number(user.id))
      setHeartedByUser(isHearted)
    }
  }, [user])

  return (
    <BadgeWrapper width={cardWidth}>
      <div className='d-flex'>
        {verified && <VerificationBadge verified />}
        {traceable && <VerificationBadge trace />}
      </div>
      <div className='d-flex'>
        {Number(likes) > 0 && <LikeBadge>{likes}</LikeBadge>}
        <HeartWrap active={heartedByUser} isHover={isHover}>
          <Image src={heartedByUser ? redHeartIcon : grayHeartIcon} alt='heart icon' />
          <Image src={shareIcon} alt='share icon' />
        </HeartWrap>
      </div>
    </BadgeWrapper>
  )
}

const HeartWrap = styled(FlexCenter)<{ active?: boolean; isHover?: boolean }>`
  height: ${props => (props.isHover ? '72px' : '30px')};
  width: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 56px;
  background: ${props => (props.active ? 'white' : Primary_Deep_800_Trans)};
  transition: all 0.3s ease;

  > span:nth-of-type(2) {
    display: ${props => (props.isHover ? 'unset' : 'none !important')};
  }
`

const LikeBadge = styled(Subline_Bold)`
  color: white;
  margin-right: 6px;
  margin-top: 7px;
`

const BadgeWrapper = styled.div<IBadgeWrapper>`
  width: ${props => props.width || '440px'};
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  padding: 16px;
`

export default ProjectCardBadges
