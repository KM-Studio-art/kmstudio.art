import React from "react";
import styled from "styled-components";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";

const ContentContainer = styled.div`
  width: 100%;
  min-height: 300vh;
  display: flex;
  justify-content: center;
  .c-intern {
    width: 62%;
  }
  @media screen and (width < 1440px) {
    .c-intern {
      width: 90%;
    }
  }
`;

export default function Content() {
  return (
    <ContentContainer>
      <div className="c-intern">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5/>
        <Section6/>
        <Section6/>
        <Section6/>
        <Section6/>
      </div>
    </ContentContainer>
  );
}
