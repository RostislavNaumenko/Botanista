import React from 'react';
import './foodAndDrinks.scss'
import { Link } from 'react-router-dom';
import Menu1 from "../../resources/img/Menu_1.jpg";
import Menu2 from "../../resources/img/Menu_2.jpg";
import Menu3 from "../../resources/img/Menu_3.jpg";
import Menu4 from "../../resources/img/Menu_4.jpg";

const FoodAndDrinks = () => {
    return (

        <div className='foodAndDrinks'>
            <div className='title'>
                Menu
            </div>
            <div className='sections'>
                <div className='sections-photos'>
                    <Link to={"/day-menu"}><img src={Menu1} /></Link>
                </div>
                <div className='sections-photos'>
                    <Link><img src={Menu2} /></Link>
                </div>
                <div className='sections-photos'>
                    <Link><img src={Menu3} /></Link>
                </div>
                <div className='fsections-photos'>
                    <Link><img src={Menu4} /></Link>
                </div>
                <div className='sections-descriptions'> Mo - Fr <br /> 9:00 - 15:00</div>
                <div className='sections-descriptions'> Mo - So <br /> ab 18:00</div>
                <div className='sections-descriptions'> Sa - So <br /> 9:00 - 17:00</div>
                <div className='sections-descriptions'> Every Day <br /> ab 9:00 </div>

            </div>
        </div>

    );
}

export default FoodAndDrinks;
