import React, { useState } from "react";
import axios from "axios";

function AddWorkerComponent() {
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        workPlace: "",
        date: "",
        zop: "",
        mas: "",
        firstAid: "",
    });

    const [fileName, setFileName] = useState("lbprofile.json");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFileName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/addWorker", {
                fileName,
                worker: formData,
            });
            alert(`Worker added: ${JSON.stringify(response.data.worker)}`);
        } catch (error) {
            console.error("Error adding worker:", error);
            alert("Failed to add worker");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
                <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
                    Dodaj novog radnika
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Izaberi firmu:
                        </label>
                        <select
                            value={fileName}
                            onChange={handleFileChange}
                            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="albowido.json">Albowido</option>
                            <option value="bowido.json">Bowido</option>
                            <option value="lbprofile.json">LB Profile</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Ime:
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Unesi ime"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Prezime:
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Unesi prezime"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Radno mjesto:
                        </label>
                        <input
                            type="text"
                            name="workPlace"
                            value={formData.workPlace}
                            onChange={handleChange}
                            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Unesi radno mjesto"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Datum obuke iz oblasti ZNR:  <span className="text-sm text-gray-500 block mt-1">
                                *Napomena: mjesec/dan/godina
                            </span>
                        </label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Datum obuke iz oblasti ZOP:  <span className="text-sm text-gray-500 block mt-1">
                                *Napomena: mjesec/dan/godina
                            </span>
                        </label>
                        <input
                            type="date"
                            name="zop"
                            value={formData.zop}
                            onChange={handleChange}
                            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Certifikat za mašinu:
                        </label>
                        <input
                            type="text"
                            name="mas"
                            value={formData.mas}
                            onChange={handleChange}
                            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Popuni polje ako postoji certifikat"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Certifikat za prvu pomoć:
                        </label>
                        <input
                            type="text"
                            name="firstAid"
                            value={formData.firstAid}
                            onChange={handleChange}
                            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Popuni polje ako postoji certifikat sa yes"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
                    >
                        Dodaj
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddWorkerComponent;
