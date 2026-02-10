import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Booked from './Components/Booked.jsx'
import Add from './Components/Add.jsx'
import Update from './Components/Update.jsx'
import Available from './Components/Available.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<Available />} />
          <Route path="booked" element={<Booked />} />
          <Route path="add" element={<Add />} />
          <Route path="update" element={<Update />} />
        </Route>
      </Routes>
    
    </BrowserRouter>
  </StrictMode>,
)
