import React from 'react';
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'
const AddItem = ({newItem, setNewItem, handleSubmit}) => {

  const inputref = useRef()

  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItem'>Add Item</label>
        <input autoFocus type="text" ref={inputref} id='addItem' placeholder='Add Item' required 
        value={newItem} onChange={(e)=> setNewItem(e.target.value)}/>
        <button type='submit' onClick={() => inputref.current.focus()} aria-label='Add Item'><FaPlus /></button>
    </form>
  )
}

export default AddItem