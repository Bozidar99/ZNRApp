import React from "react";
import { Link } from "react-router-dom";

import lb from '../assets/4.png'
import bowido from '../assets/BOWIDOLOGO.png'
import al from '../assets/2.png'

function AddNewWorker() {
  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center bg-gray-100 p-4 flex-col gap-10">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full space-y-4">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Upravljanje Podacima
        </h1>
        <div className="space-y-3">
          <Link
            to="/addnew"
            className="block w-full bg-blue-500 text-white text-center py-2 px-4 rounded-lg shadow-md hover:bg-blue-600"
          >
            Ažuriraj novog radnika
          </Link>

          <Link
            to="/update"
            className="block w-full bg-yellow-500 text-white text-center py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600"
          >
            Ažuriraj postojećeg radnika
          </Link>

          <Link
            to="/addpo"
            className="block w-full bg-green-500 text-white text-center py-2 px-4 rounded-lg shadow-md hover:bg-green-600"
          >
            Ažuriraj povredu na radu
          </Link>

          <Link
            to="/addpp"
            className="block w-full bg-orange-500 text-white text-center py-2 px-4 rounded-lg shadow-md hover:bg-orange-600"
          >
            Ažuriraj PP aparate i hidrante
          </Link>
          <Link
            to="/addh"
            className="block w-full bg-red-500 text-white text-center py-2 px-4 rounded-lg shadow-md hover:bg-red-600"
          >
            Ažuriraj prvu pomoć
          </Link>
        </div>


      </div>

      <div className="flex justify-evenly items-center border-2 border-gray-300 rounded-lg p-4 bg-white shadow-md w-full">
        <img src={lb} alt="lb" className="w-[300px] h-[200px] object-contain mx-4" />
        <img src={bowido} alt="bowido" className="w-[250px] h-[150px] object-contain mx-4" />
        <img src={al} alt="al" className="w-[300px] h-[250px] object-contain mx-4" />
      </div>
    </div>
  );
}

export default AddNewWorker;
