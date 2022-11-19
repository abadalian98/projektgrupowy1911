import "../styles/NavLeft.css";

const NavLeft = () => {
    return ( <nav className="nav-left">
        <ul>
            <li>Aktualna cena</li>
            <li>Najniższa cena w danym roku</li>
            <li>Najwyższa cena w tym roku</li>
            <li>Średnia cena w tym roku</li>
            <li>Wykres</li>
        </ul>
        </nav> );
}
 
export default NavLeft;