import React, { useState, useEffect } from 'react';


import PpComponent from '../components/PpComponent';

//imges
import lb from '../assets/4.png'
import bowido from '../assets/BOWIDOLOGO.png'
import al from '../assets/2.png'


function AparatPage() {
  

  return (
    <div className="container mx-auto flex flex-col space-y-8 items-center border-2 border-gray-300 rounded-lg p-6 shadow-lg mt-10 mb-10 bg-gray-50">
      <PpComponent />
      
      <div className="flex justify-evenly items-center border-2 border-gray-300 rounded-lg p-4 bg-white shadow-md w-full">
        <img src={lb} alt="lb" className="w-[300px] h-[200px] object-contain mx-4" />
        <img src={bowido} alt="bowido" className="w-[250px] h-[150px] object-contain mx-4" />
        <img src={al} alt="al" className="w-[300px] h-[250px] object-contain mx-4" />
      </div>
      
    </div>
  );
}

export default AparatPage;
