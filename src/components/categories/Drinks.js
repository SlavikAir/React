import { useSelector } from "react-redux"
import Goods from "./modules/goods"


const Drinks = () => {

    const courses = useSelector(state => state.drinks)

    return (
        <div className="categories">
            {courses.map(el => <Goods key={el.id} props={el} />)}
        </div>

    )
}

export default Drinks