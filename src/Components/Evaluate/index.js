import React, { useContext } from "react";
import { ThemeContext } from "../../Contexts/themeContext";
import evaluationImg from "../../assets/evaluation.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../Button";
import "./styles.scss";

const Evaluate = () => {
  const { ref, inView } = useInView();
  const { dark } = useContext(ThemeContext);

  const imageVariant = {
    anim: {
      opacity: inView ? 1 : 0,
      transition: {
        duration: 2,
      },
    },
  };

  const textVariant = {
    anim: {
      top: inView && 0,
      transition: {
        duration: 1,
        yoyo: Infinity,
      },
    },
  };

  return (
    <section
      id="placement"
      className={dark ? "evaluate_container dark" : "evaluate_container"}
    >
      <h2>Find out your Level</h2>
      <div ref={ref} className="evaluate_content">
        <div className="text_box">
          <p>
            Quickly{" "}
            <motion.span variants={textVariant} animate="anim">
              evaluate
            </motion.span>{" "}
            your <br /> proficiency of the language by <br /> passing the
            placement test.
          </p>
          <div className="btn">
            <Button customClass="evaluate_btn">Here</Button>
          </div>
        </div>
        <div className="img_box">
          <motion.img
            variants={imageVariant}
            animate={imageVariant.anim}
            src={evaluationImg}
            alt="evaluation-img"
          />
          <div className="cube"></div>
        </div>
      </div>
    </section>
  );
};

export default Evaluate;
