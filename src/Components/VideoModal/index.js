import React from "react";
import { motion } from "framer-motion";
import "./styles.scss";

const VideoModal = ({ handleCloseModal }) => {
  const modalVariant = {
    anim: {
      opacity: 1,
    },
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  };

  return (
    <motion.div
      variants={modalVariant}
      animate="anim"
      onClick={handleCloseModal}
      className="video_modal_container"
    >
      <div className="video_modal_overlay"></div>
      <div className="video_box">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4ofbayvrxEI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </motion.div>
  );
};

export default VideoModal;
