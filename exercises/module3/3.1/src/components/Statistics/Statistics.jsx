import StatisticLine from './StatisticLine/StatisticLine'

// eslint-disable-next-line react/prop-types
const Statistics = ({good,neutral,bad}) => {
  if(good + neutral + bad === 0){
    return (
      <div>
          <h1>statistics</h1>
          <p>No feedback given</p>
      </div>
    )
  } else {
    return (
      <div>
          <h1>statistics</h1>

          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={good + neutral + bad} />
          <StatisticLine text="average" value={(good - bad) / (good + neutral + bad)} />
          <StatisticLine text="positive" value={good / (good + neutral + bad) * 100} />
      </div>
    )
  }
}

export default Statistics