import React from "react";
import "../bettingFeatures/BettingFeatures.css"
import bettingFirstImgBg from "/betting-first-img-bg.svg"
import bettingFirstImg from "/betting-first-img.svg"
import { Button } from 'antd';

import purpleCircle from "/purpleCircleBettingFeature.svg"
import smallCircle from "/smallCircleBettingFeature.svg"
import halfCircle from "/halfPurpleCircleBettingFeature.svg"
import purpleSplash from "/purpleSplashBettingFeature.svg"
import yellowDot from "/littleYellowDot.svg"

const BettingFeatures = () => {
  return (
    <>
    <div className="relative">
      <img src={purpleCircle} className="absolute 2xl:-top-100" />
      <img src={smallCircle} className="absolute 2xl:right-100 2xl:-top-30" />
      <img src={halfCircle} className="absolute 2xl:right-0 2xl:top-400" />
      <img src={purpleSplash} className="absolute 2xl:top-200"/>
      <img src={yellowDot} className="absolute 2xl:left-270 2xl:top-210"/>
      <img src={yellowDot} className="absolute 2xl:left-270 2xl:top-300"/>
      <img src={yellowDot} className="absolute 2xl:left-270 2xl:top-378"/>
      <img src={yellowDot} className="absolute 2xl:left-270 2xl:top-490"/>
    </div>
    <div className="container mx-auto">
    <div className="betting-feature-div 2xl:mt-150 2xl:mb-150 flex container-2 ">
     <div className="flex flex-col">   
      <div className="betting-heading 2xl:mt-30">
        <h2 className="text-white custom-font-family 2xl:text-60">Our Betting features</h2>
        <p className="custom-font-family-2 text-[#C1C1C1] 2xl:text-16 2xl:mt-20 2xl:ml-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus<br></br>pharetra mi ut leo pulvinar laoreet.
        </p>
      </div>

      <div className="other-lorems 2xl:mt-30 2xl:ml-8 border-l-2 border-[#C1C1C1] 2xl:pl-45">
        <p className="text-[#C1C1C1] 2xl:pb-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus<br></br>pharetra mi ut leo pulvinar laoreet.</p>
        <p className="text-[#C1C1C1] 2xl:pb-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus<br></br>pharetra mi ut leo pulvinar laoreet.</p>
        <p className="text-[#C1C1C1] 2xl:pb-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus<br></br>pharetra mi ut leo pulvinar laoreet.</p>
        <p className="text-[#C1C1C1] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus<br></br>pharetra mi ut leo pulvinar laoreet.</p>
      </div>


      <Button className="login-button bg-loginBgColor 2xl:w-150 2xl:h-49 2xl:mt-50 2xl:ml-7 rounded-lg ">Get Started</Button>
      </div>

    <div className="4-divs-container">
      <div className="4-divs 2xl:ml-60">
        <div className="betting-first-box 2xl:w-330 2xl:h-290 bg-[#FFBB00] rounded-xl">
            <div className="betting-first-image relative">
                <img src={bettingFirstImgBg} className="absolute inset-0 object-cover 2xl:mt-30 2xl:ml-30" />
                <img src={bettingFirstImg} className="relative z-10 2xl:top-46 2xl:left-48" />
            </div>

            <div className="betting-first-box-text 2xl:pt-88 2xl:pl-30">
                <p className="text-[#000] 2xl:text-22 custom-font-family-3">Easy Bets</p>
                <p className="text-[#000] 2xl:pt-12 custom-font-family-4">Lorem ipsum dolor sit amet <br></br> consectetur.</p>
            </div>
        </div>
      </div>

      <div className="4-divs 2xl:ml-60 2xl:mt-33">
        <div className="betting-first-box 2xl:w-330 2xl:h-290 bg-[#060041] rounded-xl">
            <div className="betting-first-image relative">
                <img src={bettingFirstImgBg} className="absolute inset-0 object-cover 2xl:mt-30 2xl:ml-30" />
                <img src={bettingFirstImg} className="relative z-10 2xl:top-46 2xl:left-48" />
            </div>

            <div className="betting-first-box-text 2xl:pt-88 2xl:pl-30">
                <p className="text-white 2xl:text-22 custom-font-family-3">Easy Bets</p>
                <p className="text-[#C1C1C1] 2xl:pt-12 custom-font-family-4">Lorem ipsum dolor sit amet <br></br> consectetur.</p>
            </div>
        </div>
      </div>
      </div>

      <div className="4-divs-container">
      <div className="4-divs 2xl:ml-30 2xl:mt-80">
        <div className="betting-first-box 2xl:w-330 2xl:h-290 bg-[#060041] rounded-xl">
            <div className="betting-first-image relative">
                <img src={bettingFirstImgBg} className="absolute inset-0 object-cover 2xl:mt-30 2xl:ml-30" />
                <img src={bettingFirstImg} className="relative z-10 2xl:top-46 2xl:left-48" />
            </div>

            <div className="betting-first-box-text 2xl:pt-88 2xl:pl-30">
                <p className="text-white 2xl:text-22 custom-font-family-3">Easy Bets</p>
                <p className="text-[#C1C1C1] 2xl:pt-12 ">Lorem ipsum dolor sit amet <br></br> consectetur.</p>
            </div>
        </div>
      </div>

      <div className="4-divs 2xl:ml-30 2xl:mt-33">
        <div className="betting-first-box 2xl:w-330 2xl:h-290 bg-[#060041] rounded-xl">
            <div className="betting-first-image relative">
                <img src={bettingFirstImgBg} className="absolute inset-0 object-cover 2xl:mt-30 2xl:ml-30" />
                <img src={bettingFirstImg} className="relative z-10 2xl:top-46 2xl:left-48" />
            </div>

            <div className="betting-first-box-text 2xl:pt-88 2xl:pl-30">
                <p className="text-white 2xl:text-22 custom-font-family-3">Easy Bets</p>
                <p className="text-[#C1C1C1] 2xl:pt-12 custom-font-family-4">Lorem ipsum dolor sit amet <br></br> consectetur.</p>
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
