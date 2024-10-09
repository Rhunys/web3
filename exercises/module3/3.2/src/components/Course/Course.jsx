import Header from 'components/Course/Header/Header.jsx'
import Content from 'components/Course/Content/Content.jsx'

const Course = ({course}) => {
    return (
      <div>
        <Header course={course.name}/>
        <Content parts={course.parts}/>
      </div>
    )
}

export default Course