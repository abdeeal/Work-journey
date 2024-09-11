import React, { useEffect, useState } from "react";
import { cardHome, navLink } from "../../utils/data";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";
import MenuButton from "./MenuButton";
import useMediaQuery from "../../hooks/useMediaQuery";
import ProfileSVG from "../../assets/svgs/Profile.svg";

const Navbar = ({ searchExplore, menuButton, setMenuButton }) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [other, setOthers] = useState(false);
  const [desktop, setDesktop] = useMediaQuery("(min-width: 768px)");

  const login = sessionStorage.getItem("login");
  const handleLogout = () => {
    sessionStorage.removeItem("login");
    window.location.reload();
  };

  const location = useLocation();

  return (
    <>
      {desktop ? (
        <motion.nav
          className={`${searchExplore == 1 && " pb-[2rem] lg:shadow-md"} ${
            menuButton && searchExplore == 1 && "bg-white"
          } w-full h-auto flex justify-between ${
            location.pathname.startsWith("/profile") &&
            "pb-[2rem] bg-white shadow-md"
          } pt-[2.5rem] items-center sticky top-0 z-[100] lg:px-[128px] px-[16px] md:px-[64px]`}
        >
          <AnimatePresence>
            {(searchExplore == 1 ||
              location.pathname == "/explore" ||
              location.pathname == "/creators") &&
              !menuButton && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute w-full h-full bg-white/100 backdrop-blur-md top-0 left-0 -z-10"
                />
              )}
          </AnimatePresence>

          <h2 className=" text-[40px] font-lemon leading-none">
            {menuButton ? "WJ" : "WJ"}
          </h2>
          <div className="relative gap-[28px] md:flex hidden">
            {navLink.map((item, idx) => (
              <Link
                to={item.url}
                key={idx}
                className={`${
                  location.pathname == item.url
                    ? "font-semibold"
                    : "text-black/65"
                } relative`}
              >
                <AnimatePresence>
                  {hoverIndex != null &&
                  hoverIndex == idx &&
                  location.pathname != item.url ? (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      transition={{ duration: 0.35 }}
                      style={{ transformOrigin: "center" }}
                      className="bg-black/70 absolute w-full h-[2px] top-[100%] rounded-full"
                    />
                  ) : null}
                </AnimatePresence>
                <motion.span
                  onHoverStart={() => setHoverIndex(idx)}
                  onHoverEnd={() => setHoverIndex(null)}
                  className={`w-full h-full relative ${
                    searchExplore == 1 ? "lg:hidden" : ""
                  }`}
                >
                  {item.label}
                </motion.span>
              </Link>
            ))}
          </div>
          {login ? (
            <Link to={"/profile/me"}>
              <img
                src={cardHome[1].src}
                alt=""
                className="rounded-full lg:w-[53px] md:w-[40px]"
              />
            </Link>
          ) : (
            <Button
              background
              className={"text-[0.8rem] px-8 md:inline hidden font-semibold"}
            >
              <Link to={`/login?to=${location.pathname + location.search}`}>
                Login
              </Link>
            </Button>
          )}
          <button className="md:hidden z-20">
            <MenuButton
              width={40}
              height={40}
              menuButton={menuButton}
              setMenuButton={setMenuButton}
            />
          </button>
        </motion.nav>
      ) : (
        <nav
        id="navbar"
          className={`w-full flex justify-between pt-[2rem] pb-[2rem] bg-white items-center sticky top-0 px-[16px] z-[999] h-auto ${
            searchExplore != 1 && "shadow-md"
          }`}
          data-scroll-lock-scrollable
        >
          <header className="z-[0]">
            <h2 className=" text-[40px] font-lemon leading-none">
              {menuButton ? "WJ" : "WJ"}
            </h2>
          </header>
          <div
            className={`w-full h-full bg-black/50 absolute -mx-4 ${
              menuButton ? "inline" : "hidden"
            }`}
          ></div>
          <aside className="z-[9999]">
            <button className="md:hidden z-[999] relative">
              <MenuButton
                width={40}
                height={40}
                menuButton={menuButton}
                setMenuButton={setMenuButton}
              />
            </button>
            <AnimatePresence>
              {menuButton && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-[65%] rounded-l-3xl bg-white min-h-[100dvh] absolute right-0 top-0 z-[10] flex flex-col items-center overflow-y-auto"
                  data-scroll-lock-scrollable
                >
                  <div className="w-full flex justify-center pt-[104px]">
                    {login ? (
                      <div className="flex flex-col items-center gap-[12px]">
                        <img
                          src={cardHome[1].src}
                          alt=""
                          className="w-[64px] h-[64px] rounded-full object-cover"
                        />
                        <div className="font-semibold w-full flex flex-row items-center justify-center gap-2 relative">
                          {cardHome[1].name}
                          <Link
                            to={"/profile/me"}
                            className="absolute left-[105%] w-[18px]"
                          >
                            <img
                              src={ProfileSVG}
                              alt="profile"
                              width={24}
                              className="scale-110"
                            />
                          </Link>
                        </div>
                        <Button
                          onClick={handleLogout}
                          className={
                            "border-primary text-primary py-1 text-[12px] hover:bg-primary hover:text-white"
                          }
                        >
                          Sign Out
                        </Button>
                      </div>
                    ) : (
                      <Link
                        to={`/login?to=${location.pathname + location.search}`}
                      >
                        <Button
                          background
                          className={"font-semibold text-[12px] w-[128px]"}
                        >
                          Login
                        </Button>
                      </Link>
                    )}
                  </div>
                  <div className="my-[48px] w-[60px] border-[0.10rem] rounded-full" />
                  <div className="flex flex-col gap-[32px]">
                    {navLink.map((item, idx) => (
                      <Link key={idx} to={item.url} className="flex gap-4">
                        <img src={item.icon} alt="icon" className="w-[20px]" />
                        <span
                          className={`text-[16px] ${
                            location.pathname == item.url
                              ? "font-semibold"
                              : "font-medium text-gray-500"
                          }`}
                        >
                          {item.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </aside>
        </nav>
      )}
    </>
  );
};

export default Navbar;
