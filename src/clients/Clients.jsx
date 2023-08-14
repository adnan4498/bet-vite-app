import React from "react";
import "../clients/Clients.css";

import star from "/star.svg";
import profileImg from "/clientProfileImg.svg";
import clientQoute from "/qouteClient.svg"

const Clients = () => {
  return (
    <div className="clients-div 2xl:mt-150 2xl:mb-150 2xl:container-22 flex">
      <div>
        <p className="text-white custom-font-family 2xl:text-70 2xl:leading-80 2xl:mt-40">
          What <br></br> Our Client's say
        </p>
        <p className="text-[#C1C1C1] 2xl:mt-30 2xl:pl-7 2xl:leading-31 ">
          Lorem Ipsum is simply dummy text of the printing and <br></br>{" "}
          typesetting industry. Lorem Ipsum has been the industry's <br></br>{" "}
          standard dummy text ever since the 1500s, when an <br></br> unknown
          printer took a galley of type and scrambled it to <br></br> make a
          type specimen book. It has survived not only five <br></br> centuries,
          but also the leap into electronic typesetting, <br></br> remaining
          essentially unchanged.
        </p>
      </div>

      <div className="bg-cardDarkBlue 2xl:w-900 2xl:h-455 2xl:ml-70 rounded-3xl" style={{ border: '9px solid #342f62' }}>
        <div className="flex justify-between">
          <div className="flex ">
            <img src={profileImg} className="2xl:pl-20 2xl:pt-20" />
            <div className="flex flex-col justify-center content-center">
              <p className="text-white 2xl:text-23">Patresen Kaven</p>
              <p className="text-[#C1C1C1] 2xl:text-13">Brand Manager</p>
            </div>
          </div>

          <div className="flex 2xl:pr-60">
            <img src={star} className="2xl:mr-10" />
            <img src={star} className="2xl:mr-10" />
            <img src={star} className="2xl:mr-10" />
            <img src={star} className="2xl:mr-10" />
            <img src={star} />
          </div>
        </div>

        <div className="2xl:ml-50 2xl:mt-8">
            <img src={clientQoute} className="2xl:w-30" />
            <p className="text-[#C1C1C1] leading-35 text-center 2xl:pt-20 2xl:text-20 2xl:pr-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br> Lorem Ipsum has been the industry's standard dummy text ever since the <br></br> 1500s, when an unknown printer took a galley of type and scrambled it to <br></br> make a type specimen book. </p>
            <img src={clientQoute} className="2xl:w-30 2xl:float-right 2xl:mr-50" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full border-b border-white"></div>

    </div>
  );
};

export default Clients;
