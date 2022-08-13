import MyButton from "../../UI/button";
import "./modules.css";



const Goods = ({ props: { id, name, price, img, description } }) => {
    return (
        <div className="goods">
            <div className="goods-img">
                <img className="img-item" src={img} alt="#" />
            </div>
            <div className="goods-info">
                <div className="goods-name">{name}</div>
                <span className="goods-price">Prise :  {price} грн.</span>
                <div className="goods-description">{description}</div>
                <MyButton dataId={id} name="Замовити" />
            </div>
        </div>
    )
}

export default Goods;