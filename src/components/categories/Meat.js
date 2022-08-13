import { useSelector } from "react-redux/es/exports"
import Goods from "./modules/goods"

const Meat = () => {

    const courses = useSelector(state => state.meat)


    return (
        <div className="categories">
            {courses.map(el => <Goods key={el.id} props={el} />)}
        </div>

    )
}
export default Meat
