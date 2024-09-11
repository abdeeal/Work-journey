import { useEffect, useState } from "react";
import Navbar from "../components/fragments/Navbar";
import Hero from "../components/Layouts/Home/Hero";
import Section from "../components/fragments/Section";
import Creator from "../components/Layouts/Home/Creator";
import Footer from "../components/fragments/Footer";
import Features from "../components/Layouts/Home/Features";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import useMediaQuery from "../hooks/useMediaQuery";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [menuButton, setMenuButton] = useState(false);
  const [desktop, setDesktop] = useMediaQuery("(min-width: 768px)");

  const location = useLocation();

  useEffect(() => {
    const scroll = document.getElementById("scroll")
    if (menuButton) disablePageScroll();
    else enablePageScroll();
  }, [menuButton]);

  useEffect(() => {
    if (location.hash == "#popularCreators") {
      document.getElementById("popularCreators").scrollIntoView({
        behavior: "smooth",
      });
    }
    if (location.hash == "#Features") {
      document.getElementById("Features").scrollIntoView({
        behavior: "smooth",
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <>
      {desktop ? (
        <Section>
          <div className="flex flex-col justify-between h-auto">
            {menuButton && (
              <div className="absolute w-full h-full bg-black/50 z-[10]" />
            )}
            <div>
              <Navbar menuButton={menuButton} setMenuButton={setMenuButton} />
                <Hero />
                <Creator />
                <Features />
            </div>
            <Footer />
          </div>
        </Section>
      ) : (
        <div className="w-full h-auto relative ">
          {menuButton && (
            <div className="absolute w-full h-full bg-black/50 z-[90]" />
          )}
          <div className="flex flex-col justify-between h-auto">
            <div>
              <Navbar menuButton={menuButton} setMenuButton={setMenuButton} />
              <Hero />
              <Creator />
              <Features />
            </div>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
