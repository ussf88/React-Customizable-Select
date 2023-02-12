import React from 'react'
import '../Styling/CustomOption.css'
import {useState} from 'react'
export default function CustomOption({id,name,value,label,IsChecked, OnChecked}) {
    const [checked, setChecked] = useState(IsChecked);
    const OnCheck = (e)=>{
      OnChecked(!checked);
      setChecked(!checked);
    }
  return (
    <div 
    className='option-container'
    onClick={(e)=>OnCheck(e)}
    >
        <input 
        type="checkbox" 
        checked = {checked}
        onChange ={(e)=>OnCheck(e)}
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

