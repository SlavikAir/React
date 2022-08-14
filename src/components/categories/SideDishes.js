import { useSelector } from "react-redux"
import Goods from "./modules/goods"


const SideDishes = () => {

    const courses = useSelector(state => state.side)

    return (
        <div className="categories">
            {courses.map(el => <Goods key={el.id} props={el} />)}
        </div>

    )
}

export default SideDishes