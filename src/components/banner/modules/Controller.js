import "./modules.css"
import up from '../../../sliderImg/u.png'
import d from '../../../sliderImg/d.png'

const Controller = ({inc, dec}) => {
    return (
        <div className="controller">
            <div className="controller-item">
                <div  onClick={()=>inc()}>
                    <img className="arrow" alt="#" src={up} />
                </div>
                <span>спробуй</span>
                <span>різне</span>
                <div  onClick={()=>dec()}>
                    <img  className="arrow" alt="#" src={d} />
                </div>
            </div>
        </div>
    )
}
export default Controller