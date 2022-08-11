import "./modules.css"

const TextInformation = (props) => {
    return (
        <div className="text-container">
            <span className="text">{props.text}</span>
            <hr />
        </div>
    )
}
export default TextInformation;