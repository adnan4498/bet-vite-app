import { Button, Card } from "antd";
import React from "react";
import "../matchesBetting/MatchesBetting.css";
import indiaIcon from "/indiaIcon.svg";
import pakistanIcon from "/pakistanIcon.svg";
import austriliaIcon from "/australiaIcon.svg";
import englandIcon from "/englandIcon.svg";
import africanIcon from "/africanIcon.svg";

import plusSign from "/plusSign.svg";
import worldCupTag from "/worldCupTag.svg";
import locationTag from "/locationTag.svg";

import purpleEclipseBetting from "/purpleEclipseBettig.svg";
import bettingCircle from "/circleBetting.svg"
import pinkEclipseBetting from "/pinkEclipseBetting.svg"

const MatchesBetting = () => {
  return (
    <>
    <div className="relative">
      <img
        src={purpleEclipseBetting}
        className="absolute 2xl:left-0 2xl:-top-100 2xl:h-670"
      />
      <img src={bettingCircle} className="absolute 2xl:right-0 2xl:-top-255 2xl:w-170 z-50" />
      <div className="-z-1">
      <img src={pinkEclipseBetting} className="absolute 2xl:right-0 2xl:-top-250 -z-1" />
      </div>

      <div className="container mx-auto ">
        <div className="container-2 relative">
          <div className="text-white 2xl:text-60 custom-font-family 2xl:mt-150 z-10">
            All Matches For Betting
          </div>

          <div className="text-[#d8d0d0] 2xl:text-16 2xl:mt-20 2xl:pr-18  2xl:mb-50 custom-font-family-2 flex justify-between see-all-matches-hover z-10 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phaselluspharetra <br></br> mi ut leo pulvinar laoreet.
            <Button className="login-button bg-loginBgColor 2xl:h-47 rounded-xl see-all-matches-hover ">
              See All Matches
            </Button>
          </div>

          <div className="text-white 2xl:mb-30">
            <div className="card-div flex">
              <div className="flex">
                <div className="2xl:w-660 bg-cardDarkBlue card-css 2xl:mr-30">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660  flex items-center flex-col justify-center line-height custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="text-size-one-day-match">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-size-match-date-time">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-500"
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex justify-between w-370">
                          <div>
                            <img
                              className="2xl:w-85 2xl:border-4 2xl:border-[#FFBB00] 2xl:rounded-full"
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5">
                              168 Point
                            </h1>
                          </div>
                          <div className="pt-21">
                            <h1 className="2xl:text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 2xl:border-4 2xl:border-[#FFBB00] 2xl:rounded-full"
                              src={pakistanIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25">
                              Pakistan
                            </h1>
                            <h1 className="2xl:text-white text-center  2xl:mt-5">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between 2xl:h-70 2xl:mt-45">
                        <div className="flex 2xl:bg-cardPurple 2xl:w-465 justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs 2xl:pl-10 ">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 2xl:text-xs">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex justify-center items-center 2xl:bg-[#060041] 2xl:w-110 rounded-r-lg">
                          <img
                            className="2xl:w-30"
                            src={plusSign}
                            alt="Plus Sign"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="2xl:w-660 bg-cardDarkBlue card-css">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660 flex items-center flex-col justify-center line-height custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="text-size-one-day-match">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-size-match-date-time">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue 2xl:w-500 rounded-r-lg"
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex justify-between w-370">
                          <div>
                            <img
                              className="2xl:w-85 2xl:border-4 2xl:border-[#FFBB00] 2xl:rounded-full"
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5">
                              168 Point
                            </h1>
                          </div>
                          <div className="pt-21">
                            <h1 className="2xl:text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 2xl:border-4 2xl:border-[#FFBB00] 2xl:rounded-full"
                              src={englandIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25">
                              England
                            </h1>
                            <h1 className="2xl:text-white text-center  2xl:mt-5">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between 2xl:h-70 2xl:mt-45">
                        <div className="flex 2xl:bg-cardPurple 2xl:w-465 justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs 2xl:pl-10 ">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 2xl:text-xs">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex justify-center items-center 2xl:bg-[#060041] 2xl:w-110 rounded-r-lg">
                          <img
                            className="2xl:w-30"
                            src={plusSign}
                            alt="Plus Sign"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=""></div>
            </div>
          </div>

          <div className="card-div flex">
            <div className="flex ">
              <div className="2xl:w-660 bg-cardDarkBlue card-css 2xl:mr-30">
                <div className="flex card-content">
                  <div
                    className="2xl:text-white flex 2xl:w-660 items-center flex-col justify-center line-height custom-font-family-2"
                    // style={{ flex: "28%" }}
                  >
                    <h1 className="text-size-one-day-match">One Day Match</h1>
                    <Button className="login-button bg-loginBgColor 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                      03:45 AM
                    </Button>
                    <h1 className="text-size-match-date-time">6 Jul 2023</h1>
                  </div>
                  <div
                    className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-500"
                    // style={{ flex: "63%", color: "black" }}
                  >
                    <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                      <div className="flex justify-between w-370">
                        <div>
                          <img
                            className="2xl:w-85 2xl:border-4 2xl:border-[#FFBB00] 2xl:rounded-full"
                            src={pakistanIcon}
                          />
                          <h1 className="2xl:text-white text-center 2xl:mt-25">
                            Pakistan
                          </h1>
                          <h1 className="2xl:text-white text-center 2xl:mt-5">
                            168 Point
                          </h1>
                        </div>
                        <div className="pt-21">
                          <h1 className="2xl:text-[#FFBD00] 2xl:text-2xl custom-font-family">
                            vs
                          </h1>
                        </div>
                        <div>
                          <img
                            className="2xl:w-85 2xl:border-4 2xl:border-[#FFBB00] 2xl:rounded-full"
                            src={austriliaIcon}
                          />
                          <h1 className="2xl:text-white text-center 2xl:mt-25">
                            Austrailia
                          </h1>
                          <h1 className="2xl:text-white text-center  2xl:mt-5">
                            168 Point
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between 2xl:h-70 2xl:mt-45">
                      <div className="flex 2xl:bg-cardPurple 2xl:w-465 justify-around">
                        <div className="flex justify-center items-center 2xl:ml-8">
                          <img
                            className="2xl:w-20"
                            src={worldCupTag}
                            alt="World Cup Tag"
                          />
                          <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs 2xl:pl-10 ">
                            World Cup
                          </h1>
                        </div>
                        <div className="flex justify-center items-center">
                          <img
                            className="2xl:w-15"
                            src={locationTag}
                            alt="World Cup Tag"
                          />
                          <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 2xl:text-xs">
                            1234 California 10020
                          </h1>
                        </div>
                      </div>
                      <div className="2xl:text-white flex justify-center items-center 2xl:bg-[#060041] 2xl:w-110 rounded-r-lg">
                        <img
                          className="2xl:w-30"
                          src={plusSign}
                          alt="Plus Sign"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="2xl:w-660 bg-cardDarkBlue card-css">
                <div className="flex card-content">
                  <div
                    className="2xl:text-white 2xl:w-660 flex items-center flex-col justify-center line-height custom-font-family-2"
                    // style={{ flex: "28%" }}
                  >
                    <h1 className="text-size-one-day-match">One Day Match</h1>
                    <Button className="login-button bg-loginBgColor 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                      03:45 AM
                    </Button>
                    <h1 className="text-size-match-date-time">6 Jul 2023</h1>
                  </div>
                  <div
                    className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-500"
                    // style={{ flex: "63%", color: "black" }}
                  >
                    <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                      <div className="flex justify-between w-370">
                        <div>
                          <img
                            className="2xl:w-85 2xl:border-4 2xl:border-[#FFBB00] 2xl:rounded-full"
                            src={africanIcon}
                          />
                          <h1 className="2xl:text-white text-center 2xl:mt-25">
                            South Africa
                          </h1>
                          <h1 className="2xl:text-white text-center 2xl:mt-5">
                            168 Point
                          </h1>
                        </div>
                        <div className="pt-21">
                          <h1 className="2xl:text-[#FFBD00] 2xl:text-2xl custom-font-family">
                            vs
                          </h1>
                        </div>
                        <div>
                          <img
                            className="2xl:w-85 2xl:border-4 2xl:border-[#FFBB00] 2xl:rounded-full"
                            src={indiaIcon}
                          />
                          <h1 className="2xl:text-white text-center 2xl:mt-25">
                            India
                          </h1>
                          <h1 className="2xl:text-white text-center  2xl:mt-5">
                            168 Point
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between 2xl:h-70 2xl:mt-45">
                      <div className="flex 2xl:bg-cardPurple 2xl:w-465 justify-around">
                        <div className="flex justify-center items-center 2xl:ml-8">
                          <img
                            className="2xl:w-20"
                            src={worldCupTag}
                            alt="World Cup Tag"
                          />
                          <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs 2xl:pl-10 ">
                            World Cup
                          </h1>
                        </div>
                        <div className="flex justify-center items-center">
                          <img
                            className="2xl:w-15"
                            src={locationTag}
                            alt="World Cup Tag"
                          />
                          <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 2xl:text-xs">
                            1234 California 10020
                          </h1>
                        </div>
                      </div>
                      <div className="2xl:text-white flex justify-center items-center 2xl:bg-[#060041] 2xl:w-110 rounded-r-lg">
                        <img
                          className="2xl:w-30"
                          src={plusSign}
                          alt="Plus Sign"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=""></div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default MatchesBetting;
