import './header.scss';

import logo from '../../resources/img/HeaderLogo.png';
import arrowDown from '../../resources/img/arrow_down.png'
import instLogo from '../../resources/img/InstagramBlackLine.png'
import React from "react";
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='header'>
            <div className='header-sections'>
                <Link className='header-sections-list'>About us</Link>
                <Link to="/food-and-drinks" className='header-sections-list'>
                    Food & Drinks
                </Link>
                <div className='header-sections-event'>
                    Events
                    <img className='header-sections-arrow' src={arrowDown} alt='' />
                    <div className='header-event-dropdown'>
                        <Link className='header-sections-list'>Activity</Link>
                        <Link className='header-sections-list'>New Talents</Link>
                        <Link className='header-sections-list'>Balance</Link>
                    </div>
                </div>
                <div className='header-sections-more' >
                    More
                    <img className='header-sections-arrow' src={arrowDown} alt='' />
                    <div className='header-more-dropdown'>
                        {/* // TODO: Rewrite using array of objects (better in a different file) */}
                        {/* {arrayOfLinks.map((link) => <Link class></Link>)} */}
                        <Link className='header-sections-list'>Working Hours</Link>
                        <Link className='header-sections-list'>Contacts</Link>
                        <Link className='header-sections-list'>Reviews</Link>
                        <Link className='header-sections-list'>Jobs</Link>
                    </div>
                </div>
            </div>


            <div className='header-logo'>
                <Link to="/">
                    <img className='header-logo-img' src={logo} alt='' />
                </Link>
            </div>

            <div className='header-links'>
                <div className='header-links-reservation'>
                    Reservation & Vouchers
                </div>
                <img className='header-links-inst' src={instLogo} alt='' />
            </div>
            <Outlet />
        </div>

    );
};


export default Layout;    