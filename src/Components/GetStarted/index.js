import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import "./styles.scss";
import HowStartImg from "../../assets/howToStart.png";

const GetStarted = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animationScroll = useAnimation();

  // Animations
  const imageVariant = {
    anim: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 2,
        bounce: 0.3,
        ease: "easeIn",
        when: "beforeChildren",
      },
      initial: {
        x: "-100vw",
        opacity: 0,
        transition: {
          ease: "easeOut",
          duration: 3,
        },
      },
    },
  };

  const boxVariant = {
    anim: {
      opacity: inView ? 1 : 0,
      transition: {
        duration: 1,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      animationScroll.start(imageVariant.anim);
    }
    if (!inView) {
      animationScroll.start(imageVariant.anim.initial);
    }
  }, [inView]);

  return (
    <section className="getStartedContainer">
      <h2>How do I get started ?</h2>
      <div ref={ref} className="contentBox">
        <div className="leftBox">
          <motion.img
            src={HowStartImg}
            alt="howToStart-img"
            animate={animationScroll}
          />
          <div className="cube"></div>
        </div>
        <motion.div
          ref={ref}
          className="rightBox"
          variants={boxVariant}
          animate={boxVariant.anim}
        >
          <div className="card">
            <span className="cardNumber">1</span>
            <h3 className="cardTitle">Select Language</h3>
            <p>
              Select language you want to learn. <br /> Any language you want is
              available.
            </p>
          </div>
          <div className="card">
            <span className="cardNumber">2</span>
            <h3 className="cardTitle">Learn Your Level</h3>
            <p>
              Find out your level with placement tests. <br /> You will take
              both written and speaking exams.
            </p>
          </div>
          <div className="card">
            <span className="cardNumber">3</span>
            <h3 className="cardTitle">Ready to Start</h3>
            <p>
              You can start your courses by planning online lessons. You are
              ready now.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStarted;
