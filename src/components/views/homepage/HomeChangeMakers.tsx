import styled from "@emotion/styled";
import {Giv_600} from "../../styled-components/Colors";
import {D3, Lead_Large, Lead_Medium} from "../../styled-components/Typography";
import { Button } from "../../styled-components/Button";

const HomeChangeMakers = () => {
  return(
    <Wrapper>
      <D3>Calling all Changemakers!</D3>
      <br />
      <Lead_Large>Do you have for-good project that's creating value for society, for the environment or for the world?
      </Lead_Large>
      <MiddleSection>
        <Lead_Medium>Add you project to Giveth to tap into the revolutionary funding opportunities of the Ethereum Ecosystem. Start raising funds within minutes. Creating a project is absolutely free!
        </Lead_Medium>
        <br />
        <Button>CREAT A PROJECT</Button>
      </MiddleSection>

    </Wrapper>
  )
}

const MiddleSection = styled.div`
  padding: 50px 130px;
`

const Wrapper = styled.div`
  background: ${Giv_600};
  color: white;
  padding: 130px 150px 200px 150px;
`

export default HomeChangeMakers
