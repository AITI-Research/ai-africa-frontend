import React from 'react';
import why from '../Assets/Images/why.png';

const Why = () => {
  return (
    <div className='w-full flex flex-col md:flex-row justify-start items-center p-6 md:p-12 mt-16 gap-8 md:gap-12'>
      {/* Text content */}
      <div className="w-full md:w-[500px] flex flex-col justify-start gap-4 order-2 md:order-1">
        <div className="text-xl md:text-2xl font-medium text-[#FF8C00] mb-2  md:text-left">Our Why</div>
        <div className="text-2xl md:text-4xl font-medium text-black mb-4  md:text-left">Navigating Career Challenges</div>

<div className="">
        <img src={why} alt="Why choose us" className="w-full md:hidden flex h-auto md:h-[550px] object-cover" />
</div>

        <div className="text-base md:text-lg font-normal text-black mb-4">
          1. African youths often face challenges with dedicated career counseling, leaving young people without guidance on choosing and pursuing appropriate career paths. This also leads to a mismatch between skills and available jobs.
        </div>
        
        <div className="text-base md:text-lg font-normal text-black mb-4">
          2. Limited access to quality educational programs could be a barrier, and the available programs could be outdated with the current demands in the job market, leaving graduates ill-equipped for available opportunities.
        </div>

        <div className="w-[120px] h-[45px] bg-[#FF8C00] cursor-pointer flex justify-center items-center rounded-full text-white font-medium text-center mt-4">
          Read More
        </div>
      </div>
      
      {/* Image content */}
      <div className="w-full md:w-[400px] hidden md:flex justify-center md:justify-start ">
        <img src={why} alt="Why choose us" className="w-full h-auto md:h-[550px] object-cover" />
      </div>
    </div>
  );
};

export default Why;
