import React from 'react'
import { useEffect, useState, useRef } from 'react'; 
import axios from 'axios'; 
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ViljuskarComponent from '../components/ViljuskarComponent';

function LbMasPage() {

  const [workers, setWorkers] = useState([]);
  const tableRef = useRef();

  const fetchLbProfileAPI = async () => {
    try {
      const response = await axios.get("http://localhost:8080/lbprofileApi");
      // Filtriraj radnike koji imaju definisano `mas`
      const filteredWorkers = response.data.workers.filter((worker) => worker.mas);
      setWorkers(filteredWorkers);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchLbProfileAPI();
  }, []);

  const handlePrint = () => {
    const printContent = tableRef.current.innerHTML; // Dohvatite sadržaj div-a
    const originalContent = document.body.innerHTML; // Sačuvajte trenutni sadržaj stranice

    document.body.innerHTML = printContent; // Postavite samo tabelu kao sadržaj za štampu
    window.print(); // Pokrenite štampu
    document.body.innerHTML = originalContent; // Vratite originalni sadržaj
  };
  
  return (
    <div>
      <ViljuskarComponent />
      <div className='container mx-auto flex justify-end print:hidden'>
        <button 
        onClick={handlePrint} 
        className='hover:underline border-gray-600 border-2 rounded-lg px-5 py-3 mr-10 font-bold mb-10 mt-10'>Print</button>
      </div>
      <div  ref={tableRef} className='container mx-auto flex flex-col lg:flex-row gap-[20px] print:block'>
        <TableContainer component={Paper} className='w-full lg:w-[70%]'>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className='bg-gray-600'>
              <TableRow>
                <TableCell style={{ color: "white" }} align="center">Ime</TableCell>
                <TableCell style={{ color: "white" }} align="center">Prezime</TableCell>
                <TableCell style={{ color: "white" }} align="center">Radno mjesto</TableCell>
                <TableCell style={{ color: "white" }} align="center">Mašina</TableCell>
                
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
      </div>
    </div>
  )
}

export default LbMasPage