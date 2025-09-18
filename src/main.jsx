import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Car from './components/Car.jsx';
import Button from './components/Button.jsx';
import Text from './components/Text.jsx';
import Image from './components/Image.jsx';
import Raju from './components/Raju.jsx';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/App" element={<App />} />
        <Route path="/Car" element={<Car />} />
        <Route path="/Button" element={<Button />} />
        <Route path="/Text" element={<Text />} />
        <Route path="/Image" element={<Image />} />
        
      </Routes>
    </BrowserRouter>
    
    

  </StrictMode>,
)
