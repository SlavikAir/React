import "./ui.css"


const MyButton = ({name, ...props}) => {
    return (
        <button className={`my-button ${props.style}`} onClick={props.onClick}>{name}</button>
    )
}
export default MyButton