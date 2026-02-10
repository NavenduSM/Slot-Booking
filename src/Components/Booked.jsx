import React, { useContext } from 'react'
import { SlotsContext } from '../App'

const Booked = () => {
  const { slots, setSlots } = useContext(SlotsContext)
  
  return (
    <div className='p-8'>
        <div>
            <h1 className='text-2xl font-bold mb-4'>Booked Slots</h1>

        </div>
        <div className='flex  gap-5'>
            {slots && slots.filter(slot => slot.isBooked).map((slot) => {
                return (
                    <div key={slot.id} className='bg-gray-200 shadow-md w-100 justify-center items-center flex flex-col gap-3 p-5 rounded'>
                        <h1>{slot.time}</h1>
                        <p>{slot.date}</p>
                        <button className={`bg-red-500 cursor-pointer text-white px-4 py-2 rounded`} onClick={() => {
                            setSlots(prevSlots => 
                                prevSlots.map(s => 
                                    s.id === slot.id ? {...s, isBooked: false} : s
                                )
                            )
                        }}>Cancel</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Booked
