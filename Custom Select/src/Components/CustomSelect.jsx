import React from 'react'
import CustomOption from './CustomOption';
import '../Styling/CustomSelect.css'
import { useState } from 'react';
export default function CustomSelect({options}) {
    const [showOptions, setShowOptions] = useState(false)

  return (
    <div className='custom-select-container'>
         <button className='select-button'
         onClick={()=>setShowOptions(!showOptions)}
         >Select
         </button>
         { showOptions &&
            <div className='options-container'>
            {options.map(e=>
                <CustomOption 
                name={e.name} 
                id={e.id}
                value={e.value}
                label={e.label} 
                />
                
            )}
            
         </div>
         }
    </div>
   
    
  )
}
