import "./slider.css";
import { sliderImg } from "./modules/sliderImg";
import SliderTitle from "./modules/SliderTitle";
import Indikator from "./modules/Indikator";
import { useEffect, useState } from "react";

const Slider = () => {

    const [count, setCount] = useState(0);
    const [index, setIndex] = useState();


   

    useEffect ( () => {
        if( !index ) {
            const intervalIndex = setInterval(() => {
                setCount( (count) =>  {
                    if (count === sliderImg.length - 1) {
                        return 0
                     } else {
                        return +1
                     }
                })
            }, 2000)
            setIndex(intervalIndex)
        }
        return ()=> clearInterval(index)
    } , [index])


    return (
        <div className="slider">
            <div className="slider-items">
                <img className="slider-img" alt="#" src={sliderImg[count]} />
                <SliderTitle title="Най Улюблинише " />
                <Indikator count = {count}/>
            </div>
        </div>
    )
}

export default Slider 