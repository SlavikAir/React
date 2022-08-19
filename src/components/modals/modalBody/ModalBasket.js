// import MyButton from "../../UI/button"
// import MyInput from "../../UI/input"
import './modalBody.css'
import { useSelector } from 'react-redux/es/exports'
import BasketItem from './BasketItem'
import MyButton from '../../UI/button'
import { useDispatch } from 'react-redux'




export const BasketHeader = () => {


    return (
        <div className="login-header">
            <h2>Вітаю у вашему кошику</h2>
        </div>
    )
}

export const BasketBody = () => {

    const item = useSelector(state => Object.keys(state.basket).map(el => { return { id: el, ...state.basket[el] } }))


    return (
        <>
            {item.length > 0 ?
                <>
                    {item.map(el => <BasketItem key={el.id} props={el} />)}
                </>
                :
                <span>кошик порожній</span>
            }

        </>
    )
}
export const BasketFooter = () => {

    

    let dispatch = useDispatch();
    let handClean = () => dispatch({ type: "CLEAN" })

    return (
        <div className="login-footer">
            <hr />
            <div className='footer--items'>
                <p>Раді бачити вас ще </p>
                <MyButton name="Выдалити" onClick={handClean} />
            </div>
        </div>
    )
}