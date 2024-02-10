import React from "react";
import Carousel from "./Carousel";
import styled from "styled-components";
import Content from "./Content";

const MainContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  min-height: 100vh;
  margin-top: 80px;
`;

export default function Home() {
  return (
    <MainContainer>
      <Carousel/>
      <Content/>
    </MainContainer>
  );
}
