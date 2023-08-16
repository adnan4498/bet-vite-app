import React from "react";
import "../bettingFeatures/BettingFeatures.css";
import bettingFirstImgBg from "/betting-first-img-bg.svg";
import bettingFirstImg from "/betting-first-img.svg";
import { Button } from "antd";

import purpleCircle from "/purpleCircleBettingFeature.svg";
import smallCircle from "/smallCircleBettingFeature.svg";
import halfCircle from "/halfPurpleCircleBettingFeature.svg";
import purpleSplash from "/purpleSplashBettingFeature.svg";
import yellowDot from "/littleYellowDot.svg";

const BettingFeatures = () => {
  return (
    <>
      <div className="2xl:relative 2xl:block hidden">
        <img src={purpleCircle} className="absolute 2xl:-top-100" />
        <img src={smallCircle} className="absolute 2xl:right-100 2xl:-top-30" />
        <img src={halfCircle} className="absolute 2xl:right-0 2xl:top-400" />
        <img src={purpleSplash} className="absolute 2xl:top-200" />
        <img src={yellowDot} className="absolute 2xl:left-278 2xl:top-300" />
        <img src={yellowDot} className="absolute 2xl:left-278 2xl:top-210" />
        <img src={yellowDot} className="absolute 2xl:left-278 2xl:top-378" />
        <img src={yellowDot} className="absolute 2xl:left-278 2xl:top-460" />
      </div>

      <div className="relative block 2xl:hidden">
      <img src={yellowDot} className="absolute left-12 top-145 w-13" />
      <img src={yellowDot} className="absolute left-12 top-206 w-13" />
      <img src={yellowDot} className="absolute left-12 top-265 w-13" />
      <img src={yellowDot} className="absolute left-12 top-362 w-13" />
      </div>

      <div className="container mx-auto">
        <div className="betting-feature-div 2xl:mt-150 2xl:mb-150 2xl:flex container-2 ">
          <div className="flex flex-col">
            <div className="betting-heading 2xl:mt-30 mt-50">
              <h2 className="text-white custom-font-family 2xl:text-60 2xl:mb-0 mb-10 text-27">
                Our Betting features
              </h2>
              <p className="custom-font-family-2 2xl:block hidden text-[#C1C1C1] 2xl:text-16 2xl:mt-20 2xl:ml-5 text-14 ">
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

            <Button className="login-button bg-loginBgColor 2xl:w-150 2xl:h-49 2xl:mt-50 2xl:ml-7 rounded-lg  mt-55 ">
              Get Started
            </Button>
          </div>

          <div className="4-divs-container 2xl:mt-0 mt-50 2xl:mb-0  ">
            <div className="4-divs 2xl:ml-60 mb-15">
              <div className="betting-first-box 2xl:w-330 2xl:h-290 bg-[#FFBB00] rounded-xl h-180 ">
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
                  <p className="text-[#000] 2xl:pt-12 custom-font-family-4 2xl:text-16 text-14 ">
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
                  <p className="text-[#C1C1C1] 2xl:pt-12 custom-font-family-4 2xl:text-16 text-14 ">
                    Lorem ipsum dolor sit amet <br></br> consectetur.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="4-divs-container">
            <div className="4-divs 2xl:ml-30 2xl:mt-80 mb-15">
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
                  <p className="text-[#C1C1C1] 2xl:pt-12 custom-font-family-4 2xl:text-16 text-14 ">
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
                  <p className="text-[#C1C1C1]  2xl:pt-12 custom-font-family-4 2xl:text-16 text-14 ">
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
