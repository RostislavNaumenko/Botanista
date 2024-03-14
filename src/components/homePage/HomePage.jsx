import React, { useState, useEffect } from "react";
import "./homePage.scss";
import Slider_1 from "../../resources/img/Slider_4.jpg";
import Slider_2 from "../../resources/img/Slider_5.jpg";
import Slider_3 from "../../resources/img/Slider_3.jpg";
import Food from "../../resources/img/HomePage-Food.jpg";
import Drinks from "../../resources/img/HomePage-Drinks.jpg";
import Map from "../../resources/img/Map.jpg";
import { Link } from 'react-router-dom';

const HomePage = () => {

    const images = [
        Slider_1,
        Slider_2,
        Slider_3
    ];
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };

    return (
        <>
            <div className="slider" >
                <div className="slider__items">
                    <img src={images[currentSlide]} alt="Slide" />
                </div>

            </div>

            <div className="information">
                <div className="information__title">
                    <strong className="information__botanista">
                        [bo·ta·nis·ta]
                    </strong>
                    <div className="information__subtitle">
                        Café | Restaurant | Bar
                    </div>

                </div>

                <div className="information__body">
                    <p className="information__body-text">
                        A place to re-energize<br />
                        — where I can enjoy my favorite food in the healthiest way possible and have some devilish good drinks, all day long.
                        <br /><br />
                        <strong> Geschenk Gutscheine </strong>
                        erhaltet ihr bei uns vor Ort (mit Grußkarte / Verpackung) oder ganz unkompliziert unter obenstehenden Link (Reservierungen / Gutscheine).
                        <br /><br />
                        Für
                        <strong> Reservierungen großer Gruppen </strong>
                        (Geburstagsfeiern etc.) meldet Euch gern unter hello@botanista-muc.de - alle anderen Reservierungen können ganz unkompliziert über den obenstehenden Link erfolgen -
                        <strong> WIR FREUEN UNS AUF EUCH!</strong>
                    </p>
                </div>
            </div>

            <div className="menu">
                <div className="menu__photos">
                    <Link to={"/food-and-drinks"}>
                        <img src={Food} alt="Food" />
                        <img src={Drinks} alt="Drinks" />
                    </Link>
                </div>
                <div className="menu__descriptions">
                    <div className="menu__foodDescription">
                        <p className="menu__foodDescription-text">
                            Egg Shop | Sweet & Salty Bowls | Salads ....
                            {/* <br />| Pasta | Flatbreads | Desserts
                            <br />| Sugarfree Cakes |
                            <br />many vegan &  gluten-free Options */}
                        </p>
                    </div>
                    <div className="menu__drinksDescription">
                        <p className="menu__drinksDescription-text">
                            Homemade Lemonades & Juices | Coffee variations<br />
                            {/* | Homemade Wellness | Lattes &  Teas  <br />
                            | Homemade Long Drinks & Cocktails & Spritz <br />
                            | Wine & Local Beer | */}
                        </p>
                    </div>
                </div>

            </div>

            <div className="footer">
                <div className="footer__title">Botanista Café Club | München</div>
                <img src={Map} alt='Map' className="footer__map" />
            </div>

        </>


    );
}

export default HomePage;
