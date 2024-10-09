import { useState } from 'react'
import Statistics from '../Statistics/Statistics'
import Button from '../Button/Button'
import Loading from '../Loading/Loading'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 3000)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  if(loading){
    return(
      <div>
        <Loading />
      </div>
    )
  } else {
    return (
        <div>
            <h1>give feedback</h1>
    
            <Button handleClick={handleGoodClick} text="good"/>
            <Button handleClick={handleNeutralClick} text="neutral"/>
            <Button handleClick={handleBadClick} text="bad"/>
            
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
      )
  }
}

export default App