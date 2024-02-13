import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const movilWidthSm = 640;

const movilWidthMd = 1007;

const MainContainer = styled.div`
  @media screen {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    font-size: 22px;
    position: fixed;
    top: 0;
    z-index: 1;
    .nav {
      height: 100%;
      width: 60%;
    }
    img {
      height: 100%;
      float: left;
    }
    .items {
      padding: 1px;
      width: 80%;
      height: 100%;
      float: right;
    }
    ul {
      width: 100%;
    }
    li {
      width: 80%;
      .nav-link {
        width: 100%;
      }
    }
  }
  @media screen and (width < ${movilWidthMd}px) {
    .nav {
      width: 80%;
    }
  }
  @media screen and (width < ${movilWidthSm}px) {
    .nav {
      width: 100%;
    }
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
      <div
        className={`nav ${
          screenWidth < movilWidthMd ? "container-fluid" : null
        }`}
      >
        <img className="navbar-brand" src="src/assets/images/logo.png" alt="" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse items"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
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
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Example
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="other">
                Upwork
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </MainContainer>
  );
}
