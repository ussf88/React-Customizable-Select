import { useState } from 'react'
import CustomSelect from './Components/CustomSelect'

function App() {

  const options=[
    {
      name: "Alerts",
      id: "alert",
      value: "alerting",
      label: "Alerts",
      checked :true
    },
    {
      name: "Devices",
      id: "devices",
      value: "Devices",
      label: "Devices",
      checked :true
    },
    {
      name: "Virus",
      id: "virus",
      value: "Virus",
      label: "Virus",
      checked :false
    },
    {
      name: "Hardware",
      id: "hardware",
      value: "Hardware",
      label: "Hardware"
    },
  ]
  const OnSelect=(optionsArray)=>{
    console.log(optionsArray);
  }
  return (
   <CustomSelect  options={options} OnSelect={OnSelect} />
  )
}

export default App
