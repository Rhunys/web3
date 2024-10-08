import Part from 'components/Content/Part/Part'

const Content = (props) => {
    return (
      <div>
        <Part name={props.list[0].name} exercises={props.list[0].exercises}/>
        <Part name={props.list[1].name} exercises={props.list[1].exercises}/>
        <Part name={props.list[2].name} exercises={props.list[2].exercises}/>
      </div>
    )
}
  
export default Content