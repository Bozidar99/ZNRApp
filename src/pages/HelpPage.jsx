import React from 'react';
import { FaInfoCircle, FaBook, FaCheckCircle, FaServer, FaCalendarAlt } from 'react-icons/fa';

function HelpPage() {
  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-700">O Aplikaciji</h1>
        <p className="text-gray-500 text-lg mt-2">
          Sve što treba da znate o upravljanju zaštitom na radu.
        </p>
      </div>

      {/* Content Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* About Section */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <div className="flex items-center gap-3">
            <FaInfoCircle className="text-blue-500 text-3xl" />
            <h2 className="text-2xl font-semibold text-gray-700">O aplikaciji</h2>
          </div>
          <p className="text-gray-600 mt-4">
            Aplikacija omogućava prikupljanje svih podataka o zaštiti na radu za tri firme.
            Olakšava vođenje evidencija obuka, povreda, prve pomoći i provere PP aparata i hidranata.
          </p>
        </div>

        {/* How to Use */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <div className="flex items-center gap-3">
            <FaBook className="text-green-500 text-3xl" />
            <h2 className="text-2xl font-semibold text-gray-700">Kako koristiti</h2>
          </div>
          <p className="text-gray-600 mt-4">
            Aplikacija omogućava pregled podataka, dok se unos, izmene i upravljanje bazom podataka vrše jednostavno putem stranice Upravljanje podacima.

          </p>
        </div>

        {/* Features */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-purple-500 text-3xl" />
            <h2 className="text-2xl font-semibold text-gray-700">Prednosti aplikacije</h2>
          </div>
          <p className="text-gray-600 mt-4">
            Lako vođenje evidencija za svaku firmu, upozorenja o potrebi osvežavanja obuka,
            povreda, prve pomoći i provera PP aparata i hidranata.
          </p>
        </div>

        {/* Server Info */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <div className="flex items-center gap-3">
            <FaServer className="text-red-500 text-3xl" />
            <h2 className="text-2xl font-semibold text-gray-700">Server</h2>
          </div>
          <p className="text-gray-600 mt-4">Server port: <span className="font-semibold">localhost 8080</span></p>
          <p className="text-gray-600 mt-2">Verzija: <span className="font-semibold">1.0.1</span></p>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-10">
        <p className="text-gray-500 text-sm">
          Datum ažuriranja: <FaCalendarAlt className="inline-block text-blue-500" /> 02.12.2024
        </p>
      </div>
    </div>
  );
}

export default HelpPage;
