import React from "react";
import { footer } from "../../utils/data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex justify-center w-full overflow-hidden shadow-inner mt-6  lg:px-[128px] md:px-[64px]">
      <div className="mx-auto w-full md:px-16 px-[2rem] p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="" className="flex items-center">
              <h2 className=" text-[40px] font-lemon leading-none"> WJ</h2>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 md:gap-40 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Features
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {footer.features.map((item, idx) => (
                  <li className="mb-4" key={idx}>
                    <Link to={item.url} href="" className="hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Overview
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {footer.OverView.map((item, idx) => (
                  <li className="mb-4" key={idx}>
                    <a href={item.url} className="hover:underline line-clamp-1">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between pt-6">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023{" "}
            <a href="" className="hover:underline">
              Work Journey™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
