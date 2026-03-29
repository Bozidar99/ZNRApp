import React from 'react';

//icons
import { IoPersonCircle } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function FooterComponent() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto flex flex-col space-y-8 items-start md:flex-row md:space-y-0 md:justify-between border-t-2 border-gray-600 pt-8">
        
        {/* Author */}
        <div className="flex items-center space-x-3">
          <IoPersonCircle size={35} className="text-gray-400" />
          <span className="text-lg font-medium">Autor: Božidar Bajović</span>
        </div>
        
        {/* Email */}
        <div className="flex items-center space-x-3">
          <MdAlternateEmail size={35} className="text-gray-400" />
          <span className="text-lg font-medium">
            Mail: 
            <a 
              href="mailto:bbajovic7@gmail.com" 
              className="text-blue-400 hover:underline ml-1"
            >
              bbajovic7@gmail.com

            </a>
          </span>
        </div>
        
        {/* Phone */}
        <div className="flex items-center space-x-3">
          <FaPhoneSquareAlt size={35} className="text-gray-400" />
          <span className="text-lg font-medium">
            Phone: 
            <a 
              href="tel:+38765094185" 
              className="text-blue-400 hover:underline ml-1"
            >
              +387 65 094 185
            </a>
          </span>
        </div>
        
        {/* Address */}
        <div className="flex items-center space-x-3">
          <FaLocationDot size={35} className="text-gray-400" />
          <span className="text-lg font-medium">
            Address: Nikole Tesle 71, 74000 Doboj, BiH
          </span>
        </div>

      </div>
    </footer>
  );
}

export default FooterComponent;
