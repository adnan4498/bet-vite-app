import { Button, Card } from "antd";
import React, { useEffect, useState } from "react";
import "../matchesBetting/MatchesBetting.css";
import indiaIcon from "@assets/indiaIcon.svg";
import pakistanIcon from "@assets/pakistanIcon.svg";
import austriliaIcon from "@assets/australiaIcon.svg";
import englandIcon from "@assets/englandIcon.svg";
import africanIcon from "@assets/africanIcon.svg";

import plusSign from "@assets/plusSign.svg";
import worldCupTag from "@assets/worldCupTag.svg";
import locationTag from "@assets/locationTag.svg";

import purpleEclipseBetting from "@assets/purpleEclipseBettig.svg";
import bettingCircle from "@assets/circleBetting.svg";
import pinkEclipseBetting from "@assets/pinkEclipseBetting.svg";
import pink from "@assets/pink-dot-all-match.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";

const MatchesBetting = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const apiFunc = () => {
      const apiUrl =
        "https://rest.entitysport.com/v2/matches/?status=2&token=ec471071441bb2ac538a0ff901abd249";

      axios
        .get(apiUrl)
        .then((response) => {
          const data = response.data.response.items;
          console.log(data);
          setMatches(data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    apiFunc();
  }, []);

  return (
    <>
      <div className="relative ">
        <img
          src={purpleEclipseBetting}
          className="2xl:absolute lg:absolute lg:block xs:hidden 2xl:w-450 lg:w-250 lg:-top-50 2xl:block 2xl:left-0 2xl:-top-100 2xl:h-670"
        />
        <img
          src={bettingCircle}
          className="2xl:absolute lg:absolute lg:block xs:hidden 2xl:block 2xl:right-0 2xl:-top-255 2xl:w-170 lg:right-0 lg:w-100 lg:-top-110 z-50"
        />
        <div className="-z-1">
          <img
            src={pinkEclipseBetting}
            className="2xl:absolute lg:absolute lg:-right-0 lg:-top-140 2xl:w-600 lg:w-330 lg:block xs:hidden 2xl:block 2xl:right-0 2xl:-top-250 -z-1"
          />
          <img
            src={pink}
            className="lg:absolute lg:block hidden 2xl:bottom-450 2xl:right-0 2xl:w-550 lg:right-0 lg:bottom-100 lg:w-350 "
          />
        </div>

        <div className="2xl:container 2xl:mx-auto 2xl:mt-0 lg:mt-80 ">
          <div className="relative  lg:w-10/12 lg:mx-auto">
            <div className="container-3">
              <div className="text-white 2xl:text-60 lg:pb-0 lg:text-left lg:text-40 text-center 2xl:text-left custom-font-family 2xl:mt-150 z-10 text-26 2xl:pb-0 pb-10 lg:mt-0 mt-50 ">
                All Matches For Betting
              </div>

              <div className="text-[#d8d0d0] lg:mt-0 lg:mb-20 2xl:text-16 2xl:mt-20 mt-10 lg:text-15  2xl:-mr-13 2xl:mb-50 custom-font-family-2 items-center 2xl:text-left text-center 2xl:flex 2xl:flex-row flex lg:flex-row flex-col justify-between see-all-matches-hover z-10 text-12 ">
                <div className="lg:text-start">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phaselluspharetra <br className="2xl:block hidden"></br> mi ut
                  leo pulvinar laoreet.
                </div>
                <div className="2xl:w-150 w-full lg:text-right">
                  <Button className="login-button 2xl:text-14   bg-loginBgColor 2xl:h-47 2xl:w-150 lg:w-100 w-11/12 text-9 h-33 2xl:mt-0 2xl:mb-0 items-center mt-20 mb-20 rounded-xl see-all-matches-hover ">
                    <Link to="/matches">See All Matches</Link>
                  </Button>
                </div>
              </div>

              <div className="text-white 2xl:mb-30 w-full 2xl:px-0 lg:px-0 ">
                <div className="card-div flex 2xl:justify-start w-full">
                  <div className="2xl:flex max-w-full w-full lg:flex">
                    {matches?.slice(0, 10).map((item) => {
                      const dateFormatting = new Date(item.date_start);
                      const formatted = format(dateFormatting, "d MMMM yyyy");
                      return (
                        <div className="2xl:w-660 w-full h-149 2xl:h-319 lg:mr-15  bg-cardDarkBlue card-css 2xl:mr-30">
                          <div className="flex card-content">
                            <div className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2">
                              <h1 className="  text-8 2xl:text-20">
                                {item.competition.match_format.toUpperCase()}
                              </h1>
                              <Button className="login-button bg-loginBgColor text-7 2xl:text-17 w-60 h-27 2xl:rounded-xl 2xl:w-125 2xl:h-42 2xl:text-sm ">
                                {item.date_start.slice(11, 16)}
                              </Button>
                              <h1 className="text-8 2xl:text-17 ">
                                {formatted}
                              </h1>
                            </div>
                            <div className="2xl:text-white bg-cardBlue rounded-r-lg 2xl:w-430 w-9/12 h-149 2xl:h-319 ">
                              <div className="justify-center flex 2xl:pl-30 2xl:pr-30 2xl:pt-40">
                                <div className="flex 2xl:justify-between justify-around w-370 2xl:pt-0 pt-15">
                                  <div>
                                    <img
                                      className="2xl:w-97 h-93 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full 2xl:mx-auto "
                                      src={item.teama.logo_url}
                                    />
                                    <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10 lg:mx-auto">
                                      {item.teama.name}
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
                                      className="2xl:w-97 h-93 w-45 2xl:border-4 border-2 2xl:border-[#FFBB00] border-[#FFBB00] rounded-full 2xl:rounded-full 2xl:mx-auto"
                                      src={item.teamb.logo_url}
                                    />
                                    <h1 className="2xl:text-white text-center 2xl:mt-25 2xl:text-16 text-11 pt-10 ">
                                      {item.teamb.name}
                                    </h1>
                                    <h1 className="2xl:text-white text-center 2xl:mt-5 text-10 2xl:text-16">
                                      168 Point
                                    </h1>
                                  </div>
                                </div>
                              </div>
                              <div className="flex  2xl:h-70 2xl:mt-27 mt-22">
                                <div className="flex 2xl:bg-cardPurple bg-cardPurple 2xl:w-465 w-280 2xl:h-70 h-25  justify-around">
                                  <div className="flex justify-center items-center 2xl:ml-8 ">
                                    <img
                                      className="2xl:w-20"
                                      src={worldCupTag}
                                      alt="World Cup Tag"
                                    />
                                    <h1 className="2xl:text-[#FFF] 2xl:bg-cardPurple 2xl:text-11 text-8 2xl:pl-10 pl-4">
                                      {item.competition.title}
                                    </h1>
                                  </div>
                                  <div className="flex justify-center items-center">
                                    <img
                                      className="2xl:w-15"
                                      src={locationTag}
                                      alt="World Cup Tag"
                                    />
                                    <h1 className="2xl:text-white 2xl:bg-cardPurple 2xl:pl-10 text-8 2xl:text-11 pl-4">
                                      {item.venue.location} ,{" "}
                                      {item.venue.country}
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
                      );
                    })}

                    {/* <div className="2xl:w-660 w-full h-149 2xl:h-319 bg-cardDarkBlue card-css 2xl:mr-30 2xl:mt-0 lg:mt-0 mt-20">
                      <div className="flex card-content">
                        <div
                          className="2xl:text-white 2xl:w-660  w-full flex items-center flex-col justify-center 2xl:leading-108 leading-50  custom-font-family-2"
                          // style={{ flex: "28%" }}
                        >
                          <h1 className="  text-8 2xl:text-17">
                            One Day Match
                          </h1>
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
                    </div> */}
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
                          <h1 className="  text-8 2xl:text-17">
                            One Day Match
                          </h1>
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
                          <h1 className="  text-8 2xl:text-17">
                            One Day Match
                          </h1>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MatchesBetting;
