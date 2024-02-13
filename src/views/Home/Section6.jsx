import React from "react";
import styled from "styled-components";
import "react-alice-carousel/lib/alice-carousel.css";
import ReactCompareImage from "react-compare-image";

const Section6Container = styled.div`
  width: 100%;
  margin-top: 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .divider-a {
    width: 41%;
    background-color: aliceblue;
    img {
      width: 100%;
    }
  }
  .divider-b {
    width: 56%;
    line-height: 28px;
    size: 18px;
    color: #7a7674;
    h5 {
      font-size: 18px;
      font-weight: 700;
    }
    ul {
      padding-left: 15px;
    }
  }
  @media screen and (width < 1440px) {
    .divider-a {
      width: 100%;
    }
    .divider-b {
      width: 100%;
    }
    .items {
      display: none;
    }
  }
`;

export default function Section6() {
  return (
    <Section6Container>
      <div className="divider-a">
        <ReactCompareImage
          leftImage="https://faizan-studio.com/wp-content/uploads/2021/11/02-17.jpg"
          rightImage="https://faizan-studio.com/wp-content/uploads/2021/11/01-19.jpg"
        />
      </div>
      <div className="divider-b">
        <p>
          Though some photographers underestimate the importance of a
          complementary background, we at Faizan Studio know that it can either
          improve or spoil your photo. The main edits with background boil down
          to improving it, totally removing or replacing it with a more fitting
          option. You can order all high-end retouching services on our website.
        </p>
        <div className="items">
          <h5>High-end retouching includes:</h5>
          <ul>
            <li>Background color improvement</li>
            <li>Color correction</li>
            <li>Make-up retouching</li>
            <li>High-end skin smoothing</li>
            <li>Shadows improvement</li>
            <li>High-end body correction</li>
            <li>Stray hair retouching</li>
            <li>Dodge and Burn effect</li>
            <li>Color correction</li>
            <li>Make-up retouching</li>
            <li>Natural skin smoothing</li>
            <li>Skin blemishes removal</li>
            <li>Skin tone brightening</li>
            <li>BackGround Extending</li>
          </ul>
        </div>
      </div>
    </Section6Container>
  );
}
