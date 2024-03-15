import React from 'react';
import "./dayMenu.scss";
import BlobTitle from "../../resources/img/Blob_title.png";
import Glutenfrei from "../../resources/img/Glutenfrei.png";
import HighProtein from "../../resources/img/High_protein.png";
import LowCal from "../../resources/img/Low_cal.png";
import LowCarb from "../../resources/img/Low_carb.png";
import HeaderSection from "../menu/headerSection/HeaderSection";

const DayMenu = () => {
    return (
        <>
            <HeaderSection />
            <div className='day-menu'>
                <div className='subhead'>
                    <img src={BlobTitle} alt="Dish Label" className='subhead-img' />
                    <div className='subhead-title'>
                        Sweet Side of Life
                    </div>
                </div>

                <div className='dish'>
                    <div className='dish-title'>
                        <div className='dish-title-text'>
                            Vanilla Super Hero Bowl
                        </div>
                        <img src={Glutenfrei} alt='Dish Title' className='dish-title-img' />
                        <img src={LowCal} alt='Dish Title' className='dish-title-img' />
                        <img src={HighProtein} alt='Dish Title' className='dish-title-img' />
                        <img src={LowCarb} alt='Dish Title' className='dish-title-img' />

                    </div>
                    <div className='dish-price'>
                        7.9€
                    </div>
                    <div className='dish-components'>
                        Protein-rich vanilla-creme with homemade, sugar-free granola & seasonal fruits
                    </div>
                    <div className='dish-edition' >
                        <div className='dish-edition-title'>
                            Botanista Edition +3€
                        </div>
                        <div className='dish-edition-components'>
                            Additionally with hulled hemp seeds, homemade chia-berry-jam, goji berries & banana
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default DayMenu;
