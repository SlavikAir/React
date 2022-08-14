import f1 from "./../../goodsImg/side/1.jpg"
import f2 from "./../../goodsImg/side/2.jpg"
import f3 from "./../../goodsImg/side/3.jpg"
import f4 from "./../../goodsImg/side/4.jpg"
import f5 from "./../../goodsImg/side/5.jpg"
import f6 from "./../../goodsImg/side/6.jpg"




let defaultState = [
    {id:"1",name:"Картопля по селянськи", price: 30, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f1},
    {id:"2",name:"Гречнева каша", price: 30, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f2},
    {id:"3",name:"Макарони по флотськи", price: 35, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f3},
    {id:"4",name:"Картопля смажена", price: 25, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f4},
    {id:"5",name:"Пшенична з грибами", price: 50, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f5},
    {id:"6",name:"Плов", price: 50, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f6}
]

const saidDishesReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "ADD_SAID":
            return state

        default :
            return state
    }
}

export default saidDishesReducer