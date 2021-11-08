import styled from "@emotion/styled";
import {Gray_300} from "./styled-components/Colors";

const SearchBox = () => {
  return(
    <Wrapper>
      <Input placeholder='Search' />
    </Wrapper>
  )
}

const Input = styled.input`

`

const Wrapper = styled.div`
  width: 343px;
  height: 54px;
  border: 2px solid ${Gray_300};
  border-radius: 8px;
  padding: 5px 16px;
`

export default SearchBox
