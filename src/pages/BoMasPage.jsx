import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ViljuskarComponent from "../components/ViljuskarComponent";

function BoMasPage() {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors
  const tableRef = useRef();

  // Fetch workers from the API
  const fetchBowidoAPI = async () => {
    try {
      const response = await axios.get("http://localhost:8080/bowidoApi");
      const filteredWorkers = response.data.workers.filter((worker) => worker.mas);
      setWorkers(filteredWorkers);
      setLoading(false); // Stop loading when data is fetched
    } catch (error) {
      setError("Error fetching data. Please try again later.");
      setLoading(false);
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchBowidoAPI();
  }, []);

  // Handle print functionality
  const handlePrint = () => {
    const printContent = tableRef.current.innerHTML; // Capture the table content
    const originalContent = document.body.innerHTML; // Save the original content

    document.body.innerHTML = printContent; // Set table as the only content for printing
    window.print(); // Trigger print dialog
    document.body.innerHTML = originalContent; // Restore original content after printing
  };

  return (
    <div>
      <ViljuskarComponent />

      {/* Print Button */}
      <div className="container mx-auto flex justify-end print:hidden">
        <button
          onClick={handlePrint}
          className="hover:underline border-gray-600 border-2 rounded-lg px-5 py-3 mr-10 font-bold mb-10 mt-10"
        >
          Print
        </button>
      </div>

      {/* Table with loading and error handling */}
      <div ref={tableRef} className="container mx-auto flex flex-col lg:flex-row gap-6 print:block">
        {loading ? (
          <div className="text-center">Loading...</div> // Show loading indicator
        ) : error ? (
          <div className="text-center text-red-500">{error}</div> // Show error message
        ) : workers.length === 0 ? (
          <div className="text-center">No workers found with mas machine.</div> // No data message
        ) : (
          <TableContainer component={Paper} className="w-full lg:w-[70%] shadow-md">
            <Table sx={{ minWidth: 650 }} aria-label="Workers Table">
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
                    Mašina
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {workers.map((worker, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{worker.name}</TableCell>
                    <TableCell align="center">{worker.lastName}</TableCell>
                    <TableCell align="center">{worker.workPlace}</TableCell>
                    <TableCell align="center">{worker.mas}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </div>
  );
}

export default BoMasPage;
