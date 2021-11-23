import styled from '@emotion/styled'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import ProjectCard from '../../project-card/ProjectCardAlt'
import CryptoDonation from './CryptoDonation'
import FiatDonation from './FiatDonation'
import { IProjectBySlug } from '../../../types/types'
import { H4, H6, Subline, Lead } from '../../styled-components/Typography'
import {
  Primary_Deep_900,
  Gray_600,
  Gray_700,
  Gray_200,
} from '../../styled-components/Colors'
import { BigArc } from '../../styled-components/Arc'
import ArrowLeft from '../../../../public/images/arrow_left.svg'
import RadioOnIcon from '../../../../public/images/radio_on.svg'
import RadioOffIcon from '../../../../public/images/radio_off.svg'

const CRYPTO_DONATION = 'Cryptocurrency'
const FIAT_DONATION = 'Credit Card'

const ProjectsIndex = (props: IProjectBySlug) => {
  const { project } = props
  const [donationType, setDonationType] = useState(CRYPTO_DONATION)

  const TypeSelection = () => {
    const RadioOn = () => <Image src={RadioOnIcon} alt="radio on" />
    const RadioOff = () => <Image src={RadioOffIcon} alt="radio off" />

    const RadioTitle = (props: any) => {
      const isTypeSelected = props.type === donationType
      return (
        <>
          <RadioTitleBox
            onClick={() =>
              setDonationType(
                props.type === CRYPTO_DONATION ? CRYPTO_DONATION : FIAT_DONATION
              )
            }
          >
            {props.type === donationType ? <RadioOn /> : <RadioOff />}
            <div style={{ marginLeft: '16px' }}>
              <RadioTitleText isSelected={isTypeSelected}>
                {props.type}
              </RadioTitleText>
              <RadioSubtitleText isSelected={isTypeSelected}>
                {props.type === CRYPTO_DONATION ? 'Zero Fees' : 'Bank Fees'}
              </RadioSubtitleText>
            </div>
          </RadioTitleBox>
        </>
      )
    }

    return (
      <>
        <RadioBox>
          <RadioTitle type={CRYPTO_DONATION} />
          <RadioTitle type={FIAT_DONATION} />
        </RadioBox>
        {donationType === CRYPTO_DONATION ? (
          <CryptoDonation {...props} />
        ) : (
          <FiatDonation {...props} />
        )}
      </>
    )
  }

  return (
    <>
      <BigArc />
      <Wrapper>
        <TitleBox>
          <Image src={ArrowLeft} alt="arrow left" />
          <Title>{project.title}</Title>
        </TitleBox>

        <Sections>
          <Left>
            <ProjectCard key={project.id} project={project} />
          </Left>
          <Right>
            <H4>Donate With</H4>
            <TypeSelection />
          </Right>
        </Sections>
      </Wrapper>
    </>
  )
}

const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer !important;
  margin-bottom: 26px;
  min-width: 400px;
`
const Wrapper = styled.div`
  text-align: center;
  margin: 60px 194px;
  align-items: center;
`
const Sections = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(500px, 1fr));
  grid-auto-rows: minmax(100px, auto);
`
const Left = styled.div`
  display: grid;
  justify-content: center;
  grid-auto-flow: column;
  align-content: center;
  z-index: 1;
  grid-column: 1 / 2;
  grid-row: 1;
  background: ${Gray_200};
  padding: 29px 0;
`
const Right = styled.div`
  z-index: 1;
  grid-row: 1;
  background: white;
  text-align: left;
  padding: 65px 32px 32px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
`
const Title = styled(H6)`
  margin-left: 30.67px;
  span {
    color: ${Gray_700};
  }
`
const RadioTitleText = styled(Lead)`
  color: ${(props: { isSelected: boolean }) =>
    props.isSelected ? Primary_Deep_900 : Gray_600};
`
const RadioSubtitleText = styled(Subline)`
  color: ${(props: { isSelected: boolean }) =>
    props.isSelected ? Primary_Deep_900 : Gray_600};
`
const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 29px;
  margin-bottom: 40px;
  div:first-child {
    margin-right: 32px;
  }
`
const RadioTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`

export default ProjectsIndex
