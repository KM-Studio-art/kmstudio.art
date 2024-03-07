import React from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
  background-color: black;
  .carousel {
    min-height: 10vh;
  }
  .carousel-indicators {
    margin: 0px;
  }
  .c-image {
    height: 100%;
  }
  @media screen and (width < 667px) {
    height: 30vh;
    .carousel,
    .carousel-inner,
    .carousel-item,
    .c-image {
      object-fit: cover;
      height: inherit;
      overflow: hidden;
    }
  }
`;
export default function Carousel() {
  return (
    <CarouselContainer>
      {" "}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://kmstudio.s3.us-east-2.amazonaws.com/carousel/1.png"
              className="d-block w-100 c-image"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://kmstudio.s3.us-east-2.amazonaws.com/carousel/2.png"
              className="d-block w-100 c-image"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://kmstudio.s3.us-east-2.amazonaws.com/carousel/3.png"
              className="d-block w-100 c-image"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </CarouselContainer>
  );
}
