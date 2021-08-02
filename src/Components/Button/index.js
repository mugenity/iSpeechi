import React from "react";
import { motion } from "framer-motion";
import "./styles.scss";

const Button = ({ children, customClass, specialProps }) => {
  return (
    <motion.button
      onClick={specialProps}
      className={customClass}
      whileTap={{ scale: 1.2 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
