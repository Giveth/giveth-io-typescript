import React from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { Cyan_500, Giv_500, Giv_600, Mustard_500 } from '../../styled-components/Colors'
import { D3, Lead_Large, Lead_Medium, H3 } from '../../styled-components/Typography'
import { Button } from '../../styled-components/Button'
import Routes from '../../../lib/constants/Routes'
import { Arc } from '../../styled-components/Arc'

const content = [
  {
    title: 'Easy Onboarding',
    description:
      'New to crypto? No Problem. Create a Torus wallet and connect to the DApp by logging in via your favourite web2 platform.'
  },
  {
    title: 'Zero-Added Fees',
    description:
      'Create a Project or donate directly to for-good projects with zero fees added by Giveth.'
  },
  {
    title: 'Project Verification',
    description:
      'Encourage project accountability by donating to trusted projects. Apply for verification to reward your donors with GIVbacks.'
  },
  {
    title: 'The Giving Economy',
    description:
      'Give, Earn and Govern using GIV and the GIVeconomy. Become a stakeholder in the future of philanthropy.'
  }
]

const HomeChangeMakers = () => {
  const router = useRouter()
  return (
    <Wrapper>
      <PurpleArc />
      <CyanArc />
      <MustardArc />
      <D3>Calling all Changemakers!</D3>
      <br />
      <Lead_Large>
        Do you have for-good project that&apos;s creating value for society, for the environment or
        for the world?
      </Lead_Large>
      <MiddleSection>
        <Lead_Medium>
          Add you project to Giveth to tap into the revolutionary funding opportunities of the
          Ethereum Ecosystem. Start raising funds within minutes. Creating a project is absolutely
          free!
        </Lead_Medium>
        <Button onClick={() => router.push(Routes.CreateProject)} className='mt-5'>
          CREAT A PROJECT
        </Button>
      </MiddleSection>
      <EndSection>
        {content.map(i => (
          <EndItem key={i.title}>
            <H3>{i.title}</H3>
            <Lead_Medium className='mt-3'>{i.description}</Lead_Medium>
          </EndItem>
        ))}
      </EndSection>
    </Wrapper>
  )
}

const PurpleArc = styled(Arc)`
  border-color: transparent ${Giv_500} ${Giv_500} ${Giv_500};
  width: 2000px;
  height: 2000px;
  border-width: 150px;
  top: -1000px;
  right: 180px;
`

const MustardArc = styled(Arc)`
  border-color: ${Mustard_500} transparent transparent transparent;
  width: 400px;
  height: 400px;
  border-width: 50px;
  top: 20px;
  right: -200px;
  transform: rotate(-45deg);
`

const CyanArc = styled(Arc)`
  border-width: 50px;
  border-color: transparent ${Cyan_500} ${Cyan_500} transparent;
  transform: rotate(45deg);
  top: 300px;
  left: -150px;
  width: 380px;
  height: 380px;
`

const EndItem = styled.div`
  max-width: 440px;
`

const EndSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 70px 145px;
  margin-top: 190px;
`

const MiddleSection = styled.div`
  padding: 50px 130px;
`

const Wrapper = styled.div`
  background: ${Giv_600};
  color: white;
  padding: 130px 150px 200px 150px;
  position: relative;
  z-index: 2;
  overflow: hidden;
`

export default HomeChangeMakers
