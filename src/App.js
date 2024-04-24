import React from "react"
import './app.scss'
import Header from "./components/header/Header.jsx";
import HomePage from "./components/homePage/HomePage.jsx"
import FoodAndDrinks from "./components/foodAndDrinks/FoodAndDrinks.jsx";
import DayMenu from "./components/menu/dayMenu/DayMenu.jsx";
import DishInfo from "./components/menu/dishInfo/DishInfo.jsx";
import { Route, Routes } from "react-router-dom";


function App() {
    return (
        <div className="app">
            <Header />
            <Routes>

                <Route index element={<HomePage />} />
                <Route path="/food-and-drinks" element={<FoodAndDrinks />} />
                <Route path="/day-menu" element={<DayMenu />} />
                <Route path="/dish-info" element={<DishInfo />} />
            </Routes>
        </div>
    )
}

export default App