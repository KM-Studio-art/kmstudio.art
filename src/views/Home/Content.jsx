import React from "react";
import styled from "styled-components";
import Section1 from "./Section1";
import Section2 from "./Section2";

const ContentContainer = styled.div`
  width: 100%;
  height: 300vh;
  display: flex;
  justify-content: center;
  .c-intern {
    width: 62%;
  }
`;

export default function Content() {
  return (
    <ContentContainer>
      <div className="c-intern">
        <Section1 />
        <Section2/>
      </div>
    </ContentContainer>
  );
}
