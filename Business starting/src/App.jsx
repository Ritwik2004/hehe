import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar.component.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* Navigation bar */}
        <Navbar/>

      </div>
      <div>
        {/* Main body */}
      </div>
      <div>
        {/* footer */}
      </div>
    </>
  )
}

export default App
