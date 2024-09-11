import React from "react";
import Main from "./Main";
import Recommendation from "./Recommendation";

const About = () => {
  return (
    <div className="flex lg:flex-row flex-col w-full gap-[20px]">
      <div className="lg:w-2/3 w-full">
        <Main />
      </div>
      <div className="lg:w-1/3 w-full">
        <Recommendation />
      </div>
    </div>
  );
};

export default About;
