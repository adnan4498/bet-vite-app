import React from "react";
import CarouselImg1 from "../../public/Carousel1Img.svg"
import CarouselImg2 from "../../public/CarouselImg2.svg"
import CarouselImg3 from "../../public/carouselImg3.svg"
import CarouselImg4 from "../../public/carouselImg4.svg"
import CarouselImg5 from "../../public/carouselImg5.svg"

import purpleSplash1 from "/casinoPurpleSplash1.svg"
import purpleSplash2 from "/casinoPurpleSplash2.svg"
import purpleCircleCasino from "/purpleCircleCasino.svg"

const Casino = () => {
  return (
    <>
    <div className="relative 2xl:mt-0 2xl:block lg:block hidden">
      <img src={purpleSplash1} className="absolute -z-10 2xl:w-650 lg:w-300 2xl:top-0 lg:top-50" />
      <img src={purpleSplash2} className="absolute -z-20 2xl:w-500 lg:w-250 2xl:-top-0 lg:top-50" />
      <img src={purpleCircleCasino} className="absolute -z-20 2xl:right-0 2xl:top-60 lg:right-0 2xl:w-650 lg:w-300 lg:top-50" />
    </div>
    <div className="2xl:mb-300 2xl:mt-200 w-full">
      <p className="2xl:text-white text-white 2xl:text-6xl font-bold 2xl:text-center text-30 text-center mt-50 ">Our Casinos</p>
      <p className="2xl:text-gray-400 2xl:text-center 2xl:mt-30 2xl:text-18 text-12 mt-5 text-center text-white 2xl:mb-0 mb-30">Lorem Ipsum is simply dummy text of the printing and typesetting <br className="2xl:block hidden"></br> industry. Lorem Ipsum has</p>

      <div className="carousel-div z-50 w-full">
        <div className="2xl:flex lg:flex justify-center 2xl:mt-30">
          <img src={CarouselImg1} alt="Carousel 1" className="2xl:mx-0 mx-auto 2xl:w-auto w-350 p-10 lg:w-150 " />
          <img src={CarouselImg2} alt="Carousel 2" className="2xl:mx-0 mx-auto 2xl:w-auto w-350 2xl:mt-0 mt-20 lg:w-180 p-10" />
          <img src={CarouselImg3} alt="Carousel 3" className="2xl:mx-0 mx-auto 2xl:w-auto w-350 2xl:mt-0 mt-11 lg:w-230 p-10" />
          <img src={CarouselImg4} alt="Carousel 4" className="2xl:mx-0 mx-auto 2xl:w-auto w-350 2xl:mt-0 mt-11 lg:w-180 p-10" />
          <img src={CarouselImg5} alt="Carousel 5" className="2xl:mx-0 mx-auto 2xl:w-auto w-350 2xl:mt-0 mt-20 lg:w-150 p-10" />
        </div>
      </div>
    </div>

    </>
  );
};

export default Casino;
