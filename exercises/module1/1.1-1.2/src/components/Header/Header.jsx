import logo from 'components/Header/LOGO HE VINCI.png'

const Header = (props) => {
    return (
        <div>
        <img src={logo}/>
        <h1>
            {props.course}
        </h1>
        </div>
    )
}

export default Header