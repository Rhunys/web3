
import './App.css'
import BadButton from 'components/Buttons/BadButton.jsx'
import GoodButton from 'components/Buttons/GoodButton.jsx'
import OkButton from 'components/Buttons/OkButton.jsx'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <GoodButton />
        <OkButton />
        <BadButton />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
