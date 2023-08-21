import React from "react";
import "../footballers/Footballers.css";

import messiImg from "/messiImg.svg";
import purple from "/footballersSplash.svg";
import footballerPurple from "/footballerRightPurple.svg"
import footballerPinkLeft from "/footballerPinkLeft.svg"
import footballerLeftDaimond from "/footballerLeftDaimond.svg"
import footballerRightDaimond from "/footballerRightDaimond.svg"
import footballerRightPink from "/footballerRightPink.svg"

const Footballers = () => {
  return (
    <>
    <div className="2xl:relative 2xl:block lg:block lg:relative hidden">
      <img src={purple} className="absolute 2xl:pt-100 2xl:w-660 2xl:-left-50 2xl:-top-30 opacity-70 lg:w-400 lg:top-69 lg:-left-120 " />
      <img src={footballerPinkLeft} className="absolute 2xl:-top-400 2xl:w-500 lg:w-280 lg:-top-230" />
      <img src={footballerLeftDaimond} className="absolute lg:w-60 lg:left-130 2xl:w-90 2xl:left-230"/>
      <img src={footballerPurple} className="absolute lg:right-0 lg:w-220 2xl:w-450 2xl:right-0 opacity-50" />
      <img src={footballerRightDaimond} className="absolute lg:right-5 lg:top-40 lg:w-70 2xl:w-160 2xl:right-20 2xl:top-100"/>
      <img src={footballerRightPink} className="absolute lg:hidden 2xl:w-400 2xl:right-0 2xl:top-300 "/>
    </div>  

    <div>
      <div className="2xl:container 2xl:mx-auto">
        <div className="footballers-div 2xl:container-2 2xl:mt-240 mt-70 ">
          <div >
            <div className="2xl:w-1330 w-8/12 mx-auto 2xl:mx-auto text-center h-px bg-white"></div>
            <div className="img-div">
            <img src={messiImg}  />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footballers;
