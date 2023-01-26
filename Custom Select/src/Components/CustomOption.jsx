import React from 'react'
import '../Styling/CustomOption.css'

export default function CustomOption({id,name,value,label}) {
  return (
    <div className='option-container'>
        <input 
        type="checkbox" 
        id={id}
        name={name}
        value={value}
        />
        <label 
        htmlFor={name}>
            {label}
        </label>
    </div>
  )
}

