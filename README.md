# ZNRApp — Workplace Safety Management

A web application for tracking workplace safety (ZNR), training, injuries, and equipment across multiple locations.

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Routes](#routes)

---

## About

**ZNRApp** is a web application designed for tracking and managing workplace safety (ZNR) and fire protection (ZOP) training for workers across multiple locations (LB, Bowido, AL). It provides an overview of employee training, workplace injuries, first aid equipment, fire extinguishers, and hydrant inspections.

---

## Features

### 👷 Workers
- Employee records by location (LB, Bowido, AL)
- Worker profiles (`bowido.json`, `albowido.json`, `lbprofili.json`)
- Add new workers

### 🎓 Training (ZNR + ZOP)
- Track ZNR and ZOP training per worker
- Training dates, validity period, and status
- View workers with expired or missing training

### 🚑 Workplace Injuries
- Incident and injury records
- Details: date, description, worker involved
- Injury reports by location

### 🧯 Equipment & Inspections
- **First aid** — expiry dates and equipment condition
- **Fire extinguishers** — records and inspection dates
- **Hydrants** — inspection dates
- Equipment overview by location

### 📊 Reports
- Visual charts for training and injuries (Chart.js)
- Reports by location and time period

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| Vite | 8 | Build tool / dev server |
| React Router DOM | 7 | Client-side routing |
| Redux Toolkit | 2 | State management |
| MUI (Material UI) | 7 | UI components |
| Tailwind CSS | 4 | Styling |
| Chart.js + react-chartjs-2 | 4/5 | Charts and reports |
| Axios | 1 | HTTP client |
| JSON Server | 0.17 | Mock REST API |
| Express | 5 | Backend server |

---

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or newer
- npm v9 or newer

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/Bozidar99/ZNRApp.git

# 2. Navigate to the project folder
cd ZNRApp

# 3. Install dependencies
npm install
```

---

## Running the App

### Development mode

```bash
npm run dev
```

App runs at `http://localhost:5173`

### JSON Server (mock API)

```bash
npx json-server --watch bowido.json --port 3001
```

> Run JSON Server in a separate terminal to make data available.

### Production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## Project Structure

```
ZNRApp/
├── public/
├── src/
│   ├── components/
│   │   ├── NavBarComponent.jsx
│   │   └── FooterComponent.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AparatPage.jsx
│   │   ├── PrvaPomocPage.jsx
│   │   ├── ReportsObukaPage.jsx
│   │   ├── ReportsPovredaPage.jsx
│   │   ├── LbObukaPage.jsx
│   │   ├── BowidoObukaPage.jsx
│   │   ├── AlObukaPage.jsx
│   │   └── ... (other pages)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── bowido.json
├── albowido.json
├── lbprofili.json
├── package.json
└── vite.config.js
```

---

## Routes

| Route | Page | Description |
|---|---|---|
| `/` | HomePage | Home / Dashboard |
| `/aparat` | AparatPage | Fire extinguishers |
| `/prva-pomoc` | PrvaPomocPage | First aid equipment |
| `/reports-obuka` | ReportsObukaPage | Training reports |
| `/reports-povreda` | ReportsPovredaPage | Injury reports |
| `/lbobuka` | LbObukaPage | ZNR training — LB |
| `/bowidoobuka` | BowidoObukaPage | ZNR training — Bowido |
| `/alobuka` | AlObukaPage | ZNR training — AL |
| `/lbobukazop` | ZopLbprofilePage | ZOP training — LB |
| `/bowidoobukazop` | ZopAlBowidoPage | ZOP training — Bowido |
| `/alobukazop` | ZopBowidoPage | ZOP training — AL |
| `/lbpovreda` | LbPovredaPage | Injuries — LB |
| `/bowidopovreda` | BowidoPovredaPage | Injuries — Bowido |
| `/alpovreda` | AlPovredaPage | Injuries — AL |
| `/lbprofile_no_obuka` | LbProfileNoObuka | Workers without training — LB |
| `/bowido_no_obuka` | BowidoNoObuka | Workers without training — Bowido |
| `/albowido_no_obuka` | AlBowidoNoObuka | Workers without training — AL |
| `/lbmas` | LbMasPage | Machinery — LB |
| `/bowidomas` | BoMasPage | Machinery — Bowido |
| `/almas` | AlMasPage | Machinery — AL |
| `/lbfirstaid` | LbfirstAidPage | First aid — LB |
| `/bofirstaid` | BoFirstAidPage | First aid — Bowido |
| `/lbpp` | PpLbPage | Fire protection — LB |
| `/bowidopp` | PpBoPage | Fire protection — Bowido |
| `/alpp` | PpAlPage | Fire protection — AL |
| `/add` | AddNewWorker | Add new worker |
| `/addpp` | AddBoPage | Add fire protection equipment |
| `/addnew` | AddLbPage | Add new entry (LB) |
| `/addpo` | AddPovredaPage | Add injury record |
| `/addh` | HelthPage | Health records |
| `/update` | UpdatePage | Update records |
| `/help` | HelpPage | Help |

---

## Author

**Bozidar Bajovic** — [@Bozidar99](https://github.com/Bozidar99)

---

## License

ISC
