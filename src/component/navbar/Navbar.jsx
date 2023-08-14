import React, { useState } from "react";
import navbarLogo from "../../../public/navbar-logo-svg.svg";
import "../navbar/Navbar.css"

import { Button, Card } from "antd";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-navbarBgColor sm:h-90 text-white text-center sm:mt-30 flex justify-between items-center sm:rounded-md h-65 pl-15 pr-15 lg:w-100%">
      <div className="sm:pl-60">
        <img src={navbarLogo} className=" w-150 sm:w-300" alt="Navbar Logo" />
      </div>

      <div className="md:pr-0 ">
        <button
          className="sm:hidden "
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
        <div className="flex 2xl:pr-50">
          <ul
            className={`${
              menuOpen ? "flex sm:flex " : "hidden"
            } sm:flex sm:text-sm sm:space-x-4 flex-col sm:flex-row text-xs `}
          >
            <li className="py-2 2xl:py-7 2xl:px-20 custom-font-family-4 sm:py-0 ">Cricket Bet</li>
            <li className="py-2 2xl:py-7 2xl:px-20 custom-font-family-4 sm:py-0">Football Bet</li>
          </ul>
          <ul
            className={`${
              menuOpen ? "flex sm:flex" : "hidden"
            } sm:flex sm:text-sm sm:space-x-4 flex-col sm:flex-row text-xs`}
          >
            <li className="py-2 2xl:py-7 2xl:px-20 custom-font-family-4 sm:py-0">Casinos</li>
            <li className="py-2 2xl:py-7 2xl:px-20 custom-font-family-4 sm:py-0">Other Games</li>
            <Button className="login-button bg-loginBgColor custom-font-family">Log Out</Button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
