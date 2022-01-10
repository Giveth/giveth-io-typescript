import styled from '@emotion/styled'
import React from 'react'
import Image from 'next/image'
import { Pinky_500 } from '../../styled-components/Colors'
import { IProject } from '../../../types/types'
import { Button } from '../../styled-components/Button'

type SuccessFunction = (param: boolean) => void

const FiatDonation = (props: { project: IProject; setSuccessDonation: SuccessFunction }) => {
  const { setSuccessDonation } = props

  return (
    <>
      <ButtonContainer>
        <Button small background={Pinky_500} width='100%' onClick={() => setSuccessDonation(true)}>
          CONTINUE WITH TRANSAK
        </Button>
      </ButtonContainer>
      <ImageContainer>
        <Image src='/images/powered_by_transak.svg' width='165px' height='24px' />
      </ImageContainer>
    </>
  )
}

const ImageContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 23px;
`
const ButtonContainer = styled.div`
  padding: 32px 0 0 0;
`
export default FiatDonation
