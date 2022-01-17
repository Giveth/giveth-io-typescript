import React from 'react'
import styled from '@emotion/styled'
import { Cyan_500, Giv_500, Giv_600 } from '../../styled-components/Colors'
import { D3, Lead_Medium } from '../../styled-components/Typography'
import { Arc } from '../../styled-components/Arc'
import questionIcon from '../../../../public/images/ask_question.svg'
import feedbackIcon from '../../../../public/images/feedback.svg'
import reportIcon from '../../../../public/images/report_issue.svg'
import featureIcon from '../../../../public/images/request_feature.svg'
import SupportCard from '../../GeneralCard'
import config from '../../../../config'

const SupportIndex = () => {
  return (
    <>
      <UpperSection>
        <ArcCyan />
        <DotCyan />
        <ArcPurple />
        <TextContainer>
          <Title>How can we help you?</Title>
          <Lead_Medium>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae purus, quis sit pretium,
            a nunc. Volutpat euismod semper porttitor eleifend.
          </Lead_Medium>
        </TextContainer>
      </UpperSection>

      <CardsSection>
        {cardsArray.map(i => (
          <SupportCard key={i.title} content={i} />
        ))}
      </CardsSection>
    </>
  )
}

const CardsSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -50px;
  flex-wrap: wrap;
  gap: 25px;
  position: relative;
  z-index: 3;
`

const cardsArray = [
  {
    icon: questionIcon,
    title: 'Ask us a Question',
    caption: 'Do you have a specific question or a general inquiry that requires a response?',
    buttonLabel: 'ask us a question',
    route: config.LINKS.ASK_QUESTION
  },
  {
    icon: reportIcon,
    title: 'Report an issue',
    caption: 'Having problems with our site? Is something not functioning as expected?',
    buttonLabel: 'Report an issue',
    route: config.LINKS.REPORT_ISSUE
  },
  {
    icon: feedbackIcon,
    title: 'Leave Feedback',
    caption: 'Let us know how your experience was! \n' + 'How can we improve?',
    buttonLabel: 'Leave Feedback',
    route: config.LINKS.FEEDBACK
  },
  {
    icon: featureIcon,
    title: 'Request a New Feature',
    caption: 'Want to see a new feature on Giveth? Are we missing a critical functionality?',
    buttonLabel: 'Request a New Feature',
    route: config.LINKS.FEATURE_REQUEST
  }
]

const ArcPurple = styled(Arc)`
  border-width: 140px;
  border-color: ${Giv_600} transparent transparent transparent;
  bottom: -585px;
  right: -750px;
  width: 1170px;
  height: 1170px;
  transform: rotate(-45deg);
  z-index: 0;
`

const ArcCyan = styled(Arc)`
  border-width: 90px;
  border-color: transparent transparent ${Cyan_500} transparent;
  bottom: -30px;
  right: -230px;
  width: 520px;
  height: 520px;
  transform: rotate(31deg);
  z-index: 1;
`

const DotCyan = styled(Arc)`
  border-width: 55px;
  border-color: ${Cyan_500};
  bottom: 235px;
  right: 210px;
  width: 100px;
  height: 100px;
  z-index: 1;
`

const TextContainer = styled.div`
  max-width: 670px;
  position: relative;
  z-index: 2;
`

const UpperSection = styled.div`
  background: ${Giv_500};
  padding: 150px 130px;
  color: white;
  overflow: hidden;
  position: relative;
`

const Title = styled(D3)`
  margin: 30px 0 24px 0;
`

export default SupportIndex
