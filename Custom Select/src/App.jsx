import { useState } from 'react'
import CustomSelect from './Components/CustomSelect'

function App() {

  const options=[
    {
      name: "Alerts",
      id: "alert01",
      value: "alerting",
      label: "Alerts"
    },
    {
      name: "Alerts",
      id: "alert01",
      value: "alerting",
      label: "Alerts"
    },
    {
      name: "Alerts",
      id: "alert01",
      value: "alerting",
      label: "Alerts"
    },
    {
      name: "Alerts",
      id: "alert01",
      value: "alerting",
      label: "Alerts"
    },
  ]
  return (
   <CustomSelect  options={options}/>
  )
}

export default App
