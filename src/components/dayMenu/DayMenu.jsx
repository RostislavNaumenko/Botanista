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
            <div className='menu'>
                <div className='menu-subhead'>
                    <img src={BlobTitle} alt="Dish Label" className='menu-subhead-img' />
                    <div className='menu-subhead-text'>
                        Sweet Side of Life
                    </div>
                </div>

                <div className='menu-dish'>
                    <div className='menu-dish-title'>
                        <div className='menu-dish-title-text'>
                            Vanilla Super Hero Bowl
                        </div>
                        <img src={Glutenfrei} alt='Dish Title' className='menu-dish-title-img' />
                        <img src={LowCal} alt='Dish Title' className='menu-dish-title-img' />
                        <img src={HighProtein} alt='Dish Title' className='menu-dish-title-img' />
                        <img src={LowCarb} alt='Dish Title' className='menu-dish-title-img' />

                    </div>
                    <div className='menu-dish-price'>
                        7.9€
                    </div>
                    <div className='menu-dish-components'>
                        Protein-rich vanilla-creme with homemade, sugar-free granola & seasonal fruits
                    </div>
                    <div className='menu-dish-edition' >
                        <div className='menu-dish-edition-title'>
                            Botanista Edition +3€
                        </div>
                        <div className='menu-dish-edition-components'>
                            Additionally with hulled hemp seeds, homemade chia-berry-jam, goji berries & banana
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default DayMenu;
