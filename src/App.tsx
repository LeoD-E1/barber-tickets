import { useState } from 'react'
import './App.css'
import ToggleButton from './components/ToggleButton/ToggleButton'
import Slider from './components/Slider/Slider'

function App() {

  const [open, setOpen] = useState<boolean>(false)

  const changeValueStatus = (status: boolean) =>
    setOpen(status)

  return (
    <>
      <ToggleButton status={open} changeStatus={changeValueStatus}/>
      <Slider />
    </> 
  )
}

export default App
