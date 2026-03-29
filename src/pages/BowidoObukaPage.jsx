import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from 'react';
import axios from 'axios';
import ObukaComponent from '../components/ObukaComponent';
import { Link } from 'react-router-dom';
import { useRef } from 'react';




function BowidoObukaPage() {

  const [workers, setWorkers] = useState([]);
  const tableRef = useRef();

  const fetchBowidoAPI = async () => {
    try {
      const response = await axios.get("http://localhost:8080/bowidoApi");
      setWorkers(response.data.workers);
      console.log(response.data.workers);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchBowidoAPI();
  }, []);

  const getDateColor = (dateString) => {
    const date = new Date(dateString);
    const threeYearsAgo = new Date();
    threeYearsAgo.setFullYear(threeYearsAgo.getFullYear() - 3);

    return date > threeYearsAgo ? 'green' : 'red';
  };

  const handlePrint = () => {
    const printContent = tableRef.current.innerHTML; // Dohvatite sadržaj div-a
    const originalContent = document.body.innerHTML; // Sačuvajte trenutni sadržaj stranice

    document.body.innerHTML = printContent; // Postavite samo tabelu kao sadržaj za štampu
    window.print(); // Pokrenite štampu
    document.body.innerHTML = originalContent; // Vratite originalni sadržaj
  };


  return (
    <div className="mt-12 mb-12">
      {/* Heading and Navigation */}
      <ObukaComponent />
      <div className="container mx-auto flex justify-start items-center space-x-4 mb-8">
        <Link
          to="/bowido_no_obuka"
          className="hover:underline border-gray-600 border-2 rounded-lg px-5 py-3 font-bold"
        >
          Radnici bez obuke
        </Link>
        <button
          onClick={handlePrint}
          className="hover:underline border-gray-600 border-2 rounded-lg px-5 py-3 font-bold"
        >
          Print
        </button>
      </div>

      {/* Table */}
      <div ref={tableRef} className="container mx-auto">
        <TableContainer component={Paper} className="w-full lg:w-[80%] mx-auto shadow-md">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className="bg-gray-800">
              <TableRow>
                <TableCell style={{ color: "white" }} align="center">
                  ID
                </TableCell>
                <TableCell style={{ color: "white" }} align="center">
                  Ime
                </TableCell>
                <TableCell style={{ color: "white" }} align="center">
                  Prezime
                </TableCell>
                <TableCell style={{ color: "white" }} align="center">
                  Radno mjesto
                </TableCell>
                <TableCell style={{ color: "white" }} align="center">
                  Datum
                </TableCell>
                <TableCell style={{ color: "white" }} align="center">
                  Status
                  </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {workers.length > 0 ? (
                workers.map((worker, index) => (
                  <TableRow key={index} hover>
                    <TableCell align="center">{worker.id}</TableCell>
                    <TableCell align="center">{worker.name}</TableCell>
                    <TableCell align="center">{worker.lastName}</TableCell>
                    <TableCell align="center">{worker.workPlace}</TableCell>
                    <TableCell
                      align="center"
                      style={{
                        color: getDateColor(worker.date),
                        fontWeight: "bold",
                      }}
                    >
                      {worker.date || "Nema podataka"}
                    </TableCell>
                    <TableCell align="center">{worker.stat}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center" style={{ color: "#6B7280" }}>
                    Nema dostupnih podataka.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default BowidoObukaPage