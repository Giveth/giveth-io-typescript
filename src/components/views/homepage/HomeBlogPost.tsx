import Link from 'next/link'
import styled from "@emotion/styled";
import {Button_Medium, Caption, H5, P} from "../../styled-components/Typography";
import {BodyColor} from "../../styled-components/Colors";
import {htmlToText} from "../../../lib/helpers";

interface IHomeBlogPost {
  post: IBlogPost
}

interface IBlogPost {
  title: string
  author: string
  description: string
  link: string
  pubDate: string
}

const HomeBlogPost = (props: IHomeBlogPost) => {
  const { post } = props
  const { title, description, link, pubDate, author } = post
  return(
    <Wrapper>
      <Link href={link}>
        <a>
          <Title>{title}</Title>
        </a>
      </Link>
      <Description>{htmlToText(description)}</Description>
      <Caption>{author}</Caption>
      <Caption>{pubDate.split(' ')[0]}</Caption>
      <br />
      <Link href={link}>
        <a>
          <Button_Medium>READ MORE</Button_Medium>
        </a>
      </Link>
    </Wrapper>
  )
}

const Description = styled(P)`
  height: 68px;
  overflow: hidden;
  margin-bottom: 40px;
`

const Title = styled(H5)`
  margin: 16px 0;
`

const Wrapper = styled.div`
  color: ${BodyColor};
  max-width: 420px;
`

export default HomeBlogPost
