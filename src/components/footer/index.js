import Information from "./components/Information";
import Network from "./components/Network";
import Numbers from "./components/Numbers";
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-items">
                <Numbers />
                <Information />
                <Network />
            </div>
        </footer>
    )
}

export default Footer;