import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-[80px] w-full flex items-center justify-between px-[25px] md:px-[80px] py-[10px] bg-white md:shadow-none shadow-md ">
      {/* Logo */}
      <div className="text-[24px] text-[#0E0D17] font-bold">AI AFRICA</div>

      {/* Desktop Links */}
      <div className="hidden lg:flex flex-1 justify-center items-center gap-[50px]">
        <a href="#home" className="text-[16px] font-bold text-[#0E0D17]">Home</a>
        <a href="#about" className="text-[16px] font-bold text-[#0E0D17]">About Us</a>
        <a href="#faqs" className="text-[16px] font-bold text-[#0E0D17]">FAQs</a>
      </div>

      {/* Desktop Get Started Button */}
      <div className="hidden lg:flex">
        <button
          className="cursor-pointer w-[228px] h-[60px] rounded-[30px] flex justify-center items-center bg-[#FF8C00]"
        >
          <div className="text-[#fafafa] text-[16px] font-bold">Get Started</div>
        </button>
      </div>

      {/* Mobile Get Started Button */}
      {/* <div className="lg:hidden flex items-center">
        <button
          className="cursor-pointer w-[120px] p-2 h-[50px] rounded-[25px] flex justify-center items-center bg-[#FF8C00]"
        >
          <div className="text-[#fafafa] text-[16px] font-bold">Get Started</div>
        </button>
      </div> */}

      {/* Mobile Menu Icon */}
      <div className="lg:hidden bg-gray-400 p-2 rounded-full flex items-center">
        <button onClick={toggleMenu}>
          {isOpen ? <FiX size={24} color="#0E0D17" /> : <FiMenu size={24} color="#0E0D17" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-white z-40 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex justify-end p-[20px]">
          <button onClick={toggleMenu}>
            <FiX size={30} color="#0E0D17" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <a href="#home" className="text-[24px] font-bold text-[#0E0D17] mb-6">Home</a>
          <a href="#about" className="text-[24px] font-bold text-[#0E0D17] mb-6">About Us</a>
          <a href="#faqs" className="text-[24px] font-bold text-[#0E0D17] mb-6">FAQs</a>
          <button
            className="cursor-pointer w-[200px] h-[60px] rounded-[30px] flex justify-center items-center bg-[#FF8C00]"
          >
            <div className="text-[#fafafa] text-[16px] font-bold">Get Started</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
