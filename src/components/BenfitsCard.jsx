import React from 'react';

const BenefitsCard = ({ imageSrc, title, bodyText }) => {
  return (
    <div className='w-[373px]  h-[187px] flex flex-col justify-start items-start gap-[12px]'>
      <img src={imageSrc} alt="" className="w-[64px] h-[64px]" />
      <div className="text-[20px] font-bold text-[white]">{title}</div>
      <div className="text-[18px] font-normal text-[white]">{bodyText}</div>
    </div>
  );
};

export default BenefitsCard;
