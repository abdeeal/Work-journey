import React from "react";
import card1 from "../../../assets/svgs/cardhome-1.svg";
import card2 from "../../../assets/svgs/cardhome-2.svg";
import card3 from "../../../assets/svgs/cardhome-3.svg";

const Features = () => {
  return (
    <div id="Features" className="w-full flex flex-col items-center">
      <div className="w-full flex justify-center">
        <h2 className="font-bold text-[24px]">What's Our Features</h2>
      </div>
      <div className="lg:w-[100%] w-[90%] md:w-[100%] flex lgi:flex-row flex-col flex-wrap items-center lg:gap-0 gap-[24px] lg:justify-between justify-center px-4 md:px-8 lg:px-32 py-12">
        {/* Card 1 */}
        <div className="w-full md:w-[48%] lgi:w-[30%] lgi:h-[475px] flex flex-col lg:hover:scale-105 transition-all ease-in-out duration-200 hover:shadow-xl h-auto ring ring-gray-400 rounded-[12px]">
          <div className="flex flex-col items-center px-[2.5rem] py-[3.5rem]">
            <img
              className="w-full max-w-[200px] pb-[4rem] h-auto mx-auto"
              src={card1}
              alt="Showcase Your Projects"
            />
            <div className="text-center">
              <h2 className="pb-[20px] font-bold text-[20px] font-manrope">
                Showcase
              </h2>
              <h4 className="text-[16px] text-gray-400">
                Your work deserves to shine. With WorkJourney, showcase your
                style easily.
              </h4>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-[48%] lgi:w-[30%] lgi:h-[475px] flex flex-col lg:hover:scale-105 transition-all ease-in-out duration-200 hover:shadow-xl h-auto ring ring-gray-400 rounded-[12px]">
          <div className="flex flex-col items-center px-[2.5rem] py-[3.5rem]">
            <img
              className="w-full max-w-[200px] pb-[4rem] h-auto mx-auto"
              src={card2}
              alt="Join Our Community"
            />
            <div className="text-center">
              <h2 className="pb-[20px] font-bold text-[20px] font-manrope">
                Connected
              </h2>
              <h4 className="text-[16px] text-gray-400">
                Creativity should be shared and celebrated.
              </h4>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-[48%] lgi:w-[30%] lgi:h-[475px] flex flex-col lg:hover:scale-105 transition-all ease-in-out duration-200 hover:shadow-xl h-auto ring ring-gray-400 rounded-[12px]">
          <div className="flex flex-col items-center px-[2.5rem] py-[3.5rem]">
            <img
              className="w-full max-w-[200px] pb-[4rem] h-auto mx-auto"
              src={card3}
              alt="Opportunities Await"
            />
            <div className="text-center">
              <h2 className="pb-[20px] font-bold text-[20px] font-manrope">
                Opportunities
              </h2>
              <h4 className="text-[16px] text-gray-400">
                Whether freelancing or seeking collaborations, WorkJourney is
                here to help.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
