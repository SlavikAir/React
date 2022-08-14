import NavItem from "./modules/NavItem"
import "./components.css"
import { useState } from "react"
import Modal from "../../../modals/modals"
import { LoginBody, LoginFooter, LoginHeader } from "./../../../modals/modalBody/ModalLogin"
import { BasketBody, BasketFooter, BasketHeader } from "./../../../modals/modalBody/ModalBasket"

const NavInfo = () => {

    const [modal1, setModal1] = useState()
    const [modal2, setModal2] = useState()

    const ModalClose1 = () => setModal1(() => false)
    const modalOpen1 = () => setModal1(() => true)

    const ModalClose2 = () => setModal2(() => false)
    const modalOpen2 = () => setModal2(() => true)


    return (
        <div className="nav-info">
            <NavItem name="home" road="/" />
            <NavItem name="about" road="/about" />
            <NavItem name="location" road="/location" />
            <NavItem name="stock" road="/stock" />
            <span className="nav-info-item" onClick={modalOpen1}>login</span>
            <span className="nav-info-item" onClick={modalOpen2}>basket</span>
            <Modal
                isOpened={modal1}
                ModalClose={ModalClose1}
                header={<LoginHeader />}
                body={< LoginBody />}
                footer={< LoginFooter />}
            />
            <Modal
                isOpened={modal2}
                ModalClose={ModalClose2}
                header={<BasketHeader />}
                body={<BasketBody />}
                footer={<BasketFooter />}
            />

        </div>
    )
}

export default NavInfo;