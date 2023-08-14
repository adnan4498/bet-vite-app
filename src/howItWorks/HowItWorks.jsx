import React from "react";
import "../howItWorks/HowItWorks.css";

import howItWorksbg from "/howItWorksbg.svg";
import quantity from "/quantity.svg";
import sports from "/sports.svg";
import dance from "/dance.svg";
import sportsBlueBg from "/sportsBlueBg.svg";
import line from "/howItWorkLine.svg";
import circle from "/howItWorkSmallCircle.svg";
import halfCircle from "/howItWorkHalfCircle.svg";

const divStyle = {
  backgroundImage: `url(${howItWorksbg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  borderRadius: "50%", // This value will make it circular, you can adjust it for the oval effect
  width: "1700px",
  // height: '900px',
  margin: "auto", // Center the oval
  position: "relative", // Ensure content is positioned correctly
  overflowX: "hidden",
};

const HowItWorks = () => {
  return (
    <div className="howItWorks-div 2xl:mt-150 relative 2xl:h-670">
      <img src={halfCircle} alt="" className="absolute -top-200 z-10" />
      <img src={circle} className="absolute right-0 bottom-0 z-10" alt="" />
      <img src={howItWorksbg} className="absolute w-full left-0 top-0" alt="" />
      <div
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
          backgroundPosition: "center",
          borderRadius: "50%",
          width: "",
          margin: "auto",
          position: "relative",
        }}
      >
        <div className="text-center 2xl:mt-70 2xl:pt-70">
          <p className="text-white 2xl:text-46 custom-font-family">
            How it Works
          </p>
          <p className="2xl:text-14 text-[#C1C1C1] custom-font-family-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
            <br></br> industry. Lorem Ipsum has
          </p>
        </div>

        <div className="images-div mt-100 flex justify-evenly  relative w-10/12 mx-auto">
          <img src={line} alt="" className="absolute left-0 -top-49" />
          <div>
            <div className="flex flex-col 2xl:w-150 mx-auto relative">
              <img className="2xl:w-200 z-10" src={sports}/>
              <img src={sportsBlueBg} className="absolute 2xl:w-150 right-10 -top-20 " />
            </div>
            <h2 className="text-center text-white 2xl:text-30  custom-font-family 2xl:mt-40">
              Choose Favoured Sports
            </h2>
            <p className="text-center text-[#C1C1C1] 2xl:mt-15 2xl:text-13">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br></br> elit.
              Phasellus.
            </p>
          </div>
          <div>
            <div className="flex flex-col 2xl:w-250 mx-auto relative">
              <img className="z-10 2xl:w-150" src={quantity} />
              <img src={sportsBlueBg} className="absolute 2xl:left- 2xl:left-10 2xl:-top-5 2xl:w-170" />
            </div>
            <h2 className="text-center text-white 2xl:text-30  custom-font-family 2xl:mt-40">
              Choose Favoured Sports
            </h2>
            <p className="text-center text-[#C1C1C1] 2xl:mt-15 2xl:text-13">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br></br> elit.
              Phasellus.
            </p>
          </div>
          <div>
          <div className="flex flex-col 2xl:w-250 mx-auto relative">
              <img className="z-10 2xl:w-150" src={dance} />
              <img src={sportsBlueBg} className="absolute 2xl:left- 2xl:left-3 2xl:-top-19 2xl:w-170" />
            </div>
            <h2 className="text-center text-white 2xl:text-30 custom-font-family 2xl:mt-40">
              Choose Favoured Sports
            </h2>
            <p className="text-center text-[#C1C1C1] 2xl:mt-15 2xl:text-13">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br></br> elit.
              Phasellus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
