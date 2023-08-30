import React from "react";
import CarouselImg1 from "@assets/Carousel1Img.svg";
import CarouselImg2 from "@assets/CarouselImg2.svg";
import CarouselImg3 from "@assets/carouselImg3.svg";
import CarouselImg4 from "@assets/carouselImg4.svg";
import CarouselImg5 from "@assets/carouselImg5.svg";

// import purpleSplash1 from "/casinoPurpleSplash1.svg";
import purpleSplash1 from "@assets/casinoPurpleSplash1.svg";
// import purpleSplash2 from "/casinoPurpleSplash2.svg";
import purpleSplash2 from "@assets/casinoPurpleSplash2.svg";
// import purpleCircleCasino from "/purpleCircleCasino.svg";
import purpleCircleCasino from "@assets/purpleCircleCasino.svg";// 


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CasinoNav = () => {
  const responsives = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="relative 2xl:mt-0 2xl:block lg:block hidden">
        <img
          src={purpleSplash1}
          className="absolute -z-10 2xl:w-650 xl:w-400 lg:w-300 2xl:top-0 lg:top-50"
        />
        <img
          src={purpleSplash2}
          className="absolute -z-20 2xl:w-500 xl:w-350 lg:w-250 2xl:-top-0 lg:top-50"
        />
        <img
          src={purpleCircleCasino}
          className="absolute -z-20 2xl:right-0 2xl:top-60 lg:right-0 2xl:w-650 xl:w-400 lg:w-300 lg:top-50"
        />
      </div>
      <div className="2xl:mb-300 2xl:mt-130 w-full">
        <p className="2xl:text-white text-white 2xl:text-6xl font-bold 2xl:text-center xl:text-40 text-30 text-center mt-50 ">
          Our Casinos
        </p>
        <p className="2xl:text-gray-400 lg:text-gray-400 2xl:text-center 2xl:mt-30 2xl:text-18 text-12 mt-5 text-center  2xl:mb-40 mb-30">
          Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
          <br className="lg:block hidden"></br> industry. Lorem Ipsum has
        </p>

        <div class="flex flex-col items-center justify-center">
  <div class="flex">
    <img src={CarouselImg1} alt="Carousel 1" class="hover:scale-105 2xl:w-500 w-350 p-10 xl:w-240 lg:w-180 cursor-pointer transition-transform transform-gpu"/>
    <img src={CarouselImg2} alt="Carousel 2" class="hover:scale-105 2xl:w-500 w-350 2xl:mt-0 mt-20 xl:w-280 lg:w-210 p-10 cursor-pointer transition-transform transform-gpu"/>
    <img src={CarouselImg3} alt="Carousel 3" class="hover:scale-105 2xl:w-530 2xl:max-w-600 w-350 2xl:mt-0 mt-11 xl:w-330 lg:w-240 p-10 cursor-pointer transition-transform transform-gpu"/>
  </div>
  <div class="flex">
    <img src={CarouselImg4} alt="Carousel 4" class="hover:scale-105 2xl:w-500 w-350 2xl:mt-0 mt-11 xl:w-280 lg:w-210 p-10 cursor-pointer transition-transform transform-gpu"/>
    <img src={CarouselImg5} alt="Carousel 5" class="hover:scale-105 2xl:w-500 w-350 2xl:mt-0 mt-20 xl:w-240 lg:w-180 p-10 cursor-pointer transition-transform transform-gpu"/>
    <img src={CarouselImg2} alt="Carousel 2" class="hover:scale-105 2xl:w-500 w-350 2xl:mt-0 mt-20 xl:w-280 lg:w-210 p-10 cursor-pointer transition-transform transform-gpu"/>
  </div>
</div>
</div>

      {/* <div className="carousel-div z-50 w-full">
    <div className="2xl:flex lg:flex justify-center 2xl:mt-30">
    </div>
        </div> */}
    </>
  );
};

export default CasinoNav;
