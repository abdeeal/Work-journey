import React, { useState } from "react";
import { creators, explorePage } from "../../../utils/data";
import Bookmark from "../../../assets/svgs/Bookmark";
import { motion } from "framer-motion";
import Button from "../../fragments/Button";
import profileSVG from "../../../assets/svgs/Profiles.svg";
import { Link } from "react-router-dom";

const Main = () => {
  const profiles = [1, 2, 3, 4, 5, 6];
  const projects = [1, 2, 3, 4];
  return (
    <div className="pt-[5rem] pb-[24px] relative w-full flex flex-wrap items-center flex-col gap-[40px]">
      {creators.map((item, index) => (
        <div
          key={index}
          className="w-full h-[256px] shadow-md rounded-[12px] grid lg:grid-cols-5 md:grid-cols-3 lgi:grid-cols-4 lgi:px-[56px] md:px-[40px] grid-cols-2 px-[20px] overflow-hidden"
        >
          <div className="col-span-1 py-[36px] lgi:pr-[56px] md:pr-[40px] pr-[40px]">
            <div className=" w-full h-full flex flex-col justify-between">
              <div className="flex flex-col items-center gap-[16px]">
                <div className="w-[80px] h-[80px] bg-gray-200 rounded-full overflow-hidden">
                  <img
                    src={item.photo_profile}
                    alt=""
                    className="w-full h-full object-cover object-[100%_0%]"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col gap-[8px] items-center">
                  <span className="font-semibold md:text-[16px] text-[14px] text-text leading-none">
                    {item.creator}
                  </span>
                  <span className="font-normal text-[12px] md:text-[14px] text-gray-400 leading-none">
                    {item.skill}
                  </span>
                </div>
              </div>
              <div>
                <Link to={'/profile/creators'} className="text-[12px] py-1 white rounded-md text-center w-full bg-black hover:bg-black/80 text-white border flex justify-center gap-2">
                  <img src={profileSVG} alt="profiles" width={16} />
                  View Profiles
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 md:col-span-2 lgi:col-span-3 col-span-1 py-[36px]">
            <div className="flex max-w-full h-full md:gap-4 gap-2 overflow-x-auto">
              {creators[index].image.map((item, idx) => (
                <div
                  key={idx}
                  className="w-[200px] h-[90%] mb-2 shrink-0 max-md:-translate-x-[60px]"
                >
                  <div className="w-full h-full bg-gray-200">
                    <img
                      src={item}
                      alt="image"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
