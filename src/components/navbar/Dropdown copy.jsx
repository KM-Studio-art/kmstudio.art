import React from "react";
import styled from "styled-components";
import { MdOutlineFaceRetouchingNatural } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { PiBaby } from "react-icons/pi";
import { BsBoxSeam } from "react-icons/bs";
import { TbPhotoEdit } from "react-icons/tb";
import { RiScissorsCutFill } from "react-icons/ri";
import "animate.css";

const Container = styled.div`
  background-color: white;
  @media screen and (width < 1007px) {
    display: none;
  }
`;
const Ul = styled.ul`
  list-style: none;
  width: 100%;
  div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    li {
      width: 33%;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        font-size: 18px;
        color: #3f3f3f;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70%;
        height: 70%;
        text-decoration: none;
      }
    }
  }
`;

export default function Dropdown({ options }) {
  return (
    <Container className="animate__animated animate__fadeIn animate__faster">
      {" "}
      <Ul>
        <div>
          {" "}
          <li>
            <a href="#">
              <MdOutlineFaceRetouchingNatural />
              &nbsp;Portrait Retouching
            </a>
          </li>
          <li>
            <a href="#">
              <FaArrowTrendUp />
              &nbsp;High End Retouching
            </a>
          </li>
          <li>
            <a href="#">
              <PiBaby />
              &nbsp;Newborn editing
            </a>
          </li>
          <li>
            <a href="#">
              <BsBoxSeam />
              &nbsp;Product Editing
            </a>
          </li>
          <li>
            <a href="#">
              <TbPhotoEdit />
              &nbsp;Photo Manipulation
            </a>
          </li>
          <li>
            <a href="#">
              <RiScissorsCutFill />
              &nbsp;Clipping path
            </a>
          </li>
          <li>
            <a href="#">&nbsp;Jewellry Retouching</a>
          </li>
          <li>
            <a href="#">&nbsp;Real Estate & Arcitacture</a>
          </li>
          <li>
            <a href="#">&nbsp;Photo Restoration</a>
          </li>
        </div>
      </Ul>
    </Container>
  );
}
