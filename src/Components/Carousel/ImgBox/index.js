import React from "react";
import { motion } from "framer-motion";
import "./styles.scss";

const ImgBox = ({ images, current }) => {
  return (
    <div className="img_container">
      {images.map((image, index) => {
        return (
          index === current && (
            <motion.img
              key={index}
              className="image"
              src={image.img}
              alt="carousel-img"
              animate={{ opacity: current === index ? 1 : 0 }}
              transition={{ duration: 2 }}
            />
          )
        );
      })}
    </div>
  );
};

export default ImgBox;
