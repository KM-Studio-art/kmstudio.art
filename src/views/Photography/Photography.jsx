import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 80px;
  height: 100vh;
  width: 100vw;
  div {
    width: 100%;
    text-align: center;
    font-size: 40px;
    height: 30%;
  }
`;

export default function Photography() {
  return (
    <Container>
      <div>Services</div>
    </Container>
  );
}
