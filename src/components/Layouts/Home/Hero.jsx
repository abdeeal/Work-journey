import React, { useRef } from "react";
import Button from "../../fragments/Button";
import useMediaQuery from "../../../hooks/useMediaQuery";
import scribbleSVG from "../../../assets/svgs/scribble.svg";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const [desktop, setDesktop] = useMediaQuery("(min-width: 1028px)");

  return (
    <div className="relative w-full pt-[5rem] flex flex-col items-center pb-[2.5rem]">
      {desktop ? (
        <>
          <h2 className="font-extrabold text-[3rem] relative text-center text-gray-900">
            Discover Insights and Connect
          </h2>
          <h2 className="font-extrabold text-[3rem] relative text-center text-gray-900">
            with Collaborators on Work{" "}
            <span className="bg-gradient-to-r from-blue-800 to to-blue-400 bg-clip-text text-transparent relative">
              Journey !
              <img
              aria-hidden="true"
              src={scribbleSVG}
              alt="scribble"
              className="absolute right-0 top-[100%] w-[90%] aspect-[16/4] fill-primary select-none pointer-events-none"
            />
            </span>
            
          </h2>

          <h4 className="max-w-[506px] text-center text-gray-400 text-[20px] my-[2rem] font-light">
            Our platform showcases an extensive collection of work from IT
            professionals across various roles.
          </h4>
          <Link to={"/explore"}>
            <Button background className={"text-[1rem] px-[3.5rem]"}>
              Get Started
            </Button>
          </Link>
        </>
      ) : (
        <div className="md:pt-[48px] lgi:pt-[128px] w-full relative flex flex-col items-center">
          <h2 className="font-extrabold md:text-[2rem] text-[32px] lgi:text-[3rem] relative text-center text-gray-900">
            Discover Insights and&nbsp;Connect with&nbsp;Collaborators on
            Work&nbsp;
            <span className="bg-gradient-to-r from-blue-800 to to-blue-400 bg-clip-text text-transparent relative">
              Journey !
              <img
              aria-hidden="true"
              src={scribbleSVG}
              alt="scribble"
              className="absolute md:top-[99%] top-[98%] right-[0%] w-[90%] aspect-[16/4] fill-primary select-none pointer-events-none"
            />
            </span>
            
          </h2>
          <h4 className="lgi:max-w-[27rem] md:max-w-[26rem] max-w-[22rem] text-center text-gray-400 text-[16px] my-[1.5rem] pt-[24px] lgi:pt-[32px]">
            Our platform showcases an extensive collection of work from IT
            professionals across various roles.
          </h4>
          <Link to={"/explore"}>
            <Button
              background
              className={"text-[1rem] px-[3.5rem] font-semibold"}
            >
              Get Started
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Hero;
