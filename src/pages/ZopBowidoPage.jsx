import React, { useEffect, useState, useRef } from 'react'
import ZopComponent from '../components/ZopComponent'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from 'axios';


function ZopBowidoPage() {

  const [workers, setWorkers] = useState([]);

  const tableRef = useRef();

  const fetchAlBowidoAPI = async () => {
    try {
      const response = await axios.get("http://localhost:8080/albowidoApi");
      setWorkers(response.data.workers);
      console.log(response.data.workers);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchAlBowidoAPI();
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
    <div>
      <ZopComponent />

      <div className="container mx-auto flex justify-end">
        <button
          onClick={handlePrint}
          className="hover:underline border-gray-600 border-2 rounded-lg px-5 py-3 mr-10 font-bold mb-10 mt-10">
          Print
        </button>
      </div>

      <div ref={tableRef} className="container mx-auto flex flex-col lg:flex-row gap-[20px]">
        <TableContainer component={Paper} className="w-full lg:w-[70%]">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className="bg-gray-600">
              <TableRow>
              <TableCell style={{ color: "white" }} align="center">ID</TableCell>
                <TableCell style={{ color: "white" }} align="center">Ime</TableCell>
                <TableCell style={{ color: "white" }} align="center">Prezime</TableCell>
                <TableCell style={{ color: "white" }} align="center">Radno mjesto</TableCell>
                <TableCell style={{ color: "white" }} align="center">Datum</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {workers.length > 0 ? (
                workers.map((worker, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{worker.id}</TableCell>
                    <TableCell align="center">{worker.name}</TableCell>
                    <TableCell align="center">{worker.lastName}</TableCell>
                    <TableCell align="center">{worker.workPlace}</TableCell>
                    <TableCell align="center" style={{ color: getDateColor(worker.zop), fontWeight: "bold" }}  >
                      {worker.zop || "Nema podataka"}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center" style={{ color: "#6B7280" }} >
                    Nema podataka
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

export default ZopBowidoPage