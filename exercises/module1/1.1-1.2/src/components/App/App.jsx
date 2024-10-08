import Content from 'components/Content/Content';
import Total from 'components/Total/Total';
import Header from 'components/Header/Header';

const App = () => {
  const cours = 'Half Stack application development'

  const parts = [
    {name : 'Fundamentals of React', exercises : 10},
    {name : 'Using props to pass data', exercises : 7},
    {name : 'State of a component', exercises : 14},
  ]

  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises;

  return (
    <div>
      <Header course ={cours}/>
      <Content list={parts}/>
      <Total total={total}/>
    </div>
  )
}

export default App;