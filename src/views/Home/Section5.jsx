import React from "react";
import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const Section5Container = styled.div`
  width: 100%;
  min-height: 40vh;
  margin-top: 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .title {
    color: #494d5f;
    font-size: 40px;
  }
  img {
    width: 100%;
    border: 2px solid white;
  }
`;

const items = [
  <img
    src="https://faizan-studio.com/wp-content/uploads/2021/11/02-18.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="https://faizan-studio.com/wp-content/uploads/2021/11/03-14.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="https://faizan-studio.com/wp-content/uploads/2021/11/07-11.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="https://faizan-studio.com/wp-content/uploads/2021/11/04-13.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="https://faizan-studio.com/wp-content/uploads/2021/11/06-14.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="https://faizan-studio.com/wp-content/uploads/2021/11/08-11.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="https://faizan-studio.com/wp-content/uploads/2021/11/09-10.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="https://faizan-studio.com/wp-content/uploads/2021/11/01-22.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
];

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 6 },
};

export default function Section5() {
  return (
    <Section5Container>
      <h6 className="title">
        <span>Our Services</span>
      </h6>
      <AliceCarousel
        mouseTracking
        infinite
        items={items}
        responsive={responsive}
      />
    </Section5Container>
  );
}
