import React from "react";
import "./styles.scss";

const SubMenu = ({ subMenu, dark }) => {
  return (
    <ul className="subMenu_container">
      {subMenu.map((linkItem, index) => {
        return (
          <li
            key={index}
            className={dark ? "subMenu_item dark" : "subMenu_item"}
          >
            <a className="subMenu_link" href="/">
              {linkItem.link}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SubMenu;
