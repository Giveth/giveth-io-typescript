import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import { Mustard_500, Giv_500, Giv_600 } from '../../styled-components/Colors'
import { D3, H2, H3, Lead, Lead_Large } from '../../styled-components/Typography'
import { Button } from '../../styled-components/Button'
import TwitterIcon from '../../../../public/images/twitter.svg'
import { Arc } from '../../styled-components/Arc'
import config from '../../../../config'

const HomePurpleSection = () => {
  return (
    <Wrapper>
      <ArcSmall />
      <ArcBig />
      <div className='d-none d-lg-block'>
        <ArcMustard />
        <DotMustard />
      </div>
      <GivingEffortless>
        Giving is effortless and people all around the world are rewarded for creating positive
        change.
      </GivingEffortless>
      <GivingButtons>
        <Button background={Mustard_500} color={Giv_500}>
          START GIVING
        </Button>
        <Button ghost>
          <div className='flex-center'>
            <Image src={TwitterIcon} alt='twitter icon' />
            <span className='ml-2'>Tweet this</span>
          </div>
        </Button>
      </GivingButtons>
      <GIVeconomy>
        <D3>The GIVeconomy</D3>
        <br />
        <Lead_Large>
          Our system connects the people on the ground directly to the Givers with zero added fees.
          It creates an economy of giving by rewarding donors and encouraging decentralized
          community governance.
        </Lead_Large>
        <br />
        <GIVeconomyUrl href={config.GIVeconomy_URL} target='_blank' rel='noopener noreferrer'>
          Learn more about GIVeconomy
        </GIVeconomyUrl>
      </GIVeconomy>
      <ForMakersGivers>
        <ForProjects>
          <H3>For Projects</H3>
          <Lead>
            Create a project and start raising funds in crypto within minutes. Get verified to
            reward your donors with GIVbacks.
          </Lead>
          <br />
          <Button>CREATE A PROJECT</Button>
        </ForProjects>
        <ForGivers>
          <H3>For Givers</H3>
          <Lead>
            Donate to change-makers that are working hard to make a difference. Earn GIV from
            GIVbacks when you donate to verified projects and become a stakeholder in the future of
            philanthropy.
          </Lead>
          <br />
          <Button>DONATE TO A PROJECT</Button>
        </ForGivers>
      </ForMakersGivers>
    </Wrapper>
  )
}

const ArcMustard = styled(Arc)`
  border-width: 132px;
  border-color: transparent transparent ${Mustard_500} transparent;
  top: -50px;
  right: -300px;
  width: 675px;
  height: 675px;
  transform: rotate(31deg);
`

const DotMustard = styled(Arc)`
  border-width: 71px;
  border-color: ${Mustard_500};
  top: 140px;
  right: 290px;
  width: 142px;
  height: 142px;
`

const ArcBig = styled(Arc)`
  border-width: 150px;
  border-color: ${Giv_600};
  top: -700px;
  left: -700px;
  width: 1740px;
  height: 1740px;
  opacity: 60%;
`

const ArcSmall = styled(Arc)`
  border-width: 50px;
  border-color: ${Giv_600};
  top: -200px;
  left: -550px;
  width: 700px;
  height: 700px;
`

const ForProjects = styled.div`
  min-width: 350px;
  max-width: 436px;
`

const ForGivers = styled.div`
  min-width: 350px;
  max-width: 443px;
`

const ForMakersGivers = styled.div`
  margin-top: 107px;
  margin-bottom: 162px;
  display: flex;
  flex-wrap: wrap;
  gap: 200px;
`

const GIVeconomy = styled.div`
  margin-top: 235px;
  max-width: 800px;
`

const GIVeconomyUrl = styled.a`
  color: ${Mustard_500} !important;
`

const GivingButtons = styled.div`
  display: flex;
  margin-top: 70px;
  flex-wrap: wrap;
`

const GivingEffortless = styled(H2)`
  color: ${Mustard_500};
  max-width: 654px;
`

const Wrapper = styled.div`
  background: ${Giv_500};
  padding: 90px 120px;
  color: white;
  position: relative;
  z-index: 2;
  overflow: hidden;
`

export default HomePurpleSection
