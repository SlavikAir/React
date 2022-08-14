import { useSelector } from "react-redux"
import Goods from "./modules/goods"


const Fish = () => {

    const courses = useSelector(state => state.fish)

    return (
        <div className="categories">
            {courses.map(el => <Goods key={el.id} props={el} />)}
        </div>

    )
}

export default Fish