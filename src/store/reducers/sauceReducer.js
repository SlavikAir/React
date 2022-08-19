import f1 from "./../../goodsImg/sauce/1.jpg"
import f2 from "./../../goodsImg/sauce/2.jpg"
import f3 from "./../../goodsImg/sauce/3.jpg"
import f4 from "./../../goodsImg/sauce/4.jpg"
import f5 from "./../../goodsImg/sauce/5.jpg"
import { v4 as uuidv4 } from 'uuid';




let defaultState = [
    {id:uuidv4(),name:"Дуже гострий соус", price: 30, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f1},
    {id:uuidv4(),name:"Фірмовий соус до шашлику", price: 30, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f2},
    {id:uuidv4(),name:"Сацебелі", price: 35, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f3},
    {id:uuidv4(),name:"Сирний соус", price: 60, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f4},
    {id:uuidv4(),name:"Соус до риби", price: 60, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f5},
]

const sauceReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "ADD_SAUCE":
            return state

        default :
            return state
    }
}

export default sauceReducer