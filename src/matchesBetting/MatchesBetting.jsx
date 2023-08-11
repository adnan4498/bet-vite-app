import { Card } from "antd";
import React from "react";
import "../matchesBetting/MatchesBetting.css";
import indiaIcon from "/indiaIcon.svg";
import plusSign from "/plusSign.svg";
import worldCupTag from "/worldCupTag.svg";
import locationTag from "/locationTag.svg";

const MatchesBetting = () => {
  return (
    <div className="text-white 2xl:mb-200">
      <div className="card-div flex">
        <div className="2xl:w-850 bg-cardDarkBlue card-css">
          <div className="flex card-content">
            <div
              className="text-white flex items-center flex-col justify-center"
              style={{ flex: "30%" }}
            >
              <h1>One Day Match</h1>
              <button>02:45am</button>
              <h1>6 Jul 20223</h1>
            </div>
            <div
              className="text-white bg-cardBlue  "
              style={{ flex: "70%", color: "black" }}
            >
              <div className="justify-center flex 2xl:pl-60 2xl:pr-60 2xl:pt-60">
                <div className="flex justify-between w-full">
                  <div>
                    <img src={indiaIcon} />
                    <h1 className="text-white">India</h1>
                    <h1 className="text-white">168 Point</h1>
                  </div>
                  <h1 className="text-white">vs</h1>
                  <div>
                    <img src={indiaIcon} />
                    <h1 className="text-white">India</h1>
                    <h1 className="text-white">168 Point</h1>
                  </div>
                </div>
              </div>
              <div className="flex justify-between h-70  2xl:mt-60">
                <div className="flex bg-cardPurple w-9/12 justify-around">
                  <div className="flex justify-center items-center">
                    <img
                      className="w-20"
                      src={worldCupTag}
                      alt="World Cup Tag"
                    />
                    <h1 className="text-white bg-cardPurple">World Cup</h1>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      className="w-20"
                      src={worldCupTag}
                      alt="World Cup Tag"
                    />
                    <h1 className="text-white bg-cardPurple">
                      1234 California 10020
                    </h1>
                  </div>
                </div>
                <div className="text-white flex justify-center items-center bg-[#060041] w-3/12 rounded-r-lg">
                  <img className="w-40" src={plusSign} alt="Plus Sign" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Card className="2xl:w-250 2xl:h-250 custom-card ">
        <p>Card content</p>
      </Card> */}
      </div>
    </div>
  );
};

export default MatchesBetting;
