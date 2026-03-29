import React from 'react';
import { Link } from 'react-router-dom';

function ObukaComponent() {
  return (
    <div className="container mx-auto py-8">
      
      {/* Naslov */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-700">Obuke iz oblasti zaštite na radu</h1>
      </div>

      {/* Linkovi */}
      <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-8 justify-center">
        <Link
          to="/lbobuka"
          className="px-6 py-3 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition font-semibold"
        >
          LB Profile Obuka
        </Link>
        <Link
          to="/bowidoobuka"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-semibold"
        >
          BoWiDo Obuka
        </Link>
        <Link
          to="/alobuka"
          className="px-6 py-3 bg-orange-600 text-white rounded-lg shadow hover:bg-orange-700 transition font-semibold"
        >
          AL-BoWiDo Obuka
        </Link>
      </div>
    </div>
  );
}

export default ObukaComponent;
