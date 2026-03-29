import React, { useEffect, useState } from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from 'axios';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import PovredaComponent from '../components/PovredaComponent';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BowidoPovredaPage() {

  const [workers, setWorkers] = useState([]);

  // Fetch workers data from API
  const fetchPovredeBowidoAPI = async () => {
    try {
      const response = await axios.get("http://localhost:8080/povredebowidoApi");
      setWorkers(response.data.workers);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchPovredeBowidoAPI();
  }, []);

  // Group workers by year of injury
  const getYearlyData = () => {
    const yearCounts = {};
    workers.forEach(worker => {
      if (worker.date) {
        const year = new Date(worker.date).getFullYear(); // Extract year
        if (yearCounts[year]) {
          yearCounts[year]++;
        } else {
          yearCounts[year] = 1;
        }
      }
    });
    return yearCounts;
  };

  const yearData = getYearlyData();

  // Prepare data for the chart
  const chartData = {
    labels: Object.keys(yearData), // Years
    datasets: [
      {
        label: 'Broj povreda u godini',
        data: Object.values(yearData), // Injury counts per year
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='mt-[50px] mb-[50px]'>
      <PovredaComponent />
      <div className='container mx-auto flex flex-col lg:flex-row gap-6 mt-6'>
        <TableContainer component={Paper} className='w-full lg:w-[70%] shadow-md '>
          <Table sx={{ minWidth: 650 }} aria-label="workers injuries table">
            <TableHead className='bg-gray-800'>
              <TableRow>
                <TableCell style={{ color: "white" }} align="center">Ime</TableCell>
                <TableCell style={{ color: "white" }} align="center">Prezime</TableCell>
                <TableCell style={{ color: "white" }} align="center">Radno mjesto</TableCell>
                <TableCell style={{ color: "white" }} align="center">Datum povrede</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {workers.length > 0 ? (
                workers.map((worker, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{worker.name}</TableCell>
                    <TableCell align="center">{worker.lastName}</TableCell>
                    <TableCell align="center">{worker.workPlace}</TableCell>
                    <TableCell align="center">{worker.date || "Nema podataka"}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center" style={{ color: "#6B7280" }}>
                    Nema podataka
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Chart */}
      <div className="container mx-auto mt-[30px]">
        <Bar
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Broj povreda u godini',
              },
            },
            scales: {
              y: {
                ticks: {
                  precision: 0, // Remove decimals for count
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default BowidoPovredaPage;
