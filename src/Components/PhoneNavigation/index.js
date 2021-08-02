import React, { useState, useContext } from "react";
import { ThemeContext } from "../../Contexts/themeContext";
import { SidebarData } from "./SidebarData";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import "./styles.scss";

const PhoneNavigation = ({ openSidebar, handleClose }) => {
  const [openSub, setOpenSub] = useState(false);
  const { dark } = useContext(ThemeContext);

  const handleOpenSubMenu = (e) => {
    if (!openSub) {
      setOpenSub(true);
      e.target.previousElementSibling.firstElementChild.firstElementChild.classList.add(
        "show_sub_menu"
      );
    } else {
      setOpenSub(false);
      e.target.previousElementSibling.firstElementChild.firstElementChild.classList.remove(
        "show_sub_menu"
      );
    }
  };

  // Animations
  const sidebarVariant = {
    anim: {
      x: openSidebar ? 0 : "-100%",
      transition: {
        duration: 1,
        ease: "easeInOut",
        when: "beforeChildren",
      },
      initial: {
        x: "-100%",
      },
    },
  };
  const linksVariant = {
    anim: {
      left: openSidebar ? 0 : "-100%",
      opacity: openSidebar ? 1 : "0",
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 0.5,
      },
    },
  };

  return (
    <motion.nav
      className={dark ? "side_bar_container dark" : "side_bar_container"}
      variants={sidebarVariant}
      animate={sidebarVariant.anim}
      initial={sidebarVariant.anim.initial}
    >
      <motion.ul
        variants={sidebarVariant}
        animate={sidebarVariant.anim}
        initial={sidebarVariant.anim.initial}
      >
        {SidebarData.map((item, index) => {
          return (
            <div key={index} className="side_bar_item">
              <Link to={item.path}>
                <motion.li
                  className="side_bar_link"
                  variants={linksVariant}
                  animate={linksVariant.anim}
                  onClick={handleClose}
                >
                  {item.title}
                  <div className="sub_menu_box">
                    <ul>
                      {item.subNav &&
                        item.subNav.map((subItem, index) => (
                          <li key={index} className="sub_menu_link">
                            {subItem.title}
                          </li>
                        ))}
                    </ul>
                  </div>
                </motion.li>
              </Link>
              {item.icon && (
                <img
                  onClick={handleOpenSubMenu}
                  src={item.icon}
                  alt="dropdown-menu-icon"
                />
              )}
            </div>
          );
        })}
      </motion.ul>
    </motion.nav>
  );
};

export default PhoneNavigation;
