import styled from '@emotion/styled'
import React, { useState, useEffect } from 'react'
import Select, { components, ControlProps } from 'react-select'
import InputBox from '../../InputBox'
import Image from 'next/image'
import { useQuery } from '@apollo/client'
import { FETCH_LISTED_TOKENS } from '../../../../src/apollo/gql/gqlEnums'
import { Button } from '../../styled-components/Button'
import { Caption, Link_Small } from '../../styled-components/Typography'
import {
  Gray_200,
  Gray_300,
  Gray_800,
  Giv_500,
} from '../../styled-components/Colors'
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
          width="24px"
          height="24px"
        />
        {children}
      </IconContainer>
    </components.Control>
  )
}

const customStyles = {
  control: (base: any, state: any) => ({
    // match with the menu
    borderRadius: '0 !important',
    borderRightColor: 'transparent !important',
    boxShadow: state.isFocused ? null : null,
    padding: '8px 0 0 16px !important',
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
    // setSelectedToken(newArray && newArray[0])
    return newArray
  }

  useEffect(() => {
    if (!tokensList) return
    setTokensObject(buildTokensObj(tokensList?.tokens, currentChainId))
  }, [tokensList])

  return (
    <>
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
      <AvText>Available: 0.064208 ETH </AvText>
      <XDaiContainer>
        <div>
          <img src="/images/gas_station.svg" />
          <Caption color={Gray_800}>
            Save on gas fees, switch to xDAI network.
          </Caption>
        </div>
        <Caption bold color={Giv_500}>
          Switch network
        </Caption>
      </XDaiContainer>
      <ButtonContainer>
        <Button small background={Giv_500} width="100%">
          CONNECT WALLET
        </Button>
      </ButtonContainer>
    </>
  )
}

const Img = styled.img`
  margin-right: -10px;
  margin-top: 5px;
`
const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const AvText = styled(Link_Small)`
  padding: 4px 0 0 5px;
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
const XDaiContainer = styled.div`
  display: flex;
  flex: row;
  justify-content: space-between;
  background-color: ${Gray_200};
  padding: 8px 16px;
  margin: 24px 0 0 0;
  cursor: pointer;
  border-radius: 8px;
  div:first-child {
    display: flex;
    flex-direction: row;
    img {
      padding-right: 12px;
    }
  }
`
const ButtonContainer = styled.div`
  padding: 51px 0 0 0;
`

export default CryptoDonation
