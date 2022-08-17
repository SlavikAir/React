import { useState } from "react"
import { useDispatch } from "react-redux"
import MyButton from "../../UI/button"
import MyInput from "../../UI/input"
import './modalBody.css'




export const LoginHeader = ()=> {
    return (
        <div className="login-header">
            <h2>Login or Sign Up</h2>
        </div>
    )
}

export const LoginBody = ()=> {

    const [name , setName] = useState('')
    const [password , setPassword] = useState('')

console.log(name)
let dispatch = useDispatch()

let login = ()=> dispatch({type:"LOGIN", payload:{name:name, password:password}}) 

    return(
        <>
        <div className="login-input-block">
            < div className="login-block">
                <label>Login...</label>
                <MyInput value={name} onChange={(e)=> setName( e.target.value)}  />
            </div>
            < div className="login-block">
                <label>Password...</label>
                <MyInput type="password" value={password} onChange={(e)=> setPassword( e.target.value)} />
            </div>
        </div>
        <div className="buttom-block">
            <MyButton styleName='login-button-color' name="Увійти" onClick={login}/>
            <MyButton name="Зареєструватися"/>
        </div>
        </>
    )
}
export const LoginFooter = ()=> {
    return(
        <div className="login-footer">
            <hr />
            <p>Якщо вы авторезуетесяб вы зможите залишати відгуки на сайті</p>
        </div>
    )
}