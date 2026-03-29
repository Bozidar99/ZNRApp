import React from 'react'
import { Link } from 'react-router-dom'

function PpComponent() {
  return (
    <div className="container mx-auto py-8">
      
      {/* Naslov */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-700">PP aparati i hidranti</h1>
      </div>

      {/* Linkovi */}
      <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-8 justify-center">
        <Link
          to="/lbpp"
          className="px-6 py-3 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition font-semibold"
        >
          LB Profile 
        </Link>
        <Link
          to="/bowidopp"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-semibold"
        >
          BoWiDo 
        </Link>
        
        <Link
          to="/alpp"
          className="px-6 py-3 bg-orange-600 text-white rounded-lg shadow hover:bg-orange-700 transition font-semibold"
        >
          AL-BoWiDo 
        </Link>
        
      </div>
    </div>
  )
}

export default PpComponent