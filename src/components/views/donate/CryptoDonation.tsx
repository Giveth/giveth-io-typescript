import styled from '@emotion/styled'
import React, { useState, useEffect } from 'react'
import Select, { components, ControlProps } from 'react-select'
import InputBox from '../../InputBox'
import Image from 'next/image'
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
  const { value } = props.selectProps
  return (
    <components.Control {...props}>
      <IconContainer>
        <Img
          key={value?.symbol}
          src={!!value?.icon ? value.icon : '/images/tokens/eth.png'}
          onError={(e) => {
            e.currentTarget.onerror = null
            e.currentTarget.src = '/images/tokens/eth.png'
          }}
          width="32px"
          height="32px"
        />
        {children}
      </IconContainer>
    </components.Control>
  )
}

const customStyles = {
  control: (base: any, state: any) => ({
    ...base,
    // match with the menu
    borderRadius: '0 !important',
    borderRightColor: 'transparent !important',
    boxShadow: state.isFocused ? null : null,
    padding: '0 0 0 5px',
  }),
  menu: (base: any) => ({
    ...base,
    // override border radius to match the box
    borderRadius: 0,
    // beautify the word cut by adding a dash see https://caniuse.com/#search=hyphens for the compatibility
    hyphens: 'auto',
    // kill the gap
    marginTop: 0,
    textAlign: 'left',
    // prevent menu to scroll y
    wordWrap: 'break-word',
  }),
  menuList: (base: any) => ({
    ...base,
    borderRadius: 0,

    // kill the white space on first and last option
    padding: 0,
  }),
  singleValue: (base: any) => ({
    ...base,
    padding: 0,
  }),
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
            styles={customStyles}
            classNamePrefix="select"
            value={selectedToken}
            components={{ Control }}
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

const Img = styled.img`
  margin-right: -10px;
`
const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
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
