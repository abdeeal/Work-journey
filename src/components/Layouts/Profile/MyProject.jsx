import React from "react";
import { explorePage } from "../../../utils/data";
import { Link, useLocation } from "react-router-dom";
import Button from "../../fragments/Button";
import UploadSVG from "../../../assets/svgs/UploadProject.svg";
import PencilSVG from "../../../assets/svgs/Pencil.svg";
import DeleteSVG from "../../../assets/svgs/Delete.svg";

const MyProject = () => {
  const location = useLocation();
  const myProfile = location.pathname == "/profile/me";
  const filteredData = explorePage.filter(item => item.creator === "Maria Haust");
  const filteredAvatar = explorePage.filter(item => item.creator !== "Maria Haust");
  return (
    <div className="flex flex-col gap-[24px] items-center">
      {myProfile && (
        <Button background className={"w-fit flex items-center gap-2"}>
          <img src={UploadSVG} alt="" width={20} />
          Upload New Project
        </Button>
      )}
      <div className="flex flex-wrap gap-[20px]">
        {myProfile ? (
          <>
            {filteredData.map((item, index) => (
              <div
                key={index}
                className="lg:w-[350px] md:w-[310px] lgi:w-[285px] w-[350px] h-fit flex flex-col gap-[16px] group text-text"
              >
                <Link to={`/project?design=${item.id + 2912}`}className="w-full aspect-square overflow-hidden relative rounded-xl">
                  <div className="absolute w-full aspect-square bg-gradient-to-t from-black/50 z-[1] hidden group-hover:inline" />
                  <img
                    key={index}
                    src={item.src}
                    alt="portfolio"
                    className="w-full aspect-square object-center rounded-[12px] object-cover group-hover:scale-[1.1] transition-all ease-in-out duration-300"
                    loading="lazy"
                  />
                </Link>
                <div className="flex justify-between items-start">
                  <div
                    className={`flex flex-col gap-2 ${myProfile && "w-1/2"}`}
                  >
                    <h2 className="text-[16px] font-bold line-clamp-2">
                      {item.judul}
                    </h2>
                    <h6 className="text-[12px] leading-none font-semibold text-gray-400">
                      {item.creator}
                    </h6>
                  </div>
                  <div className={`gap-2 ${myProfile ? "flex" : "hidden"}`}>
                    <button>
                      <img src={PencilSVG} alt="pencil" width={20} />
                    </button>
                    <button className="">
                      <img src={DeleteSVG} alt="Delete" width={22} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            {filteredAvatar.slice(2,5).map((item, index) => (
              <div
                key={index}
                className="lg:w-[350px] md:w-[310px] lgi:w-[285px] w-[350px] h-fit flex flex-col gap-[16px] group text-text"
              >
                <Link className="w-full aspect-square overflow-hidden relative rounded-xl">
                  <div className="absolute w-full aspect-square bg-gradient-to-t from-black/50 z-[1] hidden group-hover:inline" />
                  <img
                    key={index}
                    src={item.src}
                    alt="portfolio"
                    className="w-full aspect-square object-center rounded-[12px] object-cover group-hover:scale-[1.1] transition-all ease-in-out duration-300"
                    loading="lazy"
                  />
                </Link>
                <div className="flex justify-between items-start">
                  <div
                    className={`flex flex-col gap-2 ${myProfile && "w-1/2"}`}
                  >
                    <h2 className="text-[16px] font-bold line-clamp-2">
                      {item.judul}
                    </h2>
                    <h6 className="text-[12px] leading-none font-semibold text-gray-400">
                      {item.creator}
                    </h6>
                  </div>
                  <div className={`gap-2 ${myProfile ? "flex" : "hidden"}`}>
                    <button>
                      <img src={PencilSVG} alt="pencil" width={20} />
                    </button>
                    <button className="">
                      <img src={DeleteSVG} alt="Delete" width={22} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default MyProject;
