import React from "react"
import './app.scss'
import Layout from "./components/layout/Layout.jsx";
import HomePage from "./components/homePage/HomePage.jsx"
import FoodAndDrinks from "./components/foodAndDrinks/FoodAndDrinks.jsx";
import DayMenu from "./components/dayMenu/DayMenu.jsx";
import { Route, Routes } from "react-router-dom";


function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="food-and-drinks" element={<FoodAndDrinks />} />
                    <Route path="day-menu" element={<DayMenu />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App