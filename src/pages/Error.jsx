import React, { useState } from "react";
import Navbar from "../components/fragments/Navbar";
import Footer from "../components/fragments/Footer";
import Err from "../assets/svgs/err.svg";

const Error = () => {
  const [menuButton, setMenuButton] = useState(false);
  return (
    <div className="flex flex-col w-full min-h-[100dvh]">
      <Navbar menuButton={menuButton} setMenuButton={setMenuButton} />
      <div className=" flex justify-center items-center h-full">
        <img src={Err} alt="" width={500} />
      </div>
      <div className="-mt-[1.5rem]">
        <Footer />
      </div>
    </div>
  );
};

export default Error;
