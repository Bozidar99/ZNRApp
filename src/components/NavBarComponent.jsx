import React from 'react';
//components
import HeaderComponent from './HeaderComponent';

//images
import logo from '../assets/logo.png';

import { Link } from 'react-router-dom';

function NavBarComponent() {
  return (
    <div>
      <HeaderComponent />

      {/* Navbar Container */}
      <div className="container mx-auto bg-gray-800 text-white flex flex-col items-center space-y-4 py-4 md:flex-row md:justify-between md:space-y-0 md:items-center ">
        
        {/* Logo Section */}
        <div className="flex justify-center items-center ml-4">
          <Link to="/">
            <img src={logo} alt="logo" className="w-16 h-16 md:w-20 md:h-20" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4 text-lg font-medium mr-4">
          <Link 
            to="/reports-obuka" 
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200"
          >
            Obuka
          </Link>
          <Link 
            to="/reports-povreda" 
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200"
          >
            Povrede
          </Link>
          <Link 
            to="/aparat" 
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200"
          >
            PP aparati
          </Link>
          <Link 
            to="/prva-pomoc" 
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200"
          >
            Prva pomoć
          </Link>

          <Link 
            to="/add" 
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200"
          >
            Upravljanje podacima
          </Link>

          <Link 
            to="/help" 
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200"
          >
            Help
          </Link>

        </div>
      </div>
    </div>
  );
}

export default NavBarComponent;
