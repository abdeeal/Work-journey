import React, { useEffect, useState } from "react";
import Button from "./Button";
import { cardHome, navLink } from "../../utils/data";
import { Link, useLocation } from "react-router-dom";
import searchSVG from "../../assets/svgs/search-icon.svg";

const NavbarSearch = () => {
  const [path, setPath] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/project") setPath("Explore");
  }, []);

  const login = sessionStorage.getItem("login");
  return (
    <nav className="bg-white w-full h-auto flex flex-col pt-[2.5rem] items-center sticky top-0 z-[100] lg:px-[128px] px-[16px] md:px-[64px] lg:pb-[2rem] pb-[1.5rem] shadow-md">
      <div className="flex justify-between w-full">
        <h2 className=" text-[40px] font-lemon leading-none"> WJ</h2>
        <div className="lg:w-full flex lg:justify-between lg:pl-[8.05rem] lg:pr-[2rem]">
          <div className="lg:w-[54%] flex gap-10 items-center">
            {navLink.map((item, index) => (
              <Link key={index} to={item.url}>
                <span
                  className={`${
                    path == item.label
                      ? "font-semibold text-text"
                      : "text-gray-400 hover:text-black/80"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
          <div className="w-[46%] lg:flex hidden">
            <div
              className={` flex rounded-full shadow-md z-[110] bg-white w-[400px] h-[38px]`}
            >
              <img src={searchSVG} alt="" width={20} className="ml-[20px]" />
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Explore Now"
                className={`w-[100%] pr-[56px] pl-[12px] text-[12px]
              } white !outline-none rounded-full tracking-wide h-[38px]`}
              />
            </div>
          </div>
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
      </div>
      <div className="lg:hidden flex w-full mt-[2rem]">
        <div
          className={` flex rounded-full shadow-md z-[110] bg-white w-full h-[38px]`}
        >
          <img src={searchSVG} alt="" width={20} className="ml-[20px]" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Explore Now"
            className={`w-[100%] pr-[56px] pl-[12px] text-[16px]
              } white !outline-none rounded-full tracking-wide h-[38px]`}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavbarSearch;
