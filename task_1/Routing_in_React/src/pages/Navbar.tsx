import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showProjects, setShowProjects] = useState(false)

  const navigate = useNavigate()

  // we will navigate to the Projects page when the user clicks on the Open Me! button
  const navItems = [
    { label: "Open Me!", action: () => { setIsOpen(false); setShowProjects(true) } },
    { label: "Contact", to: "https://github.com/Moniaar", external: true },
    { label: "Projects", to: "/Projects", external: false },
  ]

  return (
    <>
    <nav className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
      {/* If we open showprojects button */}
      {!showProjects && (
        <>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-lg px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition mb-4"
          >
            {isOpen ? "Close Menu" : "Open Menu"}
          </button>

          <div
            className={`
              ${isOpen ? "flex" : "hidden"}
              flex-col
              lg:flex
              lg:flex-row
            `}
          >
          {/* Navigation items using map, I tried to make ir responsive*/}
            {navItems.map((item, index) => (
              <div key={index} className="m-2">
                {item.action ? (
                  <button
                    onClick={item.action}
                    className="text-blue-700 hover:underline text-xl"
                  >
                    {item.label}
                  </button>
                ) : item.external ? (
                  <a
                    href={item.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline text-xl"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.to}
                    className="text-blue-700 hover:underline text-xl"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {/* if you clicked on Open Me! button and the Projects link */}
      {showProjects && (
        <div className="space-y-4">
          <p className="text-xl font-semibold">Projects are going to be live in a couple of days!</p>
          <button
            onClick={() => {
              setShowProjects(false)
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

