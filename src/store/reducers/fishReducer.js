import f1 from "./../../goodsImg/fish/1.jpg"
import f2 from "./../../goodsImg/fish/2.jpg"
import f3 from "./../../goodsImg/fish/3.jpg"
import f4 from "./../../goodsImg/fish/4.jpg"
import f5 from "./../../goodsImg/fish/5.jpg"


let defaultState =  [
    {id:"1",name:"Окунь на кострі", price: 120, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f1},
    {id:"2",name:"Лосось печений", price: 200, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f2},
    {id:"3",name:"Гарбуша на пару", price: 180, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f3},
    {id:"4",name:"Скумбрия капчена", price: 60, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f4},
    {id:"5",name:"Карась з овощами", price: 80, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f5},
]

const fishReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "FISH_ADD":
            return state

        default :
            return state    
    }
}

export default fishReducer