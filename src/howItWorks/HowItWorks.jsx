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
      <div className="2xl:block hidden">
        <img src={halfCircle} alt="" className="absolute -top-200 z-10" />
        <img src={circle} className="absolute right-0 bottom-0 z-10" alt="" />
        <img
          src={howItWorksbg}
          className="absolute w-full left-0 top-0"
          alt=""
        />
      </div>
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
        <div className="text-center 2xl:mt-70 2xl:pt-70 mt-50">
          <p className="text-white 2xl:text-46 text-30 custom-font-family">
            How it Works
          </p>
          <p className="2xl:text-14 text-[#C1C1C1] text-12 custom-font-family-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
            industry. Lorem Ipsum has
          </p>
        </div>

        <div className="images-div mt-20 2xl:flex justify-evenly  relative w-10/12 mx-auto">
          <img
            src={line}
            alt=""
            className="2xl:block 2xl:absolute hidden left-0 -top-49"
          />
          <div className="2xl:mb-0 mb-30 2xl:mt-0 mt-30">
            <div className="2xl:flex 2xl:flex-col 2xl:w-150 mx-auto relative">
              <img className="2xl:w-200 z-50 w-250 mx-auto" src={sports} />
              <img
                src={sportsBlueBg}
                className="absolute 2xl:w-150 2xl:right-10 right-45 w-230 -top-0 2xl:-top-20 2xl:z-10 -z-10 "
              />
            </div>
            <h2 className="text-center text-white 2xl:text-30 custom-font-family 2xl:mt-40 mt-20 text-20">
              Choose Favoured Sports
            </h2>
            <p className="text-center text-[#C1C1C1] 2xl:mt-15 2xl:text-13 text-12 2xl:pt-0 pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br></br> elit.
              Phasellus.
            </p>
          </div>

          <div className="2xl:hidden mb-30">
          <div className="2xl:flex  2xl:flex-col 2xl:w-150 mx-auto relative">
              <img className="2xl:w-200 z-50 w-250 mx-auto" src={quantity} />
              <img
                src={sportsBlueBg}
                className="absolute 2xl:w-150 2xl:right-10 right-45 w-230 -top-0 2xl:-top-20 2xl:z-10 -z-10 "
              />
            </div>
            <h2 className="text-center text-white 2xl:text-30  custom-font-family 2xl:mt-40 text-20 mt-20">
              Choose Favoured Sports
            </h2>
            <p className="text-center text-[#C1C1C1] 2xl:mt-15 2xl:text-13 text-12 2xl:pt-0 pt-5 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus.
            </p>
          </div>

          
          <div className="2xl:hidden">
          <div className="2xl:flex  2xl:flex-col 2xl:w-150 mx-auto relative">
              <img className="2xl:w-200 z-50 w-250 mx-auto" src={dance} />
              <img
                src={sportsBlueBg}
                className="absolute 2xl:w-150 2xl:right-10 right-45 w-230 -top-0 2xl:-top-20 2xl:z-10 -z-10 "
              />
            </div>
            <h2 className="text-center text-white 2xl:text-30  custom-font-family 2xl:mt-40 text-20 mt-20">
              Choose Favoured Sports
            </h2>
            <p className="text-center text-[#C1C1C1] 2xl:mt-15 2xl:text-13 text-12 2xl:pt-0 pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus.
            </p>
          </div>


          <div className="lg:block hidden">
            <div className="flex flex-col 2xl:w-250 mx-auto relative">
              <img className="z-10 2xl:w-150" src={quantity} />
              <img
                src={sportsBlueBg}
                className="absolute 2xl:left- 2xl:left-10 2xl:-top-5 2xl:w-170"
              />
            </div>
            <h2 className="text-center text-white 2xl:text-30  custom-font-family 2xl:mt-40">
              Choose Favoured Sports
            </h2>
            <p className="text-center text-[#C1C1C1] 2xl:mt-15 2xl:text-13 2xl:pt-0 pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br></br> elit.
              Phasellus.
            </p>
          </div>
          <div className="lg:block hidden">
            <div className="flex flex-col 2xl:w-250 mx-auto relative">
              <img className="z-10 2xl:w-150" src={dance} />
              <img
                src={sportsBlueBg}
                className="absolute 2xl:left- 2xl:left-3 2xl:-top-19 2xl:w-170"
              />
            </div>
            <h2 className="text-center text-white 2xl:text-30 custom-font-family 2xl:mt-40">
              Choose Favoured Sports
            </h2>
            <p className="text-center text-[#C1C1C1] 2xl:mt-15 2xl:text-13 2xl:pt-0 pt-5">
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
