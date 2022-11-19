import { Link } from "react-router-dom";
import "../styles/NavTop.css";


const NavTop = () => {
    return ( <nav className="nav-top"> 
    
        <ul>
        <li><Link to="/euro">EURO</Link></li>
        <li>DOLAR</li>
        <li>FRANK</li>
        <li>FUNT</li>
        <li><Link to="/gold">ZŁOTO</Link></li>
        <li>SREBRO</li>
        </ul>
        </nav> );
}
 
export default NavTop;