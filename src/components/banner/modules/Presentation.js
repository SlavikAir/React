import "./modules.css";

const Presentation = (props) => {
    return (
        <div className="presentation">
            <h2 className="h">{props.text}</h2>
            <h3 className="h">{props.text2}</h3>
            <hr />
        </div>
    )
}
export default Presentation