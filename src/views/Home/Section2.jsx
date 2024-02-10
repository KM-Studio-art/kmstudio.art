import React from "react";
import styled from "styled-components";
import { FaBookOpen } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

const Section2Container = styled.div`
  height: 37vh;
  margin-top: 5%;
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .c-card {
    height: 100%;
    width: 23%;
    padding: 20px 12px;
    background-color: #f4f5f4;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .image-icon {
    font-size: 35px;
    color: #818181;
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
    width: 35%;
    border: 0px;
    background: linear-gradient(to right,#d8d8d8,#6b6b6b);
    height: fit-content;
    color: white;
    &:hover{
      background: linear-gradient(to right,#f3afa0,#f75555);
    }
  }
`;
export default function Section2() {
  return (
    <Section2Container>
      <div className="c-card">
        <FaBookOpen className="image-icon" />
        <h6 className="title">About us</h6>
        <p className="text">
          we are a team we provide all kinds of graphic design work photoediting
          and vide editing also we deliver quality work contact us for more
        </p>
        <button>Details &gt; </button>
      </div>
      <div className="c-card">
      <FaUser className="image-icon"/>
        <h6 className="title">Upwork</h6>
        <p className="text">
        Check my upwork profile and check portfolio you love them and read review about our work so you can get see our clients thoughts about us
        </p>
        <button>Details &gt; </button>
      </div>
      <div className="c-card">
        <FaBookOpen className="image-icon" />
        <h6 className="title">About us</h6>
        <p className="text">
          we are a team we provide all kinds of graphic design work photoediting
          and vide editing also we deliver quality work contact us for more
        </p>
        <button>Details &gt; </button>
      </div>
      <div className="c-card">
        <FaBookOpen className="image-icon" />
        <h6 className="title">About us</h6>
        <p className="text">
          we are a team we provide all kinds of graphic design work photoediting
          and vide editing also we deliver quality work contact us for more
        </p>
        <button>Details &gt; </button>
      </div>
    </Section2Container>
  );
}
