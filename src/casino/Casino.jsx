import React from "react";
import CarouselImg1 from "../../public/Carousel1Img.svg"
import CarouselImg2 from "../../public/CarouselImg2.svg"
import CarouselImg3 from "../../public/carouselImg3.svg"
import CarouselImg4 from "../../public/carouselImg4.svg"
import CarouselImg5 from "../../public/carouselImg5.svg"

const Casino = () => {
  return (
    <div className="2xl:mb-300">
        <p className="2xl:text-white 2xl:text-6xl font-bold 2xl:text-center">Our Casinos</p>
        <p className="2xl:text-gray-400 2xl:text-center 2xl:mt-30 ">Lorem Ipsum is simply dummy text of the printing and typesetting <br></br> industry. Lorem Ipsum has</p>

        <div className="carousel-div">
            <div className="flex justify-center 2xl:mt-30 ">
                <img src={CarouselImg1} />
                <img src={CarouselImg2} />
                <img src={CarouselImg3} />
                <img src={CarouselImg4} />
                <img src={CarouselImg5} />
            </div>
        </div>
    </div>
  );
};

export default Casino;
