import React from "react";
import bg from "../../../assets/images/bg-profile.png";
import bgAvatar from "../../../assets/images/ft_3.jpg"
import { useLocation } from "react-router-dom";

const Banner = () => {
  const location = useLocation();
  return (
    <div>
      <img
        src={location.pathname == '/profile/me' ? bg : bgAvatar}
        alt=""
        className="w-full md:aspect-[1440/288] aspect-[375/144] object-cover"
      />

    </div>
  );
};

export default Banner;
