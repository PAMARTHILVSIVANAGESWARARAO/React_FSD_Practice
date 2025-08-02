import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
// import ButtonGr from './components/Button.jsx'
import ButtonGroup from './components/Button.jsx'
import Car from './components/Car.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Navbar />

    <App />
    <Car brand="Ford" />
    <Car brand="BMW" />
    <Car brand="Audi" />

    {/* <ButtonGroup /> */}

  </StrictMode>,
)
