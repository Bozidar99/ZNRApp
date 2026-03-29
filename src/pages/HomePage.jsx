import React from 'react';
import { FaUserGraduate, FaMedkit, FaExclamationTriangle, FaFireExtinguisher } from 'react-icons/fa';

import lb from '../assets/4.png'
import bowido from '../assets/BOWIDOLOGO.png'
import al from '../assets/2.png'

function HomePage() {
  return (
    <div className="container mx-auto p-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center py-12 rounded-lg shadow-md mb-10">
        <h1 className="text-4xl font-bold mb-4">Dobrodošli na ZNR Aplikaciju</h1>
        <p className="text-lg">
          Centralizovano upravljanje podacima o zaštiti na radu, obukama, povredama,
          i proverama opreme za sigurnost u vašim kompanijama.
        </p>

      </div>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <FaUserGraduate className="text-blue-500 text-4xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-700">Obuke</h2>
          <p className="text-gray-600 mt-2">
            Evidencija svih obuka iz ZNR i ZOP za vaše zaposlene.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <FaMedkit className="text-green-500 text-4xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-700">Prva Pomoć</h2>
          <p className="text-gray-600 mt-2">
            Praćenje stanja i sadržaja kutija za prvu pomoć.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <FaExclamationTriangle className="text-yellow-500 text-4xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-700">Povrede na Radu</h2>
          <p className="text-gray-600 mt-2">
            Detaljna evidencija svih povreda zaposlenih na radnom mestu.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <FaFireExtinguisher className="text-red-500 text-4xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-700">PP Aparati</h2>
          <p className="text-gray-600 mt-2">
            Provere protivpožarnih aparata i hidrantske mreže.
          </p>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="mt-10 bg-gray-100 p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold text-gray-700">Zašto koristiti našu aplikaciju?</h2>
        <p className="text-gray-600 mt-4">
          Naša aplikacija pomaže da uštedite vreme, centralizujete podatke i obezbedite potpunu
          kontrolu nad svim aspektima zaštite na radu. Jednostavna za korišćenje i prilagođena vašim potrebama.
        </p>

      

      </div>
      <div className="flex justify-evenly items-center border-2 border-gray-300 rounded-lg p-4 bg-white shadow-md w-full mt-8">
        <img src={lb} alt="lb" className="w-[300px] h-[200px] object-contain mx-4" />
        <img src={bowido} alt="bowido" className="w-[250px] h-[150px] object-contain mx-4" />
        <img src={al} alt="al" className="w-[300px] h-[250px] object-contain mx-4" />
      </div>
    </div>
  );
}

export default HomePage;
