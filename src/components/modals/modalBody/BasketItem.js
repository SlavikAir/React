import { useState } from "react"
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import "./modalBody.css"


const BasketItem = ({props:{id,name,price,}}) => {

    const [count, setCount] = useState(1)

    let dispatch = useDispatch();

    let handDelete = ()=> dispatch({type:"DELETE",id})

    return (
        <div className="basket-item">
            <span className="basket-item--text">{name}</span>
            <span className="basket-item--text">Ціна : {price}</span>
            <input style={{width: "30px"}} 
                            type="number" 
                            value={count} 
                            onChange={(e)=>setCount(e.target.value)}/>
            <button onClick={handDelete}>delete</button>
        </div>
    )
}

export default BasketItem