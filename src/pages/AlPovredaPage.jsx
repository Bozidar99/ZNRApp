import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import PovredaComponent from "../components/PovredaComponent";

// Registracija Chart.js modula
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function AlPovredaPage() {
  const [workers, setWorkers] = useState([]);

  // Fetch podaci sa API-ja
  const fetchPovredeAlAPI = async () => {
    try {
      const response = await axios.get("http://localhost:8080/povredealApi");
      setWorkers(response.data.workers);
    } catch (error) {
      console.error("Greška prilikom preuzimanja podataka:", error);
    }
  };

  useEffect(() => {
    fetchPovredeAlAPI();
  }, []);

  // Grupisanje podataka po godinama
  const getYearlyData = () => {
    const yearCounts = {};
    workers.forEach((worker) => {
      const year = new Date(worker.date).getFullYear(); // Ekstrakcija godine
      yearCounts[year] = (yearCounts[year] || 0) + 1;
    });
    return yearCounts;
  };

  const yearData = getYearlyData();

  // Priprema podataka za grafikon
  const chartData = {
    labels: Object.keys(yearData), // Godine
    datasets: [
      {
        label: "Broj povreda u godini",
        data: Object.values(yearData), // Brojevi povreda
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Broj povreda u godini",
      },
    },
    scales: {
      y: {
        ticks: {
          precision: 0, // Prikaz brojeva bez decimala
        },
      },
    },
  };

  return (
    <div className="mt-12 mb-12">
      {/* Navigacija i naslov */}
      <PovredaComponent />

      {/* Tabela */}
      <div className="container mx-auto flex flex-col lg:flex-row gap-6 mt-6">
        <TableContainer component={Paper} className="w-full lg:w-[70%] shadow-md">
          <Table sx={{ minWidth: 650 }} aria-label="Tabela povreda">
            <TableHead className="bg-gray-800">
              <TableRow>
                <TableCell style={{ color: "white" }} align="center">
                  Ime
                </TableCell>
                <TableCell style={{ color: "white" }} align="center">
                  Prezime
                </TableCell>
                <TableCell style={{ color: "white" }} align="center">
                  Radno mesto
                </TableCell>
                <TableCell style={{ color: "white" }} align="center">
                  Datum
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
                    <TableCell align="center">{worker.date}</TableCell>
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

      {/* Grafikon */}
      <div className="container mx-auto mt-10">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}

export default AlPovredaPage;
