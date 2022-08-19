import { useState } from "react"
import "./modalBody.css"
import { useDispatch } from "react-redux"


const BasketItem = ({props:{id,name,price}}) => {

    const [count, setCount] = useState(1)

    let dispatch = useDispatch();

    let good = {id,name,price}

    const deleteGoods = () => {

        dispatch({ type: "DELETE", good})
    }


    return (
        <div className="basket-item">
            <span className="basket-item--text">{name}</span>
            <span className="basket-item--text">Ціна : {price}</span>
            <input style={{width: "30px"}} 
                            type="number" 
                            value={count} 
                            onChange={(e)=>setCount(e.target.value)}/>
            <button onClick={deleteGoods}>delete</button>
        </div>
    )
}

export default BasketItem