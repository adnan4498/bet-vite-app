import React, { useState } from "react";
import navbarLogo from "@assets/navbar-logo-svg.svg";
import "../navbar/Navbar.css";
// import purpleCurve from "/purpleCurve.svg";
import purpleCurve from "@assets/purpleCurve.svg";
import pinkDot from "@assets/pinkDot.svg";
import purpleSplash from "@assets/purpleSplash.svg";
import daimond from "@assets/daimond.svg";
import purpleEclipse from "@assets/purpleEclipse.svg";
import purpleEclipseRight from "@assets/purpleEclipseRight.svg";
import purpleEclipseRight2 from "@assets/purpleEclipseRight2.svg";
import homeCircle from "@assets/homeCircle.svg";
import daimond2 from "@assets/daimond2.svg";
import daimondBrightness from "@assets/daimondBrightness.svg";

import { Button, Card } from "antd";
import { Link } from "react-router-dom";

const Navbar = ({isHidden , setIsHidden , isTransform , setIsTransform}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="2xl:block lg:block  hidden">
        <img
          src={purpleCurve}
          className="absolute 2xl:-top-90 xl:w-400  lg:-top-110 lg:h-550 lg:w-310 2xl:w-520 2xl:h-610 "
        />
        <img
          src={pinkDot}
          className="absolute 2xl:-top-30 lg:-top-20 lg:w-100 2xl:w-215 lg:z-10 2xl:z-30  z-30"
        />
        <img
          src={purpleSplash}
          className="absolute 2xl:-top-100 xl:w-220 lg:-top-50 lg:w-200 lg:z-0 2xl:w-320 2xl:left-0 "
        />
        <img
          src={daimond}
          class="absolute 2xl:bottom-510 2xl:left-70 xl:w-45 xl:bottom-290 lg:left-15 2xl:w-70 2xl:top-330 lg:bottom-220 lg:w-35"
        />
        <img
          src={purpleEclipse}
          className="absolute 2xl:left-620 2xl:top-130 lg:w-180 lg:left-350 xl:w-250 xl:left-450 lg:top-120 2xl:w-320"
        />

        <img
          src={purpleEclipseRight}
          className="absolute xl:w-660 2xl:right-0 2xl:top-0 2xl:w-1020 lg:w-530 lg:opacity-50 lg:top-50 lg:right-0"
        />
        <img
          src={purpleEclipseRight2}
          className="absolute 2xl:right-0 2xl:top-0 2xl:w-720 lg:w-500 lg:right-0 lg:-top-50 lg:opacity-60"
        />
        <img
          src={homeCircle}
          className="absolute 2xl:-bottom-120 2xl:left-10 2xl:w-130 lg:w-60 lg:right-2  0 xl:left-0 lg:-bottom-180 xl:-bottom-30 xl:w-90"
        />
        <img
          src={homeCircle}
          className="absolute 2xl:-bottom-380 2xl:right-100 xl:right-60 xl:-bottom-190 xl:w-70  2xl:w-90 lg:w-70 lg:-bottom-20"
        />
        {/* <img src={homeCircle} className="absolute 2xl:-bottom-130 2xl:right-60 2xl:w-90 z-10" /> */}
        <img
          src={daimond2}
          className="absolute 2xl:-bottom-300 2xl:right-920 2xl:left-860 2xl:w-150 lg:w-70 lg:left-500 xl:w-90 xl:left-790 xl:-bottom-100 lg:-bottom-85"
        />
        {/* <img src={daimondBrightness} className="absolute 2xl:bottom-10 2xl:right-920 2xl:left-920 2xl:w-150 transform rotate-17"/> */}
        <img
          src={daimond}
          class="absolute 2xl:-bottom-420 z-10 2xl:left-290 xl:-bottom-210 2xl:w-40 transform rotate-12 lg:-bottom-200 lg:w-25 lg:left-120"
        />
      </div>

      <div
        className={`bg-navbarBgColor menu-items ${
          menuOpen ? "h-80" : "h-60"
        } sm:h-90 xl:container lg:w-11/12 xl:mx-auto lg:container lg:mx-auto text-white text-center sm:mt-30 flex justify-between items-center sm:rounded-md ${
          menuOpen ? "h-65" : "h-60"
        } pl-15 pr-15 relative`}
      >
        <div className={`sm:pl-60 ${menuOpen ? "mb-20" : "mb-0"} lg:pl-30`}>
          <Link to="/">
            <img
              src={navbarLogo}
              className={`${isHidden ? "opacity-0 duration-500 w-150 sm:w-300 lg:w-220 2xl:w-300" :"duration-500 w-150 sm:w-300 lg:w-220 2xl:w-300"}`}
            />
          </Link>
        </div>

        <div className={` ${menuOpen ? "mb-20" : "mb-0"}  md:pr-0 lg:pr-30`}>
          <button
            className="sm:hidden "
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
          <div className="sm:flex hidden ">
            <ul
              className={`${
                menuOpen ? "flex sm:flex " : "hidden"
              } sm:flex sm:text-sm sm:space-x-4 flex-col mt- sm:flex-row lg:items-center text-xs lg:text-16 xl:text-18`}
            >
            <li className={`py-2 2xl:py-7 2xl:px-20 custom-font-family-4 sm:py-0 ${isHidden ? 'opacity-100 transition-opacity duration-500' : 'opacity-0 transition-opacity duration-500'}`}>
              <Link to="/Cricket">Home</Link>
            </li>
      
              <li className="py-2 2xl:py-7 2xl:px-20 custom-font-family-4 sm:py-0 ">
                <Link to="/Cricket">Cricket Bet</Link>
              </li>
              <li className="py-2 2xl:py-7 2xl:px-20 custom-font-family-4 sm:py-0 xl:pl-10 lg:pl-10 cursor-pointer">
                <Link to="/football">Football Bet</Link>
              </li>
            </ul>
            <ul
              className={`${
                menuOpen ? "flex sm:flex" : "hidden"
              } sm:flex sm:text-sm sm:space-x-4 flex-col sm:flex-row text-xs lg:items-center lg:text-16 xl:text-18 xl:pl-10 lg:pl-10`}
            >
              <li className="py-2 2xl:py-7 2xl:px-20 custom-font-family-4 sm:py-0 ">
                <Link to="/casinonav">Casino</Link>
              </li>
              <li className="py-2 2xl:py-7 2xl:px-20 custom-font-family-4 sm:py-0 xl:pl-10 xl:pr-10 lg:pl-10 lg:pr-10">
              {isHidden ? <p className="">Testimonials</p> :  <Link to="/othergames"> <p> Other Games </p></Link>}     
              </li>
              <Link to="/">
              <Button className="login-button 2xl:w-100 bg-loginBgColor custom-font-family ">
                Log Out
              </Button>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <div className="sm:hidden block bg-[#1f186b] ">
        <div className={` ${menuOpen ? "mb-40" : "mb-0"}  md:pr-0 lg:pr-30`}>
          {/* <button
            className="sm:hidden "
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            ☰
          </button> */}
          <div className="sm:none flex flex-col text-center 2xl:pr-50 px-20 justify-between">
            <ul
              className={`${
                menuOpen ? "flex sm:flex " : "hidden"
              } sm:flex sm:text-sm sm:space-x-4 flex-col sm:flex-row lg:items-center text-xs lg:text-16 xl:text-18`}
            >
              <li className="py-2 2xl:py-7 pb-15 text-13  text-white 2xl:px-20 custom-font-family-4 sm:py-0 ">
                <Link to="/Cricket">Cricket Bet</Link>
              </li>
              <li className="py-2 2xl:py-7 pb-15 text-13 2xl:px-20 text-white custom-font-family-4 sm:py-0 xl:pl-10 lg:pl-10">
                Football Bet
              </li>
            </ul>
            <ul
              className={`${
                menuOpen ? "flex sm:flex" : "hidden"
              } sm:flex sm:text-sm sm:space-x-4 flex-col sm:flex-row text-xs lg:items-center lg:text-16 xl:text-18 xl:pl-10 lg:pl-10`}
            >
              <li className="py-2 2xl:py-7 pb-15 text-13 2xl:px-20 text-white custom-font-family-4 sm:py-0 ">
                Casinos
              </li>
              <li className="py-2 2xl:py-7 pb-15 text-13 2xl:px-20 text-white custom-font-family-4 sm:py-0 xl:pl-10 xl:pr-10 lg:pl-10 lg:pr-10">
                Other Games
              </li>
              <Button className="login-button sm:w-auto w-100 h-30 mb-20 text-12 text-center mx-auto bg-loginBgColor custom-font-family ">
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
