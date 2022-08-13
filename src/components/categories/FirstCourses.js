import { useSelector } from "react-redux"
import Goods from "./modules/goods"
import "./categories.css"


const FirstCourses = ()=> {

    const courses = useSelector( state => state.firstCourses)

    return (
        <div className="categories">
            {courses.map( el => <Goods key={el.id} props={el}/>)}
        </div>
    )
}

export default FirstCourses