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
        <div className="2xl:relative 2xl:block hidden">
        <img src={cirlce} className="absolute 2xl:right-20 2xl:top-800 2xl:w-130" />
        </div>
        <div className="2xl:block hidden">
          <h2 className="text-white custom-font-family 2xl:text-50 text-center 2xl:mt-150">
            Our Casinos
          </h2>
          <p className="text-center text-white 2xl:text-20 2xl:mt-15">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br></br> Lorem Ipsum has
          </p>
        </div>

        {/* className="2xl:w-270 w-50" */}

        <div className="2xl:flex  space-x-20 justify-center 2xl:mt-50 relative ">
          <img src={card1} className="2xl:block hidden" />
          <img src={card2} className="2xl:block hidden"/>
          <img src={card3} className="2xl:block hidden"/>
          <img src={card4} className="2xl:block hidden"/>
          <img src={card5} className="2xl:block hidden"/>
          <img src={card6} className="2xl:block hidden"/>
          
          <img src={card1} className="2xl:hidden block custom-margin w-350"/>
          <img src={card2} className="2xl:hidden block custom-margin w-350"/>
          <img src={card3} className="2xl:hidden block custom-margin w-350"/>
          <img src={card4} className="2xl:hidden block custom-margin w-350"/>
          <img src={card5} className="2xl:hidden block custom-margin w-350"/>
          <img src={card6} className="2xl:hidden block custom-margin w-350"/>

          <div className="casino"/>
          <img src={Frame} alt="" className="absolute -left-30 -bottom-120" />
        </div>
      </div>

      <div className="flex justify-center 2xl:mt-80">
        <Button className="login-button bg-loginBgColor 2xl:w-135 2xl:h-45 rounded-lg">
          Show More
        </Button>
      </div>
    </>
  );
};

export default BettingCards;
