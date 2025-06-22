// I used "useState" to manage the open/close state of the navbar

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
          <li><a href="#">Home</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      )}
    </nav>
  )
}
