import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//pages
import HomePage from './pages/HomePage'
import AparatPage from './pages/AparatPage'
import PrvaPomocPage from './pages/PrvaPomocPage'
import ReportsObukaPage from './pages/ReportsObukaPage'
import ReportsPovredaPage from './pages/ReportsPovredaPage'
import LbObukaPage from './pages/LbObukaPage'
import BowidoObukaPage from './pages/BowidoObukaPage'
import AlObukaPage from './pages/AlObukaPage'
import LbPovredaPage from './pages/LbPovredaPage'
import BowidoPovredaPage from './pages/BowidoPovredaPage'
import AlPovredaPage from './pages/AlPovredaPage'
import LbProfileNoObuka from './pages/LbProfileNoObuka'
import BowidoNoObuka from './pages/BowidoNoObuka'
import AlBowidoNoObuka from './pages/AlBowidoNoObuka'
import ZopLbprofilePage from './pages/ZopLbprofilePage'
import ZopAlBowidoPage from './pages/ZopAlBowidoPage'
import ZopBowidoPage from './pages/ZopBowidoPage'
import LbMasPage from './pages/LbMasPage'
import BoMasPage from './pages/BoMasPage'
import AlMasPage from './pages/AlMasPage'
import LbfirstAidPage from './pages/LbFirstAidPage'
import BoFirstAidPage from './pages/BoFirstAidPage'
import HelpPage from './pages/HelpPage'
import PpBoPage from './pages/PpBoPage.jsx'
import PpLbPage from './pages/PpLbPage.jsx'
import AddPovredaPage from './pages/AddPovredaPage'
import AddLbPage from './pages/AddLbPage'
import AddBoPage from './pages/AddBoPage'
import AddNewWorker from './pages/AddNewWorker'
import HelthPage from './pages/HelthPage.jsx'
import UpdatePage from './pages/UpdatePage'
import PpAlPage from './pages/PpAlPage'

const router = createBrowserRouter([
  //app router
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/aparat',
        element: <AparatPage />,
      },
      {
        path: '/prva-pomoc',
        element: <PrvaPomocPage />,
      },
      {
        path: '/reports-obuka',
        element: <ReportsObukaPage />,
      },
      {
        path: '/reports-povreda',
        element: <ReportsPovredaPage />,
      },
      {
        path: '/lbobuka',
        element: <LbObukaPage />,
      },
      {
        path: '/bowidoobuka',
        element: <BowidoObukaPage />,
      },
      {
        path: '/alobuka',
        element: <AlObukaPage />,
      },
      {
        path: '/lbpovreda',
        element: <LbPovredaPage />,
      },
      {
        path: '/bowidopovreda',
        element: <BowidoPovredaPage />,
      },
      {
        path: '/alpovreda',
        element: <AlPovredaPage />,
      },
      {
        path: '/lbprofile_no_obuka',
        element: <LbProfileNoObuka />,
      },
      {
        path: '/bowido_no_obuka',
        element: <BowidoNoObuka />,
      },
      {
        path: '/albowido_no_obuka',
        element: <AlBowidoNoObuka />,
      },
      {
        path: '/lbobukazop',
        element: <ZopLbprofilePage />,
      },
      {
        path: '/bowidoobukazop',
        element: <ZopAlBowidoPage />,
      },
      {
        path: '/alobukazop',
        element: <ZopBowidoPage />,
      },
      {
        path: '/lbmas',
        element: <LbMasPage />
      },
      {
        path: '/bowidomas',
        element: <BoMasPage />
      },
      {
        path: '/almas',
        element: <AlMasPage />
      },
      {
        path: '/lbfirstaid',
        element: <LbfirstAidPage />
      },
      {
        path: '/bofirstaid',
        element: <BoFirstAidPage />
      },
      {
        path: '/help',
        element: <HelpPage />
      },
      {
        path: '/bowidopp',
        element: <PpBoPage />
      },
      {
        path: '/lbpp',
        element: <PpLbPage />
      },
      {
        path: '/addpp',
        element: <AddBoPage />
      },
      {
        path: '/addnew',
        element: <AddLbPage />
      },
      {
        path: '/addpo',
        element: <AddPovredaPage />
        
      },
      {
        path: '/add',
        element: <AddNewWorker />
      },
      {
        path: '/addh',
        element: <HelthPage />
      },
      {
        path: 'update',
        element: <UpdatePage />
      },
      {
        path: '/alpp',
        element: <PpAlPage />
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)