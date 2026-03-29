import { Outlet } from 'react-router-dom'
import NavBarComponent from './components/NavBarComponent'
import FooterComponent from './components/FooterComponent'
import axios from 'axios'
import { useEffect } from 'react'
function App() {
  return (
    <div>
      <NavBarComponent />
      <Outlet />
      <FooterComponent />
    </div>
  )
}

export default App
