import React from "react";
import "../matchesBetting/MatchesBetting.css";

import { Button, Card } from "antd";


import card1 from "/card1.svg";
import card2 from "/card2.svg";
import card3 from "/card3.svg";
import card4 from "/card4.svg";
import card5 from "/card5.svg";
import card6 from "/card6.svg";

const BettingCards = () => {
  return (
    <>
      <div className="">
        <div className="">
          <h2 className="text-white custom-font-family 2xl:text-50 text-center 2xl:mt-150">
            Our Casinos
          </h2>
          <p className="text-center text-white 2xl:text-20 2xl:mt-15">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br></br> Lorem Ipsum has
          </p>
        </div>

        <div className="flex space-x-20 justify-center 2xl:mt-50">
          <img src={card1} />
          <img src={card2} />
          <img src={card3} />
          <img src={card4} />
          <img src={card5} />
          <img src={card6} />
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
