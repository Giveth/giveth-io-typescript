import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { Shadow } from "./styled-components/Shadow";
import { H4, Body_P } from "./styled-components/Typography";
import { Giv_800 } from "./styled-components/Colors";
import { Button } from "./styled-components/Button";

interface IContent {
  icon: string;
  title: string;
  caption: string;
  buttonLabel: string;
}

const GeneralCard = (props: { content: IContent }) => {
  const { icon, title, caption, buttonLabel } = props.content;
  return (
    <Wrapper>
      <Image src={icon} alt="title" />
      <Title>{title}</Title>
      <Body_P>{caption}</Body_P>
      <ButtonStyled>{buttonLabel}</ButtonStyled>
    </Wrapper>
  );
};

const ButtonStyled = styled(Button)`
  text-transform: uppercase;
  margin: 24px auto 0 auto;
  width: 265px;
  padding: 0;
`;

const Title = styled(H4)`
  margin-top: 10px;
`;

const Wrapper = styled.div`
  background: white;
  text-align: center;
  color: ${Giv_800};
  width: 558px;
  height: 500px;
  border-radius: 12px;
  box-shadow: ${Shadow.Dark[500]};
  padding: 64px 85px;
`;

export default GeneralCard;
