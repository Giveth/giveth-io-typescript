import styled from "@emotion/styled";
import {Body_P, Subline_Bold} from "../../styled-components/Typography";
import {Gray_300, Gray_400, Pinky_500, Primary_Deep_600} from "../../styled-components/Colors";

const ProjectTabs = () =>{
  return(
    <Wrapper>
      <Tab className='active'>About</Tab>
      <Separator />
      <Tab>Updates<Badge>1</Badge></Tab>
      <Separator />
      <Tab>Donations<Badge>34</Badge></Tab>
    </Wrapper>
  )
}

const Separator = styled.span`
  border-right: 2px solid ${Gray_400};
  height: 28px;
`

const Badge = styled(Subline_Bold)`
  background: ${Primary_Deep_600};
  color: white;
  border-radius: 40px;
  height: 22px;
  padding: 0 9px;
  display: flex;
  align-items: center;
  margin-left: 6px;
`

const Tab = styled(Body_P)`
  display: flex;
  padding: 20px 40px;
  margin: 0 26px;

  &.active {
    font-weight: 500;
    border-bottom: 2px solid ${Pinky_500};
  }
`

const Wrapper = styled.div`
  margin: 20px 0;
  color: ${Primary_Deep_600};
  display: flex;
  align-items: center;
`

export default ProjectTabs
