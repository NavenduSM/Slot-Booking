import React, { useState, useContext } from 'react'
import { SlotsContext } from '../App'
import { useNavigate } from 'react-router-dom'

const Add = () => {
    const { slots, setSlots } = useContext(SlotsContext)
    const navigate = useNavigate()

    const [data, setdata] = useState({
        id: '',
        time: "",
        date: "",
        isBooked: false
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const newSlot = {
            id: slots.length + 1,
            time: data.time,
            date: data.date,
            isBooked: false
        }
        setdata({
            id: '',
            time: "",
            date: "",
            isBooked: false
        })
        setSlots(prevSlots => [...prevSlots, newSlot])
        navigate('/')
    }
  return (
    <div className='flex flex-col  justify-center items-center m-30'>
         <h1 className='text-2xl font-bold mb-4 '>Add Slot</h1>
         <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center border p-5 gap-5 w-[50%] rounded-xl border-gray-500 shadow-md'>
            <div className='mb-4 w-[50%]'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='time'>Time</label>
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='time' type='text' placeholder='Enter time' 
                onChange={e => setdata({...data, time: e.target.value})} />
            </div>
            <div className='mb-4 w-[50%]'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='date'>Date</label>
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='date' type='text' placeholder='Enter date'
                onChange={e => setdata({...data, date: e.target.value})} />
            </div>
            
            <button className='bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>Add Slot</button>
         </form>
    </div>
  )
}

export default Add
