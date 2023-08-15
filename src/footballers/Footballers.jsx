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
    <div className="relative">
      <img src={purple} className="absolute 2xl:pt-100 2xl:w-610 opacity-70"/>
      <img src={footballerPinkLeft} className="absolute 2xl:-top-400 " />
      <img src={footballerLeftDaimond} className="absolute 2xl:w-90 2xl:left-230"/>
      <img src={footballerPurple} className="absolute 2xl:w-450 2xl:right-0 opacity-50" />
      <img src={footballerRightDaimond} className="absolute 2xl:w-160 2xl:right-20 2xl:top-100"/>
      <img src={footballerRightPink} className="absolute 2xl:w-400 2xl:right-0 2xl:top-300 "/>

      <div className="container mx-auto">
        <div className="footballers-div container-2 2xl:mt-240 ">
          <div>
            <div className="2xl:w-1330 2xl:mx-auto text-center h-px bg-white"></div>
            <img src={messiImg} />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footballers;
