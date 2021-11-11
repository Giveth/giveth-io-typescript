import styled from "@emotion/styled";
import Image from "next/image";
import HeartGrayIcon from "../../../public/images/heart_gray.svg";
import ShareIcon from "../../../public/images/share.svg";
import {Caption} from "../styled-components/Typography";
import {Shadow} from "../styled-components/Shadow";

const ShareLikeBadge = (props: { share?:boolean, like?: boolean }) => {
  const { share, like } = props
  const text = share ? 'Share' : like ? 'Like' : ''
  const icon = share ? ShareIcon : like ? HeartGrayIcon : ''
  return(
    <Wrapper>
      <Image src={icon} alt='badge icon' />
      <Caption bold className='mx-auto'>{text}</Caption>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 40px;
  width: 125px;
  display: flex;
  align-items: center;
  padding: 0 18px;
  background: white;
  border-radius: 48px;
  box-shadow: ${Shadow.Neutral["400"]};
  cursor: pointer;
`

export default ShareLikeBadge
