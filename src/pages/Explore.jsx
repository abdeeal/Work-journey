import React, { useRef, useEffect, useState } from "react";
import Navbar from "../components/fragments/Navbar";
import Hero from "../components/Layouts/Explore/Hero";
import { useInView } from "framer-motion";
import Footer from "../components/fragments/Footer";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import useMediaQuery from "../hooks/useMediaQuery";

const Explore = () => {
  const [inputSearch, setInputSearch] = useState(null);
  const [menuButton, setMenuButton] = useState(false);
  const [desktop, setDesktop] = useMediaQuery("(min-width: 1028px)");
  const [mobile, setmobile] = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (menuButton) disablePageScroll();
    else enablePageScroll();
  }, [menuButton]);

  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: `${desktop ? "-91px" : mobile ? "-199px" : "-190px"}`,
  });

  useEffect(() => {
    if (isInView) setInputSearch(null);
    else setInputSearch(1);
  }, [isInView]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="w-full h-auto relative">
      {menuButton && (
        <div className="absolute w-full h-full bg-black/50 z-[90]" />
      )}
      <div className="flex flex-col justify-between h-auto">
        <div className="relative">
          <Navbar
            searchExplore={inputSearch}
            menuButton={menuButton}
            setMenuButton={setMenuButton}
          />
          <Hero refid={ref} isInView={inputSearch} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Explore;
