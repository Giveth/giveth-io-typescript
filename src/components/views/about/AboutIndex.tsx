import React, { useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import styled from '@emotion/styled'
import config from '../../../../config'
import { Arc } from '../../styled-components/Arc'
import {
  Giv_500,
  Giv_600,
  Giv_700,
  Gray_900,
  Mustard_500,
  Primary_Deep_500
} from '../../styled-components/Colors'
import { Lead_Medium, D3, H1, Body_P } from '../../styled-components/Typography'
import { Button } from '../../styled-components/Button'
import FlowerIcon from '../../../../public/images/flower.svg'
import AboutMission from './AboutMission'

const tabTitles = ['Mission & Vision', 'History', 'Team']

const AboutHistory = dynamic(() => import('./AboutHistory'))
const AboutTeam = dynamic(() => import('./AboutTeam'))

const AboutIndex = () => {
  const [activeTab, setActiveTab] = useState(tabTitles[0])

  const changeTab = (tab: string) => setActiveTab(tab)

  return (
    <>
      <Upper>
        <ArcMustard />
        <DotMustard />
        <TeamImageWrapper>
          <img
            width='100%'
            src={config.LINKS.FRONTEND + 'images/giveth-team.jpg'}
            alt='giveth team'
          />
        </TeamImageWrapper>
        <UpperTitle>Building the Future of Giving</UpperTitle>
        <UpperCaption>
          Giveth is a community focused on Building the Future of Giving using blockchain
          technology. Our vision is to make giving effortless, to reward people all over the world
          for creating positive change.
        </UpperCaption>
        <UpperButton>SUPPORT GIVETH</UpperButton>
      </Upper>

      <Middle>
        <Flower>
          <Image src={FlowerIcon} alt='flower icon' />
        </Flower>
        <MiddleBody>
          <H1>About us</H1>
          <br />
          <Lead_Medium>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae purus, quis sit pretium,
            a nunc. Volutpat euismod semper porttitor eleifend. Elementum dui orci enim, nam diam
            mattis tempus. Et scelerisque dolor bibendum turpis enim, convallis senectus nulla
            suscipit.
          </Lead_Medium>
          <br />
          <Lead_Medium>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae purus, quis sit pretium,
            a nunc. Volutpat euismod semper porttitor eleifend. Elementum dui orci enim, nam diam
            mattis tempus. Et scelerisque dolor bibendum turpis enim, convallis senectus nulla
            suscipit.
          </Lead_Medium>
        </MiddleBody>
      </Middle>

      <End>
        <EndMustardArc />
        <EndPurpleArc />
        <Tabs>
          {tabTitles.map(i => (
            <TabItem
              onClick={() => changeTab(i)}
              className={activeTab === i ? 'active' : ''}
              key={i}
            >
              {i}
            </TabItem>
          ))}
        </Tabs>
        <TabContent>{activeTab === tabTitles[0] && <AboutMission />}</TabContent>
        <TabContent>{activeTab === tabTitles[1] && <AboutHistory />}</TabContent>
        <TabContent>{activeTab === tabTitles[2] && <AboutTeam />}</TabContent>
      </End>
    </>
  )
}

const TeamImageWrapper = styled.div`
  margin-top: 120px;
`

const TabContent = styled.div`
  margin-top: 90px;
  color: ${Giv_700};
`

const TabItem = styled(Body_P)`
  background: white;
  border-radius: 54px;
  width: 176px;
  height: 45px;
  color: ${Primary_Deep_500};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.active {
    background: ${Giv_600};
    color: white;
  }
`

const Tabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

const EndPurpleArc = styled(Arc)`
  border-width: 40px;
  border-color: ${Giv_600} ${Giv_600} transparent transparent;
  bottom: 0;
  left: -180px;
  width: 260px;
  height: 260px;
  transform: rotate(45deg);
  z-index: 0;
`

const EndMustardArc = styled(Arc)`
  border-width: 40px;
  border-color: transparent transparent ${Mustard_500} ${Mustard_500};
  top: 300px;
  right: -130px;
  width: 260px;
  height: 260px;
  transform: rotate(45deg);
  z-index: 0;
`

const End = styled.div`
  background-image: url(${config.LINKS.FRONTEND + 'images/curves_about_us.svg'});
  padding: 90px 150px;
  overflow: hidden;
  position: relative;
`

const Flower = styled.div`
  position: absolute;
  margin-top: 5px;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`

const MiddleBody = styled.div`
  max-width: 800px;
  position: relative;
`

const Middle = styled.div`
  position: relative;
  padding: 135px 0 185px 150px;
  background: ${Giv_500};
  color: white;
`

const UpperButton = styled(Button)`
  margin: 50px auto 180px auto;
`

const UpperCaption = styled(Lead_Medium)`
  color: ${Gray_900};
  text-align: center;
  max-width: 950px;
  margin: 0 auto;
`

const UpperTitle = styled(D3)`
  margin-top: 120px;
  margin-bottom: 32px;
  text-align: center;
  color: ${Giv_700};
`

const ArcMustard = styled(Arc)`
  border-width: 90px;
  border-color: transparent transparent ${Mustard_500} transparent;
  top: 130px;
  right: -230px;
  width: 500px;
  height: 500px;
  transform: rotate(31deg);
  z-index: 1;
`

const DotMustard = styled(Arc)`
  border-width: 45px;
  border-color: ${Mustard_500};
  top: 300px;
  right: 200px;
  width: 87px;
  height: 87px;
  z-index: 1;
`

const Upper = styled.div`
  background-image: url(${config.LINKS.FRONTEND + 'images/GIV_light.svg'});
  overflow: hidden;
  position: relative;
`

export default AboutIndex
