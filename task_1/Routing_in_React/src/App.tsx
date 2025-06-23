import { useState } from 'react'

// To enable Routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import design from './assets/design1.png'
import Projects from './pages/Projects.tsx'
import './App.css'

//Mentioning components here
import Navbar from '../src/pages/Navbar.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* Defined routes here */}
          <Route path="./pages/Projects" element={<Projects />} />
        </Routes>
      </Router>
      <div>
        <img src={design} className="logo" alt="My website" />
      </div>
      <h1>Coming Soon ...</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
