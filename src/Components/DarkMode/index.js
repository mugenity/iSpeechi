import React, { useContext } from "react";
import { ThemeContext } from "../../Contexts/themeContext";
import "./styles.scss";

const DarkMode = () => {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  const { setDark } = useContext(ThemeContext);

  const switchTheme = (e) => {
    theme = localStorage.getItem("theme");
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
      setDark(false);
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
      setDark(true);
    }
  };

  return (
    <button
      id="darkMode"
      className={theme === "dark" ? "clickedClass" : ""}
      onClick={(e) => switchTheme(e)}
    ></button>
  );
};

export default DarkMode;
