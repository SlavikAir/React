

const MyInput = ({name, onChange, value, ...props})=> {
    return (
        <input {...props} className="my-input" value={value} onChange={onChange}></input>
    )
}

export default MyInput