import React, { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'

import { H6, Subline_Bold } from '../../styled-components/Typography'
import {
  Giv_800,
  Gray_300,
  Gray_500,
  Pinky_500,
  Primary_Deep_800
} from '../../styled-components/Colors'
import SearchBox from '../../SearchBox'
import { formatDate, formatTxLink } from '../../../lib/helpers'
import linkIcon from '../../../../public/images/external_link.svg'
import donorProfileIcon from '../../../../public/images/default_donor.svg'
import ExternalLink from '../../ExternalLink'
import Pagination from '../../Pagination'
import { initializeApollo } from '../../../apollo/apolloClient'
import { FETCH_PROJECT_DONATIONS } from '../../../apollo/gql/gqlDonations'
import { IDonationsByProjectId } from '../../../apollo/types/gqlTypes'

const ProjectDonationTable = (props: { donations: IDonationsByProjectId; projectId: string }) => {
  const { donations, totalCount } = props.donations

  const pageCount = Math.ceil(totalCount / donations.length)

  const [activeTab, setActiveTab] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [nDonations, setNDonations] = useState(donations)

  const firstRender = useRef(true)

  const fetchDonations = () => {
    initializeApollo()
      .query({
        query: FETCH_PROJECT_DONATIONS,
        variables: {
          projectId: parseInt(props.projectId),
          skip: donations.length * (currentPage - 1),
          take: donations.length
        }
      })
      .then((res: { data: { donationsByProjectId: IDonationsByProjectId } }) => {
        setNDonations(res.data.donationsByProjectId.donations)
      })
      .catch(console.log)
  }

  useEffect(() => {
    if (firstRender.current) firstRender.current = false
    else fetchDonations()
  }, [currentPage])

  return (
    <Wrapper>
      <UpperSection>
        <Tabs>
          <Tab onClick={() => setActiveTab(0)} className={activeTab === 0 ? 'active' : ''}>
            Donations
          </Tab>
          <Tab onClick={() => setActiveTab(1)} className={activeTab === 1 ? 'active' : ''}>
            Traces
          </Tab>
        </Tabs>
        {/*TODO implement search func*/}
        <SearchBox onChange={console.log} />
      </UpperSection>

      {activeTab === 0 && (
        <DonationSection>
          <Table>
            <thead>
              <TableRow>
                <TableHead>DATE</TableHead>
                <TableHead>DONOR</TableHead>
                <TableHead>AMOUNT</TableHead>
                <TableHead>TX</TableHead>
              </TableRow>
            </thead>
            <tbody>
              {(nDonations || donations).map(i => {
                return (
                  <TableRow key={i.id}>
                    <TableData>{formatDate(i.createdAt)}</TableData>
                    <TableDonor>
                      <Image src={donorProfileIcon} alt='user image' />
                      <div>{i.user?.name || i.fromWalletAddress}</div>
                    </TableDonor>
                    <TableData>
                      <div>{i.amount + ' ' + i.currency}</div>
                      <UsdValue>{i.valueUsd && i.valueUsd + ' USD'}</UsdValue>
                    </TableData>
                    <td>
                      <ExternalLink href={formatTxLink(i.transactionNetworkId, i.transactionId)}>
                        <Image src={linkIcon} alt='link icon' />
                      </ExternalLink>
                    </td>
                  </TableRow>
                )
              })}
            </tbody>
          </Table>

          <Pagination setPage={setCurrentPage} pageCount={pageCount} currentPage={currentPage} />
        </DonationSection>
      )}
    </Wrapper>
  )
}

const Table = styled.table`
  margin-bottom: 32px;
`

const UsdValue = styled(Subline_Bold)`
  color: ${Gray_500};
`

const TableRow = styled.tr`
  border-bottom: 1px solid ${Gray_300};
  height: 58px;
`

const TableData = styled.td`
  height: 58px;
  color: ${Primary_Deep_800};
  font-size: 14px;
  line-height: 150%;
  padding-right: 35px;
`

const TableDonor = styled(TableData)`
  color: ${Pinky_500};
  display: flex;
  align-items: center;
  gap: 8px;
`

const TableHead = styled.th`
  font-weight: 500;
  color: ${Giv_800};
  font-size: 10px;
  line-height: 13px;
`

const DonationSection = styled.div`
  margin-top: 30px;
`

const Tab = styled(H6)`
  font-weight: 400;
  cursor: pointer;

  &.active {
    font-weight: 700;
  }
`

const Tabs = styled.div`
  display: flex;
  gap: 16px;

  > h6:nth-of-type(2) {
    border-left: 2px solid ${Gray_300};
    padding-left: 16px;
  }
`

const UpperSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
`

const Wrapper = styled.div`
  margin-top: 50px;
`

export default ProjectDonationTable
