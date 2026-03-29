import React, { useState, useEffect } from "react";
import { FaFirstAid } from "react-icons/fa";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

function FirstAidPage() {

  const [pomoc, setPomoc] = useState([]);

  const fetchFirstAidLbAPI = async () => {
    try {
      const response = await axios.get("http://localhost:8080/firstaidApi");
      setPomoc(response.data.pomoc);
      console.log(response.data.pomoc);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchFirstAidLbAPI();
  }, []);

  return (
    <div className="container mx-auto min-h-screen bg-gray-50 p-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <FaFirstAid className="text-red-600 text-5xl" />
          <h1 className="text-4xl font-bold text-gray-800">Prva pomoć</h1>
        </div>
      </div>

      {/* Section for Supplies */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="flex justify-center text-2xl font-semibold text-gray-800 mb-4">
          Šta treba da sadrži prva pomoć?
        </h2>
        <ul className="flex flex-col items-center justify-center list-disc pl-6 space-y-2 text-gray-700">
          <li>Sterilna gaza 10x10cm</li>
          <li>Sterilna gaza 1/4</li>
          <li>Sterilna gaza 1/2</li>
          <li>Zavoj 10x5cm</li>
          <li>Zavoj 8x5cm</li>
          <li>Flaster-hanzaplast</li>
          <li>Par latex rukavica</li>
          <li>Flaster svileni</li>
          <li>Alkohol</li>
          <li>Jod</li>
          <li>Vata</li>
          <li>Pinceta</li>
          <li>Makaze</li>
        </ul>
      </div>

      {/* Table Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Datum pregleda i popunjavanja ormarića
        </h2>
        
        {/* Table */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="first aid table">
            <TableHead>
              <TableRow className="bg-gray-500 text-white">
                <TableCell align="center">Firma</TableCell>
                <TableCell align="center">Datum pregleda</TableCell>
                <TableCell align="center">Datum narudžbe</TableCell>
                <TableCell align="center">Datum popunjavanja</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pomoc.length > 0 ? (
                pomoc.map((firstaid, index) => (
                  <TableRow key={index} className="hover:bg-gray-100 transition-all duration-300">
                    <TableCell align="center">{firstaid.name}</TableCell>
                    <TableCell align="center">{firstaid.check}</TableCell>
                    <TableCell align="center">{firstaid.order}</TableCell>
                    <TableCell align="center">{firstaid.add}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center" className="text-gray-500">
                    Nema podataka
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default FirstAidPage;
