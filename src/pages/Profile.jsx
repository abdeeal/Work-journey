import React, { useEffect, useState } from "react";
import Navbar from "../components/fragments/Navbar";
import Banner from "../components/Layouts/Profile/Banner";
import Header from "../components/Layouts/Profile/Header";
import Description from "../components/Layouts/Profile/Description";
import Footer from "../components/fragments/Footer";
import ProfileLink from "../components/Layouts/Profile/ProfileLink";
import { useLocation, useNavigate } from "react-router-dom";
import About from "../components/Layouts/Profile/About";
import MyProject from "../components/Layouts/Profile/MyProject";
import MyBookmark from "../components/Layouts/Profile/MyBookmark";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Profile = () => {
  const [current, setCurrent] = useState("");
  const [menuButton, setMenuButton] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrent(location.pathname + location.search);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (location.pathname == "/profile/me") {
      if (!sessionStorage.getItem("login")) {
        navigate("/");
      }
    }
  }, [sessionStorage]);

  useEffect(() => {
    if (menuButton) {
      disablePageScroll();
    } else enablePageScroll();
  }, [menuButton]);

  return (
    <div className="w-full flex flex-col relative">
      <Navbar menuButton={menuButton} setMenuButton={setMenuButton} />
      <div id="scroll" className="flex flex-col">
        {menuButton && (
          <div className="absolute w-full h-full bg-black/50 z-[90]" />
        )}
        <Banner />
        <div className="flex flex-col w-full lg:px-[128px] px-[16px] md:px-[64px]">
          <Header />
          <Description />
          <ProfileLink />
          <hr className="border-gray-200 mb-[48px]" />

          {current == "/profile/me" || current == "/profile/creators" ? (
            <About />
          ) : current == "/profile/me?=projects" ||
            current == "/profile/creators?=projects" ? (
            <MyProject />
          ) : current == "/profile/me?=bookmarks" ||
            current == "/profile/creators?=bookmarks" ? (
            <MyBookmark />
          ) : (
            <About />
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
