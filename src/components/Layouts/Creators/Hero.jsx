import React from "react";
import Button from "../../fragments/Button";
import useMediaQuery from "../../../hooks/useMediaQuery";
import searchSVG from "../../../assets/svgs/search-icon.svg";
import Main from "./Main";
import { motion } from "framer-motion";
import { navLink, popularSearching } from "../../../utils/data";
import { Link, useLocation } from "react-router-dom";
import bgHero from "../../../assets/images/heroCreators.jpg";

const Hero = ({ refid, isInView }) => {
  const [desktop, setDesktop] = useMediaQuery("(min-width: 1028px)");
  const location = useLocation();

  return (
    <div className="relative w-full h-auto pt-[80px] flex flex-col items-center pb-[2.5rem] lg:px-[128px] px-[16px] md:px-[64px]">
      {desktop ? (
        <>
          <h2 className="font-extrabold text-[2.25rem] text-center text-gray-900">
            Looking For Best Creators ?
          </h2>
          {isInView == 1 ? (
            <div className=" top-[2.5rem] left-0 w-[65%] sticky z-[110] flex items-center h-[40px] gap-10">
              {navLink.map((item, idx) => (
                <Link key={idx} to={item.url}>
                  <span
                    className={`${
                      location.pathname == item.url
                        ? "font-semibold text-text"
                        : "text-black/40 hover:text-black/80"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            ""
          )}
          <motion.div
            ref={refid}
            initial={{ height: "50px" }}
            animate={{
              height: `${isInView != 1 ? "50px" : "38px"}`,
              width: `${isInView != 1 ? "731px" : "400px"}`,
              x: `${isInView != 1 ? "0px" : "220px"}`,
              y: `${isInView != 1 ? "0px" : "0px"}`,
            }}
            transition={{ type: "tween", duration: 0.25 }}
            className={`mt-[48px] flex rounded-full shadow-md sticky top-[40px] z-[110] bg-white`}
          >
            <img
              src={searchSVG}
              alt=""
              width={isInView != 1 ? 24 : 20}
              className="ml-[20px]"
            />
            <motion.input
              initial={{ height: "50px" }}
              animate={{ height: `${isInView != 1 ? "50px" : "38px"}` }}
              type="text"
              name="search"
              id="search"
              placeholder="Explore Now"
              className={`w-[100%] pr-[56px] pl-[12px] ${
                isInView != 1 ? "text-[20px]" : "text-[12px]"
              } white !outline-none rounded-full tracking-wide`}
            />
          </motion.div>
          <div className="flex gap-[2rem] pt-[48px] items-center">
            <h5 className="font-medium text-[24px] text-black leading-none">
              Popular Searching
            </h5>
            <button
              className={
                "text-[20px] px-[18px] rounded-full border h-[46px] border-gray-400"
              }
            >
              Graphics Design
            </button>
            <button
              className={
                "text-[20px] px-[18px] rounded-full border h-[46px] border-gray-400"
              }
            >
              Mobile Design
            </button>
            <Button
              className={
                "text-[20px] px-[18px] rounded-full border h-[46px] border-gray-400"
              }
            >
              UX Website
            </Button>
          </div>
          <Main />
        </>
      ) : (
        <div className="w-full flex flex-col">
          <h2 className="font-extrabold text-[2rem] md:pb-0 pb-4 text-center text-gray-900">
            Looking For Best Creators ?
          </h2>
          <div
            ref={refid}
            className={`w-[calc(100%+2rem)] -mx-[1rem] md:w-[calc(100%+128px)] md:-mx-[64px] bg-white pb-[24px] md:pt-[8px] sticky top-[4.9rem] z-10 ${
              isInView ? "shadow-md" : ""
            }`}
          >
            <div className="w-[calc(100%-2rem)] md:w-[calc(100%-128px)] mx-[1rem] md:mx-auto bg-white rounded-full shadow-md mt-[24px] flex h-[40px] sticky z-[10] top-[5.5rem] border">
              <img
                src={searchSVG}
                alt=""
                width={20}
                className="ml-[20px] z-[20]"
              />
              <input
                type="text"
                className="!outline-none w-full px-[16px] z-[20] rounded-full"
                placeholder="Explore Now"
              />
            </div>
          </div>
          <div className="max-w-full overflow-hidden relative flex md:grid md:grid-cols-12">
            <div className="hidden lgi:col-span-3 md:col-span-4 md:flex h-full">
              <h5 className="font-medium text-[20px] h-full text-black leading-none flex items-center">
                Popular Searching
              </h5>
            </div>
            <div className="flex lgi:col-span-9 md:col-span-8">
              <div className="flex overflow-x-auto gap-2 md:gap-3 max-w-full">
                {popularSearching.mobile.map((item, idx) => (
                  <Button
                    key={idx}
                    className={
                      "text-[12px] px-[18px] rounded-full border h-[46px] border-gray-400 shrink-0 mb-2"
                    }
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <Main />
        </div>
      )}
    </div>
  );
};

export default Hero;
