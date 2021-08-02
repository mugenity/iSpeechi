import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../Contexts/themeContext";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.scss";

const QuotesSlider = (props) => {
  const [pause, setPause] = useState(false);
  const { dark } = useContext(ThemeContext);
  const timer = useRef();
  const [sliderRef, slider] = useKeenSlider({
    spacing: 10,
    slidesPerView: 1,
    centered: true,
    loop: true,
    duration: 1000,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
    mode: "snap",
    breakpoints: {
      "(min-width: 768px)": {
        slidesPerView: 2,
        mode: "free-snap",
      },
      "(min-width: 1200px)": {
        slidesPerView: 3,
        mode: "free-snap",
      },
    },
  });

  useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true);
    });
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false);
    });
  }, [sliderRef]);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 4000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  return (
    <div ref={sliderRef} className={dark ? "keen-slider dark" : "keen-slider"}>
      <div className="keen-slider__slide number-slide1">
        <p>
          <span> Develop a passion</span> for learning. <br /> If you do, you
          will never cease to grow.
        </p>
        <p>
          – <span className="authorName"> ANTHONY</span> J. D'ANGELO
        </p>
      </div>
      <div className="keen-slider__slide number-slide2">
        <p>
          <span> The beautiful thing</span> about learning is <br /> nobody can
          take it away from you.
        </p>
        <p>
          – <span className="authorName"> B.B.</span> KING
        </p>
      </div>
      <div className="keen-slider__slide number-slide3">
        <p>
          <span>Tell me</span> and I forget. Teach me <br /> and I remember.
          Involve me and I learn.
        </p>
        <p>
          - <span className="authorName">BENJAMIN</span> FRANKLIN
        </p>
      </div>
      <div className="keen-slider__slide number-slide1">
        <p>
          <span> Develop a passion</span> for learning. <br /> If you do, you
          will never cease to grow.
        </p>
        <p>
          – <span className="authorName"> ANTHONY</span> J. D'ANGELO
        </p>
      </div>
      <div className="keen-slider__slide number-slide2">
        <p>
          <span> The beautiful thing</span> about learning is <br /> nobody can
          take it away from you.
        </p>
        <p>
          – <span className="authorName"> B.B.</span> KING
        </p>
      </div>
      <div className="keen-slider__slide number-slide3">
        <p>
          <span>Tell me</span> and I forget. Teach me <br /> and I remember.
          Involve me and I learn.
        </p>
        <p>
          - <span className="authorName">BENJAMIN</span> FRANKLIN
        </p>
      </div>
    </div>
  );
};

export default QuotesSlider;
