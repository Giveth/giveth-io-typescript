import styled from "@emotion/styled";
import Image from 'next/image'
import {Gray_300, Gray_400, Gray_900} from "./styled-components/Colors";
import {Body_P} from "./styled-components/Typography";
import SearchIcon from '../../public/images/search.svg'

const SearchBox = (props: any) => {
  return(
    <Wrapper>
      <Body_P className='w-100 mr-2' color={Gray_900} bold>
        <Input onChange={e => props.onChange(e.target.value)} placeholder='Search Projects...' />
      </Body_P>
      <Image src={SearchIcon} alt='Search Icon' />
    </Wrapper>
  )
}

const Input = styled.input`
  border-width: 0;
  height: 100%;
  width: 100%;
  font-weight: inherit;
  border-right: 1px solid ${Gray_400};

  &:focus {
    outline: none;
  }
`

const Wrapper = styled.div`
  min-width: 343px;
  max-width: 610px;
  height: 54px;
  border: 2px solid ${Gray_300};
  border-radius: 8px;
  padding: 5px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default SearchBox
