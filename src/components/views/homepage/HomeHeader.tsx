import { useRouter } from 'next/router';
import styled from "@emotion/styled";
import {Mustard_500, Giv_500} from "../../styled-components/Colors";
import {H1} from "../../styled-components/Typography";
import {FlexCenter} from "../../styled-components/Grid";
import {Button} from "../../styled-components/Button";
import Routes from "../../../lib/constants/Routes";
import config from "../../../../config";

const HomeHeader = () => {
  const router = useRouter()
  return (
      <Wrapper>
        <H1 className='pt-5'>Welcome to the future of giving</H1>
        <Subtitle>Donate directly to social good projects with zero added fees.</Subtitle>
        <Button onClick={() => router.push(Routes.Projects)}>SEE PROJECTS</Button>
        <Button ghost color={Mustard_500} onClick={() => router.push(Routes.CreateProject)}>Create a Project</Button>
        <Arc />
      </Wrapper>
    )
}

const Subtitle = styled.div`
  font-size: 20px;
  line-height: 30px;
  margin: 23px 0;
  padding-bottom: 30px;
`

const Arc = styled.div`
  position: absolute;
  border-radius: 50%;
  border-width: 60px;
  border-style: solid;
  border-color: ${Mustard_500};
  top: 150px;
  left: -250px;
  width: 360px;
  height: 360px;
  z-index: -1;
`

const Wrapper = styled(FlexCenter)`
  height: 650px;
  background: ${Giv_500};
  color: white;
  flex-direction: column;
  z-index: 2;
  position: relative;
  background-image: url(${config.APP_URL + '/images/GIV.svg'});
`

export default HomeHeader
