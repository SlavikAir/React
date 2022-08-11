import { text1, text2 } from "./modules/Text";
import TextInformation from "./modules/TextInformaton";


const Information = () => {
    return (
        <div className="information">
            <TextInformation text={text1}/>
            <TextInformation text={text2}/>
        </div>
    )
}

export default Information;