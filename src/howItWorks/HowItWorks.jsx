import React from "react";
import "../howItWorks/HowItWorks.css";

import howItWorksbg from "@assets/howItWorksbg.svg";
import quantity from "@assets/quantity.svg";
import sports from "@assets/sports.svg";
import dance from "@assets/dance.svg";
import sportsBlueBg from "@assets/sportsBlueBg.svg";
import line from "@assets/howItWorkLine.svg";
import circle from "@assets/howItWorkSmallCircle.svg";
import halfCircle from "@assets/howItWorkHalfCircle.svg";

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
    <div className="howItWorks-div 2xl:mt-150 relative 2xl:mb-0 2xl:h-670 2xl:pt-0 lg:mb-100 lg:pt-5 lg:mt-50">
      <div className="2xl:block lg:block hidden">
        <img
          src={halfCircle}
          alt=""
          className="absolute 2xl:w-210 xl:w-150  lg:w-120 lg:-top-60 -top-200 z-10"
        />  
        <img
          src={circle}
          className="absolute 2xl:w-130 lg:w-70 right-0 bottom-0 z-10"
          alt=""
        />
        <img
          src={howItWorksbg}
          className="absolute w-full 2xl:w-full lg:w-full xl:w-12/12  left-0 top-0"
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
          <p className="text-white 2xl:text-46 xl:text-40 text-30 custom-font-family">
            How it Works
          </p>
          <p className="2xl:text-14 text-[#C1C1C1] text-12 xl:text-13 custom-font-family-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
            <br className="lg:block hidden"></br> industry. Lorem Ipsum has
          </p>
        </div>

        <div className="images-div mt-20 2xl:mt-0 xl:mt-40 2xl:flex lg:flex 2xl:justify-evenly xl:justify-around lg:justify-center  relative w-10/12 mx-auto">
          <img
            src={line}
            alt=""
            className="2xl:block 2xl:absolute xl:-top-30 lg:absolute lg:block lg:-z-10 lg:bottom-110 hidden 2xl:left-0 2xl:-top-49"
          />
          <div className="2xl:mb-0 mb-30 2xl:mt-30 lg:mt-0 mt-30 2xl:block lg:flex lg:flex-col">
            <div className="2xl:flex 2xl:flex-col 2xl:w-150 mx-auto relative">
              <img
                className="2xl:w-200 z-50 xl:w-160 lg:w-110 w-250 mx-auto"
                src={sports}
              />
              <img
                src={sportsBlueBg}
                className="absolute lg:w-120 2xl:w-150 2xl:right-10 right-45 w-230 lg:right-10 lg:-top-5 -top-0 2xl:-top-20 2xl:z-10 -z-10 "
              />
            </div>
            <h2 className="text-center lg:text-15 xl:text-20 text-white 2xl:text-30 lg custom-font-family 2xl:mt-17 mt-20 lg:mt-0 text-20">
              Choose Favoured Sports
            </h2>
            <p className="text-center lg:text-10 xl:text-13 text-[#C1C1C1] 2xl:mt-15 2xl:text-13 text-12 2xl:pt-0 pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br></br> elit.
              Phasellus.
            </p>
          </div>

          <div className="2xl:hidden lg:hidden mb-30">
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

          <div className="2xl:hidden lg:hidden">
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

          <div className="2xl:block lg:flex lg:flex-col  hidden">
            <div className="flex flex-col 2xl:w-250 mx-auto relative">
              <img className="z-10 2xl:w-150 lg:w-110 xl:w-160" src={quantity} />
              <img
                src={sportsBlueBg}
                className="absolute  2xl:left- 2xl:left-10 2xl:-top-5 2xl:w-170"
              />
            </div>
            <h2 className="text-center lg:text-15 xl:text-20 text-white 2xl:text-30  custom-font-family 2xl:mt-40">
              Choose Favoured Sports
            </h2>
            <p className="text-center lg:text-11 xl:text-13 text-[#C1C1C1] 2xl:mt-15 2xl:text-13 2xl:pt-0 pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br></br> elit.
              Phasellus.
            </p>
          </div>
          <div className="2xl:block lg:flex lg:flex-col  hidden">
            <div className="flex flex-col 2xl:w-250 mx-auto relative">
              <img className="z-10 2xl:w-150 lg:w-110 xl:w-160" src={dance} />
              <img
                src={sportsBlueBg}
                className="absolute 2xl:left- 2xl:left-3 2xl:-top-19 2xl:w-170"
              />
            </div>
            <h2 className="text-center xl:text-20  text-white 2xl:text-30 custom-font-family 2xl:mt-40">
              Choose Favoured Sports
            </h2>
            <p className="text-center lg:text-11 xl:text-12 text-[#C1C1C1] 2xl:mt-15 2xl:text-13 2xl:pt-0 pt-5">
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
