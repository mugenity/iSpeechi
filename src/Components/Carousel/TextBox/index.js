import React from "react";
import "./styles.scss";
import TextSliderCenter from "./TextSliderCenter";
import TextSliderRight from "./TextSliderRight";
import TextSliderLeft from "./TextSliderLeft";
import leftArrow from "../../../assets/leftArrow.svg";
import rightArrow from "../../../assets/rightArrow.svg";
import { motion } from "framer-motion";

const TextBox = ({ nextSlide, prevSlide, current }) => {
  //Animations
  const animElement = {
    textAnim: {
      opacity: current === 0 || 1 || 2 ? 1 : 0,
      transition: {
        duration: 2,
      },
    },
  };
  return (
    <div className="textBoxContainer">
      {current === 0 && <TextSliderCenter animating={animElement} />}
      {current === 1 && <TextSliderRight animating={animElement} />}
      {current === 2 && <TextSliderLeft animating={animElement} />}
      <div className="arrowsBox">
        <motion.img
          onClick={prevSlide}
          whileTap={{ x: -5 }}
          src={leftArrow}
          alt="left-arrow"
        />
        <motion.img
          onClick={nextSlide}
          whileTap={{ x: 5 }}
          src={rightArrow}
          alt="right-arrow"
        />
      </div>
    </div>
  );
};

export default TextBox;
