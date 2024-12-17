import React from 'react';
import { assets } from '../assets/frontend-assets/assets';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex flex-col md:flex-row justify-between items-center font-semibold p-4">
 
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt="Go Back"
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt="Go Forward"
          />
        </div>

  
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-4">
    
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Explore Premium
          </p>

      
          <p className="bg-black py-1 px-3 rounded-2xl text-white text-[15px] cursor-pointer">
            Install App
          </p>

        
          <a href="https://sportifyclone-admin.onrender.com" target="_blank" rel="noopener noreferrer">
            <span className="bg-black py-1 px-3 rounded-2xl text-white text-[15px] cursor-pointer">
              Admin Panel
            </span>
          </a>

    
          <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
            C
          </p>
        </div>
      </div>

      {/* Filters Section */}
      <div className="flex items-center gap-2 mt-4 p-4 justify-center md:justify-start">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
          All
        </p>
      </div>
    </>
  );
};

export default Navbar;
