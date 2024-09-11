import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cardHome, explorePage } from "../../../utils/data";
import useMediaquery from "../../../hooks/useMediaQuery";
import HireSVG from "../../../assets/svgs/Hire.jsx";
import Bookmark from "../../../assets/svgs/Bookmark.jsx";

const Header = () => {
  const [mobile, setmobile] = useMediaquery("(min-width: 1028px)");
  const [bookmark, setBookmark] = useState(false);
  const [queryId, setQueryId] = useState(null);

  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const id = query.get("design");

  return (
    <>
      {mobile ? (
        <div className="w-full flex h-auto">
          <Link to={"/profile/creators"} className="flex gap-[40px] lg:w-1/3 w-1/2 items-center">
            <img
              src={explorePage[id - 2912].photo_profile}
              className="w-[64px] h-[64px] rounded-full object-cover object-[100%_0%]"
            />
            <div className="flex flex-col gap-[12px] justify-center">
              <h4 className="text-[20px] font-bold leading-none">
                {explorePage[id - 2912].creator}
              </h4>
              <h6 className="text-[16px] text-gray-400 font-medium leading-none">
                {explorePage[id - 2912].skill}
              </h6>
            </div>
          </Link>
          <div className="flex flex-col lg:w-1/3 w-1/2 items-center gap-2">
            <h2 className="font-bold text-text leading-[2.5rem] text-[28px] text-center">
              {explorePage[id - 2912].judul}
            </h2>
            <h6 className="font-semibold text-gray-400 hidden lg:inline">
              {explorePage[id - 2912].category}
            </h6>
          </div>
          <div className="w-1/3 justify-end hidden lg:flex items-center gap-3">
            <button
              onClick={() => setBookmark(!bookmark)}
              className={`px-3 py-2 border border-gray-400 rounded-full ${
                bookmark && "bg-primary border-primary"
              }`}
            >
              <Bookmark active={bookmark} />
            </button>
            <button className="text-[16px] font-semibold text-primary flex items-center gap-1 ring ring-primary py-1 px-3 rounded-full group hover:bg-primary hover:text-white">
              <HireSVG />
              Hire Me
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full flex md:flex-row flex-col md:gap-0 gap-8 relative">
          <div className="absolute left-0 top-[130%] md:inline hidden">
              <div className="flex gap-2">
                <button
                  onClick={() => setBookmark(!bookmark)}
                  className={`px-3 py-2 border border-gray-400 rounded-full ${
                    bookmark && "bg-primary border-primary"
                  }`}
                >
                  <Bookmark active={bookmark} width={18} height={20} />
                </button>
                <button className="text-[12px] font-semibold text-primary flex items-center gap-1 border border-primary py-1 px-3 rounded-full group hover:bg-primary hover:text-white">
                  <HireSVG />
                </button>
              </div>
            </div>
          <div className="flex flex-col lg:w-1/3 md:w-1/2">
            <h2 className="font-bold text-text leading-[2.5rem] md:text-[28px] text-[28px]">
              {explorePage[id - 2912].judul}
            </h2>
            <h6 className="font-semibold text-gray-400 hidden lg:inline">
              {explorePage[id - 2912].category}
            </h6>
          </div>

          {/* ipad */}
          <Link to={"/profile/creators"} className="md:flex hidden md:gap-[40px] gap-[15px] lg:w-1/3 w-1/2 md:justify-end relative">
            
            <img
              src={explorePage[id - 2912].photo_profile}
              className="md:w-[64px] w-[40px] h-[40px] md:h-[64px] md:hidden rounded-full object-cover object-[100%_0%]"
            />
            <div className="flex flex-col md:gap-[12px] gap-[8px] justify-center md:text-end relative">
              <h4 className="md:text-[20px] font-bold leading-none">
                {explorePage[id - 2912].creator}
              </h4>
              <h6 className="md:text-[16px] text-[12px] text-gray-400 font-medium leading-none">
                {explorePage[id - 2912].skill}
              </h6>
            </div>
            <img
              src={explorePage[id - 2912].photo_profile}
              className="md:w-[64px] w-[40px] h-[40px] md:h-[64px] md:inline hidden rounded-full object-cover object-[100%_0%]"
            />
          </Link>

          {/* mobile */}
          <div className="flex justify-between md:hidden">
            <Link to={"/profile/creators"} className="flex md:gap-[40px] gap-[15px] lg:w-1/3 w-1/2 md:justify-end">
              <img
                src={explorePage[id - 2912].photo_profile}
                className="md:w-[64px] w-[40px] h-[40px] md:h-[64px] md:hidden rounded-full object-cover object-[100%_0%]"
              />
              <div className="flex flex-col md:gap-[12px] gap-[8px] justify-center md:text-end">
                <h4 className="md:text-[20px] font-bold leading-none">
                  {explorePage[id - 2912].creator}
                </h4>
                <h6 className="md:text-[16px] text-[12px] text-gray-400 font-medium leading-none">
                  {explorePage[id - 2912].skill}
                </h6>
              </div>
              <img
                src={explorePage[id - 2912].photo_profile}
                className="md:w-[64px] w-[40px] h-[40px] md:h-[64px] md:inline hidden rounded-full object-cover object-[100%_0%]"
              />
            </Link>
            <div className="flex justify-end gap-1 md:hidden">
              <button
                onClick={() => setBookmark(!bookmark)}
                className={`px-4 py-1 border-gray-400 rounded-full ${
                  bookmark && "bg-primary border-primary"
                }`}
              >
                <Bookmark width={14} height={16} active={bookmark} />
              </button>
              <button className="text-[16px] font-semibold text-primary flex items-center gap-1 ring-primary py-1 px-3 rounded-full group hover:bg-primary hover:text-white">
                <HireSVG />
              </button>
            </div>
          </div>
          <div className="w-1/3 justify-end hidden lg:flex"></div>
        </div>
      )}
    </>
  );
};

export default Header;
