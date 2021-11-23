import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import HeartGrayIcon from '../../../public/images/heart_gray.svg'
import HeartRedIcon from '../../../public/images/heart_red.svg'
import ShareIcon from '../../../public/images/share.svg'
import { Caption } from '../styled-components/Typography'
import { Shadow } from '../styled-components/Shadow'

const ShareLikeBadge = (props: { type: 'share' | 'like'; active?: boolean }) => {
  const { type, active } = props
  const isShare = type === 'share'
  const text = isShare ? 'Share' : 'Like'
  const icon = isShare ? ShareIcon : active ? HeartRedIcon : HeartGrayIcon
  return (
    <Wrapper>
      <Image src={icon} alt='badge icon' />
      <Caption bold className='mx-auto'>
        {text}
      </Caption>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 40px;
  width: 125px;
  display: flex;
  align-items: center;
  padding: 0 18px;
  background: white;
  border-radius: 48px;
  box-shadow: ${Shadow.Neutral['400']};
  cursor: pointer;
`

export default ShareLikeBadge
