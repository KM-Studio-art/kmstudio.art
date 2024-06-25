import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import options from "./options.js";
import Bugsnag from "@bugsnag/js";

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
      padding: 15px;
    }
    .items {
      padding: 1px;
      width: 80%;
      height: 100%;
      float: right;
    }
    .navbar-toggler {
      box-shadow: none;
      border: 0px;
    }
    ul {
      width: 100%;
    }
    li {
      width: 80%;
      .nav-link {
        width: 100%;
        cursor: pointer;

        &:hover {
          color: wheat;
        }
      }
    }
    .invert-color {
      filter: invert(100%);
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
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownOptions, setdropdownOptions] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setscreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDropdownOptions = ({ target }) => {
    const name = target.name;
    if (name == "editing") {
      setdropdownOptions(options[0]);
    } else {
      setdropdownOptions(options[1]);
    }
    setShowDropdown(true);
  };

  return (
    <MainContainer
      className="navbar navbar-expand-lg bg-body-tertiary"
      onMouseLeave={() => setShowDropdown(false)}
    >
      <div
        className={`nav ${
          screenWidth < movilWidthMd ? "container-fluid" : null
        }`}
      >
        <img
          className="navbar-brand invert-color"
          src="https://kmstudio.s3.us-east-2.amazonaws.com/logo.png"
          alt=""
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              KM Studio
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/"
                  onMouseOver={() => setShowDropdown(false)}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  name="photography"
                  to="/photography"
                  className="nav-link"
                  onMouseOver={(target) => handleDropdownOptions(target)}
                >
                  Photography
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  name="editing"
                  to="/editing"
                  className="nav-link"
                  onMouseOver={(target) => handleDropdownOptions(target)}
                >
                  Editing
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.upwork.com/freelancers/~01c9e8635fbf16b741"
                  target="blank"
                  onMouseOver={() => setShowDropdown(false)}
                >
                  Upwork
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {showDropdown ? <Dropdown options={dropdownOptions} /> : null}
      </div>
    </MainContainer>
  );
}
