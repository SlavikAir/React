import f1 from "./../../goodsImg/first/1.jpg"
import f2 from "./../../goodsImg/first/2.jpg"
import f3 from "./../../goodsImg/first/3.jpg"
import f4 from "./../../goodsImg/first/4.jpg"
import f5 from "./../../goodsImg/first/5.jpg"
import f6 from "./../../goodsImg/first/6.jpg"
import { v4 as uuidv4 } from 'uuid';

let defaultStore = [
    {id:uuidv4(),name:"Справжній Український Борщь", price: 50, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f1},
    {id:uuidv4(),name:"Дуже Смачна Окрошка", price: 40, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f2},
    {id:uuidv4(),name:"Гороховій Суп з фрикодельками", price: 35, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f3},
    {id:uuidv4(),name:"Солянка з найсвежишим мьясом", price: 60, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f4},
    {id:uuidv4(),name:"Смачьнючий Свекловичник", price: 60, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f5},
    {id:uuidv4(),name:"Суп Харчо", price: 60, description: "ми готовимо з любовью до вас, всі продукти най свіжіши та відбірні", img:f6}
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