// I used "useState" to manage the open/close state of the navbar

import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import Projects from "./Projects"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showProjects, setShowProjects] = useState(false)

  const navigate = useNavigate()

  return (
    <>
    <nav className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
      {!showProjects && (
        <>
          {/* Button to toggle the menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-lg px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition mb-4"
          >
            {isOpen ? "Close Menu" : "Open Menu"}
          </button>

          {/* open me button logic */}
          {isOpen && (
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => {
                    setIsOpen(false)
                    setShowProjects(true)
                  }}
                  className="text-blue-700 hover:underline text-xl"
                >
                  Open Me!
                </button>
              </li>
              <li>
                <Link
                  to="https://github.com/Moniaar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline text-xl"
                >
                  Contact
                </Link>
                <br />
                <Link to="/Projects"
                >
                  Projects
                </Link>
              </li>
            </ul>
          )}
        </>
      )}

      {showProjects && (
        <div className="space-y-4">
          <p className="text-xl font-semibold">Projects are going to be live in couple of days!</p>
          <button
            onClick={() => {
              setShowProjects(false)
              // Go back to home when pressed
              navigate("/")
            }}
            className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
          >
            Go Back Home
          </button>
        </div>
      )}
    </nav>
    </>
  )
}
