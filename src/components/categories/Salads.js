import Goods from "./modules/goods"
import { useSelector } from "react-redux/es/exports"


const Salads = ()=> {

    const courses = useSelector( state => state.salads)

    return(
        <div className="categories">
              {courses.map( el => <Goods key={el.id} props={el}/>)}
        </div>
    )
}


export default Salads