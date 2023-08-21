import React from "react";
import "../clients/Clients.css";

import star from "/star.svg";
import profileImg from "/clientProfileImg.svg";
import clientQoute from "/qouteClient.svg";

import purple from "/clientPurple.svg";
import circle from "/circleBetting.svg";
import circle2 from "/homeCircle.svg";

const Clients = () => {
  return (
    <>
      <div className="2xl:relative 2xl:block lg:block lg:relative hidden">
        <img
          src={purple}
          className="absolute 2xl:right-0 lg:right-0 lg:-top-80 lg:w-200 2xl:-top-100 2xl:w-400"
        />
        <img
          src={circle}
          className="absolute 2xl:w-220  2xl:right-0 2xl:top-450 lg:right-0 lg:w-100 lg:top-170 "
        />
        <img
          src={circle2}
          className="absolute 2xl:w-80 lg:right-140 lg:top-240 lg:w-35 2xl:right-230 2xl:top-620 "
        />
      </div>
      <div className="clients-div 2xl:mt-300 2xl:mb-150 2xl:flex lg:flex lg:justify-evenly lg:container lg:mx-auto lg:mt-130 mt-250  ">
        <div>
          <p className="text-white custom-font-family lg:text-30 lg:text-left 2xl:text-70 2xl:leading-80 2xl:mt-40 2xl:text-left text-center text-27 2xl:mb-0 lg:mb-7 mb-20">
            What <br className="2xl:block lg:block hidden"></br> Our Client's{" "}
            <br className="2xl:hidden lg:hidden block"></br> say
          </p>
          <p className="lg:text-[#C1C1C1] 2xl:mt-30 2xl:pl-7 2xl:leading-31 2xl:block lg:block lg:text-8 2xl:text-14 hidden ">
            Lorem Ipsum is simply dummy text of the printing and <br></br>{" "}
            typesetting industry. Lorem Ipsum has been the industry's <br></br>{" "}
            standard dummy text ever since the 1500s, when an <br></br> unknown
            printer took a galley of type and scrambled it to <br></br> make a
            type specimen book. It has survived not only five <br></br>{" "}
            centuries, but also the leap into electronic typesetting, <br></br>{" "}
            remaining essentially unchanged.
          </p>
        </div>

        <div
          className="bg-cardDarkBlue 2xl:w-900 lg:w-500 2xl:h-455 2xl:ml-70 rounded-3xl z-10"
          style={{ border: "9px solid #342f62" }}
        >
          <div className="flex justify-between">
            <div className="flex 2xl:mt-0 ">
              <img src={profileImg} className="2xl:pl-20 2xl:pt-20 2xl:w-170 w-60 2xl:mb-0 " />
              <div className="flex flex-col justify-center content-center">
                <p className="text-white 2xl:text-23">Patresen Kaven</p>
                <p className="text-[#C1C1C1] 2xl:text-13">Brand Manager</p>
              </div>
            </div>

            <div className="flex 2xl:pr-40 2xl:mr-0 mr-10">
            <img src={star} className="2xl:mr-10 2xl:w-30 w-22" />
            <img src={star} className="2xl:mr-10 2xl:w-30 w-22" />
            <img src={star} className="2xl:mr-10 2xl:w-30 w-22" />
            <img src={star} className="2xl:mr-10 2xl:w-30 w-22" />
            <img src={star} className="2xl:w-30 w-22"/>
          </div>
          </div>

          <div className="2xl:ml-50 2xl:mt-8">
            <img src={clientQoute} className="2xl:w-30 w-18 2xl:ml-0 2xl:mb-0 mb-10 ml-7" />
            <p className="text-[#C1C1C1] 2xl:leading-35 leading-25 text-center 2xl:pt-20 2xl:text-20 2xl:pr-20 text-12">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. <br className="2xl:block hidden"></br> Lorem Ipsum has been the industry's standard
              dummy text ever since the <br className="2xl:block hidden"></br> 1500s, when an unknown printer
              took a galley of type and scrambled it to <br className="2xl:block hidden"></br> make a type
              specimen book.{" "}
            </p>
            <img
              src={clientQoute}
              className="2xl:w-30 2xl:float-right float-right w-15 2xl:mr-50 mr-17 -mt-18  "
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full flex justify-center">
          {/* <div className="2xl:w-1/2 border-b border-white"></div> */}
        </div>
      </div>
    </>
  );
};

export default Clients;
