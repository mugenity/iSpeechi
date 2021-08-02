import React, { useState } from "react";
import cameraIcon from "../../../../assets/camera.svg";
import "./styles.scss";
import { motion } from "framer-motion";
import Button from "../../../Button";
import VideoModal from "../../../VideoModal";

const TextSliderLeft = ({ animating }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <motion.div className="containerLeft" animate={animating.textAnim}>
      <h4 className="titleLeft">
        <span>What is the Best</span> Method for you ?
      </h4>
      <div className="infoTextLeft">
        <p>
          You will learn the easiest and most practical way to <br /> learn
          languages thanks to <span>iSpeechis method</span>.
        </p>
      </div>
      <div className="btnBoxLeft">
        <Button specialProps={handleOpenModal} customClass="carousel_btn">
          Watch Video | <img src={cameraIcon} alt="camera-icon" />
        </Button>
        {openModal && <VideoModal handleCloseModal={handleCloseModal} />}
      </div>
    </motion.div>
  );
};

export default TextSliderLeft;
