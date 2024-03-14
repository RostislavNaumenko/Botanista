import './layout.scss';

import logo from '../../resources/img/HeaderLogo.png';
import arrowDown from '../../resources/img/arrow_down.png'
import instLogo from '../../resources/img/InstagramBlackLine.png'
import React from "react";
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='app'>
            <div className='app-header'>
                <div className='app-header-sections'>
                    <Link className='app-header-sections-list'>About us</Link>
                    <Link to="/food-and-drinks" className='app-header-sections-list'>
                        Food & Drinks
                    </Link>
                    <div className='app-header-sections-event'>
                        Events
                        <img className='app-header-sections-arrow' src={arrowDown} alt='' />
                        <div className='app-header-event-dropdown'>
                            <Link className='app-header-sections-list'>Activity</Link>
                            <Link className='app-header-sections-list'>New Talents</Link>
                            <Link className='app-header-sections-list'>Balance</Link>
                        </div>
                    </div>
                    <div className='app-header-sections-more' >
                        More
                        <img className='app-header-sections-arrow' src={arrowDown} alt='' />
                        <div className='app-header-more-dropdown'>
                            {/* // TODO: Rewrite using array of objects (better in a different file) */}
                            {/* {arrayOfLinks.map((link) => <Link class></Link>)} */}
                            <Link className='app-header-sections-list'>Working Hours</Link>
                            <Link className='app-header-sections-list'>Contacts</Link>
                            <Link className='app-header-sections-list'>Reviews</Link>
                            <Link className='app-header-sections-list'>Jobs</Link>
                        </div>
                    </div>
                </div>


                <div className='app-header-logo'>
                    <Link to="/">
                        <img className='app-header-logo-img' src={logo} alt='' />
                    </Link>
                </div>

                <div className='app-header-links'>
                    <div className='app-header-links-reservation'>
                        Reservation & Vouchers
                    </div>
                    <img className='app-header-links-inst' src={instLogo} alt='' />
                </div>

            </div>
            <Outlet />
        </div>
    );
};

export default Layout;    