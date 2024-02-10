import React, { useContext } from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const movilWidth = 1000;

const MainContainer = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 0.1px solid #ffffff;
  display: flex;
  justify-content: center;
  font-size: 22px;
  position: fixed;
  z-index: 1;
  top: 0;

  @media only screen and (min-width: 1000px) {
    .nav {
      width: 60%;
    }
  }
`;

const Hamburger = styled.button``;

const Nav = styled.div`
  height: 100%;
`;

const Img = styled.img`
  height: 100%;
  float: left;
`;

const Items = styled.div`
  padding: 1px;
  width: 80%;
  height: 100%;
  float: right;
`;

const Ul = styled.ul`
  width: 100%;
`;

const Li = styled.li`
  width: 80%;
  .nav-link {
    width: 100%;
  }
`;

export default function Navbar() {
  const [screenWidth, setscreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setscreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MainContainer className="navbar navbar-expand-lg bg-body-tertiary">
      <Nav
        className={`nav ${
          screenWidth < movilWidth ? "container-fluid" : null
        }`}
      >
        <Img className="navbar-brand" src="src/assets/images/logo.png" alt="" />
        <Hamburger
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Hamburger>
        <Items className="collapse navbar-collapse" id="navbarSupportedContent">
          <Ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </Li>
            <Li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="#">
                    Action
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </Li>
            <Li className="nav-item">
              <Link className="nav-link" to="#">
                Example
              </Link>
            </Li>
            <Li className="nav-item">
              <Link className="nav-link" to="other">
                Upwork
              </Link>
            </Li>
            <Li className="nav-item">
              <Link className="nav-link" to="#">
                Contact
              </Link>
            </Li>
          </Ul>
        </Items>
      </Nav>
    </MainContainer>
  );
}
