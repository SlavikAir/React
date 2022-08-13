import f1 from "./../../goodsImg/meat/1.jpg"
import f2 from "./../../goodsImg/meat/2.jpg"
import f3 from "./../../goodsImg/meat/3.jpg"
import f4 from "./../../goodsImg/meat/4.jpg"
import f5 from "./../../goodsImg/meat/5.jpg"
import f6 from "./../../goodsImg/meat/6.jpg"

let defaultStore = [
    {id:"1",name:"Шашлик з куркою", price: 80, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f1},
    {id:"2",name:"Дуже сочний шмат м’яса", price: 100, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f2},
    {id:"3",name:"Курка в печі", price: 90, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f3},
    {id:"4",name:"Шашлик з свенини", price: 95, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f4},
    {id:"5",name:"М’ясний рулет", price: 100, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f5},
    {id:"6",name:"Смажені реберця", price: 110, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f6}
]




const meatReducer = (state=defaultStore, action) => {
    switch (action.type) {
        case "ADD_MEAT":
            return state

        default :
            return state    
    }
}

export default meatReducer