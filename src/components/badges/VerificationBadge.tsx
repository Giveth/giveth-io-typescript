import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import { FlexCenter } from '../styled-components/Grid'
import { Primary_Deep_800_Trans } from '../styled-components/Colors'
import { Overline_Small } from '../styled-components/Typography'
import TraceIcon from '../../../public/images/trace.svg'
import VerifiedIcon from '../../../public/images/verified.svg'

const VerificationBadge = (props: { verified?: boolean; trace?: boolean }) => {
  const { verified, trace } = props
  const text = verified ? 'VERIFIED' : trace ? 'TRACE' : ''
  const icon = verified ? VerifiedIcon : trace ? TraceIcon : ''
  return (
    <Wrapper>
      <Image src={icon} alt='badge icon' />
      <Overline_Small className='pl-2'>{text}</Overline_Small>
    </Wrapper>
  )
}

const Wrapper = styled(FlexCenter)`
  height: 30px;
  background: ${Primary_Deep_800_Trans};
  border-radius: 56px;
  color: white;
  padding: 0 12px 0 10px;
  margin-right: 8px;
`

export default VerificationBadge
