import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import { createContext } from 'react'

export const SlotsContext = createContext()

function App() {


  const [slots, setSlots] = useState([{
                id: 1,
                time: "10:00 AM - 11:00 AM",
                date: "2024-06-01",
                isBooked: false
            },
            {
                id: 2,
                time: "11:00 AM - 12:00 PM",
                date: "2024-06-01",
                isBooked: true
            },
            {
                id: 3,
                time: "12:00 PM - 01:00 PM",
                date: "2024-06-01",
                isBooked: false
            },
            {
                id: 4,
                time: "01:00 PM - 02:00 PM",
                date: "2024-06-01",
                isBooked: false
            },
            {
                id: 5,
                time: "02:00 PM - 03:00 PM",
                date: "2024-06-01",
                isBooked: true
            },
            {
                id: 6,
                time: "03:00 PM - 04:00 PM",
                date: "2024-06-01",
                isBooked: false
            }
          ])

            
        
  return (
    <SlotsContext.Provider value={{ slots, setSlots }}>
      <div className=' gap-5'>
          <Navbar slots={slots} setSlots={setSlots} />
        <div>
          <Outlet />
        </div>

      </div>
    </SlotsContext.Provider>
  )
}

export default App
