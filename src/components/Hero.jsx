import React from "react";
import bg from "../Assets/Images/hero-bg.png";
import google from "../Assets/Images/Google.png";
import app from "../Assets/Images/App store.png";
import bg2 from "../Assets/Images/bg2.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
      <div className=" mt-[30px] md:mt-2 w-full flex justify-center items-center gap-2">
        <div
          className="w-[35%]   border border-transparent hidden md:flex flex-col justify-end rounded-[20px] h-[450px] relative p-5"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-20 rounded-[20px]"></div>

          <div className="relative z-10 flex justify-center items-center gap-5 mb-5">
            <img
              src={google}
              alt="Google Play Store"
              className="cursor-pointer w-44 h-14 transition-transform duration-300 hover:scale-105"
            />
            <img
              src={app}
              alt="App Store"
              className="cursor-pointer w-44 h-14 transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

{/* <div className=""> */}
        <div

          style={{
            backgroundImage: `url(${bg2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="relative w-[95%] md:w-[65%] bg-[#0E0D17] h-full md:h-[450px]  rounded-[20px] md:rounded-[15px]"
        >
          <div className=" w-[90%] md:w-[80%] mt-8 p-[30px] flex flex-col justify-center md:mx-0 mx-auto items-center md:justify-start">
            <div className=" text-center md:text-left text-[24px] md:mb-0 mb-[15px] md:text-[45px] font-bold text-white">
              Discover Your Path: The AI Powered Guide For Ambitious African
              Youth
            </div>
            <div className="mt-2 text-[14px] md:text-left text-center font-normal text-white">
              Transform the educational landscape by introducing an innovative
              AI-powered platform that adapts dynamically to cater precisely to
              the individualized educational requirements of every learner.
            </div>
            <div className="mt-10  hidden md:flex justify-start items-center">
              <input
                type="text"
                className="bg-transparent p-3 w-80 h-12 border border-[#667085] text-white font-[600] text-lg rounded-bl-[30px] rounded-tl-[30px]"
                placeholder="Email Address"
              />
              <button className="w-40 h-12 bg-[#FF8C00] flex justify-center items-center text-white font-bold rounded-tr-[30px] rounded-br-[30px]">
                Subscribe
              </button>
            </div>
          </div>
          <div className=" flex justify-center gap-[10px] items-center mb-[20px] ">
        <div className="  w-[150px] bg-[#FF8C00] p-2 text-white font-[400] justify-center items-center text-[14px]  h-[45px] rounded-full md:hidden flex "> Get Started </div>
        <div className="w-[150px] bg-transparent border border-[#667085] text-white h-[45px] rounded-full flex items-center justify-center gap-2 md:hidden cursor-pointer  transition-colors duration-300">
    <span>Learn more</span>
    <FaArrowRight />
  </div>


          </div>
        </div>
      </div>
{/* </div> */}
    </>
  );
};

export default Hero;
