import React, { useContext } from "react";
import LangBtn from "./LangBtn";
import { uuid } from "uuidv4";

import Turkish from "../../assets/turkey.png";
import Japanese from "../../assets/japan.png";
import Korean from "../../assets/korea.png";
import Spanish from "../../assets/spain.png";
import English from "../../assets/england.png";
import Moroccan from "../../assets/morocco.png";
import French from "../../assets/france.png";
import Russian from "../../assets/russia.png";

import { ThemeContext } from "../../Contexts/themeContext";

import "./styles.scss";

const availableLang = [
  {
    id: uuid(),
    name: "Turkish",
    flag: Turkish,
  },
  {
    id: uuid(),
    name: "Japanese",
    flag: Japanese,
  },
  {
    id: uuid(),
    name: "Korean",
    flag: Korean,
  },
  {
    id: uuid(),
    name: "Spanish",
    flag: Spanish,
  },
  {
    id: uuid(),
    name: "English",
    flag: English,
  },
  {
    id: uuid(),
    name: "Moroccan",
    flag: Moroccan,
  },
  {
    id: uuid(),
    name: "French",
    flag: French,
  },
  {
    id: uuid(),
    name: "Russian",
    flag: Russian,
  },
];

const SelectLang = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <section id="selectL" className="select_lang_container">
      <div className="select_lang_title">
        <h2 style={{ color: dark ? "white" : "#081a45" }}>
          Choose your language
        </h2>
      </div>

      <LangBtn availableLang={availableLang} />
    </section>
  );
};

export default SelectLang;
