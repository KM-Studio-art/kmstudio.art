import React from "react";
import styled from "styled-components";

const Section3Container = styled.div`
  min-height: 35vh;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  .title {
    color: #929292;
    font-size: 32px;
  }
  .subtitle {
    font-size: 20px;
  }
  .text {
    color: #969696;
    font-size: 18px;
  }
`;
export default function Section3() {
  return (
    <Section3Container>
      <h6 className="title">KM Studio</h6>
      <p className="subtitle">
        Professional Graphic Designer & Retoucher from London.
      </p>
      <p className="text">
        I am a professional Graphic Designer & Retoucher from London United
        Kngdom. I get so excited about producing great work. This is my favorite
        hobby to take pictures to form people and transform them according to
        their requirements for the sake of their pleasure you can also ask for
        your sample work I’ll provide you with a good sample for your
        satisfaction then we will continue Now I have a good team to provide our
        services worldwide. we have up to 8 members in our working place. we are
        providing All kinds of graphic designing Including flayer Design, logo &
        brand identity, packaging design, Label design, social media design, etc
      </p>
    </Section3Container>
  );
}
