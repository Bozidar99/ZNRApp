import React, { useState } from "react";
import axios from "axios";


function UpdateWorker() {
  const [formData, setFormData] = useState({
    fileName: "povredebowido.json", // Default fajl
    id: "",
    name: "",
    lastName: "",
    workPlace: "",
    date: "",
  });

  const [message, setMessage] = useState("");

  // Funkcija za upravljanje promenama u input poljima
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Funkcija za slanje POST zahteva na server
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/updateWorker", {
        fileName: formData.fileName,
        id: parseInt(formData.id), // Pretvara id u broj
        updatedData: {
          name: formData.name,
          lastName: formData.lastName,
          workPlace: formData.workPlace,
          date: formData.date,
        },
      });

      setMessage(response.data.message);
    } catch (error) {
      console.error("Error updating worker:", error);
      setMessage("Greška prilikom ažuriranja radnika.");
    }
  };

  return (
    <div className="container mx-auto p-8 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">Ažuriraj Radnika</h1>

      {/* Forma za ažuriranje radnika */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto"
      >
        <label className="block mb-4">
          <span className="text-gray-700">Naziv Fajla</span>
          <select
            name="fileName"
            value={formData.fileName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="povredebowido.json">Bowido</option>
            <option value="povredeal.json">AL-BoWiDo</option>
            <option value="povredelb.json">LB Profile</option>
          </select>
        </label>



        <label className="block mb-4">
          <span className="text-gray-700">Ime</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Prezime</span>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Radno Mesto</span>
          <input
            type="text"
            name="workPlace"
            value={formData.workPlace}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Datum Povrede <span className="text-sm text-gray-500 block mt-1">
            *Napomena: mjesec/dan/godina
          </span></span>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </label>


        {/* Dugme za slanje */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Ažuriraj Radnika
        </button>
      </form>

      {/* Poruka o uspehu ili grešci */}
      {message && (
        <p className="mt-6 text-center text-lg font-semibold text-green-500">
          {message}
        </p>
      )}
    </div>
  );
}

export default UpdateWorker;
