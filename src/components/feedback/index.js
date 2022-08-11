import "./feedback.css"
import LeftItem from "./modules/LeftItem";
import RightItem from "./modules/RightItem";

const Feedback = () => {
    return (
        <div className="feedback">
            <div className="feedback-items">
                <RightItem text="Чудове місце для посиденьок, для туристів, смачне м'ясо, рибка, м'ясо м'яке, стейки чудові. Можна просмажити міні, мідл, і сильно. Є смачний чай," />
                <LeftItem text="Прийшли компанією і почули від офіціантки Іванки про пропозицію Безлімітний сет або як ми собі назвали скуштуй усе, якщо зможеш- ОЧІ ЗАГОРІЛИСЬ" />
                <RightItem text="Шефу честь і похвала!👏 М'ясо наскільки смачне, що напевно вегетаріанці, скуштувавши Ваші шедеври були б постійними клієнтами ресторану.🤗 Всі інші страви" />
                <LeftItem text="Заклад доволі великий, для любителів м'яса саме те, основні страви присутні. приємна чача, є крафтове пиво. щодо шашликів то потрібно уточнювати з якої" />
                <RightItem text="Рекомендую! Лечо та грильовані овочі - то є гарстрономічний екстаз! Обов'язково спробуйте хачапурі по-аджарськи та гранатове вино." />
                <LeftItem text="Відвідали сьогодні з хлопцем вперше цей заклад. Безліміт м'яса дуже сподобався, (особисто мені ананас-чілі настільки сподобався що 3-чі замовляла)" />
            </div>
        </div>
    )
}
export default Feedback;