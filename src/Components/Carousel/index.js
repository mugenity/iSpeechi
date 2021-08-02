import React, { useState } from "react";
import "./styles.scss";
import TextBox from "./TextBox";
import ImgBox from "./ImgBox";

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="carouselContainer">
      <TextBox current={current} nextSlide={nextSlide} prevSlide={prevSlide} />
      <ImgBox current={current} images={images} />
    </div>
  );
};

export default Carousel;
