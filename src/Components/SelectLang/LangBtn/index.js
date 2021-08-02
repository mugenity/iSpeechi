import React from "react";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import leftArrow from "../../../assets/leftArrow2.svg";
import rightArrow from "../../../assets/rightArrow2.svg";
import "./styles.scss";

const LangBtn = ({ availableLang }) => {
  const [sliderRef, slider] = useKeenSlider({
    spacing: 2,
    slidesPerView: 8,
    centered: true,
    loop: true,
    controls: true,
    mode: "snap",
    breakpoints: {
      "(max-width: 1200px)": {
        slidesPerView: 5,
        mode: "free-snap",
      },
      "(max-width: 900px)": {
        slidesPerView: 4,
        mode: "free-snap",
      },
      "(max-width: 700px)": {
        slidesPerView: 3,
        mode: "free-snap",
      },
      "(max-width: 560px)": {
        slidesPerView: 2,
        mode: "free-snap",
      },
    },
  });

  const prevSlide = () => {
    slider.prev();
  };
  const nextSlide = () => {
    slider.next();
  };

  return (
    <div ref={sliderRef} className="languages_box keen-slider">
      {availableLang.map((lang) => (
        <div key={lang.id} className="keen-slider__slide number-slide1">
          <button className="lang_btn_box">
            <img className="flag" src={lang.flag} alt="flag-img" />
            <span> {lang.name} </span>
          </button>
        </div>
      ))}
      <div className="lang_arrow_box">
        <img onClick={prevSlide} src={leftArrow} alt="left-arrow" />
        <img onClick={nextSlide} src={rightArrow} alt="right-arrow" />
      </div>
    </div>
  );
};

export default LangBtn;
