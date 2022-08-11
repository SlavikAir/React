import NavItem from "./modules/NavItem"
import "./components.css"

const NavInfo = () => {
    return (
        <div className="nav-info">
            <NavItem name="home" road="/" />
            <NavItem name="about" road="/about" />
            <NavItem name="location" road="/location" />
            <NavItem name="stock" road="/stock" />
            <NavItem name="client" road="/client" />
            <NavItem name="basket" road="/basket" />
        </div>
    )
}

export default NavInfo;