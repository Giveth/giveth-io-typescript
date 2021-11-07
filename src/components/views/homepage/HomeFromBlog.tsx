import styled from "@emotion/styled";
import {useEffect, useState} from "react";
import {Purple} from "../../styled-components/Colors";
import {Overline} from "../../styled-components/Typography";
import HomeBlogPost from "./HomeBlogPost";
import {IMediumBlogPost} from "../../../types/projectType";
import config from "../../../../config";

const HomeFromBlog = () => {
  const [mediumPosts, setMediumPosts] = useState<IMediumBlogPost[]>()

  useEffect(() => {
    const getPosts = async () => {
      const medium = await fetch(
        'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/giveth'
      )
      const posts = await medium.json()
      setMediumPosts(posts?.items?.slice(0, 2))
    }
    getPosts().then()
  }, [])

  return(
    <Wrapper>
      <Title>FROM OUR BLOG</Title>
      {mediumPosts && (
        <PostWrapper>
          {mediumPosts.map((post: IMediumBlogPost) => <HomeBlogPost key={post.guid} post={post} />)}
        </PostWrapper>
      )}
    </Wrapper>
  )
}

const PostWrapper = styled.div`
  display: flex;
  gap: 160px 50px;
  flex-wrap: wrap;
`

const Title = styled(Overline)`
  color: ${Purple};
`

const Wrapper = styled.div`
  background: url(${config.APP_URL + "/images/curves.svg"});
  height: 1000px;
  padding: 90px 150px;
`

export default HomeFromBlog
