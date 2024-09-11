import React, { useState } from "react";
import Navbar from "../components/fragments/Navbar";
import Footer from "../components/fragments/Footer";
import NavbarSearch from "../components/fragments/NavbarSearch";
import useMediaQuery from "../hooks/useMediaQuery";
import Overview from "../components/Layouts/Project/Overview";

const Project = () => {
  const [menuButton, setMenuButton] = useState(false);
  const [mobile, setmobile] = useMediaQuery("(min-width: 768px)");

  
  return (
    <div className="w-full h-auto relative">
      {menuButton && (
        <div className="absolute w-full h-full bg-black/50 z-[90]" />
      )}
      <div className="flex flex-col justify-between h-auto">
        <div>
          {mobile ? (
            <NavbarSearch />
          ) : (
            <Navbar menuButton={menuButton} setMenuButton={setMenuButton} />
          )}
          <Overview />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Project;
