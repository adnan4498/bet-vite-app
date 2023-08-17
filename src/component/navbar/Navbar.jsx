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
      <div className="2xl:block lg:block  hidden" >
      <img src={purpleCurve} className="absolute 2xl:-top-90 lg:-top-110 lg:h-550 lg:w-310 2xl:w-570 2xl:h-610 "/>
      <img src={pinkDot} className="absolute 2xl:-top-30 lg:-top-20 lg:w-100 2xl:w-215 lg:z-10 2xl:z-30  z-30" />
      <img src={purpleSplash} className="absolute 2xl:-top-100 lg:-top-50 lg:w-200 lg:z-0 2xl:w-320 2xl:left-0 " />
      <img src={daimond} class="absolute 2xl:bottom-510 2xl:left-70 lg:left-15 2xl:w-70 lg:bottom-380 lg:w-35" />
      <img src={purpleEclipse} className="absolute 2xl:left-620 2xl:top-130 lg:w-180 lg:left-350 lg:top-120 2xl:w-320" />

      <img src={purpleEclipseRight} className="absolute 2xl:right-0 2xl:top-0 2xl:w-950 lg:w-530 lg:opacity-50 lg:top-50 lg:right-0" />
      <img src={purpleEclipseRight2} className="absolute 2xl:right-0 2xl:top-0 2xl:w-720 lg:w-500 lg:right-0 lg:-top-50 lg:opacity-60" />
      <img src={homeCircle} className="absolute 2xl:bottom-130 2xl:left-10 2xl:w-130 lg:w-70 lg:bottom-150" />
      {/* <img src={homeCircle} className="absolute 2xl:-bottom-130 2xl:right-60 2xl:w-90 z-10" /> */}
      <img src={daimond2} className="absolute 2xl:bottom-10 2xl:right-920 2xl:left-920 2xl:w-150 lg:w-90 lg:left-490 lg:bottom-30"/>
      {/* <img src={daimondBrightness} className="absolute 2xl:bottom-10 2xl:right-920 2xl:left-920 2xl:w-150 transform rotate-17"/> */}
      <img src={daimond} class="absolute 2xl:-bottom-160 z-10 2xl:left-290 2xl:w-40 transform rotate-12 lg:-bottom-65 lg:w-30 lg:left-120" /> 
      </div>


      <div className="bg-navbarBgColor sm:h-90 xl:container lg:w-11/12 xl:mx-auto lg:container lg:mx-auto text-white text-center sm:mt-30  flex justify-between items-center sm:rounded-md h-65 pl-15 pr-15  relative">
        <div className="sm:pl-60 lg:pl-30">
          <img src={navbarLogo} className="w-150 sm:w-300 lg:w-220 2xl:w-300" alt="Navbar Logo" />
        </div>

        <div className="md:pr-0 lg:pr-30">
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
              } sm:flex sm:text-sm sm:space-x-4 flex-col sm:flex-row lg:items-center text-xs lg:text-16 xl:text-18`}
            >
              <li className="py-2 2xl:py-7 2xl:px-20 custom-font-family-4 sm:py-0 ">
                Cricket Bet
              </li>
              <li className="py-2 2xl:py-7 2xl:px-20 custom-font-family-4 sm:py-0 xl:pl-10 lg:pl-10">
                Football Bet
              </li>
            </ul>
            <ul
              className={`${
                menuOpen ? "flex sm:flex" : "hidden"
              } sm:flex sm:text-sm sm:space-x-4 flex-col sm:flex-row text-xs lg:items-center lg:text-16 xl:text-18 xl:pl-10 lg:pl-10`}
            >
              <li className="py-2 2xl:py-7 2xl:px-20 custom-font-family-4 sm:py-0 ">
                Casinos
              </li>
              <li className="py-2 2xl:py-7 2xl:px-20 custom-font-family-4 sm:py-0 xl:pl-10 xl:pr-10 lg:pl-10 lg:pr-10">
                Other Games
              </li>
              <Button className="login-button bg-loginBgColor custom-font-family ">
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
