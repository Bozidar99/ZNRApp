const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// CORS konfiguracija
const corsOptions = {
    origin: "http://localhost:5173",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Helper funkcija za čitanje JSON fajlova
const readJSONFile = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, "utf8", (err, data) => {
            if (err) {
                console.error(`Error reading ${fileName}:`, err);
                reject(err);
            } else {
                try {
                    resolve(JSON.parse(data));
                } catch (parseError) {
                    console.error(`Error parsing ${fileName}:`, parseError);
                    reject(parseError);
                }
            }
        });
    });
};

// Helper funkcija za pisanje u JSON fajlove
const writeJSONFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, JSON.stringify(data, null, 4), "utf8", (err) => {
            if (err) {
                console.error(`Error writing to ${fileName}:`, err);
                reject(err);
            } else {
                resolve();
            }
        });
    });
};

// POST ruta za dodavanje novog radnika
app.post("/addWorker", async (req, res) => {
    const { fileName, worker } = req.body;

    if (!fileName || !worker) {
        res.status(400).json({ message: "Invalid data" });
        return;
    }

    try {
        const data = await readJSONFile(fileName);

        // Proveri da li postoji ključ "workers" u fajlu
        if (!data.workers || !Array.isArray(data.workers)) {
            res.status(500).json({ message: "Invalid file structure: 'workers' key missing" });
            return;
        }

        const newId = data.workers.length ? data.workers[data.workers.length - 1].id + 1 : 1;
        const newWorker = { id: newId, ...worker };
        data.workers.push(newWorker);

        await writeJSONFile(fileName, data);
        res.status(201).json({ message: "Worker added successfully", worker: newWorker });
    } catch (error) {
        console.error("Error adding worker:", error);
        res.status(500).json({ message: "Error adding worker" });
    }
});

app.post("/addFirstAid", async (req, res) => {
    const { fileName, firstAid } = req.body;

    if (!fileName || !firstAid) {
        res.status(400).json({ message: "Invalid data" });
        return;
    }

    try {
        const data = JSON.parse(fs.readFileSync(fileName, "utf8"));

        // Proveri da li postoji ključ "pomoc" u fajlu
        if (!data.pomoc || !Array.isArray(data.pomoc)) {
            res.status(500).json({ message: "Invalid file structure: 'pomoc' key missing" });
            return;
        }

        const newId = data.pomoc.length ? data.pomoc[data.pomoc.length - 1].id + 1 : 1;
        const newFirstAid = { id: newId, ...firstAid };
        data.pomoc.push(newFirstAid);

        fs.writeFileSync(fileName, JSON.stringify(data, null, 4), "utf8");
        res.status(201).json({ message: "First aid record added successfully", firstAid: newFirstAid });
    } catch (error) {
        console.error("Error adding first aid record:", error);
        res.status(500).json({ message: "Error adding first aid record" });
    }
});

app.post("/updateWorker", async (req, res) => {
    const { fileName, updatedData } = req.body;

    if (!fileName || !updatedData) {
        res.status(400).json({ message: "Invalid data" });
        return;
    }

    try {
        const data = await readJSONFile(fileName);

        // Provera da li postoji "workers" u fajlu
        if (!data.workers || !Array.isArray(data.workers)) {
            res.status(500).json({ message: "Invalid file structure: 'workers' key missing" });
            return;
        }

        // Ako je radnik nov, generišemo novi ID
        const newId = data.workers.length ? data.workers[data.workers.length - 1].id + 1 : 1;

        const newWorker = { id: newId, ...updatedData };
        data.workers.push(newWorker);

        // Upisivanje novih podataka u JSON fajl
        await writeJSONFile(fileName, data);

        res.status(201).json({ message: "Worker updated successfully", worker: newWorker });
    } catch (error) {
        console.error("Error updating worker:", error);
        res.status(500).json({ message: "Error updating worker" });
    }
});

