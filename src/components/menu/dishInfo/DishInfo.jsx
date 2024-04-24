import React from 'react'
import "./dishInfo.scss"
import Dish from "../../../resources/img/Dish.png"

const DishInfo = () => {
    return (
        <div className='dish'>
            <div className='dish-photo'>
                <img src={Dish} />
            </div>
            <div className='dish-title'>
                Vanilla Super Hero Bowl
            </div>
        </div>
    )
}

export default DishInfo;