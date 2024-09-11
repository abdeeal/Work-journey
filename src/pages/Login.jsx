import React, { useState } from "react";
import Button from "../components/fragments/Button";
import BG from "../assets/images/login-bg.webp";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Google from "../assets/svgs/Google.svg";
import { motion } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [anim, setAnim] = useState(false);

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
    <div className="w-full relative max-h-[100dvh] h-[100dvh] flex flex-wrap lg:flex-row flex-col">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: !anim && 0 }}
        transition={transition}
        className="lg:w-1/2 bg-white lg:px-[100px] px-[16px] md:px-[128px] flex flex-col justify-center h-full"
      >
        <h2 className=" text-[40px] font-lemon leading-none">{"WJ"}</h2>
        <h2 className="font-extrabold text-text text-[24px] pt-[32px]">
          Welcome Back
        </h2>
        <h5 className="pt-[4px] text-text font-light">
          Get logged back to your account.
        </h5>
        <button
          onClick={handleLogin}
          className="w-full flex justify-center items-center border border-gray-200 hover:bg-gray-100 rounded-full py-2 mt-[32px] gap-4"
        >
          <img src={Google} alt="" width={24} />
          <span className="font-semibold text-[14px]">Sign in With Google</span>
        </button>
        <hr className="border-gray-200 mb-[48px] mt-[12px]" />
        <p className="font-semibold">Email</p>
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
          Login
        </Button>
        <span className="pt-[16px] md:text-base text-[14px] text-text font-light">
          Doesn't have any account?
          <Link to={`/register?to=${to}`} className="font-medium text-primary">
            {" "}
            Sign Up Here.
          </Link>
        </span>
      </motion.div>
      <motion.div
        animate={{ x: 0 }}
        exit={{ x: !anim && "-100%" }}
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

export default Login;
