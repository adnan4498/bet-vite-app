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
import half from '/halfCircle.svg'
import purpleEclipseBetting from "/purpleEclipseBettig.svg";
import Vector1 from '/Vector1.svg'
import Vector2 from '/Vector2.svg'
import Vector3 from '/Vector3.svg'
import Vector4 from '/Vector4.svg'
import halfCircle from "/howItWorkHalfCircle.svg";
import './MatchesCard.css'

const MatchesCard = () => {
  return (
    <>
      <img src={half} alt="" className="absolute right-0 top-900"/>
      <div className="blur"/>
    <div className="container mx-auto relative">
    
      <div className="container-2">
        <div>
          <h2 className=" text-white custom-font-family 2xl:text-50 text-center 2xl:mt-100 2xl:mb-40 ">
            Cricket Matches
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

        <div className="flex justify-center 2xl:mt-60">
          <Button className="login-button bg-loginBgColor 2xl:w-135 2xl:h-45 rounded-lg">Show More</Button>
          </div>
      </div>
      

      <div className="container-2 relative">
        <img src={purpleEclipseBetting} alt="" className="absolute -left-300  top-40" style={{zIndex: -1}} />
        <img src={Vector1} alt="" className="absolute -left-300  " style={{zIndex: -1 , top: "550px"}} />
        <img src={Vector2} alt="" className="absolute -left-300 " style={{zIndex: -1, top: "550px"}} />
        <img src={Vector3} alt="" className="absolute -right-265 " style={{zIndex: -1, top: "150px"}} />
        <img src={Vector4} alt="" className="absolute -right-265 " style={{zIndex: -1, top: "50px"}} />
       

        <div>
          <h2 className=" text-white custom-font-family 2xl:text-50 text-center 2xl:mt-150 2xl:mb-40 ">
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


        <div className="flex justify-center 2xl:mt-60">
          <Button className="login-button bg-loginBgColor 2xl:w-135 2xl:h-45 rounded-lg">Show More</Button>
          </div>
      </div>

      <div className="container-2 relative">
      <img src={halfCircle} alt="" className="absolute -left-300 " style={{zIndex: -1, top: "800px"}} />
        <div>
          <h2 className=" text-white custom-font-family 2xl:text-50 text-center 2xl:mt-150 2xl:mb-40 ">
            Boxing Matches
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

        <div className="flex justify-center 2xl:mt-60">
          <Button className="login-button bg-loginBgColor 2xl:w-135 2xl:h-45 rounded-lg">Show More</Button>
          </div>
      </div>
      </div>
    </>
  );
};

export default MatchesCard;
