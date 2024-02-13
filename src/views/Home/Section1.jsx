import React from "react";
import styled from "styled-components";
import { FaRegImages } from "react-icons/fa";

const Section1Container = styled.div`
  @media screen {
    min-height: 30vh;
    margin-top: 5%;
    padding: 40px 120px;
    background-color: #f4f5f4;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    .image-icon {
      font-size: 35px;
      color: #999999;
    }
    .title {
      color: #494d5f;
      font-size: 24px;
    }
    .text {
      color: #999999;
    }
    button {
      border-radius: 50px;
      border: 0px;
      width: 20%;
      background: linear-gradient(to right, #d8d8d8, #6b6b6b);
      color: white;
      &:hover {
        background: linear-gradient(to right, #f3afa0, #f75555);
      }
    }
    @media screen and (width < 1440px) {
      padding: 20px 60px;
      button {
        width: 30%;
      }
    }
    @media screen and (width < 667px) {
      padding: 10px 30px;
      button {
        width: 90%;
      }
    }
  }
`;
export default function Section1() {
  return (
    <Section1Container>
      <FaRegImages className="image-icon" />
      <h6 className="title">Image Editing</h6>
      <p className="text">
        we are a team we provide all kinds of graphic design work photoediting
        and vide editing also we deliver quality work contact us for more
      </p>
      <button>Details &gt; </button>
    </Section1Container>
  );
}
