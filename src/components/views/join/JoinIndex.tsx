import React from 'react'
import styled from '@emotion/styled'
import { Cyan_500, Giv_500, Primary_Deep_200, Mustard_500 } from '../../styled-components/Colors'
import { D3, H4 } from '../../styled-components/Typography'
import { Arc } from '../../styled-components/Arc'
import config from '../../../../config'

const JoinIndex = () => {
  return (
    <>
      <UpperSection>
        <ArcBig />
        <ArcCyan />
        <ArcMustard />
        <TextContainer>
          <D3>Join our Community</D3>
          <H4>Building the Future of Giving.</H4>
        </TextContainer>
      </UpperSection>
    </>
  )
}

const ArcBig = styled(Arc)`
  border-width: 150px;
  border-color: ${Primary_Deep_200};
  top: -1000px;
  right: -900px;
  width: 1740px;
  height: 1740px;
  opacity: 20%;
  z-index: 1;
`

const ArcCyan = styled(Arc)`
  border-width: 50px;
  border-color: transparent ${Cyan_500} ${Cyan_500} transparent;
  transform: rotate(45deg);
  top: 300px;
  left: -80px;
  width: 420px;
  height: 420px;
  z-index: 0;
`

const ArcMustard = styled(Arc)`
  border-width: 50px;
  border-color: transparent ${Mustard_500} ${Mustard_500} transparent;
  transform: rotate(225deg);
  top: 120px;
  right: -100px;
  width: 420px;
  height: 420px;
  z-index: 0;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  * {
    z-index: 2;
  }
`

const UpperSection = styled.div`
  background: ${Giv_500};
  background-image: url(${config.APP_URL + '/images/GIV_homepage.svg'});
  height: 794px;
  padding: 150px 130px;
  color: white;
  overflow: hidden;
  position: relative;
`

export default JoinIndex
