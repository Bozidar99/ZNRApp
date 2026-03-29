import React from 'react'
import { Link } from 'react-router-dom'

function PvaPomocComponent() {
  return (
    <div className='container mx-auto py-8'>
      <div className='text-center mb-8'>
        <h1 className='text-3xl font-bold text-gray-700'>Obuke iz oblasti prve pomoći</h1>
      </div>

      <div className='flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-8 justify-center '>
        <Link to="/lbfirstaid" className='px-6 py-3 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition font-semibold'>
          Lb Profile Obuka
        </Link>
        <Link to="/bofirstaid" className='px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-semibold'>
          BoWiDo Obuka
        </Link>
        
        {/*
        <Link to="/alobukazop" className='hover:underline border-gray-600 border-2 rounded-lg px-5 py-3 mr-10 font-bold mb-10 mt-10'>
          AL-BoWiDo Obuka
        </Link>
        */}
      </div>
    </div>
  )
}

export default PvaPomocComponent