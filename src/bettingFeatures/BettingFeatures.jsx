import React from "react";
import "../bettingFeatures/BettingFeatures.css";
import bettingFirstImgBg from "@assets/betting-first-img-bg.svg";
import bettingFirstImg from "@assets/betting-first-img.svg";
import { Button } from "antd";

import purpleCircle from "@assets/purpleCircleBettingFeature.svg";
import smallCircle from "@assets/smallCircleBettingFeature.svg";
import halfCircle from "@assets/halfPurpleCircleBettingFeature.svg";
import purpleSplash from "@assets/purpleSplashBettingFeature.svg";
import yellowDot from "@assets/littleYellowDot.svg";

const BettingFeatures = () => {
  return (
    <>
      <div className="2xl:relative 2xl:block hidden lg:block lg:relative">
        <img src={purpleCircle} className="absolute 2xl:-top-100 lg:-top-50 lg:w-90 2xl:w-230" />
        <img src={smallCircle} className="absolute 2xl:right-100 2xl:-top-30 lg:right-45 lg:-top-61 lg:w-30 2xl:w-55" />
        <img src={halfCircle} className="absolute 2xl:right-0 2xl:top-400 lg:w-80 lg:top-227 lg:right-0 2xl:w-200" />
        <img src={purpleSplash} className="absolute 2xl:top-200 2xl:w-500 lg:w-270 lg:top-140" />
        <img src={yellowDot} className="absolute lg:left-83 lg:top-122 lg:w-10 xl:left-244 2xl:w-15 2xl:left-271 2xl:top-300" />
        <img src={yellowDot} className="absolute lg:left-83 lg:top-176 lg:w-10 xl:left-244 2xl:w-15 2xl:left-271 2xl:top-210" />
        <img src={yellowDot} className="absolute lg:left-83 lg:top-222 lg:w-10 xl:left-244 2xl:w-15 2xl:left-271 2xl:top-378" />
        <img src={yellowDot} className="absolute lg:left-83 lg:top-281 lg:w-10 xl:left-244 2xl:w-15 2xl:left-271 2xl:top-460" />
      </div>

      <div className="relative block 2xl:hidden xl:hidden lg:hidden">
      <img src={yellowDot} className="absolute left-12 top-145 w-13" />
      <img src={yellowDot} className="absolute left-12 top-206 w-13" />
      <img src={yellowDot} className="absolute left-12 top-265 w-13" />
      <img src={yellowDot} className="absolute left-13 top-363 w-13" />
      </div>

      <div className="container mx-auto">
        <div className="betting-feature-div 2xl:px-0 xl:px-50 2xl:mt-150 2xl:mb-150 2xl:flex lg:flex lg:justify-evenly container-2 ">
          <div className="flex flex-col">
            <div className="betting-heading 2xl:mt-30 mt-50">
              <h2 className="text-white custom-font-family 2xl:text-60 2xl:mb-0 mb-10 text-27">
                Our Betting features
              </h2>
              <p className="custom-font-family-2 2xl:block hidden text-[#C1C1C1] 2xl:text-16  2xl:mt-20 2xl:ml-5 text-14 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus<br></br>pharetra mi ut leo pulvinar laoreet.
              </p>
              <p className="custom-font-family-2 2xl:hidden block text-[#C1C1C1] 2xl:text-16 2xl:mt-20 2xl:ml-5 text-12 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus
              </p>
            </div>

            <div className="other-lorems 2xl:mt-30 2xl:ml-8 border-l-2 border-[#C1C1C1] 2xl:pl-45 text-11 mt-10 pl-20">
              <p className="text-[#C1C1C1] 2xl:pb-30">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus<br></br>pharetra mi ut leo pulvinar laoreet.
              </p>
              <p className="text-[#C1C1C1] 2xl:pb-30 mt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus<br></br>pharetra mi ut leo pulvinar laoreet.
              </p>
              <p className="text-[#C1C1C1] 2xl:pb-30 mt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus<br></br>pharetra mi ut leo pulvinar laoreet.
              </p>
              <p className="text-[#C1C1C1] mt-10 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus<br></br>pharetra mi ut leo pulvinar laoreet.
              </p>
            </div>

            <Button className="login-button bg-loginBgColor 2xl:w-150 xl:w-130 lg:w-110 2xl:h-49 2xl:mt-50 2xl:ml-7 rounded-lg  mt-55 ">
              Get Started
            </Button>
          </div>

          <div className="4-divs-container 2xl:mt-0 mt-50 2xl:mb-0  ">
            <div className="4-divs 2xl:ml-60 mb-15">
              <div className="betting-first-box 2xl:w-330 2xl:h-290 xl:w-230 bg-[#FFBB00] rounded-xl h-180 ">
                <div className="betting-first-image relative 2xl:mt-0 ">
                  <img
                    src={bettingFirstImgBg}
                    className="absolute inset-0 object-cover 2xl:mt-30 2xl:ml-30 2xl:w-76 w-60 2xl:left-0 2xl:top-0 left-10 top-10"
                  />
                  <img
                    src={bettingFirstImg}
                    className="relative z-10 2xl:top-46 2xl:left-48 2xl:w-42 w-40 left-20 top-20"
                  />
                </div>

                <div className="betting-first-box-text 2xl:pt-88 2xl:pl-30  pt-40 pl-16 ">
                  <p className="text-[#000] 2xl:text-22 custom-font-family-3 text-21">
                    Easy Bets
                  </p>
                  <p className="text-[#000] 2xl:pt-12 custom-font-family-4 2xl:text-16 lg:text-13 lg:pr-5 2xl:pr-0 text-14 ">
                    Lorem ipsum dolor sit amet <br></br> consectetur.
                  </p>
                </div>
              </div>
            </div>

            <div className="4-divs 2xl:ml-60 2xl:mt-33 mb-15">
              <div className="betting-first-box 2xl:w-330 2xl:h-290 bg-[#060041] rounded-xl h-180 ">
                <div className="betting-first-image relative 2xl:mt-0 ">
                  <img
                    src={bettingFirstImgBg}
                    className="absolute inset-0 object-cover 2xl:mt-30 2xl:ml-30 2xl:w-76 w-60 2xl:left-0 2xl:top-0 left-10 top-10"
                  />
                  <img
                    src={bettingFirstImg}
                    className="relative z-10 2xl:top-46 2xl:left-48 2xl:w-42 w-40 left-20 top-20"
                  />
                </div>

                <div className="betting-first-box-text 2xl:pt-88 2xl:pl-30  pt-40 pl-16">
                  <p className="text-[white] 2xl:text-22 custom-font-family-3 text-21">
                    Easy Bets
                  </p>
                  <p className="text-[#C1C1C1] 2xl:pt-12 custom-font-family-4 lg:text-13 lg:pr-5 2xl:pr-0 2xl:text-16 text-14 ">
                    Lorem ipsum dolor sit amet <br></br> consectetur.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="4-divs-container">
            <div className="4-divs 2xl:ml-30 2xl:mt-80 xl:w-230 mb-15">
            <div className="betting-first-box 2xl:w-330 2xl:h-290 bg-[#060041] rounded-xl h-180 ">
                <div className="betting-first-image relative 2xl:mt-0 ">
                  <img
                    src={bettingFirstImgBg}
                    className="absolute inset-0 object-cover 2xl:mt-30 2xl:ml-30 2xl:w-76 w-60 2xl:left-0 2xl:top-0 left-10 top-10"
                  />
                  <img
                    src={bettingFirstImg}
                    className="relative z-10 2xl:top-46 2xl:left-48 2xl:w-42 w-40 left-20 top-20"
                  />
                </div>

                <div className="betting-first-box-text 2xl:pt-88 2xl:pl-30  pt-40 pl-16">
                  <p className="text-[white] 2xl:text-22 custom-font-family-3 text-21">
                    Easy Bets
                  </p>
                  <p className="text-[#C1C1C1] 2xl:pt-12 custom-font-family-4 lg:text-13 lg:pr-5 2xl:pr-0 2xl:text-16 text-14 ">
                    Lorem ipsum dolor sit amet <br></br> consectetur.
                  </p>
                </div>
              </div>
            </div>

            <div className="4-divs 2xl:ml-30 2xl:mt-33">
            <div className="betting-first-box 2xl:w-330 2xl:h-290 bg-[#060041] rounded-xl h-180 ">
                <div className="betting-first-image relative 2xl:mt-0 ">
                  <img
                    src={bettingFirstImgBg}
                    className="absolute inset-0 object-cover 2xl:mt-30 2xl:ml-30 2xl:w-76 w-60 2xl:left-0 2xl:top-0 left-10 top-10"
                  />
                  <img
                    src={bettingFirstImg}
                    className="relative z-10 2xl:top-46 2xl:left-48 2xl:w-42 w-40 left-20 top-20"
                  />
                </div>

                <div className="betting-first-box-text 2xl:pt-88 2xl:pl-30  pt-40 pl-16">
                  <p className="text-white 2xl:text-22 custom-font-family-3 text-21">
                    Easy Bets
                  </p>
                  <p className="text-[#C1C1C1]  2xl:pt-12 custom-font-family-4 lg:text-13 lg:pr-5 2xl:pr-0 2xl:text-16 text-14 ">
                    Lorem ipsum dolor sit amet <br></br> consectetur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BettingFeatures;
