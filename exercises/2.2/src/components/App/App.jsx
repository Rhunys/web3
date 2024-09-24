import { useState } from 'react'
import reactLogo from '/src/assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColouredBox from '/src/components/ColouredBox/ColouredBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <ColouredBox />
        <ColouredBox />
        <ColouredBox />
      </div>
    </>
  )
}

export default App
