import f1 from "./../../goodsImg/drinks/1.jpg"
import f2 from "./../../goodsImg/drinks/2.jpg"
import f3 from "./../../goodsImg/drinks/3.jpg"
import f4 from "./../../goodsImg/drinks/4.jpg"
import f5 from "./../../goodsImg/drinks/5.jpg"
import { v4 as uuidv4 } from 'uuid';



let defaultState = [
    {id:uuidv4(),name:"Пиво Світле", price: 30, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f1},
    {id:uuidv4(),name:"Пиво темне", price: 30, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f2},
    {id:uuidv4(),name:"Сідр яблучний", price: 35, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f3},
    {id:uuidv4(),name:"Вино біле", price: 60, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f4},
    {id:uuidv4(),name:"Вино червоне", price: 60, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f5},
]

const drinksReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "ADD_DRINKS":
            return state

        default :
            return state
    }
}

export default drinksReducer