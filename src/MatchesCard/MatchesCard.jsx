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
import pink from "@assets/pinkDotBetting.svg"
import daimond from "@assets/daimond.svg"
import purpleLeaf from "@assets/purpleleaf.svg"

import "./MatchesCard.css";

const MatchesCard = () => {
  return (
    <>
      <div className="2xl:relative 2xl:block lg:relative lg:block hidden">
        <img
          src={half}
          alt=""
          className="2xl:absolute 2xl:block lg:block 2xl:w-230 lg:right-0 lg:top-550 lg:w-80 lg:absolute hidden 2xl:right-0 2xl:top-900 "
        />
        <img
          src={Vector4}
          className="2xl:absolute 2xl:block lg:absolute lg:block hidden lg:right-0  lg:w-350 2xl:w-550 2xl:right-0 "
        />
        <img
          src={Vector3}
          className="2xl:absolute 2xl:block lg:block lg:absolute lg:-left-300 hidden 2xl:-left-150 opacity-100 "
        />
        <img src={circle} className="2xl:absolute  lg:block lg:absolute 2xl:block hidden 2xl:w-150" />
        <img src={circle} className="2xl:absolute 2xl:top-1700 lg:top-800 lg:w-150  lg:block lg:absolute 2xl:block hidden 2xl:w-360" />
        <img src={pink} className="2xl:absolute 2xl:top-1800 lg:top-800 lg:w-300 lg:right-0 lg:block lg:absolute 2xl:block hidden 2xl:w-450" />
        <img src={daimond} className="2xl:absolute 2xl:top-2200  lg:top-1150 lg:w-90 lg:right-0 lg:block lg:absolute 2xl:block hidden 2xl:w-160" />
        <img src={purpleLeaf} className="2xl:absolute 2xl:top-2300 2xl:left-0 2xl:rotate-0  lg:top-1300 lg:w-200 lg:opacity-50 lg:rotate-180 lg:right-0 lg:block lg:absolute 2xl:block hidden 2xl:w-560" />
        <img src={purpleLeaf} className="2xl:absolute 2xl:top-2400 2xl:right-0 opacity-50 lg:opacity-40 lg:top-1400 lg:w-150 rotate-180 lg:rotate-0  lg:block lg:absolute 2xl:block hidden 2xl:w-350" />
      </div>
      <div className="2xl:blur" />

      <div className="2xl:container lg:block 2xl:mx-auto hidden 2xl:mt-0 lg:mt-40 ">
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

          <div className="text-white 2xl:mb-30 w-full 2xl:px-0  lg:px-0 ">
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

          <div className="text-white 2xl:mb-30 w-full 2xl:px-0 lg:px-0 2xl:mt-0 mt-20">
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
            <div className="flex justify-center w-full mt-10 2xl:mt-50 2xl:ml-15">
              <Button className="login-button 2xl:text-14 lg:w-95 bg-loginBgColor 2xl:h-47 2xl:w-150  text-9 w-full h-33 2xl:mt-0 2xl:mb-0 items-center mt-20 mb-20 rounded-xl see-all-matches-hover ">
                Show More
              </Button>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="2xl:container hidden lg:block 2xl:mx-auto 2xl:mt-0 lg:mt-40 ">
        <div className="relative container-2">
          <div className="container-3">
          <div className="text-white 2xl:text-60 lg:mb-30 2xl:mb-50  lg:text-40  text-center custom-font-family 2xl:mt-150 z-10 text-26 2xl:pb-0 pb-10 ">
            Football Matches
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

          <div className="text-white 2xl:mb-30 w-full 2xl:px-0 lg:px-0 ">
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

          <div className="text-white 2xl:mb-30 w-full 2xl:px-0  lg:px-0 2xl:mt-0 mt-20">
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
              <Button className="login-button 2xl:left-15 lg:w-95 2xl:mt-50 2xl:text-14 bg-loginBgColor 2xl:h-47 2xl:w-150  text-9 w-full h-33 2xl:mb-0 items-center mt-20 mb-20 rounded-xl see-all-matches-hover ">
                Show More
              </Button>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="2xl:container lg:block 2xl:mx-auto 2xl:mt-0 hidden lg:mt-80 ">
        <div className="relative container-2">
          <div className="container-3">
          <div className="text-white 2xl:text-60 lg:mb-30 2xl:mb-50  lg:text-40  text-center custom-font-family 2xl:mt-150 z-10 text-26 2xl:pb-0 pb-10 ">
            Boxing Matches
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

          <div className="text-white 2xl:mb-30 w-full 2xl:px-0  lg:px-0 ">
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

          <div className="text-white 2xl:mb-30 w-full 2xl:px-0  lg:px-0 2xl:mt-0 mt-20">
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
              <Button className="login-button 2xl:text-14 lg:w-95 2xl:left-15 2xl:mt-50 bg-loginBgColor 2xl:h-47 2xl:w-150  text-9 w-full h-33 2xl:mb-0 items-center mt-20 mb-20 rounded-xl see-all-matches-hover ">
                Show More
              </Button>
            </div>
          </div>
        </div>
      </div>
      </div>





      <div className="2xl:container lg:hidden 2xl:mx-auto mt-50">
        <div className="2xl:container-2 relative block 2xl:hidden">
          <div className="text-white 2xl:text-60 text-center 2xl:text-left custom-font-family 2xl:mt-150 z-10 text-30 2xl:pb-0 pb-10 mb-10 ">
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

          <div className="text-white 2xl:mb-30 w-full 2xl:px-0  ">
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

          <div className="text-white 2xl:mb-30 w-full 2xl:px-0  2xl:mt-0 mt-20">
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

            <div className="flex justify-center w-full mt-10">
              <Button className="login-button 2xl:text-14 bg-loginBgColor 2xl:h-47 2xl:w-150  text-9 w-full h-33 2xl:mt-0 2xl:mb-0 items-center mt-20 mb-20 rounded-xl see-all-matches-hover ">
                Show More
              </Button>
            </div>
          </div>

          <h1 className="text-white text-30 text-center ">Football Matches </h1>
          <div className="text-white 2xl:mb-30 w-full 2xl:px-0  2xl:mt-0 mt-20 mb-20">
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
        </div>
      </div>

      <div className="2xl:container lg:hidden 2xl:mx-auto">
        <div className="2xl:container-2 relative block 2xl:hidden">
          {/* <div className="text-white 2xl:text-60 text-center 2xl:text-left custom-font-family 2xl:mt-150 z-10 text-26 2xl:pb-0 pb-10 ">
            All Matches For Betting
          </div>

          <div className="text-[#d8d0d0] 2xl:text-16 2xl:mt-20 mt-10 2xl:pr-18 2xl:mb-50 custom-font-family-2 items-center 2xl:text-left text-center 2xl:flex 2xl:flex-row flex flex-col justify-between see-all-matches-hover z-10 text-12 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phaselluspharetra <br className="2xl:block hidden"></br> mi ut leo
            pulvinar laoreet.
            <div>
              <Button className="login-button 2xl:text-14 bg-loginBgColor 2xl:h-47 2xl:w-150  text-9 w-100 h-33 2xl:mt-0 2xl:mb-0 items-center mt-20 mb-20 rounded-xl see-all-matches-hover ">
                See All Matches
              </Button>
            </div>
          </div> */}

          <div className="text-white 2xl:mb-30 w-full 2xl:px-0  ">
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
            <div className="flex justify-center w-full mt-10">
              <Button className="login-button 2xl:text-14 bg-loginBgColor 2xl:h-47 2xl:w-150  text-9 w-full h-33 2xl:mt-0 2xl:mb-0 items-center mt-20 mb-20 rounded-xl see-all-matches-hover ">
                Show More
              </Button>
            </div>
          </div>

          <h1 className="text-white text-30 text-center mt-F">Boxing Matches </h1>

          <div className="text-white 2xl:mb-30 w-full 2xl:px-0  2xl:mt-0 mt-20">
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
          <div className="text-white 2xl:mb-30 w-full 2xl:px-0 2xl:mt-0 mt-20">
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
            <div className="flex justify-center w-full mt-10">
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

export default MatchesCard;
