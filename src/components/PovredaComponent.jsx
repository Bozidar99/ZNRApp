import React from 'react'
import { Link } from 'react-router-dom'

function PovredaComponent() {
  return (
    <div className="container mx-auto py-8">
        <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-700">Povrede na radu koje su se desile</h1>
      </div>

      <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-8 justify-center">
        <Link to="/lbpovreda" className="px-6 py-3 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition font-semibold">
          Lb Profile Povreda
        </Link>
        <Link to="/bowidopovreda" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-semibold">
          BoWiDo Povreda
        </Link>
        <Link to="/alpovreda" className="px-6 py-3 bg-orange-600 text-white rounded-lg shadow hover:bg-orange-700 transition font-semibold">
          AL-BoWiDo Povreda
        </Link>
      </div>
      
    </div>
  )
}

export default PovredaComponent