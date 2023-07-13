
import './App.css'
import { Home } from "./Home/Home"
import { Routes, Route } from "react-router-dom"
import { EventPage } from './EventPage/EventPage'

function App() {
  

  return (
    <>
     
   <Routes>
    <Route path="/" element={<Home />} /> 
    <Route path="/event/:id" element={<EventPage />} />
   </Routes>
      
    </>
  )
}

export default App
