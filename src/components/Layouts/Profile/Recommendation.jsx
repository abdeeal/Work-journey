import React, { useState, useEffect } from "react";
import { creators } from "../../../utils/data";
import { Link, useLocation } from "react-router-dom";

const Recommendation = () => {
  const [randomIdx, setRandomIdx] = useState(null)
  const location = useLocation();

  const creatorLength = creators.length;

  useEffect(() => {
    function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    setRandomIdx(getRandom(0, creatorLength - 5));
  }, [location]);
  return (
    <div>
      <div className="w-full py-[24px] shadow-md flex flex-col gap-[32px] rounded-xl">
        <h2 className="font-bold text-[20px] rounded-[12px] px-[1.5rem]">
          More Profiles For You
        </h2>
        <div className="flex flex-col">
        {creators.slice(randomIdx, randomIdx + 5).map((item, idx) => (
          <React.Fragment key={idx}>
          <Link to={"/profile/creators"}  className="flex flex-row gap-[12px] py-[24px] hover:bg-gray-100 px-[24px] items-center">
            <img src={item.photo_profile} alt="" className="md:w-[60px] w-[48px] h-[48px] md:h-[60px] aspect-square object-cover object-[100%_0%] rounded-full" />
            <div className="flex flex-col">
              <h4 className="font-semibold text-[20px]">{item.creator}</h4>
              <h4 className="font-normal text-[20px] text-gray-400">{item.skill}</h4>
            </div>
        
          </Link>
          <hr className="border-gray-200 mx-[24px]" />
          </React.Fragment>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
