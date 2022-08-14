import { useSelector } from "react-redux"
import Goods from "./modules/goods"


const Sauce = () => {

    const courses = useSelector(state => state.sauce)

    return (
        <div className="categories">
            {courses.map(el => <Goods key={el.id} props={el} />)}
        </div>

    )
}

export default Sauce