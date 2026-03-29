import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PrvaPomocComponent from "../components/PrvaPomocComponent";
import { FaFirstAid } from "react-icons/fa";

function LbFirstAidPage() {
  const [workers, setWorkers] = useState([]);
  const tableRef = useRef();

  // Fetch workers from the API
  const fetchLbAPI = async () => {
    try {
      const response = await axios.get("http://localhost:8080/lbprofileApi");
      // Filter workers who have first aid training
      const filteredWorkers = response.data.workers.filter((worker) => worker.firstAid);
      setWorkers(filteredWorkers);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchLbAPI();
  }, []);

  // Handle print functionality
  const handlePrint = () => {
    const printContent = tableRef.current.innerHTML; // Capture table content
    const originalContent = document.body.innerHTML; // Save original content

    document.body.innerHTML = printContent; // Set table content for printing
    window.print(); // Trigger print dialog
    document.body.innerHTML = originalContent; // Restore original content after printing
  };

  return (
    <div>
      <PrvaPomocComponent />

      {/* Print button */}
      <div className="container mx-auto flex justify-end print:hidden">
        <button
          onClick={handlePrint}
          className="hover:underline border-gray-600 border-2 rounded-lg px-5 py-3 mr-10 font-bold mb-10 mt-10"
        >
          Print
        </button>
      </div>

      {/* Table content */}
      <div ref={tableRef} className="container mx-auto flex flex-col lg:flex-row gap-6 print:block">
        <TableContainer component={Paper} className="w-full lg:w-[70%] shadow-md">
          <Table sx={{ minWidth: 650 }} aria-label="Workers table with first aid info">
            <TableHead className="bg-gray-600">
              <TableRow>
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
                  Prva pomoć
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {workers.length > 0 ? (
                workers.map((worker, index) => (
                  <TableRow key={index} hover>
                    <TableCell align="center">{worker.name}</TableCell>
                    <TableCell align="center">{worker.lastName}</TableCell>
                    <TableCell align="center">{worker.workPlace}</TableCell>
                    <TableCell align="center">
                      <div className="flex justify-center items-center">
                        {worker.firstAid ? (
                          <FaFirstAid style={{ color: "red", fontSize: "1.5em" }} />
                        ) : (
                          "No First Aid"
                        )}
                      </div>
                    </TableCell>
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
  );
}

export default LbFirstAidPage;