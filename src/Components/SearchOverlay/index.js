import React, { useContext } from "react";
import { ThemeContext } from "../../Contexts/themeContext";
import searchIcon from "../../assets/search.svg";
import closeBtn from "../../assets/X.svg";
import "./styles.scss";

const SearchOverlay = ({ overlayState, closeOverlay }) => {
  const { dark } = useContext(ThemeContext);
  return (
    <div
      className={overlayState ? "overlay_container active" : "overlay"}
      style={{ backgroundColor: dark ? "#00aae7" : "white" }}
    >
      <div className="overlay_box">
        <button onClick={closeOverlay} className="closeBtn">
          <img src={closeBtn} alt="closeBtn-icon" />
        </button>
        <div className="infos">
          <h1>What are you looking for ?</h1>
        </div>
        <div className="searchBox">
          <div className="searchInput">
            <label style={{ color: dark ? "white" : "#00aae7" }}>
              Your Search
            </label>
            <br />
            <input type="text" />
          </div>
          <button className="searchBtn">
            <img src={searchIcon} alt="search-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
