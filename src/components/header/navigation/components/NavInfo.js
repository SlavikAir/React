import NavItem from "./modules/NavItem"
import "./components.css"
import { useState } from "react"
import Modal from "../../../modals/modals"
import { LoginBody, LoginFooter, LoginHeader } from "./../../../modals/modalBody/ModalLogin"

const NavInfo = () => {

    const [modal, setModal] = useState() 

    const ModalClose = () => setModal( () => false)

    const modalOpen = ()=> setModal ( ()=> true)  
    

    return (
        <div className="nav-info">
            <NavItem name="home" road="/" />
            <NavItem name="about" road="/about" />
            <NavItem name="location" road="/location" />
            <NavItem name="stock" road="/stock" />
            <span className="nav-info-item" onClick={modalOpen}>login</span>
            <NavItem name="basket" road="/basket" />
            <Modal 
                    isOpened={modal}
                    ModalClose={ModalClose}
                    header={<LoginHeader/>}
                    body={< LoginBody />}
                    footer={< LoginFooter />}
                    />
        </div>
    )
}

export default NavInfo;