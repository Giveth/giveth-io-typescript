import styled from '@emotion/styled'
import React, { useState, useEffect } from 'react'
import Select, { components, ControlProps } from 'react-select'
import InputBox from '../../InputBox'
import { useQuery } from '@apollo/client'
import { FETCH_LISTED_TOKENS } from '../../../../src/apollo/gql/gqlEnums'
import { Gray_300 } from '../../styled-components/Colors'
import { IProjectBySlug } from '../../../types/types'

interface ISelectObj {
  value: string
  label: string
  chainId?: number
  symbol?: string
  icon?: string
}

interface IToken {
  name: string
  chainId: number
  symbol: string
  icon?: string
}

const Control = ({ children, ...props }: ControlProps<ISelectObj, false>) => {
  // @ts-ignore
  const { value } = props.selectProps
  return (
    <components.Control {...props}>
      <IconContainer>
        <img src={value?.icon} alt="" />
        {children}
      </IconContainer>
    </components.Control>
  )
}

const CryptoDonation = (props: IProjectBySlug) => {
  const { project } = props
  const { loading, error, data: tokensList } = useQuery(FETCH_LISTED_TOKENS)

  const [tokens, setTokensObject] = useState<ISelectObj[]>()
  const [currentChainId, setCurrentChainId] = useState<Number[]>(1)
  const [selectedToken, setSelectedToken] = useState<ISelectObj[]>()

  const buildTokensObj = (array: IToken[], chain: Number) => {
    const newArray = [tokensList]
    array.forEach((e) => {
      if (e.chainId !== chain) return
      const obj: ISelectObj = {
        label: e.symbol,
        value: e.symbol,
        chainId: e.chainId,
        icon: `/images/tokens/${e.symbol?.toLocaleLowerCase()}.png`,
      }
      newArray.push(obj)
    })
    newArray.sort((a, b) => a.label.localeCompare(b.label))
    setSelectedToken(newArray && newArray[0])
    return newArray
  }

  useEffect(() => {
    if (!tokensList) return
    setTokensObject(buildTokensObj(tokensList?.tokens, currentChainId))
  }, [tokensList])

  return (
    <>
      <TitleBox>CRYPTO DONATION HERE</TitleBox>
      <SearchContainer>
        <DropdownContainer>
          <Select
            classNamePrefix="select"
            value={selectedToken}
            components={{ Control }}
            // isSearchable={false}
            onChange={(e: any) => setSelectedToken(e)}
            options={tokens}
          />
        </DropdownContainer>
        <SearchBarContainer>
          <InputBox onChange={(e: string) => null} placeholder="Amount" />
        </SearchBarContainer>
      </SearchContainer>
    </>
  )
}

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  img:before {
    content: ' ';
    position: absolute;
    background-repeat: no-repeat;
    background-image: url('/images/tokens/eth.png');
    height: 50px;
    width: 50px;
  }
  img {
    height: 50px;
    width: 50px;
    object-fit: cover;
    padding: 5px;
  }
`
const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer !important;
  margin-bottom: 26px;
`
const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const DropdownContainer = styled.div`
  width: 35%;
  height: 54px;
`
const SearchBarContainer = styled.div`
  height: 54px;
  width: 65%;
  border: 2px solid ${Gray_300};
`
export default CryptoDonation
