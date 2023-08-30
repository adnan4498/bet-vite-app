import React, { useState } from "react";
import logo from "@assets/cover-drive-online-home.svg";
import line from "@assets/line.png";
import searchIcon from "@assets/searchIcon.png";
import { Input } from "antd";
import gameIcon from "@assets/game-icon.png";
import fLogo from "@assets/f-logo.png";
import img1 from "@assets/statsImg1.png";
import img2 from "@assets/statsImg2.png";
import img3 from "@assets/statsImg3.png";
import img4 from "@assets/statsImg4.png";
import img5 from "@assets/statsImg5.png";
import img6 from "@assets/statsImg6.png";
import img7 from "@assets/statsImg7.png";
import img8 from "@assets/statsImg8.png";
import rightArrow from "@assets/statsArrow.png";
import downArrow from "@assets/statsDownArrow.png";

import "../stats/Stats.css";
import { Link } from "react-router-dom";

const Stats = ({ setIsHidden, setIsTransform }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="navbar-div lg:flex lg:items-center mt-30 lg:mb-0 ">
        <div className="lg:w-4/12 w-250 lg:ml-50 lg:block mx-auto lg:mb-0 mb-20">
          <Link
            to="/"
            onClick={() => {
              setIsHidden(false), setIsTransform(false);
            }}
          >
            {" "}
            <img src={logo} className="2xl:w-420" />{" "}
          </Link>
        </div>

        <div className="flex lg:justify-between lg:items-center lg:w-7/12 justify-between lg:ml-50 ">
          <div className="lg:flex hidden">
            <div>
              <Input className="lg:w-450 lg:h-60 rounded-2xl bg-[#b9a2df] rounded-r-none" />
            </div>
            <div className="bg-white lg:w-70 lg:h-60 flex lg:items-center lg:justify-center rounded-r-2xl">
              <img src={searchIcon} />
            </div>
          </div>
          <div>
            <img src={line} className="lg:w-4 w-1 lg:block hidden" />
          </div>
          <div className="flex items-center">
            <p className="text-white lg:text-xl text-sm ">Rules</p>
          </div>
          <div>
            <img src={line} className="lg:w-4 w-1" />
          </div>
          <div className="flex items-center">
            <p className="text-white lg:text-xl text-sm">
              Balance 0.00 Exposure: 0
            </p>
          </div>
          <div>
            <img src={line} className="lg:w-4 w-1" />
          </div>
          <div className="flex items-center cursor-pointer">
            <div>
              <p className="text-white lg:text-xl lg:pr-10 text-sm lg:pl-0">
                Micheal. B
              </p>
            </div>
            <div>
              <img src={downArrow} className="lg:w-15 w-7" />
            </div>
          </div>
        </div>
      </div>

      <div className="table-stats-div lg:flex lg:mt-60">
        <div className="lg:mt-120 mt-50 lg:ml-50 w-6/12 ">
          <div className="flex lg:items-center lg:justify-between cursor-pointer">
            <div>
              <p className="text-white lg:text-30">Other</p>
            </div>
            <div className="flex items-center">
              <div>
                <img
                  src={rightArrow}
                  className="lg:w-12 w-7 lg:mr-40 lg:ml-0 ml-12"
                />
              </div>
            </div>
          </div>
          <div className="flex lg:items-center lg:justify-between cursor-pointer lg:mt-18 mt-10">
            <div>
              <p className="text-white lg:text-30">All Sports</p>
            </div>
            <div className="flex items-center">
              <div>
                <img
                  src={rightArrow}
                  className="lg:w-12 w-7 lg:mr-40 lg:ml-0 ml-12"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:mt-0 mt-50  lg:overflow-x-visible overflow-x-auto ">
          <div className="bg-pink-400 flex w-fit  lg:items-center lg:text-xl lg:w-1586 lg:gap-30 gap-20 lg:pl-60 lg:h-70 lg:rounded-top-left">
            <p
              className={
                activeTab === 0
                  ? "active-tab cursor-pointer lg:text-xl text-xs"
                  : "cursor-pointer lg:text-xl text-xs"
              }
              onClick={() => handleTabClick(0)}
            >
              CRICKET
            </p>
            <p
              className={
                activeTab === 1
                  ? "active-tab cursor-pointer lg:text-xl text-xs"
                  : "cursor-pointer lg:text-xl text-xs"
              }
              onClick={() => handleTabClick(1)}
            >
              FOOTBALL
            </p>
            <p
              className={
                activeTab === 2
                  ? "active-tab cursor-pointer lg:text-xl text-xs"
                  : "cursor-pointer lg:text-xl text-xs"
              }
              onClick={() => handleTabClick(2)}
            >
              BOXING
            </p>
            <p
              className={
                activeTab === 3
                  ? "active-tab cursor-pointer lg:text-xl text-xs"
                  : "cursor-pointer lg:text-xl text-xs"
              }
              onClick={() => handleTabClick(3)}
            >
              ANDAR BAHAR
            </p>
            <p
              className={
                activeTab === 4
                  ? "active-tab cursor-pointer lg:text-xl text-xs"
                  : "cursor-pointer lg:text-xl text-xs"
              }
              onClick={() => handleTabClick(4)}
            >
              BACCARAT
            </p>
            <p
              className={
                activeTab === 5
                  ? "active-tab cursor-pointer lg:text-xl text-xs"
                  : "cursor-pointer lg:text-xl text-xs"
              }
              onClick={() => handleTabClick(5)}
            >
              32 CARDS
            </p>
            <p
              className={
                activeTab === 6
                  ? "active-tab cursor-pointer lg:text-xl text-xs"
                  : "cursor-pointer lg:text-xl text-xs"
              }
              onClick={() => handleTabClick(6)}
            >
              TEENPATI
            </p>
            <p
              className={
                activeTab === 7
                  ? "active-tab cursor-pointer lg:text-xl text-xs"
                  : "cursor-pointer lg:text-xl text-xs"
              }
              onClick={() => handleTabClick(7)}
            >
              POKER
            </p>
            <p
              className={
                activeTab === 8
                  ? "active-tab cursor-pointer lg:text-xl text-xs"
                  : "cursor-pointer lg:text-xl text-xs"
              }
              onClick={() => handleTabClick(8)}
            >
              LUCKY 7
            </p>
          </div>

          <div className="bg-white lg:pl-60 lg:w-full w-580 ">
            <div className="lg:flex flex lg:justify-between w-full lg:h-50 items-center ">
              <div>
                <p className="font-bold lg:mt-0 lg:mb-0 mb-10 mt-10 ">Games</p>
              </div>

              <div className="lg:flex  justify-around lg:w-450 w-350 lg:font-bold lg:justify-between lg:pr-60 hidden">
                <div>
                  <p>1</p>
                </div>
                <div>
                  <p>x</p>
                </div>
                <div>
                  <p>2</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-b border-gray-800 bg-white lg:w-full w-580">
            <div className="flex justify-between">
              <div className="w-full flex items-center">
                <p className="lg:pl-60">
                  Ashes Common Market 2023 / Jun 16 2023 3:30PM (IST)
                </p>
              </div>

              <div className="flex justify-end w-full items-center">
                <div className="pr-60">
                  <img src={fLogo} />
                </div>
                <div className="pr-10">
                  <img src={gameIcon} />
                </div>

                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
                <div className="lg:bg-[#4e85b9] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>-</p>
                </div>
                <div className="lg:bg-[#4e85b9] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>-</p>
                </div>
                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>-</p>
                </div>
                <div className="lg:bg-[#4e85b9] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-b border-gray-800 bg-white lg:w-full w-580">
            <div className="flex justify-between">
              <div className="w-full flex items-center">
                <p className="lg:pl-60">
                  Ashes Common Market 2023 / Jun 16 2023 3:30PM (IST)
                </p>
              </div>

              <div className="flex justify-end w-full items-center">
                <div className="pr-60">
                  <img src={fLogo} />
                </div>
                <div className="pr-10">
                  <img src={gameIcon} />
                </div>

                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
                <div className="lg:bg-[#4e85b9] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>-</p>
                </div>
                <div className="lg:bg-[#4e85b9] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>-</p>
                </div>
                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>-</p>
                </div>
                <div className="lg:bg-[#4e85b9] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-b border-gray-800 bg-white lg:w-full w-580">
            <div className="flex justify-between">
              <div className="w-full flex items-center">
                <p className="lg:pl-60">
                  Ashes Common Market 2023 / Jun 16 2023 3:30PM (IST)
                </p>
              </div>

              <div className="flex justify-end w-full items-center">
                <div className="pr-60">
                  <img src={fLogo} />
                </div>
                <div className="pr-10">
                  <img src={gameIcon} />
                </div>

                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
                <div className="lg:bg-[#4e85b9] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>-</p>
                </div>
                <div className="lg:bg-[#4e85b9] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>-</p>
                </div>
                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>-</p>
                </div>
                <div className="lg:bg-[#4e85b9] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-b border-gray-800 bg-white lg:w-full w-580">
            <div className="flex justify-between">
              <div className="w-full flex items-center">
                <p className="lg:pl-60">
                  Ashes Common Market 2023 / Jun 16 2023 3:30PM (IST)
                </p>
              </div>

              <div className="flex justify-end w-full items-center">
                <div className="pr-60">
                  <img src={fLogo} />
                </div>
                <div className="pr-10">
                  <img src={gameIcon} />
                </div>

                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
                <div className="lg:bg-[#4e85b9] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>-</p>
                </div>
                <div className="lg:bg-[#4e85b9] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>-</p>
                </div>
                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>-</p>
                </div>
                <div className="lg:bg-[#4e85b9] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-b border-gray-800 bg-white lg:w-full w-580">
            <div className="flex justify-between">
              <div className="w-full flex items-center">
                <p className="lg:pl-60">
                  Ashes Common Market 2023 / Jun 16 2023 3:30PM (IST)
                </p>
              </div>

              <div className="flex justify-end w-full items-center">
                <div className="pr-60">
                  <img src={fLogo} />
                </div>
                <div className="pr-10">
                  <img src={gameIcon} />
                </div>

                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
                <div className="lg:bg-[#4e85b9] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>-</p>
                </div>
                <div className="lg:bg-[#4e85b9] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>-</p>
                </div>
                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>-</p>
                </div>
                <div className="lg:bg-[#4e85b9] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-b border-gray-800 bg-white lg:w-full w-580">
            <div className="flex justify-between">
              <div className="w-full flex items-center">
                <p className="lg:pl-60">
                  Ashes Common Market 2023 / Jun 16 2023 3:30PM (IST)
                </p>
              </div>

              <div className="flex justify-end w-full items-center">
                <div className="pr-60">
                  <img src={fLogo} />
                </div>
                <div className="pr-10">
                  <img src={gameIcon} />
                </div>

                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
                <div className="lg:bg-[#4e85b9] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>-</p>
                </div>
                <div className="lg:bg-[#4e85b9] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>-</p>
                </div>
                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>-</p>
                </div>
                <div className="lg:bg-[#4e85b9] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-b border-gray-800 bg-white lg:w-full w-580">
            <div className="flex justify-between">
              <div className="w-full flex items-center">
                <p className="lg:pl-60">
                  Ashes Common Market 2023 / Jun 16 2023 3:30PM (IST)
                </p>
              </div>

              <div className="flex justify-end w-full items-center">
                <div className="pr-60">
                  <img src={fLogo} />
                </div>
                <div className="pr-10">
                  <img src={gameIcon} />
                </div>

                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
                <div className="lg:bg-[#4e85b9] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>-</p>
                </div>
                <div className="lg:bg-[#4e85b9] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>-</p>
                </div>
                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>-</p>
                </div>
                <div className="lg:bg-[#4e85b9] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-b border-gray-800 bg-white lg:w-full w-580">
            <div className="flex justify-between">
              <div className="w-full flex items-center">
                <p className="lg:pl-60">
                  Ashes Common Market 2023 / Jun 16 2023 3:30PM (IST)
                </p>
              </div>

              <div className="flex justify-end w-full items-center">
                <div className="pr-60">
                  <img src={fLogo} />
                </div>
                <div className="pr-10">
                  <img src={gameIcon} />
                </div>

                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
                <div className="lg:bg-[#4e85b9] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>-</p>
                </div>
                <div className="lg:bg-[#4e85b9] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>-</p>
                </div>
                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>-</p>
                </div>
                <div className="lg:bg-[#4e85b9] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-b border-gray-800 bg-white lg:w-full w-580">
            <div className="flex justify-between">
              <div className="w-full flex items-center">
                <p className="lg:pl-60">
                  Ashes Common Market 2023 / Jun 16 2023 3:30PM (IST)
                </p>
              </div>

              <div className="flex justify-end w-full items-center">
                <div className="pr-60">
                  <img src={fLogo} />
                </div>
                <div className="pr-10">
                  <img src={gameIcon} />
                </div>

                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
                <div className="lg:bg-[#4e85b9] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>-</p>
                </div>
                <div className="lg:bg-[#4e85b9] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>-</p>
                </div>
                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>-</p>
                </div>
                <div className="lg:bg-[#4e85b9] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-b border-gray-800 bg-white lg:w-full w-580">
            <div className="flex justify-between">
              <div className="w-full flex items-center">
                <p className="lg:pl-60">
                  Ashes Common Market 2023 / Jun 16 2023 3:30PM (IST)
                </p>
              </div>

              <div className="flex justify-end w-full items-center">
                <div className="pr-60">
                  <img src={fLogo} />
                </div>
                <div className="pr-10">
                  <img src={gameIcon} />
                </div>

                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
                <div className="lg:bg-[#4e85b9] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>-</p>
                </div>
                <div className="lg:bg-[#4e85b9] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>-</p>
                </div>
                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>-</p>
                </div>
                <div className="lg:bg-[#4e85b9] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
                <div className="lg:bg-[#fd9595] lg:w-100 lg:flex lg:justify-center lg:items-center lg:h-40">
                  <p>1.2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="all-games-div lg:bg-white w-10/12 lg:ml-317 lg:pt-50 lg:pl-60 lg:pb-30">
        <div>
          <p className="lg:font-bold lg:text-2xl"> All Games</p>
        </div>

        <div className="lg:flex lg:pt-35 ">
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img2} />
          </div>
          <div>
            <img src={img3} />
          </div>
          <div>
            <img src={img4} />
          </div>
        </div>

        <div className="lg:flex gap-5 lg:mt-40">
          <div>
            <img src={img5} />
          </div>
          <div>
            <img src={img6} />
          </div>
          <div>
            <img src={img7} />
          </div>
          <div>
            <img src={img8} />
          </div>
          <div>
            <img src={img7} />
          </div>
          <div>
            <img src={img5} />
          </div>
          <div>
            <img src={img8} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
