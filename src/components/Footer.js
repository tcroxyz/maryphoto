import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <Row>
        <Column>
          <Title>Contact</Title>
          <Link>Dummy Link</Link>
          <Link>Dummy Link</Link>
          <Link>Dummy Link</Link>
        </Column>
        <Column>
          <Title>Social Media</Title>
          <Link>Dummy Link</Link>
          <Link>Dummy Link</Link>
          <Link>Dummy Link</Link>
        </Column>
      </Row>
      <Column>
        <LowTitle>
          <a href="https://www.tcro.xyz">Designed by TCRO</a>
        </LowTitle>
      </Column>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--background-dark-color);
  padding: 0px 60px;
  padding-top: 50px;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  /* margin-left: 60px; */
`;
const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  align-self: center;
`;
const Link = styled.div`
  color: var(--secondary-color);
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: var(--primary-color);
    cursor: pointer;
    transition: 200ms ease-in;
  }
`;
const Title = styled.div`
  font-size: 20px;
  color: var(--primary-color);
  margin-bottom: 40px;
  font-weight: bold;
`;

const LowTitle = styled.div`
  font-size: 16px;
  color: var(--primary-color);
  margin-bottom: 40px;
  font-weight: light;
  align-self: center;
  padding-top: 20px;
`;
