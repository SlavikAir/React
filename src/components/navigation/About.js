import { variableText } from "./modules/variable"
import "./navigation.css"

const About = () => {
    return (
        <div className="navigation--item">
            <div className="navigation-content">
            <div className="navigation-information">
                    <h4 className="navigation-title">About</h4>
                    <p className="navigation-text">{variableText}</p>
                    </div>
                <div className="navigation-contact">
                    <p className="navigation-title"> Наши номери :</p>
                    <span className="navigation-contact-number">050 00 00 000</span>
                    <span className="navigation-contact-number">097 00 00 000</span>
                    <span className="navigation-contact-number">057 00 00 000</span>
                </div>
            </div>
        </div>
    )
}

export default About