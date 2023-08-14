import React from "react";
import coverDriveOnlineImage from "../../public/cover-drive-online-home.svg";
import playUnlimited from "../../public/Play-Unlimited.svg";
import bestInvestment from "../../public/Best-Investment.svg";
import sportsPlayers from "../../public/sports-players-img.svg";
import { Button } from "antd";
import "../../src/pages/Home.css";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="container-2 ">
        <div className="flex flex-col sm:flex-row sm:mt-0  ">
          <div className="z-10">
            {/* <img src={coverDriveOnlineImage} className="sm:w-700 sm:mt-160 w-350  " /> */}
            <img
              src={coverDriveOnlineImage}
              className=" 2xl:mt-160 xl:mt-150 mt-30 "
            />

            <img
              src={playUnlimited}
              className="2xl:w-260 2xl:mt-28 2xl:mb-30 sm:mt-22 sm:w-230 w-250 mt-13 xl:w-250 xl  "
            />
            <img
              src={bestInvestment}
              className="2xl:w-1050 xl:w-850   sm:w-930 sm:mt-25 mt-9"
            />

            <div className="flex sm:mt-25 mt-15">
              <Button className="2xl:w-140 2xl:text-2xl xl:text-lg xl:w-125 xl:h-46 sm:mr-20 sm:h-50 sm:text-2xl text-xs w-100 mr-10 rounded-lg bg-loginBgColor login-button">
                {" "}
                Login{" "}
              </Button>
              <Button className="2xl:text-2xl xl:text-lg xl:h-46  sm:mr-20 sm:h-50  text-xs rounded-lg bg-loginBgColor crypto-currency-button">
                {" "}
                Only Cryptop Currency Use{" "}
              </Button>
              {/* <Button/> */}
            </div>
          </div>
          <div className="z-10">
            <img
              src={sportsPlayers}
              className=" 2xl:max-w-122 sm:mt-30  sm:max-w-117 mt-30 max-w-101 xl:max-w-119 xl:ml-20  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
