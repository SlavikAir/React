import { NavLink } from "react-router-dom";
import './modules.css';

const NavItem = (props) => {
    return (
        <NavLink className="nav-link" to={props.road}>{props.name}</NavLink>
    )
}

export default NavItem