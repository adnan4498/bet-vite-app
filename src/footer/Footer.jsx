import React from "react";
import "../footer/Footer.css";
import footerBg from "/footerPurple.svg";
import leftDaimond from "/footballerLeftDaimond.svg";
import circle from "/footerCircle.svg";
import circle2 from "/smallCircleBettingFeature.svg";

import socialIcons from "/socialIcons.svg";
import logo from "/cover-drive-online-home.svg";

import { Input, Button } from "antd";

const Footer = () => {
  return (
    <>
      <div className="2xl:relative 2xl:block hidden">
        <img src={footerBg} className="absolute 2xl:top-123 z-0" />
        <img
          src={leftDaimond}
          className="absolute 2xl:right-10 2xl:top-130 2xl:rotate-[260deg]"
        />
        <img
          src={circle2}
          className="absolute 2xl:top-420 2xl:left-10 2xl:w-50"
        />
        <img src={circle} className="absolute 2xl:top-628" />
      </div>

      <div className="2xl:container 2xl:mx-auto 2xl:pt-50 pt-30">
        <div className="footer-div 2xl:mt-150 2xl:mb-100 flex justify-between container-2 ">
          <div className="first-section z-50 2xl:block flex ">
            <div>
              <h2 className="text-white custom-font-family 2xl:block hidden 2xl:text-80 text-40 ">
                Logo
              </h2>
              <div className="2xl:hidden block">
                <img src={logo} className="w-350 mx-auto" />
              </div>
              <p className="text-[#C1C1C1] 2xl:mt-23 custom-font-family-2 2xl:leading-27 2xl:text-17 text-11 2xl:hidden text-center block pl pt-17">
                Lorem ipsum dolor sit amet, consectetur{" "}
                <br className="2xl:block hidden"></br> asdasd asdasd ad asd
                pulvinar laoreetasdasasdas sdsaasasdasdassadadasadaadas
              </p>
              <div className="2xl:mt-30 2xl:w-200 w-full flex justify-center mt-20 2xl:ml-0 ml-10 ">
                <img src={socialIcons} className="w-8/12" />
              </div>
              '
            </div>

            <p className="text-[#C1C1C1] 2xl:mt-23 custom-font-family-2 2xl:leading-27 2xl:text-17 text-9 2xl:block hidden">
              Lorem ipsum dolor sit amet, consectetur{" "}
              <br className="2xl:block hidden"></br> adipiscing elit. Phasellus
              pharetra mi ut leo <br className="2xl:block hidden"></br> pulvinar
              laoreet.
            </p>
          </div>

          <div className="second-section 2xl:mt-55 z-50 2xl:block hidden">
            <h2 className="text-white 2xl:text-25">Useful Links</h2>
            <ul className="list-disc list-inside">
              <li className="text-[#C1C1C1] 2xl:mt-25  2xl:text-18">
                Privacy & Policy
              </li>
              <li className="text-[#C1C1C1]  2xl:text-18">
                Terms & Conditions
              </li>
              <li className="text-[#C1C1C1] 2xl:text-18">Faq</li>
            </ul>
          </div>

          <div className="third-section 2xl:mt-52 z-50 marker-class 2xl:block hidden">
            <h2 className="text-white 2xl:text-25">Company</h2>
            <ul className="list-disc list-inside">
              <li className="text-[#C1C1C1] 2xl:mt-25 2xl:text-18">About Us</li>
              <li className="text-[#C1C1C1]  2xl:text-18">All Matches</li>
              <li className="text-[#C1C1C1]  2xl:text-18">Top Tipsters</li>
              <li className="text-[#C1C1C1] 2xl:text-18">Contact</li>
            </ul>
          </div>

          <div className="fourth-section 2xl:mt-55 z-50 2xl:block hidden">
            <p className="text-white 2xl:text-23">Subscribe Newslatter</p>
            <div className="flex flex-col">
              <div className="2xl:mt-28">
                <Input
                  placeholder="Enter Email"
                  className="custom-input 2xl:w-300 2xl:h-44"
                  style={{ color: "black" , background: "white" }}
                />
              </div>
              <div className="2xl:mt-13">
                <Button className="login-button bg-loginBgColor 2xl:w-300 2xl:h-44 ">
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center">
        <div className="2xl:w-1450 2xl:mx-auto h-px bg-[#C1C1C1] absolute 2xl:-top-50 transform -translate-y-1/2"></div>
      </div>
      <p className="bg-[#290c5d] w-full border-[#290c5d] text-white text-center 2xl:block hidden border-2 2xl:pb-82">© Copyright 2023 All rights reserved.</p>





      <div className="2xl:hidden flex justify-around">
        <div className="second-section 2xl:mt-55 z-50 2xl:hidden block mt-30 ml-20">
          {/* <h2 className="text-white 2xl:text-25 text-20 ml- mb-10 ">Company</h2> */}
          <ul className="list-disc list-inside list-responsive-footer text-15">
            <li className="text-[#C1C1C1] 2xl:mt-25 2xl:text-18">About Us</li>
            <li className="text-[#C1C1C1] 2xl:text-18">All Matches</li>
            <li className="text-[#C1C1C1] 2xl:text-18">Top Tipsters</li>
            <li className="text-[#C1C1C1] 2xl:text-18">Faq</li>
          </ul>
        </div>

        <div className="second-section 2xl:mt-55 z-50 2xl:hidden block mt-30 ml-20">
          {/* <h2 className="text-white 2xl:text-25 text-20 ml- mb-10 ">Useful Links</h2> */}
          <ul className="list-disc list-inside list-responsive-footer text-15">
            <li className="text-[#C1C1C1] 2xl:mt-25 2xl:text-18">
              Privacy & Policy
            </li>
            <li className="text-[#C1C1C1] 2xl:text-18">Terms & Conditions</li>
            <li className="text-[#C1C1C1] 2xl:text-18">Faq</li>
          </ul>
        </div>
      </div>


          <div className="fourth-section 2xl:mt-55 z-50 2xl:hidden block mt-40">
            {/* <p className="text-white 2xl:text-23">Subscribe Newslatter</p> */}
            <div className="flex flex-col justify-center">
              <div className="2xl:mt-28 mx-auto w-10/12 ">
                <Input
                  placeholder="Enter Email"
                  className="custom-input 2xl:w-300 2xl:h-44 w-full h-40"
                  style={{ color: "black" , background: "white" }}
                />
              </div>
              <div className="2xl:mt-13 mx-auto w-10/12 mt-15">
                <Button className="login-button bg-loginBgColor 2xl:w-300 w-full 2xl:h-44 ">
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>
          <p className=" w-full text-12 text-white text-center 2xl:hidden block mt-15 mb-10 ">© Copyright 2023 All rights reserved.</p>

    </>
  );
};

export default Footer;
