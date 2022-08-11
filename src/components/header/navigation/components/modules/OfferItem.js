import { NavLink } from "react-router-dom";
import './modules.css';

const OfferItem = (props) => {
    return (
        <NavLink className="offer-link" to={props.road}>{props.name}</NavLink>
    )
}

export default OfferItem