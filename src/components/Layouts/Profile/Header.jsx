import React, { useState } from "react";
import { cardHome } from "../../../utils/data";
import CameraSVG from "../../../assets/svgs/Camera.svg";
import { AnimatePresence, motion } from "framer-motion";
import EditSVG from "../../../assets/svgs/EditProfile.svg";
import Avatar from "../../../assets/images/avatar.png";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [hover, setHover] = useState(false);

  const location = useLocation();

  const handleSignOut = () => {
    sessionStorage.removeItem("login");
    window.location.reload();
  };
  return (
    <div className="flex w-full justify-between h-auto relative">
      <div className="flex md:gap-8 gap-6 h-[100% relative]">
        <motion.div
          onHoverStart={() => {
            setHover(true);
          }}
          onHoverEnd={() => {
            setHover(false);
          }}
          className="lg:w-[164px] md:w-[132px] w-[100px] aspect-square rounded-full top-[50%] -translate-y-[100%] relative"
        >
          <AnimatePresence>
            {hover && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0 }}
                className="absolute w-full h-full bg-black rounded-full flex justify-center items-center cursor-pointer"
              >
                <img src={CameraSVG} alt="" width={40} />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="absolute w-full h-full bg-white rounded-full -z-[10] scale-110"></div>
          <img
            src={location.pathname == "/profile/me" ? cardHome[1].src : Avatar}
            alt=""
            className="w-full aspect-square rounded-full"
          />
        </motion.div>
        <div className="md:gap-8 gap-8 flex pt-2">
          <h2 className="font-bold md:text-[24px] text-[18px] flex md:inline flex-col">
            {location.pathname == "/profile/me" ? "1.02k " : "59.9k "}
            <span className="font-normal md:text-[20px] text-[14px] text-gray-500">
              Followers
            </span>
          </h2>
          <h2 className="font-bold md:text-[24px] text-[18px] flex md:inline flex-col">
            {location.pathname == "/profile/me" ? "255 " : "99 "}
            <span className="font-normal md:text-[20px] text-[14px] text-gray-500">
              Followings
            </span>
          </h2>
        </div>
      </div>

      <div className="flex justify-end lg:gap-4 gap-2 lg:pt-2 pt-4">
        {location.pathname == "/profile/me" ? (
          <>
            <button className="h-fit text-text md:border border-text lg:px-4 px-2 md:py-1 text-[16px] lg:rounded-full  rounded-full hover:bg-gray-100">
              <img
                src={EditSVG}
                alt="edit"
                className="lg:hidden md:w-[16px] w-[20px]"
              />
              <span className="lg:inline hidden">Edit Profile</span>
            </button>
            <button
              onClick={handleSignOut}
              className="h-fit text-primary border border-primary px-4 py-1 lg:text-[16px] rounded-full hover:bg-primary hover:text-white text-[12px] md:inline hidden"
            >
              Sign Out
            </button>
          </>
        ) : (
          <button className="h-fit text-primary md:border border-primary lg:px-4 px-2 md:py-1 text-[16px] lg:rounded-full  rounded-full hover:bg-primary hover:text-white">
              <span className="">Follow</span>
            </button>
        )}
      </div>
    </div>
  );
};

export default Header;
