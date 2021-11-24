import styled from '@emotion/styled'
import React from 'react'
import Select from 'react-select'
import { useQuery } from '@apollo/client'
import { FETCH_LISTED_TOKENS } from '../../../../src/apollo/gql/gqlEnums'
import { IProjectBySlug } from '../../../types/types'

const CryptoDonation = (props: IProjectBySlug) => {
  const { project } = props
  const { loading, error, data } = useQuery(FETCH_LISTED_TOKENS)
  console.log({ data })

  return (
    <>
      <TitleBox>CRYPTO DONATION HERE</TitleBox>
      <SearchContainer>
        <DropdownContainer>
          <Select
            classNamePrefix="select"
            value={'yeah'}
            // onChange={e => handleChange('category', e)}
            options={[]}
          />
        </DropdownContainer>
        <SearchBarContainer></SearchBarContainer>
      </SearchContainer>
    </>
  )
}

const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer !important;
  margin-bottom: 26px;
`
const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr;
  grid-auto-rows: minmax(100px, auto);
`
const DropdownContainer = styled.div`
  background: red;
`
const SearchBarContainer = styled.div`
  background: blue;
`
export default CryptoDonation
