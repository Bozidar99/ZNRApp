import React, { useState } from "react";
import axios from "axios";

function UpdatePage() {
  const [formData, setFormData] = useState({
    fileName: "bowido.json", // Podrazumevani fajl
    id: "",
    date: "",
    zop: "",
    firstAid: "",
    mas: "",
    stat: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/updateWorkerDetails", {
        fileName: formData.fileName,
        id: parseInt(formData.id),
        updatedData: {
          date: formData.date,
          zop: formData.zop,
          firstAid: formData.firstAid,
          mas: formData.mas,
          stat: formData.stat

        },
      });
      setMessage(response.data.message || "Podaci uspešno ažurirani!");
    } catch (error) {
      console.error("Error updating worker details:", error);
      setMessage("Greška prilikom ažuriranja podataka.");
    }
  };

  return (
    <div className="container mx-auto p-8 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">Ažuriranje Radnika</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto"
      >
        {/* Odabir fajla */}
        <label className="block mb-4">
          <span className="text-gray-700">Izaberi Bazu</span>
          <select
            name="fileName"
            value={formData.fileName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="bowido.json">Bowido</option>
            <option value="lbprofile.json">LB Profile</option>
            <option value="albowido.json">AL-BoWiDo</option>
          </select>
        </label>

        {/* ID Radnika */}
        <label className="block mb-4">
          <span className="text-gray-700">ID Radnika</span>
          <input
            type="number"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </label>

        {/* Novi Datum */}
        <label className="block mb-4">
          <span className="text-gray-700">Datum ZNR  <span className="text-sm text-gray-500 block mt-1">
            *Napomena: mjesec/dan/godina
          </span> </span>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </label>

        {/* Novi Datum ZOP */}
        <label className="block mb-4">
          <span className="text-gray-700">Datum ZOP  <span className="text-sm text-gray-500 block mt-1">
            *Napomena: mjesec/dan/godina
          </span> </span>
          <input
            type="date"
            name="zop"
            value={formData.zop}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Certifikat za prvu pomoc  <span className="text-sm text-gray-500 block mt-1">
            *Napomena: Ukucati samo "yes"
          </span> </span>
          <input
            type="text"
            name="firstAid"
            value={formData.firstAid}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Certifikat za mašinu   </span>
          <input
            type="text"
            name="mas"
            value={formData.mas}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Status  </span>
          <input
            type="text"
            name="stat"
            value={formData.stat}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </label>

        {/* Submit Dugme */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Ažuriraj
        </button>
      </form>

      {/* Poruka */}
      {message && (
        <p className="mt-6 text-center text-lg font-semibold text-green-500">
          {message}
        </p>
      )}
    </div>
  );
}

export default UpdatePage;
