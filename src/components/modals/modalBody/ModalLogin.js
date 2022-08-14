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
    return(
        <>
        <div className="login-input-block">
            < div className="login-block">
                <label>Login...</label>
                <MyInput />
            </div>
            < div className="login-block">
                <label>Password...</label>
                <MyInput />
            </div>
        </div>
        <div className="buttom-block">
            <MyButton styleName='login-button-color' name="Увійти"/>
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