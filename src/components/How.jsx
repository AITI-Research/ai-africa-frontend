import React from 'react';
import how from '../Assets/Images/how.png';

const How = () => {
  return (
    <div className='w-full flex  flex-col-reverse md:flex-row justify-end items-center p-6 md:p-12 mt-16 gap-8 md:gap-12'>
      <div className="w-full md:w-[500px] flex flex-col justify-center md:justify-start gap-4">
        <div className="text-xl md:text-2xl font-medium text-[#FF8C00]  md:text-left mb-2">Our How</div>
        <div className="text-2xl md:text-4xl font-medium text-black  md:text-left mb-4">
          AI Africa: Personalized Career Pathway Solutions
        </div>
        <div className="">
        <img src={how} alt="Why choose us" className="w-full md:hidden flex h-auto md:h-[550px] object-cover" />
</div>  

        <div className="text-lg md:text-xl font-normal text-black mb-4">
          AI Africa's solution is a comprehensive platform that leverages AI-powered assessments and tailored recommendations to guide users towards their ideal career paths. By offering personalized support through virtual mentorship, AI Africa provides users with the tools they need to navigate their career journey effectively. This innovative approach ensures that each user receives individualized guidance, helping them to make informed decisions about their future. The platform's assessments analyze a user's skills, interests, and goals, matching them with suitable career opportunities that align with their strengths and aspirations.
        </div>

        <div className="w-[120px] h-[45px] bg-[#FF8C00] cursor-pointer flex justify-center items-center rounded-full text-white font-medium text-center">
          Read More
        </div>
      </div>
      <div className="w-full md:w-[400px] hidden md:flex justify-center md:justify-start ">
        <img src={how} alt="Why choose us" className="w-full h-auto md:h-[550px] object-cover" />
      </div>
    </div>
  );
};

export default How;
