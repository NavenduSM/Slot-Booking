import React, { useContext, useState } from 'react'
import { SlotsContext } from '../App'

const Update = () => {
  const { slots, setSlots } = useContext(SlotsContext)
  const [editingSlot, setEditingSlot] = useState(null)
  const [formData, setFormData] = useState({
    time:'',
    date:''
  })

  const handleEdit = (slot) => {
    setEditingSlot(slot.id)
    setFormData({
      time: slot.time,
      date: slot.date
    })
  }

  const handleUpdate = (id) => {
    setSlots(prevSlots => 
        prevSlots.map(s => 
            s.id === id ? {...s, time: formData.time, date: formData.date} : s
        )
    )
    setEditingSlot(null)
    setFormData({
        time:'',
        date:''
    })
  }

  const handleCancel = () => {
    setEditingSlot(null)
    setFormData({
      time:'',
      date:''
    })
  }

  return (
    <div className='p-8'>
        <div>
            <h1 className='text-2xl font-bold mb-4'>Update Slots</h1>
        </div>
        <div className='gap-5 flex flex-wrap'>
            {slots && slots.map((slot) => {
                return (
                    <div key={slot.id} className='bg-gray-200 shadow-md w-100 justify-center items-center flex flex-col gap-3 p-5 rounded'>
                        <input 
                          className='border border-gray-400 rounded px-3 py-1 w-full' 
                          value={editingSlot === slot.id ? formData.time : slot.time} 
                          onChange={e => setFormData({...formData, time: e.target.value})}
                          disabled={editingSlot !== slot.id}
                        />
                        <input 
                          className='border border-gray-400 rounded px-3 py-1 w-full' 
                          value={editingSlot === slot.id ? formData.date : slot.date} 
                          onChange={e => setFormData({...formData, date: e.target.value})}
                          disabled={editingSlot !== slot.id}
                        />
                        {editingSlot === slot.id ? (
                          <div className=' flex gap-2'>
                            <button 
                              className='bg-teal-600 cursor-pointer text-white px-4 py-2 rounded flex-1 '
                              onClick={() => handleUpdate(slot.id)}
                            >
                              Save
                            </button>
                            <button 
                              className='bg-red-600 cursor-pointer text-white px-4 py-2 rounded flex-1 '
                              onClick={handleCancel}
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <button 
                            className='bg-teal-600 cursor-pointer text-white px-4 py-2 rounded  w-30'
                            onClick={() => handleEdit(slot)}
                          >
                            Edit
                          </button>
                        )}
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Update
