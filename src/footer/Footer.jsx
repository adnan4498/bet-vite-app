import React from "react";
import "../footer/Footer.css";
import footerBg from "/footerPurple.svg"
import leftDaimond from "/footballerLeftDaimond.svg"
import circle from "/footerCircle.svg"
import circle2 from "/smallCircleBettingFeature.svg"

import socialIcons from "/socialIcons.svg";
import { Input, Button } from "antd";

const Footer = () => {
  return (
    <>
    <div className="relative">
      <img src={footerBg} className="absolute 2xl:top-100 z-0" />
      <img src={leftDaimond} className="absolute"/>
      <img src={circle2} className="absolute 2xl:top-420 2xl:left-10 2xl:w-50"/>
      <img src={circle} className="absolute 2xl:top-495"/>
    </div>
      <div className="container mx-auto 2xl:pt-50">
        <div className="footer-div 2xl:mt-150 2xl:mb-100 flex justify-between container-2 ">
          <div className="first-section z-50">
            <h2 className="text-white custom-font-family 2xl:text-80">Logo</h2>
            <p className="text-[#C1C1C1] 2xl:mt-23 custom-font-family-2 2xl:leading-27">
              Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit.
              Phasellus pharetra mi ut leo <br></br> pulvinar laoreet.
            </p>

            <div className="2xl:mt-30 ">
              <img src={socialIcons} />
            </div>
          </div>

          <div className="second-section 2xl:mt-55 z-50">
            <h2 className="text-white 2xl:text-25">Useful Links</h2>
            <ul className="list-disc list-inside">
              <li className="text-[#C1C1C1] 2xl:mt-25 2xl:mb-20 2xl:text-18">
                Privacy & Policy
              </li>
              <li className="text-[#C1C1C1] 2xl:mb-20 2xl:text-18">
                Terms & Conditions
              </li>
              <li className="text-[#C1C1C1] 2xl:text-18">Faq</li>
            </ul>
          </div>

          <div className="third-section 2xl:mt-52 z-50">
            <h2 className="text-white 2xl:text-25">Company</h2>
            <ul className="list-disc list-inside">
              <li className="text-[#C1C1C1] 2xl:mt-25 2xl:mb-20 2xl:text-18">
                About Us
              </li>
              <li className="text-[#C1C1C1] 2xl:mb-20 2xl:text-18">
                All Matches
              </li>
              <li className="text-[#C1C1C1] 2xl:mb-20 2xl:text-18">
                Top Tipsters
              </li>
              <li className="text-[#C1C1C1] 2xl:text-18">Contact</li>
            </ul>
          </div>

          <div className="fourth-section 2xl:mt-55 z-50">
            <p className="text-white 2xl:text-23">Subscribe Newslatter</p>
            <div className="flex flex-col">
              <div className="2xl:mt-28">
                <Input
                  placeholder="Enter Email"
                  className="2xl:w-300 2xl:h-44"
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
    </>
  );
};

export default Footer;
