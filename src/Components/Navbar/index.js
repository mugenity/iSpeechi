import React, { useState, useContext } from "react";
import { Link } from "react-scroll";
import PhoneNavigation from "../PhoneNavigation";
import logo from "../../assets/logo.svg";
import searchIcon from "../../assets/search.svg";
import SubMenu from "../SubMenu";
import SearchOverlay from "../SearchOverlay";
import Burger from "../../assets/Burger.svg";
import CloseBtn from "../../assets/closeBtn.svg";
import { motion } from "framer-motion";

import "./styles.scss";
import Button from "../Button";
import DarkMode from "../DarkMode";
import { ThemeContext } from "../../Contexts/themeContext";

const subMenuCourses = [
  {
    link: "online",
  },
  {
    link: "groupe",
  },
  {
    link: "private",
  },
  {
    link: "school",
  },
  {
    link: "schedule",
  },
];
const subMenuAboutUs = [
  {
    link: "certifications",
  },
  {
    link: "contact us",
  },
  {
    link: "FAQ",
  },
];

const Navbar = () => {
  const [overlaySearch, setOverlaySearch] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const { dark } = useContext(ThemeContext);

  const openOverlaySearch = () => {
    setOverlaySearch(true);
  };
  const closeOverlaySearch = () => {
    setOverlaySearch(false);
  };

  const handleClose = () => {
    setOpenSidebar(false);
  };

  //Animations
  const logoVariant = {
    anim: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeOut",
        stiffness: 55,
        damping: 2,
        type: "spring",
      },
      initial: {
        opacity: 0,
        x: -100,
      },
    },
  };

  return (
    <>
      <SearchOverlay
        overlayState={overlaySearch}
        closeOverlay={closeOverlaySearch}
      />
      <div className={dark ? "navbar_container dark_nav" : "navbar_container"}>
        <motion.div
          animate={logoVariant.anim}
          initial={logoVariant.anim.initial}
          variants={logoVariant}
          className="logo"
        >
          <Link to="/" onClick={handleClose}>
            <img src={logo} alt="logo" />
          </Link>
        </motion.div>
        <nav className="navigation">
          <ul>
            <li className="subMenu navItem">
              <Link to="selectL" smooth={true}>
                Courses
              </Link>
              <SubMenu dark={dark} subMenu={subMenuCourses} />
            </li>
            <li className="navItem">
              <Link to="enroll" smooth={true}>
                Pricing
              </Link>
            </li>
            <li className="navItem">
              <Link to="/">Mission</Link>
            </li>
            <li className="subMenu navItem">
              <Link to="teachers" smooth={true}>
                About us
              </Link>
              <SubMenu subMenu={subMenuAboutUs} />
            </li>
          </ul>
        </nav>
        <div className="options_nav">
          <DarkMode />
          <Link to="placement" smooth={true}>
            <Button customClass="placement_btn">Placement Test</Button>
          </Link>
          <motion.img
            onClick={openOverlaySearch}
            whileTap={{ scale: 1.3 }}
            className="search_icon"
            src={searchIcon}
            alt="search-icon"
          />
          <select className="languages">
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="de">DE</option>
          </select>
          <motion.div
            onClick={() => setOpenSidebar(!openSidebar)}
            whileTap={{ scale: 1.3 }}
            className="burger_menu"
          >
            <img
              src={!openSidebar ? Burger : CloseBtn}
              alt="burger-menu-icon"
            />
          </motion.div>
        </div>
      </div>
      <PhoneNavigation openSidebar={openSidebar} handleClose={handleClose} />
    </>
  );
};

export default Navbar;
