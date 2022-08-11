import "./delivery.css"
import DeliveryItem from "./modules/DeliveryItem"
import clock from "./../../deliveryImg/clock.png"
import car from "./../../deliveryImg/car.png"
import cart from "./../../deliveryImg/cart.png"
import credit from "./../../deliveryImg/credit-cards.png"

const Delivery = () => {
    return (
        <div className="delivery">
            <div className="delivery-items">
                <DeliveryItem 
                                h="Час доставки з 11:00 до 21:00" 
                                p="Кожен день з понеділка по неділю. Прийом замовлень здійснюємо щодня з 11:00 до 20:30."
                                src={clock}/>
                <DeliveryItem 
                                h="Безкоштовна доставка"
                                p="Зелена зона - безкоштовно. Жовта зона - 40 грн.Помаранчева зона - 60 грн. Червона зона - 90 грн. Мінімальне замовлення - від 350 грн."
                                src={car}/>
                <DeliveryItem 
                                h="Оплата готівкою або картою"
                                p="Готівкою кур'єру при отриманні замовлення або картою на сайті (Visa, MasterCard)."
                                src={credit}/>
                <DeliveryItem 
                                h="Самовивіз -10%"
                                p="Діє знижка -10%. Замовляйте on-line, оплачуйте картою та забирайте замовлення безпосередньо з ресторану."
                                src={cart}/>
            </div>
        </div>
    )
}
export default Delivery