import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav>
        <ul>
            <li>
                <Link to="/">Accueil</Link>
            </li>
            <li>
                <Link to="/cinemas">Cinémas</Link>
            </li>
            <li>
                <Link to="/movies">Liste de films</Link>
            </li>
            <li>
                <Link to="/movies/add">Ajouter un film</Link>
            </li>
        </ul>
        </nav>
    );
}

export default NavBar;