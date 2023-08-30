import { Button, Card } from "antd";
import React from "react";
import "../matchesBetting/MatchesBetting.css";
import indiaIcon from "@assets/indiaIcon.svg";
import pakistanIcon from "@assets/pakistanIcon.svg";
import austriliaIcon from "@assets/australiaIcon.svg";
import englandIcon from "@assets/englandIcon.svg";
import africanIcon from "@assets/africanIcon.svg";

import plusSign from "@assets/plusSign.svg";
import worldCupTag from "@assets/worldCupTag.svg";
import locationTag from "@assets/locationTag.svg";
import half from "@assets/halfCircle.svg";
import purpleEclipseBetting from "@assets/purpleEclipseBettig.svg";
import Vector1 from "@assets/Vector1.svg";
import Vector2 from "@assets/Vector2.svg";
import Vector3 from "@assets/Vector3.svg";
import Vector4 from "@assets/Vector4.svg";
import halfCircle from "@assets/howItWorkHalfCircle.svg";
import circle from "@assets/smallCircleBettingFeature.svg";
import daimond from "@assets/daimond.svg";
import daimond2 from "@assets/daimond2.svg";

// import './MatchesCard.css'

const MatchesCard4 = () => {
  return (
    <>
      <div className="2xl:block 2xl:relative lg:block hidden">
        {/* <img src={half} alt="" className="absolute right-0 top-900 2xl:w-0" /> */}
        {/* <img src={half} alt="" className="absolute right-0 top-900"/> */}
        <img src={Vector4} className="absolute 2xl:right-0 " />
        <img src={Vector3} className="absolute 2xl:-left-130 opacity-70 " />
        <img src={circle} className="absolute 2xl:w-120" />
        <div className="relative">
          <img
            src={circle}
            className="absolute 2xl:w-250 2xl:-right-182 2xl:top-1200"
          />
          <img
            src={daimond}
            className="absolute 2xl:w-200 2xl:-right-150 lg:w-0 2xl:top-100"
          />
          <img
            src={daimond2}
            className="absolute 2xl:w-250 lg:w-70 lg:top-1150 2xl:-left-150 2xl:top-900"
          />
            <img
            src={daimond2}
            className="absolute 2xl:w-180 lg:w-70 lg:top-1150 2xl:-left-150 2xl:top-2200"
          />
          
          <img src={Vector4} className="absolute lg:right-0 2xl:top-0 lg:top-700 lg:w-480 2xl:right-0 " />

        </div>
      </div>
      
      <div className="2xl:blur" />


      <div className="container mx-auto 2xl:relative 2xl:block hidden">
        <div className="container-2">
          <div>
            <h2 className=" text-white custom-font-family 2xl:text-50 text-center 2xl:mt-100 2xl:mb-40 ">
              Football Matches
            </h2>
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
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
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
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
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
                          <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
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
                          <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
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
          {/* 
      <div className="flex justify-center 2xl:mt-60">
        <Button className="login-button bg-loginBgColor 2xl:w-135 2xl:h-45 rounded-lg">Show More</Button>
        </div> */}
        </div>

        <div className="text-white 2xl:mb-30 2xl:mt-30 container-2">
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
                          <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
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
                          <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
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

        <div className="card-div flex container-2">
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
                        <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
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
                        <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
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

        <div className="container-2 relative">
          <img
            src={purpleEclipseBetting}
            alt=""
            className="absolute -left-300  top-40"
            style={{ zIndex: -1 }}
          />
          <img
            src={Vector1}
            alt=""
            className="absolute -left-300  "
            style={{ zIndex: -1, top: "550px" }}
          />
          <img
            src={Vector2}
            alt=""
            className="absolute -left-300 "
            style={{ zIndex: -1, top: "550px" }}
          />
          <img
            src={Vector3}
            alt=""
            className="absolute -right-265 "
            style={{ zIndex: -1, top: "150px" }}
          />
          <img
            src={Vector4}
            alt=""
            className="absolute -right-265 "
            style={{ zIndex: -1, top: "50px" }}
          />

          {/* <div>
        <h2 className=" text-white custom-font-family 2xl:text-50 text-center 2xl:mt-150 2xl:mb-40 ">
          Football Matches
        </h2>
      </div> */}
          <div className="text-white 2xl:mb-30 2xl:mt-30">
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
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
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
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
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

          <div className="card-div flex mb-30">
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
                          <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
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
                          <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
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

          {/* <div className="flex justify-center 2xl:mt-60">
        <Button className="login-button bg-loginBgColor 2xl:w-135 2xl:h-45 rounded-lg">Show More</Button>
        </div> */}
        </div>

        <div className="container-2 relative">
          <img
            src={halfCircle}
            alt=""
            className="absolute -left-300 "
            style={{ zIndex: -1, top: "800px" }}
          />
          {/* <div>
        <h2 className=" text-white custom-font-family 2xl:text-50 text-center 2xl:mt-150 2xl:mb-40 ">
          Boxing Matches
        </h2>
      </div> */}
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
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
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
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
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
                          <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
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
                          <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
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

          {/* <div className="flex justify-center 2xl:mt-60">
            <Button className="login-button bg-loginBgColor 2xl:w-135 2xl:h-45 rounded-lg">
              Show More
            </Button>
          </div> */}
        </div>
      </div>




      <div className="2xl:container 2xl:hidden lg:block hidden  2xl:mx-auto 2xl:mt-0 lg:mt-40 ">
        <div className="relative container-2">
          <div className="container-3">
          <div className="text-white 2xl:text-60 lg:mb-30 2xl:mb-50  lg:text-40  text-center custom-font-family 2xl:mt-150 z-10 text-26 2xl:pb-0 pb-10 ">
            Cricket Matches
          </div>

          {/* <div className="text-[#d8d0d0] lg:mt-0 lg:mb-20 2xl:text-16 2xl:mt-20 mt-10 lg:text-15  2xl:-mr-13 2xl:mb-50 custom-font-family-2 items-center 2xl:text-left text-center 2xl:flex 2xl:flex-row flex lg:flex-row flex-col justify-between see-all-matches-hover z-10 text-12 ">
            <div className="lg:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phaselluspharetra <br className="2xl:block hidden"></br> mi ut leo pulvinar laoreet. 
            </div>
            <div className="2xl:w-150 w-full lg:text-right">
            <Button className="login-button 2xl:text-14   bg-loginBgColor 2xl:h-47 2xl:w-150 lg:w-100 w-11/12 text-9 h-33 2xl:mt-0 2xl:mb-0 items-center mt-20 mb-20 rounded-xl see-all-matches-hover ">
              See All Matches
            </Button>
            </div>
          </div> */}

          <div className="text-white 2xl:mb-30 w-full 2xl:px-0 px-20 lg:px-0 ">
            <div className="card-div flex 2xl:justify-start w-full">
              <div className="2xl:flex max-w-full w-full lg:flex">
                <div className="2xl:w-660 w-full h-149 2xl:h-319 lg:mr-15  bg-cardDarkBlue card-css 2xl:mr-30">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="  text-8 2xl:text-17">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor text-7 2xl:text-17 w-60 h-27 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-8 2xl:text-17 ">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-430 w-9/12 h-149 2xl:h-319 "
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex 2xl:justify-between justify-around w-370 2xl:pt-0 pt-15">
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full "
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                          <div className="2xl:pt-21 pt-8">
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full"
                              src={pakistanIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              Pakistan
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                        <div className="flex  2xl:h-70 2xl:mt-35 mt-22">
                        <div className="flex 2xl:bg-cardPurple bg-cardPurple 2xl:w-465 w-280 2xl:h-70 h-25  justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8 ">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs text-8 2xl:pl-10 pl-4">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 text-8 2xl:text-xs pl-4">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex 2xl:justify-center 2xl:items-center  2xl:bg-[#060041] bg-[#060041] 2xl:w-110 w-45  2xl:rounded-r-lg rounded-r-lg ">
                          <img
                            className="2xl:w-30 w-17 mx-auto "
                            src={plusSign}
                            alt="Plus Sign"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="2xl:w-660 w-full h-149 2xl:h-319 bg-cardDarkBlue card-css 2xl:mr-30 2xl:mt-0 lg:mt-0 mt-20">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="  text-8 2xl:text-17">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor text-7 2xl:text-17 w-60 h-27 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-8 2xl:text-17 ">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-430 w-9/12 h-149 2xl:h-319 "
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex 2xl:justify-between justify-around w-370 2xl:pt-0 pt-15">
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full "
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                          <div className="2xl:pt-21 pt-8">
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full"
                              src={pakistanIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              Pakistan
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                        <div className="flex  2xl:h-70 2xl:mt-35 mt-22">
                        <div className="flex 2xl:bg-cardPurple bg-cardPurple 2xl:w-465 w-280 2xl:h-70 h-25  justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8 ">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs text-8 2xl:pl-10 pl-4">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 text-8 2xl:text-xs pl-4">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex 2xl:justify-center 2xl:items-center  2xl:bg-[#060041] bg-[#060041] 2xl:w-110 w-45  2xl:rounded-r-lg rounded-r-lg ">
                          <img
                            className="2xl:w-30 w-17 mx-auto "
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

          <div className="text-white 2xl:mb-30 w-full 2xl:px-0 px-20 lg:px-0 2xl:mt-0 mt-20">
            <div className="card-div flex 2xl:justify-start w-full">
              <div className="2xl:flex max-w-full w-full lg:flex ">
                <div className="2xl:w-660 w-full h-149 2xl:h-319 bg-cardDarkBlue lg:mr-15 card-css 2xl:mr-30">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="  text-8 2xl:text-17">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor text-7 2xl:text-17 w-60 h-27 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-8 2xl:text-17 ">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-430 w-9/12 h-149 2xl:h-319 "
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex 2xl:justify-between justify-around w-370 2xl:pt-0 pt-15">
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full "
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                          <div className="2xl:pt-21 pt-8">
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full"
                              src={pakistanIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              Pakistan
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                        <div className="flex  2xl:h-70 2xl:mt-35 mt-22">
                        <div className="flex 2xl:bg-cardPurple bg-cardPurple 2xl:w-465 w-280 2xl:h-70 h-25  justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8 ">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs text-8 2xl:pl-10 pl-4">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 text-8 2xl:text-xs pl-4">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex 2xl:justify-center 2xl:items-center  2xl:bg-[#060041] bg-[#060041] 2xl:w-110 w-45  2xl:rounded-r-lg rounded-r-lg ">
                          <img
                            className="2xl:w-30 w-17 mx-auto "
                            src={plusSign}
                            alt="Plus Sign"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="2xl:w-660 w-full h-149 2xl:h-319 bg-cardDarkBlue card-css 2xl:mr-30 lg:mt-0 2xl:mt-0 mt-20">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="  text-8 2xl:text-17">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor text-7 2xl:text-17 w-60 h-27 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-8 2xl:text-17 ">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-430 w-9/12 h-149 2xl:h-319 "
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex 2xl:justify-between justify-around w-370 2xl:pt-0 pt-15">
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full "
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                          <div className="2xl:pt-21 pt-8">
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full"
                              src={pakistanIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              Pakistan
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                        <div className="flex  2xl:h-70 2xl:mt-35 mt-22">
                        <div className="flex 2xl:bg-cardPurple bg-cardPurple 2xl:w-465 w-280 2xl:h-70 h-25  justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8 ">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs text-8 2xl:pl-10 pl-4">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 text-8 2xl:text-xs pl-4">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex 2xl:justify-center 2xl:items-center  2xl:bg-[#060041] bg-[#060041] 2xl:w-110 w-45  2xl:rounded-r-lg rounded-r-lg ">
                          <img
                            className="2xl:w-30 w-17 mx-auto "
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
            {/* <div className="flex justify-center w-full mt-10">
              <Button className="login-button 2xl:left-15 lg:w-95 2xl:mt-50 2xl:text-14 bg-loginBgColor 2xl:h-47 2xl:w-150  text-9 w-full h-33 2xl:mb-0 items-center mt-20 mb-20 rounded-xl see-all-matches-hover ">
                Show More
              </Button>
            </div> */}
          </div>
        </div>
      </div>
      </div>
      
      <div className="2xl:container 2xl:hidden lg:block hidden  2xl:mx-auto 2xl:mt-0 lg:mt-40 ">
        <div className="relative container-2">
          <div className="container-3">
          {/* <div className="text-white 2xl:text-60 lg:mb-30 2xl:mb-50  lg:text-40  text-center custom-font-family 2xl:mt-150 z-10 text-26 2xl:pb-0 pb-10 ">
            Cricket LAST
          </div> */}

          {/* <div className="text-[#d8d0d0] lg:mt-0 lg:mb-20 2xl:text-16 2xl:mt-20 mt-10 lg:text-15  2xl:-mr-13 2xl:mb-50 custom-font-family-2 items-center 2xl:text-left text-center 2xl:flex 2xl:flex-row flex lg:flex-row flex-col justify-between see-all-matches-hover z-10 text-12 ">
            <div className="lg:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phaselluspharetra <br className="2xl:block hidden"></br> mi ut leo pulvinar laoreet. 
            </div>
            <div className="2xl:w-150 w-full lg:text-right">
            <Button className="login-button 2xl:text-14   bg-loginBgColor 2xl:h-47 2xl:w-150 lg:w-100 w-11/12 text-9 h-33 2xl:mt-0 2xl:mb-0 items-center mt-20 mb-20 rounded-xl see-all-matches-hover ">
              See All Matches
            </Button>
            </div>
          </div> */}

          <div className="text-white 2xl:mb-30 w-full 2xl:px-0 px-20 lg:px-0 ">
            <div className="card-div flex 2xl:justify-start w-full">
              <div className="2xl:flex max-w-full w-full lg:flex">
                <div className="2xl:w-660 w-full h-149 2xl:h-319 lg:mr-15  bg-cardDarkBlue card-css 2xl:mr-30">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="  text-8 2xl:text-17">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor text-7 2xl:text-17 w-60 h-27 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-8 2xl:text-17 ">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-430 w-9/12 h-149 2xl:h-319 "
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex 2xl:justify-between justify-around w-370 2xl:pt-0 pt-15">
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full "
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                          <div className="2xl:pt-21 pt-8">
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full"
                              src={pakistanIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              Pakistan
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                        <div className="flex  2xl:h-70 2xl:mt-35 mt-22">
                        <div className="flex 2xl:bg-cardPurple bg-cardPurple 2xl:w-465 w-280 2xl:h-70 h-25  justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8 ">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs text-8 2xl:pl-10 pl-4">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 text-8 2xl:text-xs pl-4">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex 2xl:justify-center 2xl:items-center  2xl:bg-[#060041] bg-[#060041] 2xl:w-110 w-45  2xl:rounded-r-lg rounded-r-lg ">
                          <img
                            className="2xl:w-30 w-17 mx-auto "
                            src={plusSign}
                            alt="Plus Sign"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="2xl:w-660 w-full h-149 2xl:h-319 bg-cardDarkBlue card-css 2xl:mr-30 2xl:mt-0 lg:mt-0 mt-20">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="  text-8 2xl:text-17">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor text-7 2xl:text-17 w-60 h-27 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-8 2xl:text-17 ">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-430 w-9/12 h-149 2xl:h-319 "
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex 2xl:justify-between justify-around w-370 2xl:pt-0 pt-15">
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full "
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                          <div className="2xl:pt-21 pt-8">
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full"
                              src={pakistanIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              Pakistan
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                        <div className="flex  2xl:h-70 2xl:mt-35 mt-22">
                        <div className="flex 2xl:bg-cardPurple bg-cardPurple 2xl:w-465 w-280 2xl:h-70 h-25  justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8 ">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs text-8 2xl:pl-10 pl-4">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 text-8 2xl:text-xs pl-4">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex 2xl:justify-center 2xl:items-center  2xl:bg-[#060041] bg-[#060041] 2xl:w-110 w-45  2xl:rounded-r-lg rounded-r-lg ">
                          <img
                            className="2xl:w-30 w-17 mx-auto "
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

          <div className="text-white 2xl:mb-30 w-full 2xl:px-0 px-20 lg:px-0 2xl:mt-0 mt-20">
            <div className="card-div flex 2xl:justify-start w-full">
              <div className="2xl:flex max-w-full w-full lg:flex ">
                <div className="2xl:w-660 w-full h-149 2xl:h-319 bg-cardDarkBlue lg:mr-15 card-css 2xl:mr-30">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="  text-8 2xl:text-17">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor text-7 2xl:text-17 w-60 h-27 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-8 2xl:text-17 ">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-430 w-9/12 h-149 2xl:h-319 "
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex 2xl:justify-between justify-around w-370 2xl:pt-0 pt-15">
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full "
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                          <div className="2xl:pt-21 pt-8">
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full"
                              src={pakistanIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              Pakistan
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                        <div className="flex  2xl:h-70 2xl:mt-35 mt-22">
                        <div className="flex 2xl:bg-cardPurple bg-cardPurple 2xl:w-465 w-280 2xl:h-70 h-25  justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8 ">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs text-8 2xl:pl-10 pl-4">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 text-8 2xl:text-xs pl-4">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex 2xl:justify-center 2xl:items-center  2xl:bg-[#060041] bg-[#060041] 2xl:w-110 w-45  2xl:rounded-r-lg rounded-r-lg ">
                          <img
                            className="2xl:w-30 w-17 mx-auto "
                            src={plusSign}
                            alt="Plus Sign"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="2xl:w-660 w-full h-149 2xl:h-319 bg-cardDarkBlue card-css 2xl:mr-30 lg:mt-0 2xl:mt-0 mt-20">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="  text-8 2xl:text-17">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor text-7 2xl:text-17 w-60 h-27 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-8 2xl:text-17 ">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-430 w-9/12 h-149 2xl:h-319 "
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex 2xl:justify-between justify-around w-370 2xl:pt-0 pt-15">
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full "
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                          <div className="2xl:pt-21 pt-8">
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full"
                              src={pakistanIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              Pakistan
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                        <div className="flex  2xl:h-70 2xl:mt-35 mt-22">
                        <div className="flex 2xl:bg-cardPurple bg-cardPurple 2xl:w-465 w-280 2xl:h-70 h-25  justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8 ">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs text-8 2xl:pl-10 pl-4">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 text-8 2xl:text-xs pl-4">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex 2xl:justify-center 2xl:items-center  2xl:bg-[#060041] bg-[#060041] 2xl:w-110 w-45  2xl:rounded-r-lg rounded-r-lg ">
                          <img
                            className="2xl:w-30 w-17 mx-auto "
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
            {/* <div className="flex justify-center w-full mt-10">
              <Button className="login-button 2xl:left-15 lg:w-95 2xl:mt-50 2xl:text-14 bg-loginBgColor 2xl:h-47 2xl:w-150  text-9 w-full h-33 2xl:mb-0 items-center mt-20 mb-20 rounded-xl see-all-matches-hover ">
                Show More
              </Button>
            </div> */}
          </div>
        </div>
      </div>
      </div>

      <div className="2xl:container 2xl:hidden lg:block hidden  2xl:mx-auto 2xl:mt-0 lg:mt-40 ">
        <div className="relative container-2">
          <div className="container-3">
          {/* <div className="text-white 2xl:text-60 lg:mb-30 2xl:mb-50  lg:text-40  text-center custom-font-family 2xl:mt-150 z-10 text-26 2xl:pb-0 pb-10 ">
            Cricket LAST
          </div> */}

          {/* <div className="text-[#d8d0d0] lg:mt-0 lg:mb-20 2xl:text-16 2xl:mt-20 mt-10 lg:text-15  2xl:-mr-13 2xl:mb-50 custom-font-family-2 items-center 2xl:text-left text-center 2xl:flex 2xl:flex-row flex lg:flex-row flex-col justify-between see-all-matches-hover z-10 text-12 ">
            <div className="lg:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phaselluspharetra <br className="2xl:block hidden"></br> mi ut leo pulvinar laoreet. 
            </div>
            <div className="2xl:w-150 w-full lg:text-right">
            <Button className="login-button 2xl:text-14   bg-loginBgColor 2xl:h-47 2xl:w-150 lg:w-100 w-11/12 text-9 h-33 2xl:mt-0 2xl:mb-0 items-center mt-20 mb-20 rounded-xl see-all-matches-hover ">
              See All Matches
            </Button>
            </div>
          </div> */}

          <div className="text-white 2xl:mb-30 w-full 2xl:px-0 px-20 lg:px-0 ">
            <div className="card-div flex 2xl:justify-start w-full">
              <div className="2xl:flex max-w-full w-full lg:flex">
                <div className="2xl:w-660 w-full h-149 2xl:h-319 lg:mr-15  bg-cardDarkBlue card-css 2xl:mr-30">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="  text-8 2xl:text-17">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor text-7 2xl:text-17 w-60 h-27 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-8 2xl:text-17 ">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-430 w-9/12 h-149 2xl:h-319 "
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex 2xl:justify-between justify-around w-370 2xl:pt-0 pt-15">
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full "
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                          <div className="2xl:pt-21 pt-8">
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full"
                              src={pakistanIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              Pakistan
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                        <div className="flex  2xl:h-70 2xl:mt-35 mt-22">
                        <div className="flex 2xl:bg-cardPurple bg-cardPurple 2xl:w-465 w-280 2xl:h-70 h-25  justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8 ">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs text-8 2xl:pl-10 pl-4">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 text-8 2xl:text-xs pl-4">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex 2xl:justify-center 2xl:items-center  2xl:bg-[#060041] bg-[#060041] 2xl:w-110 w-45  2xl:rounded-r-lg rounded-r-lg ">
                          <img
                            className="2xl:w-30 w-17 mx-auto "
                            src={plusSign}
                            alt="Plus Sign"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="2xl:w-660 w-full h-149 2xl:h-319 bg-cardDarkBlue card-css 2xl:mr-30 2xl:mt-0 lg:mt-0 mt-20">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="  text-8 2xl:text-17">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor text-7 2xl:text-17 w-60 h-27 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-8 2xl:text-17 ">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-430 w-9/12 h-149 2xl:h-319 "
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex 2xl:justify-between justify-around w-370 2xl:pt-0 pt-15">
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full "
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                          <div className="2xl:pt-21 pt-8">
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full"
                              src={pakistanIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              Pakistan
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                        <div className="flex  2xl:h-70 2xl:mt-35 mt-22">
                        <div className="flex 2xl:bg-cardPurple bg-cardPurple 2xl:w-465 w-280 2xl:h-70 h-25  justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8 ">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs text-8 2xl:pl-10 pl-4">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 text-8 2xl:text-xs pl-4">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex 2xl:justify-center 2xl:items-center  2xl:bg-[#060041] bg-[#060041] 2xl:w-110 w-45  2xl:rounded-r-lg rounded-r-lg ">
                          <img
                            className="2xl:w-30 w-17 mx-auto "
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

          <div className="text-white 2xl:mb-30 w-full 2xl:px-0 px-20 lg:px-0 2xl:mt-0 mt-20">
            <div className="card-div flex 2xl:justify-start w-full">
              <div className="2xl:flex max-w-full w-full lg:flex ">
                <div className="2xl:w-660 w-full h-149 2xl:h-319 bg-cardDarkBlue lg:mr-15 card-css 2xl:mr-30">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="  text-8 2xl:text-17">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor text-7 2xl:text-17 w-60 h-27 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-8 2xl:text-17 ">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-430 w-9/12 h-149 2xl:h-319 "
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex 2xl:justify-between justify-around w-370 2xl:pt-0 pt-15">
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full "
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                          <div className="2xl:pt-21 pt-8">
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full"
                              src={pakistanIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              Pakistan
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                        <div className="flex  2xl:h-70 2xl:mt-35 mt-22">
                        <div className="flex 2xl:bg-cardPurple bg-cardPurple 2xl:w-465 w-280 2xl:h-70 h-25  justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8 ">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs text-8 2xl:pl-10 pl-4">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 text-8 2xl:text-xs pl-4">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex 2xl:justify-center 2xl:items-center  2xl:bg-[#060041] bg-[#060041] 2xl:w-110 w-45  2xl:rounded-r-lg rounded-r-lg ">
                          <img
                            className="2xl:w-30 w-17 mx-auto "
                            src={plusSign}
                            alt="Plus Sign"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="2xl:w-660 w-full h-149 2xl:h-319 bg-cardDarkBlue card-css 2xl:mr-30 lg:mt-0 2xl:mt-0 mt-20">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="  text-8 2xl:text-17">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor text-7 2xl:text-17 w-60 h-27 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-8 2xl:text-17 ">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-430 w-9/12 h-149 2xl:h-319 "
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex 2xl:justify-between justify-around w-370 2xl:pt-0 pt-15">
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full "
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                          <div className="2xl:pt-21 pt-8">
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full"
                              src={pakistanIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              Pakistan
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                        <div className="flex  2xl:h-70 2xl:mt-35 mt-22">
                        <div className="flex 2xl:bg-cardPurple bg-cardPurple 2xl:w-465 w-280 2xl:h-70 h-25  justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8 ">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs text-8 2xl:pl-10 pl-4">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 text-8 2xl:text-xs pl-4">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex 2xl:justify-center 2xl:items-center  2xl:bg-[#060041] bg-[#060041] 2xl:w-110 w-45  2xl:rounded-r-lg rounded-r-lg ">
                          <img
                            className="2xl:w-30 w-17 mx-auto "
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
            {/* <div className="flex justify-center w-full mt-10">
              <Button className="login-button 2xl:left-15 lg:w-95 2xl:mt-50 2xl:text-14 bg-loginBgColor 2xl:h-47 2xl:w-150  text-9 w-full h-33 2xl:mb-0 items-center mt-20 mb-20 rounded-xl see-all-matches-hover ">
                Show More
              </Button>
            </div> */}
          </div>
        </div>
      </div>
      </div>

      <div className="2xl:container 2xl:hidden lg:block hidden  2xl:mx-auto 2xl:mt-0 lg:mt-40 ">
        <div className="relative container-2">
          <div className="container-3">
          {/* <div className="text-white 2xl:text-60 lg:mb-30 2xl:mb-50  lg:text-40  text-center custom-font-family 2xl:mt-150 z-10 text-26 2xl:pb-0 pb-10 ">
            Cricket LAST
          </div> */}

          {/* <div className="text-[#d8d0d0] lg:mt-0 lg:mb-20 2xl:text-16 2xl:mt-20 mt-10 lg:text-15  2xl:-mr-13 2xl:mb-50 custom-font-family-2 items-center 2xl:text-left text-center 2xl:flex 2xl:flex-row flex lg:flex-row flex-col justify-between see-all-matches-hover z-10 text-12 ">
            <div className="lg:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phaselluspharetra <br className="2xl:block hidden"></br> mi ut leo pulvinar laoreet. 
            </div>
            <div className="2xl:w-150 w-full lg:text-right">
            <Button className="login-button 2xl:text-14   bg-loginBgColor 2xl:h-47 2xl:w-150 lg:w-100 w-11/12 text-9 h-33 2xl:mt-0 2xl:mb-0 items-center mt-20 mb-20 rounded-xl see-all-matches-hover ">
              See All Matches
            </Button>
            </div>
          </div> */}

          <div className="text-white 2xl:mb-30 w-full 2xl:px-0 px-20 lg:px-0 ">
            <div className="card-div flex 2xl:justify-start w-full">
              <div className="2xl:flex max-w-full w-full lg:flex">
                <div className="2xl:w-660 w-full h-149 2xl:h-319 lg:mr-15  bg-cardDarkBlue card-css 2xl:mr-30">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="  text-8 2xl:text-17">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor text-7 2xl:text-17 w-60 h-27 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-8 2xl:text-17 ">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-430 w-9/12 h-149 2xl:h-319 "
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex 2xl:justify-between justify-around w-370 2xl:pt-0 pt-15">
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full "
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                          <div className="2xl:pt-21 pt-8">
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full"
                              src={pakistanIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              Pakistan
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                        <div className="flex  2xl:h-70 2xl:mt-35 mt-22">
                        <div className="flex 2xl:bg-cardPurple bg-cardPurple 2xl:w-465 w-280 2xl:h-70 h-25  justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8 ">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs text-8 2xl:pl-10 pl-4">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 text-8 2xl:text-xs pl-4">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex 2xl:justify-center 2xl:items-center  2xl:bg-[#060041] bg-[#060041] 2xl:w-110 w-45  2xl:rounded-r-lg rounded-r-lg ">
                          <img
                            className="2xl:w-30 w-17 mx-auto "
                            src={plusSign}
                            alt="Plus Sign"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="2xl:w-660 w-full h-149 2xl:h-319 bg-cardDarkBlue card-css 2xl:mr-30 2xl:mt-0 lg:mt-0 mt-20">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="  text-8 2xl:text-17">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor text-7 2xl:text-17 w-60 h-27 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-8 2xl:text-17 ">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-430 w-9/12 h-149 2xl:h-319 "
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex 2xl:justify-between justify-around w-370 2xl:pt-0 pt-15">
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full "
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                          <div className="2xl:pt-21 pt-8">
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full"
                              src={pakistanIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              Pakistan
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                        <div className="flex  2xl:h-70 2xl:mt-35 mt-22">
                        <div className="flex 2xl:bg-cardPurple bg-cardPurple 2xl:w-465 w-280 2xl:h-70 h-25  justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8 ">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs text-8 2xl:pl-10 pl-4">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 text-8 2xl:text-xs pl-4">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex 2xl:justify-center 2xl:items-center  2xl:bg-[#060041] bg-[#060041] 2xl:w-110 w-45  2xl:rounded-r-lg rounded-r-lg ">
                          <img
                            className="2xl:w-30 w-17 mx-auto "
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

          <div className="text-white 2xl:mb-30 w-full 2xl:px-0 px-20 lg:px-0 2xl:mt-0 mt-20">
            <div className="card-div flex 2xl:justify-start w-full">
              <div className="2xl:flex max-w-full w-full lg:flex ">
                <div className="2xl:w-660 w-full h-149 2xl:h-319 bg-cardDarkBlue lg:mr-15 card-css 2xl:mr-30">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="  text-8 2xl:text-17">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor text-7 2xl:text-17 w-60 h-27 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-8 2xl:text-17 ">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-430 w-9/12 h-149 2xl:h-319 "
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex 2xl:justify-between justify-around w-370 2xl:pt-0 pt-15">
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full "
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                          <div className="2xl:pt-21 pt-8">
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full"
                              src={pakistanIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              Pakistan
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                        <div className="flex  2xl:h-70 2xl:mt-35 mt-22">
                        <div className="flex 2xl:bg-cardPurple bg-cardPurple 2xl:w-465 w-280 2xl:h-70 h-25  justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8 ">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs text-8 2xl:pl-10 pl-4">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 text-8 2xl:text-xs pl-4">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex 2xl:justify-center 2xl:items-center  2xl:bg-[#060041] bg-[#060041] 2xl:w-110 w-45  2xl:rounded-r-lg rounded-r-lg ">
                          <img
                            className="2xl:w-30 w-17 mx-auto "
                            src={plusSign}
                            alt="Plus Sign"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="2xl:w-660 w-full h-149 2xl:h-319 bg-cardDarkBlue card-css 2xl:mr-30 lg:mt-0 2xl:mt-0 mt-20">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="  text-8 2xl:text-17">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor text-7 2xl:text-17 w-60 h-27 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-8 2xl:text-17 ">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-430 w-9/12 h-149 2xl:h-319 "
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex 2xl:justify-between justify-around w-370 2xl:pt-0 pt-15">
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full "
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                          <div className="2xl:pt-21 pt-8">
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full"
                              src={pakistanIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              Pakistan
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                        <div className="flex  2xl:h-70 2xl:mt-35 mt-22">
                        <div className="flex 2xl:bg-cardPurple bg-cardPurple 2xl:w-465 w-280 2xl:h-70 h-25  justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8 ">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs text-8 2xl:pl-10 pl-4">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 text-8 2xl:text-xs pl-4">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex 2xl:justify-center 2xl:items-center  2xl:bg-[#060041] bg-[#060041] 2xl:w-110 w-45  2xl:rounded-r-lg rounded-r-lg ">
                          <img
                            className="2xl:w-30 w-17 mx-auto "
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
            <div className="flex justify-center w-full mt-10">
              <Button className="login-button 2xl:left-15 lg:w-95 2xl:mt-50 lg:mb-10 2xl:text-14 bg-loginBgColor 2xl:h-47 2xl:w-150  text-9 w-full h-33 2xl:mb-0 items-center mt-20 mb-20 rounded-xl see-all-matches-hover ">
                Show More
              </Button>
            </div>
          </div>
        </div>
      </div>
      </div>






      <div className="2xl:container 2xl:hidden lg:hidden 2xl:mx-auto">
        <div className="2xl:container-2 relative block mt-50">
          <div className="text-white 2xl:text-60 text-center 2xl:text-left custom-font-family 2xl:mt-150 z-10 text-26 2xl:pb-0 pb-10 ">
            Cricket Matches
          </div>

          {/* <div className="text-[#d8d0d0] 2xl:text-16 2xl:mt-20 mt-10 2xl:pr-18 2xl:mb-50 custom-font-family-2 items-center 2xl:text-left text-center 2xl:flex 2xl:flex-row flex flex-col justify-between see-all-matches-hover z-10 text-12 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phaselluspharetra <br className="2xl:block hidden"></br> mi ut leo
            pulvinar laoreet.
            <div>
              <Button className="login-button 2xl:text-14 bg-loginBgColor 2xl:h-47 2xl:w-150  text-9 w-100 h-33 2xl:mt-0 2xl:mb-0 items-center mt-20 mb-20 rounded-xl see-all-matches-hover ">
                See All Matches
              </Button>
            </div>
          </div> */}

          <div className="text-white 2xl:mb-30 w-full 2xl:px-0 px-20 ">
            <div className="card-div flex 2xl:justify-start w-full">
              <div className="2xl:flex max-w-full w-full ">
                <div className="2xl:w-660 w-full h-149 2xl:h-319 bg-cardDarkBlue card-css 2xl:mr-30">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="  text-8 2xl:text-17">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor text-7 2xl:text-17 w-60 h-27 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-8 2xl:text-17 ">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-500 w-9/12 h-149 2xl:h-319 "
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex 2xl:justify-between justify-around w-370 2xl:pt-0 pt-15">
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full "
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                          <div className="2xl:pt-21 pt-8">
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full"
                              src={pakistanIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              Pakistan
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex  2xl:h-70 2xl:mt-35 mt-22">
                        <div className="flex 2xl:bg-cardPurple bg-cardPurple 2xl:w-465 w-280 2xl:h-70 h-25  justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8 ">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs text-8 2xl:pl-10 pl-4">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 text-8 2xl:text-xs pl-4">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex 2xl:justify-center 2xl:items-center  2xl:bg-[#060041] bg-[#060041] 2xl:w-110 w-40  2xl:rounded-r-lg rounded-r-lg ">
                          <img
                            className="2xl:w-30 w-17 mx-auto "
                            src={plusSign}
                            alt="Plus Sign"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="2xl:w-660 w-full h-149 2xl:h-319 bg-cardDarkBlue card-css 2xl:mr-30 2xl:mt-0 mt-20">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="  text-8 2xl:text-17">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor text-7 2xl:text-17 w-60 h-27 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-8 2xl:text-17 ">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-500 w-9/12 h-149 2xl:h-319 "
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex 2xl:justify-between justify-around w-370 2xl:pt-0 pt-15">
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full "
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                          <div className="2xl:pt-21 pt-8">
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full"
                              src={pakistanIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              Pakistan
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex  2xl:h-70 2xl:mt-35 mt-22">
                        <div className="flex 2xl:bg-cardPurple bg-cardPurple 2xl:w-465 w-280 2xl:h-70 h-25  justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8 ">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs text-8 2xl:pl-10 pl-4">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 text-8 2xl:text-xs pl-4">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex 2xl:justify-center 2xl:items-center  2xl:bg-[#060041] bg-[#060041] 2xl:w-110 w-40  2xl:rounded-r-lg rounded-r-lg ">
                          <img
                            className="2xl:w-30 w-17 mx-auto "
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

          <div className="text-white 2xl:mb-30 w-full 2xl:px-0 px-20 2xl:mt-0 mt-20">
            <div className="card-div flex 2xl:justify-start w-full">
              <div className="2xl:flex max-w-full w-full ">
                <div className="2xl:w-660 w-full h-149 2xl:h-319 bg-cardDarkBlue card-css 2xl:mr-30">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="  text-8 2xl:text-17">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor text-7 2xl:text-17 w-60 h-27 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-8 2xl:text-17 ">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-500 w-9/12 h-149 2xl:h-319 "
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex 2xl:justify-between justify-around w-370 2xl:pt-0 pt-15">
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full "
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                          <div className="2xl:pt-21 pt-8">
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full"
                              src={pakistanIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              Pakistan
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex  2xl:h-70 2xl:mt-35 mt-22">
                        <div className="flex 2xl:bg-cardPurple bg-cardPurple 2xl:w-465 w-280 2xl:h-70 h-25  justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8 ">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs text-8 2xl:pl-10 pl-4">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 text-8 2xl:text-xs pl-4">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex 2xl:justify-center 2xl:items-center  2xl:bg-[#060041] bg-[#060041] 2xl:w-110 w-40  2xl:rounded-r-lg rounded-r-lg ">
                          <img
                            className="2xl:w-30 w-17 mx-auto "
                            src={plusSign}
                            alt="Plus Sign"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="2xl:w-660 w-full h-149 2xl:h-319 bg-cardDarkBlue card-css 2xl:mr-30 2xl:mt-0 mt-20">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="  text-8 2xl:text-17">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor text-7 2xl:text-17 w-60 h-27 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-8 2xl:text-17 ">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-500 w-9/12 h-149 2xl:h-319 "
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex 2xl:justify-between justify-around w-370 2xl:pt-0 pt-15">
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full "
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                          <div className="2xl:pt-21 pt-8">
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full"
                              src={pakistanIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              Pakistan
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex  2xl:h-70 2xl:mt-35 mt-22">
                        <div className="flex 2xl:bg-cardPurple bg-cardPurple 2xl:w-465 w-280 2xl:h-70 h-25  justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8 ">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs text-8 2xl:pl-10 pl-4">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 text-8 2xl:text-xs pl-4">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex 2xl:justify-center 2xl:items-center  2xl:bg-[#060041] bg-[#060041] 2xl:w-110 w-40  2xl:rounded-r-lg rounded-r-lg ">
                          <img
                            className="2xl:w-30 w-17 mx-auto "
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
            {/* <div className="flex justify-center w-full mt-10">
              <Button className="login-button 2xl:text-14 bg-loginBgColor 2xl:h-47 2xl:w-150  text-9 w-full h-33 2xl:mt-0 2xl:mb-0 items-center mt-20 mb-20 rounded-xl see-all-matches-hover ">
                Show More
              </Button>
            </div> */}
          </div>

          <div className="text-white 2xl:mb-30 w-full 2xl:px-0 px-20 2xl:mt-0 mt-20">
            <div className="card-div flex 2xl:justify-start w-full">
              <div className="2xl:flex max-w-full w-full ">
                <div className="2xl:w-660 w-full h-149 2xl:h-319 bg-cardDarkBlue card-css 2xl:mr-30">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="  text-8 2xl:text-17">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor text-7 2xl:text-17 w-60 h-27 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-8 2xl:text-17 ">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-500 w-9/12 h-149 2xl:h-319 "
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex 2xl:justify-between justify-around w-370 2xl:pt-0 pt-15">
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full "
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                          <div className="2xl:pt-21 pt-8">
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full"
                              src={pakistanIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              Pakistan
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex  2xl:h-70 2xl:mt-35 mt-22">
                        <div className="flex 2xl:bg-cardPurple bg-cardPurple 2xl:w-465 w-280 2xl:h-70 h-25  justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8 ">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs text-8 2xl:pl-10 pl-4">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 text-8 2xl:text-xs pl-4">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex 2xl:justify-center 2xl:items-center  2xl:bg-[#060041] bg-[#060041] 2xl:w-110 w-40  2xl:rounded-r-lg rounded-r-lg ">
                          <img
                            className="2xl:w-30 w-17 mx-auto "
                            src={plusSign}
                            alt="Plus Sign"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="2xl:w-660 w-full h-149 2xl:h-319 bg-cardDarkBlue card-css 2xl:mr-30 2xl:mt-0 mt-20">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="  text-8 2xl:text-17">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor text-7 2xl:text-17 w-60 h-27 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-8 2xl:text-17 ">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-500 w-9/12 h-149 2xl:h-319 "
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex 2xl:justify-between justify-around w-370 2xl:pt-0 pt-15">
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full "
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                          <div className="2xl:pt-21 pt-8">
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full"
                              src={pakistanIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              Pakistan
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex  2xl:h-70 2xl:mt-35 mt-22">
                        <div className="flex 2xl:bg-cardPurple bg-cardPurple 2xl:w-465 w-280 2xl:h-70 h-25  justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8 ">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs text-8 2xl:pl-10 pl-4">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 text-8 2xl:text-xs pl-4">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex 2xl:justify-center 2xl:items-center  2xl:bg-[#060041] bg-[#060041] 2xl:w-110 w-40  2xl:rounded-r-lg rounded-r-lg ">
                          <img
                            className="2xl:w-30 w-17 mx-auto "
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
            {/* <div className="flex justify-center w-full mt-10">
              <Button className="login-button 2xl:text-14 bg-loginBgColor 2xl:h-47 2xl:w-150  text-9 w-full h-33 2xl:mt-0 2xl:mb-0 items-center mt-20 mb-20 rounded-xl see-all-matches-hover ">
                Show More
              </Button>
            </div> */}
          </div>

          <div className="text-white 2xl:mb-30 w-full 2xl:px-0 px-20 2xl:mt-0 mt-20">
            <div className="card-div flex 2xl:justify-start w-full">
              <div className="2xl:flex max-w-full w-full ">
                <div className="2xl:w-660 w-full h-149 2xl:h-319 bg-cardDarkBlue card-css 2xl:mr-30">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="  text-8 2xl:text-17">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor text-7 2xl:text-17 w-60 h-27 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-8 2xl:text-17 ">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-500 w-9/12 h-149 2xl:h-319 "
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex 2xl:justify-between justify-around w-370 2xl:pt-0 pt-15">
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full "
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                          <div className="2xl:pt-21 pt-8">
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full"
                              src={pakistanIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              Pakistan
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex  2xl:h-70 2xl:mt-35 mt-22">
                        <div className="flex 2xl:bg-cardPurple bg-cardPurple 2xl:w-465 w-280 2xl:h-70 h-25  justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8 ">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs text-8 2xl:pl-10 pl-4">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 text-8 2xl:text-xs pl-4">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex 2xl:justify-center 2xl:items-center  2xl:bg-[#060041] bg-[#060041] 2xl:w-110 w-40  2xl:rounded-r-lg rounded-r-lg ">
                          <img
                            className="2xl:w-30 w-17 mx-auto "
                            src={plusSign}
                            alt="Plus Sign"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="2xl:w-660 w-full h-149 2xl:h-319 bg-cardDarkBlue card-css 2xl:mr-30 2xl:mt-0 mt-20">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="  text-8 2xl:text-17">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor text-7 2xl:text-17 w-60 h-27 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-8 2xl:text-17 ">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-500 w-9/12 h-149 2xl:h-319 "
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex 2xl:justify-between justify-around w-370 2xl:pt-0 pt-15">
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full "
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                          <div className="2xl:pt-21 pt-8">
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full"
                              src={pakistanIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              Pakistan
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex  2xl:h-70 2xl:mt-35 mt-22">
                        <div className="flex 2xl:bg-cardPurple bg-cardPurple 2xl:w-465 w-280 2xl:h-70 h-25  justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8 ">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs text-8 2xl:pl-10 pl-4">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 text-8 2xl:text-xs pl-4">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex 2xl:justify-center 2xl:items-center  2xl:bg-[#060041] bg-[#060041] 2xl:w-110 w-40  2xl:rounded-r-lg rounded-r-lg ">
                          <img
                            className="2xl:w-30 w-17 mx-auto "
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
            {/* <div className="flex justify-center w-full mt-10">
              <Button className="login-button 2xl:text-14 bg-loginBgColor 2xl:h-47 2xl:w-150  text-9 w-full h-33 2xl:mt-0 2xl:mb-0 items-center mt-20 mb-20 rounded-xl see-all-matches-hover ">
                Show More
              </Button>
            </div> */}
          </div>

          <div className="text-white 2xl:mb-30 w-full 2xl:px-0 px-20 2xl:mt-0 mt-20">
            <div className="card-div flex 2xl:justify-start w-full">
              <div className="2xl:flex max-w-full w-full ">
                <div className="2xl:w-660 w-full h-149 2xl:h-319 bg-cardDarkBlue card-css 2xl:mr-30">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="  text-8 2xl:text-17">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor text-7 2xl:text-17 w-60 h-27 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-8 2xl:text-17 ">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-500 w-9/12 h-149 2xl:h-319 "
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex 2xl:justify-between justify-around w-370 2xl:pt-0 pt-15">
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full "
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                          <div className="2xl:pt-21 pt-8">
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full"
                              src={pakistanIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              Pakistan
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex  2xl:h-70 2xl:mt-35 mt-22">
                        <div className="flex 2xl:bg-cardPurple bg-cardPurple 2xl:w-465 w-280 2xl:h-70 h-25  justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8 ">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs text-8 2xl:pl-10 pl-4">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 text-8 2xl:text-xs pl-4">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex 2xl:justify-center 2xl:items-center  2xl:bg-[#060041] bg-[#060041] 2xl:w-110 w-40  2xl:rounded-r-lg rounded-r-lg ">
                          <img
                            className="2xl:w-30 w-17 mx-auto "
                            src={plusSign}
                            alt="Plus Sign"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="2xl:w-660 w-full h-149 2xl:h-319 bg-cardDarkBlue card-css 2xl:mr-30 2xl:mt-0 mt-20">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="  text-8 2xl:text-17">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor text-7 2xl:text-17 w-60 h-27 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-8 2xl:text-17 ">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-500 w-9/12 h-149 2xl:h-319 "
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex 2xl:justify-between justify-around w-370 2xl:pt-0 pt-15">
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full "
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                          <div className="2xl:pt-21 pt-8">
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full"
                              src={pakistanIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              Pakistan
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex  2xl:h-70 2xl:mt-35 mt-22">
                        <div className="flex 2xl:bg-cardPurple bg-cardPurple 2xl:w-465 w-280 2xl:h-70 h-25  justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8 ">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs text-8 2xl:pl-10 pl-4">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 text-8 2xl:text-xs pl-4">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex 2xl:justify-center 2xl:items-center  2xl:bg-[#060041] bg-[#060041] 2xl:w-110 w-40  2xl:rounded-r-lg rounded-r-lg ">
                          <img
                            className="2xl:w-30 w-17 mx-auto "
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
            {/* <div className="flex justify-center w-full mt-10">
              <Button className="login-button 2xl:text-14 bg-loginBgColor 2xl:h-47 2xl:w-150  text-9 w-full h-33 2xl:mt-0 2xl:mb-0 items-center mt-20 mb-20 rounded-xl see-all-matches-hover ">
                Show More
              </Button>
            </div> */}
          </div>

          <div className="text-white 2xl:mb-30 w-full 2xl:px-0 px-20 2xl:mt-0 mt-20">
            <div className="card-div flex 2xl:justify-start w-full">
              <div className="2xl:flex max-w-full w-full ">
                <div className="2xl:w-660 w-full h-149 2xl:h-319 bg-cardDarkBlue card-css 2xl:mr-30">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="  text-8 2xl:text-17">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor text-7 2xl:text-17 w-60 h-27 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-8 2xl:text-17 ">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-500 w-9/12 h-149 2xl:h-319 "
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex 2xl:justify-between justify-around w-370 2xl:pt-0 pt-15">
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full "
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                          <div className="2xl:pt-21 pt-8">
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full"
                              src={pakistanIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              Pakistan
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex  2xl:h-70 2xl:mt-35 mt-22">
                        <div className="flex 2xl:bg-cardPurple bg-cardPurple 2xl:w-465 w-280 2xl:h-70 h-25  justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8 ">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs text-8 2xl:pl-10 pl-4">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 text-8 2xl:text-xs pl-4">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex 2xl:justify-center 2xl:items-center  2xl:bg-[#060041] bg-[#060041] 2xl:w-110 w-40  2xl:rounded-r-lg rounded-r-lg ">
                          <img
                            className="2xl:w-30 w-17 mx-auto "
                            src={plusSign}
                            alt="Plus Sign"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="2xl:w-660 w-full h-149 2xl:h-319 bg-cardDarkBlue card-css 2xl:mr-30 2xl:mt-0 mt-20">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="  text-8 2xl:text-17">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor text-7 2xl:text-17 w-60 h-27 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-8 2xl:text-17 ">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-500 w-9/12 h-149 2xl:h-319 "
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex 2xl:justify-between justify-around w-370 2xl:pt-0 pt-15">
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full "
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                          <div className="2xl:pt-21 pt-8">
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full"
                              src={pakistanIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              Pakistan
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex  2xl:h-70 2xl:mt-35 mt-22">
                        <div className="flex 2xl:bg-cardPurple bg-cardPurple 2xl:w-465 w-280 2xl:h-70 h-25  justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8 ">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs text-8 2xl:pl-10 pl-4">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 text-8 2xl:text-xs pl-4">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex 2xl:justify-center 2xl:items-center  2xl:bg-[#060041] bg-[#060041] 2xl:w-110 w-40  2xl:rounded-r-lg rounded-r-lg ">
                          <img
                            className="2xl:w-30 w-17 mx-auto "
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
            {/* <div className="flex justify-center w-full mt-10">
              <Button className="login-button 2xl:text-14 bg-loginBgColor 2xl:h-47 2xl:w-150  text-9 w-full h-33 2xl:mt-0 2xl:mb-0 items-center mt-20 mb-20 rounded-xl see-all-matches-hover ">
                Show More
              </Button>
            </div> */}
          </div>

          <div className="text-white 2xl:mb-30 w-full 2xl:px-0 px-20 2xl:mt-0 mt-20">
            <div className="card-div flex 2xl:justify-start w-full">
              <div className="2xl:flex max-w-full w-full ">
                <div className="2xl:w-660 w-full h-149 2xl:h-319 bg-cardDarkBlue card-css 2xl:mr-30">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="  text-8 2xl:text-17">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor text-7 2xl:text-17 w-60 h-27 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-8 2xl:text-17 ">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-500 w-9/12 h-149 2xl:h-319 "
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex 2xl:justify-between justify-around w-370 2xl:pt-0 pt-15">
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full "
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                          <div className="2xl:pt-21 pt-8">
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full"
                              src={pakistanIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              Pakistan
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex  2xl:h-70 2xl:mt-35 mt-22">
                        <div className="flex 2xl:bg-cardPurple bg-cardPurple 2xl:w-465 w-280 2xl:h-70 h-25  justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8 ">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs text-8 2xl:pl-10 pl-4">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 text-8 2xl:text-xs pl-4">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex 2xl:justify-center 2xl:items-center  2xl:bg-[#060041] bg-[#060041] 2xl:w-110 w-40  2xl:rounded-r-lg rounded-r-lg ">
                          <img
                            className="2xl:w-30 w-17 mx-auto "
                            src={plusSign}
                            alt="Plus Sign"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="2xl:w-660 w-full h-149 2xl:h-319 bg-cardDarkBlue card-css 2xl:mr-30 2xl:mt-0 mt-20">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="  text-8 2xl:text-17">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor text-7 2xl:text-17 w-60 h-27 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-8 2xl:text-17 ">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-500 w-9/12 h-149 2xl:h-319 "
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex 2xl:justify-between justify-around w-370 2xl:pt-0 pt-15">
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full "
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                          <div className="2xl:pt-21 pt-8">
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full"
                              src={pakistanIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              Pakistan
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex  2xl:h-70 2xl:mt-35 mt-22">
                        <div className="flex 2xl:bg-cardPurple bg-cardPurple 2xl:w-465 w-280 2xl:h-70 h-25  justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8 ">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs text-8 2xl:pl-10 pl-4">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 text-8 2xl:text-xs pl-4">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex 2xl:justify-center 2xl:items-center  2xl:bg-[#060041] bg-[#060041] 2xl:w-110 w-40  2xl:rounded-r-lg rounded-r-lg ">
                          <img
                            className="2xl:w-30 w-17 mx-auto "
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
            {/* <div className="flex justify-center w-full mt-10">
              <Button className="login-button 2xl:text-14 bg-loginBgColor 2xl:h-47 2xl:w-150  text-9 w-full h-33 2xl:mt-0 2xl:mb-0 items-center mt-20 mb-20 rounded-xl see-all-matches-hover ">
                Show More
              </Button>
            </div> */}
          </div>

          <div className="text-white 2xl:mb-30 w-full 2xl:px-0 px-20 2xl:mt-0 mt-20">
            <div className="card-div flex 2xl:justify-start w-full">
              <div className="2xl:flex max-w-full w-full ">
                <div className="2xl:w-660 w-full h-149 2xl:h-319 bg-cardDarkBlue card-css 2xl:mr-30">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="  text-8 2xl:text-17">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor text-7 2xl:text-17 w-60 h-27 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-8 2xl:text-17 ">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-500 w-9/12 h-149 2xl:h-319 "
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex 2xl:justify-between justify-around w-370 2xl:pt-0 pt-15">
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full "
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                          <div className="2xl:pt-21 pt-8">
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full"
                              src={pakistanIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              Pakistan
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex  2xl:h-70 2xl:mt-35 mt-22">
                        <div className="flex 2xl:bg-cardPurple bg-cardPurple 2xl:w-465 w-280 2xl:h-70 h-25  justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8 ">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs text-8 2xl:pl-10 pl-4">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 text-8 2xl:text-xs pl-4">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex 2xl:justify-center 2xl:items-center  2xl:bg-[#060041] bg-[#060041] 2xl:w-110 w-40  2xl:rounded-r-lg rounded-r-lg ">
                          <img
                            className="2xl:w-30 w-17 mx-auto "
                            src={plusSign}
                            alt="Plus Sign"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="2xl:w-660 w-full h-149 2xl:h-319 bg-cardDarkBlue card-css 2xl:mr-30 2xl:mt-0 mt-20">
                  <div className="flex card-content">
                    <div
                      className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2"
                      // style={{ flex: "28%" }}
                    >
                      <h1 className="  text-8 2xl:text-17">One Day Match</h1>
                      <Button className="login-button bg-loginBgColor text-7 2xl:text-17 w-60 h-27 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                        03:45 AM
                      </Button>
                      <h1 className="text-8 2xl:text-17 ">6 Jul 2023</h1>
                    </div>
                    <div
                      className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-500 w-9/12 h-149 2xl:h-319 "
                      // style={{ flex: "63%", color: "black" }}
                    >
                      <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                        <div className="flex 2xl:justify-between justify-around w-370 2xl:pt-0 pt-15">
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full "
                              src={indiaIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              India
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                          <div className="2xl:pt-21 pt-8">
                            <h1 className="text-[#FFBD00] 2xl:text-2xl custom-font-family">
                              vs
                            </h1>
                          </div>
                          <div>
                            <img
                              className="2xl:w-85 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full"
                              src={pakistanIcon}
                            />
                            <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10">
                              Pakistan
                            </h1>
                            <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                              168 Point
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex  2xl:h-70 2xl:mt-35 mt-22">
                        <div className="flex 2xl:bg-cardPurple bg-cardPurple 2xl:w-465 w-280 2xl:h-70 h-25  justify-around">
                          <div className="flex justify-center items-center 2xl:ml-8 ">
                            <img
                              className="2xl:w-20"
                              src={worldCupTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-xs text-8 2xl:pl-10 pl-4">
                              World Cup
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <img
                              className="2xl:w-15"
                              src={locationTag}
                              alt="World Cup Tag"
                            />
                            <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 text-8 2xl:text-xs pl-4">
                              1234 California 10020
                            </h1>
                          </div>
                        </div>
                        <div className="2xl:text-white flex 2xl:justify-center 2xl:items-center  2xl:bg-[#060041] bg-[#060041] 2xl:w-110 w-40  2xl:rounded-r-lg rounded-r-lg ">
                          <img
                            className="2xl:w-30 w-17 mx-auto "
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

            <div className="flex justify-center w-full">
              <Button className="login-button 2xl:text-14 bg-loginBgColor 2xl:h-47 2xl:w-150  text-9 w-full h-33 2xl:mt-0 2xl:mb-0 items-center mt-20 mb-20 rounded-xl see-all-matches-hover ">
                Show More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MatchesCard4;
