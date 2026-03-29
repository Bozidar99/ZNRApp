import React, { useState } from "react";
import axios from "axios";


function AddFirstAid() {
  const [formData, setFormData] = useState({
    name: "",
    check: "",
    order: "",
    add: "",
  });

  const [fileName, setFileName] = useState("firstaid.json");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/addFirstAid", {
        fileName,
        firstAid: formData,
      });
      alert(`First aid record added: ${JSON.stringify(response.data.firstAid)}`);
    } catch (error) {
      console.error("Error adding first aid record:", error);
      alert("Failed to add first aid record");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Dodavanje Prve Pomoći
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Firma:</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Naziv firme"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Datum Pregleda: <span className="text-sm text-gray-500 block mt-1">
              *Napomena: mjesec/dan/godina
            </span></span>
            <input
              type="date"
              name="check"
              value={formData.check}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Datum Narudžbe: <span className="text-sm text-gray-500 block mt-1">
              *Napomena: mjesec/dan/godina
            </span></span>
            <input
              type="date"
              name="order"
              value={formData.order}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Datum Popunjavanja:  <span className="text-sm text-gray-500 block mt-1">
              *Napomena: mjesec/dan/godina
            </span></span>
            <input
              type="date"
              name="add"
              value={formData.add}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 shadow-md"
          >
            Dodaj Prvu Pomoć
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddFirstAid;

