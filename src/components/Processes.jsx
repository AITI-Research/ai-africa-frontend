import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Cards from './Cards';
import goal from '../Assets/Images/goal.png';
import pers from '../Assets/Images/pers.png';
import cert from '../Assets/Images/cert.png';
import pattern1 from '../Assets/Images/Ellipse 29.png';

const Processes = () => {
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
      className='relative mt-[40px] h-full md:h-[450px] w-full'
    >
      {/* Background Pattern */}
      <motion.img 
        src={pattern1} 
        alt="Pattern" 
        className="absolute md:block hidden bottom-20 right-0 w-[200px] h-[200px] md:w-[200px] md:h-[200px] object-contain z-0" 
        variants={cardVariants} 
      />

      <div className="text-[32px] font-[600] text-[#FF8C00] mb-[40px] text-center relative z-10">
        Your 3-Step Process
      </div>
      
      <motion.div 
        className="relative z-10 flex flex-col md:flex-row gap-[20px] items-center justify-center"
        variants={containerVariants}
      >
        <motion.div variants={cardVariants}>
          <Cards
            imageSrc={goal}
            title="Goal Setting"
            bodyText="A dedicated space for Nigerian users to connect, share experiences, and support each other within their local context."
            bgColor="bg-[#007BE5]"
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <Cards
            imageSrc={cert}
            title="Certification"
            bodyText="Achieving milestones through certifications and career development."
            bgColor="bg-[#007BE5]"
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <Cards
            imageSrc={pers}
            title="Personal Growth"
            bodyText="Tools and resources for personal and professional development."
            bgColor="bg-[#007BE5]"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Processes;
