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
        <h1>Hero Text</h1>
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

  h1 {
    font-size: 3rem;
  }
`;

const HeroContainer = styled.div`
  min-height: 100vh;
  background-image: url(${bgimage});
  background-repeat: none;
  background-size: cover;
`;
