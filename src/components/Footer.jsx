import React from 'react';
import google from '../Assets/Images/Google.png'
import app from '../Assets/Images/App store.png'
import fb from '../Assets/Images/fe_facebook.png'
import twitter from '../Assets/Images/akar-icons_twitter-fill.png'
import link  from '../Assets/Images/bi_linkedin.png'
import ig from '../Assets/Images/ri_instagram-fill.png'
const Footer = () => {
  return (
    <div className=" mt-[200px] w-full md:rounded-tl-[40px] md:rounded-tr-[40px] bg-[#007BE5] py-10">
      <div className="flex flex-col mx-auto px-8 md:px-10 lg:px-20 mt-[80px] max-w-4xl text-center">
        <h2 className="text-white text-3xl md:text-4xl font-semibold">
          Take Control of Your Future With AI Africa
        </h2>
        <p className="mt-4 text-white text-base md:text-lg">
          Are you ready to achieve your life goals? Don’t miss out on the opportunity to discover your passions and a world of dreams made possible with AI Africa, your personalized AI guide.
        </p>
        <div className="mt-[65px] text-white font-bold text-lg">
          AI AFRICA
        </div>
        <div className=" mt-[70px] flex justify-center items-center gap-[5px] ">
            <img src={google} alt="" className=" cursor-pointer w-[171px] h-[54px] " />
            <img src={app} alt="" className="  cursor-pointer w-[171px] h-[54px] " />
        </div>
        <div className=" text-[12px]  font-normal text-white mt-[120px]  ">@ COPYRIGHT | AI Africa 2024 | All Rights Reserved</div>
        <div className="flex justify-center mt-[20px] items-center gap-[10px]">
            <img src={fb} alt="" className=" cursor-pointer w-[30px] h-[30px] " />
            <img src={twitter} alt="" className="cursor-pointer w-[30px] h-[30px] " />
            <img src={link} alt="" className=" cursor-pointer w-[30px] h-[30px] " />
            <img src={ig} alt="" className=" cursor-pointer w-[30px] h-[30px] " />
        </div>
      </div>
    </div>
  );
}

export default Footer;
