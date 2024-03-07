import React from "react";
import styled from "styled-components";
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
        justify-content: left;
        align-items: center;
        width: 100%;
        height: 100%;
        text-decoration: none;
        img {
          margin-right: 10px;
          border-radius: 20px;
        }
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
          {options.map((option) => (
            <li key={option.name}>
              <a href={option.url}>
                <img src={option.icon} />
                {option.name}
              </a>
            </li>
          ))}
        </div>
      </Ul>
    </Container>
  );
}
