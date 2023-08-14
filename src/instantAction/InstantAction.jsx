import React from "react";
// import coverDriveOnlineImage from "../../public/cover-drive-online-home.svg";
// import playUnlimited from "../../public/Play-Unlimited.svg";
// import bestInvestment from "../../public/Best-Investment.svg";
// import sportsPlayers from "../../public/sports-players-img.svg";
import ellipse from '/Ellipse.svg'
import { Button } from "antd";
import "../../src/pages/Home.css";
import icon1 from '/group1.svg'
import icon2 from '/group2.svg'
import icon3 from '/group3.svg'
import icon4 from '/group4.svg'
import icon5 from '/group5.svg'

// import icon2 from '../../public/Group128.svg'
// import icon3 from '../../public/Group126.svg'
// import icon4 from '../../public/Group127.svg'

const InstantAction = () => {
  return (
    <>
    <div className="container-2">
    </div>
     <div className="flex flex-col items-center gap-59 py-100 relative">
     <img src={ellipse} alt="" className="w-full absolute top-0 bottom-0 hidden md:block" />
       <div className="md:text-6xl text-2xl text-white font-bold z-50">
         
       <h1>Instant Action?</h1>
       
       </div>
       <div className="flex md:flex-row flex-col justify-between gap-70 z-50">
       <img src={icon1} alt=""/>
       <img src={icon2} alt=""/>
       <img src={icon3} alt=""/>
       <img src={icon4} alt=""/>
       <img src={icon5} alt=""/>
       </div>
     </div>
     </>
  );
};

export default InstantAction;