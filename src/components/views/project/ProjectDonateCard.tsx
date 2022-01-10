import React, { useContext, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Button } from '../../styled-components/Button'
import { Giv_300, Giv_500, Pinky_500 } from '../../styled-components/Colors'
import ShareLikeBadge from '../../badges/ShareLikeBadge'
import { Shadow } from '../../styled-components/Shadow'
import { Link_Medium } from '../../styled-components/Typography'
import CategoryBadge from '../../badges/CategoryBadge'
import Routes from '../../../lib/constants/Routes'
import config from '../../../../config'
import { slugToProjectDonate } from '../../../lib/helpers'
import InfoBadge from '../../badges/InfoBadge'
import { Context as UserContext } from '../../../contextProviders/UserProvider'
import { IProjectBySlug } from '../../../apollo/types/gqlTypes'

const ProjectDonateCard = (props: IProjectBySlug) => {
  const {
    state: { user }
  } = useContext(UserContext)

  const { project } = props
  const { categories, slug, reactions } = project

  const [heartedByUser, setHeartedByUser] = useState(false)

  const isCategories = categories.length > 0

  const router = useRouter()

  useEffect(() => {
    if (user?.id) {
      const isHearted = !!reactions?.some(i => Number(i.userId) === Number(user.id))
      setHeartedByUser(isHearted)
    }
  }, [user])

  return (
    <Wrapper>
      <Button
        onClick={() => router.push(slugToProjectDonate(slug))}
        background={Giv_500}
        className='w-100'
        small
      >
        DONATE
      </Button>
      <BadgeWrapper>
        <ShareLikeBadge type='share' />
        <ShareLikeBadge type='like' active={heartedByUser} />
      </BadgeWrapper>
      <GivBackNotif>
        <Link_Medium color={Giv_300}>
          When you donate to verified projects, you get GIV back.
        </Link_Medium>
        <InfoBadge />
      </GivBackNotif>
      {isCategories && (
        <CategoryWrapper>
          {categories.map(i => (
            <CategoryBadge key={i.name} category={i} />
          ))}
        </CategoryWrapper>
      )}
      <Link href={Routes.Projects} passHref>
        <Links>View similar projects</Links>
      </Link>
      <br />
      <Links target='_blank' href={config.LINKS.REPORT_ISSUE} rel='noreferrer noopener'>
        Report an issue
      </Links>
    </Wrapper>
  )
}

const Links = styled.a`
  font-size: 14px;
  color: ${Pinky_500} !important;
`

const CategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
  overflow: hidden;
  max-height: 98px;
  margin-bottom: 16px;
`

const GivBackNotif = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
  background: rgba(231, 225, 255, 0.4);
  border-radius: 8px;
  border: 1px solid ${Giv_300};
  margin-top: 24px;
  color: ${Giv_300};
`

const BadgeWrapper = styled.div`
  display: flex;
  margin-top: 16px;
  justify-content: space-between;
`

const Wrapper = styled.div`
  margin-right: 26px;
  margin-top: -32px;
  background: white;
  padding: 32px;
  overflow: hidden;
  width: 326px;
  max-height: 450px;
  height: fit-content;
  border-radius: 40px;
  position: relative;
  box-shadow: ${Shadow.Neutral['400']};
  flex-shrink: 0;
`

export default ProjectDonateCard
