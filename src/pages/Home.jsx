import React from "react";
import coverDriveOnlineImage from "../../public/cover-drive-online-home.svg";
import playUnlimited from "../../public/Play-Unlimited.svg";
import bestInvestment from "../../public/Best-Investment.svg";
import sportsPlayers from "../../public/sports-players-img.svg";
import { Button } from "antd";
import "../../src/pages/Home.css";

const Home = () => {
  return (
    <div className="container-2">
      <div className="flex">
        <div>
          <img
            src={coverDriveOnlineImage}
            className="sm:w-700 sm:mt-140  w-250"
          />
          <img src={playUnlimited} className=" sm:mt-22 sm:w-230" />
          <img src={bestInvestment} className=" sm:w-720 sm:mt-25" />

          <div className="flex sm:mt-25 ">
            <Button className="sm:mr-20 sm:w-100 bg-loginBgColor login-button">
              {" "}
              Login{" "}
            </Button>
            <Button className="sm:mr-20  bg-loginBgColor crypto-currency-button">
              {" "}
              Only Cryptop Currency Use{" "}
            </Button>
            {/* <Button/> */}
          </div>
        </div>

        <div>
          <img src={sportsPlayers} className="sm:w-570 sm:mt-30 sm:ml-130" />
        </div>
      </div>
    </div>
  );
};

export default Home;
