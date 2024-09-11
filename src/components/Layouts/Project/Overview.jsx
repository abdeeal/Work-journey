import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import { explorePage } from "../../../utils/data";
import Main from "./Main";
import MainExplore from "../Explore/Main";

const Overview = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.search]);

  return (
    <div className="lg:px-[128px] px-[16px] md:px-[64px] pt-[5rem] flex flex-col text-text">
      <Header />
      <Main />
      <hr className="my-[5rem]" />
      <div className="flex flex-col">
        <h2 className="font-semibold text-[24px]">You Might Also Like</h2>
        <MainExplore />
      </div>
    </div>
  );
};

export default Overview;
