import { useState } from 'react'

// To enable Routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import design from './assets/design1.png'
import Projects from './pages/Projects.tsx'
import './App.css'

//Mentioning components here
import Navbar from '../src/pages/Navbar.tsx'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* Defined routes here */}
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
