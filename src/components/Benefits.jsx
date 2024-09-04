import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BenefitsCard from './BenfitsCard';
import stats from '../Assets/Images/status-up.png';
import ppl from '../Assets/Images/people.png';
import brief from '../Assets/Images/briefcase.png';

const Benefits = () => {
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
        ease: "easeOut", 
        staggerChildren: 0.2 
      }
    },
  };

  const cardVariants = {
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
      className='mb-[50px] py-[80px] px-[20px] md:px-[40px] mt-[80px] md:mt-[0px] w-full bg-[#007BE5]'
    >
      <div className="text-[28px] md:text-[40px] font-[600] text-white mb-[30px] md:mb-[40px] text-center">
        Get The Best Out of AI Africa
      </div>
      <div className="flex flex-col mt-[40px] items-center justify-center gap-[30px] md:gap-[70px]">
        <motion.div
          className="flex flex-col md:flex-row gap-[40px] md:gap-[80px]"
          variants={containerVariants}
        >
          <motion.div variants={cardVariants}>
            <BenefitsCard
              imageSrc={stats}
              title='Skill Development Resources (Nigeria)'
              bodyText="Access to curated online courses, workshops, and training programs relevant to the Nigerian job market."
            />
          </motion.div>
          <motion.div variants={cardVariants}>
            <BenefitsCard
              imageSrc={ppl}
              title="Mentorship & Networking"
              bodyText="Connect users with experienced Nigerian professionals and mentors who understand the local context."
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="flex flex-col md:flex-row gap-[40px] md:gap-[80px] mt-[30px]"
          variants={containerVariants}
        >
          <motion.div variants={cardVariants}>
            <BenefitsCard
              imageSrc={brief}
              title="Job & Internship Opportunities"
              bodyText="Platform for discovering internship and job opportunities specifically in Nigeria."
            />
          </motion.div>
          <motion.div variants={cardVariants}>
            <BenefitsCard
              imageSrc={brief}
              title="At vero eos & Accusamus"
              bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Benefits;
