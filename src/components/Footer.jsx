import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import google from '../Assets/Images/Google.png';
import app from '../Assets/Images/App store.png';
import fb from '../Assets/Images/fe_facebook.png';
import twitter from '../Assets/Images/akar-icons_twitter-fill.png';
import link from '../Assets/Images/bi_linkedin.png';
import ig from '../Assets/Images/ri_instagram-fill.png';

const Footer = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="mt-[120px] w-full md:rounded-tl-[40px] md:rounded-tr-[40px] bg-[#007BE5] py-10"
    >
      <div className="flex flex-col mx-auto px-8 md:px-10 lg:px-20 mt-[80px] max-w-4xl text-center">
        <motion.h2
          className="text-white text-3xl md:text-4xl font-semibold"
          variants={containerVariants}
        >
          Take Control of Your Future With AI Africa
        </motion.h2>
        <motion.p
          className="mt-4 text-white text-base md:text-lg"
          variants={containerVariants}
        >
          Are you ready to achieve your life goals? Don’t miss out on the opportunity to discover your passions and a world of dreams made possible with AI Africa, your personalized AI guide.
        </motion.p>
        <motion.div
          className="mt-[65px] text-white font-bold text-lg"
          variants={containerVariants}
        >
          AI AFRICA
        </motion.div>
        <motion.div
          className="mt-[70px] flex justify-center items-center gap-[10px]"
          variants={containerVariants}
        >
          <motion.img
            src={google}
            alt="Google Play Store"
            className="cursor-pointer w-[171px] h-[54px]"
            variants={iconVariants}
          />
          <motion.img
            src={app}
            alt="App Store"
            className="cursor-pointer w-[171px] h-[54px]"
            variants={iconVariants}
          />
        </motion.div>
        <motion.div
          className="text-[12px] font-normal text-white mt-[120px]"
          variants={containerVariants}
        >
          @ COPYRIGHT | AI Africa 2024 | All Rights Reserved
        </motion.div>
        <motion.div
          className="flex justify-center mt-[20px] items-center gap-[10px]"
          variants={containerVariants}
        >
          <motion.img
            src={fb}
            alt="Facebook"
            className="cursor-pointer w-[30px] h-[30px]"
            variants={iconVariants}
          />
          <motion.img
            src={twitter}
            alt="Twitter"
            className="cursor-pointer w-[30px] h-[30px]"
            variants={iconVariants}
          />
          <motion.img
            src={link}
            alt="LinkedIn"
            className="cursor-pointer w-[30px] h-[30px]"
            variants={iconVariants}
          />
          <motion.img
            src={ig}
            alt="Instagram"
            className="cursor-pointer w-[30px] h-[30px]"
            variants={iconVariants}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;
