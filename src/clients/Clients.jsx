import React from "react";
import "../clients/Clients.css";

import star from "@assets/star.svg";
import profileImg from "@assets/clientProfileImg.svg";
import clientQoute from "@assets/qouteClient.svg";

import purple from "@assets/clientPurple.svg";
import circle from "@assets/circleBetting.svg";
import circle2 from "@assets/homeCircle.svg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Clients = () => {
  const responsives = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1.5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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
      <div className="clients-div 2xl:mt-300 2xl:mb-150 2xl:flex lg:flex xl:justify-between lg:justify-between 2xl:container lg:mx-auto lg:mt-130 mt-250 xl:ml-200 ">
        <div className="2xl:w-5/12 2xl:ml-0 xl:ml-0 xl:mt-30 2xl:mt-0 lg:mt-30 lg:ml-100">
          <p className="text-white custom-font-family lg:text-30 lg:text-left 2xl:text-70 2xl:leading-80 2xl:mt-40 2xl:text-left  text-center text-27 2xl:mb-0 lg:mb-7 mb-20 xl:text-5xl lg:text-4xl">
            What <br className="2xl:block lg:block hidden"></br> Our Client's{" "}
            <br className="2xl:hidden lg:hidden block"></br> say
          </p>
          <p className="lg:text-[#C1C1C1] 2xl:mt-30 2xl:pl-7 2xl:leading-25 2xl:block lg:block lg:text-9 2xl:text-18 hidden xl:text-xs xl:mt-15">
            Lorem Ipsum is simply dummy text of the printing and <br></br>{" "}
            typesetting industry. Lorem Ipsum has been the industry's <br></br>{" "}
            standard dummy text ever since the 1500s, when an <br></br> unknown
            printer took a galley of type and scrambled it to <br></br> make a
            type specimen book. It has survived not only five <br></br>{" "}
            centuries, but also the leap into electronic typesetting, <br></br>{" "}
            remaining essentially unchanged.
          </p>
        </div>

        <div className="lg:w-7/12 client-carousel-div lg:mx:0">
          <Carousel
            responsive={responsives}
            arrows={false}
            showDots={true}
            infinite={true}
            className="2xl:w-1060"
          >
            <div
              className="bg-cardDarkBlue w-full 2xl:h-455 rounded-3xl z-10 lg:mb-70 xl:h-250 2xl:w-700 xl:w-480 lg:ml-0 lg:mr-0 -ml-50 -mr-50  "
              style={{ border: "9px solid #342f62" }}
            >
              <div className="flex justify-between pt-20">
                <div className="flex 2xl:mt-0 lg:custom-top-padding ">
                  <img
                    src={profileImg}
                    className="2xl:pl-20 2xl:pt-20 2xl:w-170 w-60 2xl:mb-0 "
                  />
                  <div className="flex flex-col justify-center content-center">
                    <p className="text-white 2xl:text-23 xl:text-15 lg:text-13 text-13">Patresen Kaven</p>
                    <p className="text-[#C1C1C1] 2xl:text-16 xl:text-11 lg:text-9 text-10">Brand Manager</p>
                  </div>
                </div>

                <div className="flex 2xl:pr-40 2xl:mr-0 mr-10">
                  <img src={star} className="2xl:mr-10 2xl:w-30 w-22" />
                  <img src={star} className="2xl:mr-10 2xl:w-30 w-22" />
                  <img src={star} className="2xl:mr-10 2xl:w-30 w-22" />
                  <img src={star} className="2xl:mr-10 2xl:w-30 w-22" />
                  <img src={star} className="2xl:w-30 w-22" />
                </div>
              </div>

              <div className="2xl:ml-50 2xl:mt-8">
                <img
                  src={clientQoute}
                  className="2xl:w-30 w-18 2xl:ml-0 2xl:mb-0 mb-10 ml-7 mt-15"
                />
                <p className="text-[#C1C1C1] 2xl:leading-35 leading-25 text-center 2xl:pt-20 2xl:text-16 2xl:pr-20 text-12 lg:mb-20 xl:mb-0 mb-10">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. <br className="2xl:block hidden"></br>{" "}
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the <br className="2xl:block hidden"></br> 1500s, when
                  an unknown printer took a galley of type and scrambled it to{" "}
                  <br className="2xl:block hidden"></br> make a type specimen
                  book.{" "}
                </p>
                <img
                  src={clientQoute}
                  className="2xl:w-30 2xl:float-right float-right w-15 2xl:mr-50 mr-17 -mt-18  mb-70 "
                />
              </div>
            </div>

            <div
              className="bg-cardDarkBlue w-full 2xl:h-455 rounded-3xl z-10 lg:mb-70 xl:h-250 2xl:w-700 xl:w-480 lg:ml-0 lg:mr-0 -ml-50 -mr-50 "
              style={{ border: "9px solid #342f62" }}
            >
              <div className="flex justify-between pt-20">
                <div className="flex 2xl:mt-0 ">
                  <img
                    src={profileImg}
                    className="2xl:pl-20 2xl:pt-20 2xl:w-170 w-60 2xl:mb-0 "
                  />
                  <div className="flex flex-col justify-center content-center">
                    <p className="text-white 2xl:text-23 xl:text-15 lg:text-13 text-13">Patresen Kaven</p>
                    <p className="text-[#C1C1C1] 2xl:text-16 xl:text-11 lg:text-9 text-10">Brand Manager</p>
                  </div>
                </div>

                <div className="flex 2xl:pr-40 2xl:mr-0 mr-10">
                  <img src={star} className="2xl:mr-10 2xl:w-30 w-22" />
                  <img src={star} className="2xl:mr-10 2xl:w-30 w-22" />
                  <img src={star} className="2xl:mr-10 2xl:w-30 w-22" />
                  <img src={star} className="2xl:mr-10 2xl:w-30 w-22" />
                  <img src={star} className="2xl:w-30 w-22" />
                </div>
              </div>

              <div className="2xl:ml-50 2xl:mt-8">
                <img
                  src={clientQoute}
                  className="2xl:w-30 w-18 2xl:ml-0 2xl:mb-0 mb-10 ml-7 mt-15"
                />
                <p className="text-[#C1C1C1] 2xl:leading-35 leading-25 text-center 2xl:pt-20 2xl:text-16 2xl:pr-20 text-12 lg:mb-20 xl:mb-0 mb-10">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. <br className="2xl:block hidden"></br>{" "}
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the <br className="2xl:block hidden"></br> 1500s, when
                  an unknown printer took a galley of type and scrambled it to{" "}
                  <br className="2xl:block hidden"></br> make a type specimen
                  book.{" "}
                </p>
                <img
                  src={clientQoute}
                  className="2xl:w-30 2xl:float-right float-right w-15 2xl:mr-50 mr-17 -mt-18  mb-70 "
                />
              </div>
            </div>

            <div
              className="bg-cardDarkBlue w-full 2xl:h-455 rounded-3xl z-10 lg:mb-70 xl:h-250 2xl:w-700 xl:w-480 lg:ml-0 lg:mr-0 -ml-50 -mr-50 "
              style={{ border: "9px solid #342f62" }}
            >
              <div className="flex justify-between pt-20">
                <div className="flex 2xl:mt-0 ">
                  <img
                    src={profileImg}
                    className="2xl:pl-20 2xl:pt-20 2xl:w-170 w-60 2xl:mb-0 "
                  />
                  <div className="flex flex-col justify-center content-center">
                    <p className="text-white 2xl:text-23 xl:text-15 lg:text-13 text-13">Patresen Kaven</p>
                    <p className="text-[#C1C1C1] 2xl:text-16 xl:text-11 lg:text-9 text-10">Brand Manager</p>
                  </div>
                </div>

                <div className="flex 2xl:pr-40 2xl:mr-0 mr-10">
                  <img src={star} className="2xl:mr-10 2xl:w-30 w-22" />
                  <img src={star} className="2xl:mr-10 2xl:w-30 w-22" />
                  <img src={star} className="2xl:mr-10 2xl:w-30 w-22" />
                  <img src={star} className="2xl:mr-10 2xl:w-30 w-22" />
                  <img src={star} className="2xl:w-30 w-22" />
                </div>
              </div>

              <div className="2xl:ml-50 2xl:mt-8">
                <img
                  src={clientQoute}
                  className="2xl:w-30 w-18 2xl:ml-0 2xl:mb-0 mb-10 ml-7 mt-15"
                />
                <p className="text-[#C1C1C1] 2xl:leading-35 leading-25 text-center 2xl:pt-20 2xl:text-16 2xl:pr-20 text-12 lg:mb-20 xl:mb-0 mb-10">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. <br className="2xl:block hidden"></br>{" "}
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the <br className="2xl:block hidden"></br> 1500s, when
                  an unknown printer took a galley of type and scrambled it to{" "}
                  <br className="2xl:block hidden"></br> make a type specimen
                  book.{" "}
                </p>
                <img
                  src={clientQoute}
                  className="2xl:w-30 2xl:float-right float-right w-15 2xl:mr-50 mr-17 -mt-18  mb-70 "
                />
              </div>
            </div>
          </Carousel>
        </div>

        <div className="absolute bottom-0 left-0 w-full flex justify-center">
          {/* <div className="2xl:w-1/2 border-b border-white"></div> */}
        </div>
      </div>
    </>
  );
};

export default Clients;
