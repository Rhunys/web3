import './App.css'
import AddOpinion from 'components/AddOpinion/AddOpinion'
import OpinionList from 'components/OpinionList/OpinionList'

function App() {
  return (
    <>
      <OpinionList />
      <AddOpinion />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
