import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./globalStyles.scss";

import image1 from "./assets/imgSlider1.jpg";
import image2 from "./assets/imgSlider2.jpg";
import image3 from "./assets/imgSlider3.jpg";

import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import QuotesSlider from "./Components/QuotesSlider";
import SeparationLine from "./Components/SeparationLine";
import GetStarted from "./Components/GetStarted";
import SelectLang from "./Components/SelectLang";
import Evaluate from "./Components/Evaluate";
import Enrollment from "./Components/Enrollment";
import Teachers from "./Components/Teachers";
import Footer from "./Components/Footer";

import { ThemeContext } from "./Contexts/themeContext";

const ImageCarousel = [
  {
    img: image1,
  },
  {
    img: image2,
  },
  {
    img: image3,
  },
];

function App() {
  const [dark, setDark] = useState(false);
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  useEffect(() => {
    if (localStorage) {
      theme = localStorage.getItem("theme");
    }

    if (theme === lightTheme || theme === darkTheme) {
      body.classList.add(theme);
      if (theme === darkTheme) {
        setDark(true);
      }
    } else {
      body.classList.add(lightTheme);
      setDark(false);
    }
  }, [dark]);

  return (
    <Router>
      <div className="App_Container">
        <ThemeContext.Provider value={{ dark, setDark }}>
          <Navbar />
          <Carousel images={ImageCarousel} />
          <QuotesSlider />
          <SeparationLine />
          <GetStarted />
          <SeparationLine />
          <SelectLang />
          <Evaluate />
          <SeparationLine />
          <Enrollment />
          <SeparationLine />
          <Teachers />
          <Footer />
        </ThemeContext.Provider>
      </div>
    </Router>
  );
}

export default App;
