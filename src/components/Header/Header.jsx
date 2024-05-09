import React from "react";
import logoLight from "../../assets/Logo_light.png";
import logoDark from "../../assets/Logo_dark.png";
import "./header.css";

import { BsMoonStars, BsSun } from "react-icons/bs";

const Header = ({ onToggle, isDark }) => {
  return (
    <header className="header">
      <div className="container">
        <a href="#" className="logo">
          {isDark ? (
            <img src={logoDark} alt="devfolio dark logo" height={35} />
          ) : (
            <img src={logoLight} alt="devfolio dark logo" height={35} />
          )}
        </a>

        <button className="theme-switch-btn" onClick={onToggle}>
          {isDark ? (
            <span className="icon-container">
              <BsMoonStars />
            </span>
          ) : (
            <span className="icon-container">
              <BsSun />
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
