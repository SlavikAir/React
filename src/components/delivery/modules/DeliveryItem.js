import "./modules.css";

const DeliveryItem = ({src,h,p}) => {
    return (
        <div className="delivery-item">
            <img alt="#" src={src} />
            <h4>{h}</h4>
            <p className="item-p">{p}</p>
        </div>
    )
}

export default DeliveryItem