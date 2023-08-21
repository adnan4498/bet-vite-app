import React from "react";
import "../matchesBetting/MatchesBetting.css";
import "../bettingCards/BettingCards.css"

import { Button, Card } from "antd";


import card1 from "/card1.svg";
import card2 from "/card2.svg";
import card3 from "/card3.svg";
import card4 from "/card4.svg";
import card5 from "/card5.svg";
import card6 from "/card6.svg";
import Frame from '/Frame.svg'

import cirlce from "/smallCircleBettingFeature.svg"

const BettingCards = () => {
  return (
    <>
      <div className="relative">
        <div className="2xl:relative 2xl:block lg:block lg:relative ">
        <img src={cirlce} className="2xl:absolute 2xl:block lg:block lg:absolute hidden 2xl:right-20 2xl:top-800 2xl:w-130" />
        </div>
        <div className="2xl:block ">
          <h2 className="text-white custom-font-family 2xl:text-50 text-center 2xl:mt-150 text-40 mt-50">
            Our Casinos
          </h2>
          <p className="text-center text-white 2xl:text-20 2xl:mt-15 text-12 2xl:pt-0 2xl:mb-0 mb-25 pt-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br className="2xl:block hidden"></br> Lorem Ipsum has
          </p>
        </div>
        

        {/* className="2xl:w-270 w-50" */}

        <div className="2xl:flex lg:flex space-x-20 justify-center 2xl:mt-50 relative ">
          <img src={card1} className="2xl:block lg:block 2xl:w-270 lg:w-150  hidden" />
          <img src={card2} className="2xl:block lg:block 2xl:w-270 lg:w-150 hidden"/>
          <img src={card3} className="2xl:block lg:block 2xl:w-270 lg:w-150 hidden"/>
          <img src={card4} className="2xl:block lg:block 2xl:w-270 lg:w-150 hidden"/>
          <img src={card5} className="2xl:block lg:block 2xl:w-270 lg:w-150 hidden"/>
          <img src={card6} className="2xl:block lg:block 2xl:w-270 lg:w-150 hidden"/>
          
          <img src={card1} className="2xl:hidden lg:hidden block custom-margin w-350 "/>
          <img src={card2} className="2xl:hidden lg:hidden block custom-margin w-350"/>
          <img src={card3} className="2xl:hidden lg:hidden block custom-margin w-350"/>
          <img src={card4} className="2xl:hidden lg:hidden block custom-margin w-350"/>
          <img src={card5} className="2xl:hidden lg:hidden block custom-margin w-350"/>
          <img src={card6} className="2xl:hidden lg:hidden block custom-margin w-350"/>

          <div className="casino 2xl:w-300 lg:w-150"/>
          <img src={Frame} alt="" className="2xl:absolute 2xl:w-120 lg:w-45 lg:-bottom-60 2xl:block lg:block lg:absolute hidden -left-30 -bottom-120" />
        </div>
      </div>

      <div className="flex justify-center 2xl:mt-80 ">
        <Button className="login-button bg-loginBgColor lg:w-105 lg:mt-30 2xl:mt-0 2xl:w-135 2xl:h-45 rounded-lg w-300 mx-auto ">
          Show More
        </Button>
      </div>
    </>
  );
};

export default BettingCards;
