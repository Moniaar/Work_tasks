// I used "useState" to manage the open/close state of the navbar

import { Link } from "react-router-dom";
import { useState } from 'react'


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <button onClick={() => setIsOpen(!isOpen)} className="toggle-btn">
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button>

      {isOpen && (
        <ul className="nav-links">
        <Link to="/Projects"> Projects </Link>
        <Link to="/Contact"> Contact </Link>
        </ul>
      )}
    </nav>
  )
}
