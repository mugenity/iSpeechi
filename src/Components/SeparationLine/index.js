import React, { useContext } from "react";
import { ThemeContext } from "../../Contexts/themeContext";
import "./styles.scss";

const SeparationLine = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <div
      className="separationLine"
      style={{ backgroundColor: dark ? "white" : "#081a45" }}
    ></div>
  );
};

export default SeparationLine;
