import { useState } from "react";
import "./banner.css";
import Controller from "./modules/Controller";
import { mainImg } from "./modules/mainImg";
import { middleImg } from "./modules/middleImg";
import Presentation from "./modules/Presentation";


const Banner = () => {

    const [count, setCount] = useState(0)

    let inc = () => {
        if (count === mainImg.length - 1) {
            setCount(count - (mainImg.length - 1))
        } else {
            setCount(count + 1)
        }
    }
    let dec = () => {
        if (count === 0) {
            setCount(count + (mainImg.length - 1))
        } else {
            setCount(count - 1)
        }
    }

    return (
        <div className="banner">
            <div className="banner-item">
                <Presentation text="Разом дешевше" text2="страва та напій" />
                <div className='main-img'>
                    <img className='main-img-content' alt="" src={mainImg[count]} />
                </div>
                <div className='middle-img'>
                    <img className='middle-img-content' alt="" src={middleImg[count]} />
                </div>
                <Controller inc={inc} dec={dec} />
            </div>
        </div>
    )
}
export default Banner