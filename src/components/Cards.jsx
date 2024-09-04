import React from "react";

const Cards = ({ imageSrc, title, bodyText, bgColor }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-[370px] h-[222px] rounded-[10px] p-4 ${bgColor}`}
    >
      <div className="mb-2">
        <img src={imageSrc} alt="" className="w-[60px] h-[60px]" />
      </div>
      <div className="text-white text-[18px] font-bold text-center">{title}</div>
      <div className="text-white text-[14px] mt-2 text-center">{bodyText}</div>
    </div>
  );
};

export default Cards;
