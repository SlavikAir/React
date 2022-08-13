import f1 from "./../../goodsImg/first/1.jpg"
import f2 from "./../../goodsImg/first/2.jpg"
import f3 from "./../../goodsImg/first/3.jpg"
import f4 from "./../../goodsImg/first/4.jpg"
import f5 from "./../../goodsImg/first/5.jpg"
import f6 from "./../../goodsImg/first/6.jpg"

let defaultStore = [
    {id:"1",name:"Справжній Український Борщь", price: 50, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f1},
    {id:"2",name:"Дуже Смачна Окрошка", price: 40, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f2},
    {id:"3",name:"Гороховій Суп з фрикодельками", price: 35, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f3},
    {id:"4",name:"Солянка з найсвежишим мьясом", price: 60, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f4},
    {id:"5",name:"Смачьнючий Свекловичник", price: 60, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f5},
    {id:"6",name:"Суп Харчо", price: 60, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f6}
]




const firstCoursesReducer = (state=defaultStore, action) => {
    switch (action.type) {
        case "ADD_FIRST":
            return state

        default :
            return state    
    }
}

export default firstCoursesReducer