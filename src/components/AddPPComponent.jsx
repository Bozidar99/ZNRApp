import React, { useState, useEffect } from "react";
import axios from "axios";


function UpdateItem() {
  const [fileName, setFileName] = useState("lbpp.json"); // Podrazumevano fajl
  const [items, setItems] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    stock: "",
    lastDate: "",
    nextDate: "",
  });

  const fetchItems = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/${fileName.replace(".json", "Api")}`);
      setItems(response.data[fileName.split(".")[0]]); // Koristi ključ na osnovu imena fajla
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [fileName]); // Ponovno preuzimanje podataka pri promeni fajla

  const handleSelectChange = (e) => {
    const selectedItem = items.find((item) => item.id === parseInt(e.target.value));
    setSelectedId(selectedItem.id);
    setFormData({
      title: selectedItem.title,
      stock: selectedItem.stock,
      lastDate: selectedItem.lastDate,
      nextDate: selectedItem.nextDate,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFileName(e.target.value);
    setSelectedId(""); // Resetuj selektovani ID
    setFormData({
      title: "",
      stock: "",
      lastDate: "",
      nextDate: "",
    }); // Resetuj formu
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("http://localhost:8080/updateItem", {
        fileName,
        id: selectedId,
        updatedData: formData,
      });
      alert(`Item updated successfully: ${JSON.stringify(response.data.updatedItem)}`);
      fetchItems(); // Refresh items
    } catch (error) {
      console.error("Error updating item:", error);
      alert("Failed to update item");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Ažuriraj PP aparate i hidrante
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Izaberi fajl:</span>
            <select
              value={fileName}
              onChange={handleFileChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="lbpp.json">LB Profile</option>
              <option value="bopp.json">BoWiDo</option>
              <option value="alpp.json">AL-BoWiDo</option>
            </select>
          </label>
          <label className="block">
            <span className="text-gray-700">Odaberi stavku:</span>
            <select
              value={selectedId}
              onChange={handleSelectChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              disabled={!items.length}
            >
              <option value="">Izaberi stavku</option>
              {items.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title} (ID: {item.id})
                </option>
              ))}
            </select>
          </label>
          {selectedId && (
            <>
              <label className="block">
                <span className="text-gray-700">Naziv:</span>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Stanje:</span>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Datum poslednje provere:     <span className="text-sm text-gray-500 block mt-1">
                  *Napomena: mjesec/dan/godina
                </span></span>
                <input
                  type="date"
                  name="lastDate"
                  value={formData.lastDate}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Datum sledeće provere:  <span className="text-sm text-gray-500 block mt-1">
                  *Napomena: mjesec/dan/godina
                </span></span>
                <input
                  type="date"
                  name="nextDate"
                  value={formData.nextDate}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </label>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 shadow-md"
              >
                Ažuriraj stavku
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default UpdateItem;
