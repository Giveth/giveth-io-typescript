import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { Giv_100, Pinky_500, Primary_Deep_800 } from '../styled-components/Colors'

const MenuRoutesItem = (props: { href: string; title: string; active: boolean }) => {
  const { href, title, active } = props
  return (
    <Link href={href} passHref>
      <RoutesItem className={active ? 'active' : ''}>{title}</RoutesItem>
    </Link>
  )
}

const RoutesItem = styled.a`
  padding: 7px 15px;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
  border-radius: 72px;
  :hover {
    color: ${Pinky_500} !important;
  }
  &.active {
    background: ${Giv_100};
    :hover {
      color: ${Primary_Deep_800} !important;
    }
  }
`

export default MenuRoutesItem
