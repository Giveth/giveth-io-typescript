import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import Image from 'next/image'
import { Body_P, Link_Medium, Subline } from './styled-components/Typography'
import { Pinky_500, Giv_800 } from './styled-components/Colors'
import Routes from '../lib/constants/Routes'
import WikiIcon from '../../public/images/wiki.svg'
import MediumIcon from '../../public/images/medium.svg'
import GithubIcon from '../../public/images/github.svg'
import RedditIcon from '../../public/images/reddit.svg'
import YouTubeIcon from '../../public/images/youtube.svg'
import TwitterIcon from '../../public/images/twitter-black.svg'
import config from '../../config'

const Footer = () => {
  return (
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
            <a>We&apos;re Hiring!</a>
          </Link>
        </LinksSection>
      </LinksWrapper>
      <div className='text-right'>
        <IconsWrapper>
          {socialArray.map(elem => (
            <a key={elem.alt} href={elem.link} target='_blank' rel='noreferer noreferrer'>
              <Image src={elem.icon} alt={elem.alt} />
            </a>
          ))}
        </IconsWrapper>
        <Link_Medium className='mb-3' color={Giv_800} bold>
          <Link href={Routes.Donate}>
            <a>
              Support us with your Donation -{' '}
              <span style={{ color: Pinky_500 }}>revolution.eth</span>
            </a>
          </Link>
        </Link_Medium>
        <Subline>MMXX - No Rights Reserved - The Giveth DAC</Subline>
      </div>
    </Wrapper>
  )
}

const IconsWrapper = styled.div`
  display: flex;
  gap: 0 40px;
  margin-bottom: 35px;
`

const LinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 50px;
`

const LinksSection = styled(Body_P)`
  color: ${Giv_800};
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 180px;
`

const Wrapper = styled.div`
  margin: 112px 150px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 70px 20px;
  position: relative;
`
const socialArray = [
  { icon: MediumIcon, alt: 'medium icon', link: config.LINKS.MEDIUM },
  { icon: GithubIcon, alt: 'github icon', link: config.LINKS.GITHUB },
  { icon: RedditIcon, alt: 'reddit icon', link: config.LINKS.REDDIT },
  { icon: TwitterIcon, alt: 'twitter icon', link: config.LINKS.TWITTER },
  { icon: YouTubeIcon, alt: 'youtube icon', link: config.LINKS.YOUTUBE },
  { icon: WikiIcon, alt: 'wiki icon', link: config.LINKS.WIKI }
]

export default Footer
