import React from "react";
import { Link } from "react-scroll";
import Button from "../../../Button";
import "./styles.scss";

import checkIcon from "../../../../assets/checkIcon.svg";
import { motion } from "framer-motion";

const TextSliderCenter = ({ animating }) => {
  return (
    <motion.div className="textContent" animate={animating.textAnim}>
      <h4 className="titleCenter">
        Learn with the #1 trusted <span>online language school.</span>
      </h4>
      <div className="checkedInfoBox">
        <div className="checkedInfo">
          <img src={checkIcon} alt="checkIcon" />
          <p>60-minute small group or private classes</p>
        </div>
        <div className="checkedInfo">
          <img src={checkIcon} alt="checkIcon" />
          <p>Learn online anytime 24/7</p>
        </div>
        <div className="checkedInfo">
          <img src={checkIcon} alt="checkIcon" />
          <p>Native-speaking, qualified teachers</p>
        </div>
      </div>
      <div className="btnOption">
        <Link to="enroll" smooth={true}>
          <Button customClass="carousel_btn">Choose your plan</Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default TextSliderCenter;
