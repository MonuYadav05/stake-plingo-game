import { BrowserRouter, Route, Routes } from "react-router-dom"
import Game from "./pages/Game"
import Simulation from "./pages/Simulation"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/simulate" element={< Simulation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
