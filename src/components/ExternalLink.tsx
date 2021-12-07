import React, { ReactElement } from 'react'
import { Semantic_Link_500 } from './styled-components/Colors'
import styled from '@emotion/styled'

const ExternalLink = (props: { children: ReactElement | string; href: string }) => {
  return (
    <StyledLink href={props.href} rel='noopener noreferrer' target='_blank'>
      {props.children}
    </StyledLink>
  )
}

const StyledLink = styled.a`
  color: ${Semantic_Link_500} !important;
`

export default ExternalLink
