import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({slots, setSlots}) => {
  return (
    <>
        <div className='flex  bg-gray-200 justify-between items-center px-5 py-5 font-semibold text-xl'>
              <h1>Slot Booking</h1>

          <div className='flex  gap-5 '>
            <Link to="/"
              className=''
            >Available</Link>
            <Link to="/booked">Booked</Link>
            <Link to="/add">Add Slot</Link>
            <Link to="/update">Update Slot</Link>
          </div>
        </div>
    </>
  )
}

export default Navbar
