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
    <div className="relative">
      <img src={purpleSplash1} className="absolute -z-10" />
      <img src={purpleSplash2} className="absolute -z-20" />
      <img src={purpleCircleCasino} className="absolute -z-20 2xl:right-0 2xl:top-60" />
    </div>
    <div className="2xl:mb-300 2xl:mt-200">
      <p className="2xl:text-white 2xl:text-6xl font-bold 2xl:text-center">Our Casinos</p>
      <p className="2xl:text-gray-400 2xl:text-center 2xl:mt-30">Lorem Ipsum is simply dummy text of the printing and typesetting <br></br> industry. Lorem Ipsum has</p>

      <div className="carousel-div z-50">
        <div className="flex justify-center 2xl:mt-30">
          <img src={CarouselImg1} alt="Carousel 1" />
          <img src={CarouselImg2} alt="Carousel 2" />
          <img src={CarouselImg3} alt="Carousel 3" />
          <img src={CarouselImg4} alt="Carousel 4" />
          <img src={CarouselImg5} alt="Carousel 5" />
        </div>
      </div>
    </div>

    </>
  );
};

export default Casino;
