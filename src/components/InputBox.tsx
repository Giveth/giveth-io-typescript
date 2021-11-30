import React from 'react'
import styled from '@emotion/styled'
import { Gray_500, Gray_900 } from './styled-components/Colors'
import { Body_P } from './styled-components/Typography'

type OnChangeFunction = () => void

const InputBox = (props: { onChange: OnChangeFunction; placeholder?: string }) => {
  const { onChange, placeholder } = props
  return (
    <Wrapper>
      <Body_P className='w-100 mr-2' color={Gray_900} bold>
        <Input
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder || 'Search Projects...'}
        />
      </Body_P>
    </Wrapper>
  )
}

const Input = styled.input`
  border-width: 0;
  height: 100%;
  width: 100%;
  font-weight: inherit;
  background: inherit;
  font-family: inherit;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${Gray_500};
  }
`

const Wrapper = styled.div`
  min-width: 343px;
  max-width: 610px;
  height: 54px;
  padding: 5px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`

export default InputBox
