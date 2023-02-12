import { useState } from 'react'
import CustomSelect from './Components/CustomSelect'

function App() {

  const options=[
    {
      name: "Alerts",
      id: "alert01",
      value: "alerting",
      label: "Alerts",
      checked :true
    },
    {
      name: "Alerts",
      id: "alert02",
      value: "alerting",
      label: "Alerts",
      checked :true
    },
    {
      name: "Alerts",
      id: "alert03",
      value: "alerting",
      label: "Alerts",
      checked :false
    },
    {
      name: "Alerts",
      id: "alert04",
      value: "alerting",
      label: "Alerts"
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
