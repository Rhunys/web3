const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.name} ({props.exercises} exercises)
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.list[0].name} exercises={props.list[0].exercises}/>
      <Part name={props.list[1].name} exercises={props.list[1].exercises}/>
      <Part name={props.list[2].name} exercises={props.list[2].exercises}/>
    </div>
  )
}

const Total = props => {
  return (
    <div>
      <h3>
        Total number of exercises for this course : {props.total}
      </h3>
    </div>
  )
}

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

export default App