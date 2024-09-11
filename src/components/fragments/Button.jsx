import React from "react";

const Button = ({ background, className, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className && className} ${
        background
          ? "bg-primary hover:bg-primary/80 text-white"
          : "border border-gray-100 hover:bg-black/5"
      } px-6 py-2 rounded-full tm]`}
    >
      {children}
    </button>
  );
};

export default Button;
