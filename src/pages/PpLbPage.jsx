import React, { useEffect, useState } from "react";
import { FaFireExtinguisher } from "react-icons/fa";
import { MdFireHydrantAlt } from "react-icons/md";
import axios from "axios";

import PpComponent from '../components/PpComponent'


//imges
import lb from '../assets/4.png'
import bowido from '../assets/BOWIDOLOGO.png'
import al from '../assets/2.png'
function PpLbPage() {

  const [lbpp, setLbpp] = useState([]);

  // Fetch data from API
  const fetchFireSafetyData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/lbppApi");
      setLbpp(response.data.lbpp);
      console.log(response.data.lbpp);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchFireSafetyData();
  }, []);

  return (
    <div className="container mx-auto flex flex-col space-y-8 items-center border-2 border-gray-300 rounded-lg p-6 shadow-lg mt-10 mb-10 bg-gray-50">
      <PpComponent />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lbpp.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
          >
            {/* Icon and Title */}
            <div className="mb-4">
              {item.title === "S-9" || item.title === "Co2-5" ? (
                <FaFireExtinguisher className="text-red-600 text-6xl mb-2" />
              ) : item.title === "Hidrant" ? (
                <MdFireHydrantAlt className="text-blue-600 text-6xl mb-2" />
              ) : (
                <span className="text-gray-600 text-6xl mb-2">🔧</span>
              )}
              <h2 className="text-2xl font-semibold text-gray-800 ">{item.title}</h2>
            </div>

            {/* Details */}
            <div className="text-gray-700 ">
              <p>
                <strong>Na stanju:</strong> {item.stock}
              </p>
              <p>
                <strong>Poslednji pregled:</strong> {item.lastDate}
              </p>
              <p>
                <strong>Sledeći pregled:</strong> {item.nextDate}
              </p>
            </div>
          </div>
        ))}

      </div>

      <div className="mt-10 bg-gray-100 p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Lokacija Aprata</h2>
        <p className="text-gray-700"> Setktor ekstruzije i logistike</p>
        <p className="text-gray-700"> Setktor folirnice</p>
        <p className="text-gray-700"> Setktor medju-prostor</p>
        <p className="text-gray-700"> Setktor ojacanja</p>
        <p className="text-gray-700"> Setktor drobilica</p>
      </div>  

      <div className="flex justify-evenly items-center border-2 border-gray-300 rounded-lg p-4 bg-white shadow-md w-full">
        <img src={lb} alt="lb" className="w-[300px] h-[200px] object-contain mx-4" />
        <img src={bowido} alt="bowido" className="w-[250px] h-[150px] object-contain mx-4" />
        <img src={al} alt="al" className="w-[300px] h-[250px] object-contain mx-4" />
      </div>

    </div>
  )
}

export default PpLbPage