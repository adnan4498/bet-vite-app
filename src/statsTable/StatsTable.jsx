import React from "react";
import navbarLogo from "/navbar-logo-svg.svg";
import { Input } from "antd";

import statsLine from "/statsLine.svg";
import searchIcon from "/searchIcon.svg";

const StatsTable = () => {
  return (
    <div className="stats-navbar ">
      <div className="flex items-center 2xl:mt-40 2xl:pl-50">
        <div className="2xl:w-4/12">
          <img src={navbarLogo} className="2xl:w-380" />
        </div>

        <div className="flex items-center justify-around 2xl:w-1200 2xl:pr-30">
          <div className="flex">
            <div className="antd-custom-input">
              <input className="2xl:w-500 2xl:h-55 2xl:rounded-l-xl bg-[#B9A2DF]" />
            </div>
            <div className="2xl:h-55 2xl:bg-white 2xl:w-75 rounded-r-xl flex">
              <img src={searchIcon} className=" 2xl:w-30 2xl:mx-auto" />
            </div>
          </div>
          <img src={statsLine} className="2xl:h-90" />
          <p className="text-white 2xl:text-23 2xl:pr-20">Rules</p>
          <img src={statsLine} className="2xl:h-90" />
          <div className="2xl:leading-29">
            <p className="text-white 2xl:text-23">Balance: 0.00</p>
            <p className="text-white 2xl:text-23">Exposure: 0</p>
          </div>
          <img src={statsLine} className="2xl:h-90" />
          <p className="text-white 2xl:text-23 2xl:pl-25">Micheal. B</p>
        </div>
      </div>
    </div>
  );
};

export default StatsTable;
