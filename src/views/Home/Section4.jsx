import React from "react";
import styled from "styled-components";

const Section4Container = styled.div`
  min-height: 35vh;
  margin-top: 5%;
  .title {
    color: #46403d;
    font-size: 20px;
  }
  .items-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    color: #7a7674;
  }
  ul {
    width: 50%;
    padding: 0px;
  }
  li {
    font-size: 18px;
    list-style-type: none;
    min-height: 38px
  }
`;
export default function Section3() {
  return (
    <Section4Container>
      <p className="title">Special Services is Photo Editing \ Retouching</p>
      <div className="items-container">
        <ul>
          <li>★ High-End Beauty retouching,</li>
          <li>★ Photo manipulating & compositing,</li>
          <li>★ Background adjustment,</li>
          <li>★ Add & remove background,</li>
          <li>★ Real estate,</li>
          <li>★ Wedding editing,</li>
        </ul>

        <ul>
          <li>★ Correcting Body Posture</li>
          <li>★ Restore Old Photos</li>
          <li>★ Recover and Repair Images</li>
          <li>★ Old Photos Restoration</li>
          <li>★ Product, Paper Editing</li>
          <li>★ Head Shot Modification</li>
        </ul>
      </div>
    </Section4Container>
  );
}
