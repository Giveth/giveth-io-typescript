import styled from '@emotion/styled'
import React from 'react'
import { IProjectBySlug } from '../../../types/types'

const CryptoDonation = (props: IProjectBySlug) => {
  const { project } = props

  return (
    <>
      <TitleBox>CRYPTO WIP</TitleBox>
    </>
  )
}

const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer !important;
  margin-bottom: 26px;
`

export default CryptoDonation
