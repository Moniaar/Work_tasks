import { useState } from 'react'
import design from './assets/design1.png'
import './App.css'
import Navbar from '../src/pages/Navbar.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div>
        <img src={design} className="logo" alt="My website" />
      </div>
      <h1>Coming Soon ...</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
