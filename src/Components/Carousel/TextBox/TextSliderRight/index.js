import React from "react";
import { Link } from "react-scroll";
import Button from "../../../Button";
import "./styles.scss";
import { motion } from "framer-motion";

const TextSliderRight = ({ animating }) => {
  return (
    <motion.div className="container" animate={animating.textAnim}>
      <h4 className="title">
        <span>Learning</span> Become More Conductive and <span>Fun</span> <br />{" "}
        with Small Group on <span>iSpeechi</span> !
      </h4>
      <div className="infoText">
        <p>Difficult to focus in a big class ?</p>
        <p>
          Let’s try to join the Semiprivate class <br /> with
          <span> 3 students/class.</span>
        </p>
      </div>
      <div className="btnBox">
        <Link to="selectL" smooth={true}>
          <Button customClass="carousel_btn">Choose Language</Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default TextSliderRight;
