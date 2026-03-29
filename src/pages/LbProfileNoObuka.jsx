import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const BowidoNoObukaPage = () => {
  const [workers, setWorkers] = useState([]);

  const fetchLbProfileAPI = async () => {
    try {
      const response = await axios.get("http://localhost:8080/lbprofileApi");
      const filteredWorkers = response.data.workers.filter((worker) => {
        const date = worker.date ? new Date(worker.date) : null;
        const threeYearsAgo = new Date();
        threeYearsAgo.setFullYear(threeYearsAgo.getFullYear() - 3);
        return !date || date <= threeYearsAgo;
      });
      setWorkers(filteredWorkers);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchLbProfileAPI();
  }, []);

  return (
    <div className="mt-12 mb-12">
      {/* Heading */}
      <div className="container mx-auto text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-700">Radnici Bez Obuke</h1>
        <p className="text-gray-500">
          Lista radnika koji nisu prošli obuku ili je poslednje obuka bila prije 3 godine.
        </p>
      </div>

      {/* Table Container */}
      <div className="container mx-auto flex justify-center">
        <TableContainer component={Paper} className="w-full lg:w-[80%] shadow-md">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            {/* Table Head */}
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
                <TableCell style={{ color: "white" }} align="center">Status</TableCell>
              </TableRow>
            </TableHead>

            {/* Table Body */}
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
                        color: worker.date ? "#DC2626" : "#DC2626",
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
                    Nema radnika bez obuke.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default BowidoNoObukaPage;

