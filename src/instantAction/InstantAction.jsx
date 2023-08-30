import React from "react";
// import coverDriveOnlineImage from "@asseetssrc/assets/cover-drive-online-home.svg";
// import playUnlimited from "@asseetssrc/assets/Play-Unlimited.svg";
// import bestInvestment from "@asseetssrc/assets/Best-Investment.svg";
// import sportsPlayers from "@asseetssrc/assets/sports-players-img.svg";
import ellipse from "@assets/Ellipse.svg";
import { Button } from "antd";
import "../pages/Home.css";
import icon1 from "@assets/group1.svg";
import icon2 from "@assets/group2.svg";
import icon3 from "@assets/group3.svg";
import icon4 from "@assets/group4.svg";
import icon5 from "@assets/group5.svg";

// import icon2 from '@asseetssrc/assets/Group128.svg'
// import icon3 from '@asseetssrc/assets/Group126.svg'
// import icon4 from '@asseetssrc/assets/Group127.svg'

const InstantAction = () => {
  return (
    <>
      <div className="container"></div>
      <div className="flex flex-col items-center gap-59 2xl:py-100 lg:pt-50 lg:pb-50  relative">
        <img
          src={ellipse}
          alt=""
          className="2xl:w-full lg:mt-15 absolute top-0 bottom-0 hidden lg:block "
        />
        <div className="md:text-6xl text-2xl text-white font-bold z-50">
          <h1 className="action-heading 2xl:text-48  lg:text-30 ">
            Instant Action?
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col justify-between gap-60 z-50">
          <img src={icon1} alt="" className="xl:w-150 lg:w-100 2xl:w-190"  />
          <img src={icon2} alt="" className="xl:w-130 lg:w-80 2xl:w-160"  />
          <img src={icon3} alt="" className="xl:w-150 lg:w-100 2xl:w-190"  />
          <img src={icon4} alt="" className="xl:w-130 lg:w-80 2xl:w-160"  />
          <img src={icon5} alt="" className="xl:w-150 lg:w-100 2xl:w-190"  />
        </div>
      </div>
    </>
  );
};

export default InstantAction;
