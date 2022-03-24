import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";
import bgimage from "../Images/headerbg.jpg";

function Header() {
  return (
    <HeroContainer>
      <Heading>
        <h1>MaryMac.</h1>
        <MenuIcon />
      </Heading>
      <HeroTextStyle>
        <h1>Mary Mac</h1>
        <HeroTextHighlight>Photography</HeroTextHighlight>
      </HeroTextStyle>
    </HeroContainer>
  );
}

export default Header;

const Heading = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 1.5rem;
`;

const HeroTextStyle = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 3rem;

  @media (max-width: 500px) {
    min-height: 50vh;
  }

  h1 {
    font-size: 4.5rem;
    font-weight: 200;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.25);

    @media (max-width: 500px) {
      font-size: 3rem;
    }
  }
`;

const HeroContainer = styled.div`
  min-height: 100vh;
  background-image: url(${bgimage});
  background-repeat: none;
  background-size: cover;
`;

const HeroTextHighlight = styled.span`
  color: white;
  font-size: 3.5rem;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.25);

  @media (max-width: 500px) {
    font-size: 2.5rem;
  }
`;
