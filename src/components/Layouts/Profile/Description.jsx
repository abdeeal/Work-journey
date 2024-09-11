import React from "react";
import { cardHome } from "../../../utils/data";
import EditSVG from "../../../assets/svgs/EditProfile.svg";
import { useLocation } from "react-router-dom";

const Description = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col">
      <div className="flex justify-between md:-mt-[58px] -mt-[32px]">
        <h2 className=" font-bold md:text-[32px] text-[28px] flex gap-2 items-center">
          {location.pathname == '/profile/me' ? cardHome[1].name : "Creator's Name"}
        </h2>
      </div>
      <h6 className="text-text pt-[4px] md:text-base">
        UI/UX Designer | Creating User-Centered Experiences
      </h6>
    </div>
  );
};

export default Description;