app.post("/updateWorkerDetails", (req, res) => {
    const { fileName, id, updatedData } = req.body;
    console.log("Primljeni podaci:", req.body);

    const filePath = path.join(__dirname, fileName);
    console.log("Putanja fajla:", filePath);

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.error("Greška pri čitanju fajla:", err);
            return res.status(500).send({ message: "Greška pri čitanju fajla." });
        }

        try {
            const jsonData = JSON.parse(data);
            console.log("JSON podaci:", jsonData);

            const worker = jsonData.workers.find((worker) => worker.id === id);
            if (!worker) {
                console.error("Radnik nije pronađen");
                return res.status(404).send({ message: "Radnik nije pronađen." });
            }

            if (updatedData.date) worker.date = updatedData.date;
            if (updatedData.zop) worker.zop = updatedData.zop;
            if (updatedData.firstAid) worker.firstAid = updatedData.firstAid;
            if (updatedData.mas) worker.mas = updatedData.mas;
            if (updatedData.stat) worker.stat = updatedData.stat;

            fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
                if (err) {
                    console.error("Greška pri čuvanju podataka:", err);
                    return res.status(500).send({ message: "Greška pri čuvanju podataka." });
                }
                res.send({ message: "Podaci uspešno ažurirani." });
            });
        } catch (parseError) {
            console.error("Greška pri parsiranju JSON-a:", parseError);
            return res.status(500).send({ message: "Greška pri parsiranju JSON-a." });
        }
    });
});





app.put("/updateItem", async (req, res) => {
    const { fileName, id, updatedData } = req.body;

    if (!fileName || !id || !updatedData) {
        res.status(400).json({ message: "Invalid data" });
        return;
    }

    try {
        const data = JSON.parse(fs.readFileSync(fileName, "utf8"));

        // Proveri da li postoji ključ koji odgovara imenu fajla bez ekstenzije
        const key = fileName.split(".")[0]; // npr. 'lbpp' ili 'bopp'
        if (!data[key] || !Array.isArray(data[key])) {
            res.status(500).json({ message: `Invalid file structure: '${key}' key missing` });
            return;
        }

        // Nađi objekat koji odgovara ID-ju
        const itemIndex = data[key].findIndex((item) => item.id === id);

        if (itemIndex === -1) {
            res.status(404).json({ message: "Item not found" });
            return;
        }

        // Ažuriraj podatke
        data[key][itemIndex] = { ...data[key][itemIndex], ...updatedData };

        // Snimi ažurirani fajl
        fs.writeFileSync(fileName, JSON.stringify(data, null, 4), "utf8");

        res.status(200).json({
            message: "Item updated successfully",
            updatedItem: data[key][itemIndex],
        });
    } catch (error) {
        console.error("Error updating item:", error);
        res.status(500).json({ message: "Error updating item" });
    }
});



// GET rute za čitanje podataka
app.get("/bowidoApi", async (req, res) => {
    try {
        const data = await readJSONFile("bowido.json");
        res.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Error fetching data" });
    }
});

app.get("/lbprofileApi", async (req, res) => {
    try {
        const data = await readJSONFile("lbprofile.json");
        res.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Error fetching data" });
    }
});

app.get("/albowidoApi", async (req, res) => {
    try {
        const data = await readJSONFile("albowido.json");
        res.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Error fetching data" });
    }
});

app.get("/povredelbApi", async (req, res) => {
    try {
        const data = await readJSONFile("povredelb.json");
        res.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Error fetching data" });
    }
});

app.get("/povredebowidoApi", async (req, res) => {
    try {
        const data = await readJSONFile("povredebowido.json");
        res.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Error fetching data" });
    }
});

app.get("/povredealApi", async (req, res) => {
    try {
        const data = await readJSONFile("povredeal.json");
        res.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Error fetching data" });
    }
});

app.get("/firstaidApi", async (req, res) => {
    try {
        const data = await readJSONFile("firstaid.json");
        res.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Error fetching data" });
    }
});

app.get("/boppApi", async (req, res) => {
    try {
        const data = await readJSONFile("bopp.json");
        res.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Error fetching data" });
    }
});

app.get("/lbppApi", async (req, res) => {
    try {
        const data = await readJSONFile("lbpp.json");
        res.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Error fetching data" });
    }
});

app.get("/alppApi", async (req, res) => {
    try {
        const data = await readJSONFile("alpp.json");
        res.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Error fetching data" });
    }
});

// Start servera
const PORT = 8080; // Možete koristiti jedan port za sve
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
