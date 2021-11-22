import React from 'react'
import { isNoImg, noImgColor, noImgIcon } from '../../lib/helpers'
import styled from '@emotion/styled'

const ProjectCardImage = (props: { image?: string; cardRadius: string; cardWidth: string }) => {
  const { image, cardRadius, cardWidth } = props

  if (isNoImg(image)) return <NoImg style={{ borderRadius: cardRadius }} />
  return (
    <Img src={image} alt='project image' style={{ borderRadius: cardRadius, width: cardWidth }} />
  )
}

const Img = styled.img`
  height: auto;
`

const NoImg = styled.div`
  background: ${noImgColor};
  width: 100%;
  height: 100%;
  background-image: url(${noImgIcon});
`

export default React.memo(ProjectCardImage)
