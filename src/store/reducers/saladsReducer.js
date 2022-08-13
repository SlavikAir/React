import f1 from "./../../goodsImg/salads/1.jpg"
import f2 from "./../../goodsImg/salads/2.jpg"
import f3 from "./../../goodsImg/salads/3.jpg"
import f4 from "./../../goodsImg/salads/4.jpg"
import f5 from "./../../goodsImg/salads/5.jpg"




let defaultState = [
    {id:"1",name:"Оліве", price: 30, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f1},
    {id:"2",name:"Оселедець під шубою", price: 30, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f2},
    {id:"3",name:"Літній салат", price: 35, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f3},
    {id:"4",name:"З море продуктами", price: 60, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f4},
    {id:"5",name:"Греческий салат", price: 60, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f5},
]

const saladsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "ADD_SALADS":
            return state

        default :
            return state
    }
}

export default saladsReducer