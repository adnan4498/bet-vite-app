import React from "react";
import ovalBg from "/wantToWinOvalBg.svg";
import "../wantToWin/WantToWin.css";
import msDhoniImg from "/msDhoniImg.svg";
import msDhoniBgRemoved from '/msDhonibgRemoved.png'
import footballer from "/footballerImg.svg"

const borderStyle = {
  borderRadius: "50%",
};

const WantToWin = () => {
  return (
    <div className="mt-36 mb-36">
      <div
        className="howItWorks-div bg-cover bg-no-repeat bg-center w-2800 h-500 m-auto relative flex"
        style={{
          backgroundImage: `url(${ovalBg})`,
          borderRadius: "50%",
        }}
      >
        <div className="text-div absolute inset-0 flex justify-center items-center text-white text-center flex-col">
          <h2 className="2xl:text-50 2xl:mt-10 custom-font-family">
            We Want You to Win. It’s As<br></br> Simple As That
          </h2>
          <p className="text-[#C1C1C1] leading-27 2xl:mt-15">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum <br></br> has been the industry's standard
            dummy text ever since the 1500s
          </p>
        </div>

        <div className="">
          <img className="2xl:max-w-2xl" src={footballer} />
        </div>

        <div className="flex justify-end items-center 2xl:w-full">
          <img src={msDhoniBgRemoved} className="opacity-75 brightness-110 2xl:h-600 "style={{
              clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)",
            }} />
        </div>
      </div>
    </div>
  );
};

export default WantToWin;
