import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { Giv_900, Giv_700 } from "../../styled-components/Colors";
import { H2, Lead } from "../../styled-components/Typography";
import Card from "../../GeneralCard";
import config from "../../../../config";
import YellowFlower from "../../../../public/images/yellow_flower.svg";
import discord_icon from "../../../../public/images/discord_icon.svg";
import discourse_icon from "../../../../public/images/discourse_icon.svg";
import github_icon from "../../../../public/images/github_icon.svg";
import telegram_icon from "../../../../public/images/telegram_icon.svg";

const JoinEngage = () => {
  return (
    <>
      <UpperSection>
        <LeadText>
          Giveth is first and foremost a community of givers and changemakers.
          We are passionate people working together to build a crypto-economic
          system that can reward giving to good causes. Our project is
          open-source, decentralized, altruistic, and community-led. Want to get
          more involved?
        </LeadText>
        <br />
        <LeadText>
          Follow our social media and come say hello in a channel below, we look
          forward to welcoming you!
        </LeadText>
        <div style={{ position: "absolute" }}>
          <Image src={YellowFlower} alt="yellowflower" />
        </div>
        <EngageSection>
          <Title>Engage</Title>
          <CardsSection>
            {cardsArray.map((i) => (
              <Card key={i.title} content={i} />
            ))}
          </CardsSection>
        </EngageSection>
      </UpperSection>
    </>
  );
};

const cardsArray = [
  {
    icon: discord_icon,
    title: "Discord",
    caption:
      "Join the conversation! Discord is where our team communicates. Introduce yourself, give us feedback, find out how to contribute or just say hello!",
    buttonLabel: "join us on discord",
  },
  {
    icon: discourse_icon,
    title: "Discourse",
    caption:
      "The Giveth forum is where we create discourse around new and existing proposals. We share ideas involving development and governance, cultivating discussions about important topics around our team and community.",
    buttonLabel: "join on discourse",
  },
  {
    icon: github_icon,
    title: "Github",
    caption:
      "Got some developer skills? Check out our Github! We always welcome new contributors. Please also join one of our dev channels in Discord to say hello!",
    buttonLabel: "join us on github",
  },
  {
    icon: telegram_icon,
    title: "Telegram",
    caption:
      "Not on Discord? Join our Telegram! This group is bridged directly to the #general channel in the Giveth discord so we’ll see all of your messages here.",
    buttonLabel: "join us on telegram",
  },
];

const UpperSection = styled.div`
  padding: 150px 0;
  color: white;
  overflow: hidden;
  position: relative;
`;
const LeadText = styled(Lead)`
  color: ${Giv_900};
  margin: 0 20%;
`;
const Title = styled(H2)`
  color: ${Giv_700};
  margin: 7% 20%;
`;
const EngageSection = styled.div`
  position: relative;
  text-align: center;
  margin: 2% 0 0 0;
`;
const CardsSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  flex-wrap: wrap;
  gap: 25px;
  position: relative;
  z-index: 3;
`;

export default JoinEngage;
