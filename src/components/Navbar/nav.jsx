import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <>
      <div className="navcss">
        <div className="logo">
          <a href="">Bleson Philip</a>
        </div>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <i className="ri-menu-4-line"></i>
      </div>
    </>
  );
};

export default Nav;
