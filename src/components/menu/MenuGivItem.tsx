import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import Image from 'next/image'
import tokenAbi from 'human-standard-token-abi'
import { useWeb3React } from '@web3-react/core'
import { Contract } from '@ethersproject/contracts'

import { Primary_Deep_800 } from '../styled-components/Colors'
import { FlexCenter } from '../styled-components/Grid'
import config from '../../../config'
import { Shadow } from '../styled-components/Shadow'
import givIcon from '../../../public/images/GIV_menu_token.svg'

const MenuGivItem = () => {
  const context = useWeb3React()
  const { chainId, account, library, active } = context

  const [givBalance, setGivBalance] = useState(0)
  const router = useRouter()

  const fetchGivBalance = () => {
    const contract = new Contract(
      chainId === 100 ? config.GIV_TOKEN.XDAI : config.GIV_TOKEN.MAINNET,
      tokenAbi,
      library
    )
    contract
      .balanceOf(account)
      .then((res: number) => {
        setGivBalance(res / 10 ** 18)
      })
      .catch((err: never) => {
        console.log(err)
        setGivBalance(0)
      })
  }

  useEffect(() => {
    if (active) fetchGivBalance()
    else setGivBalance(0)
  }, [account, chainId, active])

  return (
    <GivMenu onClick={() => router.push(config.LINKS.GIVECONOMY)}>
      <Image width={24} height={24} src={givIcon} alt='giv icon' />
      <GivBalance>{parseFloat(String(givBalance)).toLocaleString('en-US')} </GivBalance>
    </GivMenu>
  )
}

const GivBalance = styled.span`
  margin-left: 8px;
`

const GivMenu = styled(FlexCenter)`
  padding: 0 14.5px;
  cursor: pointer;
  background: white;
  border-radius: 48px;
  height: 48px;
  color: ${Primary_Deep_800};
  box-shadow: ${Shadow.Dark[500]};
`

export default MenuGivItem
