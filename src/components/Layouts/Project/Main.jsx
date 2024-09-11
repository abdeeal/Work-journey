import React from "react";
import { useLocation } from "react-router-dom";
import { explorePage } from "../../../utils/data";
const Main = () => {
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const id = query.get("design");
  return (
    <div className="md:pt-[5rem] pt-[2rem] w-full flex flex-col gap-[32px]">
      <img
        src={explorePage[id - 2912].src}
        alt={explorePage[id - 2912].judul}
        className="w-full rounded-[16px]"
      />
      <div className="flex flex-col gap-[16px]">
        <h1 className="font-semibold text-[28px]">Description</h1>
        <span className="text-justify md:text-[20px] text-[19px] text-gray-600 font-regular  ">
        {explorePage[id - 2912].deskripsi}
        </span>
      </div>
    </div>
  );
};

export default Main;
