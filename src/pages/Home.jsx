import React from "react";
import coverDriveOnlineImage from "../../public/cover-drive-online-home.svg";
import playUnlimited from "../../public/Play-Unlimited.svg";
import bestInvestment from "../../public/Best-Investment.svg";
import sportsPlayers from "../../public/sports-players-img.svg";
import { Button } from "antd";
import "../../src/pages/Home.css";

const Home = () => {
  return (
    <div className="xl:container xl:mx-auto container-lg container-xs">
      <div className="xl:container-2 container-xs">
        <div className="flex flex-col sm:flex-row sm:mt-0  ">
          <div className="z-10">
            {/* <img src={coverDriveOnlineImage} className="sm:w-700 sm:mt-160 w-350  " /> */}
            <img
              src={coverDriveOnlineImage}
              className=" 2xl:mt-160 xl:mt-100 mt-30 xl:w-10/12 lg:w-9/12 lg:mt-70"
            />

            <img
              src={playUnlimited}
              className="2xl:w-260 2xl:mt-28 2xl:mb-30 sm:mt-22 sm:w-230 w-250 mt-13 xl:w-4/12 lg:w-180"
            />
            <img
              src={bestInvestment}
              className="2xl:w-1050 xl:w-550 sm:w-930 sm:mt-25 mt-9 lg:w-10/12"
            />

            <div className="flex sm:mt-25 mt-15">
              <Button className="2xl:w-160 2xl:text-2xl  xl:text-lg xl:w-130 2xl:h-60 lg:h-45 lg:w-110  xl:h-46 sm:mr-20 sm:h-50 lg:text-17 sm:text-2xl text-xs w-100 mr-10 rounded-lg bg-loginBgColor login-button">
                {" "}
                Login{" "}
              </Button>
              <Button className="2xl:text-2xl xl:text-16 xl:w-260 lg:w-210  lg:h-45 xl:h-46 2xl:w-450 2xl:h-60 lg:text-13 sm:mr-20 sm:h-50  text-xs rounded-lg bg-loginBgColor crypto-currency-button">
                {" "}
                Only Cryptop Currency Use
              </Button>
              {/* <Button/> */}
            </div>
          </div>
          <div className="z-10 flex justify-center">
            <img
              src={sportsPlayers}
              className=" 2xl:max-w-122 2xl:w-800 sm:mt-30 sm:max-w-117 mt-30 xl:max-w-119 xl:ml-20  xs:w-380 lg:w-530 xs:pr-0 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
