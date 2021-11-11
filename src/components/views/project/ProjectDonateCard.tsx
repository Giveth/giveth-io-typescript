import styled from "@emotion/styled";
import Link from 'next/link'
import { useRouter } from "next/router";
import { Button } from "../../styled-components/Button";
import {Giv_300, Giv_500, Pinky_500} from "../../styled-components/Colors";
import ShareLikeBadge from "../../badges/ShareLikeBadge";
import {Shadow} from "../../styled-components/Shadow";
import { Caption } from "../../styled-components/Typography";
import {ICategory} from "../../../types/types";
import CategoryBadge from "../../badges/CategoryBadge";
import Routes from "../../../lib/constants/Routes";
import config from "../../../../config";
import {slugToProjectDonate} from "../../../lib/helpers";

const ProjectDonateCard = (props: { categories: ICategory[], slug: string }) => {
  const { categories, slug } = props
  const isCategories = categories.length > 0

  const router = useRouter()

  return(
    <Wrapper>
      <Button
        onClick={() => router.push(slugToProjectDonate(slug))}
        background={Giv_500} className='w-100'
        small
      >
        DONATE
      </Button>
      <BadgeWrapper>
        <ShareLikeBadge share />
        <ShareLikeBadge like />
      </BadgeWrapper>
      <GivBackNotif>
        <Caption color={Giv_300}>When you donate to verified projects, you get GIV back.</Caption>
        <div>
          <InfoIcon>?</InfoIcon>
        </div>
      </GivBackNotif>
      {isCategories && (
        <CategoryWrapper>
          {categories.map(i => <CategoryBadge category={i} />)}
        </CategoryWrapper>
      )}
      <Link href={Routes.Projects} passHref>
        <Links>
          View similar projects
        </Links>
      </Link>
      <br />
      <Links target='_blank' href={config.REPORT_ISSUE_URL} rel='noreferrer noopener'>
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

const InfoIcon = styled.div`
  border-radius: 50%;
  border: 1px solid ${Giv_300};
  width: 16px;
  text-align: center;
  height: 16px;
  font-size: 10px;
  color: ${Giv_300};
  font-weight: 500;
`

const GivBackNotif = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
  background: rgba(231, 225, 255, 0.4);
  border-radius: 8px;
  border: 1px solid ${Giv_300};
  margin-top: 24px;
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
  box-shadow: ${Shadow.Neutral["400"]};
  flex-shrink: 0;
`

export default ProjectDonateCard
