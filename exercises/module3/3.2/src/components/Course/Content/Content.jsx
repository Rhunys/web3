import Part from 'components/Course/Content/Part/Part'

const Content = ({parts}) => {
    return (
      <div>
        <ul>
          {parts.map(part => 
              <li key={part.id}>
                <Part name={part.name} exercises={part.exercises}/>
              </li>
          )}
        </ul>
      </div>
    )
}
  
export default Content