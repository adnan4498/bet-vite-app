import React, { useState } from "react";
import navbarLogo from "../../../public/navbar-logo-svg.svg";
import "../navbar/Navbar.css";
import purpleCurve from "/purpleCurve.svg";
import pinkDot from "/pinkDot.svg"
import purpleSplash from "/purpleSplash.svg"
import daimond from "/daimond.svg"
import purpleEclipse from "/purpleEclipse.svg"
import purpleEclipseRight from "/purpleEclipseRight.svg"
import purpleEclipseRight2 from "/purpleEclipseRight2.svg"
import homeCircle from "/homeCircle.svg"
import daimond2 from "/daimond2.svg"
import daimondBrightness from "/daimondBrightness.svg"

import { Button, Card } from "antd";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <>
      <div className="hidden xl:block" >
      <img src={purpleCurve} className="absolute 2xl:-top-90 2xl:w-570 2xl:h-610 "/>
      <img src={pinkDot} className="absolute 2xl:-top-30 2xl:w-215 z-30" />
      <img src={purpleSplash} className="absolute 2xl:-top-100 2xl:w-320 2xl:left-0 " />
      <img src={daimond} class="absolute 2xl:bottom-510 2xl:left-70" />
      <img src={purpleEclipse} className="absolute 2xl:left-620 2xl:top-130 2xl:w-320" />

      <img src={purpleEclipseRight} className="absolute 2xl:right-0 2xl:top-0 2xl:w-950" />
      <img src={purpleEclipseRight2} className="absolute 2xl:right-0 2xl:top-0 2xl:w-720" />
      <img src={homeCircle} className="absolute 2xl:bottom-130 2xl:left-10 2xl:w-130" />
      <img src={homeCircle} className="absolute 2xl:-bottom-130 2xl:right-60 2xl:w-90 z-10" />
      <img src={daimond2} className="absolute 2xl:bottom-10 2xl:right-920 2xl:left-920 2xl:w-150"/>
      <img src={daimondBrightness} className="absolute 2xl:bottom-10 2xl:right-920 2xl:left-920 2xl:w-150 transform rotate-17"/>
      <img src={daimond} class="absolute 2xl:-bottom-120 z-10 2xl:left-290 2xl:w-40 transform rotate-12" />
      </div>


      <div className="bg-navbarBgColor sm:h-90 xl:container xl:mx-auto text-white text-center sm:mt-30  flex justify-between items-center sm:rounded-md h-65 pl-15 pr-15 lg:w-100% relative">
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
              <li className="py-2 2xl:py-7 2xl:px-20 custom-font-family-4 sm:py-0 ">
                Cricket Bet
              </li>
              <li className="py-2 2xl:py-7 2xl:px-20 custom-font-family-4 sm:py-0">
                Football Bet
              </li>
            </ul>
            <ul
              className={`${
                menuOpen ? "flex sm:flex" : "hidden"
              } sm:flex sm:text-sm sm:space-x-4 flex-col sm:flex-row text-xs`}
            >
              <li className="py-2 2xl:py-7 2xl:px-20 custom-font-family-4 sm:py-0">
                Casinos
              </li>
              <li className="py-2 2xl:py-7 2xl:px-20 custom-font-family-4 sm:py-0">
                Other Games
              </li>
              <Button className="login-button bg-loginBgColor custom-font-family">
                Log Out
              </Button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
