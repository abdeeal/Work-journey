import React, { useRef, useEffect } from "react";
import { cardHome } from "../../../utils/data";
import { useLocation } from "react-router-dom";
const Creator = () => {
  return (
    <div
      id="popularCreators"
      className="relative md:w-[calc(100%+256px)] w-[calc(100%+32px)] pb-[5rem] pt-[2.5rem] flex flex-col md:gap-[1.5rem] gap-[2rem] md:-mx-[128px] md:px-[128px] -mx-[16px] px-[38px] overflow-hidden"
    >
      <h5 className="font-semibold text-[1.5rem] text-center">
        Popular Collaborator
      </h5>
      <div className="flex gap-[2rem]">
        <div className="flex gap-[2rem] animate-loop-scroll">
          {cardHome.map((creator, idx) => (
            <div
              key={idx}
              className=" w-[300px] aspect-square shrink-0 rounded-lg relative -translate-x-[16px] md:-translate-x-[64px] lg:-translate-x-[128px]"
            >
              <img
                src={creator.src}
                alt={creator.name}
                className="w-full aspect-square absolute rounded-[12px] z-10"
              />
              <div className="absolute w-full aspect-square bg-gradient-to-t from-black/80 z-10 rounded-[12px]" />
              <div className="absolute w-full aspect-square z-20">
                <h5 className="font-bold text-[20px] text-white pl-[24px] pt-[221px] text-manrope">
                  {creator.name}
                </h5>
                <h5 className="font-semibold text-[1rem] text-white pl-[24px] pt-[8px] text-manrope">
                  {creator.role}
                </h5>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-[2rem] animate-loop-scroll" aria-hidden="true">
          {cardHome.map((creator, idx) => (
            <div
              key={idx}
              className=" w-[300px] aspect-square shrink-0 rounded-lg relative -translate-x-[16px] md:-translate-x-[64px] lg:-translate-x-[128px]"
            >
              <img
                src={creator.src}
                alt={creator.name}
                className="w-full aspect-square absolute rounded-[12px] z-10"
              />
              <div className="absolute w-full aspect-square bg-gradient-to-t from-black/80 z-10 rounded-[12px]" />
              <div className="absolute w-full aspect-square z-20">
                <h5 className="font-bold text-[20px] text-white pl-[24px] pt-[221px] text-manrope">
                  {creator.name}
                </h5>
                <h5 className="font-semibold text-[1rem] text-white pl-[24px] pt-[8px] text-manrope">
                  {creator.role}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Creator;
