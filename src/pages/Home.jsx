import React, { useState } from "react";
import coverDriveOnlineImage from "@assets/cover-drive-online-home.svg";
import playUnlimited from "@assets/Play-Unlimited.svg";

// import bestInvestment from "@asseetssrc/assets/Best-Investment.svg";
import bestInvestment from "@assets/Best-Investment.svg";

import sportsPlayers from "@assets/sports-players-img.svg";
import Circle from "@assets/rounded-circle.svg";
import Daimond from "@assets/diamond.png";
import { Button, Modal } from "antd";
import "../pages/Home.css";
// import InstantAction from "@assets/InstantAction";
// import MatchesBetting from "@assets/matchesBetting/MatchesBetting";
// import Casino from "@assets/casino/Casino";
// import HowItWorks from "@assets/howItWorks/HowItWorks";
// import BettingFeatures from "@assets/bettingFeatures/BettingFeatures";
// import WantToWin from "@assets/wantToWin/WantToWin";
// import Clients from "@assets/clients/Clients";
// import Footballers from "@assets/footballers/Footballers";
// import MatchesCard from "@assets/MatchesCard/MatchesCard";
// import BettingCards from "@assets/bettingCards/BettingCards";
// import MatchesCard2 from "@assets/matchesCard2/MatchesCard2";
// import MatchesCard3 from "@assets/matchesCard3/MatchesCard3";
import { Link } from "react-router-dom";
import InstantAction from "../instantAction/InstantAction";
import MatchesBetting from "../matchesBetting/MatchesBetting";
import Casino from "../casino/Casino";
import HowItWorks from "../howItWorks/HowItWorks";
import BettingFeatures from "../bettingFeatures/BettingFeatures";
import WantToWin from "../wantToWin/WantToWin";
import Footballers from "../footballers/Footballers";
import Clients from "../clients/Clients";

const Home = ({isHidden , setIsHidden , isTransform , setIsTransform}) => {


  const [isModalOpen, setIsModalOpen] = useState(false)

  console.log("isHidden" , isHidden)


  const showModal = () => {
    setIsModalOpen(true);
    setIsHidden(true)
    setIsTransform(true)
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setIsHidden(false)
    setIsTransform(false)
  };
  return (
    <div className="xl:mx-auto ">
      <div className="xl:container-2 container-xs">
        <div className="flex flex-col sm:flex-row sm:mt-0  ">
          <div className="z-10 2xl:w-700 2xl:ml-195">
            
            <img
              src={coverDriveOnlineImage}
              className={`${isTransform ? " 2xl:mt-160 xl:mt-100 mt-30 xl:w-10/12 lg:w-9/12 lg:mt-70 transform-class" : " 2xl:mt-160 xl:mt-100 mt-30 xl:w-10/12 lg:w-9/12 lg:mt-70 transform-class-out"  }`}
            />

            <img
              src={playUnlimited}
              className="2xl:w-260 2xl:mt-28 2xl:mb-30 sm:mt-22 sm:w-230 w-250 mt-13 xl:w-4/12 lg:w-180"
            />
            <img
              src={bestInvestment}
              // className=" 2xl:w-1050 xl:w-550 sm:w-930 sm:mt-25 mt-9 lg:w-10/12"
              className={`${
                isHidden
                  ? 'opacity-0 transition-opacity duration-500 ease-in-out'
                  : '2xl:w-1050 xl:w-550 sm:w-930 sm:mt-25 mt-9 lg:w-10/12 duration-500 ease-in-out'
              }`} />

            <div className="flex sm:mt-25 mt-15">
              <Button onClick={()=> showModal()} className="2xl:w-160 2xl:text-2xl  xl:text-lg xl:w-130 2xl:h-60 lg:h-45 lg:w-110  xl:h-46 sm:mr-20 sm:h-50 lg:text-17 sm:text-2xl text-xs w-100 mr-10 rounded-lg bg-loginBgColor login-button">
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
        <div>
        <InstantAction />
      </div>

      <div className="">
        <MatchesBetting />
      </div>

      <div className="">
        <Casino />
      </div>

      <div className="">
        <HowItWorks />
      </div>

  
      <div className="">
        <BettingFeatures/>
      </div>
       <div>
        <WantToWin/>
      </div>
    

 
      <div className="">
        <Clients/>
      </div>

      <div className="">
        <Footballers/>
        </div>
        {/* Modal */}
        {Modal && 
         <Modal width={670} footer={false} closable={false} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
         <div className="px-3 lg:h-700 border border-white py-16 rounded-lg border-2 w-full mx-auto px-58 relative bg-[#1D0140]">
         <img className="absolute -left-20 -top-20" src={Circle} alt="" />
         <img className="absolute -left-40 -bottom-40 w-170" src={Daimond} alt="" />
         <img className="absolute -right-0 -bottom-0 w-45" src={Daimond} alt="" />
         <img className="absolute right-30 bottom-40 w-60" src={Daimond} alt="" />
         <div className="blur-img"/>
         
          <div className="w-10/12 mx-auto ">
            
            <h1 className="text-white text-4xl text-center text-bold input-heading my-29 lg:mt-50">Log In <br/>Coverdriveonline.com</h1>
            <input className="bg-transparent border-b input-login w-full py-10 lg:mb-25 lg:mt-30 px-4" placeholder="ID"/>
            <input className="bg-transparent border-b input-login w-full py-10 px-4 lg:mb-10" placeholder="Password"/>
             <Link to="/dashboard" > <Button  className="my-24 h-45 text-lg 2xl:mt-40 w-full   text-xs  mr-10 rounded-lg bg-loginBgColor login-button font-bold lg:text-xl lg:h-55"> Login </Button> </Link>

              <div className="text-center font-medium text-gray-400">
                <h1 className="lg:text-md lg:mt-40">Already have an account ? <span className="text-[#FFBB00]">Login</span></h1>
                <p className="lg:text-xs">Please do not gamble if you under the age of 18.</p>
              </div>
              <div className="text-medium bg-white rounded-md px-2 py-2 my30 lg:mt-60">
                <div className="border border-[#200344] px-6 rounded-md font-medium">
                <h1 className="text-[#FF0000] text-base ">Note :</h1>
                <p style={{fontSize:"10px"}}  className="text-xs font-medium ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
              </div>
         </div>
         </div>
       </Modal>
          
          }
      
        {/* <MatchesCard /> */}

        {/* <BettingCards /> */}
  
        {/* <MatchesCard2 /> */}
        
        {/* <div className="2xl:container 2xl:mx-auto ">
        <MatchesCard3/>
        </div> */}
    </div>
  );
};

export default Home;
