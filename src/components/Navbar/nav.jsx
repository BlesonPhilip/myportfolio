import React, { useRef } from "react";
import "./nav.css";

const Nav = () => {
  const menu = useRef();

  const menuHandler = () => {
    menu.current.classList.toggle("openMenu");
    const isOpen = menu.current.classList.contains("openMenu");
    document.getElementById("bars").setAttribute("aria-expanded", isOpen);
  };

  return (
    <nav className="navcss">
      <div className="logo">
        <a href="#">Bleson Philip</a>
      </div>
      <ul ref={menu}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <i
        className="ri-menu-4-line"
        id="bars"
        onClick={menuHandler}
        role="button"
        aria-expanded="false"
        tabIndex={0}
      ></i>
    </nav>
  );
};

export default Nav;
