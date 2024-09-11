import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
const Section = ({ children }) => {
  const location = useLocation();
  return (
    <section className="relative w-full min-h-[100dvh]  md:h-auto overflow-x-hidden">
      {location.pathname == "/" && (
        <div className="absolute hidden md:inline left-0 right-0 bottom-0 top-0 bg-[radial-gradient(circle_600px_at_0%_50px,rgba(96,165,250,0.25),transparent)] -z-[99]" />
      )}
      {children}
    </section>
  );
};

export default Section;
