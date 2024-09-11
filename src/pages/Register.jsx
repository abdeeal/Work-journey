import React, { useState } from "react";
import Button from "../components/fragments/Button";
import BG from "../assets/images/login-bg.webp";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Register = () => {
  const [anim, setAnim] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const to = query.get("to");

  const handleLogin = () => {
    sessionStorage.setItem("login", true);
    setAnim(true);
    navigate(to);
  };
  const transition = {
    duration: 1.4,
    ease: [0.6, 0.01, 0.05, 0.9],
  };
  return (
    <div className="w-full relative max-h-[100dvh] h-[100dvh] flex flex-wrap lg:flex-row-reverse flex-col">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: !anim && 0 }}
        transition={transition}
        className="lg:w-1/2 bg-white lg:px-[100px] px-[16px] md:px-[128px] flex flex-col justify-center h-full"
      >
        <h2 className=" text-[40px] font-lemon leading-none">{"WJ"}</h2>
        <h2 className="font-extrabold text-text text-[24px] pt-[32px]">
          Hi, Nice To Know You
        </h2>
        <h5 className="pt-[4px] text-text font-light">
          Lets create an account.
        </h5>
        <hr className="border-gray-200 mt-[48px] mb-[24px]" />
        <p className="font-semibold">Name</p>
        <input
          type="name"
          name="name"
          id="name"
          placeholder="Your Name"
          className="border border-gray-200 px-[12px] py-[12px] text-text text-[16px] mt-2 rounded-lg !outline-none focus:ring focus:ring-primary"
        />
        <p className="font-semibold pt-4">Email</p>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="name@email.com"
          className="border border-gray-200 px-[12px] py-[12px] text-text text-[16px] mt-2 rounded-lg !outline-none focus:ring focus:ring-primary"
        />
        <p className="font-semibold pt-4">Password</p>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="*****"
          className="border border-gray-200 px-[12px] py-[12px] text-text text-[16px] mt-2 rounded-lg !outline-none focus:ring focus:ring-primary"
        />
        <Button
          onClick={handleLogin}
          className={"mt-[32px] rounded-lg w-full"}
          background
        >
          Register
        </Button>
        <span className="pt-[16px] md:text-base text-[14px] text-text font-light">
          Already Have an account?
          <Link to={`/login?to=${to}`} className="font-medium text-primary">
            {" "}
            Login Here.
          </Link>
        </span>
      </motion.div>
      <motion.div
        animate={{ x: 0 }}
        exit={{ x: !anim && "100%" }}
        transition={transition}
        className="w-1/2 bg-white lg:flex items-center justify-center hidden"
      >
        <img
          src={BG}
          alt="background"
          className="w-[95%] h-[95%] object-cover rounded-2xl"
        />
      </motion.div>
    </div>
  );
};

export default Register;
