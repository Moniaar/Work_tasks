import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import './App.css'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <div className="pt-20 px-4">
        <Routes>
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
