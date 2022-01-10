import React from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'

import WalletIcon from '../../../../public/images/wallet_donate_tab.svg'
import { Gray_200, Gray_500, Primary_Deep_800 } from '../../styled-components/Colors'
import { Shadow } from '../../styled-components/Shadow'
import { H2, H5, Subline } from '../../styled-components/Typography'

const ProjectTotalFundCard = (props: { address?: string; totalFund?: number }) => {
  const { address, totalFund } = props
  return (
    <Wrapper>
      <UpperSection>
        <div>
          <Subline>All time funding received</Subline>
          <H2>{'$' + totalFund}</H2>
        </div>
        <div>
          <Subline>Funding from Traces</Subline>
          <FromTraces>$50.32</FromTraces>
        </div>
      </UpperSection>
      <BottomSection>
        <Image src={WalletIcon} alt='wallet icon' />
        <Subline>{address}</Subline>
      </BottomSection>
    </Wrapper>
  )
}

const BottomSection = styled.div`
  background: ${Gray_200};
  padding: 9.5px 22px;
  display: flex;
  gap: 8px;
  color: ${Gray_500};
`

const FromTraces = styled(H5)`
  margin-top: 12px;
  font-weight: 400;
`

const UpperSection = styled.div`
  padding: 24px 21px 16px 21px;
  color: ${Primary_Deep_800};
  text-transform: uppercase;
  display: flex;
  flex-wrap: wrap;
  gap: 40px 150px;
`

const Wrapper = styled.div`
  background: white;
  max-width: 750px;
  margin-right: 30px;
  border-radius: 12px;
  box-shadow: ${Shadow.Neutral[400]};
  overflow: hidden;
`

export default ProjectTotalFundCard
