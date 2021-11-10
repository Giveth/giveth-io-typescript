import styled from "@emotion/styled";
import Image from "next/image";
import {Mustard_500, Giv_500, Purple2} from "../../styled-components/Colors";
import {D3, H2, H3, H4, Lead} from "../../styled-components/Typography";
import {Button} from "../../styled-components/Button";
import TwitterIcon from '../../../../public/images/twitter.svg'
import {Arc} from "../../styled-components/Arc";

const HomePurpleSection = () => {
  return(
    <Wrapper>
      <ArcSmall />
      <ArcBig />
      <div className='d-none d-lg-block'>
        <ArcMustard />
        <DotMustard />
      </div>
      <GivingEffortless>
        Giving is effortless
        and people all around the world are rewarded for creating positive change.
      </GivingEffortless>
      <GivingButtons>
        <Button background={Mustard_500} color={Giv_500}>START GIVING</Button>
        <Button ghost>
          <div className='flex-center'>
            <Image src={TwitterIcon} alt='twitter icon' />
            <span className='ml-2'>Tweet this</span>
          </div>
        </Button>
      </GivingButtons>
      <HowItWorks>
        <D3>how it works</D3>
        <br />
        <H4>Our system connects the people on the ground directly to the Givers, and provides a level of transparency and accountability no other platform can offer.
        </H4>
      </HowItWorks>
      <ForMakersGivers>
        <ForMakers>
          <H3>For Makers</H3>
          <Lead>Create a project and get donations in crypto. Create your project and start raising funds.
          </Lead>
          <br />
          <Button>CREATE A PROJECT</Button>
        </ForMakers>
        <ForMakers>
          <H3>For Givers</H3>
          <Lead>Use our platform to give donations to a cause or a project. Easily donate to the project you most care about.
          </Lead>
          <br />
          <Button>DONATE TO A PROJECT</Button>
        </ForMakers>
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
  border-color: ${Purple2};
  top: -700px;
  left: -700px;
  width: 1740px;
  height: 1740px;
  opacity: 60%;
`

const ArcSmall = styled(Arc)`
  border-width: 50px;
  border-color: ${Purple2};
  top: -200px;
  left: -550px;
  width: 700px;
  height: 700px;
`

const ForMakers = styled.div`
  width: 350px;
`

const ForMakersGivers = styled.div`
  margin-top: 107px;
  margin-bottom: 162px;
  display: flex;
  flex-wrap: wrap;
  gap: 200px;
`

const HowItWorks = styled.div`
  margin-top: 235px;
  max-width: 609px;
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
