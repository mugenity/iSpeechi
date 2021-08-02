import React from "react";
import Button from "../Button";
import logo from "../../assets/logo.svg";
import linkedin from "../../assets/linkedin.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import youtube from "../../assets/youtube.svg";
import twitter from "../../assets/twitter.svg";
import "./styles.scss";

const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="footer_box">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer_main_content">
          <div className="info">
            <p>
              With students at the centre, our mission is <br /> to empower even
              the busiest people to <br /> master a language and unlock their
              <br /> potential – anytime, anywhere.
            </p>
          </div>
          <div className="company_section table">
            <h3>Company</h3>
            <span>Corporate</span>
            <span>About us</span>
            <span>Blog</span>
            <span>Careers</span>
            <span>Press</span>
          </div>
          <div className="language_section table">
            <h3>Language</h3>
            <span>English</span>
            <span>Japanese</span>
            <span>Moroccan</span>
            <span>Spanish</span>
            <span>Placement Test</span>
          </div>
          <div className="how_works_section table">
            <h3>How it works</h3>
            <span>Our method</span>
            <span>Our platform</span>
          </div>
          <div className="support_section table">
            <h3>Support</h3>
            <span>FAQ</span>
            <span>Contact us</span>
            <div className="btn_box">
              <Button customClass="footer_btn">Become a teacher</Button>
            </div>
          </div>
        </div>
        <div className="social">
          <div className="copyrights">
            <span>© Copyright 2021 iSPEECHI - All Rights Reserved</span>
          </div>
          <div className="social_links">
            <span>
              <img src={linkedin} alt="linkedin-icon" />
            </span>
            <span>
              <img src={facebook} alt="facebook-icon" />
            </span>
            <span>
              <img src={instagram} alt="instagram-icon" />
            </span>
            <span>
              <img src={youtube} alt="youtube-icon" />
            </span>
            <span>
              <img src={twitter} alt="twitter-icon" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
