import React from 'react'
import styled from '@emotion/styled'
import { H3, Body_P } from '../../styled-components/Typography'
import { Giv_500 } from '../../styled-components/Colors'
import { Button } from '../../styled-components/Button'
import { Email_Input } from '../../styled-components/Input'

const HomeGetUpdates = () => {
  return (
    <Wrapper>
      <H3 color={Giv_500}>Get the latest updates</H3>
      <Body_P>Subscribe to our newsletter and get all updates straight to your mailbox!</Body_P>
      <InputBox>
        <Email_Input placeholder='Your email address' />
        <Button small normal background={Giv_500}>
          SUBSCRIBE
        </Button>
      </InputBox>
    </Wrapper>
  )
}

const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
`

const Wrapper = styled.div`
  margin: 50px 150px;
`

export default HomeGetUpdates
