import React, { useEffect, useState, useContext } from 'react'
import { SlotsContext } from '../App'

const Card = ({ slot, setSlots }) => {
    const handleBook = () => {
        if(slot.isBooked) {
            setSlots(prevSlots => 
                prevSlots.map(s => 
                    s.id === slot.id ? {...s, isBooked: false} : s
                )
            )
            return
        }
        setSlots(prevSlots => 
            prevSlots.map(s => 
                s.id === slot.id ? {...s, isBooked: true} : s
            )
        )

    }

    return (
        <div className='bg-gray-200 shadow-md w-100 justify-center items-center flex flex-col gap-3 p-5 rounded'>
            <h1>{slot.time}</h1>
            <p>{slot.date}</p>
            <button className={`${slot.isBooked ? 'bg-red-500' : 'bg-teal-600 '} cursor-pointer text-white px-4 py-2 rounded`} onClick={handleBook}>{slot.isBooked ? "Cancel" : "Book"}</button>
        </div>
    )
}

const Available = () => {
    const { slots, setSlots } = useContext(SlotsContext)
    const [availableSlots, setAvailableSlots] = useState([])
    
    useEffect(() => {
        if(slots) {
            setAvailableSlots(slots)
        }
    }, [slots])

    
  return (
    <div className='p-4'>
         <h1 className='text-2xl font-bold mb-4'> Available Slots</h1>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {availableSlots && availableSlots.map((slot) => {
                return <Card key={slot.id} slot={slot} setSlots={setSlots} />
            })}
         </div>
    </div>
  )
}

export default Available
