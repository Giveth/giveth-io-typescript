import styled from "@emotion/styled";
import Link from 'next/link'
import {P} from "./styled-components/Typography";
import {Primary_Giv_800} from "./styled-components/Colors";
import Routes from "../lib/constants/Routes";

const Footer = () => {
  return(
    <Wrapper>
      <LinksWrapper>
        <LinksSection>
          <Link href='/'>
            <a>Home</a>
          </Link>
          <Link href={Routes.Projects}>
            <a>Projects</a>
          </Link>
          <Link href={Routes.AboutUs}>
            <a>About Us</a>
          </Link>
          <Link href={Routes.Faq}>
            <a>FAQ</a>
          </Link>
          <Link href={Routes.Support}>
            <a>Support</a>
          </Link>
        </LinksSection>
        <LinksSection>
          <Link href={Routes.Join}>
            <a>Join Our Community</a>
          </Link>
          <Link href='https://docs.giveth.io/whatisgiveth/'>
            <a>What is Giveth?</a>
          </Link>
          <Link href='https://docs.giveth.io/dapps/'>
            <a>User Guides</a>
          </Link>
          <Link href='https://docs.giveth.io/dapps/givethioinstallation'>
            <a>Developer Docs</a>
          </Link>
          <Link href={Routes.Terms}>
            <a>Terms of Use</a>
          </Link>
        </LinksSection>
        <LinksSection>
          <Link href='https://trace.giveth.io/'>
            <a>Giveth TRACE</a>
          </Link>
          <Link href='https://commonsstack.org/'>
            <a>Commons Stack</a>
          </Link>
          <Link href={Routes.Partnerships}>
            <a>Partnerships</a>
          </Link>
          <Link href='https://docs.giveth.io/jobs/'>
            <a>We're Hiring!</a>
          </Link>
        </LinksSection>
      </LinksWrapper>
    </Wrapper>
  )
}

const LinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 50px;
`

const LinksSection = styled(P)`
  color: ${Primary_Giv_800};
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 180px;
`

const Wrapper = styled.div`
  margin: 112px 150px;
`

export default Footer
